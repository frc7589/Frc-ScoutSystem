$(document).ready(function () {
    clickDiv = $(".clickDiv")
    //Add Div Shadow
    clickDiv.hover(
        function () {
            $(this).addClass('shadow').css('cursor', 'pointer');
        },
        function () {
            $(this).removeClass('shadow');
        }
    );
    //Clickable Div
    clickDiv.click(function () {
        if (typeof $(this).data('handler') !== 'undefined') {
            var fn = window[$(this).data('handler')];
            if (typeof fn === "function") fn(this);
            return true;
        }
        if (typeof $(this).attr("href") !== 'undefined'){
            window.location = $(this).attr("href");
            return true;
        }
        return false;
    });
});