import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FadeInOnScrollDirective } from '../../directives/fade-in-on-scroll.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, FadeInOnScrollDirective],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {}
