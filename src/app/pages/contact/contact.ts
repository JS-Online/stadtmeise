import { Component } from '@angular/core';
import { FadeInOnScrollDirective } from '../../directives/fade-in-on-scroll.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FadeInOnScrollDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {}

