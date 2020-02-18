const argv = require('yargs')
          .command('listar', 'imprime en consola la tabla de multiplicar',{
            base: {
              demand: true,
              alias: 'b'
            }
          })
          .argv

const { crearArchivo } = require('./multiplicar/multiplicar') // hag un destructuring para sacar la funcion del onbejto multiplicar

//let base = '5'

let argv2 = process.argv;

console.log(argv.base)



// crearArchivo(base)
//     .then(archivo =>{
//       console.log(`Archivo creado ${archivo}`)
//     })
//     .catch(err =>{
//       console.log(err)
//     })






