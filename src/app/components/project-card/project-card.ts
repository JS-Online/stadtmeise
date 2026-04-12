import { Component, input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css'
})
export class ProjectCard {
  title = input.required<string>();
  description = input.required<string>();
  image = input.required<string>();
  imageAlt = input<string>('');
  link = input<string>('');
  tags = input<string[]>([]);
}
