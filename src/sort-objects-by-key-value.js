const sortObjectsByKeyValue = (array, prop, sortBy) => {

    // TODO sort by multible props
    // array.sort((a, b) => (a.prop > b.prop) ? 1 : (a.prop === b.prop) ? ((a.prop2 > b.prop2) ? 1 : -1) : -1 )

    if ( !array || 0 >= array.length || !prop || typeof prop !== 'string' ) {
        return null;
    }

    return array.sort(
        ( a, b ) => ( a[prop] > b[prop] ) ? 1 : -1
    );

};

export { sortObjectsByKeyValue }
