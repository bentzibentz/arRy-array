const updateObjectByKeyValue = (array, key, value, prop, data) => {

    if (!array || 0 >= array.length || !key || typeof key !== 'string' || !value || typeof value !== 'string' || !prop || typeof prop !== 'string' || !data || typeof data !== 'string' ) {
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
