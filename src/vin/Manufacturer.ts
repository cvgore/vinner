export class Manufacturer {
    constructor(
        protected _name: string,
        protected _country: string,
        protected _code: string
    ) { }

    get name(): string {
        return this._name;
    }

    get country(): string {
        return this._country;
    }

    get code(): string {
        return this._code;
    }

    get 
}