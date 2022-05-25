export const VIN_FILL_CHAR = 'Z';
export const VIN_MODEL_YEAR_ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
export const VIN_ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

export function decipherModelYearFromVin(vin: string): number {
    const a = vin[6];
    const b = vin[9];

    if (!isNaN(parseInt(a))) {
        return VIN_MODEL_YEAR_ALPHABET.indexOf(b) + 1980;
    }

    return VIN_MODEL_YEAR_ALPHABET.indexOf(b) + 2010;
}