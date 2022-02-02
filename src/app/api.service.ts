import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryDTO } from './items/category.model';
import { ItemsDetailsDTO } from './items/itemdetails.model';
import { PostItemDTO } from './items/postItemDto.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) {  }

  GetItems(){
   return this.http.get<ItemsDetailsDTO[]>('https://localhost:44377/api/ItemDetails');
  }

  postItem(postItem : PostItemDTO){
    return this.http.post<PostItemDTO>('https://localhost:44377/api/postItem',postItem);
  }

  getCategories(){
    return this.http.get<CategoryDTO[]>('https://localhost:44377/api/category');
  }
}
