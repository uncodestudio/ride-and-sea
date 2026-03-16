// modules/spotModal.js
import { log } from './utils.js'

export function init() {
  log('🗺️ Initialisation Spot Modal')

  const links = document.querySelectorAll('.spot_link')
  const closeButtons = document.querySelectorAll('.modal_close')

  links.forEach(link => {
    link.addEventListener('click', () => {
      const modal = link.querySelector('.spot_modal')
      if (!modal) return
      modal.style.display = 'flex'
      modal.style.alignItems = 'center'
      modal.style.justifyContent = 'center'
    })
  })

  closeButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation()
      const modal = btn.closest('.spot_modal')
      if (!modal) return
      modal.style.display = 'none'
    })
  })
}
