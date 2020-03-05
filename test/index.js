import {
    removeItem,
    insertItem,
    getItem,
    updateItemProp,
    getDuplicates,
    removeDuplicate,
    removeDuplicates,
    sortItems,
    filterItems,
    sortItemsByKeys
} from './arRy.mjs';

const testArr = [
    { "id": 88, "name":"Mark", "city": "Mannheim", "age": "21" },
    { "id": 99, "name":"Kathrin", "city": "Berlin", "age": "49" },
    { "id": 108, "name":"Frank", "city": "Mannheim", "age": "21" },
    { "id": 99, "name":"Max", "city": "Frankfurt", "age": "38" },
    { "id": 77, "name":"Lisa", "city": "Mannheim", "age": "23" }
];

const testDateArr = [
    { "id": 1, "day":"26", "month": "11", "year": "2019", "name": "Max" },
    { "id": 2, "day":"03", "month": "12", "year": "2019", "name": "Max" },
    { "id": 3, "day":"28", "month": "11", "year": "2019", "name": "Max" },
    { "id": 4, "day":"28", "month": "11", "year": "2019", "name": "Max" },
    { "id": 5, "day":"23", "month": "12", "year": "2019", "name": "Max" },
    { "id": 6, "day":"23", "month": "6", "year": "2019", "name": "Max" },
    { "id": 7, "day":"18", "month": "8", "year": "2019", "name": "Max" }
];

console.log('testArr');
console.log(testArr);

console.log('sortItems');
console.log(sortItems(testArr, 'name'));

console.log('removeItem');
console.log(removeItem(testArr, 'id', 108));

console.log('insertItem');
console.log(insertItem(testArr, '1', { "id": 109, "name": "Uwe" }, { "id": 110, "name": "Adam" }));

console.log('getItem');
console.log(getItem(testArr, 'id', 108));

console.log('updateItemProp');
console.log(updateItemProp(testArr, 'id', 77, 'name', 'Brigitte'));

console.log('getDuplicates');
console.log(getDuplicates(testArr, 'id'));

console.log('removeDuplicate');
console.log(removeDuplicate(testArr, 'id'));

console.log('filterItems');
console.log(filterItems(testArr, {city: "Mannheim", age: "21"}));

console.log('sortItemsByKeys');
console.log(sortItemsByKeys(testDateArr, ['-month', '-day']));

