/*!
 * arry-array v0.0.6
 * Copyright (c) 2019-2022 Fabian Bentz
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.index = {}));
})(this, (function (exports) { 'use strict';

    const removeObjectByValue = (array, prop, value) => {
        if ( !array || 0 >= array.length || !prop || typeof prop !== 'string' ) {
            return null;
        }
        const index = array.findIndex(obj => obj[prop] === value);
        return index >= 0 ? [
            ...array.slice(0, index),
            ...array.slice(index + 1)
        ] : array;
    };

    const insertAtIndex = (array, index, ...newItems) => {
        if ( !array || 0 >= array.length || !index || typeof index !== 'string' || !newItems ) {
            return null;
        }
        return [
            ...array.slice(0, index),
            ...newItems,
            ...array.slice(index)
        ]
    };

    const getObjectByValue = (array, prop, value) => {
        if ( !array || 0 >= array.length || !prop || typeof prop !== 'string' || !value ) {
            return null;
        }
        return array.filter( obj => obj[prop] === value )
    };

    const updateObjectByKeyValue = (array, prop, value, updateProp, data) => {
        if (!array || 0 >= array.length || !prop || typeof prop !== 'string' || !value || !updateProp || typeof updateProp !== 'string' || !data ) {
            return null;
        }
        let updateObj = array.find(
            (obj) => {
                return obj[prop] === value
            }
        );
        updateObj[updateProp] = data;
        return array;
    };

    const sortObjectsByKeyValue = (array, prop, sortBy) => {
        if ( !array || 0 >= array.length || !prop || typeof prop !== 'string' ) {
            return null;
        }
        return array.sort(
            ( a, b ) => ( a[prop] > b[prop] ) ? 1 : -1
        );
    };

    const removeDuplicateObjectByValue = (array, prop) => {
        if (!array || 0 >= array.length || !prop || typeof prop !== 'string' ) {
            return null;
        }
        return array
                .map( e => e[prop] )
                .map( ( e, i, final ) => final.indexOf(e) === i && i )
                .filter( obj => array[obj] )
                .map( e => array[e] );
    };
    const removeDuplicateObjectsByValue = (array, prop) => {
        if (!array || 0 >= array.length || !prop || typeof prop !== 'string' ) {
            return null;
        }
        return array
                .map( e => e[prop] )
                .map( ( e, i, final ) => final.indexOf(e) === i && i )
                .filter( obj => array[obj] )
                .map( e => array[e] );
    };
    const getDuplicateObjectsByValue = (array, prop) => {
        if (!array || 0 >= array.length || !prop || typeof prop !== 'string' ) {
            return null;
        }
        const duplicateValue = array
                .map( e => e[prop] )
                .map( (e, i, final) => final.indexOf(e) !== i && i )
                .filter( obj => array[obj] )
                .map( e => array[e][prop] );
        return array.filter( obj=> duplicateValue.includes(obj[prop]) );
    };

    const filterByMultipleProperties = (arr, filters) => {
        const filterKeys = Object.keys(filters);
        return arr.filter(eachObj => {
            return filterKeys.every(eachKey => {
                if (!filters[eachKey].length) {
                    return true;
                }
                return filters[eachKey].includes(eachObj[eachKey]);
            });
        });
    };

    const removeItem = removeObjectByValue;
    const insertItem = insertAtIndex;
    const getItem = getObjectByValue;
    const updateItemProp = updateObjectByKeyValue;
    const getDuplicates = getDuplicateObjectsByValue;
    const removeDuplicate = removeDuplicateObjectsByValue;
    const removeDuplicates = removeDuplicateObjectByValue;
    const sortItems = sortObjectsByKeyValue;
    const filterItems = filterByMultipleProperties;

    exports.filterItems = filterItems;
    exports.getDuplicates = getDuplicates;
    exports.getItem = getItem;
    exports.insertItem = insertItem;
    exports.removeDuplicate = removeDuplicate;
    exports.removeDuplicates = removeDuplicates;
    exports.removeItem = removeItem;
    exports.sortItems = sortItems;
    exports.updateItemProp = updateItemProp;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
