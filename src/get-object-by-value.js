const getObjectByValue = (array, key, value) => {

    if ( !array || 0 >= array.length || !key || typeof key !== 'string' || !value ) {
        return null;
    }

    return array.filter( obj => obj[key] === value )

};

export { getObjectByValue }
