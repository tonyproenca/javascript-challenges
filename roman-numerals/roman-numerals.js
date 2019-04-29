export const toRoman = (number) => {
    let huns = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    let tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    let units = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    let response = "";

    while (number >= 1000) {
        response += "M"
        number -= 1000;
    }

    let size = number.toString().length;

    if (size >= 3) {
        response += huns[parseInt(number/100)];
        number = number % 100;
        response += tens[parseInt(number/10)];
        number = number % 10;
        response += units[number];
    } else if (size == 2) {
        response += tens[parseInt(number/10)];
        number = number % 10;
        response += units[number];
    } else {
        response += units[number];
    }

    return response;
} 