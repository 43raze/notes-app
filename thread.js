let i = 0

function countNumbers() {
  let x = 0
  while (i < 10) {
    i++
    console.log(i)
  }
  i = 0
}

thread(countNumbers) //A
thread(countNumbers) //B

// setTimeout

// document.querySelector

/**
 * thread A 0
 * thread A 1
 * thread A 2
 * thread B 3
 * thread A 4
 * thread A 5
 * thread A 6
 * thread A 7
 * thread B 8
 * thread A 9
 * thread B 0
 * thread B 1
 * thread B 2
 * thread B 3
 * thread B 4
 * thread B 5
 * thread B 6
 * thread B 7
 * thread B 8
 * thread B 9
 *
 */
