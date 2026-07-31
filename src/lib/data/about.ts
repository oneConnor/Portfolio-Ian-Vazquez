/**
 * Datos narrativos de la página About.
 * Contenido personal organizado en secciones para navegación.
 */

export const aboutSections = [
  {
    id: "quien-soy",
    heading: "De la lógica al código: quién soy",
    content: `Me llamo Ian Vazquez, tengo 18 años y vivo en Buenos Aires, Argentina. Si tuviera que definirme en pocas palabras, soy alguien simple pero profundamente detallista. Desde chico encontré en las matemáticas mi fuerte: esa satisfacción única de que las cosas funcionen exactamente como tu cabeza las piensa. Me apasiona la resolución de problemas, desarmar desafíos complejos y encontrarles una salida lógica.

Pero para mí, la tecnología no es solo números y pantallas. Creo que lo que realmente me define es la empatía, el amor y la compasión por los demás. Me gusta escuchar, entender a las personas y usar mis herramientas para ayudar a resolver sus necesidades. En un mundo lleno de líneas de código, mi objetivo es crear software con un propósito real: hacerle la vida más fácil y mejor a la gente. Siempre estoy listo para el próximo desafío técnico, buscando aprender más y más en cada paso.`,
  },
  {
    id: "giro-timon",
    heading: "El giro de timón: de la medicina al código",
    content: `Durante mucho tiempo, mi sueño de chico fue ser médico; sentía que ahí estaba mi camino para ayudar a las personas. Sin embargo, cuando arranqué la carrera, sentí que algo no encajaba del todo. El destino quiso que, cursando una materia de matemática, redescubriera la grandeza de las ingenierías. Fue en ese cruce de caminos donde me topé con la programación, y todo hizo un "clic" en mi cabeza.

Encontré mi carrera ideal y lo que verdaderamente me apasionaba. Escribir código nunca fue una simple tarea para mí; iba mucho más allá. El hecho de ver que el código respondía exactamente a lo que yo le indicaba, el orden, la complejidad y los desafíos constantes que traía consigo, desataron en mí una chispa que no se apagó más. Decidí que no me iba a quedar en la superficie: tenía que escarbar más y más en el desarrollo de software.`,
  },
  {
    id: "escuela-frustracion",
    heading: "La escuela de la frustración (y cómo la convertí en mi ventaja)",
    content: `Cuando me metí de lleno en este mundo, decidí arrancar con JavaScript. Me fascinaba, pero pronto aparecieron las primeras paredes: dominar el Async/Await o entender a fondo el Event Loop me costaron noches de cabeza. Pero mi hambre de aprender era más grande. Quise ir más profundo y me incliné hacia el backend, sumando Node.js, Express, Next.js y Jest. A medida que avanzaba, el juego se volvía más complejo: arquitecturas intrincadas, bases de datos y WebSockets. En ese entonces, no contaba con la ayuda de copilotos de IA; resolver un error significaba pasar horas y horas investigando en foros y documentación. Hoy agradezco ese camino, porque me enseñó a pensar y moldeó mi criterio para resolver problemas complejos de forma autónoma.

Pero el desafío no fue solo de software, sino también de hardware. Empecé a programar con una computadora de recursos limitados que no me hacía las cosas fáciles. En lugar de rendirme, busqué alternativas y me topé con Linux. Esa necesidad se transformó en otra pasión: tener el control total del sistema operativo y entender que con un solo comando podía arreglarlo todo (o romperlo todo) me atrapó por completo. Así resolví mi limitación técnica y, al día de hoy, Linux sigue siendo mi entorno de desarrollo principal.`,
  },
  {
    id: "presente",
    heading: "El presente: El ecosistema Full Stack y mis próximas metas",
    content: `El hambre de ir más allá me llevó a cruzar la vereda y dominar también el Frontend, convirtiéndome en desarrollador Full Stack. Hoy en día, combino la solidez del backend con interfaces dinámicas utilizando React y Angular como mis grandes fuertes. Para respaldar esta pasión con bases académicas, actualmente curso la Tecnicatura Universitaria en Programación en la UTN Avellaneda, mientras sigo expandiendo mis límites de forma activa en plataformas como Udemy y FreeCodeCamp.

Mi stack principal se apoya en Python, JavaScript y Node.js. Me especializo en construir aplicaciones robustas de punta a punta: desde el diseño de APIs REST escalables con NestJS, TypeScript y Express, hasta la creación de aplicaciones móviles con React Native. No me quedo solo en escribir código que funcione; me obsesiona la calidad del software. Por eso aplico estándares de Clean Code, aseguro la estabilidad con testing en Jest, contengo con Docker y gestiono despliegues en AWS con pipelines de CI/CD, optimizando mi productividad con herramientas de IA como Cursor y Claude.

Me entusiasman los proyectos desafiantes, ya sea optimizando sistemas de gestión comercial o diseñando arquitecturas limpias desde cero. Mi meta a corto y mediano plazo es integrarme a un equipo de desarrollo donde pueda aportar mi mentalidad detallista y resolutiva, afrontando nuevos desafíos tecnológicos mientras sigo creciendo profesionalmente.`,
  },
] as const;

export type AboutSection = (typeof aboutSections)[number];

/**
 * Contenido principal de la página About.
 * Es la pestaña por defecto: "Acerca de mi".
 */
export const aboutMe = {
  id: "acerca-de-mi",
  heading: "Acerca de mi",
  paragraphs: [
    `Ofrezco la capacidad de diseñar, empaquetar, desplegar y monitorear aplicaciones Full Stack (Web y Mobile) robustas y escalables de extremo a extremo. Aporto un flujo de trabajo moderno automatizado mediante pipelines de CI/CD, asegurando que cada línea de código lanzada a producción esté testeada, optimizada y lista para soportar alta demanda sin perder estabilidad.`,
    `Desarrollo APIs REST escalables con Node.js, NestJS, TypeScript y Express junto a automatizaciones en Python y bases de datos SQL / NoSQL, al mismo tiempo que construyo interfaces corporativas, Backoffices y apps móviles nativas con React, Angular y React Native optimizadas mediante Chrome DevTools, complementando todo con la contenerización en Docker, despliegues en AWS y automatización de pipelines CI/CD bajo estándares de Clean Code, testing con Jest, monitoreo con Datadog, gestión ágil con Git / Jira e incremento de productividad mediante IA con Cursor, Claude y Copilot.`,
    `Me apasiona resolver problemas complejos a través de la ingeniería, transformando ideas abstractas en productos de software estables, eficientes y centrados en el usuario. Disfruto profundamente del diseño de arquitecturas limpias y de la optimización de procesos; ver cómo un pipeline automatizado funciona a la perfección o cómo un refactor mejora drásticamente el rendimiento es lo que me motiva día a día. Además, me entusiasma mantenerme a la vanguardia tecnológica, adoptando herramientas de Inteligencia Artificial y metodologías modernas para elevar constantemente la vara de la calidad técnica.`,
    `Mi principal diferencial es mi enfoque en la autonomía y el ciclo de vida completo del software. No me limito a escribir código que funcione en mi máquina; diseño soluciones estructuradas con NestJS o Angular bajo patrones de Clean Code, aseguro su estabilidad con pruebas automatizadas en Jest y automatizo su despliegue mediante Docker y pipelines de CI/CD en AWS. Además, integro herramientas de IA avanzada (como Cursor y Claude) no para delegar mi lógica, sino para multiplicar mi velocidad de entrega y optimizar la resolución de problemas técnicos complejos.`,
  ],
} as const;
