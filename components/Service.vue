<template>
  <div class="service">
    <div class="left">
      <div>
        <span class="title-big">Services </span>
      </div>
    </div>
    <div class="right">
      <div class="p-container">
        <p class="paragraph">
          FAWN is a communication agency, who specialise in digital marketing,
          design and web-development. FAWN is a communication agency, who
          specialise in digital marketing, design
        </p>
      </div>
    </div>
    <div class="service-list">
      <div class="flex">
        <div class="num">
          <div class="elipse"></div>
          01
        </div>

        <div class=""><div class="title-big">Marketing</div></div>
      </div>
    </div>
    <div class="right">фывфывыфвыфв</div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.service-list {
  padding-left: 25%;
}
.flex {
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 86%;
  border: 1px green;
  justify-items: stretch;
  justify-content: space-between;
}
.service {
  @include standardGridContainer;
  row-gap: 25%;
  border: 1px solid red;
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
    .p-container {
      width: 40rem;
      position: absolute;
      height: 100%;
      top: 20%;
    }
  }
}

.num {
  width: 7rem;
  height: 5rem;
  position: relative;
  color: white;
  font-size: 2rem;
  padding-top: 2rem;
  text-align: center;
  .elipse {
    position: absolute;
    top: 30%;
    left: 0;
    border: 1px solid black;
    border-top-left-radius: 50% 50%;
    border-bottom-left-radius: 50% 50%;
    border-bottom-right-radius: 50% 50%;
    border-top-right-radius: 50% 50%;
    transform: rotate(172deg);
    width: 100%;
    height: 3rem;
    background: black;
    z-index: -1;
  }
}
</style>
