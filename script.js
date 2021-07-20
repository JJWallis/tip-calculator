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
const classList = (el, prop, val) => el.classList[prop](val)
const tipBtnsLoop = () => btns.forEach(el => classList(el, 'remove', 'selected'))

function inputValidate (x) {
    const num = +x.value 
    const label = x.matches('#input-tip') ? tipInputParent : x.previousElementSibling 
    if (!x.value) { 
        removeErrorMsg(x, label)
        return 
    }
    if (Number.isNaN(num) || num === 0) { 
        if (label.children.length === 0) {
            const errorMsg = document.createElement('p')
            element(errorMsg, 'innerText', 'Please enter a valid number above zero')
            errorMsg.classList.add('error-msg')
            label.append(errorMsg)
            classList(x, 'add', 'error')
        }
    } else {
        removeErrorMsg(x, label) 
        values[x.id] = num 
        calculate()
    }
}

function btnValidate (x) { 
    const arr = [...x]
    arr.pop()
    const num = arr.join('')
    return +num
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
    if (target.matches('button')) { // obj to store all 4 funcs + run based on prop name? 
        e.preventDefault()
        const num = btnValidate(target.innerText) 
        const disabled = prop => tipInput[prop]('disabled', 'disabled') 
        if (classList(target, 'contains', 'selected')) {
            classList(target, 'remove', 'selected')
            disabled('removeAttribute')
            classList(tipInput, 'remove', 'disabled')
        } else {
            tipBtnsLoop()
            classList(target, 'add', 'selected')
            disabled('setAttribute')
            classList(tipInput, 'add', 'disabled')
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
    tipBtnsLoop()
    classList(btnReset, 'remove', 'selected')
    element(tipTotal, 'innerText', '$0.00')
    element(total, 'innerText', '$0.00')
})