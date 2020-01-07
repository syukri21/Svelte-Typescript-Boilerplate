<script lang="ts">
  import Router from "svelte-spa-router";

  import Navbar from "./components/Navbar.svelte";
  import { routes } from "./routes";
  // export let url = "";
</script>

<main>
  <Navbar />
  <div class="section">
    <div class="container">
      <Router {routes} />
    </div>
  </div>
</main>
