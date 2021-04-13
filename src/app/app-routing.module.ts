import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './account/components/login/login.component';
import { RegisterComponent } from './account/components/register/register.component';
import { PlayComponent } from './play/play.component';
import { DetailsComponent } from './details/details.component';
import { AuthGuard } from './_helpers';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'details/:id', component: DetailsComponent, canActivate: [AuthGuard] },
    { path: 'play/:courseId/:sessionId', component: PlayComponent, canActivate: [AuthGuard] },
    {
        path: 'account', component: AccountComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent }
        ]
    },

    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }