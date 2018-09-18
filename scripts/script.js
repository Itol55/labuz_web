var mixer = mixitup('.tmp');

$("#dif").twentytwenty();

function PopUp(number) {
    modalImg.setAttribute("src", elements[number].children[0].getAttribute("src"));
    captionText.innerHTML = elements[number].children[1].innerHTML;
}

$("a.pop").click(function(){
    let imgSrc = "./images/big/" + $(this).children("img").attr("alt") + ".jpg";
    let text = $(this).children("p").html();
    $('#myModal div#caption').html(text);
    $('#img01').attr("src", imgSrc);
    $('#myModal').modal('show');
});

$("span.close").click(function(){
    $('#myModal').modal('hide');
});



/*
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var elements = document.querySelectorAll("a.pop")
var captionText = document.getElementById("caption");
var modalImg = document.getElementById("img01");

for(let i = 0; i<elements.length;i++)
{
    elements[i].addEventListener('click', function(){
        PopUp(i);
    });
}

function PopUp(number) {
    modal.style.display = "block";
    modalImg.setAttribute("src", elements[number].children[0].getAttribute("src"));
    captionText.innerHTML = elements[number].children[1].innerHTML;
}



// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
*/