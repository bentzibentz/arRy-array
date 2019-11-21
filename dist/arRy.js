/*!
 * arry v0.0.1
 * Copyright (c) 2019-2019 Fabian Bentz
 * License: MIT
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.index = {}));
}(this, (function (exports) { 'use strict';

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

  var removeObjectByValue = function removeObjectByValue(array, key, value) {
    if (!array || 0 >= array.length || !key || typeof key !== 'string') {
      return null;
    }
    var index = array.findIndex(function (obj) {
      return obj[key] === value;
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

  var getObjectByValue = function getObjectByValue(array, key, value) {
    if (!array || 0 >= array.length || !key || typeof key !== 'string' || !value) {
      return null;
    }
    return array.filter(function (obj) {
      return obj[key] === value;
    });
  };

  var updateObjectByKeyValue = function updateObjectByKeyValue(array, key, value, prop, data) {
    if (!array || 0 >= array.length || !key || typeof key !== 'string' || !value || !prop || typeof prop !== 'string' || !data) {
      return null;
    }
    var updateObj = array.find(function (obj) {
      return obj[key] === value;
    });
    updateObj[prop] = data;
    return array;
  };

  var sortObjectsByKeyValue = function sortObjectsByKeyValue(array, key, sortBy) {
    if (!array || 0 >= array.length || !key || typeof key !== 'string') {
      return null;
    }
    return array.sort(function (a, b) {
      return a[key] > b[key] ? 1 : -1;
    });
  };

  var removeDuplicateObjectByValue = function removeDuplicateObjectByValue(array, key) {
    if (!array || 0 >= array.length || !key || typeof key !== 'string') {
      return null;
    }
    return array.map(function (e) {
      return e[key];
    }).map(function (e, i, final) {
      return final.indexOf(e) === i && i;
    }).filter(function (obj) {
      return array[obj];
    }).map(function (e) {
      return array[e];
    });
  };
  var removeDuplicateObjectsByValue = function removeDuplicateObjectsByValue(array, key) {
    if (!array || 0 >= array.length || !key || typeof key !== 'string') {
      return null;
    }
    return array.map(function (e) {
      return e[key];
    }).map(function (e, i, final) {
      return final.indexOf(e) === i && i;
    }).filter(function (obj) {
      return array[obj];
    }).map(function (e) {
      return array[e];
    });
  };
  var getDuplicateObjectsByValue = function getDuplicateObjectsByValue(array, key) {
    if (!array || 0 >= array.length || !key || typeof key !== 'string') {
      return null;
    }
    var duplicateValue = array.map(function (e) {
      return e[key];
    }).map(function (e, i, final) {
      return final.indexOf(e) !== i && i;
    }).filter(function (obj) {
      return array[obj];
    }).map(function (e) {
      return array[e][key];
    });
    return array.filter(function (obj) {
      return duplicateValue.includes(obj[key]);
    });
  };

  exports.getDuplicateObjectsByValue = getDuplicateObjectsByValue;
  exports.getObjectByValue = getObjectByValue;
  exports.insertAtIndex = insertAtIndex;
  exports.removeDuplicateObjectByValue = removeDuplicateObjectByValue;
  exports.removeDuplicateObjectsByValue = removeDuplicateObjectsByValue;
  exports.removeObjectByValue = removeObjectByValue;
  exports.sortObjectsByKeyValue = sortObjectsByKeyValue;
  exports.updateObjectByKeyValue = updateObjectByKeyValue;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
