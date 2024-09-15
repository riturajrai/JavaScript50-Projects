
document.querySelectorAll(".tabs li a").forEach(function(demo){
    demo.addEventListener("click", function(e){
        document.querySelectorAll(".tab-content div").forEach(function(conttent){
           conttent.classList.remove("active");
        });
            // Show the selected tab content
            document.querySelector(this.getAttribute('href')).classList.add('active');
    });
});

