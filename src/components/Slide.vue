<template>
  <splide :options="options">
    <splide-slide>
      <img src="../assets/logo.png" />
    </splide-slide>
    <splide-slide>
      <img src="../assets/logo.png" />
    </splide-slide>
    <splide-slide>
      <img src="../assets/logo.png" />
    </splide-slide>
  </splide>
</template>

<script>
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
export default {
  name: "Slide",
  data() {
    return {
      options: {
        tpye: "loop",
        height: "9rem",
        autoWidth: true,
        focus: "center",
        padding: {
          right: "5rem",
          left: "5rem",
        },
      },
    };
  },
};
</script>



<style>
</style>