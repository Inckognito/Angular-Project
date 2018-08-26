import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MemeStartComponent } from './meme-start/meme-start.component';
import { MemeCreateComponent } from './meme-create/meme-create.component';
import { MemeDetailsComponent } from './meme-details/meme-details.component';
import { MemeEditComponent } from './meme-edit/meme-edit.component';
import { MemeListComponent } from './meme-list/meme-list.component';
import { AuthGuard } from '../auth/auth.guard';

const routes : Route[] = [
  { path: '', pathMatch: 'full', component: MemeStartComponent, canActivate: [ AuthGuard ] },
  { path: 'start', component: MemeStartComponent, canActivate: [ AuthGuard ]},
  { path: 'create', component: MemeCreateComponent },
  { path: 'details/:id', component: MemeDetailsComponent },
  { path: 'edit/:id', component: MemeEditComponent },
  { path: 'list', component: MemeListComponent },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class MemeRoutingModule {}