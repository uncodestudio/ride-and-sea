// main.js
import { init as initLocationMarquee } from './modules/locationMarquee.js'
import { init as initTestimoniesVertical } from './modules/testimoniesVertical.js'
import { init as initFaqAccordion } from './modules/faqAccordion.js'
import { init as initLoadingBar } from './modules/loadingBar.js'
import { init as initMapParcours } from './modules/mapParcours.js'

console.log('🚀 Initialisation du site...')

const moduleDetectors = {
  locationMarquee: {
    selector: '.marquee',
    initFn: initLocationMarquee
  },
  testimoniesVertical: {
    selector: '.is-slider',
    initFn: initTestimoniesVertical
  },
  faqAccordion: {
    selector: '.faq_accordion',
    initFn: initFaqAccordion
  },
  loadingBar: {
    selector: '.loading-bar_wrapper',
    initFn: initLoadingBar
  },
  mapParcours: {
    selector: '.map-parcours_content',
    initFn: initMapParcours
  },
}

let modulesLoaded = 0
let modulesSkipped = 0

Object.keys(moduleDetectors).forEach((moduleName) => {
  const config = moduleDetectors[moduleName]
  const elementExists = document.querySelector(config.selector)

  if (elementExists) {
    console.log(`📦 Init ${moduleName}...`)
    try {
      config.initFn()
      modulesLoaded++
    } catch (error) {
      console.error(`❌ Erreur ${moduleName}:`, error)
    }
  } else {
    console.log(`⏭️ Skip ${moduleName}`)
    modulesSkipped++
  }
})

console.log(`✅ ${modulesLoaded} module(s) chargé(s), ${modulesSkipped} skippé(s)`)
console.log('✅ Site initialisé !')
