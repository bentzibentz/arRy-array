import { removeObjectByValue } from './remove-object-by-value';
import { insertAtIndex } from './insert-at-index';
import { getObjectByValue } from './get-object-by-value';
import { updateObjectByKeyValue } from './update-object-by-key-value';
import { sortObjectsByKeyValue } from './sort-objects-by-key-value';
import {
    getDuplicateObjectsByValue,
    removeDuplicateObjectsByValue,
    removeDuplicateObjectByValue
} from './duplicate-objects-by-value';
import { filterByMultipleProperties } from './filter-by-multiple-properties'
import { sortObjectsByMultipleKeyValue } from './sort-objects-by-multiple-key-value';

const removeItem = removeObjectByValue;
const insertItem = insertAtIndex;
const getItem = getObjectByValue;
const updateItemProp = updateObjectByKeyValue;
const getDuplicates = getDuplicateObjectsByValue;
const removeDuplicate = removeDuplicateObjectsByValue;
const removeDuplicates = removeDuplicateObjectByValue;
const sortItems = sortObjectsByKeyValue;
const filterItems = filterByMultipleProperties;
const sortItemsByKeys = sortObjectsByMultipleKeyValue;

export {
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
}
