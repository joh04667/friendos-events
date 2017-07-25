import { trigger, state, style, transition, animate } from '@angular/core';



// set as animations on a component decorator
// Set [@SlideDown] to either a boolean.toString() or 'expanded' and 'collapsed'
export function SlideDown(duration = 300, animateOpacity = true) {
    const opacity = animateOpacity ? '0' : '1';
    
    return trigger('SlideDown', [
        state('collapsed, false', style({
            height: '0',
            opacity: opacity,
            overflow: 'hidden'
        })),
        state('expanded, true', style({
            height: '*',
            opacity: '1',
            overflow: 'hidden'
        })),
        transition('false => true, collapsed => expanded',
            animate(duration + 'ms cubic-bezier(0.4, 0.0, 0.2, 1)')
        ),
        transition('true => false, expanded => collapsed',
            animate(duration + 'ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ]);
}