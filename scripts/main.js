// fetch('/json/jsonCICLIC.json')
// .then(function (response){
//     return response.json();

// })
// .then(function(data){
//     if(data) {
        
//         document.getElementById("data-one").innerHTML +=
//         data[0].Clefs; 
//         document.getElementById("data-two").innerHTML +=
//         data[9].Clefs; 
//         document.getElementById("data-three").innerHTML +=
//         data[11].Clefs; 
//         document.getElementById("data-four").innerHTML +=
//         data[19].Clefs;
        
//         document.getElementById("title-1").innerHTML += 
//         data[0].Name;
//         document.getElementById("title-2").innerHTML += 
//         data[1].Name;
//         document.getElementById("title-3").innerHTML += 
//         data[2].Name;
//         document.getElementById("title-4").innerHTML += 
//         data[3].Name;
//         document.getElementById("title-5").innerHTML += 
//         data[4].Name;
//         document.getElementById("title-6").innerHTML += 
//         data[5].Name;
//         document.getElementById("title-7").innerHTML += 
//         data[6].Name;
//         document.getElementById("title-8").innerHTML += 
//         data[7].Name;
//         document.getElementById("title-9").innerHTML += 
//         data[8].Name;
//         document.getElementById("title-10").innerHTML += 
//         data[9].Name;
//         document.getElementById("title-11").innerHTML += 
//         data[10].Name;
//         document.getElementById("title-12").innerHTML += 
//         data[11].Name;
//         document.getElementById("title-13").innerHTML += 
//         data[12].Name;
//     }
// }
// )

// .catch(function(err){
//     console.log(err);
// });

var afficherTout = document.getElementById('hidden-second');
var afficherAuteur = document.getElementById('hidden-autor');
let cases = document.querySelectorAll('.active');
var afficherFiltre = document.getElementById('hidden');





[].forEach.call(cases, function (ev) {
    ev.addEventListener('click', function (elem) {
        console.log(ev);
        cases.forEach(e => {
            console.log(e)
            e.classList.remove('active')
            e.classList.add('inactive')

        })
        ev.classList.remove('inactive')
        ev.classList.add('active')

        // afficherTout.style.display = 'block'
        afficherFiltre.style.display = 'block'
        // afficherAuteur.style.display = 'none'
    })
})



let liens = document.querySelectorAll('.lien');
[].forEach.call(liens, function (li) {
    li.addEventListener('click', function () {
        liens.forEach(l => {
            l.classList.remove('lien')
            // l.classList.remove('book')
            // l.classList.remove('image')
            l.classList.add('inactive')
    
        })
        li.classList.remove('inactive')
        // li.classList.add('book')
        // li.classList.add('image')
        li.classList.add('lien')

        
    })
    // .then(function(links){
    //     document.getElementById('aut').click(function(){
    //         if(links){
    //             document.getElementById('title-1').innerHTML += 
    //             links[0].Name; 
    //         }
    //     })
    // })
})

let bookImage = document.querySelectorAll('.book, .image');
[].forEach.call(bookImage, function (fu){
    fu.addEventListener('click', function(){
        bookImage.forEach(f=>{
            f.classList.remove('book')
            f.classList.remove('image')
            f.classList.add('inactive')
        })
        fu.classList.remove('inactive')
        fu.classList.add('book')
        fu.classList.add('image')
    })
})