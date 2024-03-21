
// 1.Booleanos

let booleano1 = true;
let booleano2 = false;

let booleanoAnd = booleano1 && booleano2

let booleanoOr = booleano1 || booleano2

let booleanoNot = !booleano1

let booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2))

// 2.Operadores

let valorDivision = 17/3

console.log(valorDivision.toFixed(2))

let valorResto = 17 % 7

console.log(valorResto)


// 3.Logica de programacion

let A = 9
let B = "9"

if(A == B){
    console.log("son iguales")
}
if(A === B){
    // Al ser triple igual, la igualdad entre las dos variables es mas especifica, por lo que no se cumple 
    console.log("ahora no lo son")
}

let mochila = []

if(mochila.length > 10){
    console.log("No puedo cargar con tantas cosas");
}else if(mochila.length >= 2 && mochila.length <= 10){
    console.log("Qué bien voy con mi mochila")
}else{
    console.log("Creo que no necesito una mochila")
}

let contarHasta10 = 0
for (let i = 0; i <= 10; i++){
    contarHasta10 = i
}
console.log(contarHasta10)

let diaFestivo = true

const seraono = diaFestivo = true  ? "Hoy no trabajo" : "Hoy trabajo";
console.log(seraono)

let arrayBucle = []

for (let index = 4; index <= 18; index++) {
    arrayBucle.push(index)
}
console.log(arrayBucle)

let resultado = 0
for (let index = 0; index < arrayBucle.length; index++) {
    resultado += arrayBucle[index]
}
console.log(resultado)

let array = ["Con", "Sofia", "aprendiendo", "bucles"]

for (const arr of array) {
    console.log(arr)
}

for (const arr in array) {
   console.log(arr)
}

let patata = 1
while (patata <= 20){
    if(patata % 3 === 0){
        console.log("patata")
    }
    patata++
}

let gente = [
    {
      nombre: "Jamiro",
      edad: 45,
    },
    {
      nombre: "Juan",
      edad: 35,
    },
    {
      nombre: "Paco",
      edad: 34,
    },
    {
      nombre: "Pepe",
      edad: 14,
    },
    {
      nombre: "Pilar",
      edad: 24,
    },
    {
      nombre: "Laura",
      edad: 24,
    },
    {
      nombre: "Jenny",
      edad: 10,
    },
  ];

let longarray = []
for (const person of gente) {
  if(person.nombre.length === 4){
    console.log(person)
  }
}
console.log("-")

let arrayJ = []
for (const person of gente) {
    if(person.nombre[0] === "J" && person.edad < 40){
        console.log(person)
    }
}

let ordenador = {
    marca : "La pava",
    tipo : "portátil",
    perifericos : ["a","touchPad"],
    almacenamiento : {
        discos : ["a","HDD"],
        maestro : 0
    },
}
 // TEST 1
 if (typeof ordenador === "object") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 2
  if (ordenador.marca === "La pava") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 3
  if (ordenador.tipo === "portátil") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 4
  if (ordenador.perifericos[1] === "touchPad") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 5
  if (ordenador["almacenamiento"]["discos"][1] === "HDD") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 6
  if (ordenador.almacenamiento.maestro === 0) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }

  console.log("-")

  let object = {
    name : "pepito",
    age : 25
  }
  let objeto2 = {
    name : "pepito",
    age : 10
  }
  let objeto3 = {
    name : "Juan",
    age : 5
  }
  let arr = [object,objeto2,objeto3]

   // TEST 1
   if (typeof arr === "object" && arr.length >= 0) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 2
  if (typeof arr[0] === "object") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 3
  if (typeof arr[1] === "object") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 4
  if (typeof arr[2] === "object") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 5
  if (arr.length === 3) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 6
  if (arr[0].name === arr[1].name) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 6
  if (arr[1].name === "pepito") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 7
  if (arr[1].age > arr[2].age) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 8
  if (arr[0].age === 25) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 9
  if (typeof arr[2].name === "string") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 10
  if (arr[2].name[0] === "J") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
