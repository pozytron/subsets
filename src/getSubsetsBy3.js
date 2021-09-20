function getSubsetsBy3(values){
    const subsetsArray = [];
    values.forEach((item,i,array)=>{
        if(i<= array.length-3){
            const localSum = item + array[i+1] + array[i+2];
            const subSet = {
                id:i,
                subset: [item,array[i+1],array[i+2]],
                localSum,
            };
            subsetsArray.push(subSet);
        }
    });
    return subsetsArray;
}

module.exports = getSubsetsBy3;