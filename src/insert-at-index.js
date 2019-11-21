const insertAtIndex = (array, index, ...newItems) => {

    if (!array || 0 >= array.length || !index || typeof index !== 'string' || !newItems ) {
        return null;
    }

    return [
        ...array.slice(0, index),
        ...newItems,
        ...array.slice(index)
    ]
};

export { insertAtIndex }
