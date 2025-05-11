import { CategoryService } from './../../core/services/category.service';
import { UserService } from './../../core/services/user.service';
// 

import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 users: any[] = [];
  categories: any[] = [];

  constructor(private UserService: UserService , private CategoryService : CategoryService) {}
  

  ngOnInit(): void {
    this.UserService.getAllUsers().subscribe(data => {
      this.users = data;
    });

    this.CategoryService.getAllCategories().subscribe(data => {
      this.categories = data;
    });
  }
  }
  

