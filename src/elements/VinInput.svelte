<script lang="ts">
  import { vin } from "./../store";

  function replaceAmbiguosChars() {
    vin.update((vin) =>
      vin.replace(/o/i, "0").replace(/i/i, "1").replace(/q/i, "9").toUpperCase()
    );
  }
</script>

<section>
  <label for="vin">VIN</label>
  <input id="vin" bind:value={$vin} on:input={replaceAmbiguosChars} placeholder="Enter VIN here" />
</section>

<style>
  section {
    display: flex;
    flex-flow: column;
  }

  label {
    align-self: flex-start;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1;
    border-bottom: 2px solid var(--color-main);
    color: var(--color-back);
    padding: .25rem .66rem;
    background: var(--color-star);
    margin-left: .25rem;
  }

  input {
    appearance: none;
    padding: 0.5rem 0.5rem;
    font-family: monospace;
    font-size: 1.5rem;
    border: 2px solid var(--color-main);
    color: var(--color-fore);
    background: var(--color-back);
  }

  input:focus {
    outline: none;
  }
</style>
