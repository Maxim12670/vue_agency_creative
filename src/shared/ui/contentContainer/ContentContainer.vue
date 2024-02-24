<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@import '../../styles/index.scss';

.container {
  display: block;
  margin: 0 auto;
  width: rem(340);
}

@media screen and (width: 1440px) {
  .container {
    width: rem(1240);
  }
}
</style>