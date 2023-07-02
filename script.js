// $("h1").css("color", "blue");
// $(".background-item").on("click", function () {
//     $(".background-item").addClass("highlighted");
// });

//turning capibara

$('#capibara').on("click", function () {
    $('#capibara').toggleClass('turnRight');

});


var cellNumber = 7

$(`.background-container > .background-item:nth-child(${cellNumber})`).css("border", "5px solid salmon");


// .background-container>.background-item:nth-child(1) {
//     border: 5px solid salmon;
// }
