export function encode(string) {
  if (typeof string !== "string") {
    console.log("Only Strings in this function.");
    return null;
  }

  let arrayString = string.split("");

  let previousCaracter = "";
  let sequenceOfCaracters = "";
  let encodedString = "";

  arrayString.forEach(element => {
    if (previousCaracter == "") {
      previousCaracter = element;
      sequenceOfCaracters = element;
    } else if (element == previousCaracter) {
      sequenceOfCaracters += element;
    } else if (sequenceOfCaracters.length > 1) {
      encodedString += sequenceOfCaracters.length + previousCaracter;
      sequenceOfCaracters = element;
      previousCaracter = element;
    } else {
      encodedString += previousCaracter;
      previousCaracter = element;
    }
  });

  if (sequenceOfCaracters != "") {
    if (sequenceOfCaracters.length > 1) {
      encodedString += sequenceOfCaracters.length + previousCaracter;
    } else {
      encodedString += previousCaracter;
    }
  }

  return encodedString;
}

export function decode(string) {
    if (typeof string !== "string") {
        console.log("Only Strings in this function.");
        return null;
      }

  let arrayString = string.split("");
  let number = 0;
  let decodedString = "";
  let previousNumber = 0; 
  arrayString.forEach(element => {
    if (!isNaN(element) && element != " ") {
        if (previousNumber > 0) {
            let concatNumber = "" + previousNumber + element;
            number = Number(concatNumber);
        } else {
            number = element;
        }
      previousNumber = number;

    } else if ((isNaN(element) || element == " ") && number > 0) {
      for (var i = 0; i < number; i++) {
        decodedString += element;
      }
      number = 0;
      previousNumber = 0;
    } else {
      decodedString += element;
    }
  });
  return decodedString;
}

