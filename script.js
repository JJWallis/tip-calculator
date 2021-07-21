const selection = el => document.querySelector(el)
const element = (el, prop, val) => el[prop] = val
const classList = (el, prop, val) => el.classList[prop](val)
const tipBtnsLoop = () => btns.forEach(el => classList(el, 'remove', 'selected'))
const form = selection('#calc-form')
const btnsContainer = selection('#btns-container')
const billInput = selection('#input-bill')
const tipInput = selection('#input-tip')
const tipInputParentLabel = tipInput.parentElement.previousElementSibling
const pplInput = selection('#input-ppl')
const tipTotal = selection('#tip-total')
const total = selection('#total')
const btnReset = selection('#btn-reset')
const btns = document.querySelectorAll('.tip-btn')
const values = {}

function inputValidate (el) {
    const num = +el.value 
    const label = el.matches('#input-tip') ? tipInputParentLabel : el.previousElementSibling 
    if (!el.value) { 
        removeErrorMsg(el, label)
        return 
    }
    if (Number.isNaN(num) || num === 0) { 
        if (label.children.length === 0) {
            const errorMsg = document.createElement('p')
            element(errorMsg, 'innerText', 'Please enter a valid number above zero')
            errorMsg.classList.add('error-msg')
            label.append(errorMsg)
            classList(el, 'add', 'error')
        }
    } else {
        removeErrorMsg(el, label) 
        values[el.id] = num 
        calculate()
    }
}

function btnValidate (el) { 
    const arr = [...el]
    arr.pop()
    const num = arr.join('')
    return +num
}

function btnStyles (el) {
    const disabled = prop => tipInput[prop]('disabled', 'disabled')
    if (classList(el, 'contains', 'selected')) { 
        classList(el, 'remove', 'selected')
        disabled('removeAttribute')
        classList(tipInput, 'remove', 'disabled')
    } else {
        tipBtnsLoop()
        classList(el, 'add', 'selected')
        disabled('setAttribute')
        classList(tipInput, 'add', 'disabled')
        removeErrorMsg(tipInput, tipInputParentLabel)
    }
}

function removeErrorMsg (el, label) {
    const children = label.children
    if (classList(el, 'contains', 'error')) classList(el, 'remove', 'error')
    if (children.length > 0) children[0].remove()
}

function calculate () {
    const arr = Object.keys(values)
    if (arr.length === 3) {
        const tipPerPerson = () => values['input-bill'] / values['input-ppl'] * (values['input-tip'] / 100)
        const tip = tipPerPerson()
        const totalPerPerson = () => values['input-bill'] / values['input-ppl'] + tip
        element(tipTotal,'innerText', `$${tip}`)
        element(total, 'innerText', `$${totalPerPerson()}`)
        classList(btnReset, 'add', 'selected')
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
        btnStyles(target)
        values['input-tip'] = num
        calculate()
    }
})

btnReset.addEventListener('click', e => {
    tipBtnsLoop()
    classList(btnReset, 'remove', 'selected')
    element(tipTotal, 'innerText', '$0.00')
    element(total, 'innerText', '$0.00')
})