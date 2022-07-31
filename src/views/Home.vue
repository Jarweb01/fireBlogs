<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post, idx) in sampleBlogPost" :key="idx" />
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue";

export default {
  name: "Home",
  components: {
    BlogPost,
  },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome!",
        blogPost:
          "Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post",
        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlogPost: [
        {
          blogTitle: "This is a Filler Title!",
          blogHTML: "This is a filler blog post title!",
          blogCoverPhoto: "beautiful-stories",
        },
        {
          blogTitle: "This is a Filler Title!",
          blogHTML: "This is a filler blog post title!",
          blogCoverPhoto: "designed-for-everyone",
        },
      ],
    };
  },
};
</script>
