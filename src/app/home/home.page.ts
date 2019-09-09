import { Component } from '@angular/core';
import { CepService } from '../services/cep.service';
import { ToastController } from '@ionic/angular';
import { AlertaService } from '../services/alerta.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  termo: string;
  resultado: any;
  constructor(private cepService: CepService, private alert: AlertaService) {}

  public async buscarCep() {
    const loader = await this.alert.loading({ message: 'buscando o cep...' });
    this.resultado = null;
    this.cepService.consultaCep(this.termo).subscribe(
      resposta => {
        loader.dismiss();
        this.resultado = resposta;
      },
      error => {
        loader.dismiss();
        this.alert.toast({ message: error.message });
      }
    );
  }
}
