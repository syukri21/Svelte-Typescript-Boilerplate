<script lang="ts">
  import jQuery from "jquery";
  import "slick-carousel/slick/slick.min.js";
  import "../sass/slick-theme.scss";

  import Icon from "fa-svelte";
  import { faPlay } from "@fortawesome/free-solid-svg-icons/faPlay";

  import { onMount } from "svelte";

  onMount(() => {
    jQuery("#slickCarousel").slick();
  });
</script>

<style>
  .container-carousel-item {
    width: 80%;
    height: 500px;
  }

  .height-fit {
    height: 100%;
  }

  .max-width {
    max-width: 450px;
  }
</style>

<div class="hero">
  <div class="section py-0 ">
    <div class="container has-background-primary">
      <div id="slickCarousel">
        <div class="container-carousel-item">
          <div class="columns height-fit">
            <div class="column height-fit" />
            <div class="column height-fit d-flex align-items-center">
              <div class="d-flex flex-column max-width">
                <h5 class="is-size-5">Men Accessories</h5>
                <h1 class="is-size-2">Always Be A Gentelman.</h1>
                <p class="is-size-6 mt-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                  eos sed? Placeat nihil distinctio similique earum
                  reprehenderit. Optio consectetur.
                </p>
                <div class="mt-4">
                  <button class="button is-link is-light is-uppercase">
                    <span class="icon">
                      <Icon icon={faPlay} />
                    </span>
                    <span>Shop Now</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container-carousel-item" />
        <div class="container-carousel-item" />
      </div>
    </div>
  </div>
</div>
