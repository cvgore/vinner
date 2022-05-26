import { Dexie, Table } from "dexie";

export interface Manufacturer {
    code: string;
    name: string;
    country: string;
}

export interface VinCountryCode {
    code: string;
    type: 'country' | 'region' | 'continent';
    name: string;
}

export interface ManufacturerPlant {
    manufacturerCode: string;
    plantCode: string;
    country: string;
    city: string;
}

export class Database extends Dexie {
    public manufacturers!: Table<Manufacturer, string>;
    public vinCountryCodes!: Table<VinCountryCode, string>;
    public manufacturerPlants!: Table<ManufacturerPlant, string[]>;

    constructor() {
        super('vinner');

        this.version(1).stores({
            manufacturers: 'code',
            vinCountryCodes: 'code',
            manufacturerPlants: '[manufacturerCode+plantCode]' 
        });
    }
}
