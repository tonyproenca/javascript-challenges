export function solve(x, y) {

    if (isNaN(x) || isNaN(y)) {
        return null
    }

    let points;

    let radius = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

    if (radius > 10) {
        points = 0;
    } else if (radius > 5 && radius <= 10) {
        points = 1;
    } else if (radius > 1 && radius <= 5) {
        points = 5;
    } else {
        points = 10;
    }

    return points;
}