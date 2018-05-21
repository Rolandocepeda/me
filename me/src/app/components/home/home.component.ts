import { Component, OnInit, ElementRef, ViewChild, ChangeDetectorRef, HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public sideNavListItems = [
    { label: 'About' }, { label: 'Projects' }, { label: 'Contact' }];
  @ViewChild('about', { read: ElementRef }) aboutme: ElementRef;
  @ViewChild('skills', { read: ElementRef }) skills: ElementRef;
  @ViewChild('resume', { read: ElementRef }) resume: ElementRef;
  @ViewChild('projects', { read: ElementRef }) projects: ElementRef;
  @ViewChild('contact', { read: ElementRef }) contact: ElementRef;
  @ViewChild('welcome', { read: ElementRef }) welcome: ElementRef;
  toolbarClass = 'transparent-toolbar';
  showName: boolean = false;
  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.cdr.detectChanges();
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    //we'll do some stuff here when the window is scrolled
    this.toolbarClass = this.isInViewport(this.welcome) ? 'transparent-toolbar' : 'white-toolbar';
    this.showName = this.isInViewport(this.welcome) ? false : true;    
  }

  scrollIntoView(viewChildName: string) {
    switch (viewChildName) {
      case 'about':
        this.aboutme.nativeElement.scrollIntoView({ behavior: "smooth" });
        break;
      case 'projects':
        this.projects.nativeElement.scrollIntoView({ behavior: "smooth" });
        break;
      case 'contact':
        this.contact.nativeElement.scrollIntoView({ behavior: "smooth" });
        break;
      case 'resume':
        this.resume.nativeElement.scrollIntoView({ behavior: "smooth" });
        break;
      case 'skills':
        this.skills.nativeElement.scrollIntoView({ behavior: "smooth" });
        break;
    }
  }

  isInViewport(elem) {
    var bounding = elem.nativeElement.getBoundingClientRect();
    return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
}
