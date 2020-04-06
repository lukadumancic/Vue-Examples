<template>
  <div class="col-sm-6 col-md4 col-lg-3">
    <div class="panel-default panel-body quote">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.panel-body {
  font-family: "Arizonia", cursive;
  font-size: 24px;
  color: #6e6e6e;
}
.quote {
  cursor: pointer;
}

.quote:hover {
  background-color: #ffe2e2;
}
</style>