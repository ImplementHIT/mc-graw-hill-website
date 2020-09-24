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

                  <div class="row" v-for="(rot, i) in form.rotations" :key="i">
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
                          <option disabled selected>Select Template</option>
                          <option>Trauma</option>
                          <option>SICU</option>
                          <option>Burns</option>
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
                    <span class="color-berry headline-title-sm ml-2">$299</span>
                  </div>
                </div>

                <div class="row mt-5 justify-content-center">
                  <div class="col-auto">
                    <a
                      href="javascript:void(0)"
                      class="back_page btn btn-outline-primary  btn-oval"
                      @click="back"
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
      this.form.step++;
    },
  },
};
</script>
