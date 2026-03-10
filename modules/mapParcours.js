// modules/mapParcours.js
export function init() {
  if (typeof gsap === 'undefined') return

  const items = document.querySelectorAll('.map-parcours_content')
  if (!items.length) return

  let activeItem = null
  let activeId = null

  // Init : tous les bottom-content à height 0
  items.forEach(item => {
    const bottom = item.querySelector('.map-parcours_bottom-content')
    if (bottom) gsap.set(bottom, { height: 0, overflow: 'hidden' })
  })

  function close(item, id) {
    const icon = item.querySelector('.map-parcours_plus-icon-wrapper')
    const bottom = item.querySelector('.map-parcours_bottom-content')
    const parcours = document.querySelector(`[data-parcours-parcours="${id}"]`)

    if (icon) icon.classList.remove('is-open')
    if (bottom) gsap.to(bottom, { height: 0, duration: 0.4, ease: 'power2.inOut' })
    if (parcours) gsap.to(parcours, { opacity: 0.3, duration: 0.3, ease: 'power2.out' })
  }

  function open(item, id) {
    const icon = item.querySelector('.map-parcours_plus-icon-wrapper')
    const bottom = item.querySelector('.map-parcours_bottom-content')
    const parcours = document.querySelector(`[data-parcours-parcours="${id}"]`)

    if (icon) icon.classList.add('is-open')
    if (bottom) gsap.to(bottom, { height: 'auto', duration: 0.4, ease: 'power2.inOut' })
    if (parcours) gsap.to(parcours, { opacity: 1, duration: 0.3, ease: 'power2.out' })
  }

  items.forEach(item => {
    const id = item.dataset.parcoursDropdown

    item.addEventListener('click', () => {
      if (activeItem === item) {
        close(item, id)
        activeItem = null
        activeId = null
      } else {
        if (activeItem) close(activeItem, activeId)
        open(item, id)
        activeItem = item
        activeId = id
      }
    })
  })
}
