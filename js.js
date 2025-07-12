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

dblclk()

ff()
