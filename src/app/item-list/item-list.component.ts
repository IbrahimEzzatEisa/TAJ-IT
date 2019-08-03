import { Component, OnInit } from '@angular/core';
import { ItemService } from '../shared/item.service';
import { ToastrService } from 'ngx-toastr';
import { Item } from '../shared/item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  item: Item[];
  ItemName: Item[] =  [] ;
  searchText: string;

  constructor( private service: ItemService ,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
    // this.service.getImage();

  }

  populateForm(item: Item) {
    this.service.formData = Object.assign({}, item);
  }    onDelete(ItemId: number) {
      if (confirm('متأكد من مسح الصنف ؟')) {
        this.service.deleteItem(ItemId).subscribe(res => {
          this.service.refreshList();
          this.toastr.warning('تم مسح الصنف');
        });
      }
    }
    Search() {
      if (this.searchText  != '') {
      this.item = this.item.filter(res => {
        return  res.ItemName.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase());
      });
      } else if (this.searchText == '') {
        this.toastr.warning(" خطأ في البحث");
        this.ngOnInit();
      } else {
        this.toastr.warning(" خطأ في البحث");

      }
      }
      }

