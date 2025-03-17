// cardPhoto generator
const photoCollection = document.getElementById("photoCollection");

for ( let i = 0; i < 6; i++ ) {
    photoCollection.innerHTML = photoCollection.innerHTML + `
    <div><button class="cardPhoto"></button></div>
    `
};

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
const openPhoto = document.getElementById("openPhoto");

photo[0].addEventListener('click', function() {
        overlay.style.display = "block";
        chiudiButton.style.display = "block";
        openPhoto.style.display = "block";
        openPhoto.innerHTML = ` 
        <img src="${photoLink[0]}" alt="" style="width:100%"> 
        `;
    }
);

photo[1].addEventListener('click', function() {
    overlay.style.display = "block";
    chiudiButton.style.display = "block";
    openPhoto.style.display = "block";
    openPhoto.innerHTML = ` 
        <img src="${photoLink[1]}" alt="" style="width:100%"> 
        `;
}
);

photo[2].addEventListener('click', function() {
    overlay.style.display = "block";
    chiudiButton.style.display = "block";
    openPhoto.style.display = "block";
    openPhoto.innerHTML = ` 
        <img src="${photoLink[2]}" alt="" style="width:100%"> 
        `;
}
);

photo[3].addEventListener('click', function() {
    overlay.style.display = "block";
    chiudiButton.style.display = "block";
    openPhoto.style.display = "block";
    openPhoto.innerHTML = ` 
        <img src="${photoLink[3]}" alt="" style="width:100%"> 
        `;
}
);

photo[4].addEventListener('click', function() {
    overlay.style.display = "block";
    chiudiButton.style.display = "block";
    openPhoto.style.display = "block";
    openPhoto.innerHTML = ` 
        <img src="${photoLink[4]}" alt="" style="width:100%"> 
        `;
}
);

photo[5].addEventListener('click', function() {
    overlay.style.display = "block";
    chiudiButton.style.display = "block";
    openPhoto.style.display = "block";
    openPhoto.innerHTML = ` 
        <img src="${photoLink[5]}" alt="" style="width:100%"> 
        `;
}
);

// Chiudi Button
chiudiButton.addEventListener('click', function() {
    overlay.style.display = "none";
    chiudiButton.style.display = "none";
    openPhoto.style.display = "none";
})