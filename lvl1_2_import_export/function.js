export const first = (array) => {
    return array[0]
}

export const notlast = (array) => {
    return array.slice(0, -1)
}

export const last = (array) => {
    let lastarray = array.pop()
    return lastarray
}

export const notfirst = (array) => {
    return array.slice(1)
}

export const removeword = (array, nameremove) => {
    return array.filter(elt => {
        return (
            elt !== nameremove
        )
    })
}

export const removeNumbers = (array) => {
    const newarray = [...new Set(array)]
    return newarray
}

export const addNumbers = (array) => {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum
}

