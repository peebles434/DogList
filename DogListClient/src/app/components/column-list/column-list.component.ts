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
  filteredBreeds: Array<Breed> = new Array<Breed>();
  @Output() selectedBreedPictures = new EventEmitter<Array<string>>();
  @Output() selectedBreedName = new EventEmitter<string>();


  ngOnInit(): void {
    this.fetchBreeds();
  }

  fetchBreeds() {
    this.http.get(`https://dog.ceo/api/breeds/list/all`).subscribe((response: any)=> {
      let breedNames: any = Object.keys(response.message);
      for (let breedName of breedNames) {
        this.http.get(`https://dog.ceo/api/breed/${breedName}/images`).subscribe((response: any) => {
          let capitalizedBreedName = this.capitalizeBreed(breedName);
          let breed = {
            title: capitalizedBreedName,
            name: breedName,
            pictures: response.message
          }
          this.allBreeds.push(breed)
        })
      }
    })
  }

  capitalizeBreed(breed: any) {
    return breed.charAt(0).toUpperCase() + breed.slice(1);
  }

  displayBreedPictures(breed: any) {
      this.selectedBreedPictures.emit(breed.pictures);
      this.selectedBreedName.emit(breed.title);
  }

  filterList(inputValue: any) {
    if (inputValue) {
      this.filteredBreeds = this.allBreeds.filter((breed) => {
        return breed.name.includes(inputValue.toLowerCase());
      })
    }
  }
}

interface Breed {
  title: string;
  name: string;
  pictures: string;
}
