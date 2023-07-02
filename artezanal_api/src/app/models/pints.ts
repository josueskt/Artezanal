export interface Pints {
  id_sitios : number;
  nombre: string;

    latitude: number;
    longitud: number;
    informacion:string;
    logo:string;
}
export interface ruta{
  ruta:any;
  result:Pints[]
}
