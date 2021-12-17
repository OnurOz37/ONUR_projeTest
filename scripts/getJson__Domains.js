$(".book").click(function () {

    $.getJSON('json/jsonCICLIC.json', function (data) {
        data.forEach(function (objet, index) {
            var autor = objet.Domaines.indexOf("LIVRE") > -1;


            if (autor) {

                document.querySelectorAll('.domainess').forEach((cibles) => {
                    console.log(cibles)
                    if (!cibles.textContent.includes('LIVRE')) {
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
$(".picture").click(function () {

    $.getJSON('json/jsonCICLIC.json', function (data) {
        data.forEach(function (objet, index) {
            var autor = objet.Domaines.indexOf("IMAGE") > -1;


            if (autor) {

                document.querySelectorAll('.domainess').forEach((cibles) => {
                    console.log(cibles)
                    if (!cibles.textContent.includes('IMAGE')) {
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