<template>
  <div
    class="col-12 col-md-6 col-lg-6 col-xl-4 mb-30"
    v-for="item in blogs"
    :key="item.id"
  >
    <article
      class="post-container"
      data-bs-toggle="modal"
      data-bs-target="#blogModal"
      @click="handleBlogItem(item.id)"
    >
      <div class="post-thumb">
        <div class="d-block position-relative overflow-hidden">
          <nuxt-img :src="item.img" class="img-fluid" alt="item.title" />
        </div>
      </div>
      <!-- {/* End .thumb */} -->
      <div class="post-content">
        <div class="entry-header">
          <h3>{{ item.title }}</h3>
        </div>
        <div class="entry-content open-sans-font">
          <p>
            {{ item.description1.slice(0, 110) }}
          </p>
        </div>
      </div>
      <!-- {/* End .post-content */} -->
    </article>
  </div>

  <!-- Modal -->
  <div
    class="modal fade"
    id="blogModal"
    tabindex="-1"
    aria-labelledby="blogModal"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg blog-modal"
    >
      <div class="modal-content">
        <button class="close-modal" data-bs-dismiss="modal" aria-label="Close">
          <nuxt-img src="/assets/images/cancel.svg" alt="close image" />
        </button>
        <!-- close modal -->
        <div class="modal-body">
          <div class="box_inner about">
            <div class="box_inner blog-post">
              <!-- {/* Article Starts */} -->
              <article>
                <div class="title-section text-left text-sm-center">
                  <h1>Post <span>Details</span></h1>
                  <span class="title-bg">posts</span>
                </div>
                <!-- {/* Meta Starts */} -->

                <div class="meta open-sans-font">
                  <span> <i class="fa fa-user"></i> {{ blog.commentor }} </span>
                  <span class="date">
                    <i class="fa fa-calendar"></i> {{ blog.date }}
                  </span>
                  <span> <i class="fa fa-tags"></i> {{ blog.tag }} </span>
                </div>
                <!-- {/* Meta Ends */} -->

                <!-- {/* Article Content Starts */} -->
                <h1>{{ blog.title }}</h1>
                <img :src="blog.img" class="img-fluid" alt="Blog" />
                <div class="blog-excerpt open-sans-font pb-5">
                  <p>
                    {{ blog.description1 }}
                  </p>
                  <div class="quotebox">
                    <div class="icon">
                      <nuxt-img
                        src="/assets/images/blog/quote.svg"
                        alt="blog quote"
                      />
                    </div>
                    <p>
                      {{ blog.description2 }}
                    </p>
                  </div>
                  <p>
                    {{ blog.description3 }}
                  </p>
                  <p>
                    {{ blog.description4 }}
                  </p>
                </div>
                <!-- {/* Article Content Ends */} -->
              </article>
              <!-- {/* Article Ends */} -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Modal -->
</template>

<script>
import blogMixin from "@/mixin/blog-mixin";

export default {
  name: "FancyBlogs",
  mixins: [blogMixin],
  data() {
    return {
      blog: {},
    };
  },
  methods: {
    handleBlogItem(id) {
      this.blog = this.blogs.find((item) => item.id == id);
    },
  },
};
</script>

<style lang="scss" scoped></style>
