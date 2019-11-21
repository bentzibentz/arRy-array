const sortObjectsByKeyValue = (array, key, sortBy) => {

    // TODO sort by multible keys
    // array.sort((a, b) => (a.key > b.key) ? 1 : (a.key === b.key) ? ((a.key2 > b.key2) ? 1 : -1) : -1 )

    if ( !array || 0 >= array.length || !key || typeof key !== 'string' ) {
        return null;
    }

    return array.sort(
        ( a, b ) => ( a[key] > b[key] ) ? 1 : -1
    );

};

export { sortObjectsByKeyValue }
