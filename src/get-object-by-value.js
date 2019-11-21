const getObjectByValue = (array, prop, value) => {

    if ( !array || 0 >= array.length || !prop || typeof prop !== 'string' || !value ) {
        return null;
    }

    return array.filter( obj => obj[prop] === value )

};

export { getObjectByValue }
