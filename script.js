// const valorCadena = "Instituto Alfa Carabobo"
// const valorNumerico = 2024
// const valorBooleano = true

// const valorIndefinido = undefined
// const valorNulo = null

// const valorLista = [
//     "Oscar",
//     "Genesys",
//     "Manuel",
//     "Alexandra"
// ]

// const Usuario = {
//     name: "Oscar", 
//     age: 70,
//     email: "oscar@gmail.com",
//     password: "contraseña12",
//     address:{
//         country: "USA",
//         state: "Texas",
//         city: "San Antonio",
//         street: "calle 13"

//     }
// }

// // // console.log(Usuario)


// if (Usuario.age>=18) {
//     console.log ("Es mayor de edad")
// }
// else {
//     console.log ("No es mayor de edad")
// }

// const myFuncion = (num1, num2) => {

//     const suma = num1 + num2 


//     return suma

// }

// console.log (myFuncion(7,5))


console.log ( axios )

axios.get("https://leonardoapi.onrender.com/songs")
    .then((res) => {
        res.data.songs.map((song)=> {
            document.write(song.title)
        })
    })