<footer>
    ❤️ cvgore
    &bull;
    🐛 <a href="https://github.com/cvgore/vinner" target="_blank" rel="noopener noreferer">repository</a>
    &bull;
    <!-- svelte-ignore missing-declaration vite will inject/replace __APP_* with concrete values -->
    ⏲️ <abbr title="built at {new Date(__APP_BUILT_AT__).toUTCString()}">{__APP_VERSION__}</abbr>
</footer>

<style>
    footer {
        align-self: center;
        font-size: .85rem;
        padding: .5rem 0;
        font-weight: 700;
    }

    @media (min-width: 480px) {
        footer {
            font-size: .75rem;
        }
    }

    abbr {
        cursor: default;
    }
</style>