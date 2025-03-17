// Script
const photo = document.getElementsByClassName("cardPhoto");
const photoLink = [];

for ( let i = 0; i < 6; i++ ) {
    fetch("https://lanciweb.github.io/demo/api/pictures/")
    .then( response => response.json() )
    .then( data => {

        photo[i].innerHTML = photo[i].innerHTML + `
                <div class="pin"></div>
                <div class="photo"><img src="${data[i].url}" alt="" style="width: 260px; display: block;"></div>
                <div class="caption"><span>${data[i].title}</span></div>
                <div class="caption date"><span>${data[i].date}</span></div>
        `;

        photoLink.push(data[i].url)
    });
}

// Click Photo
const overlay = document.getElementById("overlay");
const chiudiButton = document.getElementById("chiudi");

photo[0].addEventListener('click', function() {
        overlay.style.display = "block";
        chiudiButton.style.display = "block";
    }
);

photo[1].addEventListener('click', function() {
    overlay.style.display = "block";
    chiudiButton.style.display = "block";
}
);

photo[2].addEventListener('click', function() {
    overlay.style.display = "block";
    chiudiButton.style.display = "block";
}
);

photo[3].addEventListener('click', function() {
    overlay.style.display = "block";
    chiudiButton.style.display = "block";
}
);

photo[4].addEventListener('click', function() {
    overlay.style.display = "block";
    chiudiButton.style.display = "block";
}
);

photo[5].addEventListener('click', function() {
    overlay.style.display = "block";
    chiudiButton.style.display = "block";
}
);

// Chiudi Button
chiudiButton.addEventListener('click', function() {
    overlay.style.display = "none";
    chiudiButton.style.display = "none";
})