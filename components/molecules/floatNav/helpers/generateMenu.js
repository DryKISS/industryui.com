/**
 * Components - Molecules - Float Navbar - Helper - generateMenu
 */

const generateMenu = (container, menu, arrowDown) => {
  if (!menu || !menu.length) return
  const ul = document.createElement('ul')
  ul.className = 'mainUl'
  let counter = -1
  for (const { title, submenus, href, main } of menu) {
    counter += 1
    const li = document.createElement('li')
    li.textContent = title
    li.className = main ? 'leaf main' : 'leaf'
    li.style.left = `${counter * 11}%`

    if (href !== '#') {
      const a = document.createElement('a')
      a.href = href
      li.textContent = ''
      li.appendChild(a)
      a.textContent = title
    }

    if (submenus) {
      li.className = li.className + ' submenu'

      generateMenu(li, submenus, true)

      li.addEventListener('click', (e) => {
        if (e.target !== e.currentTarget) return
        for (let i = 0; i < e.target.children.length; i++) {
          if (e.currentTarget.className.lastIndexOf('main') !== -1) {
            // remove all main true
            const mainChild = document.querySelector('.mainMenu').children[2]
            console.log('mainChild :>> ', mainChild)
            for (let item = 0; item < mainChild.children.length; item++) {
              mainChild.children[item].children[0].classList.remove('expand')
              mainChild.children[item].classList.remove('active')
            }
          }

          e.target.children[i].classList.toggle('expand')
          li.classList.toggle('active')
        }
      })
    }
    ul.appendChild(li)
  }
  container.appendChild(ul)
}

export default generateMenu
