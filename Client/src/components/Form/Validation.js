const Validation = (inputs) => {
    let errors = {}
    const regexEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/
    const regexPasswordLetras = /^(?=\w*[A-Z])(?=\w*[a-z])\S{6,10}$/
    // 
    //Comprobacion Email
    if(inputs.email.length === 0) errors.email = 'El usuario no puede estar vacío'
    else if(!regexEmail.test(inputs.email)) errors.email = 'El nombre de usuario tiene que ser un email'
    else if(inputs.email.length > 35) errors.email = 'El usuario no pude tener más de 35 caracteres'
    //Comprobacion contraseña
    if(!regexPasswordLetras.test(inputs.password)) errors.password = 'La contraseña tiene que tener una longitud entre 6 y 10 caracteres'
    else if(!inputs.password.match(/\d/)) errors.password = 'La contraseña debe tener al menos un numero'
    //Devuelvo el objeto con los errores
    return errors
}

export default Validation