
(function() {
    "use strict";
  
    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }
  
    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all)
      if (selectEl) {
        if (all) {
          selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
          selectEl.addEventListener(type, listener)
        }
      }
    }
  
    
    // liste de scrool 

    const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener)
    }

    /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });


    // responsive bar
    
    on('click', '.mobile-nav-toggle', function(e) {
      select('#navbar').classList.toggle('navbar-mobile')
      this.classList.toggle('bi-list')
      this.classList.toggle('bi-x')
    })
  
    // accueil accueil-caroussel
    let accueilCarouselIndicators = select("#accueil-carousel-indicators")
  let accueilCarouselItems = select('#accueilCarousel .carousel-item', true)

  accueilCarouselItems.forEach((item, index) => {
    (index === 0) ?
    accueilCarouselIndicators.innerHTML += "<li data-bs-target='#accueilCarousel' data-bs-slide-to='" + index + "' class='active'></li>":
      accueilCarouselIndicators.innerHTML += "<li data-bs-target='#accueilCarousel' data-bs-slide-to='" + index + "'></li>"
  });
  })()