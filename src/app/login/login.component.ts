import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  public name!: string;

  ngOnInit(): void {
  }

  check() {
    console.log(this.name);
    this.router.navigate(["home"], {state: {value: this.name}});
  }

}
