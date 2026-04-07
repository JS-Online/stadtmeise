import { Component } from '@angular/core';
import { ResumeCard } from '../../components/resume-card/resume-card';
import { SkillsCard, SkillGroup } from '../../components/skills-card/skills-card';
import { ResumeEntry } from '../../data/types';
import experienceData from '../../data/experience.json';
import educationData from '../../data/education.json';
import skillsData from '../../data/skills.json';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [ResumeCard, SkillsCard],
  templateUrl: './resume.html',
  styleUrl: './resume.css'
})
export class Resume {
  experience: ResumeEntry[] = experienceData;
  education: ResumeEntry[] = educationData as ResumeEntry[];
  skillGroups: SkillGroup[] = skillsData;
}
