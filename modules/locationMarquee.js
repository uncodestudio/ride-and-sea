// Module Text Marquee - Version seamless avec modifiers
export function init() {
  if (typeof gsap === 'undefined') return

  document.querySelectorAll('.marquee').forEach(marquee => {
    const content = marquee.firstElementChild
    if (!content) return

    // Duplication pour boucle infinie (3x pour les grands écrans)
    const original = content.innerHTML
    content.innerHTML = original + original + original

    // Respect prefers-reduced-motion
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // Direction et vitesse
    const isRight = marquee.dataset.direction === 'right'
    const speed = +marquee.dataset.speed || 15

    // Force GPU
    gsap.set(content, {
      force3D: true,
      xPercent: isRight ? -33.33 : 0
    })

    if (isRight) {
      // Droite → Gauche avec wrap seamless
      const tl = gsap.to(content, {
        xPercent: 0,
        duration: speed,
        ease: 'none',
        repeat: -1,
        modifiers: {
          xPercent: gsap.utils.wrap(-33.33, 0)
        }
      })
      marquee.onmouseenter = () => tl.pause()
      marquee.onmouseleave = () => tl.play()
    } else {
      // Gauche → Droite avec wrap seamless
      const tl = gsap.to(content, {
        xPercent: -33.33,
        duration: speed,
        ease: 'none',
        repeat: -1,
        modifiers: {
          xPercent: gsap.utils.wrap(0, -33.33)
        }
      })
      marquee.onmouseenter = () => tl.pause()
      marquee.onmouseleave = () => tl.play()
    }
  })
}