const removeDuplicateObjectByValue = (array, prop) => {

    if (!array || 0 >= array.length || !prop || typeof prop !== 'string' ) {
        return null;
    }

    return array
            .map( e => e[prop] )
            .map( ( e, i, final ) => final.indexOf(e) === i && i )
            .filter( obj => array[obj] )
            .map( e => array[e] );

};

const removeDuplicateObjectsByValue = (array, prop) => {

    if (!array || 0 >= array.length || !prop || typeof prop !== 'string' ) {
        return null;
    }

    return array
            .map( e => e[prop] )
            .map( ( e, i, final ) => final.indexOf(e) === i && i )
            .filter( obj => array[obj] )
            .map( e => array[e] );

};

const getDuplicateObjectsByValue = (array, prop) => {

    if (!array || 0 >= array.length || !prop || typeof prop !== 'string' ) {
        return null;
    }

    const duplicateValue = array
            .map( e => e[prop] )
            .map( (e, i, final) => final.indexOf(e) !== i && i )
            .filter( obj => array[obj] )
            .map( e => array[e][prop] );

    return array.filter( obj=> duplicateValue.includes(obj[prop]) );

};

const contains = (array, item, prop) => {

    if ( !array || 0 >= array.length || !item ) {
        return null;
    }

    let filtered_item = array.filter(
        (i) => {
            return i[prop] === item[prop]
        }
    );
    return !!filtered_item.length;
};

export {
    getDuplicateObjectsByValue,
    removeDuplicateObjectsByValue,
    removeDuplicateObjectByValue
}
