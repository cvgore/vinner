<script lang="ts">
  import Footer from "./elements/Footer.svelte";
  import VinData from "./elements/VinData.svelte";
  import VinValidation from "./elements/VinValidation.svelte";
  import Header from "./elements/Header.svelte";
  import { database, vinValid } from "./store";
  import Loader from "./elements/Loader.svelte";
  import { getVinCharsRange } from "./vin/utils";

  const loadAppHndl = loadApp();

  let statusText: string = '';

  async function loadApp() {
    if ((await $database.manufacturers.count()) === 0) {
      statusText = 'loading manufacturers...';
      const data = await fetch("/data/manufacturers.json");

      statusText = 'parsing manufacturers...';
      await $database.manufacturers.bulkPut(await data.json());
    }

    if ((await $database.vinCountryCodes.count()) === 0) {
      statusText = 'loading VIN country codes...';
      const data = await fetch("/data/vinCountryCodes.json");

      statusText = 'parsing VIN country codes...';
      const valuesGenerator = async function* () {
        for (const value of await data.json()) {
          for (const code of getVinCharsRange(value.start, value.end)) {
            yield {
              code,
              type: value.type,
              name: value.name || "",
            };
          }
        }
      };

      for await (const value of valuesGenerator()) {
        await $database.vinCountryCodes.put(value);
      }
    }
  }
</script>

<Header />

{#await loadAppHndl}
  <main>
    <figure>
      <Loader bind:statusText={statusText}/>
    </figure>
  </main>
{:then _}
  <main>
    <VinValidation />
    {#if $vinValid}
      <VinData />
    {/if}
  </main>
{/await}

<Footer />

<style>
  /* BASE / RESET */
  :global(*::before, *::after) {
    box-sizing: border-box;
  }
  
  :global(:root) {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: var(--color-fore);
    font-size: 14px;
  }

  :global(html, body) {
    margin: 0;
    padding: 0;
    height: 100%;
    background: var(--color-back);
  }

  /* STYLING */

  :global(#app) {
    display: flex;
    flex-flow: column nowrap;
    min-height: 100vh;
    padding: 0 1rem;
    position: relative;
  }

  :global(a) {
    color: var(--color-star);
  }

  main {
    flex: 1;
    padding: 2rem 0;
    width: 100%;
  }

  figure {
    display: flex;
    justify-content: center;
  }

  /* MOBILE */

  @media (min-width: 480px) {
    :global(#app) {
      padding: 0 2rem;
    }
  }

  /* DARK MODE */

  @media (prefers-color-scheme: dark) {
    :global(:root) {
      --color-fore: #fff;
      --color-back: #000;
      --color-main: #65d13a;
      --color-star: #36be00;
    }
  }

  /* LIGHT MODE */

  @media (prefers-color-scheme: light) {
    :global(:root) {
      --color-back: #fff;
      --color-fore: #000;
      --color-main: #65d13a;
      --color-star: #258300;
    }
  }
</style>
