import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { routes } from '../../app.routes';
import { Projects } from './projects';

describe('Projects', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projects],
      providers: [provideRouter(routes)]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(Projects);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should load projects data', () => {
    const fixture = TestBed.createComponent(Projects);
    expect(fixture.componentInstance.projects.length).toBeGreaterThan(0);
  });

  it('should render project cards', () => {
    const fixture = TestBed.createComponent(Projects);
    fixture.detectChanges();
    const cards = fixture.nativeElement.querySelectorAll('app-project-card');
    expect(cards.length).toBe(fixture.componentInstance.projects.length);
  });

  it('should render page heading', () => {
    const fixture = TestBed.createComponent(Projects);
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Projects');
  });

  it('should render call-to-action contact link', () => {
    const fixture = TestBed.createComponent(Projects);
    fixture.detectChanges();
    const links = Array.from(fixture.nativeElement.querySelectorAll('a') as NodeListOf<HTMLAnchorElement>);
    expect(links.some(a => a.textContent?.includes('Contact me'))).toBe(true);
  });
});
