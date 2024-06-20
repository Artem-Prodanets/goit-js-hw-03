function makeArray(firstArray, secondArray, maxLength) {
    
    // * конкат второго массива к первому
    // * добавить условие ИФ с обрезанием нового массива по длине
    // * ЕЛСЕ просто вернуть новый массив
    
    const newArr = firstArray.concat(secondArray);

    if (newArr.length > maxLength) {
        return newArr.slice(0, maxLength)
    }
    else {
        return newArr
    }
}





console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []

