function dodaj(inputId, cvId) {
    let input = document.getElementById(inputId);
    let cv = document.getElementById(cvId);
    input.addEventListener("keydown", function(e){   
      if (e.code == "Enter") {
        let inputText = input.value + "&nbsp";
        if(input.value != 0){
        cv.innerHTML = inputText;
        input.value = "";
      }
      else{
        alert("Pole nie może być puste!");
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
dodaj("startdate2", "datestart2");
dodaj("enddate2", "dateend2");
dodaj("position", "stanowisko");
dodaj("employer", "pracodawca");
dodaj("citywork", "miejscowoscpracy");
dodaj("workstartdate", "startpracy");
dodaj("workenddate", "zakonczeniepracy");

let addneweducation = document.getElementById("addneweducation");
let adfr = document.getElementById("disp");
addneweducation.addEventListener("click", function(){
  let newid = "display";
  disp.id = newid; 
  document.getElementById("addneweducation").style.display = "none";
});


let skill = document.getElementById("skill");
skill.addEventListener("keydown", function(eve){
  if (eve.code == "Enter"){ 
      let skills = document.getElementById("skills");
      let newItem = document.createElement("h5");
      newItem.addEventListener("contextmenu", function(e){
        this.remove();
        e.preventDefault();
      });
      let text = document.createTextNode(document.getElementById("skill").value);
      newItem.appendChild(text);
      skills.append(newItem);
      let reset = document.getElementById("skill").value="";
}
});

let descriptionskill = document.getElementById("descriptionskill");
descriptionskill.addEventListener("keydown", function(eve){
  if (eve.code == "Enter"){ 
      let skills = document.getElementById("skills");
      let newItem = document.createElement("p");
      newItem.addEventListener("contextmenu", function(e){
        this.remove();
        e.preventDefault();
      });
      let text = document.createTextNode(document.getElementById("descriptionskill").value);
      newItem.appendChild(text);
      skills.append(newItem);
      let reset = document.getElementById("descriptionskill").value="";
}
});

let language = document.getElementById("language");
language.addEventListener("keydown", function(eve){
  if (eve.code == "Enter"){ 
      let jez = document.getElementById("jez");
      let newItem = document.createElement("h5");
      newItem.addEventListener("contextmenu", function(e){
        this.remove();
        e.preventDefault();
      });
      let text = document.createTextNode(document.getElementById("language").value);
      newItem.appendChild(text);
      jez.append(newItem);
      let reset = document.getElementById("language").value="";
}
});

let description = document.getElementById("description");
description.addEventListener("keydown", function(eve){
  if (eve.code == "Enter"){ 
      let jez = document.getElementById("jez");
      let newItem = document.createElement("p");
      newItem.addEventListener("contextmenu", function(e){
        this.remove();
        e.preventDefault();
      });
      let text = document.createTextNode(document.getElementById("description").value);
      newItem.appendChild(text);
      jez.append(newItem);
      let reset = document.getElementById("description").value="";
}
});
