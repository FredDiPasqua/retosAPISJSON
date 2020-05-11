fetch("heroes.json")
.then(function(res){
    return res.json();
})
.then(function(data) {
    for(i=0; i < 5; i++) {

        var carouselItems = document.querySelectorAll(".carousel-item");
        carouselItems[i].innerHTML =  `

        <div class="card" style="width: 18rem;">
            <img id="img1" src="${data[i].imagen}" class="card-img-top" alt="...">
            <div id="card1" class="card-body">
                <ul>
                    <li> <strong>Nickname:  </strong>${data[i].nickname}</li>
                    <li> <strong>Team:  </strong>${data[i].equipo}</li>
                    <li> <strong>Real Name:  </strong>${data[i].nombreReal}</li>
                    <li> <strong>From:  </strong>${data[i].planeta}</li>
                    <li> <strong>Skill:  </strong>${data[i].poder}</li>
                </ul>
            </div>
        </div>
        
        
        `
    }


})
