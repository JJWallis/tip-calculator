// Empty Obj in global scope - keep track of values 
// Change events on form (input els) - takes e.target + passes to:
// Validation func - removes error class on param (if present from before) 
// converts param.value to num + checks if Number.isNaN() or === 0 
// If passes - creates dynamic property name that matches e.target.id (store on var - use for label ref too) via interpolation 
// Runs math func (checks whether Obj.keys(objName).length === 3) 
// If doesn't pass validation: 
// displays error mssg ('Please enter a valid num above zero')
// Conditionally declares ref to label (+ append()):
// checks if e.tartet.id.matches('#input-tip') ? param.parentElement.previousElementSibling : param.previousElementSibling
// add error class on param 


// Btns Click event: 
// e.preventDefault() - submit type by default (or type="button")
// Removes % sign (spread operator or split())
// Assigns value to input-tip property in obj (either creating or re-assigning)
// Runs math func that checks whether Obj.keys(objName).length === 3 

// Math formulas - using obj prop names: 
// tipPerPerson = bill / peopleNum * 0.10 (10% - 10/100) = 2.4 | updates tip-total el 
// totalPerPerson = bill / peopleNum + tipPerPerson | updates total el 