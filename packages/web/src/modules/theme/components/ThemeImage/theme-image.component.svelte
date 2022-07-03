<div class="image-container">
  <slot />
</div>

<style lang="scss">
  .image-container {
    display: flex;
    align-items: center;
    justify-content: center;

    max-width: 320px;
    max-height: 230px;

    color: var(--color-primary);

    @media (max-width: 340px) {
      max-width: 200px;
      max-height: 110px;
    }
  }
</style>
