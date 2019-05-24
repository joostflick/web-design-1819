function KeyPress(e) {
  var evtobj = window.event ? event : e
  //Do action on CTRL + Z
  console.log(evtobj.keyCode)
  if (evtobj.keyCode == 72 && evtobj.ctrlKey) {
    console.log('Ctrl + H Pressed')
    window.location.href = '#head'
  }
  if (evtobj.keyCode == 77 && evtobj.ctrlKey) {
    console.log('Ctrl + M Pressed')
    window.location.href = '#menu'
  }
  if (evtobj.keyCode == 67 && evtobj.ctrlKey) {
    console.log('Ctrl + C Pressed')
    window.location.href = '#contentNav'
  }
  if (evtobj.keyCode == 84 && evtobj.ctrlKey) {
    console.log('Ctrl + T Pressed')
    window.location.href = '#text'
  }
}
document.onkeydown = KeyPress

// var focused = document.activeElement
// if (!focused || focused == document.body) focused = null
// else if (document.querySelector) focused = document.querySelector(':focus')
// setInterval(console.log(focused), 300)
