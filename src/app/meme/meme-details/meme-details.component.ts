import { Component, OnInit } from '@angular/core';
import { MemeList } from '../models/meme-list.model';
import { MemeService } from '../meme.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-meme-details',
  templateUrl: './meme-details.component.html',
  styleUrls: ['./meme-details.component.css']
})
export class MemeDetailsComponent implements OnInit {
  meme : MemeList;
  id : string;

  constructor(
    private memeService : MemeService,
    private route : ActivatedRoute,
    private toastr : ToastrService,
    private router : Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.memeService.getById(this.id)
      .subscribe(data => {
        this.meme = data;
      })
  }

  delete() {
    this.memeService.deleteMeme(this.id)
      .subscribe((data) => {
        this.toastr.success('meme delted!', 'Success!');
        this.router.navigate(['/memes/list']);
      })
  }

}
