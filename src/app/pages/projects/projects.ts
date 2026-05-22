import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectCard } from '../../components/project-card/project-card';
import { EffectOnScrollDirective } from '../../directives/effect-on-scroll.directive';
import { SectionHeadingDirective } from '../../directives/section-heading.directive';
import { ProjectEntry } from '../../data/types';
import projectsData from '../../data/projects.json';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink, ProjectCard, EffectOnScrollDirective, SectionHeadingDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projects: ProjectEntry[] = projectsData;
}
