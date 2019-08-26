<template>
  <Layout :show-logo="false">
    <!-- Author intro -->
    <Author :show-title="true" />

    <!-- List posts -->
    <div class="posts">
      <PostCard
        v-for="edge in $page.posts.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
    </div>
  </Layout>
</template>

<page-query>
{
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        path
        tags {
          id
          title
          path
        }
        author
        date (format: "D/MM/YYYY")
        timeToRead
        description
        image (width: 770, height: 380, blur: 10)
        ...on Post {
            id
            title
            path
        }
      }
    }
  }
}
</page-query>

<script>
import Author from '~/components/Author.vue';
import PostCard from '~/components/PostCard.vue';

const META_TITLE = 'GoCode Blog - גו-קוד בלוג - קוד, קוד ועוד קצת קוד';
const META_DESCRIPTION =
  'בלוג טכנולוגי לחלוטין בפיתוח ווב. Angular/React/Vue.js/Svelte. כולם חיים כאן בשלום, כולל פיתוח למובייל בעזרת Flutter, Ionic, Cordova, Quasar, NativeScript, ReactNative ועוד ועוד...';

export default {
  components: {
    Author,
    PostCard
  },
  metaInfo() {
    return {
      title: META_TITLE,
      meta: [
        {
          name: 'description',
          content: META_DESCRIPTION
        },
        { property: 'og:title', content: META_TITLE },
        { property: 'og:description', content: META_DESCRIPTION },
        { property: "og:image", content: require("~/assets/images/logo.png") },        
      ]
    };
  }
};
</script>
