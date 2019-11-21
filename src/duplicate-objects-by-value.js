const removeDuplicateObjectByValue = (array, key) => {

    if (!array || 0 >= array.length || !key || typeof key !== 'string' ) {
        return null;
    }

    return array
            .map( e => e[key] )
            .map( ( e, i, final ) => final.indexOf(e) === i && i )
            .filter( obj => array[obj] )
            .map( e => array[e] );

};

const removeDuplicateObjectsByValue = (array, key) => {

    if (!array || 0 >= array.length || !key || typeof key !== 'string' ) {
        return null;
    }

    return array
            .map( e => e[key] )
            .map( ( e, i, final ) => final.indexOf(e) === i && i )
            .filter( obj => array[obj] )
            .map( e => array[e] );

};

const getDuplicateObjectsByValue = (array, key) => {

    if (!array || 0 >= array.length || !key || typeof key !== 'string' ) {
        return null;
    }

    const duplicateValue = array
            .map( e => e[key] )
            .map( (e, i, final) => final.indexOf(e) !== i && i )
            .filter( obj => array[obj] )
            .map( e => array[e][key] );

    return array.filter( obj=> duplicateValue.includes(obj[key]) );

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
