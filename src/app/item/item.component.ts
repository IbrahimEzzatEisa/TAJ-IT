import { Component, OnInit } from '@angular/core';
import { ItemService } from '../shared/item.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Item } from '../shared/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  formData: Item;
  list: Item[];
  readonly url = 'http://task.taj-it.com/api';

  constructor( private service: ItemService ,
    private toastr: ToastrService ,
    private http: HttpClient) { }

  ngOnInit() {
    this.resetForm();

  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      ItemId: null,
      ItemName: '',
      Price: '',
      Photo: '',
      ExpireDate: ''
    }
  }

  onSubmit(form: NgForm) {
    if (form.value.ItemId == null)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postItem(form.value).subscribe(res => {
      this.resetForm(form);
      this.service.refreshList();
      // // this.service.postFile(form.value).subscribe(res => {
      //   this.toastr.success('تم أضافة المنتج');

    });
  // });
  }


  updateRecord(form: NgForm) {
    this.service.putItem(form.value).subscribe(res => {
      this.toastr.info('تم تعديل المنتج');
      this.resetForm(form);
      this.service.refreshList();
    });


  }
  

}
