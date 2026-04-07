import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ProjectCard } from './project-card';

@Component({
  standalone: true,
  imports: [ProjectCard],
  template: `
    <app-project-card
      title="Supplets"
      description="Eine Sensor-Plattform für IOT."
      image="supplets.png"
      imageAlt="Supplets Bild"
    />
  `
})
class TestHostComponent {}

describe('ProjectCard', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('app-project-card')).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Supplets');
  });

  it('should render description', () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Eine Sensor-Plattform für IOT.');
  });

  it('should render image with correct src', () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    const img = fixture.nativeElement.querySelector('img') as HTMLImageElement;
    expect(img.src).toContain('supplets.png');
  });

  it('should render image with correct alt text', () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    const img = fixture.nativeElement.querySelector('img') as HTMLImageElement;
    expect(img.alt).toBe('Supplets Bild');
  });
});
