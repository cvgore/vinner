import { derived, readable, writable } from "svelte/store";
import fancyTitles from './data/fancyTitles.json';
import { Database } from "./vin/database";

export const vin = writable('');

export const vinValidationMsg = derived(vin, $vin => {
    // todo: validate vin

    // ignore empty vin
    if ($vin.length === 0) {
        return 'VIN number cannot be empty';
    }

    if ($vin.length !== 17) {
        return 'VIN number must be 17 characters long';
    }

    return '';
});

export const showValidationMsg = writable(false);

export const vinValid = derived(vinValidationMsg, $msg => $msg.length === 0);

export const decodeVinButtonText = readable('', set => {
    const [roll, the, dice] = crypto.getRandomValues(new Uint8Array(3));
    return roll > the ? set('Decipher VIN') : set(fancyTitles[dice % fancyTitles.length]);
});

export const database = readable(new Database());