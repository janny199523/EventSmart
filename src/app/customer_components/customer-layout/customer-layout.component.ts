import { Component, OnInit } from '@angular/core';
import { Router , NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-customer-layout',
  templateUrl: './customer-layout.component.html',
  styleUrls: ['./customer-layout.component.css']
})
export class CustomerLayoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {



  }

}
