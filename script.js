if (ime === "" || email === "" ||
      pass1 === "" || pass2 === "") {
        poljeGreska.innerHTML = "Molimo popunite sva polja";
    }else if(ime.length > 10){
        poljeGreska.innerHTML = "Korisnicko ime ne sme da sadrzi vise od 10 karaktera";
    }else if(!ispravanEmail(email)){
        poljeGreska.innerHTML = "Email adresa nije pravilno uneta"; 
    }else if(!ispravnaLozinka(pass1)){
        poljeGreska.innerHTML = "Lozinka mora sadrzati najmanje 8 karaktera, veliko slovo, malo slovo i simbol"; 
    }else if(pass1 !== pass2){
        poljeGreska.innerHTML = "Lozinke se ne poklapaju";
    }else{
    document.write("<h1>Uspesna registracija</h1>");
}


function ispravanEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

function ispravnaLozinka(str)
    {
        var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return re.test(str);
    }

function proveraRegistracije() {
    let f = registracija;
    let ime = f.ime;
    let email = f.email;
    let pass1 = f.pass1;
    let pass2 = f.pass2;    

    let gIme = document.getElementById("greska-ime");
    let gEmail = document.getElementById("greska-email");
    let gpass1 = document.getElementById("greska-pass1");
    let gpass2 = document.getElementById("greska-pass2");

    let greska = {
        ime : false,
        email : false,
        pass1 : false,
        pass2 : false
    }

    if(ime.value.trim() === ""){
        greska.ime = "Ime je obavezno za unos";
        ime.classList.add('input-greska');
    }else if(ime.value.trim().length > 10){
        greska.ime = "Potpis ne sme sadrzati vise od 10 karaktera";
        ime.classList.add('input-greska');
    }

    
    if(email.value.trim() === ""){
        greska.email = "Email je obavezno za unos";
        email.classList.add('input-greska');
    }else if(!ispravanEmail(email.value.trim())){
        greska.email = "Email adresa nije pravilno uneta";
        email.classList.add('input-greska');
    }

    
    if(pass1.value.trim() === ""){
        greska.pass1 = "Lozinka je obavezna za unos";
        pass1.classList.add('input-greska');
    }else if(!ispravnaLozinka(pass1.value.trim())){
        greska.pass1 = "Lozinka nije pravilno uneta";
        pass1.classList.add('input-greska');
    }

    
    if(pass2.value.trim() === ""){
        greska.pass2 = "Potvrda lozinke je obavezna";
        pass2.classList.add('input-greska');
    }else if(pass1.value.trim() !== pass2.value.trim()){
        greska.pass2 = "Lozinke se ne poklapaju";
        pass2.classList.add('input-greska');
    }

    if(!greska.ime && !greska.email && !greska.pass1 && !greska.pass2){
        document.write("<h1>Uspesna rgistracija</h1>");
    }else{
        if(greska.ime){
            gIme.innerHTML = greska.ime;
        }else{
            gIme.innerHTML = "";
        }

        if(greska.email){
            gEmail.innerHTML = greska.email;
        }else{
            gEmail.innerHTML = "";
        }

        if(greska.pass1){
            gpass1.innerHTML = greska.pass1;
        }else{
            gpass1.innerHTML = "";
        }

        if(greska.pass2){
            gpass2.innerHTML = greska.pass2;
        }else{
            gpass2.innerHTML ="";
        }
    }

}

function restart(e) {
    e.classList.remove('input-greska');
    document.getElementById(`greska-${e.id}`).innerHTML = "";
}





// change navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})


// show/hide nav menu
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");


menuBtn.addEventListener('click', () =>{
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

// close nav menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)