import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { AuthService } from 'src/app/core/auth/auth.service';
import { ClientsService } from 'src/app/core/clients/clients.service';
import { ClientDto } from 'src/app/shared/models/user/ClientsDto';
import { UserInterface } from 'src/app/shared/models/user/UserInteface';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],

})
export class AdminComponent {



  public clients: ClientDto[] = [];

  constructor(
    private clientsService: ClientsService
    , private authService: AuthService) {
      this.getClientes();
  }

  username: string = this.authService.getUserName();


  logout() {
    this.authService.logout();
  }
  nome: string = '';
  email: string = '';
  telefone: string = '';

  // Função para lidar com o envio do formulário
  onSubmit() {
    let client : ClientDto = {
      name : this.nome,
      email  : this.email,
      phone : this.telefone
    };
    this.clientsService.creatClient(client).subscribe((response: HttpResponse<any>) => {
      console.log(response);
    });
    
    this.getClientes();

  }

  getClientes() {
    this.clientsService.getClientes().subscribe((response: HttpResponse<ClientDto[]>) => {
      this.clients = response.body || [];
    });
  }

  
}
