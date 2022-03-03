let btnPlus = document.querySelectorAll('.dropDown-info')

function compare(clickValue){

    switch (clickValue) {
        case "box1":
        let box1 = document.getElementsByClassName('box1')
        box1.classList.contains('hidden')
            document.getElementsByClassName('box1').classList.toggle('show')
            document.getElementsByClassName('box1').classList.remove('hidden')
        

        


            document.getElementsByClassName('box2').classList.add('hidden')
            document.getElementsByClassName('box2').classList.remove('show')

            document.getElementsByClassName('box3').classList.add('hidden')
            document.getElementsByClassName('box3').classList.remove('show')
        
            
            break;
    
        default:
            break;
    }


}
let box1 = document.getElementsByClassName('box1')
//box1.classList.contains('hidden')
console.log(box1)





btnPlus.forEach(function(btn){

    btn.addEventListener('click', function(){
        
        boxSelec = btn.dataset.choice
        //compare(boxSelec)

        
    })

})

