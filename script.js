
//turning capibara

$('#capibara').on("click", function () {
    $('#capibara').toggleClass('turnRight');

});

var img = $('<img id="capibara" src="./images/capibara-happy2.png"></img>')

//select grid cell
$(document).on('click', '.background-item', function () {//(check the second parameter because we usualy have 2)
    // Remove the "selected" class from all grid cells
    $('.background-item').removeClass('selected');

    // Add the "selected" class to the clicked grid cell
    $(this).addClass('selected');
    $(this).append(img);//why is the last img erasing?
});



// .background-container>.background-item:nth-child(1) {
//     border: 5px solid salmon;
// }
