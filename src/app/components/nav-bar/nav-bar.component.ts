import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  items!: MenuItem[];

  ngOnInit() {
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
      {
        label: 'login',
        icon: 'pi pi-sign-in',
        routerLink: '/login',
      },
      {
        label: 'manage',
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
          },
        ],
      },
    ];
  }
}
