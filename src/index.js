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

const removeItem = removeObjectByValue;
const insertItem = insertAtIndex;
const getItem = getObjectByValue;
const updateItemProp = updateObjectByKeyValue;
const getDuplicates = getDuplicateObjectsByValue;
const removeDuplicate = removeDuplicateObjectsByValue;
const removeDuplicates = removeDuplicateObjectByValue;
const sortItems = sortObjectsByKeyValue;

export {
    removeItem,
    insertItem,
    getItem,
    updateItemProp,
    getDuplicates,
    removeDuplicate,
    removeDuplicates,
    sortItems
}
