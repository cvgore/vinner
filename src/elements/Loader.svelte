<script lang="ts">
    import MessageBox from "./MessageBox.svelte";

    export let statusText: string | undefined;
</script>

<section>
    <span />
    <hr />
    {#if statusText}
        <MessageBox style="info">{statusText}</MessageBox>
    {/if}
</section>

<style>
    section {
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
    }

    hr {
        border: none;
        margin: 1rem 0;
    }

    span {
        display: block;
        width: 2rem;
        height: 2rem;
        border: 4px solid var(--color-main);
        border-bottom: 4px solid transparent;
        border-radius: 100%;
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
</style>
