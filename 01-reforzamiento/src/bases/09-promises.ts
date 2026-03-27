


const myPromise = new Promise<number>( (resolve, reject) => { // resolve como primer argumento es un modismo para las promesas (se puede llamar de otra forma)
    // los <> después de un promise es para decir que la promesa se resuelve (en este caso) con un número
    setTimeout(() => {
        //! YO QUIERO MI DINERO!!
        resolve(100);
        reject('Mi amigo se perdió')
    }, 2000); // 2 Segundos
})

myPromise.then((myMoney) => {
        console.log(`Tengo mi dinero ${myMoney}`)
    }).catch( reason => {
        console.log(reason)
    })
    .finally(() => {
        console.log('Pues a seguir con mi vida')
    });