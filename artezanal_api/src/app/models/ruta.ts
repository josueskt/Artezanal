export interface ruta_model {

    id_ruta:number,
    fk_lugar_encuentro:number,
    precio:number,
    nombre:string,
    duracion:number,
    inf_adi:string
}
export interface sitios{
  id_siitos:number,
  latitude:number,
  longitude:number,
  nombre:string,
  information:string,
  logo:string,

}

