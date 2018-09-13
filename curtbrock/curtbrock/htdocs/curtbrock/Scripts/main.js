function showPopup(imgSrc) {
    var theImg = '<div class="wrap"><img src="'+imgSrc+'"></div>';
    $(".popup").empty().append(theImg).fadeIn();
}

$(".carousel img").on('click',function (){
    var theSrc = $(this).attr('src');
    showPopup(theSrc);
});
$(".popup").on('click', ".wrap", function(){
    $(".popup").fadeOut();
});

//submit data with jQuery AJAX
function submit() {
    var data = {
        Name: $('#Name ').val(),
        Company: $('#Company ').val(),
        Email: $('#Email').val(),
        Message: $('Message').val()
    };

    $.post("/Home/Subscribe", { formData: data },
        function () { alert('Successfully posted to server') });
}



