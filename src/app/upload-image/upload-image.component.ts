import { Component, OnInit } from '@angular/core';
import { ItemService } from '../shared/item.service';
import { ToastrService } from 'ngx-toastr';
import { Item } from '../shared/item.model';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css'],
})
export class UploadImageComponent implements OnInit {
  imageUrl: string = '/assets/1.jpg';
  Photo: File = null ;

  constructor(private service: ItemService ,
              private  toastr: ToastrService) { }

  ngOnInit() {
  }


  handleFileInput(file: FileList) {
    this.Photo = file.item(0);

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.Photo);
  }

  OnSubmit(Photo){
   this.service.postFile(Photo.value).subscribe(
     data =>{
     this.toastr.success("تم أضافه صورة المنتج");
      //  Photo.value = null;
       this.imageUrl = '/assets/1.jpg';
     }
   );
  }

}


