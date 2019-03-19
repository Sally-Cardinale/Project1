// grab info from text input (textarea)
// send it to the api 
// parse response from api
// output it into the textarea (translated box)

//add class active and remove all other class active (it's a jquery function)


function xmenButtonClicked() {
    var userInput = $('#xmen-input').val();
    searchGif(userInput);
}

function submitButtonClicked() {
    var userInput = $('#xmen-input').val();

    if (userInput) {
        $('#xmen-buttons').append("<button type='button' onclick='searchGif(\"" + userInput + "\")' class='btn btn-primary' value=' " + userInput + "'> " + userInput + " </button>");
    }
}

function searchGif(gifName) {
    $.ajax({
            url: 'https://api.giphy.com/v1/gifs/search?q= ' + gifName + ' &api_key=lKtAJLduKg5AKea2RtE4WJPj6tk4B1IW&limit=10',
            type: 'GET',
        })
        .done(function(response) {
            displayGif(response);
        })
}