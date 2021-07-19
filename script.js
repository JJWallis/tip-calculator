// Obj in global scope - keep track of values 
// Change events on form (input els) - takes e.target + passes to: 
// Validation func (store on ref in listener when called) 
// Converts param.value to num + checks if Number.isNaN() or === 0 
// If passes - creates dynamic property name that matches e.target.id value via interpolation 
// Runs math func (checks whether Obj.keys(objName).length === 3) 
// If doesn't pass validation: 
// displays error mssg ('please enter a valid num above zero')
// Conditionally declares ref to label (+ append()):
// checks if e.tartet.id.matches('#input-tip') ? param.parentElement.previousElementSibling : param.previousElementSibling
// toggles error class (on param) 


// Btns Click event: 
// e.preventDefault() - submit type by default (or type="button")
// Removes % sign (spread operator or split())
// Assigns value to input-tip property in obj (either creating or re-assigning)
// Runs math func that checks whether Obj.keys(objName).length === 3 

// Math formulas: tipPerPerson = bill / peopleNum * 0.10 (10% - 10/100) = 2.4 
// totalPerPerson = bill / peopleNum + tipPerPerson 