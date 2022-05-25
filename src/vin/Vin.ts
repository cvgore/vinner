import type { Manufacturer } from "./Manufacturer";

export abstract class Vin {
    protected parsed: string[];

    constructor(protected vin: string) {
        this.parsed = Vin.splitStrategy.map((len, i) => this.vin.slice(Vin.splitStrategy.slice(0, i).reduce((a, v) => a + v, 0), len));
    }

    static get splitStrategy(): number[] {
        throw new Error("splitStrategy is not implemented");
    }

    get vinNumber(): string {
        return this.vin;
    }

    abstract get manufacturer(): Manufacturer;

    abstract get worldManufacturerIdentifier(): string;

    abstract get vehicleDescriptionSection(): string;

    abstract get vehicleIdentifierSection(): string;

    abstract get largeManufacturer(): boolean|null;

    abstract get modelYear(): number|null;

    abstract get plantCode(): string|null;

    abstract get plantName(): string|null;

    abstract get sequentialNumber(): string;

    abstract get checkDigit(): string|null;
}