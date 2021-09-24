import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http : HttpClient) { }


  get(id:any) {
    return this.http.get(`http://localhost:8080/api/tutorials/${id}`);
  }
  getDataApi(){
    return this.http.get('http://localhost:8080/api/tutorials')
  }
  create(data:any) {
    return this.http.post('http://localhost:8080/api/tutorials', data);
  }
  update(id:number, data:any) {
    return this.http.put(`http://localhost:8080/api/tutorials/${id}`, data);
  }
  delete(id:number) {
    return this.http.delete(`http://localhost:8080/api/tutorials/${id}`);
  }

  deleteAll() {
    return this.http.delete('http://localhost:8080/api/tutorials');
  }

  findByTitle(title:any) {
    return this.http.get(`http://localhost:8080/api/tutorials?title=${title}`);
  }

}
