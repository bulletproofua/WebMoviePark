import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {
  private singup :any = true;
  private singin :any = false;
  constructor() { }

  ngOnInit() {
  }

  onSingup(){
    this.singup = true;
    this.singin = false;
  }
  onSingin(){
    this.singin = true;
    this.singup = false;
  }
}
