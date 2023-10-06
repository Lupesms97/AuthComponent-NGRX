import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { AuthService } from 'src/app/core/auth/auth.service';
import { UserInterface } from 'src/app/shared/models/user/UserInteface';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],

})
export class AdminComponent {

  constructor(private authService: AuthService,

  ) { }




  username: string = this.authService.getUserName();

  logout() {
    this.authService.logout();
  }

}
