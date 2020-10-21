// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix || matrix !== undefined) {
        var lenA = matrix.length;

        var lenB = 0;

        for (var i = 0; i < lenA; i++) {
            if (matrix[i] !== undefined)
                if (lenB < matrix[i].length) lenB = matrix[i].length;
        }
    }

    var result = [];
    var count = 0;
    if (matrix || matrix !== "undefined") {
        for (var i = 0; i < lenA; i++) {
            if (matrix[i] !== undefined) {
                for (var j = 0; j < lenB; j++) {
                    if (i % 2 === 1) {
                        if (matrix[i][lenB - j - 1] > 0) {
                            result[count] = matrix[i][lenB - j - 1];
                            count++;
                        }
                    } else {
                        if (matrix[i][j] > 0) {
                            result[count] = matrix[i][j];
                            count++;
                        }
                    }
                }
            }
        }

        return result;
        return (
            lenA +
            " " +
            lenB +
            " " +
            result +
            "----->" +
            " one>" +
            matrix[0] +
            " two>" +
            matrix[1] +
            "three>" +
            matrix[2]
        );
    } else return lenA + " " + lenB + " " + result;
};
