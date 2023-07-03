export class Usuario {
  // Propiedades y métodos de la clase
  foto: string;
  nombre: string;
  apellido: string;
  correo: string;
  password: string;

  constructor() {
    this.foto = '';
    // Inicialización de propiedades si es necesario
    this.nombre = '';
    this.apellido = '';
    this.correo = '';
    this.password = '';
  }
}
