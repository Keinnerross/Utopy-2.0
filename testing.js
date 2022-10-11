const carts = [1,1,2,3,3];

let i = Math.floor(Math.random() * carts.length)

console.log(carts[i])


const estaciones= {
    primavera: 0.30,
    otoño: 0.50,
    invierno: 0.85,
    verano: 0.10
}


const lluviaProb = estaciones.invierno;

const r = Math.random();

if(r < lluviaProb){
    console.log("esta Lloviendo")
    console.log(Object.keys(estaciones))
}else{
    console.log("cielo Despejado")
}



/*definido
    primavera 30%
    otoño 50%
    invierno 85%
    verano 10%
*/