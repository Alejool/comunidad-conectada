export interface Taller {
  id: number;
  titulo: string;
  icon: string; // icon name used by Icon.astro
  color: string;
  gradient: string;
  queEs: string;
  comoFunciona: string;
  queTenerEnCuenta: string[];
  queHacer: string[];
  comoHacerlo: string[];
  aprendizaje: string;
  video?: string;
  imagen: string;
  nota?: string;
  recursos: Recurso[];
}

export interface Recurso {
  nombre: string;
  url: string;
  tipo: "web" | "app" | "telefono";
}

export interface ContactoEmergencia {
  nombre: string;
  numero: string;
  icon: string;
  descripcion: string;
}

export interface ResultadoGeneral {
  titulo: string;
  descripcion: string;
  icon: string;
}

export const talleres: Taller[] = [
  {
    id: 1,
    titulo: "Redes Sociales y Algoritmos",
    icon: "globe",
    color: "#3B82F6",
    gradient: "from-blue-500 to-indigo-600",
    queEs:
      "Las redes sociales son plataformas digitales (Facebook, Instagram, WhatsApp, TikTok) que permiten conectarse con otras personas, compartir contenido e información. Un algoritmo es un sistema automático que decide qué contenido te muestra primero, basándose en tus interacciones previas.",
    comoFunciona:
      "Cada vez que haces clic, 'me gusta', comentas o te quedas viendo un video, el algoritmo aprende tus gustos y te muestra más de lo mismo. Esto crea una 'burbuja de información' donde solo ves contenido similar. Las plataformas ganan dinero con tu atención: entre más tiempo pases en la app, más publicidad ven y más ganan.",
    queTenerEnCuenta: [
      "Las redes sociales NO son gratuitas: pagas con tus datos y tu tiempo de atención",
      "El algoritmo puede volverse adictivo: está diseñado para que no puedas parar de usarlo",
      "Lo que ves en redes no refleja la realidad completa de las personas",
      "Tus datos son usados para venderte publicidad y predecir tu comportamiento",
      "Los niños son especialmente vulnerables a los efectos negativos de los algoritmos",
      "El uso excesivo puede causar ansiedad, depresión y problemas de sueño",
    ],
    queHacer: [
      "Reflexiona sobre cuánto tiempo pasas en cada red social por día",
      "Identifica qué tipo de contenido te hace sentir bien vs. mal",
      "Usa las redes sociales con un propósito, no por aburrimiento",
      "Configura límites de tiempo en tu celular para cada red social",
      "Sigue cuentas que te aporten conocimiento real, no solo entretenimiento",
      "Toma pausas conscientes antes de abrir una app",
    ],
    comoHacerlo: [
      "Android: Ve a Ajustes → Bienestar Digital → Temporizadores de apps → Selecciona la app → establece límite",
      "iPhone: Ajustes → Tiempo de uso → Límites de apps → Selecciona categoría → establece tiempo",
      "Activa recordatorios cada 30 minutos: Bienestar Digital → Recordatorio de descanso",
      "Para ver cuánto tiempo usas cada app: Bienestar Digital → Panel de control",
      "Silencia notificaciones: Ajustes → Notificaciones → selecciona la app → desactiva",
    ],
    aprendizaje:
      "Entender cómo funcionan los algoritmos te ayuda a usar las redes sociales de forma consciente, no automática. Tú controlas la tecnología, no al revés.",
    video: "https://www.youtube.com/embed/RSJrBEhdZxw?rel=0&modestbranding=1",
    imagen:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    recursos: [
      {
        nombre: "Bienestar Digital Google",
        url: "https://wellbeing.google/",
        tipo: "web",
      },
      {
        nombre: "App Forest (enfoque)",
        url: "https://www.forestapp.cc/",
        tipo: "app",
      },
      {
        nombre: "Colombiacheck",
        url: "https://colombiacheck.com",
        tipo: "web",
      },
    ],
  },
  {
    id: 2,
    titulo: "Privacidad y Protección de Datos",
    icon: "lock",
    color: "#10B981",
    gradient: "from-emerald-500 to-teal-600",
    queEs:
      "La privacidad digital es el derecho a controlar quién puede ver tu información personal en internet. Los datos personales incluyen tu nombre, foto, ubicación, número de teléfono, dirección, información familiar y hábitos de navegación.",
    comoFunciona:
      "Cuando te registras en una app o red social, le das permiso de acceder a tus datos. Muchas empresas venden estos datos a terceros para publicidad. Los hackers pueden robar tu información si no proteges bien tus cuentas. Con tus datos pueden suplantar tu identidad, hacerte fraudes o acosarte.",
    queTenerEnCuenta: [
      "Una contraseña débil (como '123456' o tu fecha de nacimiento) puede ser descifrada en segundos",
      "Una foto de tu casa puede revelar tu dirección exacta sin que te des cuenta",
      "Publicar que estás de vacaciones avisa a ladrones que tu casa está sola",
      "Las apps de juegos, linternas y otras apps básicas a veces piden acceso a tu cámara y contactos sin necesidad",
      "El robo de identidad digital puede afectar tu vida real: créditos falsos, denuncias falsas, extorsión",
      "La verificación en dos pasos bloquea el 99% de los intentos de robo de cuenta",
    ],
    queHacer: [
      "Revisa quién puede ver tu perfil en Facebook, Instagram y WhatsApp",
      "Cambia tu perfil de público a privado en todas tus redes",
      "No compartas tu ubicación en tiempo real en historias o publicaciones",
      "Elimina información sensible: dirección, teléfono exacto, lugar de trabajo",
      "Activa la verificación en dos pasos en TODAS tus cuentas importantes",
      "Revisa qué aplicaciones tienen acceso a tus fotos, cámara y contactos",
      "Usa contraseñas diferentes para cada cuenta importante",
    ],
    comoHacerlo: [
      "WhatsApp: Ajustes → Cuenta → Privacidad → Cambia 'Última vez', 'Foto de perfil', 'Info' y 'Estado' a 'Mis contactos'",
      "Instagram: Perfil → Menú (☰) → Configuración → Privacidad → 'Cuenta privada' (activar el interruptor)",
      "Facebook: Menú → Configuración y privacidad → Privacidad → '¿Quién puede ver tus publicaciones?' → Amigos",
      "Verificación en 2 pasos WhatsApp: Ajustes → Cuenta → Verificación en 2 pasos → Activar → crea un PIN de 6 dígitos",
      "Revisar permisos de apps Android: Ajustes → Aplicaciones → selecciona app → Permisos → revisa y desactiva lo innecesario",
    ],
    aprendizaje:
      "Proteger tu información personal evita que desconocidos accedan a datos que pueden usarse en tu contra. Tu privacidad es tu seguridad.",
    video: "https://www.youtube.com/embed/MXf-YGQr6jI?rel=0&modestbranding=1",
    imagen:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    recursos: [
      {
        nombre: "Gestor de contraseñas Bitwarden",
        url: "https://bitwarden.com",
        tipo: "app",
      },
      {
        nombre: "Have I Been Pwned",
        url: "https://haveibeenpwned.com",
        tipo: "web",
      },
      {
        nombre: "MinTIC Colombia",
        url: "https://www.mintic.gov.co",
        tipo: "web",
      },
    ],
  },
  {
    id: 3,
    titulo: "Ciberacoso, Grooming y Fraude Digital",
    icon: "alert",
    color: "#EF4444",
    gradient: "from-red-500 to-rose-600",
    queEs:
      "El ciberacoso es el uso de tecnología para acosar, amenazar o humillar a alguien. El grooming es cuando un adulto usa internet para ganarse la confianza de un niño o joven con fines de abuso sexual. El fraude digital incluye estafas por WhatsApp, correo o redes para robar dinero o datos.",
    comoFunciona:
      "Los acosadores suelen crear perfiles falsos y buscan víctimas en redes sociales, juegos en línea y grupos de WhatsApp. Usan técnicas de manipulación emocional (halagos, amenazas, presión) para conseguir fotos, dinero o encuentros. Los estafadores crean urgencias falsas ('tu cuenta será bloqueada', 'ganaste un premio') para que actúes sin pensar.",
    queTenerEnCuenta: [
      "El groomer suele hacerse pasar por alguien de la misma edad que el menor",
      "Las amenazas de difundir fotos íntimas (sextorsión) son un delito grave en Colombia",
      "Los fraudes más comunes en zonas rurales: 'cuento del tío', premios falsos, créditos falsos",
      "Nunca debes pagar para recibir un premio o crédito",
      "Los organismos oficiales NO piden datos bancarios por WhatsApp o llamada",
      "Guardar evidencias (capturas de pantalla) es fundamental para denunciar",
      "El silencio beneficia al acosador, hablar protege a la víctima",
    ],
    queHacer: [
      "Si alguien te acosa en línea: guarda capturas de pantalla inmediatamente",
      "Bloquea y reporta perfiles sospechosos en la plataforma donde ocurre",
      "No respondas a mensajes amenazantes o intimidantes",
      "Habla con alguien de confianza: familiar, líder comunitario, docente",
      "Denuncia en ICBF (141), Policía (123) o Te Protejo (018000 112 667)",
      "Desconfía de personas que piden fotos, dinero o información personal",
      "Si ves señales de grooming en un menor, actúa de inmediato",
    ],
    comoHacerlo: [
      "Captura de pantalla: Presiona simultáneamente botón de encendido + botón bajar volumen",
      "Bloquear en WhatsApp: Abre el chat → Menú (3 puntos) → Más → Bloquear → Confirmar",
      "Reportar en Instagram: Ve al perfil → Menú (3 puntos) → Reportar → selecciona la razón",
      "Denunciar en Te Protejo: Llama al 018000 112 667 o visita www.teprotejo.org",
      "Reportar a la Fiscalía: Llama al 122 o visita www.fiscalia.gov.co",
      "ICBF para casos con menores: Llama al 141 (línea gratuita 24 horas)",
    ],
    aprendizaje:
      "Reconocer señales de alerta y saber dónde denunciar puede salvarte a ti o a alguien que quieres de situaciones peligrosas. No estás solo/a.",
    video: "https://www.youtube.com/embed/G8iciqvXnmk?rel=0&modestbranding=1",
    imagen:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&h=400&fit=crop",
    recursos: [
      {
        nombre: "Te Protejo Colombia",
        url: "https://www.teprotejo.org",
        tipo: "web",
      },
      { nombre: "ICBF", url: "tel:141", tipo: "telefono" },
      {
        nombre: "Centro Cibernético Policial",
        url: "https://caivirtual.policia.gov.co",
        tipo: "web",
      },
    ],
  },
  {
    id: 4,
    titulo: "Fake News y Pensamiento Crítico",
    icon: "news",
    color: "#8B5CF6",
    gradient: "from-violet-500 to-purple-600",
    queEs:
      "Las fake news o noticias falsas son información deliberadamente incorrecta creada para engañar, generar miedo, odio o manipular decisiones. Pueden ser textos, imágenes, videos o audios de WhatsApp. La desinformación es especialmente dañina en comunidades rurales donde hay menos acceso a fuentes verificadas.",
    comoFunciona:
      "Los creadores de fake news usan titulares alarmistas y emocionales para que compartas sin pensar. Copian el diseño de medios reconocidos para parecer legítimos. Se propagan rápidamente por WhatsApp y Facebook porque la gente confía en sus contactos. Los deepfakes son videos falsos manipulados con inteligencia artificial que parecen reales.",
    queTenerEnCuenta: [
      "Si una noticia te genera mucha emoción (miedo, rabia, euforia), es señal de que puede ser falsa",
      "Verifica siempre: ¿Quién lo publicó? ¿Cuándo? ¿Tiene fuentes?",
      "Las imágenes pueden ser sacadas de contexto o ser de otros países y años",
      "Los grupos de WhatsApp son el principal canal de propagación de fake news en Colombia",
      "Compartir una fake news sin verificar te hace parte del problema",
      "Cadenas con errores ortográficos extremos suelen ser falsas",
      "Si una noticia no aparece en medios reconocidos, probablemente no es real",
    ],
    queHacer: [
      "Antes de compartir una noticia, dedica 2 minutos a verificarla",
      "Busca la misma información en al menos 2 medios reconocidos diferentes",
      "Desconfía de titulares sensacionalistas con letras mayúsculas y muchos signos de exclamación",
      "Usa Google Reverse Image para verificar si una foto es real",
      "Visita Colombiacheck.com para verificar noticias locales",
      "Si detectas una fake news en un grupo, explica amablemente que es falsa",
      "Enseña a tu familia a verificar antes de compartir",
    ],
    comoHacerlo: [
      "Google Fact Check: Busca en Google 'fact check' + el tema de la noticia",
      "Verificar imagen: Abre Google Imágenes → ícono de cámara → pega la URL de la imagen",
      "Colombiacheck: Visita colombiacheck.com y busca el tema en la barra de búsqueda",
      "Medios confiables Colombia: El Tiempo, El Espectador, Caracol Noticias, RCN Noticias",
      "Verificar URL: Sitios falsos usan nombres como 'eltiempo-noticias.com' con guiones o palabras extras",
      "Si la noticia es solo de cadenas de WhatsApp y no aparece en Google, es probablemente falsa",
    ],
    aprendizaje:
      "Verificar información antes de creerla o compartirla evita la propagación de mentiras y te protege de engaños, miedos innecesarios y malas decisiones.",
    video: "https://www.youtube.com/embed/qMRm4UE1gOc?rel=0&modestbranding=1",
    imagen:
      "https://images.unsplash.com/photo-1457694716743-eb419114c894?w=600&h=400&fit=crop",
    recursos: [
      {
        nombre: "Colombiacheck",
        url: "https://colombiacheck.com",
        tipo: "web",
      },
      {
        nombre: "AFP Factual",
        url: "https://factual.afp.com/es",
        tipo: "web",
      },
      {
        nombre: "Google Fact Check Tools",
        url: "https://toolbox.google.com/factcheck",
        tipo: "web",
      },
    ],
  },
  {
    id: 5,
    titulo: "Salud Mental y Autocuidado Digital",
    icon: "heart",
    color: "#EC4899",
    gradient: "from-pink-500 to-rose-500",
    queEs:
      "El bienestar digital es el equilibrio saludable entre el uso de tecnología y el resto de tu vida. La nomofobia es el miedo irracional a quedarse sin celular. La FOMO (Fear Of Missing Out) es la ansiedad de sentir que te pierdes algo importante si no estás conectado.",
    comoFunciona:
      "Las redes sociales están diseñadas para crear hábitos de uso compulsivo. Las notificaciones liberan dopamina (la 'hormona del placer') en el cerebro, creando un ciclo de dependencia. Ver contenido curado y editado de otros puede generar comparación negativa, baja autoestima y depresión. El uso del celular antes de dormir afecta la calidad del sueño.",
    queTenerEnCuenta: [
      "La luz azul de las pantallas engaña al cerebro haciéndole creer que es de día, dificultando el sueño",
      "Comparar tu vida con la 'vida perfecta' de redes sociales es comparar lo real con lo editado",
      "Revisar el celular al despertar activa el estrés antes de que el día comience",
      "Los niños menores de 2 años no deben usar pantallas; de 2 a 5 años máximo 1 hora diaria",
      "El dolor de cuello y espalda puede ser causado por malas posturas con el celular",
      "Es normal sentir FOMO; reconocerlo es el primer paso para manejarlo",
      "Desconectarse no es retroceder: es una habilidad de autocuidado",
    ],
    queHacer: [
      "Establece horarios sin celular: al despertar (30 min), al comer y antes de dormir (1 hora)",
      "Desactiva notificaciones de redes sociales en horario laboral y nocturno",
      "Crea zonas sin celular en tu hogar: mesa del comedor, cuarto de los niños",
      "Haz actividades sin pantalla: caminar, leer, conversar cara a cara, manualidades",
      "Si sientes ansiedad por no revisar el celular, respira profundo y espera 10 minutos",
      "Reemplaza el scroll nocturno por lectura, música relajante o meditación",
    ],
    comoHacerlo: [
      "Modo No Molestar nocturno: Ajustes → No molestar → Programar (ejemplo: 10pm a 7am)",
      "Activar modo escala de grises: Ajustes → Accesibilidad → Pantalla → Filtro de color → Escala de grises (hace el celular menos atractivo)",
      "Silenciar grupos de WhatsApp: Abre el grupo → Menú → Silenciar → selecciona tiempo",
      "Modo avión al dormir: Elimina notificaciones sin apagar el teléfono (sigue funcionando como alarma)",
      "Temporizador de apps: Bienestar Digital → Panel → selecciona app → establece tiempo máximo diario",
    ],
    aprendizaje:
      "Usar el celular de forma equilibrada mejora tu salud mental, relaciones familiares y calidad de vida. Tú decides cuándo conectarte y cuándo disfrutar el mundo real.",
    video: "https://www.youtube.com/embed/z5naKXSr39s?rel=0&modestbranding=1",
    imagen:
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600&h=400&fit=crop",
    recursos: [
      {
        nombre: "App Forest (concentración)",
        url: "https://www.forestapp.cc",
        tipo: "app",
      },
      {
        nombre: "Headspace (meditación)",
        url: "https://www.headspace.com",
        tipo: "app",
      },
      {
        nombre: "Bienestar Digital Android",
        url: "https://wellbeing.google",
        tipo: "web",
      },
    ],
  },
  {
    id: 6,
    titulo: "Guía Comunitaria Colectiva",
    icon: "users",
    color: "#F59E0B",
    gradient: "from-amber-500 to-orange-500",
    queEs:
      "La construcción colectiva de conocimiento es cuando una comunidad une sus saberes y experiencias para crear guías, soluciones y apoyos mutuos. En el contexto digital, significa que todos los integrantes de la comunidad comparten lo aprendido para protegerse mejor como grupo.",
    comoFunciona:
      "Cada persona aprende algo y lo enseña a otros: efecto multiplicador. Los líderes comunitarios se convierten en referentes digitales de la vereda. Se crean redes de apoyo para resolver dudas digitales localmente, sin depender siempre de expertos externos. La comunidad crea sus propios materiales adaptados a su contexto y necesidades.",
    queTenerEnCuenta: [
      "El conocimiento compartido es más poderoso que el conocimiento individual",
      "Cada persona puede enseñar lo que sabe: no necesitas ser experto",
      "Los adultos mayores tienen sabiduría comunitaria valiosa para combinar con lo digital",
      "Los jóvenes pueden ser puentes entre la tecnología y las generaciones mayores",
      "Una guía comunitaria propia refleja los problemas y soluciones de TU comunidad específica",
      "El apoyo mutuo digital reduce la brecha tecnológica en zonas rurales",
    ],
    queHacer: [
      "Comparte lo aprendido en estos talleres con tu familia y vecinos esta semana",
      "Ayuda a alguien a configurar privacidad en sus redes sociales",
      "Crea o únete a un grupo comunitario de apoyo digital",
      "Documenta los casos y soluciones que funcionan en tu comunidad",
      "Organiza mini-talleres mensuales en la vereda con lo aprendido",
      "Ofrece ayuda a adultos mayores para configurar sus celulares",
    ],
    comoHacerlo: [
      "Grupo de WhatsApp: Crea un grupo llamado 'Ayuda Digital Vereda [tu vereda]' e invita a vecinos",
      "Mini-taller: Reúnete con 3-5 personas una tarde y enseña un tema por sesión (privacidad, contraseñas, etc.)",
      "Cuaderno comunitario: Crea un cuaderno donde se escriban problemas comunes y sus soluciones",
      "Árbol de conocimiento: En el siguiente encuentro veredal, comparte qué aprendiste y cómo lo aplicaste",
      "Punto digital comunitario: Propón en la JAC un espacio mensual de ayuda digital en la escuela o salón comunal",
    ],
    aprendizaje:
      "El conocimiento compartido fortalece a toda la comunidad frente a los riesgos digitales. Juntos son más fuertes que cualquier amenaza en línea.",
    video: "https://www.youtube.com/embed/BPwY5tgl9lg?rel=0&modestbranding=1",
    imagen:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop",
    nota: "Sesión en construcción colectiva",
    recursos: [
      {
        nombre: "MinTIC - Gobierno Digital",
        url: "https://www.mintic.gov.co",
        tipo: "web",
      },
      {
        nombre: "UNAD - Recursos comunitarios",
        url: "https://www.unad.edu.co",
        tipo: "web",
      },
      {
        nombre: "JAC en línea",
        url: "https://www.mininterior.gov.co",
        tipo: "web",
      },
    ],
  },
];

export const contactosEmergencia: ContactoEmergencia[] = [
  {
    nombre: "Policía Nacional",
    numero: "123",
    icon: "police",
    descripcion: "Emergencias de seguridad",
  },
  {
    nombre: "ICBF",
    numero: "141",
    icon: "baby",
    descripcion: "Protección de niños y familias",
  },
  {
    nombre: "Te Protejo",
    numero: "018000 112 667",
    icon: "shield",
    descripcion: "Ciberacoso y explotación infantil",
  },
  {
    nombre: "Fiscalía",
    numero: "122",
    icon: "scales",
    descripcion: "Delitos y denuncias",
  },
  {
    nombre: "Defensoría del Pueblo",
    numero: "018000 914 814",
    icon: "building",
    descripcion: "Derechos humanos",
  },
  {
    nombre: "Emergencias Salud",
    numero: "192",
    icon: "hospital",
    descripcion: "Urgencias médicas",
  },
];

export const resultadosGenerales: ResultadoGeneral[] = [
  {
    titulo: "Mayor conciencia sobre el uso de redes sociales",
    descripcion: "Reflexión crítica sobre hábitos digitales y algoritmos",
    icon: "eye",
  },
  {
    titulo: "Fortalecimiento de habilidades de seguridad digital",
    descripcion: "Configuración de privacidad y protección de datos personales",
    icon: "lock",
  },
  {
    titulo: "Identificación de riesgos virtuales",
    descripcion: "Reconocimiento de amenazas, ciberacoso y fraudes en línea",
    icon: "target",
  },
  {
    titulo: "Desarrollo del pensamiento crítico",
    descripcion: "Verificación de información y detección de fake news",
    icon: "bulb",
  },
  {
    titulo: "Promoción del autocuidado digital",
    descripcion: "Bienestar emocional y uso saludable de la tecnología",
    icon: "heart",
  },
  {
    titulo: "Red comunitaria de apoyo digital",
    descripcion: "Multiplicación del conocimiento en la comunidad rural",
    icon: "leaf",
  },
];
