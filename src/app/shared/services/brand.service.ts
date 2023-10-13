import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private httpClient:HttpClient) {

   }
   private apiUrl="http://localhost:3000";

   getAllBrand():Observable<Brand[]>{
    let newPat =this.apiUrl+ '/brands';
    return this.httpClient.get<Brand[]>(newPat);
   }


}
