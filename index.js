const burger = document.querySelector('.burger');
const sideMenu = document.querySelector('.menu-sidebar');
const closeMenu = document.querySelector('.close-menu');

$(document).ready(function() {
    
    let project = '';
    $.getJSON('projects.json', function (data) {
        $.each(data, function(key, value) {

            project += `<div class="portfolio" id="portfolio">`+
                `<div class="portfolio-image">` +
                    `<img  src=${value.image}>`+
                `</div>`+
                `<div class="portfolio-details">`+
                    `<h3>${value.name}</h3>`+
                    `<h2>${value.sub}</h2>`+
                    `<p>${value.description}</p>`+
                    `<a href="${value.url}">View Project</a>`+
                `</div>`+
            `</div>`+
            ` <a href="#about-me"><i class="fa-solid fa-angle-up porfolio-up"></i></a>`
            $(`.my-portfolios`).html(project);
        });
        
    });
});

burger.addEventListener('click', function (){
    sideMenu.style.transform = 'translate(0%)';
    const bodyOverLay = document.createElement("div");
    bodyOverLay.classList.add(".overlay");
    setTimeout(function(){
        document.querySelector("body").append(bodyOverLay); 
    },300)
})

closeMenu.addEventListener('click', function (){
    sideMenu.style.transform = 'translate(-100%)';
})