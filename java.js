
let liczba= document.getElementById("input")
const jednostka1= document.getElementById("inputtype");
const jednostka2= document.getElementById("resulttype")

// console.log(jednostka1.options)




function oblicz(){
    let value = jednostka1.value;
    //wybrana opcja
    const opcja1 = jednostka1.options[jednostka1.selectedIndex].value //km
    const opcja2 = jednostka2.options[jednostka2.selectedIndex].value //m

    // jednostka1.selectedIndex = opcja2

    // const wartoscInputa = liczba.value


    if (opcja1 === "km") {
        switch(opcja2) {
            case "m":
                document.getElementById("wynik").innerHTML=Math.round(liczba.value*1000)
               break;
               case "cm":
                document.getElementById("wynik").innerHTML=(liczba.value*100000)
               break;
               case "mm":
                document.getElementById("wynik").innerHTML=(liczba.value*1000000)
               break; 
        }

    }
    if(opcja1==="m"){
        switch(opcja2) {
            case "km":
                document.getElementById("wynik").innerHTML=(liczba.value/1000)
               break;
               case "cm":
                document.getElementById("wynik").innerHTML=(liczba.value*100)
               break;
               case "mm":
                document.getElementById("wynik").innerHTML=(liczba.value*1000)
               break; 
        }
    }
    if (opcja1 === "cm") {
        switch(opcja2) {
            case "m":
                document.getElementById("wynik").innerHTML=(liczba.value/100)
               break;
               case "km":
                document.getElementById("wynik").innerHTML=(liczba.value/100000)
               break;
               case "mm":
                document.getElementById("wynik").innerHTML=(liczba.value*10)
               break; 
        }

    }
    if (opcja1 === "mm") {
        switch(opcja2) {
            case "m":
                document.getElementById("wynik").innerHTML=(liczba.value/1000)
               break;
               case "km":
                document.getElementById("wynik").innerHTML=(liczba.value/1000000)
               break;
               case "cm":
                document.getElementById("wynik").innerHTML=(liczba.value/10)
               break; 
        }

    }
    console.log(opcja1)
    console.log(opcja2)
    console.log(liczba.value)

    // parseInt(liczba.value)

    // let wynik= document.getElementById("wynik");
    // document.getElementById("wynik").innerHTML=
}