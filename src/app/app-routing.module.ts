import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthGuard } from './auth/auth.guard';
import { MemeModule } from './meme/meme.module';

const routes : Route[] = [
  { path: 'auth', children: [
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
  ]  },
  { path: 'memes', 
   loadChildren: () => MemeModule ,
   canActivate: [AuthGuard] 
  }, 
  {
    path: '**', redirectTo: '/auth/signin'
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }