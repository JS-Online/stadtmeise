import { Directive, ElementRef, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appSectionHeading]'
})
export class SectionHeadingDirective implements OnInit, OnDestroy {
  private observer: IntersectionObserver | null = null;
  private navbarTitleElement: HTMLElement | null = null;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.setupObserver();
    this.findOrCreateNavbarTitle();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    // Hide navbar title when directive is destroyed (route change)
    if (this.navbarTitleElement) {
      this.navbarTitleElement.classList.remove('visible');
    }
  }

  private findOrCreateNavbarTitle(): void {
    this.navbarTitleElement = document.querySelector('.navbar-section-title');
    if (!this.navbarTitleElement) {
      const navbar = document.querySelector('nav.navbar');
      if (navbar) {
        this.navbarTitleElement = document.createElement('span');
        this.navbarTitleElement.className = 'navbar-section-title';
        navbar.insertBefore(this.navbarTitleElement, navbar.firstChild);
      }
    }
  }

  private setupObserver(): void {
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    const element = this.el.nativeElement as HTMLElement;
    const headingText = element.textContent || '';

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (this.navbarTitleElement) {
            // Show in navbar when heading is NOT visible (scrolled out of view)
            // Hide when heading IS visible again
            if (entry.intersectionRatio === 0 && entry.boundingClientRect.top < 0) {
              // Heading is completely scrolled out of view (above viewport)
              this.navbarTitleElement.textContent = headingText;
              this.navbarTitleElement.classList.add('visible');
            } else if (entry.intersectionRatio > 0) {
              // Heading is visible in viewport
              if (this.navbarTitleElement.textContent === headingText) {
                this.navbarTitleElement.classList.remove('visible');
              }
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: [0, 0.01, 0.5, 1.0]
      }
    );

    this.observer.observe(element);
  }
}
