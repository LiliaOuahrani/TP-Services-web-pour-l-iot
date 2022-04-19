import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiOctaveServiceService {

  constructor(private http: HttpClient ) { }

  getData () : Observable<any[]> {
    const url = "https://octave-api.sierrawireless.io/v5.0/orangesb/device/d61f111598adbc61c5c0c1272";
    let headers = new HttpHeaders().set('X-Auth-Token', "8ypwg55Yy4EK5lLPTshu6mx3mRMEBFTb"); // create header object
    headers = headers.append('X-Auth-User', "sb_orange"); // add a new header, creating a new object
    return this.http.get<any[]>(url, { headers: headers })

  }


}
