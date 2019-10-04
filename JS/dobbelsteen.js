var btnDobbelsteen = document.getElementById("btnDobbelsteen");
var uitvoerDobbelsteen = document.getElementById("uitvoerDobbelsteen");

btnDobbelsteen.addEventListener("click", function() {
    let getal = getRandomInt(1, 6);
    let image = document.createElement("img");
    
    /*if(getal === 1) {
     image.src = "../img/Dobbelsteen1.PNG";  
    }
    
    uitvoerDobbelsteen.innerHTML = getal;
    uitvoerDobbelsteen.append(image);
    
        
    if(getal === 2) {
     image.src = "../img/Dobbelsteen2.PNG";  
    }
    
    uitvoerDobbelsteen.innerHTML = getal;
    uitvoerDobbelsteen.append(image);
        
    if(getal === 3) {
     image.src = "../img/Dobbelsteen3.PNG";  
    }
    
    uitvoerDobbelsteen.innerHTML = getal;
    uitvoerDobbelsteen.append(image);
            
    if(getal === 4) {
     image.src = "../img/Dobbelsteen4.PNG";  
    }
    
    uitvoerDobbelsteen.innerHTML = getal;
    uitvoerDobbelsteen.append(image);
            
    if(getal === 5) {
     image.src = "../img/Dobbelsteen5.PNG";  
    }
    
    uitvoerDobbelsteen.innerHTML = getal;
    uitvoerDobbelsteen.append(image);
            
    if(getal === 6) {
     image.src = "../img/Dobbelsteen6.PNG";  
    }
    uitvoerDobbelsteen.innerHTML = getal;
    uitvoerDobbelsteen.append(image);*/

    
    switch(getal) {
        case 1:
            image.src = "../img/Dobbelsteen1.PNG";
            break;
        case 2:
            image.src = "../img/Dobbelsteen2.PNG";
            break;
        case 3:
            image.src = "../img/Dobbelsteen3.PNG";
            break;
        case 4:
            image.src = "../img/Dobbelsteen4.PNG";
            break;
        case 5:
            image.src = "../img/Dobbelsteen5.PNG";
            break;
        case 6:
            image.src = "../img/Dobbelsteen6.PNG";
            break;
    }
    uitvoerDobbelsteen.innerHTML = "";
    uitvoerDobbelsteen.append(image);
});

//functie om een willekeurig getal te verkrijgen tussen min en max. Min en max zijn parameters die worden meegegeven wanneer de functie wordt aangeroepen.
function getRandomInt(min, max) {
    return Math.round(Math.random()*(max - min ) + min);
}