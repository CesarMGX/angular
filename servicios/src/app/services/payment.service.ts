import { Injectable } from '@angular/core';
import { loadScript } from '@paypal/paypal-js';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private paypalLoaded = false;

  async loadPaypal(clientId: string) {
    if (!this.paypalLoaded) {
      await loadScript({ "clientId": clientId});
      this.paypalLoaded = true;
    }
  }

  constructor() { }
}
