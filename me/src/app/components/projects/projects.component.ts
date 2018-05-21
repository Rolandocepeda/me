import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { ObservableMedia } from '@angular/flex-layout';
import "rxjs/add/operator/map";
import "rxjs/add/operator/takeWhile";
import "rxjs/add/operator/startWith";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects = [
    { id: 1, title: 'CACI Inc.', subtitle: 'Software Developer I', img: 'assets/images/caci.jpeg', description: 'Modernize legacy code using Angular, Openlayers, JavaEE, and other modern standards. Develop in agile enviroment using JIRA, GIT, and Linux to efficiently meet customer requirements.' },
    { id: 2, title: 'University of Texas RGV', subtitle: 'Senior Design Project', img: 'assets/images/utrgv.jpeg', description: 'Created a 3d printed prostethic arm that moved using voltage differences detected by flexing muscle. I developed a control center using raspberry pi and adafruit screen. The user was able to calibrate the arm using a graphical interface built using python.' }
  ];
  public cols: Observable<number>

  public showVideo = false;
  constructor(private observableMedia: ObservableMedia) { }

  ngOnInit() {
    const grid = new Map([
      ["xs", 1],
      ["sm", 2],
      ["md", 2],
      ["lg", 2],
      ["xl", 2]
    ]);
    let start: number;
    grid.forEach((cols, mqAlias) => {
      if (this.observableMedia.isActive(mqAlias)) {
        start = cols;
      }
    });
    this.cols = this.observableMedia.asObservable()
      .map(change => {
        return grid.get(change.mqAlias);
      })
      .startWith(start);
  }

  onNext() {
    this.showVideo = true;
  }

  onPrevious() {
    this.showVideo = false;
  }

}
