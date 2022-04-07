/**
 * Components - Molecules - Float Navbar - Helper - generateMenu
 */
import React from 'react'

const handleMenuClick = (e) => {
  if (e.target !== e.currentTarget) return
  for (let i = 0; i < e.target.children.length; i++) {
    if (e.currentTarget.className.lastIndexOf('main') !== -1) {
      // remove all main true
      const mainChild = document.querySelector('.mainMenu').children[2]
      for (let item = 0; item < mainChild.children.length; item++) {
        mainChild.children[item].children[0].classList.remove('expand')
        mainChild.children[item].classList.remove('active')
      }
    }
    e.target.children[i].classList.toggle('expand')
    li.classList.toggle('active')
  }
}
const Item = ({ title, submenus, href, main }) => {
  let className = main ? 'leaf main' : 'leaf'
  if (submenus) className += ' submenu'
  return (
    <div className={className} onClick={handleMenuClick}>
      {href ? <a href={href}>{title}</a> : title}
    </div>
  )
}

const generateMenu = (menu, arrowDown) => {
  if (!menu || !menu.length) return
  // const ul = document.createElement('ul')
  let Ul = []
  debugger
  let counter = -1
  const Lis = []
  for (const { title, submenus, href, main } of menu) {
    counter += 1
    // Generate li component
    // const li = document.createElement('li')
    const Li = React.createElement('li', { title, submenus, href, main }, <Item />)
    Lis.push(Li)
    // li.textContent = title
    // li.className = main ? 'leaf main' : 'leaf'
    // li.style.left = `${counter * 11}%`

    // if (href !== '#') {
    //   const a = document.createElement('a')
    //   a.href = href
    //   li.textContent = ''
    //   li.appendChild(a)
    //   a.textContent = title
    // }

    if (submenus) {
      // li.className = li.className + ' submenu'

      generateMenu(submenus, true)

      // li.addEventListener('click', handleMenuClick)
    }

    // ul.appendChild(li)
    Ul = React.createElement(
      'ul',
      {},
      Lis.map((i) => i)
    )
  }

  // container.appendChild(ul)
  return React.createElement('div', {}, Ul)
}

export default generateMenu
