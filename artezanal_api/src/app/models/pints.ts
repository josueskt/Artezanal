export interface Pints {
  name: string;
    image?: string;
    lat: number;
    lng: number;
}
export interface ruta{
  nombre: string;
  imagen: string;
  puntos:Pints[]
}
