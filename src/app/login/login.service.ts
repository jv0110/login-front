import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, catchError } from 'rxjs/operators'
import HttpError from "../config/httpErrorHandler.service";
import { loginData, loginReturn } from "./login.model";

@Injectable()
export default class LoginService {
  private prefix = '/api'
  constructor(private http: HttpClient, private httpError: HttpError){}
  
  public login(data: loginData):Observable<loginReturn> {
    return this.http.get<loginReturn>(`${this.prefix}/login`)
    .pipe(
      map((res:loginReturn) => res),
      catchError(this.httpError.handleError)
    )
  }
}