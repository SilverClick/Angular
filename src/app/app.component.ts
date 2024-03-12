import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AetherComponent} from '../aether/aether.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ AetherComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Goncho';
  contador:number =0;
  ngOnInit() {
    setInterval(() => {
      this.contador++;
    }, 1000);
  }
}


