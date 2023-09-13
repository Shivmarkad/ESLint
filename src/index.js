function mynfunc (word) {
    if(word[0] > 1)   
        return word[0];

    if(word[2]<2){
        let ele = word[2];
        return ele;
    }
    return word[2];
}

const newCall = mynfunc([1,2,4,4,5]);