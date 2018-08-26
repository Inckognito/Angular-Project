import { Component, OnInit } from '@angular/core';
import { MemeCreate } from '../models/meme-create.model';
import { MemeService } from '../meme.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-meme-edit',
  templateUrl: './meme-edit.component.html',
  styleUrls: ['./meme-edit.component.css']
})
export class MemeEditComponent implements OnInit {
  id : string;
  bindingModel : MemeCreate;

  constructor(
    private memeService : MemeService,
    private route : ActivatedRoute,
    private router : Router,
    private toastr : ToastrService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.memeService.getById(this.id)
      .subscribe((data) => {
        this.bindingModel = data;
      })
  }

  edit() {
    const body = {
      [this.id] : this.bindingModel
    }
    
    this.memeService.editMeme(body)
      .subscribe((data) => {
        this.toastr.success('meme edited!', 'Success!');
        this.router.navigate(['/memes/list']);
      })
  }

}
