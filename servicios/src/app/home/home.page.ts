import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'firebase/auth';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  userName: string | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.getUser();
  }

  async getUser() {
    const user = (await this.authService.getCurrentUser()) as User | null;
    this.userName = user?.displayName || 'Usuario Anónimo';
  }

}
