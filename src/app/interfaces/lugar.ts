export interface Lugar {
  _id?: string;
  titulo: string;
  descripcion: string;
  categoria_principal: string;
  etiquetas: string[];
  imagen: string;
  ubicacion: {
    lat: number;
    lng: number;
    direccion: string;
  };
  rating: number;
  reseñas?: Resena[];
}

export interface Resena {
  user: string;
  stars: number;
  comment: string;
}