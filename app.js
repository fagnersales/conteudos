document.querySelectorAll('li>span')
  .forEach(forEachContentButton)

function forEachContentButton(button) {
  button.addEventListener('click', toggleHiddenContentDiv)

  function toggleHiddenContentDiv(event) {
    const target = event.target

    const lastChild = target.parentNode.querySelector('div.content')
    const isHidden = lastChild.hasAttribute('hidden')

    const hidAllDivs = divContent => {
      if (!divContent.hasAttribute('hidden')) divContent.setAttribute('hidden', null)
    }

    document.querySelectorAll('div.content').forEach(hidAllDivs)

    lastChild[isHidden ? 'removeAttribute' : 'setAttribute']('hidden', null)
  }
} 
