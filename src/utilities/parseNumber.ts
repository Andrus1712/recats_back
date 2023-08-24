export const parsenumber = (value: string | number): number | undefined => {
    if (typeof value == 'number') {
        return value;
    }
    const parsedNumber = Number(value);
    if (!isNaN(parsedNumber)) {
        return parsedNumber;
    }

    return undefined;
};
