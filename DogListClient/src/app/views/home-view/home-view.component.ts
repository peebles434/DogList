import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {

  selectedBreedPictures: Array<string> = []
  selectedBreedName: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  updateSelectedBreedPictures(urlArray: any){
    this.selectedBreedPictures = urlArray;
  }

  updateSelectedBreedName(name: any){
    this.selectedBreedName = name;
  }

}
