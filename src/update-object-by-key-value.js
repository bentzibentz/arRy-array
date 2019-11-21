const updateObjectByKeyValue = (array, prop, value, updateProp, data) => {

    if (!array || 0 >= array.length || !prop || typeof prop !== 'string' || !value || !updateProp || typeof updateProp !== 'string' || !data ) {
        return null;
    }

    let updateObj = array.find(
        (obj) => {
            return obj[prop] === value
        }
    );

    updateObj[updateProp] = data;

    return array;

};

export { updateObjectByKeyValue }
