<script lang="ts">
  import jQuery from "jquery";
  import "slick-carousel/slick/slick.min.js";

  import "../sass/slick-theme.scss";
  import Lake1 from "../assets/thelake.jpg";
  import Lake2 from "../assets/thelake2.jpg";
  import Lake3 from "../assets/thelake3.jpg";

  import { onMount } from "svelte";

  onMount(() => {
    jQuery("#slickCarousel").slick();
  });
</script>

<style>
  .container-image {
    width: 100%;
    height: 500px;
  }

  .image {
    object-fit: fill;
    width: 100%;
    height: auto;
  }
</style>

<div class="hero has-background-primary has-text-white">
  <div class="section py-0">
    <div class="container">
      <div id="slickCarousel">
        <div class="container-image">
          <img class="image" src={Lake1} alt="#" />
        </div>
        <div class="container-image">
          <img class="image" src={Lake2} alt="#" />
        </div>
        <div class="container-image">
          <img class="image" src={Lake3} alt="#" />
        </div>
      </div>
    </div>
  </div>
</div>
