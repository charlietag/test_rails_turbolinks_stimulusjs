// Visit The Stimulus Handbook for more details 
// https://stimulusjs.org/handbook/introduction
// 
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus"

export default class extends Controller {
//  static targets = [ "name" ]
//
//
//  showme() {
//    this.nameTarget.textContent = 'Hello, Stimulus!'
//    getNow
//    //get_date()
//    //$(document).on("turbolinks:load", function() {
//    //  $("#test").html("haha")
//    //})
//  }
//
//  //------------------------------------------------------------------
//  //constructor(n) {
//  //    this.n = n
//  //}
//
//  // connect in stimulus is so much like constructor in js class
//  connect(){
//    this.n = 0
//  }
//
//  //------------------------------------------------------------------
//  getNow() {
//    //var n = 1
//    //get_date() {
//      var date = new Date()
//      var dataValues = [
//         date.getHours(),
//         date.getMinutes(),
//         date.getSeconds(),
//         date.getMilliseconds(),
//      ]
//
//      var y = dataValues.join(":")
//      y = "("+this.n+"):"+y+"<br>"
//  //------------------------------------------------------------------
//  // --- Normal 1
//
//        $(
//          $("#test").append("("+this.n+"):"+y+"<br>")
//         )
//
//  // --- Normal 2
//      //this.nameTarget.textContent += y
//      //this.nameTarget.innerText += y
//      //this.nameTarget.innerHTML += y
//      
//  //------------------------------------------------------------------
//      this.n = (this.n + 1)
//    //}
//  }
  //------------------------------------------------------------------
  getNow() {
    // It's weired that stimulus cannot work with turbolinks:load ---> Maybe this is extract to connect() function
    //$(document).on("turbolinks:load", function() {
      window.alert('b')
    //}
  }
}
