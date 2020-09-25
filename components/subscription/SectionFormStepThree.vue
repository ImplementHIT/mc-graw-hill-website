<template>
  <div
    class="tab-pane fade"
    :class="{ active: form.step == 3, show: form.step == 3 }"
    id="customize-tab"
  >
    <div class="row">
      <div class="col-12 col-md pr-md-5 text-center">
        <form class="mx-auto subscription-form bg-white color-dark">
          <h2 class="headline-title-sm m-0 color-berry">
            Personilization
          </h2>
          <!-- split -->
          <div class="split-berry my-4"></div>
          <div class="row align-items-center text-left">
            <div class="col-12 mt-3 mt-md-0">
              <form>
                <div class="my-4">
                  <div class="p-5 my-4 bg-light">
                    <div class="form-group ">
                      <p class="headline-title-xs color-berry">
                        OPTONAL: ABSITE Performance Repot
                      </p>
                      <div class="mb-4">
                        <div class="row">
                          <div class="col-auto p-0">
                            <i
                              class="far fa-file-pdf size-md mr-2 color-berry"
                            ></i>
                          </div>
                          <div class="col">
                            <label for="upload-pdf">
                              Secure upload and storage of your ABSITE score
                              performance report (PDF only). Your personal
                              information will never be shared or sold. Your
                              report is used to create a personalized 6-month
                              ABSITE preparation plan, including daily
                              questions, weekly quizzes, and quarterly practice
                              exams all focused on your previous ABSITE
                              performance.
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="custom-file">
                        <input
                          type="file"
                          class="custom-file-input"
                          id="upload-pdf"
                          aria-describedby="inputGroupFileAddon01"
                          ref="performanceFile"
                          @change="setFile('performance')"
                        />
                        <label class="custom-file-label" for="upload-pdf"
                          >Choose file</label
                        >
                      </div>
                    </div>
                  </div>

                  <div class="p-5 my-4 bg-light">
                    <div class="form-group ">
                      <p class="headline-title-xs color-berry">
                        OPTONAL: Case Logs
                      </p>
                      <div class="mb-4">
                        <div class="row">
                          <div class="col-auto p-0">
                            <i
                              class="far fa-file-pdf size-md mr-2 color-berry"
                            ></i>
                          </div>
                          <div class="col">
                            <label for="upload-csv">
                              Secure upload and storage of your ABSITE score
                              performance report (PDF only). Your report is used
                              to personalize your curriculum throughout the year
                              and will never be shared or sold.
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="custom-file">
                        <input
                          type="file"
                          class="custom-file-input"
                          id="upload-csv"
                          aria-describedby="inputGroupFileAddon01"
                          ref="logFile"
                          @change="setFile('logs')"
                        />
                        <label class="custom-file-label" for="upload-csv"
                          >Choose file</label
                        >
                      </div>
                    </div>
                  </div>

                  <div class="dropdown-divider my-5"></div>

                  <div>
                    <div class="form-group">
                      <label class="headline-title-xs color-berry">
                        Maximum number of questions per weekly rotation quiz
                        (5-20)
                      </label>
                      <p class="mb-4">
                        You will still have the option to create unlimited
                        quizzes on your own, and this will not impact your
                        6-month ABSITE preparation plan.
                      </p>
                      <div class="row">
                        <div class="col-md-6">
                          <select class="custom-select" v-model="form.quantity">
                            <option disabled selected>Select Quantity</option>

                            <option
                              v-for="num in questions"
                              :key="num"
                              :value="num"
                              >{{ num }}</option
                            >
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row mt-5 justify-content-center">
                  <div class="col-auto">
                    <a
                      class="back_page btn btn-outline-primary  btn-oval"
                      @click="$emit('back')"
                      >back</a
                    >
                  </div>
                  <div class="col-auto">
                    <a
                      class="next_page btn btn-secondary btn-oval"
                      @click="validate"
                      >Next</a
                    >
                  </div>
                </div>
              </form>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    form: Object,
  },
  data() {
    return {
      questions: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    };
  },
  methods: {
    setFile(type) {
      switch (type) {
        case "performance":
          this.form.file_absite_performance = this.$refs.performanceFile.files[0];
          break;
        case "logs":
          this.form.file_logs = this.$refs.logFile.files[0];
          break;
      }
    },
    validate() {
      this.form.step++;
    },
  },
};
</script>
