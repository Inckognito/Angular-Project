import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { MemeList } from './models/meme-list.model';
import { MemeCreate } from './models/meme-create.model';

const baseUrl = 'https://memes-96dcc.firebaseio.com/memes/'

@Injectable({
  providedIn: 'root'
})
export class MemeService {
  constructor(
    private http : HttpClient
  ) {  }

  getAllMemes() {
    return this.http.get(`${baseUrl}.json`)
      .pipe(map((res : Response) => {
        const ids = Object.keys(res);
        const memes : MemeList[] = [];
        for (const i of ids) {
          memes.push(new MemeList(i, res[i].name, 
            res[i].imagePath, res[i].description));
        }

        return memes;
      }));
  }

  createMeme(body : MemeCreate) {
    return this.http.post(`${baseUrl}.json`, body);
  }

  getById(memeId : string) {
    return this.http.get<MemeList>(`${baseUrl}${memeId}/.json`);
  }

  editMeme(body) {
    return this.http.patch(`${baseUrl}.json`, body);
  }

  deleteMeme(memeId : string) {
    return this.http.delete(`${baseUrl}${memeId}/.json`);
  }
}