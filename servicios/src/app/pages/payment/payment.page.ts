import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PaymentService } from 'src/app/services/payment.service';

declare let paypal: any; // Asegura que PayPal se reconozca globalmente

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
  standalone: false,
})
export class PaymentPage implements OnInit, AfterViewInit {
  clientId = 'AWmmUxyqyz0bBYNTSUCXAC-48bVTT95gI6xvYozQNwdlnblYnkeo3MUhM0ZegHHtsks3SvyFQDKU_3Hr';

  constructor(private paymentService: PaymentService) {}

  ngOnInit() {}

  async ngAfterViewInit() {
    await this.paymentService.loadPaypal(this.clientId);
    this.setupPayPalButton();
  }

  setupPayPalButton() {
    if (typeof paypal === 'undefined') {
      console.error('PayPal no se ha cargado correctamente.');
      return;
    }

    paypal.Buttons({
      createOrder: (data: any, actions: any) => { // Especificamos 'any'
        if (!actions.order) {
          console.error('No se pudo crear la orden.');
          return;
        }
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                currency_code: 'USD', // Agregamos la moneda
                value: '10.00',
              },
            },
          ],
        });
      },
      onApprove: (data: any, actions: any) => { // Especificamos 'any'
        if (!actions.order) {
          console.error('No se pudo capturar la orden.');
          return;
        }
        return actions.order.capture().then((details: any) => { // Especificamos 'any'
          alert(`Pago exitoso: ${details.payer?.name?.given_name}`);
        });
      },
      onError: (err: any) => { // Especificamos 'any'
        console.error('Error al procesar el pago:', err);
      },
    }).render('#paypal-button-container');
  }
}
