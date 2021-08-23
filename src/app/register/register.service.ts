import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, catchError } from 'rxjs/operators'
import HttpError from "../config/httpErrorHandler.service";
import { registerData, registerResponse } from "./register.model";

@Injectable()
export default class RegisterService{
  private prefix:string = '/api'
  constructor(private http: HttpClient, private httpError: HttpError){}
  
  public register(data: registerData):Observable<registerResponse>{
    return this.http.post<registerResponse>(`${this.prefix}/user`, data)
    .pipe(
      map((res: registerResponse) => res),
      catchError(this.httpError.handleError)
    )
  }
}