import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { ClientDto } from 'src/app/shared/models/user/ClientsDto';


const TOKEN_KEY = '_tky-usr';

@Injectable({
  providedIn: 'root'
})


export class ClientsService {

  private readonly API_URL = 'http://localhost:8081/clients';

  private token: string = '';
  private clients: ClientDto[] = [];


  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
    this.token = this.authService.getToken(TOKEN_KEY);
  }

  private getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`,
      }),
    };
  }

  getClientes() {
    const httpOptions = this.getHttpOptions();
    return this.http.get<ClientDto[]>(`${this.API_URL}/getMyClients`, { ...httpOptions, observe: 'response' });
  }

  creatClient(client: ClientDto){
    const httpOptions = this.getHttpOptions();
    return this.http.post<HttpResponse<any>>(
      `${this.API_URL}/createClient`,
      client,
      httpOptions
    );
    
  }


}
