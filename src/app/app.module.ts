import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MarsupilamiService } from './marsupilami.service';
import { MarsupilamiListComponent } from './marsupilami-list/marsupilami-list.component';
import { MarsupilamiDetailsComponent } from './marsupilami-details/marsupilami-details.component';
import { MarsupilamiEditComponent } from './marsupilami-edit/marsupilami-edit.component';
import { MarsupilamiRegistrationComponent } from './marsupilami-registration/marsupilami-registration.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FriendListComponent } from './friend-list/friend-list.component';
import { FriendService } from './friend.service';
import { AuthenticationService } from './authentication.service';
import { AuthGuard } from './auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    MarsupilamiListComponent,
    MarsupilamiDetailsComponent,
    MarsupilamiEditComponent,
    MarsupilamiRegistrationComponent,
    LoginComponent,
    NotFoundComponent,
    HeaderComponent,
    FriendListComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ MarsupilamiService, FriendService, AuthenticationService, AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
