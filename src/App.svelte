<script lang="ts">
  import Footer from "./lib/Footer.svelte";
  import VinValidation from "./lib/VinValidation.svelte";
</script>

<header>
  <h1>🚗 VINn&epsilon;r</h1>
</header>

<main>
  <VinValidation />
</main>

<Footer />

<style>
  /* BASE / RESET */
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
  }

  :global(a) {
    color: var(--color-main);
  }

  main {
    flex: 1;
    align-self: center;
    padding: 2rem 0;
    width: 100%;
  }

  header {
    align-self: center;
  }

  h1 {
    color: var(--color-main);
    font-size: 3rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 1rem auto;
    max-width: 14rem;
  }

  /* MOBILE */

  @media (min-width: 480px) {
    h1 {
      max-width: none;
      font-size: 4rem;
    }
  }

  /* DARK MODE */

  @media (prefers-color-scheme: dark) {
    :global(:root) {
      --color-fore: #fff;
      --color-back: #000;
      --color-main: #bcffa1;
      --color-star: #9ed887;
    }
  }

  /* LIGHT MODE */

  @media (prefers-color-scheme: light) {
    :global(:root) {
      --color-back: #fff;
      --color-fore: #000;
      --color-main: #e0ee22;
      --color-star: #9ed887;
    }
  }
</style>
