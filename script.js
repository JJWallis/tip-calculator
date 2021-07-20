// Custom input in disabled state if tip-btn in a selected state + vice-versa (visually showcase via disabled class + ternary operator) 
// No error mssg to display if btn selected (on custom input) 
// Better method of extrapolating % 
// Refactor 

const form = document.querySelector('#calc-form')
const btnsContainer = document.querySelector('#btns-container')
const billInput = document.querySelector('#input-bill')
const tipInput = document.querySelector('#input-tip')
const pplInput = document.querySelector('#input-ppl')
const tipTotal = document.querySelector('#tip-total')
const total = document.querySelector('#total')
const btnReset = document.querySelector('#btn-reset')
const values = {}

function inputValidate (x) {
    const num = +x.value 
    const classes = x.classList 
    const label = x.matches('#input-tip') ? x.parentElement.previousElementSibling : x.previousElementSibling  

    if (Number.isNaN(num) || num === 0) { 
        if (label.children.length === 0) {
            const errorMsg = document.createElement('p')
            errorMsg.innerText = 'Please enter a valid number above zero'
            errorMsg.classList.add('error-msg')
            label.append(errorMsg)
            classes.add('error')
        }
    } else {
        if (classes.contains('error')) classes.remove('error')
        if (label.children.length > 0) label.children[0].remove() 
        values[x.id] = num 
        calculate()
    }
}

function btnValidate (val) { 
    const arr = [...val]
    arr.pop()
    const num = arr.join('')
    return +num
}

function calculate () {
    const arr = Object.keys(values)
    if (arr.length === 3) {
        const tipPerPerson = () => values['input-bill'] / values['input-ppl'] * (values['input-tip'] / 100)
        const tip = tipPerPerson()
        const totalPerPerson = () => values['input-bill'] / values['input-ppl'] + tip
        tipTotal.innerText = tip
        total.innerText = totalPerPerson()
        btnReset.classList.toggle('selected')

    }
}

/////////////// EVENT LISTENERS //////////////////////

form.addEventListener('change', e => {
    inputValidate(e.target)
})

btnsContainer.addEventListener('click', e => {
    const target = e.target
    if (target.matches('button')) {
        e.preventDefault()
        const num = btnValidate(target.innerText)
        const btns = document.querySelectorAll('.tip-btn') // Refactor in global scope as in next event listener too? 
        btns.forEach(el => el.classList.remove('selected')) // or sep func 
        target.classList.toggle('selected')
        values['input-tip'] = num
        calculate()
    }
})

btnReset.addEventListener('click', e => {
    const btns = document.querySelectorAll('.tip-btn')
    btns.forEach(el => el.classList.remove('selected'))
    btnReset.classList.remove('selected')
})