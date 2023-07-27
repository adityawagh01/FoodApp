import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  cartQuantity=0;
  user!:User;

  constructor(cartService: CartService,private userServivce: UserService){
    cartService.getCartObservable().subscribe((newCart)=>{
      this.cartQuantity=newCart.totalCount;
    })

    userServivce.userObservable.subscribe((newUser)=>{
      this.user=newUser;
    })
  }

  logout(){
    this.userServivce.logout();
  }

  get isAuth(){
    return this.user.token;
  }
}
