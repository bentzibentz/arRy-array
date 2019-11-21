import {
    removeItem,
    insertItem,
    getItem,
    updateItemProp,
    getDuplicates,
    removeDuplicate,
    removeDuplicates,
    sortItems
} from './arRy.mjs';

const testArr = [
    { "id": 88, "name":"Lets go testing" },
    { "id": 99, "name":"Have fun girls" },
    { "id": 108, "name":"You are awesome!" },
    { "id": 99, "name":"Have fun boys" },
    { "id": 77, "name":"Have fun people" },
];

console.log('testArr');
console.log(testArr);

console.log('sortItems');
console.log(sortItems(testArr, 'name'));

console.log('removeItem');
console.log(removeItem(testArr, 'id', 108));

console.log('insertItem');
console.log(insertItem(testArr, '1', { "id": 109, "name": "It is awesome!" }, { "id": 110, "name": "He is awesome!" }));

console.log('getItem');
console.log(getItem(testArr, 'id', 108));

console.log('updateItemProp');
console.log(updateItemProp(testArr, 'id', 77, 'name', 'Neuer Value'));

console.log('getDuplicates');
console.log(getDuplicates(testArr, 'id'));

console.log('removeDuplicate');
console.log(removeDuplicate(testArr, 'id'));
