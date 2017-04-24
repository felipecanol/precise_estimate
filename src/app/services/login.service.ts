import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigModule } from './config';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  private endpoint_url: string;

  constructor(public http: Http) {
    this.endpoint_url = ConfigModule.APIURL + "/login";
    this.http = http;
  }

  public login(email: string, password: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.endpoint_url, { email: email, password: password }, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
