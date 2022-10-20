<script setup>
// https://loading.io/css/
</script>

<template>
  <div class="load-wrapper">
    <div class="loader"></div>
  </div>
</template>

<style>
.load-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 35%;
}

.loader,
.loader:after {
  border-radius: 50%;
  width: 10em;
  height: 10em;
}
.loader {
  margin: 60px auto;
  font-size: 6px;
  text-indent: -9999em;
  border-top: 1.1em solid #1d9bf033;
  border-right: 1.1em solid #1d9bf033;
  border-bottom: 1.1em solid #1d9bf033;
  border-left: 1.1em solid #1d9bf0;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
