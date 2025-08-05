let obj = null

function docQuSel() {
  return obj
}

function dblclk() {
  obj = {}
}

function ff() {
  console.log('>', docQuSel())
}

setTimeout(() => {
  dblclk()
}, 1000)

ff()

// console.log()
// docQuSel()
// ff()
// CALLSTACK
