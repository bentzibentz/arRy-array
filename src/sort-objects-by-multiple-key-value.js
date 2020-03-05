const sortObjectsByMultipleKeyValue = (array, fields) => {

    // TODO sort by multible props
    // array.sort((a, b) => (a.prop > b.prop) ? 1 : (a.prop === b.prop) ? ((a.prop2 > b.prop2) ? 1 : -1) : -1 )

    if ( !array || 0 >= array.length || !fields || 0 >= fields.length ) {
        return null;
    }

    array.sort(
        fieldSorter(fields)
    );

    return array;

};

function fieldSorter(fields) {
    return function (a, b) {
        return fields
            .map(function (o) {
                let dir = 1;

                if (o[0] === '-') {
                    dir = -1;
                    o=o.substring(1);
                }

                if (a[o] > b[o]) {
                    return dir;
                }

                if (a[o] < b[o]) {
                    return -(dir);
                }

                return 0;
            })
            .reduce(function firstNonZeroValue (p,n) {
                return p ? p : n;
            }, 0);
    };
}

export { sortObjectsByMultipleKeyValue }
