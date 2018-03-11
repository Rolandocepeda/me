import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public sideNavListItems = [
    { label: 'About' }, { label: 'Projects' }, { label: 'Contact' }];
  constructor() { }

  ngOnInit() {
  }
}
