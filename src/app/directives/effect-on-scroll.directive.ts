import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appEffectOnScroll]'
})
export class EffectOnScrollDirective implements OnInit, OnDestroy {
  @Input() delay = 0;
  @Input() direction: 'up' | 'down' | 'left' | 'right' = 'up';
  @Input() duration = 300;
  @Input() threshold = 0.1;
  @Input() effect: 'fade' | 'bounce' | 'zoom' = 'fade';

  private observer: IntersectionObserver | null = null;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.setupObserver();
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  private applyEffectClasses(el: HTMLElement) {
    el.classList.add(`animate-from-${this.direction}`);
    if (this.effect === 'fade') {
      el.classList.add('animate-fade-in');
      el.style.transition = `opacity ${this.duration}ms ease-out, transform ${this.duration}ms ease-out`;
    } else if (this.effect === 'bounce') {
      el.classList.add('animate-bounce');
      el.style.transition = '';
    } else if (this.effect === 'zoom') {
      el.classList.add('animate-zoom');
      el.style.transition = '';
    }
  }

  private setupObserver() {
    if (typeof IntersectionObserver === 'undefined') {
      setTimeout(() => {
        this.applyEffectClasses(this.el.nativeElement);
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
            this.applyEffectClasses(this.el.nativeElement);
          }, this.delay);
          this.observer?.unobserve(entry.target);
        }
      });
    }, options);

    this.observer.observe(this.el.nativeElement);
  }
}
