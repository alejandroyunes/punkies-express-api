import express from 'express'
import blogSchema from "../models/blog"
import * as blogServices from '../services/blogServices'

const router = express.Router()

router.get('/', async (_, res) => {
    blogSchema.find().then((result) => { return res.send(result) }
    ).catch(err => console.log(err))
})


router.get('/des', async (_, res) => {
    const blog = await blogServices.getBlogEntriesWithoutDescription();
    return res.send(blog)
})

// router.post("/post", (req, res) => {
//     const user = new blogSchema(req.body)
//     user.save()
//         .then((data) => res.json(data))
//         .catch((error) => res.json({ message: error }))
// });

// const newEntry = new blogSchema(
//     {
//         "slug": "cancion-de-locos",
//         "category": "canciones",
//         "title": "Cancion de locos",
//         "brief": "Si en una canción normal llueve, en esta canción no escampa. La escribí para \"Canciones del manicomio\" y es una autobiografía, por lo menos a mí me estoy mirando para la descripción y así es como me vestía y me visto aún con medias de color cambiado, con botas raspadas y chaquetas que a algunos les da pena.",
//         "description": "Si en una canción normal llueve, en esta canción no escampa. La escribí para \"Canciones del manicomio\" y es una autobiografía, por lo menos a mí me estoy mirando para la descripción y así es como me vestía y me visto aún con medias de color cambiado, con botas raspadas y chaquetas que a algunos les da pena. Rotas porque muestran que estuvieron en la guerra y que llevan mucho tiempo conmigo. \"Tengo dos medias distintas, botas de cuero raspadas, el dolor sobre la almohada y de paso hasta oigo tú voz\". Es indudable que hay una belleza poética en decir que el dolor está sobre la almohada, que allí reposo mi cabeza. No es que yo tuviera problemas especiales, los mismos de todo el maldito mundo porque ni en eso somos originales. Me agobiaba tal vez , alguna chica que me despreció y que seguramente ya olvidé como cualquiera. Tal vez me dolía el mundo de una manera menos leve que ahora, pero en esa almohada recostaba mis problemas. No para la descripción que alguna vez hicieran mis padres de mi vestimenta: \"Soy lo que soy vivo puesto, mi camisa es la tristeza, mi pantalón pataletas y mi chaqueta es la soledad\" Porque yo exigía el color y unos bolsillos que le cosía a mano en los laterales y si no era así, no me los ponía. Es por eso que \"Mi pantalón pataletas\" y mi abandonada chaqueta, así lo parecía, era la soledad en flor. \"Entre los libros me escondo, entre armas y anatemas, para no tener cadenas a todo le digo adiós.\" El que me conoce de hoy o de ayer sabe que me encantan las armas y las coleccioné a montón, aún hoy tengo algunas pegadas en las paredes y las artes marciales han sido muy serias para mí y que, mal que bien, alguna cosa leo en cuestión de libros y trato de leerme al menos un libro a la semana y, por aquella época, abandoné mis colecciones de armas y a todo le dije adiós. Se explica por sí sola la letra de la canción y les dije que me miraba a mí al componerla. \"Tengo en mi voz un desierto, a la muerte en la mirada, con la cabeza embotada me dijiste vuelve hoy amor.\" Esos dramas infantiles del amor donde el uno renuncia por una idea cuando el otro se adhiere y renuncia por el otro otro y termina en caos y en una especie de melodrama. Esa manía de querer lo que no se quiere y amar lo que te odia. Creo que eso quise transmitir con el \"Vuelve hoy amor\", el no querer amarrarse al amor que te aupaba a volver. El coro era una queja real \"Y mis manos no las siento ya, un hormigueo las inmunizó. Mi cabeza no está clara, la academia lo dictaminó. Mis ojos desorbitados y mi cabello alborotado lo demuestran mucho más.\" La descripción es real, por aquella época sentía calambres en las manos y me temblaban, tal cual hoy, pero hoy no me importa y la medicina dijo que yo no me encontraba muy bien y que debía controlar los hormigueos con alguna droga. Si quieren les cuento la cara de loco de cualquier roquero de hoy día, así no tengo que explicar \"Mis ojos desorbitados y mi cabello alborotado\". La cosa más natural del mundo y se daban a hacer un diagnóstico con eso. La última estrofa es desquite con la medicina y la gente de modo: \"Me hacen falta mis problemas, aunque tengo suficientes, para vivir al corriente, a veces hace falta sufrir. Y tú que lo tienes todo, dios, cadena y compromiso, ni a la fuerza ni aún con permiso, me cambiaría yo por tu piel.\" Por rezar y llevar esa cadena no me cambio y no le pido a nadie. Total ahí estaba todo yo. Nunca me llamó la atención el suicidio, pero leía bastante a Vargas Vila y a Cioran que lo ensalzaban y por eso adicioné esta parte con una repetición en el coro: \"Para no tener condenas, para no tener cadenas... a todo digo adiós.\" Que bueno deshacerse de todo por la vía más rápida, pero la vía menos honorable, aunque algunos la defienden con ahínco. Sus más afamados defensores ya están muertos porque sabían que nada valía la pena. Yo no puedo defenderla porque nunca he tenido el valor de no tenerlo. Termina la canción en tempo vivace y es el espejo el que al ver tal cara se sorprende y le dice una verdad ineludible. Puede ser necesario decir que el espejo es la imagen que a sí mismo se habla al verse en tan deplorable condición: \"Voy a encontrarme con otro, otro igual que está en mi espejo y ese me mira y me da un consejo: No salgas hoy que estás muy mal.\"\n\nPS: Desde que empecé a hacer acústicos P.A.N. de P.B.P. con MALOPTERS RECORDS esta canción no falta en un evento. Y si a estas alturas del libro aún no saben lo que son estas siglas y sustantivos, les recomiendo ir a la página indicada.",
//         "date": "03/01/2023"
//     },
// )

// newEntry.save().then(() => console.log('meow check'))

export default router