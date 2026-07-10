/* ============================================================
   MI RED DE APOYO — Datos del juego (contenido narrativo)
   Prototipo "primer vistazo" — Alcaldía Local de San Cristóbal
   ============================================================ */

const RESOURCES = {
  lineapurpura: {
    name: "Línea Púrpura Distrital",
    icon: "💜",
    info: "Orientación psicosocial y jurídica gratuita para mujeres en Bogotá, las 24 horas, los 7 días de la semana. Atiende por teléfono, WhatsApp y chat.",
    contact: "01 8000 112 137 · WhatsApp 300 754 8933",
  },
  linea155: {
    name: "Línea 155 — Orientación Nacional a Mujeres",
    icon: "📞",
    info: "Línea nacional gratuita de la Consejería Presidencial para la Equidad de la Mujer, orienta a mujeres víctimas de cualquier tipo de violencia en toda Colombia.",
    contact: "Marca 155 desde cualquier operador",
  },
  casaigualdad: {
    name: "Casas de Igualdad de Oportunidades para las Mujeres",
    icon: "🏠",
    info: "Espacios gratuitos de la Secretaría Distrital de la Mujer en cada localidad de Bogotá (incluida San Cristóbal), con atención psicosocial, jurídica y orientación en rutas de atención.",
    contact: "Sede San Cristóbal — consulta dirección vigente en la Secretaría Distrital de la Mujer",
  },
  comisaria: {
    name: "Comisarías de Familia",
    icon: "⚖️",
    info: "Entidad competente para recibir denuncias de violencia intrafamiliar y dictar medidas de protección de forma gratuita, sin necesidad de abogado.",
    contact: "Comisaría de Familia de la localidad de residencia",
  },
  fiscalia: {
    name: "Fiscalía General de la Nación",
    icon: "🧾",
    info: "Recibe denuncias penales, incluidas las relacionadas con violencia sexual, intrafamiliar y delitos informáticos, a través de la app y línea 'A Denunciar'.",
    contact: "Línea 122 · App 'A Denunciar'",
  },
  linea123: {
    name: "Línea 123 — Emergencias Bogotá",
    icon: "🚨",
    info: "Para situaciones de riesgo inmediato: activa la Policía, ambulancia u otras entidades de reacción según el caso.",
    contact: "Marca 123",
  },
  caivirtual: {
    name: "CAI Virtual — Centro Cibernético Policial",
    icon: "🖥️",
    info: "Canal de denuncia para delitos informáticos: extorsión, difusión no consentida de imágenes íntimas, suplantación y ciberacoso.",
    contact: "caivirtual.policia.gov.co",
  },
  talentohumano: {
    name: "Ley 1010 de 2006 — Acoso Laboral",
    icon: "📋",
    info: "Ley colombiana que define y sanciona el acoso laboral. Toda empresa debe tener un Comité de Convivencia Laboral que recibe quejas de forma confidencial.",
    contact: "Comité de Convivencia Laboral de tu empresa · Ministerio del Trabajo",
  },
};

const CONTACTS = {
  // -- Marcela (violencia doméstica) --
  hermana: { id: "hermana", name: "Aura, tu hermana", avatar: "👩🏽", trust: 60,
    low: "«Ay hermanita, no sé... a veces exageras. ¿Segura que no es solo una pelea normal?»",
    mid: "«Me preocupas. Cuéntame bien qué pasó, quiero ayudarte a pensar qué hacer.»",
    high: "«Aquí estoy, contigo, sin juzgarte. Vamos juntas a averiguar qué opciones tienes.»" },
  vecina_m: { id: "vecina_m", name: "Doña Cecilia, tu vecina", avatar: "👵🏽", trust: 40,
    low: "«Uy m'ija, eso es entre marido y mujer, mejor no meterse...»",
    mid: "«He escuchado cosas por la pared. Si necesita algo, tocan mi puerta.»",
    high: "«Cuente conmigo, yo la acompaño a donde necesite, para eso somos vecinas.»" },
  comisaria: { id: "comisaria", name: "Comisaría de Familia", avatar: "⚖️", trust: 30,
    low: "«Puede radicar su solicitud, el trámite toma su tiempo pero es gratuito.»",
    mid: "«Le explicamos sus opciones de medida de protección, sin costo y sin necesidad de abogado.»",
    high: "«La reconocemos de su visita anterior. Continuemos construyendo su ruta de protección.»" },
  lineapurpura: { id: "lineapurpura", name: "Línea Púrpura", avatar: "💜", trust: 100,
    low: "«Estamos aquí las 24 horas. Cuénteme con calma qué está pasando.»",
    mid: "«Reconocer estas señales ya es un paso importante. Hablemos de sus opciones.»",
    high: "«Seguimos acompañándola. Recuerde: usted decide el ritmo de este proceso.»" },

  // -- Daniela (violencia laboral) --
  amiga_d: { id: "amiga_d", name: "Camila, tu amiga de la universidad", avatar: "👩🏻", trust: 55,
    low: "«Qué incómodo... pero cuidado con armar problema, tú necesitas ese trabajo.»",
    mid: "«Eso no está bien. ¿Quieres que te acompañe a averiguar qué puedes hacer?»",
    high: "«No estás loca ni exagerada. Vamos a buscar juntas cómo protegerte y documentar todo.»" },
  colega: { id: "colega", name: "Esteban, tu colega de confianza", avatar: "🧑🏽", trust: 45,
    low: "«Prefiero no meterme, aquí las cosas de jefes son delicadas...»",
    mid: "«Yo también he notado cosas raras. Si necesitas un testigo, cuenta conmigo.»",
    high: "«Estoy dispuesto a acompañarte a Talento Humano y respaldar lo que viste conmigo.»" },
  talentohumano: { id: "talentohumano", name: "Talento Humano", avatar: "🏢", trust: 20,
    low: "«Toda queja debe presentarse por escrito, seguirá el conducto regular.»",
    mid: "«Su reporte activa el Comité de Convivencia Laboral, es confidencial por ley.»",
    high: "«Gracias por confiar en el proceso. La acompañaremos hasta la resolución del caso.»" },
  lineapurpura2: { id: "lineapurpura2", name: "Línea Púrpura", avatar: "💜", trust: 100,
    low: "«El acoso laboral con componente sexual también es violencia de género. Hablemos.»",
    mid: "«Puede recibir orientación jurídica gratuita antes de decidir qué ruta tomar.»",
    high: "«Vamos paso a paso, usted no tiene que enfrentar esto sola.»" },

  // -- Yuli (violencia digital) --
  mama: { id: "mama", name: "Rocío, tu mamá", avatar: "👩🏽", trust: 50,
    low: "«¿Pero tú por qué le mandaste esas fotos? Ay Yuli, hay que tener más cuidado...»",
    mid: "«Me asusta lo que cuentas, pero la culpa es de él, no tuya. Busquemos ayuda juntas.»",
    high: "«Estoy contigo en esto, sin reproches. Vamos a denunciar y a protegerte.»" },
  amiga_y: { id: "amiga_y", name: "Sofía, tu mejor amiga", avatar: "👧🏻", trust: 65,
    low: "«Uy qué miedo, bloquéalo y ya, no le pares bolas.»",
    mid: "«Eso es un delito, no es solo 'dramas de pareja'. Guarda las capturas.»",
    high: "«Te acompaño a poner la denuncia y a contarle a tu mamá si quieres, no estás sola.»" },
  psicologa: { id: "psicologa", name: "Psicóloga del colegio", avatar: "🧑🏻‍⚕️", trust: 30,
    low: "«Podemos agendar una cita la próxima semana si gustas.»",
    mid: "«Lo que sientes —miedo, vergüenza— es una reacción normal ante una amenaza real.»",
    high: "«Sigamos trabajando juntas tu bienestar mientras avanza el proceso legal.»" },
  caivirtual: { id: "caivirtual", name: "CAI Virtual (Policía)", avatar: "🖥️", trust: 100,
    low: "«Puede radicar la denuncia en línea, cuéntenos qué evidencia tiene.»",
    mid: "«La difusión no consentida de imágenes íntimas es delito en Colombia (Ley 1273).»",
    high: "«Su denuncia ya está en trámite, la mantendremos informada.»" },

  // -- Rosario (violencia callejera / interseccional) --
  vecina_r: { id: "vecina_r", name: "Doña Marlene, vecina del local", avatar: "👵🏻", trust: 50,
    low: "«Mejor no se meta con esos manes, mija, hágase la que no oye.»",
    mid: "«A mí también me da rabia lo que le hacen. Cuente conmigo para lo que necesite.»",
    high: "«Ya hablé con otras vecinas, todas la acompañamos a cerrar el local, faltaba más.»" },
  lideresa: { id: "lideresa", name: "Julieth, lideresa comunitaria", avatar: "🏳️‍⚧️", trust: 60,
    low: "«Esto pasa seguido, lastimosamente. Toca ir armando red entre nosotras.»",
    mid: "«Conozco la ruta de la Casa de Igualdad, te puedo acompañar a poner la queja.»",
    high: "«Ya activamos la red de cuidado del barrio contigo. No vas a estar sola en esto.»" },
  policia: { id: "policia", name: "Policía de cuadrante", avatar: "👮🏽", trust: 25,
    low: "«Si no hay agresión física no podemos hacer mucho, señora.»",
    mid: "«Puede instaurar la denuncia, tome nota del cuadrante y el número de caso.»",
    high: "«Quedamos atentos a reforzar el rondín por su cuadra en las noches.»" },
  casaigualdad2: { id: "casaigualdad2", name: "Casa de Igualdad", avatar: "🏠", trust: 100,
    low: "«También atendemos a mujeres trans, cuéntenos qué está viviendo.»",
    mid: "«Podemos activar una ruta de protección y acompañamiento psicosocial.»",
    high: "«Seguimos acompañándola junto con su red comunitaria.»" },
};

const CHARACTERS = [
  {
    id: "marcela",
    name: "Marcela Rodríguez",
    age: 52,
    tag: "Vendedora informal · San Cristóbal",
    avatar: "👩🏽",
    color: "from-rose-500 to-orange-400",
    skin: "#c98a5e", hair: "#4a3b35", hairStyle: "largo",
    violenceType: "Violencia doméstica",
    blurb: "Lleva 15 años con su pareja. Últimamente sus salidas al mercado terminan en interrogatorios y gritos.",
    scenarioId: "domestica",
    contacts: ["hermana", "vecina_m", "comisaria", "lineapurpura"],
  },
  {
    id: "daniela",
    name: "Daniela Pérez",
    age: 28,
    tag: "Auxiliar administrativa",
    avatar: "👩🏻‍💼",
    color: "from-sky-500 to-cyan-400",
    skin: "#e8b894", hair: "#2a1f1c", hairStyle: "corto",
    violenceType: "Violencia laboral",
    blurb: "Su jefe empezó como un mentor amable. Ahora sus comentarios y propuestas la hacen sentir atrapada.",
    scenarioId: "laboral",
    contacts: ["amiga_d", "colega", "talentohumano", "lineapurpura2"],
  },
  {
    id: "yuli",
    name: "Yuli Cárdenas",
    age: 19,
    tag: "Estudiante universitaria",
    avatar: "👧🏽",
    color: "from-violet-500 to-fuchsia-400",
    skin: "#d9a06b", hair: "#3a2417", hairStyle: "largo",
    violenceType: "Violencia digital",
    blurb: "Terminó su relación con Andrés hace semanas. Él no ha dejado de escribirle — y ahora amenaza con algo peor.",
    scenarioId: "digital",
    contacts: ["mama", "amiga_y", "psicologa", "caivirtual"],
  },
  {
    id: "rosario",
    name: "Rosario Nieto",
    age: 45,
    tag: "Tendera y lideresa comunitaria",
    avatar: "🏳️‍⚧️",
    color: "from-emerald-500 to-teal-400",
    skin: "#8a5a3a", hair: "#1f1512", hairStyle: "pañoleta",
    violenceType: "Violencia callejera",
    blurb: "Lleva diez años con su tienda de barrio. Un grupo de vecinos nuevos la hostiga al cerrar cada noche.",
    scenarioId: "callejera",
    contacts: ["vecina_r", "lideresa", "policia", "casaigualdad2"],
  },
];

/* Cada escenario es un grafo de nodos.
   type: "story" (continuar), "choice" (elegir), "network" (consultar red),
         "chat" (mensajería estilo WhatsApp), "minigame" (interacción corta), "end" (cierre)
   mood: expresión del avatar de la protagonista en ese nodo (ver avatars.js)
   effects: { red, bienestar, conocimiento, contact:{id, delta} } */

const SCENARIOS = {

  /* =================== MARCELA — DOMÉSTICA =================== */
  domestica: {
    start: "d1",
    nodes: {
      d1: { type: "story", speaker: "Narradora", mood: "tranquila", text:
        "Marcela madruga todos los días a montar su puesto de frutas en la plaza. Con Jairo lleva quince años — al principio la hacía sentir cuidada. Ahora él revisa cuánto vendió, le pregunta con quién habló, y se molesta si ella llega tarde a casa.",
        bg: "scene-home", next: "d2" },
      d2: { type: "story", speaker: "Marcela", mood: "preocupada", text:
        "«Hoy es el cumpleaños de mi comadre Flor. Quiero ir un rato, aunque sea una hora.» Jairo resopla desde el sofá: «Haz lo que quieras, pero no te vengas a quejar si luego la gente habla mal de ti por andar de fiestera.»",
        bg: "scene-home", next: "d3a" },

      d3a: { type: "story", speaker: "Narradora", mood: "feliz", text:
        "En casa de Flor, entre café y risas, Marcela se olvida por un rato de las cuentas y los reclamos. «Deberías salir más seguido», le dice Flor. Marcela sonríe: hace tiempo no se sentía tan liviana.",
        bg: "scene-home", next: "d3" },
      d3: { type: "story", speaker: "Narradora", mood: "preocupada", text:
        "Marcela llega a casa más tarde de lo previsto. Jairo la espera de pie, con el teléfono de ella ya en la mano.",
        bg: "scene-tension", next: "d4" },
      d4: { type: "story", speaker: "Jairo", mood: "asustada", text:
        "«¿Con quién estabas? ¡Contesta! Yo sé que tú me estás viendo la cara. Dame acá esa plata de hoy, a ver en qué te la gastaste.» Su voz sube de tono. Marcela siente el corazón acelerado; conoce esta sensación.",
        bg: "scene-tension", next: "choice1" },

      choice1: { type: "choice", speaker: "Marcela — ¿Qué haces?", mood: "asustada", text:
        "El pulso se te acelera. Tienes segundos para reaccionar.",
        bg: "scene-tension",
        choices: [
          { tag: "Justificar", text: "«Tienes razón, no debí demorarme tanto, perdóname.»",
            effects: { bienestar: -10, red: -5 },
            feedback: "Es muy común dudar de lo que sentimos cuando alguien nos ha hecho creer que la culpa es nuestra por cosas normales, como llegar tarde. Ninguna demora justifica el miedo que sentiste — eso es información importante, no una falla tuya.",
            next: "d4b" },
          { tag: "Confrontar", text: "«¡No me grites! ¡Yo no tengo que darte explicaciones de nada!»",
            effects: { bienestar: -5, red: 0 },
            feedback: "Defender tu espacio es válido y comprensible. Al mismo tiempo, cuando el otro ya está muy alterado, subir el tono puede escalar la tensión. No se trata de que 'te lo buscaste' — se trata de pensar también en tu seguridad inmediata, además de en tener razón.",
            next: "d4b" },
          { tag: "Buscar apoyo", text: "Te quedas en silencio, respiras y en cuanto puedes llamas a tu hermana Aura.",
            effects: { bienestar: 5, red: 10, contact: { id: "hermana", delta: 10 } },
            feedback: "Buscar a alguien de confianza en un momento así no es debilidad — es una estrategia de protección. Reconocer que necesitas hablar con alguien es un paso valioso.",
            next: "d4b" },
        ] },

      d4b: { type: "story", speaker: "Narradora", mood: "triste", text:
        "Más tarde, mientras Marcela se baña, Jairo revisa su teléfono sin preguntar — otra vez. No rompe nada, no grita: simplemente decide que tiene derecho a hacerlo. Marcela lo nota al salir, y algo dentro de ella también lo nota: esto no es solo 'un mal día'.",
        bg: "scene-tension", next: "d5" },
      d5: { type: "story", speaker: "Narradora", mood: "triste", text:
        "Esa noche casi no duermes. Repites la escena una y otra vez. Te preguntas si esto es 'normal', si toda pareja pasa por esto, o si algo tiene que cambiar.",
        bg: "scene-night", next: "network1" },

      network1: { type: "network", speaker: "¿A quién le cuentas?", mood: "preocupada", text:
        "Antes de decidir qué hacer, puedes buscar consejo. Habla con quien prefieras — puedes consultar a más de una persona.",
        bg: "scene-night", options: ["hermana", "vecina_m", "lineapurpura"], next: "choice2" },

      choice2: { type: "choice", speaker: "Marcela — Un paso concreto", mood: "preocupada", text:
        "Después de pensarlo unos días, decides que es momento de hacer algo. ¿Qué haces primero?",
        bg: "scene-day",
        choices: [
          { tag: "Documentar", text: "Empiezas a guardar mensajes y notas de fechas, discretamente, por si los necesitas.",
            effects: { conocimiento: 15, red: 5 },
            feedback: "Documentar sin exponerte es una herramienta real de protección: sirve como respaldo si más adelante decides pedir una medida de protección o asesoría legal, y no te obliga a actuar de inmediato.",
            next: "d5b" },
          { tag: "Institución", text: "Vas a la Comisaría de Familia a preguntar, solo preguntar, qué opciones tienes.",
            effects: { red: 15, bienestar: 10, conocimiento: 10, contact: { id: "comisaria", delta: 20 } },
            unlock: "comisaria",
            feedback: "Ir a preguntar no te compromete a denunciar de inmediato. Conocer tus opciones con calma es parte de construir un plan seguro y a tu propio ritmo.",
            next: "d5b" },
          { tag: "Límite directo", text: "Hablas con Jairo en un momento tranquilo: «No voy a permitir que me grites ni que revises mi celular.»",
            effects: { bienestar: 5, red: -5 },
            feedback: "Poner límites con calma (usando frases en primera persona, sin acusar) es una habilidad valiosa de comunicación asertiva. Es más seguro practicarla cuando ya tienes una red de apoyo lista, por si la reacción no es la esperada.",
            next: "d5b" },
        ] },

      d5b: { type: "story", speaker: "Narradora", mood: "preocupada", text:
        "Los días siguientes no son fáciles: hay dudas, hay miedo de estar exagerando, hay momentos en que todo parece normal otra vez. Pero también hay algo nuevo: ya no cargas esto completamente sola.",
        bg: "scene-day", next: "d6" },
      d6: { type: "story", speaker: "Narradora", mood: "empoderada", text:
        "No existe una fórmula única ni una decisión que resuelva todo de un día para otro. Lo que sí cambia algo, poco a poco, es dejar de estar sola con esto: cada llamada, cada pregunta, cada persona que ahora sabe lo que vives, es un hilo más en tu red.",
        bg: "scene-day", next: "end" },

      end: { type: "end" },
    },
  },

  /* =================== DANIELA — LABORAL =================== */
  laboral: {
    start: "l1",
    nodes: {
      l1: { type: "story", speaker: "Narradora", mood: "tranquila", text:
        "Daniela lleva ocho meses en su primer empleo formal. Ricardo, su jefe, la felicitó desde el inicio por su desempeño y empezó a darle responsabilidades importantes. Ella se sentía afortunada de tener un mentor así.",
        bg: "scene-office", next: "l2" },
      l2: { type: "story", speaker: "Narradora", mood: "preocupada", text:
        "Con el tiempo, los comentarios de Ricardo cambiaron: bromas sobre su ropa frente a otros compañeros, mensajes fuera de horario, invitaciones a 'reuniones' que siempre terminan siendo solo los dos, tarde, con la oficina vacía.",
        bg: "scene-office", next: "l2b" },
      l2b: { type: "story", speaker: "Narradora", mood: "preocupada", text:
        "Un día escuchas por casualidad a Ricardo comentarle a otro gerente: «Con ella hay que tener cuidado, es muy sensible». Te preguntas si ya perdiste credibilidad antes de haber dicho una sola palabra.",
        bg: "scene-office", next: "l3" },
      l3: { type: "story", speaker: "Ricardo", mood: "asustada", text:
        "«Sabes que confío mucho en ti, Daniela... esa promoción que quieres, yo puedo hacer que pase. Solo necesito saber que tú también confías en mí» — dice, acercándose más de lo necesario y tocándole el hombro.",
        bg: "scene-tension", next: "choice1" },

      choice1: { type: "choice", speaker: "Daniela — ¿Cómo reaccionas?", mood: "asustada", text:
        "Te quedas paralizada un segundo. Todo tu cuerpo se pone en alerta.",
        bg: "scene-tension",
        choices: [
          { tag: "Minimizar", text: "«Seguro fue un mal chiste, no quiso decir nada raro» piensas, y sigues trabajando como si nada.",
            effects: { bienestar: -10, red: -5 },
            feedback: "Minimizar es una reacción de protección muy común frente al miedo o la sorpresa — el cerebro busca una explicación que se sienta más segura. Pero lo que sentiste, esa incomodidad, es información válida que merece ser escuchada, no descartada.",
            next: "l3b" },
          { tag: "Confrontar impulsiva", text: "Le gritas frente a toda la oficina: «¡Nunca me vuelva a tocar!»",
            effects: { bienestar: -5, red: 0 },
            feedback: "Tu reacción es comprensible y tu enojo es legítimo — nadie tiene derecho a tocarte sin tu consentimiento. Confrontar en caliente frente a testigos también puede exponerte a represalias; documentar y buscar el canal formal suele proteger mejor tu proceso.",
            next: "l3b" },
          { tag: "Salir con calma", text: "«Necesito revisar algo, hablamos luego» dices con voz firme, y sales de la oficina a buscar aire.",
            effects: { bienestar: 5, red: 10 },
            feedback: "Salir de una situación incómoda con una frase firme y neutral, sin justificarte, es una forma de comunicación asertiva que te da tiempo y espacio para pensar tu siguiente paso con calma.",
            next: "l3b" },
        ] },

      l3b: { type: "story", speaker: "Narradora", mood: "triste", text:
        "Al día siguiente, Ricardo actúa como si nada hubiera pasado — hasta te felicita frente a todos por un informe. Esa 'normalidad' forzada te desconcierta tanto como el incidente mismo.",
        bg: "scene-office", next: "l4" },
      l4: { type: "story", speaker: "Narradora", mood: "triste", text:
        "Esa noche escribes en tu celular todo lo que recuerdas: fechas, mensajes, lo que dijo. Sabes que necesitas hablarlo con alguien, aunque te da miedo que no te crean o que esto te cueste el trabajo.",
        bg: "scene-night", next: "network1" },

      network1: { type: "network", speaker: "¿En quién confías?", mood: "preocupada", text:
        "Puedes buscar consejo con más de una persona antes de decidir tu siguiente paso.",
        bg: "scene-night", options: ["amiga_d", "colega", "lineapurpura2"], next: "choice2" },

      choice2: { type: "choice", speaker: "Daniela — Tu siguiente paso", mood: "preocupada", text:
        "Con la cabeza más clara, decides actuar. ¿Qué haces?",
        bg: "scene-office",
        choices: [
          { tag: "Testigo", text: "Le pides a Esteban que sea tu acompañante y testigo si decides poner una queja formal.",
            effects: { red: 15, conocimiento: 5, contact: { id: "colega", delta: 15 } },
            feedback: "Buscar acompañamiento —un testigo, alguien que sostenga contigo el proceso— fortalece tu caso y reduce la sensación de enfrentar todo en soledad.",
            next: "l4b" },
          { tag: "Denuncia formal", text: "Vas directo a Talento Humano y activas el Comité de Convivencia Laboral (Ley 1010 de 2006).",
            effects: { red: 15, bienestar: 10, conocimiento: 15, contact: { id: "talentohumano", delta: 20 } },
            unlock: "talentohumano",
            feedback: "En Colombia, el acoso laboral —incluido el de tipo sexual— está regulado por ley, y toda empresa está obligada a tener un canal confidencial para recibirlo. Usar ese canal es un derecho, no una exageración.",
            next: "l4b" },
          { tag: "Asesoría previa", text: "Antes de actuar en la empresa, llamas a la Línea Púrpura para recibir orientación jurídica gratuita.",
            effects: { conocimiento: 15, bienestar: 5, contact: { id: "lineapurpura2", delta: 10 } },
            unlock: "lineapurpura",
            feedback: "Informarte antes de actuar no es demora — te permite tomar decisiones desde el conocimiento y no desde el miedo, y llegar más segura a cualquier proceso formal.",
            next: "l4b" },
        ] },

      l4b: { type: "story", speaker: "Narradora", mood: "empoderada", text:
        "Camila te escribe esa noche: «No estás loca. Yo también lo vi.» Por primera vez en semanas, sientes que alguien más carga parte del peso contigo.",
        bg: "scene-night", next: "l5" },
      l5: { type: "story", speaker: "Narradora", mood: "empoderada", text:
        "El proceso no es inmediato ni sencillo, pero ya no lo enfrentas sola: tienes testigos, información, y una ruta clara. Eso, en sí mismo, ya cambió la historia.",
        bg: "scene-office", next: "end" },

      end: { type: "end" },
    },
  },

  /* =================== YULI — DIGITAL =================== */
  digital: {
    start: "y1",
    nodes: {
      y1: { type: "story", speaker: "Narradora", mood: "tranquila", text:
        "Yuli terminó su relación con Andrés hace tres semanas. Al principio los mensajes eran de tristeza. En los últimos días, empezaron a cambiar de tono.",
        bg: "scene-room", next: "chat1" },

      chat1: { type: "chat", speaker: "Chat con Andrés", mood: "preocupada", bg: "scene-room",
        messages: [
          { from: "them", text: "¿Por qué no me respondes?" },
          { from: "them", text: "Mándame tu ubicación." },
          { from: "me", text: "Prefiero no hacerlo, ya no estamos juntos." },
          { from: "them", text: "Si sales con tus amigas, me avisas." },
          { from: "them", text: "Sé que me estás ignorando, no me hagas esto." },
        ],
        next: "minigame1" },

      minigame1: { type: "minigame", subtype: "tapflags", mood: "preocupada",
        speaker: "¿Cuáles de estos mensajes son señales de control?",
        instructions: "Toca los mensajes que consideres señales de control en una relación. Puede haber más de uno — luego revisa tu selección.",
        items: [
          { id: "m1", text: "«¿Por qué no me respondes?»", isFlag: false,
            explain: "La insistencia sola no siempre es control, aunque sí puede incomodar. Lo relevante es el patrón completo, no un mensaje aislado." },
          { id: "m2", text: "«Mándame tu ubicación.»", isFlag: true,
            explain: "Pedir tu ubicación de forma insistente, más aún después de terminar la relación, es una forma de vigilancia y control." },
          { id: "m3", text: "«Si sales con tus amigas, me avisas.»", isFlag: true,
            explain: "Exigir 'aviso' o permiso sobre tus salidas es una señal clásica de control sobre tu libertad y tus relaciones." },
          { id: "m4", text: "«Sé que me estás ignorando, no me hagas esto.»", isFlag: true,
            explain: "Culpar a la otra persona por poner distancia, apelando a la culpa, es una forma de manipulación emocional." },
        ],
        next: "y2" },

      y2: { type: "story", speaker: "Andrés (mensaje)", mood: "asustada", text:
        "«Si no vuelves conmigo, todos van a ver las fotos que me mandaste. Tú sabes que las tengo. No me obligues a hacerlo.»",
        bg: "scene-room", next: "y3" },
      y3: { type: "story", speaker: "Narradora", mood: "asustada", text:
        "Yuli siente que el piso se abre bajo sus pies. Vergüenza, miedo, rabia, todo junto. Su primer impulso es borrar el mensaje y hacer como si no hubiera pasado.",
        bg: "scene-tension", next: "choice1" },

      choice1: { type: "choice", speaker: "Yuli — ¿Qué haces?", mood: "asustada", text:
        "El teléfono sigue vibrando con más mensajes.",
        bg: "scene-tension",
        choices: [
          { tag: "Ocultar", text: "Borras el mensaje y decides no contarle a nadie, por miedo y vergüenza.",
            effects: { bienestar: -10, red: -5 },
            feedback: "El silencio suele ser justo lo que este tipo de amenaza busca provocar. La vergüenza es una reacción común, pero la responsabilidad de esta amenaza es completamente de quien la hace, nunca tuya.",
            next: "y3b" },
          { tag: "Responder con rabia", text: "Le respondes furiosa, amenazándolo de vuelta.",
            effects: { bienestar: -5, red: 0 },
            feedback: "Tu rabia es una respuesta válida ante una amenaza real. Sin embargo, responder de forma directa puede escalar el conflicto; guardar evidencia sin engancharte en la discusión suele proteger mejor un proceso de denuncia.",
            next: "y3b" },
          { tag: "Evidencia + apoyo", text: "Sin responder, tomas capturas de pantalla de todo y le escribes a tu amiga Sofía.",
            effects: { bienestar: 5, red: 10, conocimiento: 5, contact: { id: "amiga_y", delta: 10 } },
            feedback: "Guardar evidencia sin responder a la provocación, y avisarle a alguien de confianza, son dos de las acciones más efectivas frente a este tipo de amenaza digital.",
            next: "y3b" },
        ] },

      y3b: { type: "story", speaker: "Narradora", mood: "triste", text:
        "Sofía te cuenta que a ella casi le pasó algo parecido el año pasado, con otro chico. «No me atreví a contarlo entonces. Ahora sé que debí hacerlo.»",
        bg: "scene-night", next: "y4" },
      y4: { type: "story", speaker: "Narradora", mood: "preocupada", text:
        "Necesitas decidir tu siguiente paso, pero no tienes por qué hacerlo sola.",
        bg: "scene-night", next: "network1" },

      network1: { type: "network", speaker: "¿A quién recurres?", mood: "preocupada", text:
        "Puedes hablar con más de una persona antes de decidir.",
        bg: "scene-night", options: ["mama", "amiga_y", "psicologa"], next: "choice2" },

      choice2: { type: "choice", speaker: "Yuli — Tu siguiente paso", mood: "preocupada", text:
        "Con apoyo, decides actuar. ¿Qué haces primero?",
        bg: "scene-room",
        choices: [
          { tag: "Denuncia digital", text: "Bloqueas a Andrés, reportas el perfil, y denuncias en el CAI Virtual de la Policía.",
            effects: { red: 15, conocimiento: 15, contact: { id: "caivirtual", delta: 20 } },
            unlock: "caivirtual",
            feedback: "En Colombia, amenazar con difundir imágenes íntimas sin consentimiento es delito (Ley 1273 de 2009 y Ley 1257 de violencia de género). Denunciar activa una investigación y dejar de responder reduce el poder de la amenaza.",
            next: "y4b" },
          { tag: "Contarle a mamá", text: "Reúnes valor y le cuentas todo a tu mamá, pidiéndole que te acompañe.",
            effects: { red: 15, bienestar: 15, contact: { id: "mama", delta: 20 } },
            feedback: "Contarle a un adulto de confianza no te quita autonomía: te da respaldo emocional y práctico para enfrentar el proceso, especialmente cuando hay un componente legal de por medio.",
            next: "y4b" },
          { tag: "Apoyo emocional primero", text: "Pides una cita con la psicóloga del colegio para sostener cómo te sientes mientras avanzas con la denuncia.",
            effects: { bienestar: 15, conocimiento: 5, contact: { id: "psicologa", delta: 15 } },
            feedback: "Cuidar tu bienestar emocional en paralelo al proceso legal no es un lujo — es parte de sostenerte para poder llevar el proceso hasta el final.",
            next: "y4b" },
        ] },

      y4b: { type: "story", speaker: "Narradora", mood: "empoderada", text:
        "Un par de días después, Andrés borra sus redes sociales. El miedo no desaparece del todo, pero algo en el aire cambia: ya no eres tú quien tiene que desaparecer.",
        bg: "scene-room", next: "y5" },
      y5: { type: "story", speaker: "Narradora", mood: "empoderada", text:
        "La amenaza no desaparece de un día para otro, pero ahora hay evidencia, hay una denuncia en curso, y hay personas que lo saben y te acompañan. Ya no es un secreto que cargas sola.",
        bg: "scene-room", next: "end" },

      end: { type: "end" },
    },
  },

  /* =================== ROSARIO — CALLEJERA / INTERSECCIONAL =================== */
  callejera: {
    start: "r1",
    nodes: {
      r1: { type: "story", speaker: "Narradora", mood: "tranquila", text:
        "Rosario lleva diez años con su tienda de barrio en San Cristóbal. La conocen y la respetan como lideresa comunitaria. En los últimos meses, un grupo de vecinos nuevos ha empezado a hacer comentarios transfóbicos cuando pasa.",
        bg: "scene-street-day", next: "r1b" },
      r1b: { type: "story", speaker: "Narradora", mood: "feliz", text:
        "Semanas atrás, cuando alguien rayó una palabra ofensiva en la pared de su local, fue Julieth quien organizó a los vecinos para repintarla esa misma tarde. Rosario no ha olvidado ese gesto.",
        bg: "scene-street-day", next: "r2" },
      r2: { type: "story", speaker: "Narradora", mood: "asustada", text:
        "Esa noche, al bajar la reja del local, el grupo la sigue media cuadra, gritándole insultos y grabándola con el celular entre risas. Rosario siente el corazón en la garganta y aprieta el manojo de llaves en su mano.",
        bg: "scene-street-night", next: "choice1" },

      choice1: { type: "choice", speaker: "Rosario — ¿Qué haces?", mood: "asustada", text:
        "Los pasos del grupo se acercan.",
        bg: "scene-street-night",
        choices: [
          { tag: "Silencio", text: "Te quedas callada, bajas la mirada y caminas más rápido, con miedo de que sea peor.",
            effects: { bienestar: -10, red: -5 },
            feedback: "Buscar no escalar una situación de riesgo inmediato es una decisión válida de autoprotección, no sumisión. El problema nunca es cómo reaccionaste tú, sino la violencia de quienes te agreden.",
            next: "r2b" },
          { tag: "Confrontar sola", text: "Te das la vuelta y les gritas que la dejen en paz, sola frente al grupo.",
            effects: { bienestar: -5, red: 0 },
            feedback: "Tu derecho a defenderte es legítimo. Al mismo tiempo, hacerlo sola frente a un grupo puede aumentar el riesgo físico inmediato; buscar apoyo o distancia primero no te resta valentía.",
            next: "r2b" },
          { tag: "Alejarse y pedir ayuda", text: "Te alejas con calma hacia la tienda de Doña Marlene, que sigue abierta, y le pides que te acompañe.",
            effects: { bienestar: 5, red: 10, contact: { id: "vecina_r", delta: 10 } },
            feedback: "Buscar un espacio seguro cercano y compañía inmediata es una estrategia efectiva de protección física en el momento — y activa red comunitaria en tiempo real.",
            next: "r2b" },
        ] },

      r2b: { type: "story", speaker: "Narradora", mood: "triste", text:
        "Doña Marlene cierra su reja detrás de Rosario y le dice, bajito: «A mí también me ha tocado duro por otras razones. Aquí la que se calla, sufre doble.»",
        bg: "scene-street-night", next: "r3" },
      r3: { type: "story", speaker: "Narradora", mood: "triste", text:
        "Llegas a casa con el pulso todavía acelerado. No es la primera vez, y temes que tampoco sea la última si nada cambia.",
        bg: "scene-night", next: "network1" },

      network1: { type: "network", speaker: "¿Con quién cuentas?", mood: "preocupada", text:
        "Puedes consultar a más de una persona antes de decidir tu siguiente paso.",
        bg: "scene-night", options: ["vecina_r", "lideresa", "policia"], next: "choice2" },

      choice2: { type: "choice", speaker: "Rosario — Tu siguiente paso", mood: "preocupada", text:
        "Decides que esto no puede seguir pasando en silencio. ¿Qué haces?",
        bg: "scene-street-day",
        choices: [
          { tag: "Casa de Igualdad", text: "Vas con Julieth a la Casa de Igualdad a activar una ruta de protección y acompañamiento.",
            effects: { red: 15, bienestar: 10, conocimiento: 15, contact: { id: "casaigualdad2", delta: 20 } },
            unlock: "casaigualdad2",
            feedback: "Las Casas de Igualdad de Oportunidades atienden a todas las mujeres de Bogotá, incluidas las mujeres trans, con enfoque diferencial. Ir acompañada fortalece el proceso.",
            next: "r3b" },
          { tag: "Denuncia policial", text: "Instauras la denuncia con acompañamiento de Julieth, aunque sabes que no siempre es fácil confiar en la respuesta institucional.",
            effects: { red: 10, conocimiento: 10, contact: { id: "policia", delta: 15 } },
            feedback: "Denunciar con acompañamiento aumenta las probabilidades de que tu caso sea tomado en serio, y deja un registro formal aunque la respuesta institucional no siempre sea inmediata.",
            next: "r3b" },
          { tag: "Red comunitaria", text: "Organizas con vecinas un acuerdo de acompañarse mutuamente al cerrar los negocios en la noche.",
            effects: { red: 20, bienestar: 10, contact: { id: "vecina_r", delta: 15 } },
            feedback: "Las redes comunitarias de cuidado colectivo son una de las formas de protección más sostenibles en el tiempo, especialmente frente a violencias que las instituciones tardan en atender.",
            next: "r3b" },
        ] },

      r3b: { type: "story", speaker: "Narradora", mood: "empoderada", text:
        "La voz se corre en el barrio — no como chisme, sino como alerta comunitaria: «a Rosario la están molestando, hay que estar pendientes». Por primera vez, siente que el barrio la protege activamente, no solo la tolera.",
        bg: "scene-street-day", next: "r4" },
      r4: { type: "story", speaker: "Narradora", mood: "empoderada", text:
        "Rosario sigue abriendo su tienda cada mañana. Lo que cambió es que ahora no camina sola a cerrarla — y eso, en un barrio que la vio crecer como lideresa, es apenas el comienzo de algo más grande.",
        bg: "scene-street-day", next: "end" },

      end: { type: "end" },
    },
  },
};

const ENDINGS = [
  { id: "fuerte", min: 75, icon: "🕸️💪", color: "from-emerald-500 to-teal-400",
    title: "Una red tejida y fuerte",
    text: "Lograste construir una red de apoyo sólida: hablaste, pediste ayuda, te informaste y diste pasos concretos hacia instituciones y personas de confianza. Ninguna red se teje en un solo día — la tuya ya tiene hilos fuertes." },
  { id: "camino", min: 55, icon: "🌱", color: "from-lime-500 to-emerald-400",
    title: "Un camino en construcción",
    text: "Diste pasos importantes y reales hacia pedir ayuda. El proceso sigue abierto — y eso está bien: construir una red de apoyo casi nunca es un solo movimiento, sino muchos pequeños pasos sostenidos en el tiempo." },
  { id: "aprendiendo", min: 35, icon: "🔎", color: "from-amber-500 to-orange-400",
    title: "Aprendiendo a pedir ayuda",
    text: "Reconociste señales importantes, aunque todavía cueste dar el siguiente paso. Nunca es tarde para buscar apoyo: cada persona y cada ruta institucional que conociste hoy sigue disponible cuando estés lista." },
  { id: "sola", min: 0, icon: "🕯️", color: "from-rose-500 to-red-400",
    title: "Nunca estás sola, aunque lo sientas",
    text: "Esta historia mostró lo difícil que es reconocer y enfrentar la violencia, sobre todo cuando el aislamiento es parte de la estrategia de quien agrede — no una elección tuya. El directorio de apoyo sigue abierto siempre que lo necesites, y hablarlo con la persona que facilita esta sesión también es un paso válido ahora mismo." },
];

/* Epílogo breve y específico por personaje, según el final alcanzado.
   Se muestra debajo del texto genérico del final en pantalla de cierre. */
const CHARACTER_EPILOGUES = {
  marcela: {
    fuerte: "Marcela sigue vendiendo fruta cada mañana en la plaza. Ahora su hermana la llama todos los días, y ya conoce el camino hasta la Comisaría de Familia — no como una amenaza, sino como una puerta que sabe que puede tocar.",
    camino: "Marcela todavía comparte techo con Jairo, pero ya no comparte el silencio: su hermana sabe, la Comisaría la conoce, y cada semana da un paso más hacia decidir con calma qué sigue.",
    aprendiendo: "Marcela guarda en su celular el número de la Línea Púrpura, aunque todavía no se atreve a llamar. Sabe que está ahí. Eso, por ahora, ya es un ancla.",
    sola: "Marcela vuelve a su rutina, con Jairo todavía cerca. El miedo no desapareció, pero ahora sabe que existe un directorio de personas e instituciones dispuestas a escucharla cuando decida buscarlas — hoy, o más adelante.",
  },
  daniela: {
    fuerte: "El Comité de Convivencia Laboral abrió el caso formalmente. Daniela sigue yendo a trabajar con Camila y Esteban cerca — ya no camina sola por los pasillos de la oficina.",
    camino: "El proceso en Talento Humano avanza lento, pero avanza. Daniela documenta cada semana, segura de que ya no depende solo de su memoria.",
    aprendiendo: "Daniela aún no ha presentado la queja formal, pero ya guardó capturas y fechas. Sabe que la Línea Púrpura existe y que puede llamar cuando esté lista.",
    sola: "Daniela sigue en su puesto, con Ricardo todavía cerca. El miedo a no ser creída pesa, pero ahora conoce sus derechos — y ninguna ley deja de aplicar solo porque ella aún no haya actuado.",
  },
  yuli: {
    fuerte: "La denuncia en el CAI Virtual quedó radicada, y su mamá la acompaña a cada cita. Sofía le recuerda, cada vez que puede, que ninguna foto define lo que Yuli vale.",
    camino: "Yuli guardó toda la evidencia y ya habló con alguien de confianza. El siguiente paso —la denuncia formal— está más cerca de lo que estaba ayer.",
    aprendiendo: "Yuli todavía no le ha contado a su familia, pero ya sabe que lo que Andrés hizo es delito en Colombia, no un 'problema de pareja'. Esa información no se le olvida.",
    sola: "Los mensajes de Andrés continúan. Yuli no ha dado el siguiente paso todavía, y eso también es humano — el CAI Virtual y la Línea Púrpura van a seguir ahí cuando decida usarlos.",
  },
  rosario: {
    fuerte: "La red de vecinas se organizó de verdad: ahora nadie cierra su local sola por las noches en esa cuadra. Julieth y la Casa de Igualdad siguen acompañando el proceso.",
    camino: "Rosario ya puso la queja y avisó a su red comunitaria. El grupo que la hostigaba sabe que ya no está sola — y eso, de por sí, cambia algo.",
    aprendiendo: "Rosario todavía cierra su tienda con cautela, pero ya conoce la ruta de la Casa de Igualdad y sabe que atienden a mujeres trans sin condiciones.",
    sola: "El hostigamiento no ha parado, y eso no es culpa de Rosario. Su red comunitaria y las rutas institucionales de Bogotá siguen disponibles el día que decida activarlas de nuevo.",
  },
};

const DEBRIEF_QUESTIONS = [
  "¿En qué momento de la historia identificaste una señal de alerta? ¿Cómo se sintió reconocerla?",
  "¿Qué diferencia notaste entre las respuestas de 'minimizar', 'confrontar' y 'buscar apoyo'?",
  "¿Qué contacto de tu propia red de apoyo real se parece a alguno de los personajes del juego?",
  "¿Conocías antes las rutas institucionales que aparecieron en la historia (Línea Púrpura, Casas de Igualdad, Comisaría de Familia)?",
  "¿Qué le dirías hoy a la protagonista si pudieras hablar con ella directamente?",
];

const ACHIEVEMENTS = {
  primer_contacto: { icon: "🏆", title: "Primera persona de confianza", desc: "Consultaste a alguien de tu red por primera vez." },
  ruta_activada: { icon: "🏆", title: "Activaste una ruta de atención", desc: "Descubriste tu primer recurso institucional." },
  senal_reconocida: { icon: "🏆", title: "Reconociste una señal de alerta", desc: "Identificaste correctamente una señal de control." },
  red_solida: { icon: "🏆", title: "Construiste una red sólida", desc: "Tu red de apoyo alcanzó un 75% de fortaleza." },
  defensora: { icon: "🏆", title: "Defensora de tus derechos", desc: "Completaste una historia hasta el final." },
};
