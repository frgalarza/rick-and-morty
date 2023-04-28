import styles from './About.module.css'

const About = () => {
 return (
    <div className={styles.divContainer}>
        <div className={styles.divDatos}>
            <h1>Franco Galarza</h1>
            <h2 className={styles.titles}>Estudios</h2>
            <p className={styles.info}> Full Stack Develloper - SoyHenry - 2023/en curso
            Ingenieria en Sistemas de Informacion - UTN.BA - 2020/En curso</p>
            <h2 className={styles.titles}>Ocupacion</h2>
            <p className={styles.info}>Estudiante</p>
        </div>
        <img className={styles.img} src="img/recorte.jpg" alt="Yo" />
    </div>
 )
}

export default About