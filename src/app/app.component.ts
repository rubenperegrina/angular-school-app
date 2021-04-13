import { Component } from '@angular/core';
import { AccountService } from './_services/account.service';
import { User } from './_models';
import { Router } from '@angular/router';

@Component({ 
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['./app.component.scss']
 })
export class AppComponent {
    user: User;
    languageSelected: String = 'Español';
    courseSelected: String = '3º Infantil';
    public languages = ["Español", "Inglés", "Francés"];
    public courses = ["3º Infantil", "4º Infantil", "5º Infantil"];

    constructor(
        private router: Router,
        private accountService: AccountService) {
        this.accountService.user.subscribe(x => this.user = x);
    }

    ngInit() {
    }

    goHome() {
        this.router.navigate(['/']);
    }

    logout() {
        this.accountService.logout();
    }
}