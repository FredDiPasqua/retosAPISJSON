fetch("heroes.json")
.then(function(res){
    return res.json();
})
.then(function(data) {
    let html = "";
    data.forEach(function(tarjeta) {
        html += `
        <div class="carousel-item">
            <div class="card" style="width: 18rem;">
                <img id="img1" src="${tarjeta.imagen}" class="card-img-top" alt="...">
                <div id="card1" class="card-body">
                    <ul>
                        <li> <strong>Nickname:  </strong>${tarjeta.nickname}</li>
                        <li> <strong>Team:  </strong>${tarjeta.equipo}</li>
                        <li> <strong>Real Name:  </strong>${tarjeta.nombreReal}</li>
                        <li> <strong>From:  </strong>${tarjeta.planeta}</li>
                        <li> <strong>Skill:  </strong>${tarjeta.poder}</li>
                    </ul>
                </div>
            </div>
        </div>
        
        `
    })
    document.getElementById("main").innerHTML = html;

    var active = document.querySelectorAll(".carousel-item");
    active[0].className = "carousel-item active";
})
