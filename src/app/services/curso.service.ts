import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { curso } from '../models/curso';
import { Observable, of, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http: HttpClient) { }

  public URL = "https://ge8b623c3eae326-db202109230629.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/course/course";
  httpOptions={
    header: new HttpHeaders({'Content-Type': 'application/json'})
  }
  getCurso(): Observable<any>{
    return this.http.get<any>(this.URL)
    .pipe(
      map(resp =>{
        return resp;
      }),
      catchError((err)=>of(err))
    )
  }

  createCurso(curso:curso): Observable<any>{ 
    console.log(curso);    
    return this.http.post(this.URL,curso)
    .pipe(
      map(resp =>{
        return resp;
      }),
      catchError((err)=>of(err))
    )
  } 
}
