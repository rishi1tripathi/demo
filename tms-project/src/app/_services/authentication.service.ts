import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable} from 'rxjs';
import { of } from 'rxjs/observable/of';



@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string):Observable<any> {
    // return of("success");
      
   return this.http.post<any>('http://localhost:8034/login', { username: "gdgd", password: "gdgd" })
      .map(response =>{
        console.log(response)
        
      });


      // return this.http.post<any>(`/users/authenticate`, { username: username, password: password })
      //       .pipe(map(user => {
      //           // login successful if there's a jwt token in the response
      //           if (user && user.token) {
      //               // store user details and jwt token in local storage to keep user logged in between page refreshes
      //               localStorage.setItem('currentUser', JSON.stringify(user));
      //           }

      //           return user;
      // console.log("succ");
     // return of("sucess");






}
logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('currentUser');
}
}
