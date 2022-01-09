function getData(){
    //pisemo kod koji ce se izvrsiti
    var country = document.getElementById("searchTerm").value;
    putData();
    axios.get(url+"country?name="+country+"&format=json")
    .then(({data})=> {
        for(let total of data){
            const confirmData = document.querySelector("#numberOfCases");
            const recoverData = document.querySelector("#numberOfRecovered");
            const deathData = document.querySelector("#numberOfDeaths");
            const criticalData = document.querySelector("#criticalCases");

            const totalConfirmed = total.confirmed.toLocaleString();
            const totalRecovered = total.recovered.toLocaleString();
            const totalCritical = total.critical.toLocaleString();
            const totalDeaths = total.deaths.toLocaleString();

            confirmData.innerHTML= totalConfirmed;
            recoverData.innerHTML=totalRecovered;
            deathData.innerHTML=totalDeaths;
            criticalData.innerHTML=totalCritical;
        }
    })
    .catch(function (error){
        console.log(error)
    });
}


function putData(){
    const dataWrap = document.querySelector("#dataWrap");
    dataWrap.innerHTML = `<div class="item">
    <i class="fas fa-file-medical-alt"></i>
    <p id="numberOfCases" class="number"></p>
    <p class="label">ukupan broj zaraženih</p>
</div>
<div class="item">
    <i class="fas fa-procedures"></i>
    <p id="numberOfRecovered" class="number" ></p>
    <p class="label">ukupan broj oporavljenih</p>
</div>
<div class="item">
    <i class="fas fa-skull-crossbones"></i>
    <p id="numberOfDeaths" class="number"></p>
    <p class="label">broj umrlih</p>
</div>
<div class="item">
    <i class="fas fa-file-medical-alt"></i>
    <p id="criticalCases" class="number"></p>
    <p class="label">broj kriticnih slucajeva</p>
</div>
`;
}