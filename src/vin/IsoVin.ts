import { Manufacturer } from "./Manufacturer";
import { decipherModelYearFromVin } from "./utils";
import { Vin } from "./Vin";

export class IsoVin extends Vin {
    static get splitStrategy(): number[] {
        return [3, 6, 8];
    }

    get manufacturer(): Manufacturer {
        return Manufacturer.fromCode(this.worldManufacturerIdentifier);
    }
    get worldManufacturerIdentifier(): string {
        return this.parsed[0];
    }
    get vehicleDescriptionSection(): string {
        return this.parsed[1];
    }
    get vehicleIdentifierSection(): string {
        return this.parsed[2];
    }
    get largeManufacturer(): boolean {
        return this.worldManufacturerIdentifier[2] === '9';
    }
    get modelYear(): number {
        return decipherModelYearFromVin(this.vin);
    }
    get plantCode(): null {
        return null;
    }
    get plantName(): null {
        return null;
    }
    get sequentialNumber(): string {
        return this.parsed[2];
    }
    get checkDigit(): null {
        return null;
    }
}