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
  between,
} from "vee-validate/dist/rules";

configure({
  classes: {
    valid: "is-valid",
    invalid: "is-invalid",
    dirty: ["is-dirty", "is-dirty"], // multiple classes per flag!
  },
});

extend("min", {
  ...min,
  message: "The {_field_} field must have at least {length} characters",
});
extend("min_value", min_value);
extend("email", email);
extend("alpha", alpha);
extend("regex", regex);
extend("required_if", required_if);
extend("between", {
  ...between,
  message: "Password should contain between 8 and 11 characters",
});
extend("required", {
  ...required,
  message: "The {_field_} field is required",
});
extend("verify_password", {
  validate(value) {
    var strongRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    return strongRegex.test(value);
  },
  message:
    "`The password must contain at least: 1 uppercase letter, 1 lowercase letter, 1 number, and one special character (E.g. , . _ & ? etc)`,",
});
extend("confirm_password", {
  params: ["target"],
  validate(value, { target }) {
    return value === target;
  },
  message: "Password confirmation does not match",
});
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
