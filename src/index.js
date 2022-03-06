
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let d = [];

    if (matrix === undefined) {
        return d;
    }
    else if (matrix.length > 0) {
    let c = [];
    
    for (let i = 0; i < matrix.length; i++) {
    if ((i + 1) % 2 === 0) {
        c.push(matrix[i].reverse());
        
    } else {
        c.push(matrix[i]);
    }
    
}
    return c.join(',').split(',');

}  else {
    return d;
}
}
