import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public name!: any;

  constructor(private router: Router) {
    this.name = this.router.getCurrentNavigation()?.extras.state;
    //this.name = this.name.value;
    console.log(this.name);

    if (this.name) {
      if (this.name.value !== "Jenish") {
        this.btns.splice(this.btns.length - 2, 1);
      }
      localStorage.setItem("name", this.name.value);
      console.log("localStorage = "+localStorage.getItem("name"));
      //this.first = false;
    } else {
      this.name = localStorage.getItem("name");
      if (this.name !== "Jenish") {
        this.btns.splice(this.btns.length - 2, 1);
      }
      console.log(this.name);
    }
  }

  btns = [
    { btn: "Home", url: "/home" },
    { btn: "Features", url: "features" },
    { btn: "View", url: "view" },
    { btn: "Pricing", url: "price" }
  ]

  //first: boolean = true;

  ngOnInit(): void {

    
  }

  logout(){
    localStorage.removeItem("name");
    console.log("Logout works");
    
    this.router.navigateByUrl("/login");
  }

}
