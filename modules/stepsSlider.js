// modules/stepsSlider.js
import Splide from '@splidejs/splide'
import { log } from './utils.js'

export function init() {
  log('🪜 Initialisation Steps Slider')

  const sliders = document.querySelectorAll('.splide.is-steps')

  if (!sliders.length) {
    log('⏭️ Aucun slider steps trouvé')
    return
  }

  sliders.forEach(slider => {
    new Splide(slider, {
      type: 'slide',
      perPage: 1,
      arrows: true,
      pagination: false,
      loop: false,
      drag: true,
    }).mount()

    log('✅ Steps slider monté')
  })
}
