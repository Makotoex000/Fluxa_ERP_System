import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IAuthSuccessResponse } from '../interfaces/auth-sucess-response';
import { ILoginSuccessResponse } from '../interfaces/login-success-response';
import { IRegisterPayload } from '../interfaces/register-payload';
import { IProductResponse } from '../interfaces/product-response';
import { map } from 'rxjs/operators';
import { IRegisterResponse } from '../interfaces/register-response';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly _httpClient = inject(HttpClient);

  validateUser(): Observable<IAuthSuccessResponse> {
    return this._httpClient.get<IAuthSuccessResponse>(`${environment.apiUrl}/protected`);
  }

  login(email: string, password: string): Observable<ILoginSuccessResponse> {
    const body = { email, password };
    return this._httpClient.post<ILoginSuccessResponse>(`${environment.apiUrl}/users/login`, body);
  }

register(payload: IRegisterPayload): Observable<IRegisterResponse> {
    return this._httpClient.post<IRegisterResponse>(`${environment.apiUrl}/users/register`, payload);
  }

  listProducts(): Observable<IProductResponse[]> {
    return this._httpClient.get<any>(`${environment.apiUrl}/products`).pipe(
        map(response => response.data as IProductResponse[])
    );
  }


  deleteProduct(id: number): Observable<any> {
    return this._httpClient.delete(`${environment.apiUrl}/products/${id}`);
  }

  updateProduct(id: number, data: Partial<IProductResponse>): Observable<IProductResponse> {
    return this._httpClient.put<IProductResponse>(`${environment.apiUrl}/products/${id}`, data);
  }

  createProduct(payload: Omit<IProductResponse, 'id' | 'status'>): Observable<IProductResponse> {

    return this._httpClient.post<IProductResponse>(`${environment.apiUrl}/products`, payload);
  }
}