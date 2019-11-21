const updateObjectByKeyValue = (array, key, value, prop, data) => {

    if (!array || 0 >= array.length || !key || typeof key !== 'string' || !value || !prop || typeof prop !== 'string' || !data ) {
        return null;
    }

    let updateObj = array.find(
        (obj) => {
            return obj[key] === value
        }
    );

    updateObj[prop] = data;

    return array;

};

export { updateObjectByKeyValue }
