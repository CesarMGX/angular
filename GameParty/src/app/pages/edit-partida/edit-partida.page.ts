import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PartidaService } from 'src/app/services/partida.service';
import { Partida } from 'src/app/models/partida.model';

@Component({
  selector: 'app-edit-partida',
  templateUrl: './edit-partida.page.html',
  styleUrls: ['./edit-partida.page.scss'],
  standalone: false
})
export class EditPartidaPage implements OnInit {
  partida: Partida | undefined;

  constructor(
    private route: ActivatedRoute,
    private partidaService: PartidaService,
    private router: Router
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.partida = this.partidaService.getPartidaById(id);
  }
  guardarCambios() {
    if (this.partida) {
      this.partidaService.updatePartida(this.partida);
      this.router.navigate(['/tabs/tab3']); // Redirigir a la lista de partidas
    }
  }

}
