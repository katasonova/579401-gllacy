 var product1 = document.querySelector("#product-1");
    var product2 = document.querySelector("#product-2");
    var product3 = document.querySelector("#product-3");
    var body = document.querySelector("body");

    product1.addEventListener("click", function(evt) {
      body.classList.add("js-slider-1");
      body.classList.remove("js-slider-2");
      body.classList.remove("js-slider-3");
    });

    product2.addEventListener("click", function(evt) {
      body.classList.add("js-slider-2");
      body.classList.remove("js-slider-1");
      body.classList.remove("js-slider-3");
    });

    product3.addEventListener("click", function(evt) {
      body.classList.add("js-slider-3");
      body.classList.remove("js-slider-1");
      body.classList.remove("js-slider-2");
    });
