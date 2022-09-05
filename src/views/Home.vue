<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post, idx) in sampleBlogPost" :key="idx" />
    <div class="blogCardWrap">
      <div class="container">
        <h3>View More Recent Blogs</h3>
        <div class="blogCards">
          <BlogCard
            v-for="(post, index) in sampleBlogCards"
            :key="index"
            :post="post"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue";
import BlogCard from "../components/BlogCard.vue";

export default {
  name: "Home",
  components: {
    BlogPost,
    BlogCard,
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
      sampleBlogCards: [
        {
          blogTitle: "Blog card #1",
          blogCoverPhoto: "stock-1",
          blogDate: "May 1, 2022",
        },
        {
          blogTitle: "Blog card #2",
          blogCoverPhoto: "stock-2",
          blogDate: "May 1, 2022",
        },
        {
          blogTitle: "Blog card #3",
          blogCoverPhoto: "stock-3",
          blogDate: "May 1, 2022",
        },
        {
          blogTitle: "Blog card #4",
          blogCoverPhoto: "stock-4",
          blogDate: "May 1, 2022",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.blogCardWrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}
</style>
