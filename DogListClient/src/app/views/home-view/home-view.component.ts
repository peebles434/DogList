import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {

  selectedBreed: Array<string> = []

  constructor() { }

  ngOnInit(): void {
  }

  updateSelectedBreed(urlArray: any){
    console.log(urlArray)
    this.selectedBreed = urlArray;
  }

}
