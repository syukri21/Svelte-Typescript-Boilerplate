<script lang="ts">
  import jQuery from "jquery";
  import "slick-carousel/slick/slick.min.js";

  import "../sass/slick-theme.scss";

  import { onMount } from "svelte";

  onMount(() => {
    jQuery("#slickCarousel").slick();
  });
</script>

<div class="hero has-background-primary has-text-white">
  <div class="section">
    <div class="container">
      <h1 class="is-6 ">Hello</h1>
      <div id="slickCarousel">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  </div>
</div>
