export class Zapatilla{
    /*
    public nombre: string;
    public marca: string;
    public precio : string;
    public color: string;
    public stock: string;

    constructor(nombre, marca, precio, color, stock){
        this.nombre= nombre;
        this.marca= marca;
        this.color= color;

    */

    constructor(
        public nombre: string,
        public marca: string,
        public precio: number,
        public color: string,
        public stock: boolean
    ){}
}