import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'finaps-rijks-home',
  templateUrl: './rijks-home.component.html',
  styleUrls: ['./rijks-home.component.scss'],
})
export class RijksHomeComponent implements OnInit {
  searchForm!: FormGroup;


  ngOnInit(): void {
   this.searchForm = new FormGroup({
    searchTerm: new FormControl(null)
   })
  }

  onSubmit(): void {
    console.log(this.searchForm)
  }
}
