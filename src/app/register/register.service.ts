import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, catchError } from 'rxjs/operators'
import HttpError from "../config/httpErrorHandler.service";
import { registerData, registerResponse } from "./register.model";
import LoaderService from '../loader/loader.service';

@Injectable()
export default class RegisterService{
  private prefix:string = '/api'
  constructor(private http: HttpClient, private httpError: HttpError, private loader: LoaderService){}
  
  public register(data: registerData):Observable<registerResponse>{
    this.loader.activeLoader()
    return this.http.post<registerResponse>(`${this.prefix}/user`, data)
    .pipe(
      map((res: registerResponse) => {
        this.loader.hideLoader()
        return res
      }),
      catchError(this.httpError.handleError)
    )
  }
}