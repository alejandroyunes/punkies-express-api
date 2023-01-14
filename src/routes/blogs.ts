import express from 'express'
import blogSchema from "../models/blog"
import * as blogServices from '../services/blogServices'

const router = express.Router()

router.get('/', async (_, res) => {
    blogSchema.find().then((result) => { return res.send(result) }
    ).catch(err => console.log(err))
})

router.get('/brief', async (_, res) => {
    const blog = await blogServices.getBlogEntriesWithoutDescription();
    return res.send(blog)
})

router.post("/post", (req, res) => {
    const user = new blogSchema(req.body)
    user.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

// const newEntry = new blogSchema(
//     {
//         "slug": "medicinas-alternativas",
//         "category": "In Sermus Rusticus",
//         "title": "Medicinas Alternativas",
//         "brief": "La gente acepta la ciencia porque tiene mayores aciertos y se vuelve más accequible. Hace dos mil años no se encontraba un médico ni a palos y no quedaba más que rezarle a los dioses o ir donde algún chamán de turno para que moviera las manos y ejecutara ritos para aliviar al paciente, que, de otra manera, no tendría más remedio que morir sin esperanzas y los deudos ─habiéndolos─ pues, sin saber qué más hacer, les quedaba la hipocresía ─buena por cierto─ de pedir a los dioses alivio para el dolido.",
//         "description": " La gente acepta la ciencia porque tiene mayores aciertos y se vuelve más accequible. Hace dos mil años no se encontraba un médico ni a palos y no quedaba más que rezarle a los dioses o ir donde algún chamán de turno para que moviera las manos y ejecutara ritos para aliviar al paciente, que, de otra manera, no tendría más remedio que morir sin esperanzas y los deudos ─habiéndolos─ pues, sin saber qué más hacer, les quedaba la hipocresía ─buena por cierto─ de pedir a los dioses alivio para el dolido. Hoy, aunque faltan muchos hospitales y atención, tenemos a la ciencia en las manos y si alguien se desmaya o queda inconsciente en un accidente, acudimos a la ciencia para que nos lea un sinnúmero de variables que pueden dar cuenta de nuestra condición: presión arterial, latidos por minuto, saturación de oxígeno, reflejos, temperatura, color, proteínas o azúcar en sangre, pérdida de la integridad del circuito sanguíneo, color, tonía... La ciencia, con ensayo y error y una estadística muy a favor, practica lo que predica. Sabemos hacer transplantes de órganos y mantenerlos allí por buen tiempo y sabemos atacar y detener en parte el rechazo por parte del receptor y sabemos elegir con propiedad al donante más apto. Podemos tomar fotos opacas para determinar si hay órganos o huesos en mala posición e incluso podemos hacer una foto de sonido para determinar masas o situaciones anómalas en el cuerpo y ni que decir de las resonancias magnéticas y funcionales RMN y TEP... A la ciencia que abarca la medicina se le llama alópata donde contraria contrariis curantur, los contrarios se curan con los contrarios. Tiene sentido que si hay una vasodilatación peligrosa, se trate con un farmaco vasocompresor y que una herida no se agrande más sino que se cierre. De todas maneras la medicina científica trata de curar observando los síntomas y buscando las enfermedades subyacentes. Queda pues que la medicina también llamada occidental está basada en las evidencias y en los avances científicos. ¿Qué es la homeopatía? una de aquellas que llaman medicinas alternativas y que un poco de sentido común puede poner en la cazuela como pseudociencia. La inventó un médico alemán por allá en el siglo XIX, un hombre de apellido Hahnemann, que basado en la \"ley de los similares\" aquello de que similia similibus curantur o que lo similar cura lo similar o que aquello que reproduce la enfermedad en un individuo sano, puede curar al individuo enfermo y la \"ley de los infinitesimales\" donde la dilución infinita de un medicamento activo resulta más que efectivo. La homeopatía encuentra los males del cuerpo en el desequilibrio de los cuatro humores planteados por hipócrates. La homeopatía busca corregir el desequilibrio de los cuatro líquidos que componen el organismo: sangre, flema, bilis negra y bilis amarilla. La reflexoterapia, la acupuntura, la moxibustión y toda una batería de terapias alternativas o medicinas alternativas no están basadas en el método científico y aunque alguna pueda o quiera obtener gloria de sus curaciones no es claro cuales de ellas son remisiones naturales, efecto placebo o fortuita coincidencia. Cientos de páginas hablan bellezas de tales medicinas alternativas y las ponen a la par con la medicina científica y el hecho de que la gente las abrace queda en el desconsuelo de no encontrar cura para sus males en la ciencia, deseo y pulsión de vida y, repito una fuerte apreciación de Pablo Young: \"las pseudociencias son más populares que la ciencia porque la credulidad está más difundida que el espíritu crítico\" con la que estoy completamente de acuerdo. No habiendo más para donde coger porque la medicina científica no encuentra, ya por falta de exámenes por ahorrar en el tratamiento o por simple desinterés la cura para una dolencia, el individuo con una afectación busca alternativas y el medio se las ofrece ¿Dejaría usted de probar un tratamiento por más ridículo que se le presente? \n\nPS: Me preguntan que si ando de acuerdo con tales medicinas. Yo en lo personal creo que son patrañas y chascos que no tienen donde apoyarse, pero vaya dígale eso al desahuciado o mejor, hágaselo entender.",
//         "date": "12/28/2022",
//         "dateString": "28 de Dic, 2022",
//         "year": "2022"
//     },

// )

// newEntry.save().then(() => console.log('data added'))

export default router