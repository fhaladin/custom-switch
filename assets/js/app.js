const switchEl = document.getElementById('switch')
const bodyEl = document.getElementsByTagName('body')[0]

switchEl.addEventListener('click', (e) => {
  switchClassList = Array.from(switchEl.classList)

  if (!switchClassList.includes('off')) {
    switchEl.classList.add('off')
    bodyEl.classList.add('off')
  } else {
    switchEl.classList.remove('off')
    bodyEl.classList.remove('off')
  }
})
