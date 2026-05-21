import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EffectOnScrollDirective } from '../../directives/effect-on-scroll.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, EffectOnScrollDirective],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {}
