import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms'; // Importa lo necesario
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-catalogo-productos',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, NavbarComponent], // Agrega ReactiveFormsModule aquí
  templateUrl: './catalogo-productos.component.html',
  styleUrls: ['./catalogo-productos.component.css']
})
export class CatalogoProductosComponent {
  showAddProductForm = false; // Controla la visibilidad del formulario
  productForm: FormGroup;
  
  productos = [
    { nombre: 'Sesiones de fotografía personalizada', imagen: 'assets/img/imagen1.jpg', caracteristicas: '¡Captura momentos especiales con una sesión de fotografía personalizada! Nuestros fotógrafos profesionales trabajarán contigo para crear imágenes únicas y emotivas que reflejen tu personalidad y estilo.', mostrarDetalles: false },
    { nombre: 'Impresiones de fotos', imagen: 'assets/img/imagen2.jpg', caracteristicas: '¡Imprime tus fotos favoritas en alta calidad! Ofrecemos impresiones en diferentes tamaños y materiales, como papel fotográfico, canvas, madera, etc. Perfecto para decorar tu hogar o regalar a seres queridos.', mostrarDetalles: false },
    { nombre: 'Fotografía comercial', imagen: 'assets/img/imagen3.jpg', caracteristicas: '¿Necesitas imágenes profesionales para tu negocio? Nuestra fotografía comercial te ayudará a crear un impacto visual fuerte y atractivo para tus campañas publicitarias, sitios web y redes sociales.', mostrarDetalles: false },
    { nombre: 'Cursos de Fotografía', imagen: 'assets/img/imagen4.jpg', caracteristicas: '¡Aprende a tomar fotos como un profesional! Nuestros cursos y talleres de fotografía te enseñarán técnicas y habilidades para mejorar tus habilidades fotográficas, desde principiante hasta avanzado.', mostrarDetalles: false },
    { nombre: 'Rentas de equipo fotográfico', imagen: 'assets/img/imagen5.jpg', caracteristicas: '¿Necesitas equipo fotográfico profesional para un evento o proyecto especial? Alquila nuestro equipo de alta calidad y haz que tus proyectos sean un éxito.', mostrarDetalles: false },
    { nombre: 'Edición y retoque de fotos', imagen: 'assets/img/imagen7.jpg', caracteristicas: '¡Haz que tus fotos sean perfectas! Nuestros servicios de edición y retoque de fotos mejorarán la calidad y apariencia de tus imágenes, eliminando imperfecciones y agregando un toque profesional.', mostrarDetalles: false },
    { nombre: 'Fotografía aérea con drones', imagen: 'assets/img/imagen6.jpg', caracteristicas: '¡Captura vistas únicas desde el aire! Nuestra fotografía aérea con drones te ofrece perspectivas emocionantes e inigualables para proyectos comerciales, eventos especiales o simplemente por diversión.', mostrarDetalles: false },
    { nombre: 'Sesión de foto en estudio', imagen: 'assets/img/imagen9.jpg', caracteristicas: '¡Disfruta de una sesión de foto en un entorno controlado! Nuestro estudio está equipado con luces profesionales e fondos variados para crear imágenes impactantes y emocionales.', mostrarDetalles: false },
    { nombre: 'Libros foto-personalizados', imagen: 'assets/img/imagen10.jpg', caracteristicas: '¡Crea un libro único con tus fotos favoritas! Nuestros libros foto-personalizados son ideales para recordar momentos especiales o regalar a seres queridos.', mostrarDetalles: false },
    { nombre: 'Impresiones sobre objetos', imagen: 'assets/img/imagen11.jpg', caracteristicas: ' ¡Imprime tus fotos en objetos únicos! Ofrecemos impresiones sobre camisetas, botellas, vasos, etc., perfecto para decorar tu hogar o regalar a amigos y familiares.', mostrarDetalles: false },
    { nombre: 'Asesoramiento tecnológico-fotográfico', imagen: 'assets/img/imagen12.jpg', caracteristicas: '¿Necesitas ayuda para elegir el equipo adecuado o mejorar tus habilidades fotográficas? Nuestro asesoramiento tecnológico-fotográfico te brindará orientación experta adaptada a tus necesidades específicas.', mostrarDetalles: false },
    { nombre: 'Archivo digital/Nube privada', imagen: 'assets/img/imagen13.jpg', caracteristicas: '¡Almacena tus archivos digitales seguramente! Nuestra nube privada ofrece almacenamiento seguro protegido por contraseña acceso limitado solo autorizado.', mostrarDetalles: false }
  ];

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]+$')]],
      caracteristicas: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  toggleDetalles(producto: any) {
    producto.mostrarDetalles = !producto.mostrarDetalles;
  }

  editarProducto(producto: any) {
    alert(`Editando ${producto.nombre}`);
  }

  eliminarProducto(producto: any) {
    const index = this.productos.indexOf(producto);
    if (index > -1) {
      this.productos.splice(index, 1);
    }
    alert(`Producto ${producto.nombre} eliminado`);
  }

  agregarProducto() {
    if (this.productForm.valid) {
      this.productos.push({
        nombre: this.productForm.value.nombre,
        imagen: 'assets/img/default.jpg', // Imagen por defecto
        caracteristicas: this.productForm.value.caracteristicas,
        mostrarDetalles: false
      });

      this.productForm.reset();
      this.showAddProductForm = false;
    }
  }
}
