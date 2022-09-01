<template>
  <div class="System">
    <div class="doc-content markdown-body" v-html="docEnString">
    </div>
  </div>
</template>

<script>
import doc_en from '@/assets/MD/Ceres-ABI-Reference.md'
export default {
  name: 'System',
  data() {
    return {
      docEnString: doc_en
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.System {
  width: 100%;
  .doc-content {
    width: 40%;
    margin: 0 auto;
  }
  /deep/ .markdown-body {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 980px;
    margin: 0 auto;
    padding: 45px;
    ul {
      padding-left: 25px;
      list-style-type: disc;
    }
  }
  @media (max-width: 767px) {
    .markdown-body {
      padding: 15px;
    }
  }
  @media screen and (max-width: 648px) {
    .doc-content {
      width: 90%;
    }
  }
}
</style>
