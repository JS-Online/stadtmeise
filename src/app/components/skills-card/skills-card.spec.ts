import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { SkillsCard, SkillGroup } from './skills-card';

const testGroups: SkillGroup[] = [
  {
    icon: 'bi-tools',
    title: 'Professional Skills',
    skills: ['Frontend Development', 'Backend Development']
  },
  {
    icon: 'bi-code-slash',
    title: 'Languages',
    skills: ['TypeScript', 'Java']
  }
];

@Component({
  standalone: true,
  imports: [SkillsCard],
  template: `<app-skills-card [groups]="groups" />`
})
class TestHostComponent {
  groups = testGroups;
}

describe('SkillsCard', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('app-skills-card')).toBeTruthy();
  });

  it('should render group titles', () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    const text = fixture.nativeElement.textContent;
    expect(text).toContain('Professional Skills');
    expect(text).toContain('Languages');
  });

  it('should render all skills', () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    const text = fixture.nativeElement.textContent;
    expect(text).toContain('Frontend Development');
    expect(text).toContain('TypeScript');
    expect(text).toContain('Java');
  });

  it('should render correct number of skill items', () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    const skillItems = fixture.nativeElement.querySelectorAll('.bg-light.rounded-4');
    expect(skillItems.length).toBe(4);
  });
});
