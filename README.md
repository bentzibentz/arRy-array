arRy
=====
arRy is a modular and lightweight ES6 array library to simplify array modification operations.

## Installation

Pull it in through npm or yarn:

```bash
npm install arry-array
```

```bash
yarn add arry-array
```

## Usage

#### Sort items
Sort items in array by defined property.
```javascript
sortItems(array, property)
```

##### Example

```javascript
import { sortItems } from 'arry-array';

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
import { removeItem } from 'arry-array';

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
import { insertItem } from 'arry-array';

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

##### Example

```javascript
import { getItem } from 'arry-array';

const arr = [
    { "id": 1, "name": "Max Mustermann" },
    { "id": 2, "name": "Karla Kulunder" },
    { "id": 3, "name": "Moritz Pauls" }
]

getItem(arr, 'id', 2);

console.log(arr);
/*
[
    { "id": 2, "name": "Karla Kulunder" }
]
*/
```

#### Update item in array by property value
Update item in array, find by property value.
```javascript
updateItemProp(array, property, value, propertyToUpdate, data)
```

##### Example

```javascript
import { updateItemProp } from 'arry-array';

const arr = [
    { "id": 1, "name": "Max Mustermann" },
    { "id": 2, "name": "Karla Kulunder" },
    { "id": 3, "name": "Moritz Pauls" }
]

updateItemProp(arr, 'id', 2, 'name', 'Martin Augustus');

console.log(arr);
/*
[
   { "id": 1, "name": "Max Mustermann" },
   { "id": 2, "name": "Martin Augustus" },
   { "id": 3, "name": "Moritz Pauls" }
]
*/
```

#### Get duplicate items in array by property
Get all duplicate items from array by property value.
```javascript
getDuplicates(array, property)
```

##### Example

```javascript
import { getDuplicates } from 'arry-array';

const arr = [
    { "id": 1, "name": "Max Mustermann" },
    { "id": 2, "name": "Karla Kulunder" },
    { "id": 3, "name": "Moritz Pauls" },
    { "id": 2, "name": "Max Meier" },
]

getDuplicates(arr, 'id');

console.log(arr);
/*
[
   { "id": 2, "name": "Karla Kulunder" },
   { "id": 2, "name": "Max Meier" }
]
*/
```

#### Remove duplicate items in array by property
Remove all duplicate items from array by property value, except the first one.
```javascript
removeDuplicate(array, property)
```

##### Example

```javascript
import { removeDuplicate } from 'arry-array';

const arr = [
    { "id": 1, "name": "Max Mustermann" },
    { "id": 2, "name": "Karla Kulunder" },
    { "id": 3, "name": "Moritz Pauls" },
    { "id": 2, "name": "Max Meier" },
]

removeDuplicate(arr, 'id');

console.log(arr);
/*
[
   { "id": 1, "name": "Max Mustermann" },
   { "id": 2, "name": "Karla Kulunder" },
   { "id": 3, "name": "Moritz Pauls" },
]
*/
```

More usefull functions coming soon :)

Copyright (c) 2019 fabian bentz.
Released under the [MIT](LICENSE) license.
