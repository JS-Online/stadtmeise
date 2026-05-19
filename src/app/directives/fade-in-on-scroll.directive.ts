import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appFadeInOnScroll]'
})
export class FadeInOnScrollDirective implements OnInit, OnDestroy {
  @Input() delay = 0;       // Verzögerung in ms
  @Input() direction: 'up' | 'down' | 'left' | 'right' = 'up';
  @Input() duration = 300;   // Animationsdauer in ms
  @Input() threshold = 0.1;  // Wann Animation startet (0.0 - 1.0)

  private observer: IntersectionObserver | null = null;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.setupObserver();
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  private setupObserver() {
    // Fallback für Test-Umgebungen (z. B. jsdom) wo IntersectionObserver nicht verfügbar ist
    if (typeof IntersectionObserver === 'undefined') {
      // In Tests: Sofort animieren
      setTimeout(() => {
        this.el.nativeElement.classList.add('animate-fade-in');
        this.el.nativeElement.classList.add(`animate-from-${this.direction}`);
      }, this.delay);
      return;
    }

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: this.threshold
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            this.el.nativeElement.classList.add('animate-fade-in');
            this.el.nativeElement.classList.add(`animate-from-${this.direction}`);
          }, this.delay);

          // Beobachten beenden, wenn Animation einmal ausgelöst wurde
          this.observer?.unobserve(entry.target);
        }
      });
    }, options);

    this.observer.observe(this.el.nativeElement);

    // Fallback für ältere Browser (setzt Style direkt)
    this.el.nativeElement.style.transition = `opacity ${this.duration}ms ease-out, transform ${this.duration}ms ease-out`;
  }
}
