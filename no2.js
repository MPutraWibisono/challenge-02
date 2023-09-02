const checkTypeNumber = (givenNumber) => {
  if (typeof givenNumber === "number") {
    if (givenNumber % 2 === 0) {
      return "GENAP";
    } else {
      return "GANJIL";
    }
  } else if (givenNumber === undefined) {
    return "Error : Bro where is the parameter?";
  } else {
    return "Error : Invalid data type";
  }
};

console.log(checkTypeNumber());
