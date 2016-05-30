import { Component } from '@angular/core';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { HomeComponent } from './+home/home.component';
import { ProductComponent } from './+product/product.component';
import { ContactComponent } from './+contact/contact.component';

@Component({
  moduleId: module.id,
  selector: 'client-app',
  templateUrl: 'client.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/', component: HomeComponent},
  {path: '/product', component: ProductComponent},
  {path: '/contact', component: ContactComponent}
])
export class ClientAppComponent {
  title = 'Welcome to Angular2 CLI Node Project!';
}
