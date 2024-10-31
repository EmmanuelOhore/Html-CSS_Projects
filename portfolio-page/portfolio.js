document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return
  
    let currentDropdown
    if (isDropdownButton) {
      currentDropdown = e.target.closest("[data-dropdown]")
      currentDropdown.classList.toggle("active")
    }
  
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
      if (dropdown === currentDropdown) return
      dropdown.classList.remove("active")
    })
  })

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('menu-wrapper')[0]
const dropdown= document.querySelector(".dropdown-menu ")
const plusbutton= document.querySelector(".bx")

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

plusbutton.addEventListener('click', () => {
  dropdown.classList.toggle('active')
})

