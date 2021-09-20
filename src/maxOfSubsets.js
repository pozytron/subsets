'use strict';
const getSubsetsBy3 = require('./getSubsetsBy3');
const findIndexOfMax = require("./findIndexOfMax");


function maxOfSubsets(values){
    if(values.length === 0 || values.length < 3 ){
        return null;
    }

    const arrayOfSubsets =  getSubsetsBy3(values);
    const indexOfMax = findIndexOfMax(arrayOfSubsets);


    let maxSet = arrayOfSubsets.filter((obj,i)=>i === indexOfMax);

    return [maxSet[0].localSum, maxSet[0].id];
}

module.exports = maxOfSubsets;