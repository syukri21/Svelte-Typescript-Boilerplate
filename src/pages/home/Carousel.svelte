<script lang="ts">
  import jQuery from "jquery";
  import "slick-carousel/slick/slick.min.js";
  import "../../sass/slick-theme.scss";

  import Icon from "fa-svelte";
  import { faPlay } from "@fortawesome/free-solid-svg-icons/faPlay";
  import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
  import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";

  import { onMount } from "svelte";

  onMount(() => {
    jQuery("#slickCarousel").slick({
      prevArrow: jQuery("#carouselLeft"),
      nextArrow: jQuery("#carouselRight"),
      dots: true,
      dotsClass: "position-absolute slick-dots position-dot"
    });
    console.log("TCL: jQ", jQuery("#carouselLeft"));
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

  .to-right-bottom {
    bottom: 20px;
    right: 20px;
  }

  .circle {
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    flex: 1;
    height: 100%;
    width: 100%;
  }

  .circle-container {
    height: 450px;
    width: 450px;
    border-radius: 50%;
  }
</style>

<div class="position-relative">
  <div class="circle">
    <div class="circle-container has-background-white" />
  </div>
  <div id="slickCarousel">
    <div class="container-carousel-item">
      <div class="columns height-fit">
        <div class="column height-fit">
          <img src="./images/black-suit.png" alt="#" />
        </div>
        <div class="column height-fit d-flex align-items-center">
          <div class="d-flex flex-column max-width">
            <h5 class="is-size-5">Men Accessories</h5>
            <h1 class="is-size-1">Always Be A Gentelman.</h1>
            <p class="is-size-6 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, eos
              sed? Placeat nihil distinctio similique earum reprehenderit. Optio
              consectetur.
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
  <div class="position-absolute to-right-bottom">
    <button class="is-size-5 button is-priamry is-light" id="carouselLeft">
      <Icon class=" has-text-link " icon={faChevronLeft} />
    </button>
    <button class="is-size-5 button is-orimary is-light" id="carouselRight">
      <Icon class=" has-text-link" icon={faChevronRight} />
    </button>
  </div>
</div>
