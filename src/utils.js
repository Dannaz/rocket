export const formattedDate = (operationDate) => {
    const day = convertToTwoCharacterRepresentation(operationDate.getDate()),
        month = convertToTwoCharacterRepresentation(operationDate.getMonth() + 1),
        year = operationDate.getFullYear().toString().slice(2);

    const hours = convertToTwoCharacterRepresentation(operationDate.getHours()),
        minutes = convertToTwoCharacterRepresentation(operationDate.getMinutes());

    const time = `${hours}:${minutes}`,
        date = `${day}:${month}:${year}`;

    return `${date} | ${time}`;

    function convertToTwoCharacterRepresentation(value) {
        return ("0" + value).substr(-2);
    }
};

export const compareOperationsDate = (operationA, operationB) => {
    return operationB.date - operationA.date
};