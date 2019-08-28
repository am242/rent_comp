let dataDay;
const getAgendaByDate = () => {
    const date_field = document.getElementById("date_input").value;
    console.log(date_field);

    fetch('http://localhost:3000/getDayAgenda')
        .then(function(response) {
            return response.json()
        })
        .then(function(myJson) {
            const jsonText = myJson
            console.log(jsonText);
            const agendaList = document.getElementById("agenda_list");
            jsonText.forEach(element => {
                const li = document.createElement("li");
                const children = agendaList.children.length + 1
                li.appendChild(document.createTextNode(JSON.stringify(element)));
                agendaList.appendChild(li);
            });
            dataDay = jsonText;

        });

}
const calcCompPerHouer = () => {
    let counter = 0;
    console.log(dataDay[0]);
    dataDay.forEach(element => {
        counter += element["qty"];
    });

}