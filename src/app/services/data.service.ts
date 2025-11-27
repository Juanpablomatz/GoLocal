import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private currentLang = new BehaviorSubject<string>('es');
  public currentLang$ = this.currentLang.asObservable();

  // AHORA CADA CATEGORÍA ES UNA LISTA [] DE LUGARES
  private content: any = {
    es: {
      heroTitle: "Descubre la magia de Calvillo",
      heroDesc: "Guayaba, arte, historia y sabor en un solo lugar.",
      searchPlaceholder: "Busca un lugar...",
      
      // --- CATEGORÍA: TAQUERÍAS (Lista) ---
     // DENTRO DE data.service.ts
taquerias: [
  {
    id: 1,
    title: "Taquería Los Tres Hermanos",
    desc: "Tradición en el centro de Calvillo.",
    img: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&w=800&q=80",
    text: "Un lugar clásico para disfrutar de unos buenos tacos. Excelente ubicación y servicio rápido.",
    extra: "Zona Centro",
    direccion: "C. Independencia 303, Zona Centro, 20800 Calvillo, Ags.",
    horario: "10:00 AM - 6:00 PM / 10:00 PM - Cierre",
    telefono: "495 105 5193",
    precio_persona: "$1 - $100 MXN",
    reviews: []
  },
  {
    id: 2,
    title: "Taquería Lopez Mercado",
    desc: "El sabor del mercado.",
    img: "https://images.unsplash.com/photo-1504544763933-20aeee550e36?auto=format&fit=crop&w=800&q=80",
    text: "Ubicados dentro del Mercado Guel Jimenez. Ideales para almorzar después de hacer las compras.",
    extra: "Mercado Guel Jimenez",
    direccion: "Mercado Guel Jimenez, Local 13, Zona Centro, 20800 Calvillo, Ags.",
    horario: "Abre temprano - 4:00 PM",
    telefono: "495 956 3622",
    precio_persona: "$1 - $100 MXN",
    reviews: []
  },
  {
    id: 3,
    title: "Taquería Galeana",
    desc: "Cena rica y hasta medianoche.",
    img: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=800&q=80",
    text: "Perfectos para la cena. Cierran tarde, así que son una gran opción nocturna.",
    extra: "Zona Centro",
    direccion: "C. Hermanos Galeana 312, Zona Centro, 20800 Calvillo, Ags.",
    horario: "Abre tarde - 12:00 AM",
    telefono: "495 132 0920",
    precio_persona: "$1 - $100 MXN",
    reviews: []
  },
  {
    id: 4,
    title: "Country Taco",
    desc: "Sabor único en el Malecón.",
    img: "https://images.unsplash.com/photo-1613514785940-daed07799d9b?auto=format&fit=crop&w=800&q=80",
    text: "Disfruta de una vista agradable en el Malecón mientras comes. Un ambiente un poco más exclusivo.",
    extra: "Malecón Norte",
    direccion: "Malecón Nte., Benito Juárez, 20800 Calvillo, Ags.",
    horario: "Abre temprano - 8:00 PM",
    telefono: "495 958 7414",
    precio_persona: "$100 - $200 MXN",
    reviews: []
  },
  {
    id: 5,
    title: "Taquería El Taco-nazo",
    desc: "El taconazo que buscabas.",
    img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    text: "Ubicados en Los Ángeles. Gran variedad y excelente sazón para la cena.",
    extra: "Col. Los Ángeles",
    direccion: "C. 5 de Mayo 419, Los Ángeles, 20805 Calvillo, Ags.",
    horario: "Abre tarde - 10:00 PM",
    telefono: "495 106 4560",
    precio_persona: "$1 - $200 MXN",
    reviews: []
  },
  {
    id: 6,
    title: "Taquería Celso",
    desc: "Tradición en cada mordida.",
    img: "https://images.unsplash.com/photo-1624300626419-4da3954e9280?auto=format&fit=crop&w=800&q=80",
    text: "Un lugar céntrico y confiable para comer rápido y sabroso antes de que caiga la noche.",
    extra: "Zona Centro",
    direccion: "C. Independencia 110, Zona Centro, 20800 Calvillo, Ags.",
    horario: "Abre temprano - 6:00 PM",
    telefono: "495 132 6027",
    precio_persona: "$1 - $200 MXN",
    reviews: []
  },
  {
    id: 7,
    title: "Tacos La Cochera",
    desc: "El rincón del sabor en Chicago.",
    img: "https://images.unsplash.com/photo-1574856344991-aaa31b6f4ce3?auto=format&fit=crop&w=800&q=80",
    text: "Famosos en el Barrio de Chicago. Excelentes precios y sabor casero.",
    extra: "Barrio de Chicago",
    direccion: "Revolución 326, Barrio de Chicago, 20805 Calvillo, Ags.",
    horario: "Consultar horario",
    telefono: "495 956 2700",
    precio_persona: "$1 - $100 MXN",
    reviews: []
  },
  {
    id: 8,
    title: "Taquería La Herradura",
    desc: "Abre por la tarde para tu antojo.",
    img: "https://images.unsplash.com/photo-1611250188496-e966043a0629?auto=format&fit=crop&w=800&q=80",
    text: "Ideal para cuando sales de trabajar y buscas algo rico por la tarde-noche.",
    extra: "Zona Centro",
    direccion: "Av. B. Juárez 104, Zona Centro, 20800 Calvillo, Ags.",
    horario: "4:00 PM - Cierre",
    telefono: "No disponible",
    precio_persona: "$1 - $100 MXN",
    reviews: []
  },
  {
    id: 9,
    title: "Taquería El Popular",
    desc: "Popular por su sabor.",
    img: "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?auto=format&fit=crop&w=800&q=80",
    text: "Ubicados sobre el Blvd. Rodolfo Landeros. Una parada obligatoria a la hora de la comida.",
    extra: "Zona Centro",
    direccion: "Blvd. Rodolfo Landeros Gallegos 155, Zona Centro, 20800 Calvillo, Ags.",
    horario: "1:30 PM - Cierre",
    telefono: "495 958 9897",
    precio_persona: "$1 - $100 MXN",
    reviews: []
  },
  {
    id: 10,
    title: "Taquería Lopez",
    desc: "Sencillos y deliciosos.",
    img: "https://images.unsplash.com/photo-1505714130721-542975eb3c2c?auto=format&fit=crop&w=800&q=80",
    text: "En la calle Ignacio Allende. Ambiente familiar y servicio amable.",
    extra: "Zona Centro",
    direccion: "Calle Ignacio Allende, Zona Centro, 20809 Calvillo, Ags.",
    horario: "Abre temprano - 9:30 PM",
    telefono: "495 956 3271",
    precio_persona: "$1 - $100 MXN",
    reviews: []
  }
],

      // --- CATEGORÍA: HOTELES (Lista) ---
     // DENTRO DE data.service.ts
hoteles: [
  {
    id: 1,
    title: "Hotel Doña Manuela",
    desc: "Boutique en el corazón del pueblo.",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/0f/59/3a/8a/fachada.jpg",
    text: "Habitaciones coloniales con todas las comodidades modernas. Un lugar con historia y encanto.",
    extra: "Zona Centro",
    direccion: "Portal Poniente 108, Zona Centro, Calvillo.",
    horario: "Recepción 24 Horas",
    telefono: "495 956 0161",
    precio_persona: "$800 - $1,200 MXN / Noche",
    reviews: []
  },
  {
    id: 2,
    title: "Cabañas Sierra Escondida",
    desc: "Naturaleza y desconexión total.",
    img: "https://images.unsplash.com/photo-1449156493391-d2cfa28e468b?auto=format&fit=crop&w=800&q=80",
    text: "Escápate a la sierra fría de Calvillo. Ideal para fogatas y ver las estrellas.",
    extra: "Sierra del Laurel (A 20 min)",
    direccion: "Carr. a La Panadera Km 5, Calvillo.",
    horario: "Check-in: 3:00 PM",
    telefono: "495 123 4567", // Número genérico si no lo tienes
    precio_persona: "$1,500 - $2,000 MXN / Cabaña",
    reviews: []
  },
  {
    id: 3,
    title: "Hotel Doña Chela",
    desc: "Comodidad y cercanía.",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    text: "Ubicado en la avenida principal. Acceso rápido a todos los puntos turísticos del centro.",
    extra: "Zona Centro",
    direccion: "Av. B. Juárez 110, Zona Centro, 20800 Calvillo, Ags.",
    horario: "Recepción 24 Horas",
    telefono: "495 956 0036",
    precio_persona: "$500 - $800 MXN / Noche",
    reviews: []
  },
  {
    id: 4,
    title: "Hotel Gloria Calvillo",
    desc: "Tranquilidad en Valle de Santiago.",
    img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
    text: "Un espacio tranquilo un poco más alejado del bullicio del centro, ideal para descansar.",
    extra: "Valle de Santiago",
    direccion: "Blvd. Rodolfo Landeros Gallegos 658, Valle de Santiago, 20804 Calvillo, Ags.",
    horario: "Recepción 24 Horas",
    telefono: "495 956 0191",
    precio_persona: "$600 - $900 MXN / Noche",
    reviews: []
  },
  {
    id: 5,
    title: "Casa De Los Ríos Hospedaje",
    desc: "Siéntete como en casa.",
    img: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80",
    text: "Hospedaje acogedor con un toque hogareño. Excelente atención personalizada.",
    extra: "Zona Centro",
    direccion: "Priv. Artículo 115 Const. 808, Zona Centro, 20800 Calvillo, Ags.",
    horario: "Consultar disponibilidad",
    telefono: "495 117 2727",
    precio_persona: "$400 - $700 MXN / Noche",
    reviews: []
  },
  {
    id: 6,
    title: "Hotel Boutique Casa Bugambilias",
    desc: "Estilo y confort en el Malecón.",
    img: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80",
    text: "Disfruta de una estancia elegante cerca del Malecón. Decoración única y ambiente relajado.",
    extra: "Malecón Norte",
    direccion: "Malecón Nte., López Mateos, 20802 Calvillo, Ags.",
    horario: "Recepción 24 Horas",
    telefono: "495 956 0095",
    precio_persona: "$900 - $1,400 MXN / Noche",
    reviews: []
  },
  {
    id: 7,
    title: "Hotel Valle de Huejucar",
    desc: "Tradición hotelera.",
    img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80",
    text: "Situado en la zona central, perfecto para viajeros que buscan practicidad.",
    extra: "Zona Centro",
    direccion: "Zona central, Av. Principal, Zona Centro, 20803 Calvillo, Ags.",
    horario: "Recepción 24 Horas",
    telefono: "495 956 7069",
    precio_persona: "$500 - $800 MXN / Noche",
    reviews: []
  },
  {
    id: 8,
    title: "Hotel Cascada el Garruño",
    desc: "Cerca de la naturaleza.",
    img: "https://images.unsplash.com/photo-1590490360182-f33db079502d?auto=format&fit=crop&w=800&q=80",
    text: "Una opción excelente para conectar con los alrededores naturales de Calvillo.",
    extra: "Zona Centro",
    direccion: "C. Teran 112, Zona Centro, 20800 Calvillo, Ags.",
    horario: "Consultar horario",
    telefono: "495 133 9631",
    precio_persona: "$600 - $1,000 MXN / Noche",
    reviews: []
  }
],
 restaurantes: [
  {
    id: 1,
    title: "Restaurant Camino Viejo",
    desc: "Vista espectacular a la Presa.",
    img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    text: "Disfruta de mariscos y cortes con una vista inigualable a la Presa de Malpaso. El ambiente es relajado y familiar.",
    extra: "Presa de Malpaso",
    direccion: "Presa de Malpaso, 20834 Calvillo, Ags.",
    horario: "12:00 PM - Cierre",
    telefono: "495 121 4060",
    precio_persona: "$200 - $300 MXN",
    reviews: []
  },
  {
    id: 2,
    title: "Rosa Mexicano Cocina",
    desc: "Cocina de autor en el Malecón.",
    img: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&w=800&q=80",
    text: "Ubicado en el Malecón del Río. Un lugar chic con platillos mexicanos contemporáneos y excelente coctelería.",
    extra: "Malecón Norte",
    direccion: "Malecón Nte., López Mateos, 20802 Calvillo, Ags.",
    horario: "Abre temprano - 9:00 PM",
    telefono: "495 956 0095",
    precio_persona: "$150 - $250 MXN",
    reviews: []
  },
  {
    id: 3,
    title: "Las Trancas Restaurant Bar",
    desc: "Cortes y ambiente campestre.",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    text: "Ideal para disfrutar de buenos cortes de carne. Un lugar amplio, perfecto para ir en familia o con amigos.",
    extra: "La Panadera",
    direccion: "Blvd. Rodolfo Landeros Km 47 760 La Panadera, 20803 Calvillo, Ags.",
    horario: "Hasta las 7:30 PM",
    telefono: "495 956 1417",
    precio_persona: "$200 - $300 MXN",
    reviews: []
  },
  {
    id: 4,
    title: "Jose's Restaurante",
    desc: "Sazón casero y abundante.",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
    text: "Comida deliciosa con un toque muy casero. Porciones generosas y precios accesibles.",
    extra: "Col. Ejidal",
    direccion: "C. 20 de Noviembre 306 A, Ejidal, 20800 Calvillo, Ags.",
    horario: "12:00 PM - Cierre",
    telefono: "495 121 7700",
    precio_persona: "$100 - $200 MXN",
    reviews: []
  }
      ],
cabanas: [
  {
          id: 1,
          title: "Cabaña La Mezquitera",
          desc: "Rusticidad en Las Tinajas.",
          img: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=800&q=80",
          text: "Un espacio tranquilo alejado del ruido, ubicado en la comunidad de Las Tinajas. Perfecto para fines de semana familiares.",
          extra: "Las Tinajas",
          direccion: "20862 Las Tinajas, Ags.",
          horario: "Consultar disponibilidad",
          telefono: "449 349 6476",
          precio_persona: "Consultar precio",
          reviews: []
        },
        {
          id: 2,
          title: "Rancho La Calixtina",
          desc: "Ecoturismo y aventura.",
          img: "https://images.unsplash.com/photo-1535961652354-923cb08225a7?auto=format&fit=crop&w=800&q=80",
          text: "Mucho más que cabañas. Disfruta de actividades al aire libre en un entorno ecológico impresionante.",
          extra: "La Calixtina",
          direccion: "Carretera Aguascalientes Jalpa km 60 La Calixtina, 20850 Calvillo, Ags.",
          horario: "Abre a las 9:30 AM",
          telefono: "449 123 0440",
          precio_persona: "$1,200 - $2,500 MXN / Noche",
          reviews: []
        },
        {
          id: 3,
          title: "Cabañas Las Chaveñas",
          desc: "A pie de carretera.",
          img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80",
          text: "Fácil acceso sobre la carretera Jalpa-Calvillo. Ideales para descansar después de un viaje largo.",
          extra: "Carretera Jalpa-Calvillo",
          direccion: "Jalpa - Calvillo km 54, 20800 Calvillo, Ags.",
          horario: "Recepción 24 Horas",
          telefono: "495 101 8914",
          precio_persona: "$800 - $1,500 MXN / Noche",
          reviews: []
        },
        {
          id: 4,
          title: "Cabañas Don Chava",
          desc: "Tranquilidad en El Sauz.",
          img: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80",
          text: "Ubicadas en El Sauz de los Vallín. Cuentan con áreas verdes y asadores para una carne asada perfecta.",
          extra: "El Sauz",
          direccion: "Carretera al Maguey 201, 20832 El Sauz, Ags.",
          horario: "Abierto las 24 horas",
          telefono: "495 126 5950",
          precio_persona: "Consultar precio",
          reviews: []
        },
        {
          id: 5,
          title: "Cabañas Vista del Cielo",
          desc: "Tocando las nubes.",
          img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
          text: "Como su nombre lo indica, ofrecen una vista panorámica espectacular de la región. Clima fresco y agradable.",
          extra: "Chaviñal",
          direccion: "Carretera Chaviñal 108, 20970 Ags.",
          horario: "Consultar disponibilidad",
          telefono: "449 141 2432",
          precio_persona: "$1,500 - $2,200 MXN / Noche",
          reviews: []
        },
        {
          id: 6,
          title: "Cabañas Sierra Escondida",
          desc: "En el corazón de la Sierra.",
          img: "https://images.unsplash.com/photo-1449156493391-d2cfa28e468b?auto=format&fit=crop&w=800&q=80",
          text: "Sumérgete en la Sierra del Laurel. Experiencia 100% natural, ideal para senderismo y desconexión.",
          extra: "Sierra del Laurel",
          direccion: "Ciénega de Quijas, Sierra del Laurel, 20800 Calvillo, Ags.",
          horario: "Cierra a las 7:00 PM",
          telefono: "449 467 5343",
          precio_persona: "$1,800 - $3,000 MXN / Noche",
          reviews: []
        },
        {
          id: 7,
          title: "Cabaña Rancho Bonito",
          desc: "Bonito y acogedor.",
          img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
          text: "Ubicada en Los Halcones. Un rancho privado para disfrutar con total privacidad y comodidad.",
          extra: "Los Halcones",
          direccion: "20805, Los Halcones, 20805 Calvillo, Ags.",
          horario: "Consultar disponibilidad",
          telefono: "495 105 3351",
          precio_persona: "Consultar precio",
          reviews: []
        },
        {
          id: 8,
          title: "Cabañas Un Rinconcito En El Cielo",
          desc: "Tu escape perfecto.",
          img: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=800&q=80",
          text: "Espacio diseñado para parejas y familias pequeñas que buscan un descanso reparador.",
          extra: "Calvillo",
          direccion: "20874 Calvillo, Ags.",
          horario: "Abierto las 24 horas",
          telefono: "495 106 0912",
          precio_persona: "Consultar precio",
          reviews: []
        },
        {
          id: 9,
          title: "Casas de Campo Las Ciénegas",
          desc: "Campo y confort.",
          img: "https://images.unsplash.com/photo-1504624720567-64a41aa2565f?auto=format&fit=crop&w=800&q=80",
          text: "Cerca de La Calixtina. Casas de campo amplias para grupos grandes y eventos privados.",
          extra: "La Calixtina",
          direccion: "Mártires Cristeros S/N, La Calixtina, 20850 Calvillo, Ags.",
          horario: "Consultar disponibilidad",
          telefono: "449 716 8796",
          precio_persona: "Consultar precio",
          reviews: []
        },
        {
          id: 10,
          title: "Las Norias Casa Campestre",
          desc: "Exclusividad campestre.",
          img: "https://images.unsplash.com/photo-1564078516393-cf04bd966897?auto=format&fit=crop&w=800&q=80",
          text: "Ubicada rumbo a Los Patos. Una casa campestre con alberca y jardines para disfrutar el sol de Calvillo.",
          extra: "Los Patos",
          direccion: "Carr. Calvillo - Los Patos km 82, 20800 Calvillo, Ags.",
          horario: "Consultar disponibilidad",
          telefono: "449 398 5050",
          precio_persona: "Consultar precio",
          reviews: []
        }
],
      cascadas: [
        
      ],
      dulces: [],
      
    },

    en: {
      heroTitle: "Discover Calvillo",
      // ... (Configura el inglés igual si lo necesitas)
    }
  };

  constructor() { }

  setLanguage(lang: string) { this.currentLang.next(lang); }
  getLanguage() { return this.currentLang.value; }
  getTexts() { return this.content[this.currentLang.value]; }
  
  // AHORA ESTO DEVUELVE UNA LISTA, NO UN SOLO OBJETO
  getCategoryList(key: string) {
    return this.content[this.currentLang.value][key] || [];
  }
}