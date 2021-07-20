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
const classList = (el, prop, val) => el.classList[prop](val)
const tipBtnsLoop = () => btns.forEach(el => classList(el, 'remove', 'selected'))

function inputValidate (x) {
    const num = +x.value 
    const label = x.matches('#input-tip') ? tipInputParent : x.previousElementSibling 
    const children = label.children
    const childrenLength = children.length
    const removeErrorMsg = () => children[0].remove()

    if (!x.value) { 
        classList(x, 'remove', 'error')
        if (children[0]) removeErrorMsg()
        return 
    }

    if (Number.isNaN(num) || num === 0) { 
        if (childrenLength === 0) {
            const errorMsg = document.createElement('p')
            element(errorMsg, 'innerText', 'Please enter a valid number above zero')
            errorMsg.classList.add('error-msg')
            label.append(errorMsg)
            classList(x, 'add', 'error')
        }
    } else {
        if (classList(x, 'contains', 'error')) classList(x, 'remove', 'error')
        if (childrenLength > 0) removeErrorMsg() 
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
        if (target.classList.contains('selected')) {
            target.classList.remove('selected')
            tipInput.removeAttribute('disabled', 'disabled')
            tipInput.classList.remove('disabled')
        } else {
            tipBtnsLoop()
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
    tipBtnsLoop()
    classList(btnReset, 'remove', 'selected')
    element(tipTotal, 'innerText', '$0.00')
    element(total, 'innerText', '$0.00')
})