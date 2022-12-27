import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  items!: MenuItem[];
  user$: any;
  manage!: MenuItem[];
  login!: MenuItem[];

  constructor(private auth: AuthService) {
    this.items = [
      {
        label: 'products',
        icon: 'pi pi-tags',
        routerLink: '/products',
      },
      {
        label: 'Shopping Cart',
        icon: 'pi pi-shopping-bag',
        routerLink: '/shopping-cart',
      },
    ];

    this.auth.getUser().subscribe((user) => {
      this.user$ = user;
    });

    // this.afAuth.authState.subscribe((user: any) => {
    //   this.user$ = user;
    //   console.log(user);
    // });

    this.manage = [
      {
        label: 'Manage',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'My Orders',
            icon: 'pi pi-pencil',
            routerLink: 'myOrders',
          },
          {
            label: 'Manage Orders',
            icon: 'pi pi-pencil',
            routerLink: 'admin/orders',
          },
          {
            label: 'Manage Products',
            icon: 'pi pi-pencil',
            routerLink: 'admin/products',
          },
          {
            label: 'Log Out',
            icon: 'pi pi-sign-out',
            command: () => this.logOut(),
          },
        ],
      },
    ];
    this.login = [
      {
        label: 'login',
        icon: 'pi pi-shopping-bag',
        routerLink: '/login',
      },
    ];
  }

  ngOnInit() {}

  logOut() {
    this.auth.logOut();
  }
}
