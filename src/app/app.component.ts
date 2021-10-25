import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ANGULAR';
  public mostrar_videojuegos : boolean = true;

  ocultarVideojuegos(value){
    this.mostrar_videojuegos= value;
  }
}
