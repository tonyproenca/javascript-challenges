export const validate = (number) => {
    let splitedNumbers = number.toString().split("");
    let result = 0;
    for (let index = 0; index < splitedNumbers.length; index++) {
        result += Math.pow(splitedNumbers[index], splitedNumbers.length);
    }
    return result === number;
}