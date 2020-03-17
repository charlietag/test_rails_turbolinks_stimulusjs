+       //   Using html append is not good example for this test.
+       //  Use window.alert instead !!

//function get_date(){
//  var n = n || 1
//  var date = new Date()
//  dataValues = [
//     date.getHours(),
//     date.getMinutes(),
//     date.getSeconds(),
//     date.getMilliseconds(),
//  ]
//
//  var y = dataValues.join(":")
//    //$(
//      $("#test").append("("+n+"):"+y+"<br>")
//     //)
//  n = (n + 1)
//}

// --------------------------------------------------------------------------
// --- render double times everytime click A href ---
// --------------------------------------------------------------------------

// ----------- runs normally, just (n) will persist value even click to other page, and goes on adding --------------
//$(document).on("turbolinks:load", function() {
//  get_date()
//})
//$(document).on("turbolinks:load", function() {
//  window.alert('b')
//})

// It's weired that stimulus cannot work with turbolinks:load ---> Maybe this is extract to connect() function
// compare with : https://github.com/charlietag/test_rails_turbolinks_stimulusjs/blob/master/app/javascript/myjs/index.js



// But pure JS as below is OK
// add the single line as below, will cause nothing happen.  it's just like add turbolinks:load in stimulus controller
//$(document).on("turbolinks:load", function() {
$(document).on("turbolinks:load", function() {
  $("#click_me").click(function() {
    //get_date()
    window.alert('b')
  })
})
//})

//$(document).on('click', '#click_me', function() {
  //get_date()
//    window.alert('b')
//})


// -------------------------------------- Nothing happend ------------------------------------------------------------------
// - method 1 -
//  get_date()

// - method 2 -
//$(
//  get_date()
// )

//$("#click_me").click(function() {
//  get_date()
//})

//-----------------------------------------------------------------------------------------------------------------------------

//window.alert('Only the first time triggers !')
//document.addEventListener("turbolinks:load", function() {
//  window.alert('Everytime triggers !')
//})

