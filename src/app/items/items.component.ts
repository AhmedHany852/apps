import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { CategoryDTO } from './category.model';
import { ItemsDetailsDTO } from './itemdetails.model';
import { PostItemDTO } from './postItemDto.model';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  @ViewChild('form', { static: false }) slForm: any;
  itemsDetailsResponse: ItemsDetailsDTO[] = [];
  categories: CategoryDTO[]=[];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getItems();
    this.getCategories();
  }

  getItems() {
    this.apiService.GetItems().subscribe(data => {
      console.log(data);
      this.itemsDetailsResponse = data;
    });
  }

  postItem(form: NgForm) {
    console.log(form);
    if (form.valid) {
      const formValues = form.value;
      const ItemName = formValues.itemName;
      const ItemDate = formValues.itemDate;
      const ItemCategoryId = formValues.itemCategoryId;
      let postItemDto = new PostItemDTO(ItemName, ItemDate, ItemCategoryId);
      this.apiService.postItem(postItemDto);
      form.reset();

    }
  }

  getCategories() {
    this.apiService.getCategories().subscribe(data => {
      console.log(data);
      this.categories = data;
    })

  }


}
