const tl = gsap.timeline({ defaults:{ duration: 1.2, ease: 'back.out' } })
	// .to('.svg-animation path', { stagger: .1 })
	
	.to('.letter_a', {transformOrigin: 'center center', scale: 2.8, rotation: -18, xPercent: -550 }, '<7.5%')
	.to('.letter_n', {transformOrigin: 'center center', scale: 2.8, rotation: 5, xPercent: -350, yPercent: -35 }, '<7.5%')
	.to('.letter_i', {transformOrigin: 'center center', scale: 2.8, rotation: -8.5, xPercent: -670, yPercent: -120 }, '<7.5%')
	.to('.letter_m', {transformOrigin: 'center center', scale: 2.8, rotation: -14, xPercent: -32, yPercent: -53 }, '<7.5%')
	.to('.letter_a2', {transformOrigin: 'center center', scale: 2.8, rotation: 1, xPercent: 140, yPercent: -20 }, '<7.5%')
	.to('.letter_t', {transformOrigin: 'center center', scale: 2.8, rotation: 0, xPercent: 240, yPercent: -125 }, '<7.5%')
	.to('.letter_i2', {transformOrigin: 'center center', scale: 2.8, rotation: 8.5, xPercent: 700, yPercent: -70 }, '<7.5%')
	.to('.letter_o', {transformOrigin: 'center center', scale: 2.8, rotation: 25, xPercent: 420, yPercent: 2 }, '<7.5%')
	.to('.letter_n2', {transformOrigin: 'center center', scale: 2.8, rotation: 10, xPercent: 520, yPercent: 120 }, '<7.5%')
	

document.querySelector('body').addEventListener('click', () => tl.play(0))
	