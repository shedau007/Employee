import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CipherHut Assignment';
   showLogin: boolean = true;
   time: number = 0;
  interval;
  play;
  user: string = 'saurabh';
   pass: number = 12345;
   

  constructor(
    public http: HttpClient
  ) { }
  
  
  login(username: string, password: number){ 
		if (password == this.pass && username == this.user){
			 this.showLogin = false;
			 this.startTimer();
			 this.makeHttpCall() ;
		}	
      else{
	 alert("invalid password or username")		
	  }
}

logout() {	
	this.showLogin = true;
}

startTimer() {
	this.play = true
    this.interval = setInterval(() => {
        this.time++;

    },1000)
}

  makeHttpCall() {
    this.http.get('https://jsonplaceholder.typicode.com/comments')
      .subscribe((r) => {
        console.log(r);
      });
  }
}