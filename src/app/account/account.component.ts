import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from '@app/_services/account.service';

@Component({ templateUrl: 'account.component.html' })
export class AccountComponent {
    constructor(
        private router: Router,
        private accountService: AccountService
    ) {
        if (this.accountService.userValue) {
            this.router.navigate(['/']);
        }
    }
}