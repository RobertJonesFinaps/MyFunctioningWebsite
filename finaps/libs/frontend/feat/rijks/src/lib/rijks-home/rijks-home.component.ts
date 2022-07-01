import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Collection } from './rijks-home.interface';

@Component({
  selector: 'finaps-rijks-home',
  templateUrl: './rijks-home.component.html',
  styleUrls: ['./rijks-home.component.scss'],
})
export class RijksHomeComponent implements OnInit {
  searchForm!: FormGroup;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      searchTerm: new FormControl(null),
    });


  }

  searchWholeCollection() {
    this.http.get<Collection>('http://localhost:3333/api/rijks/collection', {
      params: { culture: 'en', format: 'json' },
    }
    ).subscribe((response) => {
      console.table(response.artObjects)
    })
  }

  onSubmit(): void {
    console.log(this.searchForm);
  }
}
