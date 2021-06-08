<template>
  <div class="">
    <header>
      <div class="header-container">
        <a class="logo">
          <svg
            width="30"
            height="28"
            viewBox="0 0 30 28"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.731934"
              y="4.85999"
              width="6.6738"
              height="20.0214"
              transform="rotate(-45 0.731934 4.85999)"
              fill="#3D3D3D"
            />
            <rect
              width="6.6738"
              height="20.0214"
              transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 29.0847 4.85999)"
              fill="#3D3D3D"
            />
            <rect
              width="6.6738"
              height="28.2969"
              transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 29.0286 27.0336)"
              fill="#3D3D3D"
            />
          </svg>
          <span class="logo">FAWN</span>
        </a>

        <a href="#home" class="menu">home</a>
        <a href="#about" class="menu inactive selected">about</a>
        <a href="#service" class="menu inactive">service</a>
        <a href="#works" class="menu inactive">works</a>
        <a href="#contact" class="menu">contact</a>
      </div>
    </header>

    <Nuxt />
  </div>
</template>
<script>
export default {}
</script>

<style scoped></style>
