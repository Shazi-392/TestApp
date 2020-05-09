import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  myForm: FormGroup;


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      'T':  ['', Validators.required]
    })

}
}