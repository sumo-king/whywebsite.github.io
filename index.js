
$(document).ready(function() {

    let project = '';
    $.getJSON('projects.json', function (data) {
        $.each(data, function(key, value) {

            project += `<div class="portfolio" id="portfolio">`+
                `<div class="portfolio-image">` +
                    `<img width=430px height=350px style="object-fit: cover; border-radius:1rem;" src=${value.image}>`+
                `</div>`+
                `<div class="portfolio-details">`+
                    `<h3>${value.name}</h3>`+
                    `<h2>${value.sub}</h2>`+
                    `<p>${value.description}</p>`+
                    `<a href="${value.url}">View Project</a>`+
                `</div>`+
            `</div>`;
            $(`.my-portfolios`).html(project);
        });
        
    });
});

