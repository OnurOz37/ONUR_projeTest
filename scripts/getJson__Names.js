$("#getdata-one").click(function () {

    var clicks = $(this).data('clicks');
    if (clicks) {
        // odd clicks
        $("#liste").find("tr:gt(0)").remove();
    } else {
        // even clicks


        $.getJSON("json/jsonCICLIC.json", function (data) {

            data.forEach(function (objet, index) {


                if (objet.Clefs.indexOf("DEVELOPPER/FINANCER/ACCOMPAGNER") > -1) {

                    let column = `
                        <tr>
                            <td>${objet.Name}</td>
                            <td class="domainess">${objet.Domaines}</td>
                            <td class="cibless">${objet.Cibles}</td>
                            <td>${objet.Node}</td>
                        </tr>
                    `;


                    // let cell3 = $("<td>").text(objet.Name)
                    // let cell4 = $("<td>").text(objet.Domaines)
                    // var cell5 = $("<td class='cibles'>").text(objet.Cibles)
                    // let cell6 = $("<td>").text(objet.Node)



                    // column.append(cell3)
                    // column.append(cell4)
                    // column.append(cell5)
                    // column.append(cell6)
                    //  column += $("</tr>")
                    document.getElementById('tableTbody').insertAdjacentHTML('beforebegin', column);
                    // $("#tableTbody").append(column)
                    // $("cell5").addClass("cibles"); 



                }


            })
        })
    }
    $(this).data("clicks", !clicks);




})

$("#getdata-two").click(function () {

    var clicks = $(this).data('clicks');
    if (clicks) {
        // odd clicks
        $("#liste").find("tr:gt(0)").remove();


    } else {
        // even clicks
        $.getJSON("/json/jsonCICLIC.json", function (data) {
            data.forEach(function (objet, index) {


                if (objet.Clefs.indexOf("TRANSMETTRE/FORMER") > -1) {

                    // let column = $("<tr>")

                    // let cell3 = $("<td>").text(objet.Name)
                    // let cell4 = $("<td>").text(objet.Domaines)
                    // let cell5 = $("<td>").text(objet.Cibles)
                    // let cell6 = $("<td>").text(objet.Node)



                    // column.append(cell3)
                    // column.append(cell4)
                    // column.append(cell5)
                    // column.append(cell6)


                    // $("#liste").append(column)
                    let column = `
                    <tr>
                        <td>${objet.Name}</td>
                        <td class="domainess">${objet.Domaines}</td>
                        <td class="cibless">${objet.Cibles}</td>
                        <td>${objet.Node}</td>
                    </tr>
                `;
                    document.getElementById('tableTbody').insertAdjacentHTML('beforebegin', column);




                }


            })
        })


    }
    $(this).data("clicks", !clicks);




})
$("#getdata-three").click(function () {

    var clicks = $(this).data('clicks');
    if (clicks) {
        // odd clicks
        $("#liste").find("tr:gt(0)").remove();
    } else {
        // even clicks


        $.getJSON("/json/jsonCICLIC.json", function (data) {
            data.forEach(function (objet, index) {


                if (objet.Clefs.indexOf("ORGANISER (rencontres / séances / ateliers ...") > -1) {

                    // let column = $("<tr>")

                    // let cell3 = $("<td>").text(objet.Name)
                    // let cell4 = $("<td>").text(objet.Domaines)
                    // let cell5 = $("<td>").text(objet.Cibles)
                    // let cell6 = $("<td>").text(objet.Node)



                    // column.append(cell3)
                    // column.append(cell4)
                    // column.append(cell5)
                    // column.append(cell6)


                    // $("#liste").append(column)
                    let column = `
                    <tr>
                        <td>${objet.Name}</td>
                        <td class="domainess">${objet.Domaines}</td>
                        <td class="cibless">${objet.Cibles}</td>
                        <td>${objet.Node}</td>
                    </tr>
                `;
                    document.getElementById('tableTbody').insertAdjacentHTML('beforebegin', column);




                }


            })
        })
    }
    $(this).data("clicks", !clicks);




})

$("#getdata-four").click(function () {

    var clicks = $(this).data('clicks');
    if (clicks) {
        // odd clicks
        $("#liste").find("tr:gt(0)").remove();
    } else {
        // even clicks


        $.getJSON("/json/jsonCICLIC.json", function (data) {
            data.forEach(function (objet, index) {


                if (objet.Clefs.indexOf("DECOUVRIR (livres / textes / films / archives ...)") > -1) {

                    // let column = $("<tr>")

                    // let cell3 = $("<td>").text(objet.Name)
                    // let cell4 = $("<td>").text(objet.Domaines)
                    // let cell5 = $("<td>").text(objet.Cibles)
                    // let cell6 = $("<td>").text(objet.Node)



                    // column.append(cell3)
                    // column.append(cell4)
                    // column.append(cell5)
                    // column.append(cell6)


                    // $("#liste").append(column)
                    let column = `
                    <tr>
                        <td>${objet.Name}</td>
                        <td class="domainess">${objet.Domaines}</td>
                        <td class="cibless">${objet.Cibles}</td>
                        <td>${objet.Node}</td>
                    </tr>
                `;
                    document.getElementById('tableTbody').insertAdjacentHTML('beforebegin', column);

                    // let cell4 = $("<td>").text(objet.Domaines)
                    // let cell5 = $("<td>").text(objet.Cibles)
                    // let cell6 = $("<td>").text(objet.Node)




                    // column.append(cell4)
                    // column.append(cell5)
                    // column.append(cell6)






                }


            })
        })
    }
    $(this).data("clicks", !clicks);




})