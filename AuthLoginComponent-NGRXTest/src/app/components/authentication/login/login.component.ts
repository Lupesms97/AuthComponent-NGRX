import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { ResponseDto } from 'src/app/shared/models/user/ResponseDto';
import { Role } from 'src/app/shared/models/user/Role';
import { UserLogin } from 'src/app/shared/models/user/UserLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent {
  constructor(private formsService: AuthService) {}
  alertMessage: any = ''
  exibirAlert: boolean = false;

  user: UserLogin = {
    login: '',
    password: ''
  }

  resp:ResponseDto = {
    token: '',
    message: ''
  }




  autenticar(form: NgForm){
    let userLogin:UserLogin = {
      login: form.value.login,
      password: form.value.password
    }

    this.formsService.login(userLogin.login, userLogin.password)
      .subscribe(
        (response: HttpResponse<ResponseDto>) => {
          response!=null? this.exibirAlert = true : this.exibirAlert = false;

          const token = response.body?.token;
          this.alertMessage = response.body!.message;
          const status = response.status;
          const role:string = this.formsService.decodeJwt(token!).roles;

          

          if (token !== undefined && status >= 200 && status < 300) {
  /*             this.formsService.setCookie('token', token!, 1);
              this.formsService.setCookie('roles', role); */
              this.formsService.isLogged$.subscribe((isLogged) => {isLogged = true});
          }else {
              console.error('Token não encontrado na resposta ou status diferente de 200');
          }
          
        },
        (error) => {
          console.log(error);
        }
      );
  }
    
    
      
}


