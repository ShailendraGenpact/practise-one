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
    this.fun2();
    this.fun3();
  }

  fun3(){
    let one = {id : 1,  add : "ghaziabad"};
    let two = {name : "def"};

    let three = Object.assign(two, one);
    console.log("@@@@@@@@@", three);

    three.id = 76;
    three.name ="shailendra";
  //  one.id = 999;
    two.name ="hhhhh";

    console.log("#########", three);

    console.log("one", one);
    console.log("two", two);

  }

  fun2(){ // not deep clone

    // let one = {id : 1,  add : "ghaziabad"};
    // let two = {name : "def"};

    // let three = {...one, ...two};
    // console.log("@@@@@@@@@", three);

    // three.id = 76;
    // three.name ="shailendra";
    // one.id = 999;
    // two.name ="hhhhh";

    // console.log("#########", three);

    // console.log("one", one);
    // console.log("two", two)
  }

  fun1(){
    // let a = [1,3,5,7,9,2,4,6,1,3,5,6,7,8];
    // let b = [];

    // a.forEach(e => {
    //   if(b.indexOf(e) == -1){
    //     b.push(e);
    //   }
    // })

    // console.log("2222222 ", b)
  }
}
