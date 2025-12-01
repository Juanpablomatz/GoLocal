import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController, ToastController } from '@ionic/angular';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  credenciales = { email: '', password: '' };

  constructor(private dataService: DataService, private navCtrl: NavController, private toastCtrl: ToastController) { }

  ngOnInit() {}

  async ingresar() {
    // 1. VALIDACIÓN
    if (!this.credenciales.email || !this.credenciales.password) {
      this.mostrarAlerta('Escribe tu correo y contraseña.', 'warning');
      return;
    }

    // 2. PEDIR ACCESO A PYTHON
    this.dataService.loginUser(this.credenciales).subscribe(
      async (respuesta: any) => {
        console.log('Login:', respuesta);
        
        // 3. GUARDAR GUSTOS PARA EL TAB 3
        if (respuesta.usuario && respuesta.usuario.intereses) {
          localStorage.setItem('userInterests', JSON.stringify(respuesta.usuario.intereses));
        }

        await this.mostrarAlerta(`Bienvenido, ${respuesta.usuario.nombre}`, 'success');
        
        // 4. AHORA SÍ, AL HOME
        this.navCtrl.navigateRoot('/tabs/tab1');
      },
      (error) => {
        console.error(error);
        this.mostrarAlerta('Correo o contraseña incorrectos.', 'danger');
      }
    );
  }

  async mostrarAlerta(msg: string, color: string) {
    const toast = await this.toastCtrl.create({ message: msg, duration: 2000, color: color, position: 'bottom' });
    toast.present();
  }
}