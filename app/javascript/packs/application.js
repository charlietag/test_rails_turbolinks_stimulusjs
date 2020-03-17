import "jquery/src/jquery"
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

// --- Use Self defined js files (just like assets pipeline era)---
//require("myjs")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

// --- Use stimulus ---
import "controllers"



//----------------------------------------------------------------------------------------------------------
// Both the following are all located in <head> 
// So the same result
// -> exec once
// -> Event trigger , requires turbolinks:load or requires binding document onClick event
//    * Not bind with document.ready
//    * Not bind with Ojb onClick
//----------------------------------------------------------------------------------------------------------
// ***** this could bind using "turbolinks:load" / "document onClick event" *****
//require("myjs")

// ***** This is just like binding using "document onClick event" *****
//import "controllers"


//----------------------------------------------------------------------------------------------------------
// Note
//----------------------------------------------------------------------------------------------------------
// * Both methods above are just like turbolinks + <script> in <head>
//  * Best practice (application.js under this rails project)

// * But if <script> in <body>, will cause js executed several times
//  *  wrong example (ref. application.html.erb under this rails project)
