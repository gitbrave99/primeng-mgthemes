import { Component, OnInit } from '@angular/core';
import { ThemeService } from './theme.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: MenuItem[] = [];
  ngOnInit() {
    this.items = [
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Left',
            icon: 'pi pi-fw pi-align-left'
          }
        ]
      },
      {
        label: 'Users',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Search',
            icon: 'pi pi-fw pi-users'
          }
        ]
      },
      {
        label: 'Dia',
        icon: 'pi pi-fw pi-sun',
        command: () => {
          this.changeTheme('lara-light')
        }
      },
      {
        label: 'Noche',
        icon: 'pi pi-fw pi-circle-fill',
        command: () => {
          this.changeTheme('lara-dark')
        }
      },
    ];
  }

  constructor(private themeService: ThemeService) { }

  dark() {
    console.log("funco");

  }

  changeTheme(theme: string) {
    this.themeService.switchTheme(theme);
  }
}
