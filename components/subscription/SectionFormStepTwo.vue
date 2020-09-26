<template>
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
                  Add at least your first two rotations to get started, you can
                  modify them later.
                </p>
                <div class="my-4">
                  <label class="headline-title-xs color-berry">Rotations</label>

                  <ValidationObserver ref="form">
                    <div
                      class="row"
                      v-for="(rot, i) in form.rotations"
                      :key="i"
                    >
                      <div class="col-12 col-md-3 px-md-2">
                        <div class="form-group">
                          <ValidationProvider
                            v-slot="{ classes, errors }"
                            :name="'Name' + (i + 1)"
                            rules="required"
                          >
                            <input
                              type="text"
                              class="form-control"
                              :class="classes"
                              id="rotation-name-1"
                              placeholder="Rotation name"
                              v-model="form.rotations[i].name"
                            />
                            <span class="text-danger">{{ errors[0] }}</span>
                          </ValidationProvider>
                        </div>
                      </div>
                      <div class="col-12 col-sm-6 col-md-3 px-md-2">
                        <div class="form-group">
                          <ValidationProvider
                            v-slot="{ classes, errors }"
                            :name="'Start Date' + (i + 1)"
                            rules="required"
                          >
                            <input
                              type="date"
                              class="form-control"
                              :class="classes"
                              id="star-date-1"
                              placeholder="Start Date"
                              v-model="form.rotations[i].date_start"
                            />
                            <span class="text-danger">{{ errors[0] }}</span>
                          </ValidationProvider>
                        </div>
                      </div>
                      <div class="col-12 col-sm-6 col-md-3 px-md-2">
                        <div class="form-group">
                          <ValidationProvider
                            v-slot="{ classes, errors }"
                            :name="'Finish Date' + (i + 1)"
                            rules="required"
                          >
                            <input
                              type="date"
                              class="form-control"
                              :class="classes"
                              id="end-date-1"
                              placeholder="End Date"
                              v-model="form.rotations[i].date_end"
                            />
                            <span class="text-danger">{{ errors[0] }}</span>
                          </ValidationProvider>
                        </div>
                      </div>
                      <div class="col-12 col-md-3 px-md-2">
                        <div class="form-group">
                          <ValidationProvider
                            v-slot="{ classes, errors }"
                            :name="'School' + (i + 1)"
                            rules="required"
                          >
                            <select
                              class="custom-select"
                              :class="classes"
                              v-model="form.rotations[i].template"
                            >
                              <option disabled selected>Select Template</option>
                              <option
                                v-for="rotation in rotations"
                                :key="rotation.id"
                                :value="rotation.id"
                              >
                                {{ rotation.name }}
                              </option>
                            </select>
                            <span class="text-danger">{{ errors[0] }}</span>
                          </ValidationProvider>
                        </div>
                      </div>
                    </div>
                  </ValidationObserver>

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

                  <PlanInformationAlert :form="form" />
                </div>

                <div class="row mt-5 justify-content-center">
                  <div class="col-auto">
                    <a
                      href="javascript:void(0)"
                      class="back_page btn btn-outline-primary  btn-oval"
                      @click="$emit('back')"
                      >back</a
                    >
                  </div>
                  <div class="col-auto">
                    <a
                      href="javascript:void(0)"
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
      rotations: [],
      errors: [],
    };
  },
  created() {
    this.$axios.$get(process.env.api + "rotations", this.form).then((res) => {
      this.rotations = res.sort();
    });
  },
  methods: {
    back() {
      this.$emit("back");
    },
    AddRotation() {
      this.form.rotations.push({
        name: "",
        date_start: "",
        date_end: "",
        template: "",
      });
    },
    validate() {
      this.$refs.form.validate().then((success) => {
        if (success) this.form.step++;
        else this.errors.push("Please confirm SMS carrier charge");
      });
    },
  },
};
</script>
