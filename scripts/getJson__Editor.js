$(".editor").click(function () {

    $.getJSON('json/jsonCICLIC.json', function (data) {
        data.forEach(function (objet, index) {
            var autor = objet.Cibles.indexOf("EDITEUR") > -1;


            if (autor) {

                document.querySelectorAll('.cibless').forEach((cibles) => {
                    console.log(cibles)
                    if (!cibles.textContent.includes('EDITEUR')) {
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