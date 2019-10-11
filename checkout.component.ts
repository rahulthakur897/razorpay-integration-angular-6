import { WindowRef } from 'windowRef.service';

@Component({
  providers: [WindowRef]
})

export class CheckoutComponent implements OnInit {

  constructor(private winRef: WindowRef) {
  }

  ngOnInit() {
  }

  payWithRazor(){ 
      let options:any = {
          "key": "rzp_live_RandomNumber",
          "amount": 100,
          "name": "Company Name",
          "description": "dummy data",
          "image": "./assets/images/logo.png",
          "modal": {
            "escape": false
          }, 
          "prefill": {
            "name": finalObj.customerDetail.name,
            "contact": finalObj.customerDetail.phone,
            "email": finalObj.customerDetail.email,
            "method": 'card',
            'card[number]': finalObj.cardDetail.cardNumber,
            'card[expiry]': finalObj.cardDetail.cardExpDate,
            'card[cvv]': finalObj.cardDetail.cardCvv
          },
          "notes": {
            "address": finalObj.addressDetail.address + ', ' + finalObj.addressDetail.landmark + ', ' + finalObj.addressDetail.city + ', ' + finalObj.addressDetail.state + '-' + finalObj.addressDetail.pincode
          },
          "theme": {
            "color": "#6fbc29"
          }
        };
        options.handler = ((response) => {
            options['payment_response_id'] = response.razorpay_payment_id;
            this.paymentService.payWithRazor({cart: finalObj, payment: options});
        });
        options.modal.ondismiss = (() => {
            this.loginService.SetLoader = false;
        });
        let rzp = new this.winRef.nativeWindow.Razorpay(options);
        rzp.open();
    }  
    
  }
  
}
