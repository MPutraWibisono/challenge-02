function getAngkaTerbesarKedua(dataNumbers) {
  if (Array.isArray(dataNumbers) && dataNumbers.length > 1) {
    for (let i = 0; i < dataNumbers.length; i++) {
      if (typeof dataNumbers[i] != "number") {
        return "Array element data type must be a number";
      } else {
        let data = dataNumbers.sort((a, b) => a - b);
        return data[data.length - 2];
      }
    }
  } else {
    return "Error: Invalid data, the element should be an array object more than 1 number.";
  }
}

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];
console.log(getAngkaTerbesarKedua(dataAngka));
