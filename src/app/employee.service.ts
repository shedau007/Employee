import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://dummy.restapiexample.com/api/v1';
  private baseUrls = 'www.https://dummy.restapiexample.com/api/v1';

  constructor(private http: HttpClient) { }

  getEmployee(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/employee/${id}`);
  }

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrls}/create/`,employee); 
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/employees`); 
  }
}
