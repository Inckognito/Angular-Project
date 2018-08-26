import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MemeList } from '../models/meme-list.model';
import { MemeService } from '../meme.service';

@Component({
  selector: 'app-meme-list',
  templateUrl: './meme-list.component.html',
  styleUrls: ['./meme-list.component.css']
})
export class MemeListComponent implements OnInit {
  memes : Observable<MemeList[]>

  constructor(
    private memeService : MemeService
  ) { }

  ngOnInit() {
     this.memes = this.memeService
     .getAllMemes();
  }

}
