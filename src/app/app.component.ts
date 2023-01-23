import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  constructor(){
    this.fun1();
  }

  fun1(){
    let a = [1,3,5,7,9,2,4,6,1,3,5,6,7,8];
    let b = [];

    a.forEach(e => {
      if(b.indexOf(e) == -1){
        b.push(e);
      }
    })

    console.log("2222222 ", b)
  }
}
