import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { map } from 'rxjs';
import { RijksCollection } from '@finaps/shared/models';
@Component({
  selector: 'finaps-rijks-home',
  templateUrl: './rijks-home.component.html',
  styleUrls: ['./rijks-home.component.scss'],
})
export class RijksHomeComponent implements OnInit {
  searchForm!: FormGroup;
  imageTitles: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      searchTerm: new FormControl(null),
    });
  }

  searchWholeCollection() {
    this.http
      .get<RijksCollection>('http://localhost:3333/api/rijks/collection', {
        params: { culture: 'en', format: 'json' },
      })
      .pipe(
        map((collection) => {
          return collection.artObjects.map((artObject) => artObject.title);
        })
      )
      .subscribe((imageTitles) => {
        this.imageTitles = imageTitles;
      });
  }

  searchByKeyword() {
    const searchTerm = this.searchForm.get('searchTerm')?.value;
    this.http
      .get<RijksCollection>('http://localhost:3333/api/rijks/collection', {
        params: { culture: 'en', format: 'json', q: searchTerm },
      })
      .pipe(
        map((collection) => {
          return collection.artObjects.map((artObject) => artObject.title);
        })
      )
      .subscribe((imageTitles) => {
        this.imageTitles = imageTitles;
      });

    this.searchForm.reset();
  }

  onSubmit(): void {
    console.log(this.searchForm);
  }
}
