const removeObjectByValue = (array, key, value) => {

    if ( !array || 0 >= array.length || !key || typeof key !== 'string' ) {
        return null;
    }

    const index = array.findIndex(obj => obj[key] === value);
    return index >= 0 ? [
        ...array.slice(0, index),
        ...array.slice(index + 1)
    ] : array;

};

export { removeObjectByValue }
