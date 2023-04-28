import { useState } from "react"
import Validation from "./Validation"
import styles from './Form.module.css'

const Form = (props) => {
    let [ userData, setUserData ] = useState({
        email: '',
        password: '',
    })

    let [ errors, setErrors ] = useState({})

    const handleChange = (evento) => {
        setUserData({...userData,
        [evento.target.name]: evento.target.value
        })
        setErrors(Validation({
            ...userData,
            [evento.target.name]: evento.target.value
        }))
    }

    const handleSubmit = (evento) => {
        evento.preventDefault()
        if(Object.entries(errors).length === 0){
        props.login(userData)
        setUserData({})
        setErrors({})
        }
    }

    return (
        <div className={styles.contenedor}>
            <form onSubmit={handleSubmit} className={styles.formulario}>
                <h1 className={styles.title}>Iniciar Sesión</h1>
                <label >Correo Electrónico</label>
                <input className={styles.inputs} name="email" type="text" onChange={handleChange} value={userData.email} placeholder="Correo Electrónico"/>
                {errors.email ? (<p className={styles.error}>{errors.email}</p>) : null}
                <label >Contraseña</label>
                <input className={styles.inputs} name="password" type="text" onChange={handleChange} value={userData.password} placeholder="Contraseña"/>
                {errors.password ? (<p className={styles.error}>{errors.password}</p>) : null}
                <button className={styles.btn} type="submit">Ingresar</button>
            </form>
        </div>
    )
}

export default Form