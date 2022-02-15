// document.querySelector("h1").innerHTML = "Hiiiii"
//   OR
// jQuery("h1").css("color","red")
//   OR
$("h1").css("color","red") 

// document.querySelectorAll("button")
// In jQuery
$("button") // This will select one or many there is no difference

// console.log($("h1").css("font-size"));

$("h1").addClass('big-title margin-50')

$("h1").text("Bye.")
$("button").text("Don't click me")

$("button").html("<em>Hey</em>")

$("img").attr("src")
$("a").attr("href","https://yahoo.com")


// Event listner in jQuerey
// $("h1").click(function() {
//     $("h1").css("color","purple")
// })

// JS
// for(var i = 0; i < 5; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function() {
//         document.querySelector("h1").style.color = "purple"
//     })
// }

// Using jQuery
// $("button").click(function() {
//     $("h1").css("color", "purple")
// })

// $("body").keypress(function(event) {
//     // console.log(event.key);
//     $("h1").text(event.key)
// })

// Instead of writting .click or .keypress events we can use .on which takes two parameters

$("h1").on("click", function() {
    $("h1").css("color","purple")
})

// $("button").on("click", function() {
//     $("h1").hide()
// })


// $("button").on("click", function() {
//     $("h1").fadeOut()
// })

// $("button").on("click", function() {
//     $("h1").fadeToggle()
// })

// $("button").on("click", function() {
//     $("h1").animate({opacity: 0.5})
// })

$("button").on("click", function() {
    $("h1").slideUp().slideDown().animate({opacity: 0.5})
})