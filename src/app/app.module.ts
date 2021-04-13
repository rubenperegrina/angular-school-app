import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { backendProvider } from './_helpers';
import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { AlertComponent } from './alert/alert.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { TemaryComponent } from './temary/temary.component';
import { WatchAgainComponent } from './watch-again/watch-again.component';
import { PlayComponent } from './play/play.component';
import { DetailsComponent } from './details/details.component';
import { SessionsListComponent } from './sessions-list/sessions-list.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './account/components/login/login.component';
import { RegisterComponent } from './account/components/register/register.component';

@NgModule({
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        TemaryComponent,
        WatchAgainComponent,
        PlayComponent,
        DetailsComponent,
        SessionsListComponent,
        AccountComponent,
        LoginComponent,
        RegisterComponent
        ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        MatSelectModule,
        BrowserAnimationsModule
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        //Desconectar localStorage
        backendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };
