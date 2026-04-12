import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-resume-card',
  standalone: true,
  templateUrl: './resume-card.html',
  styleUrl: './resume-card.css'
})
export class ResumeCard {
  period = input.required<string>();
  accentColor = input<'primary' | 'secondary'>('primary');
  headline = input.required<string>();
  subline = input<string>('');
  location = input.required<string>();
  description = input.required<string>();
  badge1 = input<string>('');
  badge2 = input<string>('');
  tags = input<string[]>([]);
}
