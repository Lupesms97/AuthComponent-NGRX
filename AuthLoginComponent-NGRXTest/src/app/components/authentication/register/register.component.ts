import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { ResponseDto } from 'src/app/shared/models/user/ResponseDto';
import { Role } from 'src/app/shared/models/user/Role';
import { UserCadastro } from 'src/app/shared/models/user/UserCadastro';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],

})
export class RegisterComponent {


  
    constructor(private formService:AuthService) {}
  
    
  
    user : UserCadastro = {
      email: '',
      login: '',
      password: '',
      name: '',
      unidade: '',
      role: Role.ADMIN
    }
  
    unidades: string[] =[
      'VR',
      'BM',
      'Resende',
      'BP',
      'Pinheiral',
      'PR',
      'AR'
    ]
  
  
  
    criar(form: NgForm){
      
        this.user.email= form.value.email;
        this.user.login = form.value.email;
        this.user.password = form.value.password;
        this.user.name = form.value.name;
        this.user.unidade = form.value.unidade;
      
      
      const response:any = this.formService.newUser(this.user.email, this.user.password, this.user.name, this.user.unidade, this.user.role)
      .subscribe(
        (response: HttpResponse<ResponseDto>) => {
          if (response.status >= 200 && response.status < 300) {
  
            const data = response.body!.message;
          } else {
  
            console.error('Erro na requisição:', response.body?.message);
          }
          console.log(this.user)
        },
        (error) => {
          console.error('Requisção não enviada :', error);
          console.log(this.user)
        }
        
      );
      form.resetForm();
    }
}
