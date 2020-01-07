<script lang="ts">

</script>

<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" alt="#" href="https://bulma.io">
      <img
        src="https://bulma.io/images/bulma-logo.png"
        width="112"
        height="28"
        alt="#" />
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
    <div class="navbar-start">
      <a class="navbar-item" href="/home" alt="#">Home</a>

      <a class="navbar-item" href="/home" alt="#">Documentation</a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link" alt="#" href="/home">More</a>

        <div class="navbar-dropdown">
          <a class="navbar-item" alt="#" href="/home">About</a>
          <a class="navbar-item" alt="#" href="/home">Jobs</a>
          <a class="navbar-item" alt="#" href="/home">Contact</a>
          <hr class="navbar-divider" />
          <a class="navbar-item" alt="#" href="/home">Report an issue</a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary" href="/home" alt="#">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light" href="/home" alt="#">Log in</a>
        </div>
      </div>
    </div>
  </div>
</nav>
