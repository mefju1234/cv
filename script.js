function dodaj(inputId, cvId) {
    let input = document.getElementById(inputId);
    let cv = document.getElementById(cvId);
  
    input.addEventListener("keydown", function(e) {
      
      if (e.code == "Enter") {
        let inputText = input.value + "&nbsp";
        if(input.value != 0){
        cv.innerHTML = inputText;
        input.value = "";
      }
      else{
        alert("Pole nie może nie zawierać znaków!")
      }
    }
    });
  }

dodaj("name", "imie");
dodaj("surname", "nazwisko");
dodaj("header", "naglowek");
dodaj("mail", "mailcv");
dodaj("numer", "num");
dodaj("livingplace", "adres");
dodaj("postcode", "kodpocztowy");
dodaj("city", "miasto");
dodaj("birthday", "datauro");
dodaj("birthplace", "miejuro");
dodaj("gender", "plec");
dodaj("drivinglicense", "prawojazdy");
dodaj("educationlevel", "poziom");
dodaj("schoolname", "instytucja");
dodaj("schoolcity", "miejscowoscszkoly");
dodaj("startdate", "datestart");
dodaj("enddate", "dateend");
dodaj("educationlevel2", "poziom2");
dodaj("schoolname2", "instytucja2");
dodaj("schoolcity2", "miejscowoscszkoly2");
dodaj("startdate", "datestart2");
dodaj("enddate2", "dateend2");

let addneweducation = document.getElementById("addneweducation");
let adfr = document.getElementById("disp");
addneweducation.addEventListener("click", function(){
  let newid = "display";
  disp.id = newid; 
});

let addneweducation2 = document.getElementById("addneweducation");
let adhr = document.getElementById("disp2");
addneweducation2.addEventListener("click", function(){
  let newid = "dis";
  disp2.id = newid; 
});
