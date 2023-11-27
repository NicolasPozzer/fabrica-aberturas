import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Abertura } from '../components/model/abertura';

@Injectable({
  providedIn: 'root'
})
export class AberturaServiceService {

  //URL = 'http://localhost:8080/auth';
  URL = 'https://jose-backend.onrender.com/auth';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Abertura[]>{
    return this.httpClient.get<Abertura[]>(this.URL + '/traertodos');
  }

  public listaPuertas(): Observable<Abertura[]>{
    return this.httpClient.get<Abertura[]>(this.URL + '/puertas');
  }

  public listaVentanas(): Observable<Abertura[]>{
    return this.httpClient.get<Abertura[]>(this.URL + '/ventanas');
  }

  public detail(id: number): Observable<Abertura>{
    return this.httpClient.get<Abertura>(this.URL + `/find/${id}`);
  } 

  public save(abertura: Abertura): Observable<any>{
    return this.httpClient.post<any>(this.URL + '/crear', abertura);
  }

  public update(id: number, abertura: Abertura): Observable<any>{
    return this.httpClient.put<any>(this.URL + `/edit`, abertura);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `/borrar/${id}`);
  }
}

