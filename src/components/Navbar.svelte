<script lang="ts">
  import { link } from "svelte-spa-router";
</script>

<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="container">
    <div class="navbar-brand">
      <a class="navbar-item" alt="#" href="https://bulma.io">
        <h1 class="title is-4 has-text-primary">The Lake</h1>
      </a>
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        alt="#"
        href="/">
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">

      <div class="navbar-end">
        <a class="navbar-item" href="/home" use:link>Home</a>
        <a class="navbar-item" href="/documentation" use:link>Documentation</a>

        <div class="navbar-item has-dropdown is-hoverable is-primary">
          <a class="navbar-link" href="/home" use:link>More</a>
          <div class="navbar-dropdown">
            <a class="navbar-item" href="/home" use:link>Home</a>
            <a class="navbar-item" href="/documentation" use:link>
              Documentation
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
