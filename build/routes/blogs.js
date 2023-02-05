"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const blogServices = __importStar(require("../services/blogServices"));
const blogRouter = express_1.default.Router();
// router.get('/', async (_, res) => {
//   blogSchema
//     .find()
//     .then(result => {
//       return res.send(result)
//     })
//     .catch(err => console.log(err))
// })_
blogRouter.get('/brief', (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = yield blogServices.getBriefDescription();
    res.send(blog);
}));
// blogArray.forEach(e => {
//   const blog = new blogSchema(e)
//   return blog.save()
// })
// router.post('/post', (req, res) => {
//   const user = new blogSchema(req.body)
//   user
//     .save()
//     .then(data => res.json(data))
//     .catch(error => res.json({ message: error }))
// })
// const newEntry = new blogSchema(
//     {
//         "slug": "medicinas-alternativas",
//         "category": "63d75c1fe0283682a42ca763",
//         "title": "Medicinas Alternativas",
//         "brief": "La gente acepta la ciencia porque tiene mayores aciertos y se vuelve más accequible. Hace dos mil años no se encontraba un médico ni a palos y no quedaba más que rezarle a los dioses o ir donde algún chamán de turno para que moviera las manos y ejecutara ritos para aliviar al paciente, que, de otra manera, no tendría más remedio que morir sin esperanzas y los deudos ─habiéndolos─ pues, sin saber qué más hacer, les quedaba la hipocresía ─buena por cierto─ de pedir a los dioses alivio para el dolido.",
//         "description": " La gente acepta la ciencia porque tiene mayores aciertos y se vuelve más accequible. Hace dos mil años no se encontraba un médico ni a palos y no quedaba más que rezarle a los dioses o ir donde algún chamán de turno para que moviera las manos y ejecutara ritos para aliviar al paciente, que, de otra manera, no tendría más remedio que morir sin esperanzas y los deudos ─habiéndolos─ pues, sin saber qué más hacer, les quedaba la hipocresía ─buena por cierto─ de pedir a los dioses alivio para el dolido. Hoy, aunque faltan muchos hospitales y atención, tenemos a la ciencia en las manos y si alguien se desmaya o queda inconsciente en un accidente, acudimos a la ciencia para que nos lea un sinnúmero de variables que pueden dar cuenta de nuestra condición: presión arterial, latidos por minuto, saturación de oxígeno, reflejos, temperatura, color, proteínas o azúcar en sangre, pérdida de la integridad del circuito sanguíneo, color, tonía... La ciencia, con ensayo y error y una estadística muy a favor, practica lo que predica. Sabemos hacer transplantes de órganos y mantenerlos allí por buen tiempo y sabemos atacar y detener en parte el rechazo por parte del receptor y sabemos elegir con propiedad al donante más apto. Podemos tomar fotos opacas para determinar si hay órganos o huesos en mala posición e incluso podemos hacer una foto de sonido para determinar masas o situaciones anómalas en el cuerpo y ni que decir de las resonancias magnéticas y funcionales RMN y TEP... A la ciencia que abarca la medicina se le llama alópata donde contraria contrariis curantur, los contrarios se curan con los contrarios. Tiene sentido que si hay una vasodilatación peligrosa, se trate con un farmaco vasocompresor y que una herida no se agrande más sino que se cierre. De todas maneras la medicina científica trata de curar observando los síntomas y buscando las enfermedades subyacentes. Queda pues que la medicina también llamada occidental está basada en las evidencias y en los avances científicos. ¿Qué es la homeopatía? una de aquellas que llaman medicinas alternativas y que un poco de sentido común puede poner en la cazuela como pseudociencia. La inventó un médico alemán por allá en el siglo XIX, un hombre de apellido Hahnemann, que basado en la \"ley de los similares\" aquello de que similia similibus curantur o que lo similar cura lo similar o que aquello que reproduce la enfermedad en un individuo sano, puede curar al individuo enfermo y la \"ley de los infinitesimales\" donde la dilución infinita de un medicamento activo resulta más que efectivo. La homeopatía encuentra los males del cuerpo en el desequilibrio de los cuatro humores planteados por hipócrates. La homeopatía busca corregir el desequilibrio de los cuatro líquidos que componen el organismo: sangre, flema, bilis negra y bilis amarilla. La reflexoterapia, la acupuntura, la moxibustión y toda una batería de terapias alternativas o medicinas alternativas no están basadas en el método científico y aunque alguna pueda o quiera obtener gloria de sus curaciones no es claro cuales de ellas son remisiones naturales, efecto placebo o fortuita coincidencia. Cientos de páginas hablan bellezas de tales medicinas alternativas y las ponen a la par con la medicina científica y el hecho de que la gente las abrace queda en el desconsuelo de no encontrar cura para sus males en la ciencia, deseo y pulsión de vida y, repito una fuerte apreciación de Pablo Young: \"las pseudociencias son más populares que la ciencia porque la credulidad está más difundida que el espíritu crítico\" con la que estoy completamente de acuerdo. No habiendo más para donde coger porque la medicina científica no encuentra, ya por falta de exámenes por ahorrar en el tratamiento o por simple desinterés la cura para una dolencia, el individuo con una afectación busca alternativas y el medio se las ofrece ¿Dejaría usted de probar un tratamiento por más ridículo que se le presente? \n\nPS: Me preguntan que si ando de acuerdo con tales medicinas. Yo en lo personal creo que son patrañas y chascos que no tienen donde apoyarse, pero vaya dígale eso al desahuciado o mejor, hágaselo entender.",
//         "date": "12/28/2022",
//         "dateString": "28 de Dic, 2022",
//         "year": "2022"]
//     },
// )
// newEntry.save().then(() => console.log('data added'))
exports.default = blogRouter;
