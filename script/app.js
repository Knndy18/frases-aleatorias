// Obtener referencias a los elementos
const emotionSelect = document.getElementById('emotionSelect');
const generateMessageBtn = document.getElementById('generateMessage');
const messageOutput = document.getElementById('messageOutput');
const newMessageBtn = document.getElementById('newMessage');
const animationsContainer = document.querySelector('.animations-container');

// Listas de mensajes con emojis y animaciones
const messages = {
    mensajeDia: [
        { text: "Hoy será un día maravilloso. 🌟", emoji: "🌟" },
        { text: "Recuerda: eres increíble, ¡y puedes con todo! 💪", emoji: "💪" },
        { text: "Que este día esté lleno de amor y alegría. 💖", emoji: "💖" },
        { text: "Hoy será un día maravilloso. 🌟", emoji: "🌟" },
        { text: "Recuerda: eres increíble, ¡y puedes con todo! 💪", emoji: "💪" },
        { text: "Que este día esté lleno de amor y alegría. 💖", emoji: "💖" },
        { text: "Hoy es un buen día para hacer cosas grandes. 🚀", emoji: "🚀" },
        { text: "Un día lleno de nuevas oportunidades te espera. 🌱", emoji: "🌱" },
        { text: "Cada día trae una nueva oportunidad. 🌞", emoji: "🌞" },
        { text: "Hoy es perfecto para empezar algo nuevo. ✨", emoji: "✨" },
        { text: "Hoy será un gran día, confía en ti. 💫", emoji: "💫" },
        { text: "Haz que hoy sea un día increíble. 🌈", emoji: "🌈" },
        { text: "Cada paso que das te acerca a tu meta. 🏁", emoji: "🏁" },
        { text: "Hoy será un día lleno de momentos felices. 😊", emoji: "😊" },
        { text: "Hoy es un buen día para sonreír. 😀", emoji: "😀" },
        { text: "Este día está lleno de posibilidades. 🌟", emoji: "🌟" },
        { text: "Hoy es tu día para brillar. ✨", emoji: "✨" },
        { text: "Haz de este día algo especial. 💖", emoji: "💖" },
        { text: "Hoy es el mejor día para ser feliz. 😁", emoji: "😁" },
        { text: "Recuerda siempre sonreír, hoy y todos los días. 😃", emoji: "😃" },
        
        //romanticos

      
        { text: "Hoy, el amor será la energía que nos guíe en cada paso. 💫", emoji: "💫" },
        { text: "Este día, como todos, es mejor a tu lado. 🌸", emoji: "🌸" },
        { text: "Hoy es perfecto para seguir escribiendo nuestra historia de amor. 📖", emoji: "📖" },
        { text: "Hoy, mi amor, es un buen día para hacer que nuestros sueños se hagan realidad. ✨", emoji: "✨" }
    ],
    triste: [
      
        { text: "Las lágrimas también son parte del proceso de sanar. 💧", emoji: "💧" },
        { text: "Hoy no te sientas mal por sentirte mal. 🖤", emoji: "🖤" },
        { text: "No hay nada malo en tomarse un tiempo para sanar. 🌸", emoji: "🌸" },
        { text: "Está bien sentirse mal de vez en cuando. Lo importante es seguir adelante. 🌷", emoji: "🌷" },
        { text: "Todo lo que sientes es una parte del proceso. 🌱", emoji: "🌱" },
        { text: "Recuerda que la tristeza es solo una emoción pasajera. 🌞", emoji: "🌞" },
        { text: "Aunque hoy te sientas mal, las cosas cambiarán. 🌈", emoji: "🌈" },
        { text: "Respira hondo, pronto sentirás alivio. 💖", emoji: "💖" },
        { text: "Hoy es un día triste, pero eso también pasará. 💫", emoji: "💫" },
        { text: "Recuerda que no estás solo/a. 💙", emoji: "💙" },
        { text: "Hoy te abrazo a la distancia, todo pasará. 🌸", emoji: "🌸" },
        { text: "La tristeza también forma parte de la vida, todo pasará. 🌷", emoji: "🌷" },
        //romatico
       
        { text: "Hoy todo puede parecer difícil, pero mi amor por ti lo hará todo más ligero. 💖", emoji: "💖" },
        { text: "Aunque las lágrimas caigan, mi amor por ti siempre las secará. 💧", emoji: "💧" },
        { text: "Si alguna vez dudas de tu fuerza, recuerda que soy tu razón para ser fuerte. 💪", emoji: "💪" },
        { text: "Te amo más de lo que las palabras pueden expresar, y siempre estaré a tu lado. 💕", emoji: "💕" },
        { text: "Todo lo que necesitas está dentro de ti, pero yo estaré aquí para recordártelo siempre. 🌟", emoji: "🌟" },
        { text: "Aunque hoy el viento sople fuerte, siempre seré tu abrigo. 🌬️", emoji: "🌬️" },
        { text: "Hoy te mando un beso al viento, mi amor, para que sientas mi cariño donde estés. 💋", emoji: "💋" },
        { text: "En cada momento difícil, recuerda que eres mi razón de sonreír. 🌹", emoji: "🌹" },
        { text: "Nada ni nadie podrá apagar el amor que tengo por ti, ni en los días más oscuros. 🌑", emoji: "🌑" },
        { text: "Los días tristes también pasan, mi amor, y al final siempre habrá sol y un abrazo. 🌞", emoji: "🌞" },
        { text: "Te envío mil abrazos con cada suspiro, porque en cada uno de ellos está mi amor por ti. 💖", emoji: "💖" },
        { text: "Nunca olvides que todo lo que sientes es válido, y siempre tendrás mi amor para sanarte. 🌱", emoji: "🌱" },
        { text: "Hoy te sostengo con mis pensamientos, y mañana estaré a tu lado con mis brazos. 🤗", emoji: "🤗" },
        { text: "En cada batalla, tu fuerza será la mía, y juntos conquistaremos todo. 🛡️", emoji: "🛡️" },
        { text: "Te amo más de lo que las palabras pueden decir, y hoy es solo un recordatorio de ello. 🌟", emoji: "🌟" },
        { text: "El sol puede esconderse, pero mi amor por ti siempre brillará. 🌅", emoji: "🌅" },
        { text: "Amor mío, cuando el camino sea incierto, caminaré contigo. 🌷", emoji: "🌷" }
    ],
    feliz: [
      
        { text: "Tu risa es mi canción favorita. 🎶", emoji: "🎶" },
        { text: "Eres un rayo de luz en mi vida. ✨", emoji: "✨" },
        { text: "Siempre que estás feliz, todo parece mejor. 💖", emoji: "💖" },
        { text: "Verte feliz me llena de paz. 💙", emoji: "💙" },
        { text: "Eres mi motivo de alegría diaria. 🌈", emoji: "🌈" },
        { text: "Qué bueno verte tan feliz, mi amor. 😘", emoji: "😘" },
        { text: "Tu alegría ilumina mi mundo. 🌞", emoji: "🌞" },
        { text: "¡Qué felicidad verte así de contento! 😄", emoji: "😄" },
        //romantico
        { text: "Tu sonrisa es mi razón para soñar cada día. 💖", emoji: "💖" },
        { text: "Eres mi sol en los días nublados, mi felicidad constante. 🌞", emoji: "🌞" },
        { text: "Ver tu risa es mi mayor bendición. 🎶", emoji: "🎶" },
        { text: "Cada vez que te veo sonreír, siento que el mundo es perfecto. 💖", emoji: "💖" },
        { text: "Tu alegría se convierte en la luz que ilumina mi camino. ✨", emoji: "✨" },
        { text: "Me haces tan feliz con solo ser tú. 🌸", emoji: "🌸" },
        { text: "Cuando te veo sonreír, el tiempo se detiene para mí. 💖", emoji: "💖" },
        { text: "Cada vez que te ríes, el mundo parece un lugar más hermoso. 🌍", emoji: "🌍" },
        { text: "Eres la chispa de alegría que enciende mi corazón. 🔥", emoji: "🔥" },
        { text: "Tu sonrisa es mi paz y mi felicidad. 😄", emoji: "😄" },
        { text: "Gracias por llenar mi vida de momentos tan felices. 🌈", emoji: "🌈" },
        { text: "Tu alegría es mi motor para seguir adelante, siempre. 🚀", emoji: "🚀" },
        { text: "Cada día me enamoro más de ti, especialmente cuando te veo sonreír. 💖", emoji: "💖" },
        { text: "Tu felicidad es mi mayor tesoro. 💎", emoji: "💎" },
        { text: "Al verte feliz, todo mi ser se llena de paz. 💙", emoji: "💙" },
        { text: "Lo más hermoso de mi día es verte reír. 😍", emoji: "😍" },
        { text: "Tu risa es como un canto de esperanza para mi corazón. 🎶", emoji: "🎶" },
        { text: "El mejor momento de mi día es cuando compartimos risas juntos. 💖", emoji: "💖" },
        { text: "Nunca dejes de sonreír, porque tu sonrisa es la que hace brillar mi mundo. ✨", emoji: "✨" }
    ],
    ansiosa: [
       
        { text: "Recuerda que esto también pasará. 🌸", emoji: "🌸" },
        { text: "Sigue respirando profundamente, todo estará bien. 🌞", emoji: "🌞" },
        { text: "Estás haciendo lo mejor que puedes, todo se solucionará. 💖", emoji: "💖" },
        { text: "No dejes que la ansiedad te controle, todo se irá calmando. 🌿", emoji: "🌿" },
        { text: "La calma vendrá pronto, solo sigue respirando. 🌸", emoji: "🌸" },
        { text: "No estás solo/a en esto. Siempre estaré aquí. 🤗", emoji: "🤗" },
        { text: "La ansiedad es solo temporal. Respira y sigue adelante. 🌿", emoji: "🌿" },
        { text: "Confía en ti, todo se resolverá. 🌈", emoji: "🌈" },
        { text: "Sé que lo superarás, eres más fuerte de lo que crees. 💪", emoji: "💪" },
        { text: "Todo lo que sientes es válido, pero también pasará. 💙", emoji: "💙" },
        { text: "Lo peor ya pasó, ahora solo queda respirar y relajarte. 🌿", emoji: "🌿" },
        { text: "Estoy aquí para ti, nunca olvides eso. 🫂", emoji: "🫂" },
        { text: "Recuerda que todo se resolverá. 🌟", emoji: "🌟" },
        { text: "Todo lo que sientes es solo un momento, todo se calmará. 💙", emoji: "💙" },
        { text: "Relájate, todo estará bien. 🌞", emoji: "🌞" },
        { text: "No te preocupes, esto también pasará. 🌸", emoji: "🌸" },
        { text: "La paz llegará cuando menos lo esperes. 🕊️", emoji: "🕊️" },
        { text: "Sigue respirando, todo se solucionará a su tiempo. 💖", emoji: "💖" },
        { text: "Te abrazo desde aquí, todo mejorará. 🫂", emoji: "🫂" },
        { text: "Confía en que todo mejorará, pronto estarás en paz. 🌿", emoji: "🌿" },
        { text: "No hay tormenta que dure para siempre, la calma está cerca. 🌸", emoji: "🌸" },
        { text: "Todo lo que sientes es válido, pero también es solo un momento. 🌱", emoji: "🌱" },
        { text: "Te abrazo en pensamiento, todo estará bien. 💖", emoji: "💖" },
        { text: "El tiempo sanará todo, solo sigue respirando. 🕊️", emoji: "🕊️" },
        { text: "Recuerda que siempre tienes un refugio en mí. 🫂", emoji: "🫂" },
        { text: "Cada paso que das te acerca más a la calma. 🌷", emoji: "🌷" },
        { text: "Todo lo que ahora te preocupa se resolverá con paciencia. ⏳", emoji: "⏳" },
        { text: "Tienes dentro de ti la fuerza para superar todo. 💪", emoji: "💪" },
        { text: "Eres más valiente de lo que crees, confío en ti. 💖", emoji: "💖" },
        { text: "Este momento también pasará, solo respira profundo. 🌸", emoji: "🌸" },
        { text: "En los momentos difíciles, recuerda que siempre te apoyo. 🫂", emoji: "🫂" },
        { text: "La serenidad llegará cuando menos lo esperes. 🌞", emoji: "🌞" },
        { text: "Cada día es una oportunidad para dejar ir el estrés. 💙", emoji: "💙" },
        { text: "Sé que todo se resolverá a su tiempo. 🌟", emoji: "🌟" },
        { text: "No te preocupes, todo lo que sientes es parte del proceso. 🌱", emoji: "🌱" },
        { text: "Todo se calmará, solo respira y sigue adelante. 🌸", emoji: "🌸" },
        { text: "Tu fuerza interior te llevará hacia la calma. 💪", emoji: "💪" },
        { text: "Este momento de ansiedad pasará, y todo mejorará. 🌿", emoji: "🌿" },
        { text: "Tu paz está a solo un respiro de distancia. 💖", emoji: "💖" },
        { text: "Te mando un abrazo lleno de calma y fuerza. 🫂", emoji: "🫂" },
        { text: "No estás solo/a en esto, siempre estaré aquí para ti. 💙", emoji: "💙" },
        { text: "Todo se resolverá, solo sigue respirando. 🌸", emoji: "🌸" },
        { text: "Recuerda que cada respiro te acerca más a la paz. 🌿", emoji: "🌿" },
        { text: "A veces, solo hay que dejar ir y confiar en el proceso. 🌱", emoji: "🌱" },
        { text: "Todo lo que sientes hoy pasará, la calma llegará. 💖", emoji: "💖" },
        { text: "Sigue respirando profundamente, todo mejorará. 🌞", emoji: "🌞" },
        { text: "La paz está en camino, solo mantén la calma. 🌷", emoji: "🌷" },
        { text: "Te acompaño en este momento, todo estará bien. 🫂", emoji: "🫂" },
        { text: "La serenidad es tuya, solo respira y confía. 💖", emoji: "💖" },
        { text: "La calma vendrá con cada respiro, estás en el camino correcto. 💙", emoji: "💙" }
    ],
    enojada:[
       
        { text: "Lo que más quiero es que te sientas mejor, y lo lograré a tu lado. 💖", emoji: "💖" },
        { text: "Sé que esto pasará, y cuando lo haga, estaré aquí para abrazarte. 🫂", emoji: "🫂" },
        { text: "Tómate tu tiempo para calmarte, yo estaré aquí esperando con paciencia. 💖", emoji: "💖" },
        { text: "Entiendo que a veces las cosas no son fáciles, pero juntos siempre lo conseguimos. 💪", emoji: "💪" },
        { text: "Eres tan valiente, y sé que todo lo que sientes hoy pronto será solo un recuerdo. 💫", emoji: "💫" },
        { text: "Te quiero con todo mi corazón, y estaré aquí mientras superas todo esto. ❤️", emoji: "❤️" },
        { text: "No importa lo que sientas ahora, siempre encontraré una forma de hacerte sonreír. 😊", emoji: "😊" },
        { text: "Lo que más deseo es verte en paz, y haré lo posible por ayudarte a encontrarla. 🕊️", emoji: "🕊️" },
        { text: "A veces nos sentimos abrumados, pero eso no cambia cuánto te amo. 💖", emoji: "💖" },
        { text: "Siempre estaré aquí para escucharte, apoyarte y hacerte sentir mejor. 🫶", emoji: "🫶" },
        { text: "Nada ni nadie puede cambiar lo que siento por ti. Siempre estaré aquí para ti. 💖", emoji: "💖" },
        { text: "Lo que más quiero es verte bien, y lo lograremos juntos. 💕", emoji: "💕" },
        { text: "A veces las cosas se complican, pero mi amor por ti es lo más constante. 💖", emoji: "💖" },
        { text: "Entiendo que estés pasando por un momento difícil, pero quiero que sepas que te amo profundamente. 💖", emoji: "💖" },
        { text: "Sé que las palabras no pueden solucionar todo, pero mi amor siempre será tu refugio. 🫂", emoji: "🫂" },
        { text: "Te amo, y eso es lo que más importa en este momento. ❤️", emoji: "❤️" },
        { text: "Mi mayor deseo es verte en paz, y haré lo que sea para que eso pase. 🌿", emoji: "🌿" },
        { text: "Aunque las cosas no sean fáciles, lo que más importa es que siempre estaré a tu lado. 🫶", emoji: "🫶" },
        { text: "Sé que lo que sientes es real, y estoy aquí para ayudarte a superarlo. 💖", emoji: "💖" },
        { text: "A veces la vida nos pone obstáculos, pero juntos podemos superarlos. 💪", emoji: "💪" },
        { text: "Te amo, y eso es lo que me da fuerza para acompañarte en todo. 💖", emoji: "💖" },
        { text: "Lo importante es que siempre nos tengamos el uno al otro. 💕", emoji: "💕" }

    ]
};

// Función para generar un mensaje aleatorio con animación
function generateMessage() {
    const selectedEmotion = emotionSelect.value;

    if (!selectedEmotion) {
        alert('Por favor, selecciona una emoción.');
        return;
    }

    // Seleccionar un mensaje aleatorio
    const messageList = messages[selectedEmotion];
    const randomIndex = Math.floor(Math.random() * messageList.length);
    const randomMessage = messageList[randomIndex];

    // Mostrar el mensaje en el área correspondiente
    messageOutput.textContent = randomMessage.text;

    // Mostrar el botón "Otro mensaje"
    newMessageBtn.classList.remove('hidden');
}
function mensDia(){
    let mensaje = document.getElementById('mensajeDia').value;

    // Seleccionar un mensaje aleatorio
    const message = messages[mensaje];
    const Index = Math.floor(Math.random() * message.length);
    const random = message[Index];

    // Mostrar el mensaje en el área correspondiente
    messageOutput.textContent = random.text;

    // Mostrar el botón "Otro mensaje"
    newMessageBtn.classList.remove('hidden');

}

// Evento para generar mensaje
generateMessageBtn.addEventListener('click', generateMessage);

// Evento para otro mensaje
newMessageBtn.addEventListener('click', generateMessage);

//mostrar el poema
// Definir el poema
const poema = `Tu amor es como un sol brillante,que ilumina mi vida y me da paz,tus palabras son la melodía,que en mi corazón siempre sonarán.`;

// Obtener el elemento donde se insertará el poema
const poemaElement = document.getElementById('poema');

// Insertar el poema en el contenedor
poemaElement.innerHTML = poema;
