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

const newEntry = new blogSchema(
    {
        "slug": "ciudad-borgia",
        "category": "Canciones",
        "title": "Ciudad Borgia",
        "brief": "Otra vez 2018 y otra vez \"Cualquier parecido con la realidad es pura coincidencia\" y no puedo negar que tiene sus bases en esa canción de Lokillo: \"Voy de negro y me preguntas el porqué...\" ─\"hombre de negro\"─. Yo también me he preguntado por qué visto de negro y en el libro \"En pocas palabras\" de mi autoría, aparece que visto de negro porque me da la gana, porque me dura toda la semana y porque...",
        "description": "Otra vez 2018 y otra vez \"Cualquier parecido con la realidad es pura coincidencia\" y no puedo negar que tiene sus bases en esa canción de Lokillo: \"Voy de negro y me preguntas el porqué...\" ─\"hombre de negro\"─. Yo también me he preguntado por qué visto de negro y en el libro \"En pocas palabras\" de mi autoría, aparece que visto de negro porque me da la gana, porque me dura toda la semana y porque... Ahora me senté y diseccioné el pensamiento para reflejar algo más oscuro que corría por mis venas, recordé alguna novela nacional \"Lucifer está de visita\" y hasta alguna película de Norris \"Los héroes se visten de negro\" pero al pensarla me quedó pareja y me salió un verso completo. Pensé porqué vestimos de negro y en donde lo hacemos y caí en cuenta que eso no es de un estado, es de siempre y natural y quienes lo ven mal es por que su tierra, su tiempo y su cultura los llevan por los caminos de la moda: \"visto de negro en mi habitación, visto de negro en las calles, visto de negro es un buen color... visto de negro porque habito en la ciudad sin corazón, en la ciudad del dolor. Un poco de sangre no me hará cambiar, un poco de veneno no está mal, podrías encerrarme y aislarme en soledad y ni aún así me cambiarás.\" Es decir, no nos vestimos oscuro para aparentar sino que en cualquier parte estamos vestidos de la misma forma, y, aunque nos inciten con miles de colores y nos señalen por usar poco color, no vamos a cambiar por que sí. Aunque el rojo y el azul también están en nuestras prendas comunes. El negro es por la muerte, por el luto, por la depresión, por el cadáver de la fe y de la paciencia. Vestimos de negro porque dura más limpio, porque nos da la gana. La ciudad, que es cualquiera, que trata de consumirte y nivelarte con todos aplicando la tabula rasa social no cuenta por las amenazas o los coloquialismos de apartarte de su seno, incluso su veneno y sus amenazas sólo sirven para incentivarnos. \"Me criticas por mis sentidos, me criticas por mi vestir, me criticas por mi sonido, me criticas porque habito en la ciudad sin corazón...\" La crítica es pan diario y nada tiene que ver un color, una fe o un gusto, siempre hay alguien dispuesto a declarar lo que no somos basados en lo que ellos son y por tal la fe personal y propia es blasfemada en consenso por el que se encuentra afuera, habitante de esa mencionada ciudad. No es raro que mencione un nombre tan relacionado con los venenos en la historia, tal vez acababa de leer \"Los Borgia\" de Mario Puzo y se me ocurrió que esta sociedad es viperina y traicionera. \"Te molesta que te lo diga, te molesta que sea verdad, al momento no estoy en venta... no estoy en venta ni al mejor postor, ni aunque comparta su razón...\" Es decir, ya no estamos en venta, de ninguna manera, nuestro punto de vista no es negociable y nuestra actitud menos. Nos golpearán un poco y hasta nos vilipendiarán con esas lenguas viperinas, pero estamos firmes ante lo que ya ha sido nuestra vida. La intro es de una canción andina que recordaba de mi niñez, pero no pude saber cual ni encontrarla por la red. Lo que dice no sé que traduce, y la pronuncié como la recordaba \"...Llorará y sufrirá cuando yo me vaya...\" es la parte importante, porque de seguro, por más enemigos que me asedien, alguno tendrá que llorar cuando yo me vaya o mejor, cuando pase a ser parte del anonimato cósmico, ya por que sienta en serio mi muerte, ya porque le quito el placer de atacarme. ¿El color se volvió una forma de identificarnos? Sí. Lo defiendo en más de una manera, aunque no considere que exista una camisa de fuerza para ese tópico. Los rockeros somos oscuros y existen todas estas maneras de la canción en la que lo reflejamos: la actitud, el cinismo, la ropa, la arrogancia, el inconformismo, la arreligiosidad... Y garantizamos que un poco de sangre o una alícuota de veneno no nos hará cambiar. No tememos los anatemas de los curas, las amenazas del pillo de barrio ni nos asustan las etiquetas sociales, como García Márquez respondemos que este es nuestro traje de etiqueta y nuestro uniforme de combate.\n\nPS: Se dice la misma idea en diferentes tonos, en \"Momentum\" acústico planteé que no me importan tu ropa de flores ni tus mil colores porque ese abigarrado conjunto me da asco como las camisas de chalis y las prendas hawaianas y hombre que te quejas del único color que uso, aunque en verdad uso tres sobrios colores, que a mí las cosas simples.",
        "date": "12/29/2022",
        "dateString": "29 de Dic, 2022",
        "year": "2022"
    }

)

newEntry.save().then(() => console.log('data added'))

export default router