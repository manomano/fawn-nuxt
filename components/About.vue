<template>
  <div id="about" class="block">
    <div class="left">
      <div><span class="title-big">About us</span></div>
    </div>
    <div class="right">
      <div class="paragraph-container">
        <p class="paragraph">
          FAWN is a communication agency, who specialise in digital marketing,
          design and web-development/FAWN is a communication agency, who
          specialise in digital marketing, design and web-developmentFAWN is a
          communication agency, who specialise in digital marketing, design and
          web-developmentFAWN is a communication agency, who specialise in
          digital marketing, design and web-development
        </p>
        <div class="learn-more">
          <div class="elipse"></div>
          Learn more
        </div>
      </div>
    </div>
    <div class="image-block"></div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.left {
  position: relative;
  div {
    position: absolute;
    left: 25%;
    top: 20%;
  }
}
.right {
  position: relative;
  .paragraph-container {
    width: 40rem;
    position: absolute;
    height: 100%;
    top: 20%;
  }
}
.image-block {
  grid-column: 1/3;
  grid-row: 2/3;
  background-color: #ebebeb;
}
</style>
