export const VIN_FILL_CHAR = 'Z';
export const VIN_MODEL_YEAR_ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
export const VIN_ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

export function decipherModelYearFromVin(vin: string): number {
    const a = vin[6];
    const b = vin[9];

    if (!isNaN(parseInt(a))) {
        return VIN_MODEL_YEAR_ALPHABET.indexOf(b) + 1980;
    }

    return VIN_MODEL_YEAR_ALPHABET.indexOf(b) + 2010;
}

export function* getVinCharsRange(start: string, stop: string) {
    if (start.length === 1) {
        const length = VIN_ALPHABET.indexOf(stop[0] + '') - VIN_ALPHABET.indexOf(start[0] + '') + 1;

        for (let i = 0; i < length; i++) {
            yield VIN_ALPHABET[i + VIN_ALPHABET.indexOf(start[0] + '')];
        }
    } else {
        const range: string[] = [...getVinCharsRange(start[0], stop[0])];

        if (range.length === 1) {
            for (const char of getVinCharsRange(start[1], stop[1])) {
                yield `${range[0]}${char}`;
            }
        } else {
            const first = range.shift();
            const last = range.pop();
    
            for (const char of getVinCharsRange(start[1], VIN_ALPHABET[VIN_ALPHABET.length - 1])) {
                yield `${first}${char}`;
            }

            for (const char of range) {
                for (const vchar of VIN_ALPHABET) {
                    yield `${char}${vchar}`;
                }
            }
    
            for (const char of getVinCharsRange(VIN_ALPHABET[0], stop[1])) {
                yield `${last}${char}`;
            }
        }

       
    }
}