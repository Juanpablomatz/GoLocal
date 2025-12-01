import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController, ToastController } from '@ionic/angular';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RegisterPage implements OnInit {

  usuario = { nombre: '', apellidos: '', edad: null, telefono: '', email: '', password: '', confirmPassword: '' };
  
  // LISTA DE INTERESES AMPLIADA
  intereses = [
    { nombre: 'Gastronomía 🌮', seleccionado: false, key: 'comida' },
    { nombre: 'Naturaleza 🌲', seleccionado: false, key: 'naturaleza' },
    { nombre: 'Cascadas y Agua 🌊', seleccionado: false, key: 'agua' }, // Coincide con albercas y presas
    { nombre: 'Historia y Cultura 📜', seleccionado: false, key: 'historia' }, // Coincide con museo e iglesia
    { nombre: 'Aventura 🧗', seleccionado: false, key: 'aventura' },
    { nombre: 'Descanso / Hoteles 🏨', seleccionado: false, key: 'descanso' }, // Coincide con hoteles y cabañas
    { nombre: 'Dulces Típicos 🍬', seleccionado: false, key: 'dulces' },
    { nombre: 'Vida Nocturna 🍻', seleccionado: false, key: 'noche' },
    { nombre: 'Artesanías 🎨', seleccionado: false, key: 'cultura' } // Coincide con museo
  ];
  constructor(private dataService: DataService, private navCtrl: NavController, private toastCtrl: ToastController) { }

  ngOnInit() {}

  toggleInteres(index: number) {
    this.intereses[index].seleccionado = !this.intereses[index].seleccionado;
  }

  async registrar() {
    // 1. VALIDACIÓN: Si faltan datos, NO PASA.
    if (!this.usuario.nombre || !this.usuario.email || !this.usuario.password) {
      this.mostrarAlerta('Por favor llena todos los campos obligatorios.', 'warning');
      return; 
    }
    if (this.usuario.password !== this.usuario.confirmPassword) {
      this.mostrarAlerta('Las contraseñas no coinciden.', 'danger');
      return; 
    }

    const misGustos = this.intereses.filter(i => i.seleccionado).map(i => i.key);
    if (misGustos.length === 0) {
      this.mostrarAlerta('Selecciona al menos un interés.', 'warning');
      return;
    }

    const nuevoUsuario = { ...this.usuario, intereses: misGustos };

    // 2. ENVIAR A LA BASE DE DATOS
    this.dataService.registerUser(nuevoUsuario).subscribe(
      async (respuesta) => {
        console.log('Registrado:', respuesta);
        await this.mostrarAlerta('¡Registro exitoso! Ahora inicia sesión.', 'success');
        
        // 3. REDIRECCIÓN AL LOGIN (Como pediste)
        this.navCtrl.navigateRoot('/login');
      },
      (error) => {
        console.error(error);
        this.mostrarAlerta('Error al registrar. Revisa que el servidor Python esté prendido.', 'danger');
      }
    );
  }

  async mostrarAlerta(msg: string, color: string) {
    const toast = await this.toastCtrl.create({ message: msg, duration: 2000, color: color, position: 'bottom' });
    toast.present();
  }
}