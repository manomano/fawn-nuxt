<template>
  <div id="home" class="block">
    <div class="home__left">
      <p class="home__left__big">
        Experience design intelligent marketing for growing brands
      </p>
    </div>
    <div class="home__right">
      <div class="circle-container">
        <div class="home__right__text paragraph">
          Fawn is a communication agency, who specialize in digital marketing,
          design and web development
        </div>
        <div class="circle">discuss the project</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
#home {
  @include standardGridContainer;
}

.home {
  &__left {
    background: rgb(235, 235, 235);
    height: 80vh;
    position: relative;
    &__big {
      font-size: 8rem;
      line-height: 8.8rem;
      font-family: 'Akzidenz-groteskPro-mdex';
      font-weight: 500;
      width: 90rem;
      position: absolute;
      left: 25%;
      top: 18%;
      width: 130rem;
      margin: 0;
    }
  }
  &__right {
    &__text {
      font-size: 1.8rem;
      line-height: 3rem;
      width: 30rem;
      color: black;
      font-size: 2rem;
      line-height: 3rem;
      width: 30rem;
      color: black;
      grid-row: 6/7;
      grid-column: 1/2;
    }
  }
}
</style>
