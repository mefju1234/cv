let nam = document.getElementById("name");
let namcv = document.getElementById("imie")
nam.addEventListener("keydown", function(na){
    if (na.code == "Enter"){ 
        let nametext = document.getElementById("name").value + "&nbsp";
        namcv.innerHTML = nametext;
        let reset = document.getElementById("name").value = "";
        
    }
});

let surname = document.getElementById("surname");
let surnamecv = document.getElementById("nazwisko")
surname.addEventListener("keydown", function(sur){
    if (sur.code == "Enter"){ 
        let surnametext = document.getElementById("surname").value;
        surnamecv.innerHTML = surnametext;
        let reset = document.getElementById("surname").value = "";
    }
});

let header = document.getElementById("header");
let headercv = document.getElementById("naglowek")
header.addEventListener("keydown", function(he){
    if (he.code == "Enter"){ 
        let headertext = document.getElementById("header").value;
        headercv.innerHTML = headertext;
        let reset = document.getElementById("header").value = "";
    }
});

let mail = document.getElementById("mail");
let mailcv = document.getElementById("mailcv")
mail.addEventListener("keydown", function(mai){
    if (mai.code == "Enter"){ 
        let mailtext = document.getElementById("mail").value + "";
        mailcv.innerHTML = mailtext;
        let reset = document.getElementById("mail").value = "";
    }
});

let numer = document.getElementById("numer");
let numercv = document.getElementById("num")
numer.addEventListener("keydown", function(nu){
    if (nu.code == "Enter"){ 
        let numertext = document.getElementById("numer").value;
        numercv.innerHTML = numertext;
        let reset = document.getElementById("numer").value = "";
    }
});

let livinplace = document.getElementById("livingplace");
let livinplacecv = document.getElementById("adres")
livinplace.addEventListener("keydown", function(lp){
    if (lp.code == "Enter"){ 
        let livinplacetext = document.getElementById("livingplace").value;
        livinplacecv.innerHTML = livinplacetext;
        let reset = document.getElementById("livingplace").value = "";
    }
});

let postcode = document.getElementById("postcode");
let postcodecv = document.getElementById("kodpocztowy")
postcode.addEventListener("keydown", function(pc){
    if (pc.code == "Enter"){ 
        let postcodetext = document.getElementById("postcode").value;
        postcodecv.innerHTML = postcodetext;
        let reset = document.getElementById("postcode").value = "";
    }
});

let city = document.getElementById("city");
let citycv = document.getElementById("miasto")
city.addEventListener("keydown", function(ci){
    if (ci.code == "Enter"){ 
        let citytext = document.getElementById("city").value;
        citycv.innerHTML = citytext;
        let reset = document.getElementById("city").value = "";
    }
});
