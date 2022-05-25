<script lang="ts">
    import MessageBox from "./MessageBox.svelte";

    import VinInput from "./VinInput.svelte";

    let vin: string;
    let invalidReason: string | null;

    function invalid(reason) {
        invalidReason = reason;
        return false;
    }

    function valid() {
        invalidReason = null;
        return true;
    }

    function validate() {
        if (!vin || vin.length !== 17) {
            return invalid("VIN number must be 17 characters long");
        }

        return valid();
    }
</script>

<section>
    <VinInput bind:vin />
    <button on:click={validate}>Cast unknown spell</button>
    {#if invalidReason}
        <MessageBox>{invalidReason}</MessageBox>
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

    button:active {
        background: var(--color-star);
    }

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }
</style>
