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
                      class="row position-relative pr-5"
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
                              :id="'rotation-name-' + (i + 1)"
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
                            :name="'start_date_' + (i + 1)"
                            rules="required"
                          >
                            <input
                              type="date"
                              class="form-control"
                              :class="classes"
                              :id="'star-date-' + (i + 1)"
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
                            :name="'finish_date_' + (i + 1)"
                            rules="required"
                          >
                            <input
                              type="date"
                              class="form-control"
                              :class="classes"
                              :id="'end-date-' + (i + 1)"
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
                      <!-- remove-row -->
                      <button
                        type="button"
                        class="btn-link btn-remove-row"
                        @click.prevent="removeRotation(i)"
                      >
                        <i class="fas fa-trash-alt"></i>
                      </button>
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

                  <div v-show="dateOverlapingError">
                    <div class="row">
                      <div
                        class="col-12 col-md pr-md-5 text-center text-white bg-danger py-3"
                      >
                        {{ dateOverlapingError }}
                      </div>
                    </div>
                    <div class="dropdown-divider my-4"></div>
                  </div>

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
      dateOverlapingError: null,
    };
  },
  created() {
    this.$axios.$get(process.env.api + "rotations", this.form).then((res) => {
      this.rotations = res.sort(function(a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
    });
  },
  methods: {
    back() {
      this.$emit("back");
    },
    removeRotation(index) {
      this.form.rotations.splice(index, 1);
    },
    AddRotation() {
      this.form.rotations.push({
        name: "",
        date_start: "",
        date_end: "",
        template: "",
      });
    },
    dateRangeOverlaps(a_start, a_end, b_start, b_end) {
      if (a_start < b_start && b_start < a_end) return true; // b starts in a
      if (a_start < b_end && b_end < a_end) return true; // b ends in a
      if (b_start < a_start && a_end < b_end) return true; // a in b
      return false;
    },
    multipleDateRangeOverlaps(timeEntries) {
      let i = 0,
        j = 0;
      let timeIntervals = timeEntries.filter(
        (entry) =>
          entry.date_start != null &&
          entry.date_end != null &&
          entry.date_start.length === 10 &&
          entry.date_end.length === 10
      );

      if (timeIntervals != null && timeIntervals.length > 1)
        for (i = 0; i < timeIntervals.length - 1; i += 1) {
          for (j = i + 1; j < timeIntervals.length; j += 1) {
            if (
              this.dateRangeOverlaps(
                new Date(timeIntervals[i].date_end).getTime(),
                new Date(timeIntervals[i].date_start).getTime(),
                new Date(timeIntervals[j].date_start).getTime(),
                new Date(timeIntervals[j].date_end).getTime()
              )
            )
              return true;
          }
        }
      return false;
    },
    validate() {
      if (this.form.rotations.length <= 1) {
        this.dateOverlapingError = 'You need to define at least two rotation.';
        return false;
      }
      this.$refs.form.validate().then((success) => {
        if (success && !this.multipleDateRangeOverlaps(this.form.rotations)) {
          this.form.step++;
          this.dateOverlapingError = "";
        } else {
          let errorsObj = {},
            i;
          for (i = 0; i <= this.form.rotations.length; i++) {
            errorsObj["start_date_" + (i + 1)] = ["Dates are overlapping"];
            errorsObj["finish_date_" + (i + 1)] = ["Dates are overlapping"];
          }
          this.dateOverlapingError = "Dates overlap please verify";
          this.$refs.form.setErrors(errorsObj);
          return;
        }
      });
    },
  },
};
</script>
