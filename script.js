let btn = document.querySelector('#button')
let out = document.querySelector('#out')
let long = document.querySelector('#long')
let checkNums = document.querySelector('#nums')
let checkLower = document.querySelector('#lower-case')
let checkUpper = document.querySelector('#upper-case')
let checkSymb = document.querySelector('#symbols')
let plus = document.querySelector('#plus')
let minus = document.querySelector('#minus')
let copy = document.querySelector('#coppy-btn')
let passLength = document.querySelector('#pass-length')
let lowerCase = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
]
let upperCase = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
]
let symbols = ['!', '@', '#', '$', '%', '&', '?', '-', '+', '=', '~']
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

// change the info about pass length
long.oninput = function () {
  passLength.innerHTML = this.value
  func()
  slider()
}

// btn's for change pass length
plus.addEventListener('click', function changeRangePlus () {
  long.value++
  passLength.innerHTML = long.value
  func()
  slider()
})
minus.addEventListener('click', function changeRangeMinus () {
  long.value--
  passLength.innerHTML = long.value
  func()
  slider()
})

function func () {
  let resArr = []
  if (checkNums.checked) {
    resArr = resArr.concat(num)
  }
  if (checkLower.checked) {
    resArr = resArr.concat(lowerCase)
  }
  if (checkUpper.checked) {
    resArr = resArr.concat(upperCase)
  }
  if (checkSymb.checked) {
    resArr = resArr.concat(symbols)
  }
  shuffle(resArr)
  let result = ''
  for (let i = 0; i < long.value; i++) {
    result += resArr[getRandomInt(0, resArr.length)]
  }
  out.value = result
}

// shuffle the array
function shuffle (array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

function getRandomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min //Максимум не включается, минимум включается
}

// animation
function checkAnimatoin () {
  btn.classList.add('spin')
  btn.addEventListener('animationend', animationHandler, false)
}
function animationHandler () {
  btn.classList.remove('spin')
}

function slider () {
  let offset = 0 //смещение от левого края
  const sliderLiner = document.querySelector('#slider-liner')
  if (passLength.innerHTML <= 4) {
    offset += 0
  } else if (passLength.innerHTML > 4 && passLength.innerHTML <= 8) {
    offset += 320
  } else if (passLength.innerHTML >= 9 && passLength.innerHTML <= 15) {
    offset += 640
  } else {
    offset += 960
  }
  sliderLiner.style.left = -offset + 'px'
}

// copy to buffer
copy.onclick = function () {
  out.select()
  document.execCommand('copy')
}

btn.addEventListener('click', func)
btn.addEventListener('click', checkAnimatoin)
