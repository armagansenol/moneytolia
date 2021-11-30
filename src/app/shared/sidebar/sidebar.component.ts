import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  sidebarRoutes = [
    {
      name: 'Kampanya Listesi',
      routerLink: '/campaigns/list',
    },
    {
      name: 'Kampanya Oluştur',
      routerLink: '/campaigns/create',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
