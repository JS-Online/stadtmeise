import { Component, input } from '@angular/core';

export interface SkillGroup {
  icon: string;
  title: string;
  skills: string[];
}

@Component({
  selector: 'app-skills-card',
  standalone: true,
  imports: [],
  templateUrl: './skills-card.html',
  styleUrl: './skills-card.css'
})
export class SkillsCard {
  groups = input.required<SkillGroup[]>();
}
