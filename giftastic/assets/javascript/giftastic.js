$(document).ready(function(){

    $("button").on("click", function() {
        //got this from an assignment we did in class
        var nbaPlayer = $(this).attr("data-nbaPlayer");

        var giphyapi = "http://api.giphy.com/v1/gifs/search?q=" + nbaPlayer + "&api_key=0ZF0p9JTwCQrkSBUO7bA9pg4rY55tGdy&limit=10";

    

        $.ajax({
            url: giphyapi,
            method: "GET"
        })
        
        .then(function(response){ 
            
            var results = response.data;
            
            for (var i=0; i < results.lenth; i++) {

            var p = $("<p>");

            p.text(results[i].rating);

            var nbaPlayerImage = $("<img>");

            nbaPlayerImage.attr("src", results[i].images.fixed_height.url);
        }


        //Can't seem to figure out how to make the gifs show up on the page.



    })


})










