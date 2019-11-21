arRy
=====
arRy is a modular and lightweight ES6 array library to simplify array modification operations.

## Installation

Pull it in through npm or yarn:

```bash
npm install arRy
```

```bash
yarn add arRy
```

## Usage

#### Sort items
Sort items in array by defined property.
```javascript
sortItems(array, property)
```

##### Example

```javascript
import { sortItems } from 'arRy';

const arr = [
    { "id": 1, "name": "Max Mustermann"},
    { "id": 4, "name": "Karla Kulunder"},
    { "id": 3, "name": "Moritz Pauls" },
    { "id": 2, "name": "Franka Frank" }
]

sortItems(arr, 'id');

console.log(arr);
/*
[
    { "id": 1, "name": "Max Mustermann" },
    { "id": 2, "name": "Franka Frank" },
    { "id": 3, "name": "Moritz Pauls" },
    { "id": 4, "name": "Karla Kulunder"}
]
*/
```


#### Remove item
Remove item from array by defined value of property.
```javascript
removeItem(array, property, value)
```

##### Example

```javascript
import { removeItem } from 'arRy';

const arr = [
    { "id": 1, "name": "Max Mustermann"},
    { "id": 2, "name": "Karla Kulunder"},
    { "id": 3, "name": "Moritz Pauls" },
    { "id": 4, "name": "Franka Frank" }
]

removeItem(arr, 'id', 3);

console.log(arr);
/*
[
    { "id": 1, "name": "Max Mustermann" },
    { "id": 2, "name": "Karla Kulunder" },
    { "id": 4, "name": "Franka Frank"  }
]
*/
```

#### Insert item
Insert new item at defined array index.
```javascript
insertItem(array, index, ...items)
```

##### Example

```javascript
import { insertItem } from 'arRy';

const arr = [
    { "id": 1, "name": "Max Mustermann" },
    { "id": 2, "name": "Karla Kulunder" }
]

insertItem(arr, 1, {"id": 3, "name": "Moritz Pauls"});

console.log(arr);
/*
[
    { "id": 1, "name": "Max Mustermann" },
    { "id": 3, "name": "Moritz Pauls" },
    { "id": 2, "name": "Karla Kulunder" }
]
*/
```

#### Get item in array by property value
Get item from by defined property value.
```javascript
getItem(array, property, value)
```

#### Update item in array by property value
Update item in array, find by property value.
```javascript
updateItemProp(array, property, value, propertyToUpdate, data)
```

#### Get duplicate items in array by property
Get all duplicate items from array by property value.
```javascript
getDuplicates(array, property)
```

#### Remove duplicate items in array by property
Remove all duplicate items from array by property value, except first item.
```javascript
removeDuplicate(array, property)
```

Copyright (c) 2019 fabian bentz.
Released under the [MIT](LICENSE) license.
