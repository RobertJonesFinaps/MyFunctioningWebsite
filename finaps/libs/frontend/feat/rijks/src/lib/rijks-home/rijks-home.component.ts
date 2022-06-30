import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
      searchTerm: new FormControl(null)
    })

    this.http.get('http://localhost:3333/api/rijks/collection',{
      "format": "json",
      "culture": "en",
      "p": 1,
      "ps": 10
      } 
   ).subscribe((response: any) => {
      console.table(response)
    })
}

  onSubmit(): void {
    console.log(this.searchForm)
  }
}
