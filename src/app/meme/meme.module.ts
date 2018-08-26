import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MemeStartComponent } from './meme-start/meme-start.component';
import { MemeDetailsComponent } from './meme-details/meme-details.component';
import { MemeEditComponent } from './meme-edit/meme-edit.component';
import { MemeListComponent } from './meme-list/meme-list.component';
import { MemeCreateComponent } from './meme-create/meme-create.component';
import { MemeRoutingModule } from './meme-routing.module';

@NgModule({
  declarations: [
    MemeStartComponent,
    MemeDetailsComponent,
    MemeEditComponent,
    MemeListComponent,
    MemeCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MemeRoutingModule
  ]
})
export class MemeModule { }