import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],

})
export class UserComponent {
  constructor(private authService: AuthService
    ) { }

  username: string = this.authService.getUserName();

  logout() {
    this.authService.logout();
  }
}
