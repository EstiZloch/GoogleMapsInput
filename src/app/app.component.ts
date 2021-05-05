import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    //Local Variable defined
    formattedaddress=" ";
    options={
      componentRestrictions:{
        country:["IL"]
      }
    }
    title = 'rou';
      public AddressChange(address: any) {
        //setting address from API to local variable
         this.formattedaddress=address.formatted_address;
         this.formattedaddress=address.
      }
}
