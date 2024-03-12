import { Component } from '@angular/core';

@Component({
  selector: 'app-aether',
  standalone: true,
  imports: [],
  templateUrl: './aether.component.html',
  styleUrl: './aether.component.css'
})
export class AetherComponent {
llamada: string = 'Mensaje desde otro componente';
}
