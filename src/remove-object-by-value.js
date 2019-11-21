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

export { removeObjectByValue }
