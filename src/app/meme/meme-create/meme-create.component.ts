import { Component, OnInit } from '@angular/core';
import { MemeCreate } from '../models/meme-create.model';
import { MemeService } from '../meme.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meme-create',
  templateUrl: './meme-create.component.html',
  styleUrls: ['./meme-create.component.css']
})
export class MemeCreateComponent implements OnInit {
  bindingModel : MemeCreate;

  constructor(
    private memeService : MemeService,
    private toastr : ToastrService,
    private router : Router
  ) {
    this.bindingModel = new MemeCreate("", "", "");
  }

  ngOnInit() {
  }

  create() {
    this.memeService.createMeme(
      this.bindingModel)
      .subscribe(() => {
        this.toastr.success('meme created!', 'Success');
        this.router.navigate(['/memes/list']);
      })
  }

}
