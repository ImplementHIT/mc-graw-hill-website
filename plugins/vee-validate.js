import Vue from "vue";
import {
  ValidationObserver,
  ValidationProvider,
  configure,
  extend,
} from "vee-validate";
import {
  required,
  required_if,
  email,
  alpha,
  regex,
  min,
  min_value,
} from "vee-validate/dist/rules";

configure({
  classes: {
    valid: "is-valid",
    invalid: "is-invalid",
    dirty: ["is-dirty", "is-dirty"], // multiple classes per flag!
  },
});

extend("min", min);
extend("min_value", min_value);
extend("email", email);
extend("alpha", alpha);
extend("regex", regex);
extend("required_if", required_if);
extend("required", {
  ...required,
  message: "The {_field_} field is required",
});
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
