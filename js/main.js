const navBtn = document.querySelector('#nav-toggle')
const links = document.querySelector('#links')
const scrollLinks = document.querySelectorAll('.scroll-link')

/**
 * TOGGLE BUTTON
 */
navBtn.addEventListener('click', () => {
    links.classList.toggle('show-links')
})

/**
 * SMOOTH SCROLL
 */
scrollLinks.forEach( link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        links.classList.remove('show-links')

        const id = event.target.getAttribute('href').slice(1)
        const element = document.querySelector(`#${id}`)

        let position = element.offsetTop - 65

        window.scrollTo({
            left: 0,
            top: position,
            behavior: 'smooth'
        })
    })
})
