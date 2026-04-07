import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { routes } from '../../app.routes';
import { Navbar } from './navbar';

describe('Navbar', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navbar],
      providers: [provideRouter(routes)]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(Navbar);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should have isNavbarCollapsed true by default', () => {
    const fixture = TestBed.createComponent(Navbar);
    expect(fixture.componentInstance.isNavbarCollapsed).toBe(true);
  });

  it('should toggle navbar on button click', () => {
    const fixture = TestBed.createComponent(Navbar);
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('.navbar-toggler') as HTMLButtonElement;
    button.click();
    expect(fixture.componentInstance.isNavbarCollapsed).toBe(false);
  });

  it('should render brand name', () => {
    const fixture = TestBed.createComponent(Navbar);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.navbar-brand-text')?.textContent).toContain('STADTMEISE');
  });

  it('should render navigation links', () => {
    const fixture = TestBed.createComponent(Navbar);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const links = compiled.querySelectorAll('.nav-link');
    expect(links.length).toBe(4);
  });
});
