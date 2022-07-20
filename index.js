const uf = document.querySelector('#uf')
const city = document.querySelector('#city')
const container3 = document.querySelector ('.container3')

//Day1:
const dayWeek = document.querySelector('#dayWeek')
const dateAns = document.querySelector('#date')
const Tmax = document.querySelector('#Tmax')
const Tmin = document.querySelector('#Tmin')

//Morning day1:
const icon = document.querySelector('#icon')
const period = document.querySelector('#period')
const resume = document.querySelector('#resume')

//Afternoon day1:
const icon2 = document.querySelector('#icon2')
const period2 = document.querySelector('#period2')
const resume2 = document.querySelector('#resume2')

//Night day1:
const icon3 = document.querySelector('#icon3')
const period3 = document.querySelector('#period3')
const resume3 = document.querySelector('#resume3')


//Day2:
const dayWeek2 = document.querySelector('#dayWeek2')
const dateAns2 = document.querySelector('#date2')
const Tmax2 = document.querySelector('#Tmax2')
const Tmin2 = document.querySelector('#Tmin2')

//Morning day2:
const icon21 = document.querySelector('#icon21')
const period21 = document.querySelector('#period21')
const resume21 = document.querySelector('#resume21')

//Afternoon day2:
const icon22 = document.querySelector('#icon22')
const period22 = document.querySelector('#period22')
const resume22 = document.querySelector('#resume22')

//Night day2:
const icon23 = document.querySelector('#icon23')
const period23 = document.querySelector('#period23')
const resume23 = document.querySelector('#resume23')


//Day3:
const dayWeek3 = document.querySelector('#dayWeek3')
const dateAns3 = document.querySelector('#date3')
const Tmax3 = document.querySelector('#Tmax3')
const Tmin3 = document.querySelector('#Tmin3')

//Morning day3:
const icon31 = document.querySelector('#icon31')
const period31 = document.querySelector('#period31')
const resume31 = document.querySelector('#resume31')

//Afternoon day3:
const icon32 = document.querySelector('#icon32')
const period32 = document.querySelector('#period32')
const resume32 = document.querySelector('#resume32')

//Night day3:
const icon33 = document.querySelector('#icon33')
const period33 = document.querySelector('#period33')
const resume33 = document.querySelector('#resume33')

window.addEventListener('load', loadUF)
uf.addEventListener('change', loadCity)
city.addEventListener('change', (e)=>{loadWeather(e.target.value)})

async function loadUF(){
    let response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    let data = await response.json();   

    const options = document.createElement("optgroup")
    options.setAttribute("label","Estados")
    data.forEach(function(uf){
        options.innerHTML += '<option>'+uf.sigla+'</option>'
    })
    uf.append(options)  
    if (!response.ok){
        console.log("Erro na requisição")
    }
}

async function loadCity(){
    let response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf.value}/municipios`)
    let data = await response.json();
    let optionsCity = ''
    data.forEach(function(city){
        optionsCity += '<option value='+city.id+'>'+city.nome+'</option>' 
    })
    city.innerHTML = optionsCity
    container3.style.display = "flex"
    
    if (!response.ok){
        console.log("Erro na requisição")
    }
}

async function loadWeather(id){
    let response = await fetch(`https://apiprevmet3.inmet.gov.br/previsao/${id}`)
    let data = await response.json()

    //Day1:
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const currentDate = day + '/' + month + '/' + year;

    dateAns.innerHTML = "Data: " + currentDate
    dayWeek.innerHTML = "Dia da semana:     " + data[id][currentDate]["manha"]["dia_semana"]
    Tmax.innerHTML = "Tmax: " + data[id][currentDate]["manha"]["temp_max"]
    Tmin.innerHTML = "Tmin: " + data[id][currentDate]["manha"]["temp_min"]
    
    //Morning:
    period.innerHTML = "Período da manhã:"
    icon.src = data[id][currentDate]["manha"]["icone"]
    resume.innerHTML = "Resumo: " + data[id][currentDate]["manha"]["resumo"]

    //Afternoon:
    period2.innerHTML = "Período da tarde:"
    icon2.src = data[id][currentDate]["tarde"]["icone"]
    resume2.innerHTML = "Resumo: " + data[id][currentDate]["tarde"]["resumo"]

    //Night:
    period3.innerHTML = "Período da noite:"
    icon3.src = data[id][currentDate]["noite"]["icone"]
    resume3.innerHTML = "Resumo: " + data[id][currentDate]["noite"]["resumo"]

    
    //Day2:
    const date2 = new Date();
    date2.setDate(date.getDate()+1)
    const day2 = String(date2.getDate()).padStart(2, '0');
    const month2 = String(date2.getMonth() + 1).padStart(2, '0');
    const year2 = date2.getFullYear();
    const currentDate2 = day2 + '/' + month2 + '/' + year2;
    
    dateAns2.innerHTML = "Data: " + currentDate2
    dayWeek2.innerHTML = "Dia da semana:     " + data[id][currentDate2]["manha"]["dia_semana"]
    Tmax2.innerHTML = "Tmax: " + data[id][currentDate2]["manha"]["temp_max"]
    Tmin2.innerHTML = "Tmin: " + data[id][currentDate2]["manha"]["temp_min"]
    
    //Morning:
    period21.innerHTML = "Período da manhã:"
    icon21.src = data[id][currentDate2]["manha"]["icone"]
    resume21.innerHTML = "Resumo: " + data[id][currentDate2]["manha"]["resumo"]

    //Afternoon:
    period22.innerHTML = "Período da tarde:"
    icon22.src = data[id][currentDate]["tarde"]["icone"]
    resume22.innerHTML = "Resumo: " + data[id][currentDate2]["tarde"]["resumo"]

    //Night:
    period23.innerHTML = "Período da noite:"
    icon23.src = data[id][currentDate2]["noite"]["icone"]
    resume23.innerHTML = "Resumo: " + data[id][currentDate2]["noite"]["resumo"]


    //Day3:
    const date3 = new Date();
    date3.setDate(date2.getDate()+1)
    const day3 = String(date3.getDate()).padStart(2, '0');
    const month3 = String(date3.getMonth() + 1).padStart(2, '0');
    const year3 = date3.getFullYear();
    const currentDate3 = day3 + '/' + month3 + '/' + year3;
    
    dateAns3.innerHTML = "Data: " + currentDate3
    dayWeek3.innerHTML = "Dia da semana:     " + data[id][currentDate3]["dia_semana"]
    Tmax3.innerHTML = "Tmax: " + data[id][currentDate3]["temp_max"]
    Tmin3.innerHTML = "Tmin: " + data[id][currentDate3]["temp_min"]
    icon31.src = data[id][currentDate3]["icone"]
    resume31.innerHTML = "Resumo: " + data[id][currentDate3]["resumo"]

    if (!response.ok){
        console.log("Erro na requisição")
    }
}