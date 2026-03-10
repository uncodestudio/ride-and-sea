// modules/loadingBar.js
export function init() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return

  gsap.registerPlugin(ScrollTrigger)

  document.querySelectorAll('.loading-bar_wrapper').forEach(wrapper => {
    const bar = wrapper.querySelector('.loading-bar_full')
    if (!bar) return

    gsap.set(bar, { scaleY: 0, transformOrigin: 'top center' })
    gsap.to(bar, {
      scaleY: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: wrapper,
        start: 'top 75%',
        end: 'top 50%',
        scrub: true,
        markers: false,
      }
    })
  })
}
