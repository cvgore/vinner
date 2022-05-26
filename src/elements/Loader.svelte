<span></span>

<style>
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