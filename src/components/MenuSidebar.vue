<script setup></script>

<template>
  <div class="nav-sidebar">
    <nav>
      <ul>
        <li>Home</li>
        <li>Explore</li>
        <li>Profile</li>
      </ul>
      <button id="tweet-btn">Tweet</button>
    </nav>
  </div>
</template>

<style scoped>
.nav-sidebar {
  outline: red solid 1px;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

nav {
  height: 100%;
  width: 275px;
  outline: orange solid 1px;
}
#tweet-btn {
  background-color: #1d9bf0;
  color: white;
  width: 50%;
}
</style>
