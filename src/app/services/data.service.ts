import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Sistema de idioma (empieza en español 'es')
  private currentLang = new BehaviorSubject<string>('es');
  public currentLang$ = this.currentLang.asObservable();

  // AQUÍ ESTÁ TODO TU CONTENIDO DEL HTML ORIGINAL
  private content: any = {
    es: {
      heroTitle: "¿Qué quieres descubrir en Calvillo?",
      heroDesc: "Explora gastronomía, naturaleza, historia y los rincones más bonitos de este Pueblo Mágico.",
      searchPlaceholder: "Busca: taquería, cabaña, cascada...",
      
      // Categorías
      // Dentro de tu objeto 'content' -> 'es'
taquerias: {
  title: "Taquerías de Calvillo",
  img: "https://source.unsplash.com/900x600/?tacos,mexico",
  text: "Calvillo y sus alrededores...",
  extra: "Consejo: prueba los tacos...",
  link: "...",

  // --- AQUÍ ESTÁ EL ARRAY CORREGIDO ---
  lugares: [
    {
      id: 1,
      nombre: "Taqueria los tres hermanos",
      descripcion: "Los mejores de pastor en la zona centro.",
      direccion: "Calle 5 de Mayo #123",
      rating: 5.0,
      foto: "https://source.unsplash.com/200x200/?tacos",
      // ¡IMPORTANTE! Aquí va el link para que el botón funcione
      urlMapa: "https://goo.gl/maps/ejemplo1" 
    },
    {
      id: 2,
      nombre: "Taquería La Flama",
      descripcion: "Especialidad en tacos de cabeza.",
      direccion: "Av. Rodolfo Landeros #45",
      rating: 4.8,
      foto: "https://source.unsplash.com/200x200/?mexicanfood",
      // Agregamos el link aquí también
      urlMapa: "https://goo.gl/maps/ejemplo2"
    }
    // Puedes seguir agregando más llaves { } con comas entre ellas
  ]
},
// Haces lo mismo para 'restaurantes', 'cascadas', etc.
      restaurantes: {
        title: "Restaurantes y comida local",
        img: "https://source.unsplash.com/900x600/?restaurant,mexicanfood",
        text: "Desde restaurantes familiares hasta propuestas contemporáneas; disfruta empanadas de guayaba, platos regionales y cocina tradicional. Muchas opciones ofrecen platillos elaborados con productos locales.",
        extra: "Horario común: 9:00 – 22:00 (varía por lugar).",
        link: "https://www.google.com/search?q=restaurantes+en+calvillo"
      },
      cascadas: {
        title: "Cascadas y rutas naturales",
        img: "https://source.unsplash.com/900x600/?waterfall",
        text: "La zona alberga cascadas y senderos ideales para caminatas. Lleva calzado cómodo, agua y respeta las áreas naturales.",
        extra: "Nivel: fácil a moderado. Lleva cámara para fotos.",
        link: "https://www.google.com/search?q=cascadas+de+calvillo"
      },
      presas: {
        title: "Presas y espejos de agua",
        img: "https://source.unsplash.com/900x600/?lake",
        text: "Las presas cercanas ofrecen paisajes tranquilos y actividades recreativas. Perfectas para picnic y fotografía.",
        extra: "Consulta accesos y horarios antes de ir.",
        link: "https://www.google.com/search?q=presas+calvillo"
      },
      cabanas: {
        title: "Cabañas rurales",
        img: "https://source.unsplash.com/900x600/?cabin,forest",
        text: "Cabañas rodeadas de naturaleza para desconectar. Ideales para fines de semana en pareja o familia.",
        extra: "Reserva con anticipación en temporadas altas.",
        link: "https://www.google.com/search?q=caba%C3%B1as+calvillo"
      },
      hoteles: {
        title: "Hoteles y hospedaje",
        img: "https://source.unsplash.com/900x600/?hotel,boutique",
        text: "Opciones de hospedaje desde económicas hasta boutique. Revisa opiniones y servicios como desayuno incluido y estacionamiento.",
        extra: "Pregunta por tarifas y servicios especiales.",
        link: "https://www.google.com/search?q=hoteles+calvillo"
      },
      turismo: {
        title: "Lo más turístico",
        img: "https://source.unsplash.com/900x600/?tourism,mexico",
        text: "Lugares destacados: Plaza central, museos locales, rutas naturales y festivales. Consulta agendas locales para eventos y ferias.",
        extra: "Eventos especiales: Feria del Guayabo (fecha variable).",
        link: "https://www.google.com/search?q=turismo+calvillo"
      },
      dulces: {
        title: "Dulces típicos",
        img: "https://source.unsplash.com/900x600/?sweets,candy",
        text: "Calvillo es famoso por sus dulces y conservas, especialmente de guayaba. Busca producciones artesanales en mercados y tiendas locales.",
        extra: "Lleva espacio en la maleta: ¡son perfectos de souvenir!",
        link: "https://www.google.com/search?q=dulces+calvillo"
      },
      plaza: {
        title: "Plaza de Calvillo",
        img: "https://source.unsplash.com/900x600/?townsquare,plaza",
        text: "El corazón del pueblo: arquitectura colonial, cafés, y vida local. Ideal para recorrer a pie y disfrutar de eventos.",
        extra: "Perfecta para fotos al atardecer.",
        link: "https://www.google.com/search?q=la+plaza+calvillo"
      },
      albercas: {
        title: "Parques acuáticos",
        img: "https://source.unsplash.com/900x600/?waterpark,pool",
        text: "Diversión para toda la familia en parques acuáticos y albercas cercanas. Consulta medidas de seguridad y costos de entrada.",
        extra: "Lleva protector solar y toalla.",
        link: "https://www.google.com/search?q=albercas+en+calvillo"
      },
      mercados: {
        title: "Mercados locales",
        img: "https://source.unsplash.com/900x600/?market,local",
        text: "Mercados con productos frescos, artesanías y comida típica. Además son excelentes para conocer la vida local.",
        extra: "Pregunta por productos locales y precios.",
        link: "https://www.google.com/search?q=mercado+calvillo"
      },
      panaderias: {
        title: "Panaderías y repostería",
        img: "https://source.unsplash.com/900x600/?bakery,bread",
        text: "Pan artesanal, panes de horno tradicionales y con sabores de la región. Ideales para desayunos y snacks.",
        extra: "Prueba panes rellenos y dulces locales.",
        link: "https://www.google.com/search?q=panaderias+calvillo"
      },
      museo: {
        title: "Museo de Pueblos Mágicos",
        img: "https://source.unsplash.com/900x600/?museum,history",
        text: "Museo con piezas locales y exposición sobre la historia y tradiciones del pueblo. Excelente para entender el contexto cultural.",
        extra: "Revisa horarios y precios de entrada.",
        link: "https://www.google.com/search?q=Museo+Calvillo"
      },
      pizzeria: {
        title: "Pizzería La Esquina",
        img: "https://source.unsplash.com/900x600/?pizza,restaurant",
        text: "Pizzería artesanal muy querida por locales y visitantes. Masa casera, ingredientes frescos y ambiente acogedor.",
        extra: "Horario: 13:00 - 22:00 (verificar). Recomendación: pizza con guayaba y queso (si la ofrecen).",
        link: "https://www.google.com/search?q=pizzeria+la+esquina+calvillo"
      },
      historia: {
        title: "Historia de Calvillo",
        img: "https://source.unsplash.com/900x600/?colonial,building",
        text: "Calvillo, fundado en el siglo XVIII, es un pueblo con profundas raíces agrícolas y tradiciones. Conocido por sus guayabos y las conservas de guayaba, la región creció alrededor de la agricultura. El centro histórico conserva fachadas coloniales, la plaza principal y templos tradicionales. Las festividades locales y la Feria del Guayabo muestran la gastronomía, música y artesanía típicas de la comunidad.",
        extra: "Datos: Ubicación - Aguascalientes; Actividades tradicionales: Feria del Guayabo, elaboración de dulces artesanales.",
        link: "https://www.google.com/search?q=historia+calvillo"
      }
    },
    en: {
      heroTitle: "What do you want to discover in Calvillo?",
      heroDesc: "Explore gastronomy, nature, history and the most beautiful corners of this Magical Town.",
      searchPlaceholder: "Search: taco, cabin, waterfall...",
      
      taquerias: {
        title: "Taquerías of Calvillo",
        img: "https://source.unsplash.com/900x600/?tacos,mexico",
        text: "Calvillo and nearby areas offer taquerías where you can enjoy tacos al pastor, barbacoa and homemade stews. Ask about local ingredients and opening hours.",
        extra: "Tip: try the tacos with local salsas and fresh aguas.",
        link: "https://www.google.com/search?q=taquerias+calvillo"
      },
      restaurantes: {
        title: "Restaurants & Local Food",
        img: "https://source.unsplash.com/900x600/?restaurant,mexicanfood",
        text: "From family restaurants to contemporary proposals; enjoy guava empanadas, regional dishes, and traditional cuisine. Many places use local products.",
        extra: "Common hours: 9:00 – 22:00 (varies).",
        link: "https://www.google.com/search?q=restaurantes+en+calvillo"
      },
      cascadas: {
        title: "Waterfalls & Natural Trails",
        img: "https://source.unsplash.com/900x600/?waterfall",
        text: "The area has waterfalls and trails perfect for hikes. Wear comfortable shoes, bring water and respect nature areas.",
        extra: "Difficulty: easy to moderate. Great photo spots.",
        link: "https://www.google.com/search?q=cascadas+de+calvillo"
      },
      presas: {
        title: "Dams & Lakes",
        img: "https://source.unsplash.com/900x600/?lake",
        text: "Nearby dams offer peaceful landscapes and recreational activities. Great for picnics and photography.",
        extra: "Check access and hours before visiting.",
        link: "https://www.google.com/search?q=presas+calvillo"
      },
      cabanas: {
        title: "Rural Cabins",
        img: "https://source.unsplash.com/900x600/?cabin,forest",
        text: "Cabins surrounded by nature to disconnect—perfect for weekend getaways with family or couples.",
        extra: "Book in advance during high season.",
        link: "https://www.google.com/search?q=caba%C3%B1as+calvillo"
      },
      hoteles: {
        title: "Hotels & Lodging",
        img: "https://source.unsplash.com/900x600/?hotel,boutique",
        text: "Options range from budget hotels to boutique stays. Check reviews and amenities like breakfast and parking.",
        extra: "Ask about special rates and services.",
        link: "https://www.google.com/search?q=hoteles+calvillo"
      },
      turismo: {
        title: "Top Tourist Spots",
        img: "https://source.unsplash.com/900x600/?tourism,mexico",
        text: "Highlights: central square, local museums, natural routes and festivals. Check local calendars for events and fairs.",
        extra: "Special events: Guava Fair (dates vary).",
        link: "https://www.google.com/search?q=turismo+calvillo"
      },
      dulces: {
        title: "Traditional Sweets",
        img: "https://source.unsplash.com/900x600/?sweets,candy",
        text: "Calvillo is famous for sweets and preserves, especially guava. Look for artisanal products in markets and shops.",
        extra: "They make great souvenirs!",
        link: "https://www.google.com/search?q=dulces+calvillo"
      },
      plaza: {
        title: "Calvillo Square",
        img: "https://source.unsplash.com/900x600/?townsquare,plaza",
        text: "The town's heart: colonial architecture, cafés, and local life. Perfect for walking and enjoying events.",
        extra: "Great for sunset photos.",
        link: "https://www.google.com/search?q=la+plaza+calvillo"
      },
      albercas: {
        title: "Water Parks & Pools",
        img: "https://source.unsplash.com/900x600/?waterpark,pool",
        text: "Family fun at nearby water parks and pools. Check safety measures and entrance fees.",
        extra: "Bring sunscreen and towel.",
        link: "https://www.google.com/search?q=albercas+en+calvillo"
      },
      mercados: {
        title: "Local Markets",
        img: "https://source.unsplash.com/900x600/?market,local",
        text: "Markets with fresh products, crafts and typical food. Great to immerse in local life.",
        extra: "Ask for local specialties and prices.",
        link: "https://www.google.com/search?q=mercado+calvillo"
      },
      panaderias: {
        title: "Bakeries & Pastries",
        img: "https://source.unsplash.com/900x600/?bakery,bread",
        text: "Artisanal bread and oven-baked goods. Perfect for breakfast and snacks.",
        extra: "Try filled breads and local sweets.",
        link: "https://www.google.com/search?q=panaderias+calvillo"
      },
      museo: {
        title: "Local Museum",
        img: "https://source.unsplash.com/900x600/?museum,history",
        text: "Museum with local pieces and exhibits about the town's history and traditions. Great to learn about the region.",
        extra: "Check hours and admission fees.",
        link: "https://www.google.com/search?q=Museo+Calvillo"
      },
      pizzeria: {
        title: "Pizzería La Esquina",
        img: "https://source.unsplash.com/900x600/?pizza,restaurant",
        text: "A beloved artisanal pizzeria: handmade dough, fresh ingredients and cozy atmosphere. Popular with locals.",
        extra: "Hours: 13:00 - 22:00 (confirm). Try their special pizzas.",
        link: "https://www.google.com/search?q=pizzeria+la+esquina+calvillo"
      },
      historia: {
        title: "History of Calvillo",
        img: "https://source.unsplash.com/900x600/?history,colonial",
        text: "Founded in the 18th century, Calvillo grew around agriculture—especially guava cultivation. The town preserves colonial facades, temples and traditions. The annual Guava Fair showcases music, food and local crafts, celebrating the agricultural roots and community identity.",
        extra: "Location: Aguascalientes. Key traditions: Guava Fair, artisanal sweets production.",
        link: "https://www.google.com/search?q=historia+calvillo"
      }
    }
  };

  constructor() { }

  /**
   * Cambia el idioma actual de la app.
   * @param lang 'es' o 'en'
   */
  setLanguage(lang: string) {
    this.currentLang.next(lang);
  }

  /**
   * Obtiene el idioma actual como string simple.
   */
  getLanguage() {
    return this.currentLang.value;
  }

  /**
   * Devuelve todo el objeto de textos del idioma actual.
   */
  getTexts() {
    return this.content[this.currentLang.value];
  }

  /**
   * Obtiene los datos de un item específico (ej: 'taquerias') en el idioma actual.
   * @param key La clave del item
   */
  getItemData(key: string) {
    return this.content[this.currentLang.value][key];
  }
  // Función para obtener datos según la categoría (ej: 'taquerias', 'restaurantes')
  getCategoryData(categoryKey: string) {
    // Devuelve la data del idioma actual (hardcodeado a 'es' por ahora)
    return this.content['es'][categoryKey];
  }
  // ... resto de tu código ...

  // AGREGA ESTA FUNCIÓN AL FINAL DE TU SERVICIO
  getData() {
    // Retorna el contenido en el idioma actual (por defecto 'es')
    const lang = this.currentLang.value; 
    return this.content[lang];
  }


}