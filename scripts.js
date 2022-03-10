function filter(filtre){

    let img = document.querySelectorAll('.imgGal')
    
    img.forEach(element =>{

        if (filtre == 'all' || element.classList.contains(filtre)) {
            element.classList.remove('hidden')
            element.classList.remove('hide')     
        }else{
            element.classList.add('hidden')
        }
    })
}
/* ------------------------------ */
/* ------Boutton plus moins------ */
/* ------------------------------ */

let accordionTitles = document.querySelectorAll(".accordionTitle");

accordionTitles.forEach((accordionTitle) => { accordionTitle.addEventListener("click", () => {

if (accordionTitle.classList.contains("is-open")) {
        accordionTitle.classList.remove("is-open");
    } else {
        let accordionTitlesWithIsOpen = document.querySelectorAll(".is-open");
        accordionTitlesWithIsOpen.forEach((accordionTitleWithIsOpen) => {
        accordionTitleWithIsOpen.classList.remove("is-open");
    });
    accordionTitle.classList.add("is-open");
    }
    });
});

/* -------------------------- */
/* ------Boutton burger------ */
/* -------------------------- */


let btnBurger = document.getElementById('btnBurger')
btnBurger.addEventListener('click', function(){

    let btnMenu = document.querySelectorAll('.btnMenu')

    btnMenu.forEach(function(btnM){

        btnM.classList.toggle('hidden')
    })
    
    if (document.getElementById('burger').classList.contains('fa-bars')) {
        
        document.getElementById('burger').classList.replace('fa-bars','fa-xmark')
    }else{
        document.getElementById('burger').classList.replace('fa-xmark','fa-bars')
    }

    
})



/* ---------------------------- */
/* ------Boutton top page------ */
/* ---------------------------- */
let topPage = document.getElementById('topPage')

topPage.addEventListener("click", function() {
    document.body.scrollIntoView({behavior: "smooth"});
});

/* -------------------------- */
/* ------Filtre galeire------ */
/* -------------------------- */

let btnFiltre = document.querySelectorAll('.choice')
btnFiltre.forEach(function(btnF){

    btnF.addEventListener('click', function(){
        
        btnSelec = btnF.dataset.choice
        filter(btnSelec)
    })
})


/* ----------------------------- */
/* ------Affichage galerie------ */
/* ----------------------------- */

if (window.screen.width < 695) {
    let fleur = document.querySelectorAll('.imgGal')
    
    fleur[0].classList.add('hide')
    fleur[1].classList.add('hide')
    fleur[2].classList.add('hide')
    fleur[3].classList.add('hide')
}
