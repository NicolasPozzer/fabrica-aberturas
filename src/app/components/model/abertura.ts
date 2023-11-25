export class Abertura {
    id?: number;
    nombre: string;
    tipo: string;
    detalles: string;
    medidas: string;
    precio: number;
    urlMiniatura: string;
    urlFoto: string;


    constructor(nombre: string, tipo: string, detalles: string, medidas: string, precio: number, urlMiniatura: string, urlFoto: string){
        this.nombre = nombre;
        this.tipo = tipo;
        this.detalles = detalles;
        this.medidas = medidas;
        this.precio = precio;
        this.urlMiniatura = urlMiniatura;
        this.urlFoto = urlFoto;
    }

}