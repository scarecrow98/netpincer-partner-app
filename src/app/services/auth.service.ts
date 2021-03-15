import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PartnerRegistration } from '../models/partner-registration';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getPartnerTypes(): Observable<Array<any>> {
    return this.http.get<Array<any>>('/partners/partner-type-list');
  }

  registrate(partnerData: PartnerRegistration, partnerImage: File = null): Observable<any> {
    const formData = new FormData();
    formData.append('partnerData', JSON.stringify(partnerData));

    if (partnerImage) {
      formData.append('partnerImage', partnerImage);
    }
    return this.http.post('/partners/registrate', formData);
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post('/auth/login/partner', { email, password });
  }

  authorize(): Observable<any> {
    return this.http.get('/auth/authorize/partner');
  }
}
