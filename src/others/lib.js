const pushToArray = (seat, arr) => {
    const ids = arr.map(s => s.id)
    const idx = ids.indexOf(seat.id)

    if (idx === -1) {
        arr.push(seat)
    } else {
        arr.splice(idx, 1)
    }
}

export { pushToArray}