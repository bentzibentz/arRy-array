/*!
 * arry-array v0.0.6
 * Copyright (c) 2019-2020 Fabian Bentz
 * License: MIT
 */
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var removeObjectByValue = function removeObjectByValue(array, prop, value) {
  if (!array || 0 >= array.length || !prop || typeof prop !== 'string') {
    return null;
  }
  var index = array.findIndex(function (obj) {
    return obj[prop] === value;
  });
  return index >= 0 ? [].concat(_toConsumableArray(array.slice(0, index)), _toConsumableArray(array.slice(index + 1))) : array;
};

var insertAtIndex = function insertAtIndex(array, index) {
  for (var _len = arguments.length, newItems = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    newItems[_key - 2] = arguments[_key];
  }
  if (!array || 0 >= array.length || !index || typeof index !== 'string' || !newItems) {
    return null;
  }
  return [].concat(_toConsumableArray(array.slice(0, index)), newItems, _toConsumableArray(array.slice(index)));
};

var getObjectByValue = function getObjectByValue(array, prop, value) {
  if (!array || 0 >= array.length || !prop || typeof prop !== 'string' || !value) {
    return null;
  }
  return array.filter(function (obj) {
    return obj[prop] === value;
  });
};

var updateObjectByKeyValue = function updateObjectByKeyValue(array, prop, value, updateProp, data) {
  if (!array || 0 >= array.length || !prop || typeof prop !== 'string' || !value || !updateProp || typeof updateProp !== 'string' || !data) {
    return null;
  }
  var updateObj = array.find(function (obj) {
    return obj[prop] === value;
  });
  updateObj[updateProp] = data;
  return array;
};

var sortObjectsByKeyValue = function sortObjectsByKeyValue(array, prop, sortBy) {
  if (!array || 0 >= array.length || !prop || typeof prop !== 'string') {
    return null;
  }
  return array.sort(function (a, b) {
    return a[prop] > b[prop] ? 1 : -1;
  });
};

var removeDuplicateObjectByValue = function removeDuplicateObjectByValue(array, prop) {
  if (!array || 0 >= array.length || !prop || typeof prop !== 'string') {
    return null;
  }
  return array.map(function (e) {
    return e[prop];
  }).map(function (e, i, final) {
    return final.indexOf(e) === i && i;
  }).filter(function (obj) {
    return array[obj];
  }).map(function (e) {
    return array[e];
  });
};
var removeDuplicateObjectsByValue = function removeDuplicateObjectsByValue(array, prop) {
  if (!array || 0 >= array.length || !prop || typeof prop !== 'string') {
    return null;
  }
  return array.map(function (e) {
    return e[prop];
  }).map(function (e, i, final) {
    return final.indexOf(e) === i && i;
  }).filter(function (obj) {
    return array[obj];
  }).map(function (e) {
    return array[e];
  });
};
var getDuplicateObjectsByValue = function getDuplicateObjectsByValue(array, prop) {
  if (!array || 0 >= array.length || !prop || typeof prop !== 'string') {
    return null;
  }
  var duplicateValue = array.map(function (e) {
    return e[prop];
  }).map(function (e, i, final) {
    return final.indexOf(e) !== i && i;
  }).filter(function (obj) {
    return array[obj];
  }).map(function (e) {
    return array[e][prop];
  });
  return array.filter(function (obj) {
    return duplicateValue.includes(obj[prop]);
  });
};

var filterByMultipleProperties = function filterByMultipleProperties(arr, filters) {
  var filterKeys = Object.keys(filters);
  return arr.filter(function (eachObj) {
    return filterKeys.every(function (eachKey) {
      if (!filters[eachKey].length) {
        return true;
      }
      return filters[eachKey].includes(eachObj[eachKey]);
    });
  });
};

var removeItem = removeObjectByValue;
var insertItem = insertAtIndex;
var getItem = getObjectByValue;
var updateItemProp = updateObjectByKeyValue;
var getDuplicates = getDuplicateObjectsByValue;
var removeDuplicate = removeDuplicateObjectsByValue;
var removeDuplicates = removeDuplicateObjectByValue;
var sortItems = sortObjectsByKeyValue;
var filterItems = filterByMultipleProperties;

export { filterItems, getDuplicates, getItem, insertItem, removeDuplicate, removeDuplicates, removeItem, sortItems, updateItemProp };
