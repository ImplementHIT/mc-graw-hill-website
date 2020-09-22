<template>
  <section class="subscription-section bg-berry text-white">
    <div class="boxed subscription-wrap">
      <div class="row">
        <div class="col">
          <div class="text-center boxed">
            <h2
              class="headline-title-xl color-secondary title-boxed title-font"
            >
              Subscription
            </h2>
            <p class=" headline-subtitle mx-w-800 mx-auto ">
              Complete the program, we guarantee you will beat the average
              ABSITE score for your PGY Level, and improve your ABSITE
              percentile
            </p>
          </div>

          <!-- steps -->
          <div>
            <div class="subscription-steps mx-w-500 mx-auto my-5">
              <ul class="nav nav-pills row justify-content-center" id="steps">
                <!-- ------------------------------------------------- -->
                <!-- agregar la clase "visited" al nav-item cuando el paso este finalizado -->

                <li
                  class="nav-item"
                  v-for="(step, k) in [
                    'payment',
                    'rotations',
                    'customize',
                    'onboarding',
                  ]"
                  :key="k"
                >
                  <div
                    class="nav-link"
                    :class="{
                      active: form.step == k + 1,
                      visited: form.step > k + 1,
                    }"
                    :id="step"
                    @click.prevent=""
                  >
                    <span>{{ k + 1 }}</span>
                  </div>
                </li>
              </ul>
            </div>
            <div
              class="tab-content mt-5 mx-w-800 mx-auto"
              id="content-subscription"
            >
              <div
                class="tab-pane fade"
                :class="{ active: form.step == 1, show: form.step == 1 }"
                id="payment-tab"
              >
                <div class="row">
                  <div class="col-12 col-md pr-md-5 text-center">
                    <form class="mx-auto subscription-form bg-white color-dark">
                      <h2 class="headline-title-sm m-0 color-berry">
                        Payment details
                      </h2>
                      <!-- split -->
                      <div class="split-berry my-4"></div>
                      <div class="row align-items-center text-left">
                        <div class="col-12 mt-3 mt-md-0">
                          <ValidationObserver ref="stepOne">
                            <form>
                              <div class="row my-4">
                                <div class="col-12 col-md-6">
                                  <div class="form-group">
                                    <label for="first-name" class=""
                                      >First Name</label
                                    >
                                    <div>
                                      <ValidationProvider
                                        v-slot="{ classes, errors }"
                                        name="First Name"
                                        rules="required|alpha"
                                      >
                                        <input
                                          type="text"
                                          class="form-control"
                                          :class="classes"
                                          id="first-name"
                                          v-model="form.first_name"
                                        />
                                        <span>{{ errors[0] }}</span>
                                      </ValidationProvider>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-12 col-md-6 ">
                                  <div class="form-group">
                                    <label for="last-name" class=""
                                      >Last Name</label
                                    >
                                    <div>
                                      <ValidationProvider
                                        v-slot="{ classes, errors }"
                                        name="Last Name"
                                        rules="required|alpha"
                                      >
                                        <input
                                          type="text"
                                          class="form-control"
                                          :class="classes"
                                          id="last-name"
                                          v-model="form.last_name"
                                        />
                                        <span>{{ errors[0] }}</span>
                                      </ValidationProvider>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-12 col-md-6 ">
                                  <div class="form-group">
                                    <label for="email" class="">Email</label>
                                    <div>
                                      <ValidationProvider
                                        v-slot="{ classes, errors }"
                                        name="Email"
                                        rules="required|email"
                                      >
                                        <input
                                          type="email"
                                          class="form-control"
                                          :class="classes"
                                          id="email"
                                          v-model="form.email"
                                        />
                                        <span>{{ errors[0] }}</span>
                                      </ValidationProvider>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-12 col-md-6 ">
                                  <div class="form-group">
                                    <label for="Phone" class=""
                                      >Mobile Phone</label
                                    >
                                    <div>
                                      <ValidationProvider
                                        name="Mobile Phone"
                                        :rules="{
                                          required: true,
                                          regex: /^[2-9]\d{2}[2-9]\d{2}\d{4}$/,
                                        }"
                                        v-slot="{ classes, errors }"
                                      >
                                        <input
                                          type="number"
                                          class="form-control"
                                          :class="classes"
                                          id="phone"
                                          v-model="form.mobile"
                                        />
                                        <span>{{ errors[0] }}</span>
                                      </ValidationProvider>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-12">
                                  <div class="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      id="sms_charge"
                                      value="true"
                                      v-model="
                                        form.carrier_sms_charge_understanding
                                      "
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="sms_charge"
                                      >Confirm understanding that charges may
                                      apply for SMS from their carrier</label
                                    >
                                    <span
                                      class="d-block text-danger"
                                      v-if="errors.sms_charge != ''"
                                      >{{ errors.sms_charge }}</span
                                    >
                                  </div>
                                </div>
                              </div>

                              <!-- split -->
                              <div class="dropdown-divider my-5"></div>

                              <div class="bg-light p-3">
                                <div class="form-group">
                                  <label
                                    >US or Foreign Medical School
                                    Graduate</label
                                  >
                                  <ValidationProvider
                                    v-slot="{ classes, errors }"
                                    name="Medical School"
                                    rules="required"
                                    vid="country"
                                  >
                                    <select
                                      class="custom-select"
                                      :class="classes"
                                      v-model="form.school_country"
                                    >
                                      <option disabled selected
                                        >Select one</option
                                      >
                                      <option value="US"
                                        >US Medical School Graduate</option
                                      >
                                      <option value="Foreign"
                                        >Foreign Medical School Graduate</option
                                      >
                                    </select>
                                    <span>{{ errors[0] }}</span>
                                  </ValidationProvider>
                                </div>

                                <div
                                  class="form-group"
                                  v-if="form.school_country == 'US'"
                                >
                                  <label>Select your School</label>
                                  <ValidationProvider
                                    v-slot="{ classes, errors }"
                                    name="School"
                                    rules="required_if:country,US"
                                  >
                                    <select
                                      class="custom-select"
                                      :class="classes"
                                      v-model="form.school_name"
                                    >
                                      <option disabled selected
                                        >Select school</option
                                      >
                                      <option
                                        v-for="(school, i) in schools"
                                        :value="school"
                                        :key="i"
                                        >{{ school }}</option
                                      >
                                    </select>
                                    <span>{{ errors[0] }}</span>
                                  </ValidationProvider>
                                </div>

                                <div class="form-group">
                                  <label for="year"
                                    >Medical school graduation year</label
                                  >
                                  <ValidationProvider
                                    v-slot="{ classes, errors }"
                                    name="Grad Year"
                                    rules="required|min_value:1980"
                                  >
                                    <input
                                      type="number"
                                      class="form-control col-3"
                                      :class="classes"
                                      min="1980"
                                      value="1980"
                                      id="Year"
                                      v-model="form.school_grad_year"
                                    />
                                    <span>{{ errors[0] }}</span>
                                  </ValidationProvider>
                                </div>

                                <div class="form-group">
                                  <label
                                    >Select your general surgery program</label
                                  >
                                  <ValidationProvider
                                    v-slot="{ classes, errors }"
                                    name="Surgery Program"
                                    rules="required"
                                  >
                                    <select
                                      class="custom-select"
                                      :class="classes"
                                      v-model="form.school_program"
                                    >
                                      <option disabled selected
                                        >Select Program</option
                                      >
                                      <option
                                        v-for="(program, i) in programs"
                                        :value="program"
                                        :key="i"
                                        >{{ program }}</option
                                      >
                                    </select>
                                    <span>{{ errors[0] }}</span>
                                  </ValidationProvider>
                                </div>

                                <div class="form-group">
                                  <label>Select your PGY level</label>
                                  <div>
                                    <ValidationProvider
                                      v-slot="{ classes, errors }"
                                      name="PGY level"
                                      rules="required"
                                    >
                                      <select
                                        class="form-control custom-select col-3"
                                        :class="classes"
                                        v-model="form.school_level"
                                      >
                                        <option disabled selected
                                          >Select one</option
                                        >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                      </select>
                                      <span>{{ errors[0] }}</span>
                                    </ValidationProvider>
                                  </div>
                                </div>
                              </div>
                              <div class="custom-control custom-checkbox my-4">
                                <input
                                  type="checkbox"
                                  class="custom-control-input"
                                  id="agree-eula"
                                  value="true"
                                  v-model="form.agree"
                                />
                                <label
                                  class="custom-control-label"
                                  for="agree-eula"
                                  >Agree to the
                                  <a
                                    href="https://www.dropbox.com/s/9zuritv63ke6pel/EULA%20McGraw%20Hill.docx?dl=0"
                                    target="_blank"
                                    class="color-berry color-secondary-hover transition-03"
                                    >End User License Agreement (EULA)</a
                                  ></label
                                >
                                <span
                                  class="d-block text-danger"
                                  v-if="errors.agree != ''"
                                  >{{ errors.agree }}</span
                                >
                              </div>

                              <div class="bg-berry-light p-3 mt-4">
                                {{ this.form.plan }} Month License
                                <span class="color-berry headline-title-sm ml-2"
                                  >${{ planPrice }}</span
                                >
                              </div>
                              <div class="row mt-5 justify-content-center">
                                <div class="col-auto">
                                  <a
                                    href="javascript:void(0)"
                                    @click.prevent="validateAndContinue"
                                    class="next_page btn-lg button btn-secondary btn-oval pointer"
                                    >Next</a
                                  >
                                </div>
                              </div>
                            </form>
                          </ValidationObserver>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div
                class="tab-pane fade"
                :class="{ active: form.step == 2, show: form.step == 2 }"
                id="rotations-tab"
              >
                <div class="row">
                  <div class="col-12 col-md pr-md-5 text-center">
                    <form class="mx-auto subscription-form bg-white color-dark">
                      <h2 class="headline-title-sm m-0 color-berry">
                        Define your rotations
                      </h2>
                      <!-- split -->
                      <div class="split-berry my-4"></div>
                      <div class="row align-items-center text-left">
                        <div class="col-12 mt-3 mt-md-0">
                          <form>
                            <p class="mt-4">
                              Add at least your first two rotations to get
                              started, you can modify them later.
                            </p>
                            <div class="my-4">
                              <label class="headline-title-xs color-berry"
                                >Rotations</label
                              >

                              <div
                                class="row"
                                v-for="(rot, i) in form.rotations"
                                :key="i"
                              >
                                <div class="col-12 col-md-3 px-md-2">
                                  <div class="form-group">
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="rotation-name-1"
                                      placeholder="Rotation name"
                                      v-model="form.rotations[i].name"
                                    />
                                  </div>
                                </div>
                                <div class="col-12 col-sm-6 col-md-3 px-md-2">
                                  <div class="form-group">
                                    <input
                                      type="date"
                                      class="form-control"
                                      id="star-date-1"
                                      placeholder="Start Date"
                                      v-model="form.rotations[i].date_start"
                                    />
                                  </div>
                                </div>
                                <div class="col-12 col-sm-6 col-md-3 px-md-2">
                                  <div class="form-group">
                                    <input
                                      type="date"
                                      class="form-control"
                                      id="end-date-1"
                                      placeholder="End Date"
                                      v-model="form.rotations[i].date_end"
                                    />
                                  </div>
                                </div>
                                <div class="col-12 col-md-3 px-md-2">
                                  <div class="form-group">
                                    <select
                                      class="custom-select"
                                      v-model="form.rotations[i].template"
                                    >
                                      <option disabled selected
                                        >Select Template</option
                                      >
                                      <option
                                        v-for="(program, p) in programsSorted"
                                        :key="p"
                                        :value="program"
                                        >{{ program }}</option
                                      >
                                    </select>
                                  </div>
                                </div>
                              </div>

                              <div class="mt-2">
                                <button
                                  class="btn bg-berry text-white"
                                  @click.prevent="AddRotation"
                                >
                                  <span class="fas fa-plus icon-sm mr-1"></span>
                                  Add Rotation
                                </button>
                              </div>

                              <div class="dropdown-divider my-4"></div>

                              <div class="bg-berry-light p-3">
                                12 Month License
                                <span class="color-berry headline-title-sm ml-2"
                                  >$299</span
                                >
                              </div>
                            </div>

                            <div class="row mt-5 justify-content-center">
                              <div class="col-auto">
                                <a
                                  href="javascript:void(0)"
                                  class="back_page btn btn-outline-primary  btn-oval"
                                  @click="backStep"
                                  >back</a
                                >
                              </div>
                              <div class="col-auto">
                                <a
                                  href="javascript:void(0)"
                                  class="next_page btn btn-secondary btn-oval"
                                  @click="validateAndContinue"
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
                                          Secure upload and storage of your
                                          ABSITE score performance report (PDF
                                          only). Your personal information will
                                          never be shared or sold. Your report
                                          is used to create a personalized
                                          6-month ABSITE preparation plan,
                                          including daily questions, weekly
                                          quizzes, and quarterly practice exams
                                          all focused on your previous ABSITE
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
                                    <label
                                      class="custom-file-label"
                                      for="upload-pdf"
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
                                          Secure upload and storage of your
                                          ABSITE score performance report (PDF
                                          only). Your report is used to
                                          personalize your curriculum throughout
                                          the year and will never be shared or
                                          sold.
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
                                    <label
                                      class="custom-file-label"
                                      for="upload-csv"
                                      >Choose file</label
                                    >
                                  </div>
                                </div>
                              </div>

                              <div class="dropdown-divider my-5"></div>

                              <div>
                                <div class="form-group">
                                  <label class="headline-title-xs color-berry">
                                    Maximum number of questions per weekly
                                    rotation quiz (5-20)
                                  </label>
                                  <p class="mb-4">
                                    You will still have the option to create
                                    unlimited quizzes on your own, and this will
                                    not impact your 6-month ABSITE preparation
                                    plan.
                                  </p>
                                  <div class="row">
                                    <div class="col-md-6">
                                      <select
                                        class="custom-select"
                                        v-model="form.quantity"
                                      >
                                        <option disabled selected
                                          >Select Quantity</option
                                        >

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
                                  @click="backStep"
                                  >back</a
                                >
                              </div>
                              <div class="col-auto">
                                <a
                                  class="next_page btn btn-secondary btn-oval"
                                  @click="validateAndContinue"
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

              <div
                class="tab-pane fade"
                :class="{ active: form.step == 4, show: form.step == 4 }"
                id="onboarding-tab"
              >
                <div class="row">
                  <div class="col-12 col-md pr-md-5 text-center">
                    <form class="mx-auto subscription-form bg-white color-dark">
                      <h2 class="headline-title-sm m-0 color-berry">
                        Onboarding
                      </h2>
                      <!-- split -->
                      <div class="split-berry my-4"></div>
                      <div class="row align-items-center text-left">
                        <div class="col-12 mt-3 mt-md-0">
                          <form>
                            <div class="my-4">
                              <div class="p-5 my-4 bg-berry-light">
                                <div class="form-group text-center">
                                  <img
                                    src="~/assets/images/subscription-2.png"
                                    alt=""
                                    class="img-fluid mb-2"
                                    style="max-width:300px;"
                                  />
                                  <h2 class="headline-title-sm">
                                    Thank you
                                  </h2>
                                  <p class="headline-subtitle">
                                    You have successfully subscribed!
                                  </p>
                                  <p>
                                    You will receive an email with instructions
                                    on how to get started, and best practices on
                                    how to leverage this program to support your
                                    training!
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div class="row mt-5 justify-content-center">
                              <div class="col-auto">
                                <a
                                  href="#"
                                  class="btn-lg btn-secondary btn-oval"
                                  >Finish</a
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
            </div>
          </div>

          <div class="text-center mt-2 boxed white-text p-5">
            <small>
              *Predictive Assessment Exams can only be purchased with a
              SmartBank Subscription. Bundled Savings not applicable with other
              discounts. To apply other promotional discounts, add the SmartBank
              you want below, then add Form A in the shopping cart, then apply
              your code.
            </small>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: "Subscription",
    };
  },
  data() {
    return {
      schools: [],
      programs: [],
      questions: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      plans: [6, 12, 24],
      newRotation: {
        name: "",
        date_start: "",
        date_end: "",
        template: "",
      },
      form: {
        plan: 6,
        step: 1,
        first_name: "",
        last_name: "",
        email: "",
        mobile: "",
        carrier_sms_charge_understanding: false,
        school_country: "",
        school_name: "",
        school_grad_year: "",
        school_program: "",
        school_level: "",
        agree: false,
        rotations: [
          { name: "", date_start: "", date_end: "", template: "" },
          { name: "", date_start: "", date_end: "", template: "" },
        ],
        file_absite_performance: null,
        file_logs: null,
        quantity: 5,
      },
      errors: {
        sms_charge: "",
        agree: "",
      },
    };
  },
  created() {
    this.form.plan =
      typeof this.$route.query.plan !== "undefined" &&
      this.plans.includes(parseInt(this.$route.query.plan))
        ? parseInt(this.$route.query.plan)
        : 6;

    this.$axios.$get("programs.json").then((res) => (this.programs = res));
    this.$axios.$get("schools.json").then((res) => (this.schools = res));
  },
  computed: {
    planPrice() {
      let price;
      switch (this.form.plan) {
        case 12:
          price = 299;
          break;
        case 24:
          price = 499;
          break;
        default:
          price = 199;
          break;
      }

      return price;
    },
    programsSorted() {
      return this.programs.sort();
    },
  },
  watch: {
    "form.carrier_sms_charge_understanding": function(val, oldVal) {
      if (val) this.errors.sms_charge = "";
    },
    "form.agree": function(val, oldVal) {
      if (val) this.errors.agree = "";
    },
  },
  methods: {
    backStep() {
      this.form.step = this.form.step == 1 ? 1 : this.form.step - 1;
    },
    validateAndContinue() {
      switch (this.form.step) {
        case 2:
          this.validateSecondStep();
          break;
        case 3:
          this.validateThirdStep();
          break;
        default:
          this.validateFirstStep();
          break;
      }
    },
    AddRotation() {
      this.form.rotations.push({
        name: "",
        date_start: "",
        date_end: "",
        template: "",
      });
    },
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
    validateFirstStep() {
      this.$refs.stepOne.validate().then((success) => {
        if (!this.form.carrier_sms_charge_understanding)
          this.errors.sms_charge = "Please confirm SMS carrier charge";
        if (!this.form.agree) this.errors.agree = "You need to agree our EULA";

        console.log(
          success && this.form.agree && this.form.sms_charge,
          success,
          this.form.agree,
          this.form.carrier_sms_charge_understanding
        );

        if (
          success &&
          this.form.agree &&
          this.form.carrier_sms_charge_understanding
        )
          this.form.step++;
      });

      return false;
    },
    validateSecondStep() {
      this.form.step++;
    },
    validateThirdStep() {
      this.form.step++;
    },
  },
};
</script>
