// modules/testimoniesVertical.js
import Splide from '@splidejs/splide'
import '@splidejs/splide/dist/css/splide-core.min.css'
import { log, warn } from './utils.js'

export function init() {
  log('💬 Initialisation Testimonies Vertical Slider')
  
  const sliders = document.querySelectorAll('.is-slider')
  
  if (!sliders.length) {
    log('⏭️ Aucun slider testimonies trouvé')
    return
  }
  
  sliders.forEach(slider => {
    new Splide(slider, {
      type: 'loop',
      perPage: 1,
      arrows: true,
      pagination: false,
      autoplay: false,
      drag: false,
    }).mount()
    
    log('✅ Testimonies slider vertical monté')
  })
}