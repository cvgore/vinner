<script lang="ts">
    import MessageBox from "./MessageBox.svelte";
    import VinInput from "./VinInput.svelte";
    import {
        showValidationMsg,
        vinValid,
        vinValidationMsg,
        vin,
        decodeVinButtonText,
    } from "./../store";

    vin.subscribe((_) => {
        showValidationMsg.set(false);
    });

    function startValidation() {
        showValidationMsg.set(true);
    }
</script>

<section>
    <VinInput />
    <button on:click={startValidation}>{$decodeVinButtonText}</button>
    {#if $showValidationMsg && !$vinValid}
        <MessageBox>{$vinValidationMsg}</MessageBox>
    {/if}
</section>

<style>
    button {
        appearance: none;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        border: 1px solid var(--color-back);
        outline: 2px solid var(--color-main);
        border-radius: 0;
        background: var(--color-main);
        cursor: pointer;
        font-weight: 700;
        text-transform: uppercase;
    }

    button:active, button:focus {
        background: var(--color-star);
    }

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }
</style>
