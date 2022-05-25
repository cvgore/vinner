<script lang="ts">
  export let vin: string;

  function replaceAmbiguosChars() {
    vin = vin
      .replace(/o/i, '0')
      .replace(/i/i, '1')
      .replace(/q/i, '9')
      .toUpperCase()
  }
</script>

<input bind:value={vin} on:input="{replaceAmbiguosChars}">

<style>
  input {
    appearance: none;
    padding: .5rem .5rem;
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
