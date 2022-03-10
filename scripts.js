function compare(clickValue){

    switch (clickValue) {
        case "box1":
            document.getElementById('box1P').classList.toggle('hidden')


            if (document.getElementById('iconBox1').classList.contains('fa-plus')) {
                document.getElementById('iconBox1').classList.remove('fa-plus')
                document.getElementById('iconBox1').classList.add('fa-minus')
            } else {
                
                document.getElementById('iconBox1').classList.add('fa-plus')
                document.getElementById('iconBox1').classList.remove('fa-minus')
            }
            break;

        case "box2":
            document.getElementById('box2P').classList.toggle('hidden')
            if (document.getElementById('iconBox2').classList.contains('fa-plus')) {
                document.getElementById('iconBox2').classList.remove('fa-plus')
                document.getElementById('iconBox2').classList.add('fa-minus')

            } else {
                document.getElementById('iconBox2').classList.add('fa-plus')
                document.getElementById('iconBox2').classList.remove('fa-minus')
            }
            break;

        case "box3":
            document.getElementById('box3P').classList.toggle('hidden')
            if (document.getElementById('iconBox3').classList.contains('fa-plus')) {
                document.getElementById('iconBox3').classList.remove('fa-plus')
                document.getElementById('iconBox3').classList.add('fa-minus')
            } else {
                document.getElementById('iconBox3').classList.add('fa-plus')
                document.getElementById('iconBox3').classList.remove('fa-minus')
            }
            break;

        case "burger":

            let btnMenu = document.querySelectorAll('.btnMenu')

            btnMenu.forEach(function(btnM){

                btnM.classList.toggle('hidden')
            })
            
            if (document.getElementById('burger').classList.contains('fa-bars')) {
                
                document.getElementById('burger').classList.replace('fa-bars','fa-xmark')
            }else{
                document.getElementById('burger').classList.replace('fa-xmark','fa-bars')
            }

            break;
    }
}


function filter(filtre){

    let img = document.querySelectorAll('.imgGal')
    
    img.forEach(element =>{

        if (filtre == 'all' || element.classList.contains(filtre)) {
            element.classList.remove('hidden')
        }else{
            element.classList.add('hidden')
        }
    })
}
/* ------------------------------ */
/* ------Boutton plus moins------ */
/* ------------------------------ */
let btnPlus = document.querySelectorAll('.dropDownInfo')
btnPlus.forEach(function(btn){
    btn.addEventListener('click', function(){
        
        boxSelec = btn.dataset.choice
        compare(boxSelec)
    })
})

/* -------------------------- */
/* ------Boutton burger------ */
/* -------------------------- */
let btnBurger = document.getElementById('btnBurger')
btnBurger.addEventListener('click', function(){

    btnSelec = btnBurger.dataset.choice
    compare(btnSelec)
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
