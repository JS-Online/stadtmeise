import { TestBed } from '@angular/core/testing';
import { Resume } from './resume';

describe('Resume', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Resume]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(Resume);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should load experience data', () => {
    const fixture = TestBed.createComponent(Resume);
    expect(fixture.componentInstance.experience.length).toBeGreaterThan(0);
  });

  it('should load education data', () => {
    const fixture = TestBed.createComponent(Resume);
    expect(fixture.componentInstance.education.length).toBeGreaterThan(0);
  });

  it('should load skill groups', () => {
    const fixture = TestBed.createComponent(Resume);
    expect(fixture.componentInstance.skillGroups.length).toBeGreaterThan(0);
  });

  it('should render experience section heading', () => {
    const fixture = TestBed.createComponent(Resume);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Experience');
  });

  it('should render education section heading', () => {
    const fixture = TestBed.createComponent(Resume);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Education');
  });

  it('should render resume cards for all experience entries', () => {
    const fixture = TestBed.createComponent(Resume);
    fixture.detectChanges();
    const cards = fixture.nativeElement.querySelectorAll('app-resume-card');
    const totalEntries = fixture.componentInstance.experience.length + fixture.componentInstance.education.length;
    expect(cards.length).toBe(totalEntries);
  });
});
