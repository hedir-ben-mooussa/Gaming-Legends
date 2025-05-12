import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    private baseUrl = 'http://localhost:8081/SpringMVC/category'; // adjust if your backend runs on a different port

    constructor(private http: HttpClient) { }

    // Get all anys
    getAllCategories(): Observable<any[]> {
        return this.http.get<any[]>(this.baseUrl);
    }

    // Get any by ID
    getCategory(id: number): Observable<any> {
        return this.http.get<any>(`${this.baseUrl}/${id}`);
    }

    // Create new any
    createCategory(any: any): Observable<any> {
        return this.http.post<any>(this.baseUrl, any);
    }

    // Delete any
    deleteCategory(id: number): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/${id}`);
    }

  


}
