import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-column-list',
  templateUrl: './column-list.component.html',
  styleUrls: ['./column-list.component.css']
})
export class ColumnListComponent implements OnInit {

  constructor() { }

  inputValue = "";

  breeds = [
    "dog1",
    "dog2",
    "dog3",
  ]

  ngOnInit(): void {
  }

}
