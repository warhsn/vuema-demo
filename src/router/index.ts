import { createRouter, createWebHistory } from "vue-router";
import Welcome from "../pages/welcome.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "installation",
      component: () => import("../pages/installation.vue"),
    },
    {
      path: "/basics/columns",
      name: "columns",
      component: () => import("../pages/basics/columns.vue"),
    },
    {
      path: "/buttons",
      name: "buttons",
      component: () => import("../pages/buttons.vue"),
    },
    {
      path: "/forms",
      name: "forms",
      component: () => import("../pages/forms.vue"),
    },
    {
      path: "/forms/text-input",
      name: "text-input",
      component: () => import("../pages/forms/text-input.vue"),
    },
    {
      path: "/forms/number-input",
      name: "number-input",
      component: () => import("../pages/forms/numbers.vue"),
    },
    {
      path: "/forms/currency-input",
      name: "currency-input",
      component: () => import("../pages/forms/currency-input.vue"),
    },
    {
      path: "/forms/checkbox-input",
      name: "checkbox-input",
      component: () => import("../pages/forms/checkboxes.vue"),
    },
    {
      path: "/forms/radio-input",
      name: "radio-input",
      component: () => import("../pages/forms/radio-input.vue"),
    },
    {
      path: "/forms/password-input",
      name: "password-input",
      component: () => import("../pages/forms/password-inputs.vue"),
    },
    {
      path: "/forms/select-input",
      name: "select-input",
      component: () => import("../pages/forms/select-inputs.vue"),
    },
    {
      path: "/forms/file-input",
      name: "file-input",
      component: () => import("../pages/forms/file-input.vue"),
    },
    {
      path: "/forms/date-picker",
      name: "date-picker",
      component: () => import("../pages/forms/date-picker.vue"),
    },
    {
      path: "/dropdown",
      name: "dropdown",
      component: () => import("../pages/dropdown.vue"),
    },
    {
      path: "/modals",
      name: "modals",
      component: () => import("../pages/modals.vue"),
    },
    {
      path: "/dialogs/confirm",
      name: "dialogs",
      component: () => import("../pages/dialogs.vue"),
    },
    {
      path: "/toasts",
      name: "toasts",
      component: () => import("../pages/toasts.vue"),
    },
  ],
});

export default router;
