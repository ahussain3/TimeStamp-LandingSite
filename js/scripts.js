$(document).ready(function() {
    $("#scroll").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 200);        
    });
});