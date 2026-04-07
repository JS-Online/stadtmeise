import { TestBed } from '@angular/core/testing';
import { Contact } from './contact';

describe('Contact', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contact]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(Contact);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render heading', () => {
    const fixture = TestBed.createComponent(Contact);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('h1')?.textContent).toContain('Get in touch');
  });

  it('should render mailto link', () => {
    const fixture = TestBed.createComponent(Contact);
    fixture.detectChanges();
    const link = fixture.nativeElement.querySelector('a[href^="mailto:"]') as HTMLAnchorElement;
    expect(link).toBeTruthy();
    expect(link.href).toBe('mailto:js@stadtmeise.de');
  });

  it('should render email address in button', () => {
    const fixture = TestBed.createComponent(Contact);
    fixture.detectChanges();
    const link = fixture.nativeElement.querySelector('a[href^="mailto:"]') as HTMLAnchorElement;
    expect(link.textContent).toContain('js@stadtmeise.de');
  });
});
