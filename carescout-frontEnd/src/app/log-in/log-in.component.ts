import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})

export class LogInComponent implements OnInit {

  loginForm: FormGroup | undefined;
  constructor(private fb: FormBuilder) {
    
  }
  
  ngOnInit(): void {
    this.loginForm = this.fb.group({
			name: ['', Validators.required],
			age: ['', Validators.required]
		});
  }


  
}
