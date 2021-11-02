document.addEventListener("DOMContentLoaded",init);
function init(){
    document.getElementById("nev").addEventListener("input",nevValidacio);
    document.getElementById("jelszo").addEventListener("input",jelszoValidacio);
    document.getElementById("jelszo").addEventListener("change",jelszoIsmetValidacio);
    document.getElementById("jelszo_ismet").addEventListener("change",jelszoIsmetValidacio);
}
function validacio(){
    if (nevValidacio() && jelszoValidacio() && jelszoIsmetValidacio()){
        alert("Sikeres regisztráció");
        return true
    }
    alert("Sikertelen regisztráció");
    return false;
}
function nevValidacio(){
    let nev = document.getElementById("nev").value;
    let ki = document.getElementById("k_nev");
    let hossz = nev.length;
    ki.innerHTML = (hossz+"/20");
    if (hossz <= 20){
        ki.classList.remove("hiba");
        return true;
    }
    else{
        ki.classList.add("hiba");
        return false;
    }
}
function jelszoValidacio(){
    let jelszo = document.getElementById("jelszo").value;
    let ki = document.getElementById("k_jelszo");
    let hossz = jelszo.length;
    ki.innerHTML = (hossz+"/8");
    if (hossz >= 8){
        ki.classList.remove("hiba");
        return true;
    }
    else{
        ki.classList.add("hiba");
        return false;
    }
}
function jelszoIsmetValidacio(){
    let jelszo = document.getElementById("jelszo").value;
    let jelszoIsmet = document.getElementById("jelszo_ismet").value;
    let ki = document.getElementById("k_jelszo_ismet");
    if (jelszo === jelszoIsmet){
        ki.innerHTML = "Egyezik";
        ki.classList.remove("hiba");
        return true;
    }
    else{
        ki.innerHTML = "Nem egyezik";
        ki.classList.add("hiba");
        return false;
    }
}
