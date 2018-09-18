var mixer = mixitup('.tmp');

$("#dif").twentytwenty();

function SetUp(index) {
    let imgSrc = "./images/big/" + $("a.pop").eq(index).children("img").attr("alt") + ".jpg";
    $('#img01').attr("src", imgSrc);
}
var tmp;

$("a.pop").click(function(){

    tmp = $("a.pop").index(this);
    SetUp(tmp);
    $("#left").click(function() {
        if (tmp > 0) {
            tmp--;
        }
        else {
            tmp = $("a.pop").length-1;
        }
        SetUp(tmp);
    });
    $("#right").click(function() {
        if (tmp < $("a.pop").length-1) {
            tmp++;
        }
        else {
            tmp = 0;
        }
        SetUp(tmp);
    });

    $('#myModal').modal('show');
});

$("i.close2").click(function(){
    $('#myModal').modal('hide');
});

function CenterGallery() {
    let width = $("#img01").width();
    let height = $("#img01").height();

    let offsetX = ($(window).width() - width) / 2;
    let offsetY = ($(window).height() - height) / 2;

    let newTopForArrow = ($(window).height() - $("#left").height())/2;


    // Center image vertically in window
    $("#img01").css("left", offsetX);
    $("#img01").css("top", offsetY);

    // Center arrows vertically in window
    $("#left").css("top", newTopForArrow);
    $("#right").css("top", newTopForArrow);
}


$('#myModal').on('show.bs.modal', function () {
    $("#img01").on('load', function(){
        CenterGallery();
    });
});
$(window).on('resize', function(){
    CenterGallery();
});