import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from './item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  formData: Item;
    list: Item[];
  Photo: Item = null;
  readonly url = 'http://task.taj-it.com/api';
  readonly URL = 'http://task.taj-it.com/api';

  constructor( private http: HttpClient) { }


  postItem(formData: Item) {
    return this.http.post(this.url + '/Items/' + formData.ItemName , formData );
  }
  refreshList() {
    this.http.get(this.url + '/Items')
    .toPromise().then(res => this.list = res as Item[]);
  }
  putItem(formData: Item) {
    return this.http.put(this.url + '/Items/' + formData.ItemId , formData);
  }
  deleteItem(ItemId: number) {
    return this.http.delete(this.url + '/Items/' + ItemId);
   }
   postFile(Photo: Item) {
    const formData: FormData = new FormData();
    formData.append('Item', Item.name);
    return this.http.post(this.URL + '/UploadImage/' + this.formData.Photo , this.formData );


  }
}
