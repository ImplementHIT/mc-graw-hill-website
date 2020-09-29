<template>
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
              <ValidationObserver ref="form">
                <form>
                  <div class="row my-4">
                    <div class="col-12 col-md-6">
                      <div class="form-group">
                        <label for="first-name" class="">First Name</label>
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
                        <label for="last-name" class="">Last Name</label>
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
                        <label for="Phone" class="">Mobile Phone</label>
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
                          v-model="form.carrier_sms_charge_understanding"
                        />
                        <label class="custom-control-label" for="sms_charge"
                          >Confirm understanding that charges may apply for SMS
                          from their carrier</label
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
                      <label>US or Foreign Medical School Graduate</label>
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
                          <option disabled selected>Select one</option>
                          <option value="US">US Medical School Graduate</option>
                          <option value="Foreign"
                            >Foreign Medical School Graduate</option
                          >
                        </select>
                        <span>{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>

                    <div class="form-group" v-if="form.school_country == 'US'">
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
                          <option disabled selected>Select school</option>
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
                      <label for="year">Medical school graduation year</label>
                      <ValidationProvider
                        v-slot="{ classes, errors }"
                        name="Grad Year"
                        rules="required|min_value:1960"
                      >
                        <input
                          type="number"
                          class="form-control col-3"
                          :class="classes"
                          min="1960"
                          value="1960"
                          id="Year"
                          v-model="form.school_grad_year"
                        />
                        <span>{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>

                    <div class="form-group">
                      <label>Select your general surgery program</label>
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
                          <option disabled selected>Select Program</option>
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
                            <option disabled selected>Select one</option>
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
                    <label class="custom-control-label" for="agree-eula"
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

                  <PlanInformationAlert :form="form" />

                  <div class="row mt-5 justify-content-center">
                    <div class="col-auto">
                      <a
                        href="javascript:void(0)"
                        @click.prevent="validate"
                        class="next_page btn-lg button btn-secondary btn-oval pointer"
                      >
                        Next
                      </a>
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
</template>
<script>
export default {
  props: {
    form: Object,
  },
  data() {
    return {
      programs: {},
      schools: {},
      errors: {
        sms_charge: "",
        agree: "",
      },
    };
  },
  created() {
    this.$axios
      .$get("programs.json")
      .then((res) => (this.programs = res.sort()));

    this.$axios.$get("schools.json").then((res) => (this.schools = res.sort()));
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
    dummy() {
      this.form.first_name = "Julio";
      this.form.last_name = "Solis";
      this.form.email = "js" + new Date().getTime() + "@implementhit.com";
      this.form.mobile = "3186018448";
      this.form.carrier_sms_charge_understanding = true;
      this.form.school_country = "Foreign";
      this.form.school_name = "";
      this.form.school_grad_year = "1995";
      this.form.school_program = "AMITA Health Program";
      this.form.school_level = 5;
      this.form.agree = true;
      this.form.rotations = [
        {
          name: "Trauma",
          date_start: "2020-10-01",
          date_end: "2020-10-31",
          template: "1",
        },
        {
          name: "SICU",
          date_start: "2020-11-01",
          date_end: "2020-11-30",
          template: "12",
        },
      ];
    },
    validate() {
      this.$refs.form.validate().then((success) => {
        if (!this.form.carrier_sms_charge_understanding)
          this.errors.sms_charge = "Please confirm SMS carrier charge";
        if (!this.form.agree) this.errors.agree = "You need to agree our EULA";

        if (
          success &&
          this.form.agree &&
          this.form.carrier_sms_charge_understanding
        )
          this.form.step++;
      });
    },
  },
};
</script>
