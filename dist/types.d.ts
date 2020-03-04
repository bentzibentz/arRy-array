declare module 'arry-array' {
  /**
   * Remove item from array by defined value of property.
   */
  export function removeItem(array: object[], property: string, value: any): object[];

  /**
   * Insert new item at defined array index.
   */
  export function insertItem(array: object[], index: string, ...items: object): object[];

  /**
   * Get item from an array by defined property value.
   */
  export function getItem(array: object[], property: string, value: any): object[];

  /**
   * Update item in array, find by property value.
   */
  export function updateItemProp(array: object[], property: string, value: any, propertyToUpdate: string, data: any): object[];

  /**
   * Get all duplicate items from an array by property value.
   */
  export function getDuplicates(array: object[], property: string): object[];

  /**
   * Remove all duplicate items from array by property value, except the first one.
   */
  export function removeDuplicate(array: object[], property: string): object[];

  export function removeDuplicates(array: objectp[], property: string): object[];

  /**
   * Sort items in array by defined property.
   */
  export function sortItems(array: object[], property: string): object[];

  /**
   * Get all items from array by multiple property values.
   */
  export function filterItems(array: object[], property: string): object[];
}