<section>
    <span>!</span>
    <slot></slot>
</section>

<style>
    section {
        padding: .5rem 1rem;
        font-size: 1rem;
        border: 2px solid var(--color-main);
        border-bottom: 2px dashed var(--color-main);
        border-top: 2px dashed var(--color-main);
        display: flex;
        flex-direction: row nowrap;
        align-items: center;
    }

    span {
        flex: 0;
        margin-right: 1rem;
        font-weight: 900;
        color: var(--color-main);
    }
</style>