<template>
  <div class="post-meta" style="direction: rtl">
    פורסם <span v-if="post.author">ע״י {{ post.author }}</span> ב:
    {{ post.date }}
    <template v-if="post.timeToRead">
      |
      <strong direction="rtl">{{ post.timeToRead }} דקה/ות קריאה</strong>
    </template>
  </div>
</template>

<script>
export default {
  props: ['post']
};
</script>

<style lang="scss">
.post-meta {
  font-size: 0.8em;
  opacity: 0.8;
}
</style>
