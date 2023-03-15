import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-column-gallery',
  templateUrl: './column-gallery.component.html',
  styleUrls: ['./column-gallery.component.css']
})
export class ColumnGalleryComponent implements OnInit {

  @Input() selectedBreedPictures: Array<string> = new Array<string>();
  @Input() selectedBreedName: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  

}

