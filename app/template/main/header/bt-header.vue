<template lang="html">
  <div class="content-wireframe">
    <div class="circle-center">
    </div>
    <div class="">
      <div class="small-square">

      </div>
      <div class="small-square">

      </div>
      <div class="small-square">

      </div>
      <div class="small-square">

      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.content-wireframe {
    padding: 30px 20px;
    @include container(720px);
}

.circle-center {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    background-color: #d8d8d8;
    border-radius: 50%;
    margin-bottom: 20px;
}
.small-square {
    margin: 15px auto;
    width: 150px;
    height: 30px;
    background-color: #d8d8d8;
    @include breakpoint($d_small) {
        @include gallery(4,30px);
    }
}
</style>
