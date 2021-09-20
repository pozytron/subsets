function findIndexOfMax(arrayOfSubsets){
    const flatArray = arrayOfSubsets.map(set=>set.localSum);
    const maxNumber = Math.max(...flatArray);
    return flatArray.indexOf(maxNumber);
}


module.exports =  findIndexOfMax;