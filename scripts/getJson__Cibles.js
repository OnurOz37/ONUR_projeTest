$(".autor").click(function () {
    
    $.getJSON('json/jsonCICLIC.json', function (data) {
        data.forEach(function (objet, index) {
            var autor = objet.Cibles.indexOf("AUTEUR") > -1;

            
            if (autor) {

                document.querySelectorAll('.cibless').forEach((cibles) => {
                    console.log(cibles)
                    if (!cibles.textContent.includes('AUTEUR')) {
                        cibles.parentElement.remove();
                    }
                })

            }

            // var cibles = $('#liste .tab');
            // if(cibles.html!=autor){
            //     $("#liste").remove(); 
            // }




        });

    })

});