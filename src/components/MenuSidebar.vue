<script setup></script>

<template>
  <div class="nav-sidebar">
    <nav>
      <ul>
        <li>
          <span class="nav-icon"
            ><v-icon name="gi-bird-house" scale="1.5" fill="white" /></span
          >Home
        </li>
        <li>
          <span class="nav-icon"
            ><v-icon
              name="md-accesstime-round"
              scale="1.25"
              fill="white" /></span
          >Timeline
        </li>
        <li>
          <span class="nav-icon"
            ><v-icon name="bi-person" scale="1.5" fill="white" /></span
          >Profile
        </li>
      </ul>
      <button class="new-tweet-btn">
        <span class="new-tweet-btn-feather"
          ><v-icon name="gi-feather" scale="1.5"
        /></span>
        <span class="new-tweet-btn-label">Tweet</span>
      </button>
    </nav>
  </div>
</template>
<style scoped>
.nav-sidebar {
  width: 100%;
  max-height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 2;
}

nav {
  height: 100%;
  width: 275px;
}

ul {
  font-size: 1.2rem;
  list-style: none;
  padding: 0;
}

li {
  border-radius: 25px;
  width: min-content;
  height: 50px;
  padding: 4px 30px 4px 10px;
  display: flex;
  align-items: center;
  transition: background-color 0.15s ease;
  margin-bottom: 0.5rem;
}

li:hover {
  background-color: rgba(255, 255, 255, 0.144);
}

.nav-icon {
  height: 26px;
  width: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 4px;
  margin-right: 18px;
}

.new-tweet-btn {
  border: 0;
  border-radius: 25px;
  background-color: #1d9bf0;
  color: white;
  cursor: pointer;
  width: 90%;
  height: 50px;
  padding: 0;
  transition: background-color 0.15s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.new-tweet-btn:hover {
  background-color: #1687d3;
}

.new-tweet-btn-label {
  font-weight: bold;
}

.new-tweet-btn-feather {
  width: 50px;
  height: 50px;
  display: none;
}

@media screen and (max-width: 1280px) {
  .nav-sidebar {
    width: 50%;
  }
  nav {
    width: 88px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .new-tweet-btn {
    width: 50px;
  }
  .new-tweet-btn-label {
    display: none;
  }
  .new-tweet-btn-feather {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media screen and (max-width: 1005px) {
  .nav-sidebar {
    flex-shrink: 4;
  }
}

@media screen and (max-width: 700px) {
  .nav-sidebar {
    width: 88px;
  }
}

@media screen and (max-width: 500px), (max-height: 500px) {
  .nav-sidebar {
    border-top: rgba(255, 255, 255, 0.384) 1px solid;
    position: absolute;
    bottom: 1%;
    height: 3.5rem;
    width: 100vw;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .new-tweet-btn,
  .new-tweet-btn-feather {
    width: 56px;
    height: 56px;
  }
  .new-tweet-btn {
    border-radius: 28px;
    position: absolute;
    bottom: 135%;
    right: 5%;
  }
}
</style>