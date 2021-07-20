// If passes - creates dynamic property name that matches e.target.id (store on var - use for label ref too) via interpolation 
// Runs math func (checks whether Obj.keys(objName).length === 3) 


// Btns Click event: 
// e.preventDefault() - submit type by default (or type="button")
// Removes % sign (spread operator or split())
// Assigns value to input-tip property in obj (either creating or re-assigning)
// Runs math func that checks whether Obj.keys(objName).length === 3 

// Math formulas - using obj prop names: 
// tipPerPerson = bill / peopleNum * 0.10 (10% - 10/100) = 2.4 | updates tip-total el 
// totalPerPerson = bill / peopleNum + tipPerPerson | updates total el 


const form = document.querySelector('#calc-form')
const billInput = document.querySelector('#input-bill')
const tipInput = document.querySelector('#input-tip')
const pplInput = document.querySelector('#input-ppl')
const tipTotal = document.querySelector('#tip-total')
const total = document.querySelector('#total')
const btnReset = document.querySelector('#btn-reset')
const values = {}

function validate (x) {
    const num = +x.value 
    const classes = x.classList 
    const label = x.matches('#input-tip') ? x.parentElement.previousElementSibling : x.previousElementSibling

    if (Number.isNaN(num) || num === 0) { // Only happens if not present already? 
        const errorMsg = document.createElement('p')
        errorMsg.innerText = 'Please enter a valid number above zero'
        errorMsg.classList.add('error-msg')
        label.append(errorMsg)
        classes.add('error')
    } else {
        if (classes.contains('error')) classes.remove('error')
        if (label.children.length > 0) label.children[0].remove()
    }
}

/////////////// EVENT LISTENERS //////////////////////

form.addEventListener('change', e => {
    validate(e.target)
})