let btnPlus = document.querySelectorAll('.dropDownInfo')
let btnBurger = document.getElementById('btnBurger')


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

            break;
    }
}

btnPlus.forEach(function(btn){
    btn.addEventListener('click', function(){
        
        boxSelec = btn.dataset.choice
        compare(boxSelec)
    })
})

btnBurger.addEventListener('click', function(){

    btnSelec = btnBurger.dataset.choice
    compare(btnSelec)
})



let btnMenu = document.querySelectorAll('.btnMenu')
if (document.getElementById('body').clientWidth < 695) {

        btnMenu.forEach(function(btnM){

            btnM.classList.add('hidden')
            btnBurger.classList.remove('hidden')
        })
    
}else{
    btnMenu.forEach(function(btnM){

        btnM.classList.remove('hidden')
        btnBurger.classList.add('hidden')
    })
}





