import {
    insertAtIndex,
    removeObjectByValue,
    getObjectByValue,
    updateObjectByKeyValue,
    getDuplicateObjectsByValue,
    removeDuplicateObjectsByValue,
    removeDuplicateObjectByValue
} from './arrAy.mjs';

const testArr = [
    {"id":"88","name":"Lets go testing"},
    {"id":"99","name":"Have fun girls"},
    {"id":"108","name":"You are awesome!"},
    {"id":"99","name":"Have fun boys"},
    {"id":"77","name":"Have fun people"},
];

console.log('testArr');
console.log(testArr);

console.log('removeObjectByValue');
console.log(removeObjectByValue(testArr, 'id', '108'));

console.log('insertAtIndex');
console.log(insertAtIndex(testArr, '1', {"id":"109","name":"It is awesome!"}, {"id":"110","name":"He is awesome!"}));

console.log('getObjectByValue');
console.log(getObjectByValue(testArr, 'id', '99'));

console.log('updateObjectByKeyValue');
console.log(updateObjectByKeyValue(testArr, 'id', '77', 'name', 'Neuer Value'));

console.log('getDuplicateObjectsByValue');
console.log(getDuplicateObjectsByValue(testArr, 'id'));

console.log('removeDuplicateObjectByValue');
console.log(removeDuplicateObjectByValue(testArr, 'id'));
