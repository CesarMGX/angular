import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: false,
})
export class PerfilPage implements OnInit {
  profileImage: string = 'assets/default-avatar.png';

  // Agregar CameraSource para que pueda usarse en el HTML
  CameraSource = CameraSource;

  constructor() {}

  ngOnInit() {}

  async selectImage(source: CameraSource) {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Base64,
        source: source,
      });

      this.profileImage = `data:image/jpeg;base64,${image.base64String}`;
    } catch (error) {
      console.error('Error al seleccionar imagen: ', error);
    }
  }
}
