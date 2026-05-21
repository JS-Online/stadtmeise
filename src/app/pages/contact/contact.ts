import { Component } from '@angular/core';
import { EffectOnScrollDirective } from '../../directives/effect-on-scroll.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [EffectOnScrollDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {}

