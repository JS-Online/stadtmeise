import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ResumeCard } from './resume-card';

@Component({
  standalone: true,
  imports: [ResumeCard],
  template: `
    <app-resume-card
      period="2020 – Heute"
      headline="Entwickler"
      subline="DB Systel GmbH"
      location="Berlin"
      description="Testbeschreibung"
    />
  `
})
class TestHostComponent {}

@Component({
  standalone: true,
  imports: [ResumeCard],
  template: `
    <app-resume-card
      period="2015 – 2017"
      headline="Master of Engineering"
      subline="HTW Berlin"
      location="Berlin"
      description=""
      accentColor="secondary"
      badge1="Note: 1.3"
    />
  `
})
class TestHostSecondaryComponent {}

describe('ResumeCard', () => {
  it('should create with required inputs', () => {
    TestBed.configureTestingModule({ imports: [TestHostComponent] });
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('app-resume-card')).toBeTruthy();
  });

  it('should render period', () => {
    TestBed.configureTestingModule({ imports: [TestHostComponent] });
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('2020 – Heute');
  });

  it('should render headline', () => {
    TestBed.configureTestingModule({ imports: [TestHostComponent] });
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Entwickler');
  });

  it('should render subline', () => {
    TestBed.configureTestingModule({ imports: [TestHostComponent] });
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('DB Systel GmbH');
  });

  it('should render description', () => {
    TestBed.configureTestingModule({ imports: [TestHostComponent] });
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Testbeschreibung');
  });

  it('should apply text-primary class by default', () => {
    TestBed.configureTestingModule({ imports: [TestHostComponent] });
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    const period = fixture.nativeElement.querySelector('.text-primary');
    expect(period).toBeTruthy();
  });

  it('should apply text-secondary class when accentColor is secondary', () => {
    TestBed.configureTestingModule({ imports: [TestHostSecondaryComponent] });
    const fixture = TestBed.createComponent(TestHostSecondaryComponent);
    fixture.detectChanges();
    const period = fixture.nativeElement.querySelector('.text-secondary');
    expect(period).toBeTruthy();
  });

  it('should render badge1 when provided', () => {
    TestBed.configureTestingModule({ imports: [TestHostSecondaryComponent] });
    const fixture = TestBed.createComponent(TestHostSecondaryComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Note: 1.3');
  });
});
