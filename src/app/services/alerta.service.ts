import { Injectable } from '@angular/core';
import { ToastController, AlertController, LoadingController } from '@ionic/angular';
import { LoadingOptions, ToastOptions } from '@ionic/core';

@Injectable({
  providedIn: 'root'
})
export class AlertaService {
  constructor(
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
  ) {}

  public async loading(opcoes?: LoadingOptions): Promise<HTMLIonLoadingElement> {
    const loading = await this.loadingCtrl.create({
      message: 'carregando...',
      ...opcoes
    });
    loading.present();
    return loading;
  }

  public async toast(opcoes: ToastOptions): Promise<HTMLIonToastElement> {
    const toast = await this.toastCtrl.create({
      duration: 3000,
      showCloseButton: true,
      closeButtonText: 'X',
      ...opcoes
    });
    toast.present();
    return toast;
  }
}
