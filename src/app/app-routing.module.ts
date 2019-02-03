import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { MarsupilamiDetailsComponent } from './marsupilami-details/marsupilami-details.component';
import { MarsupilamiListComponent } from './marsupilami-list/marsupilami-list.component';
import { MarsupilamiEditComponent } from './marsupilami-edit/marsupilami-edit.component';
import { MarsupilamiRegistrationComponent } from './marsupilami-registration/marsupilami-registration.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth-guard.service';
import { FriendListComponent } from './friend-list/friend-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'registration', component: MarsupilamiRegistrationComponent },
  { path: 'edit_marsupilami/:id', component: MarsupilamiEditComponent },
  { path: 'marsupilamis', component: MarsupilamiListComponent },
  { path: 'amis', component: FriendListComponent },
  { path: 'marsupilamis/:id', component: MarsupilamiDetailsComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
