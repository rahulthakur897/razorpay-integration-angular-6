# angular6
# I have mention only steps related to razorpay-integration.

#Steps to integrate Razorpay Integration with angular 6 and above
1. Add script tag in the bottom of html file, present in the src folder i.e.  
  <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
  
2. Add service file to access DOM window object via angular scope. Please refer "windowRef.service.ts"

3. Import "windowRef.service.ts" in your component where you want to use razorpay checkout like
    import { WindowRef } from 'windowRef.service';

4. Initialize in construtor method of that component like
    constructor(private winRef: WindowRef)
    
5. Refer payWithRazor() for how to pass data to razorpay Api from file "checkout.component.ts".

--- Thanks ---
