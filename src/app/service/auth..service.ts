import { Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AuthService{

  constructor(private http: HttpClient) { }


  public login(body:any) : Observable<any>{
    return this.http.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAKZOJMl6bVdtaVhJwgkIres03kNFtkpeI",body);
  }

}
