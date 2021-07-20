// Refactor 

const form = document.querySelector('#calc-form')
const btnsContainer = document.querySelector('#btns-container')
const billInput = document.querySelector('#input-bill')
const tipInput = document.querySelector('#input-tip')
const tipInputParent = tipInput.parentElement.previousElementSibling
const pplInput = document.querySelector('#input-ppl')
const tipTotal = document.querySelector('#tip-total')
const total = document.querySelector('#total')
const btnReset = document.querySelector('#btn-reset')
const btns = document.querySelectorAll('.tip-btn')
const values = {}

const element = (el, prop, val) => el[prop] = val

function inputValidate (x) {
    const num = +x.value 
    const classes = x.classList //dynamic func instead! 
    const label = x.matches('#input-tip') ? tipInputParent : x.previousElementSibling 
    const children = label.children
    const childrenLength = children.length

    if (!x.value) { 
        classes.remove('error')
        if (children[0]) children[0].remove()
        return 
    }

    if (Number.isNaN(num) || num === 0) { 
        if (childrenLength === 0) {
            const errorMsg = document.createElement('p')
            element(errorMsg, 'innerText', 'Please enter a valid number above zero')
            // errorMsg.innerText = 'Please enter a valid number above zero'
            errorMsg.classList.add('error-msg')
            label.append(errorMsg)
            classes.add('error')
        }
    } else {
        if (classes.contains('error')) classes.remove('error')
        if (childrenLength > 0) children[0].remove() 
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
        tipTotal.innerText = `$${tip}`
        total.innerText = `$${totalPerPerson()}` 
        btnReset.classList.add('selected')
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
        if (target.classList.contains('selected')) {
            target.classList.remove('selected')
            tipInput.removeAttribute('disabled', 'disabled')
            tipInput.classList.remove('disabled')
        } else {
            btns.forEach(el => el.classList.remove('selected'))
            target.classList.add('selected')
            tipInput.setAttribute('disabled', 'disabled')
            tipInput.classList.add('disabled')
            if (tipInputParent.children.length > 0) {
                tipInputParent.children[0].remove()
                tipInput.classList.remove('error')
                tipInput.innerText = ''
            }
        }
        values['input-tip'] = num
        calculate()
    }
})

btnReset.addEventListener('click', e => {
    btns.forEach(el => el.classList.remove('selected'))
    btnReset.classList.remove('selected')
    tipTotal.innerText = '$0.00'
    total.innerText = '$0.00'
})