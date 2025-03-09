import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
  standalone: false,
})
export class QrPage implements OnInit {
  scannedResult: string = '';
  isScanning: boolean = false; // Para controlar el estado del escaneo

  constructor() {}

  ngOnInit() {}

  async checkPermission(): Promise<boolean> {
    const status = await BarcodeScanner.checkPermission({ force: true });
    if (!status.granted) {
      console.error('Permiso denegado para usar la cámara');
      return false;
    }
    return true;
  }

  async startScan() {
    const hasPermission = await this.checkPermission();
    if (!hasPermission) return;

    this.isScanning = true;
    BarcodeScanner.hideBackground(); // Oculta la vista previa

    try {
      const result = await BarcodeScanner.startScan();
      BarcodeScanner.showBackground(); // Muestra la vista previa nuevamente
      this.isScanning = false;

      if (result.hasContent) {
        this.scannedResult = result.content;
        console.log('Código escaneado:', this.scannedResult);
      } else {
        console.warn('No se detectó ningún código');
      }
    } catch (error) {
      console.error('Error al escanear:', error);
      this.isScanning = false;
    }
  }

  async stopScan() {
    await BarcodeScanner.stopScan();
    BarcodeScanner.showBackground();
    this.isScanning = false;
  }
}
