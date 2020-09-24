<template>
  <section class="boxed">
      <div class="section-link" id="rotation"></div>
      <div class="row align-items-center ">
        <div class="col-12 col-md-6 pr-md-5 order-2 order-md-1 my-5 my-md-0">
          <img
            src="~/assets/images/newsletter.png"
            alt=""
            class="img-fluid min-w-lg-600 f-md-right"
          />
        </div>
        <div class="col-12 col-md-6 pl-md-5 order-1 order-md-2">
          <div class="text-center text-md-left">
            <div class="icon-header">
              <div class="icon-wrap">
                <img src="~/assets/images/email.png" alt="email-icon" />
              </div>
            </div>
            <h2 class="headline-title-xl color-berry">Your <br />Rotation</h2>
          </div>
          <ul class="list-item-berry home-list home-description pt-4">
            <li>
              Configure your rotation schedule for the year
            </li>
            <li>
              Receive personalized weekly reading lists via email including:
            </li>
          </ul>
          <ul class="pl-5 custom-icon-list home-list-icons color-berry mt-5">
            <li>
              <span>
                <i class="fas fa-question-circle"></i>
                Questions
              </span>
            </li>
            <li>
              <span>
                <i class="fas fa-book"></i>
                Textbook chapters
              </span>
            </li>
            <li>
              <span>
                <i class="fas fa-video"></i>
                Surgery videos
              </span>
            </li>
            <li>
              <span>
                <i class="fas fa-microphone-alt"></i>
                Podcast audio (learn while you exercise!)
              </span>
            </li>
            <li>
              <span>
                <i class="fas fa-newspaper"></i>
                Landmark research articles
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: "SectionYourRotation",
};
</script>
