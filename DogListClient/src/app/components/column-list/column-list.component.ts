import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-column-list',
  templateUrl: './column-list.component.html',
  styleUrls: ['./column-list.component.css']
})
export class ColumnListComponent implements OnInit {

  constructor(private http: HttpClient) { }

  inputValue = "";
  allBreeds: Array<Breed> = new Array<Breed>();
  @Output() selectedBreedEvent = new EventEmitter<Array<string>>();

  ngOnInit(): void {
    this.fetchBreeds();
  }

  fetchBreeds() {
    this.http.get(`https://dog.ceo/api/breeds/list/all`).subscribe((response: any)=> {
      let breedNames: any = Object.keys(response.message);
      for (let breedName of breedNames) {
        this.http.get(`https://dog.ceo/api/breed/${breedName}/images`).subscribe((response: any) => {
          let breed = {
            title: breedName,
            thumbnail: response.message[0]
          }
          this.allBreeds.push(breed)
        })
      }
    })
  }

  fetchBreedPictures(breed: any) {
    this.http.get(`https://dog.ceo/api/breed/${breed}/images`).subscribe((response: any) => {
      this.selectedBreedEvent.emit(response.message);
    })
  }
}

interface Breed {
  title: string;
  thumbnail: string;
}
