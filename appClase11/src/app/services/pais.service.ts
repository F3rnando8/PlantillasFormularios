import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http: HttpClient) { }

  getPaises(): Observable<{ nombre: string, codigo: string }[]> {
    return this.http.get<any[]>('https://restcountries.com/v3.1/lang/spanish')
      .pipe(
        map(resp =>
          resp.map(pais => ({ nombre: pais.name.common, codigo: pais.cca2 })) 
        )
      );
  }
}