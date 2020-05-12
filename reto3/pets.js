load();

setInterval(load,5000);

function load() {
    var page = document.querySelectorAll(".carousel-item");
    for(i=0; i<4; i++) {
        traerAPI(page[i]);
    }
}

function traerAPI (pag) {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(data => {
        pag.innerHTML = `
        <a href="${data.message}" target="_blank">
            <img class="rounded mx-auto d-block" width=500 height=260 src="${data.message}" style="object-fit:cover" alt="...">
        </a>
        `
    })
}