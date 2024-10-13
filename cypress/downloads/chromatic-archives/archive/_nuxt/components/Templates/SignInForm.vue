import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/Templates/SignInForm.vue");import { default as __nuxt_component_0 } from "/_nuxt/components/Atoms/WelcomeCard.vue";
import { ElInput as __nuxt_component_1 } from "/_nuxt/node_modules/.pnpm/element-plus@2.8.5_vue@3.5.12_typescript@5.6.3_/node_modules/element-plus/es/components/input/index.mjs?v=0984fb0a";
import { default as __nuxt_component_2 } from "/_nuxt/components/Atoms/SubmitButton.vue";
import { default as __nuxt_component_3 } from "/_nuxt/components/Atoms/SocialLinks.vue";
import "/_nuxt/node_modules/.pnpm/element-plus@2.8.5_vue@3.5.12_typescript@5.6.3_/node_modules/element-plus/es/components/input/style/css.mjs?v=0984fb0a";
/* Injection by vite-plugin-vue-inspector Start */
import { createVNode as __createVNode,createElementVNode as __createElementVNode,createElementBlock as __createElementBlock } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=0984fb0a"
function _interopVNode(vnode) {
  if (vnode && vnode.props && 'data-v-inspector' in vnode.props) {
    const data = vnode.props['data-v-inspector']
    delete vnode.props['data-v-inspector']
    Object.defineProperty(vnode.props, '__v_inspector', { value: data, enumerable: false })
  }
  return vnode
}
function _createVNode(...args) { return _interopVNode(__createVNode(...args)) }
function _createElementVNode(...args) { return _interopVNode(__createElementVNode(...args)) }
function _createElementBlock(...args) { return _interopVNode(__createElementBlock(...args)) }
/* Injection by vite-plugin-vue-inspector End */
import AppleIcon from "/_nuxt/assets/Icons/SocialIcons/AppleIcon.vue";
import FaceBookIcon from "/_nuxt/assets/Icons/SocialIcons/FaceBookIcon.vue";
import GoogleIcon from "/_nuxt/assets/Icons/SocialIcons/GoogleIcon.vue";
import { Message, Key } from "/_nuxt/node_modules/.pnpm/@element-plus+icons-vue@2.3.1_vue@3.5.12_typescript@5.6.3_/node_modules/@element-plus/icons-vue/dist/index.js?v=0984fb0a";
import { useAuthStore } from "/_nuxt/stores/AuthStore.ts";


const _sfc_main = {
  __name: 'SignInForm',
  setup(__props, { expose: __expose }) {
  __expose();

const authStore = useAuthStore();


const updateEmail = (value) => {
    authStore.Email = value; 
    authStore.validate()
};

const updatePassword = (value) => {
    authStore.OldPassword = value; 
    authStore.validate()
};

const handleLogin = async () => {
    authStore.toggleLoading(); 
    const isValid = authStore.checkPassword();
    if (isValid !== true) {
        authStore.toggleLoading(); 
        authStore.incorrectPassword = true;
        return;
    }
    authStore.incorrectPassword = false;
    await new Promise((resolve) => setTimeout(resolve, 1000));
    authStore.toggleLoading(); 
    authStore.page = 2
}

const handleSubmit = async () => {
    authStore.validate()
    authStore.toggleLoading(); 
    const isValid = authStore.validateEmail();
    if (isValid !== null) {
        authStore.toggleLoading(); 
        return;
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
    authStore.toggleLoading(); 
    if (authStore.users.has(authStore.Email)) {
        authStore.existingUser = true;
    } else {
        authStore.changePage();
    }
};

const handleSocialClick = (id) => {
    console.log(id);
};

const __returned__ = { authStore, updateEmail, updatePassword, handleLogin, handleSubmit, handleSocialClick, AppleIcon, FaceBookIcon, GoogleIcon, get Message() { return Message }, get Key() { return Key }, get useAuthStore() { return useAuthStore } }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import { createCommentVNode as _createCommentVNode, resolveComponent as _resolveComponent,   openBlock as _openBlock,  toDisplayString as _toDisplayString } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=0984fb0a"

const _hoisted_1 = {
  class: "h-[598px] max-w-[374px] p-5 flex-col items-center justify-between bg-black text-white space-y-4",
  "data-v-inspector": "components/Templates/SignInForm.vue:2:5"
}
const _hoisted_2 = {
  class: "w-full flex justify-center",
  "data-v-inspector": "components/Templates/SignInForm.vue:4:9"
}
const _hoisted_3 = {
  key: 0,
  class: "w-full text-center text-sm font-semibold",
  "data-test": "sign_in-info",
  "data-v-inspector": "components/Templates/SignInForm.vue:8:9"
}
const _hoisted_4 = {
  key: 1,
  class: "w-full text-center text-sm font-semibold",
  "data-test": "sign_in-info-pass",
  "data-v-inspector": "components/Templates/SignInForm.vue:11:9"
}
const _hoisted_5 = {
  class: "space-y-4",
  "data-v-inspector": "components/Templates/SignInForm.vue:15:9"
}
const _hoisted_6 = {
  key: 0,
  class: "space-y-4",
  "data-v-inspector": "components/Templates/SignInForm.vue:16:13"
}
const _hoisted_7 = {
  key: 0,
  class: "text-red-500 text-xs",
  "data-test": "sign_in-error",
  "data-v-inspector": "components/Templates/SignInForm.vue:26:17"
}
const _hoisted_8 = {
  key: 1,
  class: "space-y-4",
  "data-v-inspector": "components/Templates/SignInForm.vue:29:13"
}
const _hoisted_9 = {
  key: 0,
  class: "text-red-500 text-xs",
  "data-test": "sign_in-pass-error",
  "data-v-inspector": "components/Templates/SignInForm.vue:39:17"
}
const _hoisted_10 = {
  key: 2,
  class: "mb-6 flex items-center justify-between gap-4",
  "data-v-inspector": "components/Templates/SignInForm.vue:47:9"
}
const _hoisted_11 = {
  key: 3,
  class: "space-y-4",
  "data-test": "sign_in-socials",
  "data-v-inspector": "components/Templates/SignInForm.vue:54:9"
}
const _hoisted_12 = {
  key: 4,
  class: "text-center text-sm text-gray-500",
  "data-test": "sign_in-terms",
  "data-v-inspector": "components/Templates/SignInForm.vue:61:9"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AtomsWelcomeCard = __nuxt_component_0
  const _component_el_input = __nuxt_component_1
  const _component_AtomsSubmitButton = __nuxt_component_2
  const _component_AtomsSocialLinks = __nuxt_component_3

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createCommentVNode(" Logo and Welcome Text "),
    _createElementVNode("div", _hoisted_2, [
      _createVNode(_component_AtomsWelcomeCard)
    ]),
    (!$setup.authStore.existingUser)
      ? (_openBlock(), _createElementBlock("p", _hoisted_3, " Enter your email "))
      : _createCommentVNode("v-if", true),
    ($setup.authStore.existingUser)
      ? (_openBlock(), _createElementBlock("p", _hoisted_4, " Enter your password "))
      : _createCommentVNode("v-if", true),
    _createCommentVNode(" Email Form "),
    _createElementVNode("div", _hoisted_5, [
      (!$setup.authStore.existingUser)
        ? (_openBlock(), _createElementBlock("div", _hoisted_6, [
            _createVNode(_component_el_input, {
              modelValue: $setup.authStore.Email,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.authStore.Email) = $event)),
              class: "w-full",
              placeholder: "Email Address",
              "prefix-icon": $setup.Message,
              error: $setup.authStore.errors.Email?.length > 0,
              onInput: $setup.updateEmail,
              "data-test": "sign_in-input"
            }, null, 8 /* PROPS */, ["modelValue", "prefix-icon", "error"]),
            ($setup.authStore.errors.Email?.length > 0)
              ? (_openBlock(), _createElementBlock("p", _hoisted_7, _toDisplayString($setup.authStore.errors.Email), 1 /* TEXT */))
              : _createCommentVNode("v-if", true),
            _createVNode(_component_AtomsSubmitButton, { "handle-click": $setup.handleSubmit })
          ]))
        : _createCommentVNode("v-if", true),
      ($setup.authStore.existingUser)
        ? (_openBlock(), _createElementBlock("div", _hoisted_8, [
            _createVNode(_component_el_input, {
              modelValue: $setup.authStore.OldPassword,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.authStore.OldPassword) = $event)),
              class: "w-full",
              placeholder: "Password",
              "prefix-icon": $setup.Key,
              error: $setup.authStore.incorrectPassword,
              onInput: $setup.updatePassword,
              "data-test": "sign_in-input-pass"
            }, null, 8 /* PROPS */, ["modelValue", "prefix-icon", "error"]),
            ($setup.authStore.incorrectPassword)
              ? (_openBlock(), _createElementBlock("p", _hoisted_9, " Incorrect Password "))
              : _createCommentVNode("v-if", true),
            _createVNode(_component_AtomsSubmitButton, { "handle-click": $setup.handleLogin })
          ]))
        : _createCommentVNode("v-if", true)
    ]),
    _createCommentVNode(" Divider "),
    (!$setup.authStore.existingUser)
      ? (_openBlock(), _createElementBlock("div", _hoisted_10, _cache[5] || (_cache[5] = [
          _createElementVNode("div", {
            class: "h-[1px] w-40 bg-gradient-to-r from-white/0 to-white",
            "data-v-inspector": "components/Templates/SignInForm.vue:48:13"
          }, null, -1 /* HOISTED */),
          _createElementVNode("div", { "data-v-inspector": "components/Templates/SignInForm.vue:49:13" }, "Or", -1 /* HOISTED */),
          _createElementVNode("div", {
            class: "h-[1px] w-40 bg-gradient-to-r from-white to-white/0",
            "data-v-inspector": "components/Templates/SignInForm.vue:50:13"
          }, null, -1 /* HOISTED */)
        ])))
      : _createCommentVNode("v-if", true),
    _createCommentVNode(" Social Login Buttons "),
    (!$setup.authStore.existingUser)
      ? (_openBlock(), _createElementBlock("div", _hoisted_11, [
          _createVNode(_component_AtomsSocialLinks, {
            svg: $setup.GoogleIcon,
            text: "Continue with Google    ",
            onClick: _cache[2] || (_cache[2] = $event => ($setup.handleSocialClick(1)))
          }),
          _createVNode(_component_AtomsSocialLinks, {
            svg: $setup.FaceBookIcon,
            text: "Continue with Facebook",
            onClick: _cache[3] || (_cache[3] = $event => ($setup.handleSocialClick(2)))
          }),
          _createVNode(_component_AtomsSocialLinks, {
            svg: $setup.AppleIcon,
            text: "Continue with Apple     ",
            onClick: _cache[4] || (_cache[4] = $event => ($setup.handleSocialClick(3)))
          })
        ]))
      : _createCommentVNode("v-if", true),
    _createCommentVNode(" Terms and Conditions "),
    (!$setup.authStore.existingUser)
      ? (_openBlock(), _createElementBlock("p", _hoisted_12, _cache[6] || (_cache[6] = [
          _createElementVNode("a", {
            href: "#",
            class: "hover:text-gray-400 cursor-pointer text-center text-white/40",
            "data-v-inspector": "components/Templates/SignInForm.vue:62:13"
          }, "Terms & Conditions", -1 /* HOISTED */)
        ])))
      : _createCommentVNode("v-if", true)
  ]))
}


_sfc_main.__hmrId = "2e06477a"
typeof __VUE_HMR_RUNTIME__ !== 'undefined' && __VUE_HMR_RUNTIME__.createRecord(_sfc_main.__hmrId, _sfc_main)
import.meta.hot.accept(mod => {
  if (!mod) return
  const { default: updated, _rerender_only } = mod
  if (_rerender_only) {
    __VUE_HMR_RUNTIME__.rerender(updated.__hmrId, updated.render)
  } else {
    __VUE_HMR_RUNTIME__.reload(updated.__hmrId, updated)
  }
})
import _export_sfc from "/_nuxt/@id/__x00__plugin-vue:export-helper"
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/khalid/frontend-qa-selection/QA/components/Templates/SignInForm.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIlNpZ25JbkZvcm0udnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiaC1bNTk4cHhdIG1heC13LVszNzRweF0gcC01IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYmctYmxhY2sgdGV4dC13aGl0ZSBzcGFjZS15LTRcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9UZW1wbGF0ZXMvU2lnbkluRm9ybS52dWU6Mjo1XCI+XG4gICAgICAgIDwhLS0gTG9nbyBhbmQgV2VsY29tZSBUZXh0IC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXJcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9UZW1wbGF0ZXMvU2lnbkluRm9ybS52dWU6NDo5XCI+XG4gICAgICAgICAgICA8QXRvbXNXZWxjb21lQ2FyZCAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8cCB2LWlmPVwiIWF1dGhTdG9yZS5leGlzdGluZ1VzZXJcIiBjbGFzcz1cInctZnVsbCB0ZXh0LWNlbnRlciB0ZXh0LXNtIGZvbnQtc2VtaWJvbGRcIiBkYXRhLXRlc3Q9XCJzaWduX2luLWluZm9cIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9UZW1wbGF0ZXMvU2lnbkluRm9ybS52dWU6ODo5XCI+XG4gICAgICAgICAgICBFbnRlciB5b3VyIGVtYWlsXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgdi1pZj1cImF1dGhTdG9yZS5leGlzdGluZ1VzZXJcIiBjbGFzcz1cInctZnVsbCB0ZXh0LWNlbnRlciB0ZXh0LXNtIGZvbnQtc2VtaWJvbGRcIiBkYXRhLXRlc3Q9XCJzaWduX2luLWluZm8tcGFzc1wiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1RlbXBsYXRlcy9TaWduSW5Gb3JtLnZ1ZToxMTo5XCI+XG4gICAgICAgICAgICBFbnRlciB5b3VyIHBhc3N3b3JkXG4gICAgICAgIDwvcD5cbiAgICAgICAgPCEtLSBFbWFpbCBGb3JtIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3BhY2UteS00XCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvVGVtcGxhdGVzL1NpZ25JbkZvcm0udnVlOjE1OjlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGFjZS15LTRcIiB2LWlmPVwiIWF1dGhTdG9yZS5leGlzdGluZ1VzZXJcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9UZW1wbGF0ZXMvU2lnbkluRm9ybS52dWU6MTY6MTNcIj5cbiAgICAgICAgICAgICAgICA8ZWwtaW5wdXQgXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJhdXRoU3RvcmUuRW1haWxcIiBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ3LWZ1bGxcIiBcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbCBBZGRyZXNzXCIgXG4gICAgICAgICAgICAgICAgICAgIDpwcmVmaXgtaWNvbj1cIk1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgICAgICA6ZXJyb3I9XCJhdXRoU3RvcmUuZXJyb3JzLkVtYWlsPy5sZW5ndGggPiAwXCJcbiAgICAgICAgICAgICAgICAgICAgQGlucHV0PVwidXBkYXRlRW1haWxcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3Q9XCJzaWduX2luLWlucHV0XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJhdXRoU3RvcmUuZXJyb3JzLkVtYWlsPy5sZW5ndGggPiAwXCIgY2xhc3M9XCJ0ZXh0LXJlZC01MDAgdGV4dC14c1wiIGRhdGEtdGVzdD1cInNpZ25faW4tZXJyb3JcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9UZW1wbGF0ZXMvU2lnbkluRm9ybS52dWU6MjY6MTdcIj57eyBhdXRoU3RvcmUuZXJyb3JzLkVtYWlsIH19PC9wPlxuICAgICAgICAgICAgICAgIDxBdG9tc1N1Ym1pdEJ1dHRvbiA6aGFuZGxlLWNsaWNrPVwiaGFuZGxlU3VibWl0XCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwYWNlLXktNFwiIHYtaWY9XCJhdXRoU3RvcmUuZXhpc3RpbmdVc2VyXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvVGVtcGxhdGVzL1NpZ25JbkZvcm0udnVlOjI5OjEzXCI+XG4gICAgICAgICAgICAgICAgPGVsLWlucHV0IFxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiYXV0aFN0b3JlLk9sZFBhc3N3b3JkXCIgXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidy1mdWxsXCIgXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiBcbiAgICAgICAgICAgICAgICAgICAgOnByZWZpeC1pY29uPVwiS2V5XCJcbiAgICAgICAgICAgICAgICAgICAgOmVycm9yPVwiYXV0aFN0b3JlLmluY29ycmVjdFBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgQGlucHV0PVwidXBkYXRlUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3Q9XCJzaWduX2luLWlucHV0LXBhc3NcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHAgdi1pZj1cImF1dGhTdG9yZS5pbmNvcnJlY3RQYXNzd29yZFwiIGNsYXNzPVwidGV4dC1yZWQtNTAwIHRleHQteHNcIiBkYXRhLXRlc3Q9XCJzaWduX2luLXBhc3MtZXJyb3JcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9UZW1wbGF0ZXMvU2lnbkluRm9ybS52dWU6Mzk6MTdcIj5cbiAgICAgICAgICAgICAgICAgICAgSW5jb3JyZWN0IFBhc3N3b3JkXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxBdG9tc1N1Ym1pdEJ1dHRvbiA6aGFuZGxlLWNsaWNrPVwiaGFuZGxlTG9naW5cIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwhLS0gRGl2aWRlciAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTYgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC00XCIgdi1pZj1cIiFhdXRoU3RvcmUuZXhpc3RpbmdVc2VyXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvVGVtcGxhdGVzL1NpZ25JbkZvcm0udnVlOjQ3OjlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoLVsxcHhdIHctNDAgYmctZ3JhZGllbnQtdG8tciBmcm9tLXdoaXRlLzAgdG8td2hpdGVcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9UZW1wbGF0ZXMvU2lnbkluRm9ybS52dWU6NDg6MTNcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvVGVtcGxhdGVzL1NpZ25JbkZvcm0udnVlOjQ5OjEzXCI+T3I8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoLVsxcHhdIHctNDAgYmctZ3JhZGllbnQtdG8tciBmcm9tLXdoaXRlIHRvLXdoaXRlLzBcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9UZW1wbGF0ZXMvU2lnbkluRm9ybS52dWU6NTA6MTNcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPCEtLSBTb2NpYWwgTG9naW4gQnV0dG9ucyAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNwYWNlLXktNFwiIGRhdGEtdGVzdD1cInNpZ25faW4tc29jaWFsc1wiIHYtaWY9XCIhYXV0aFN0b3JlLmV4aXN0aW5nVXNlclwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1RlbXBsYXRlcy9TaWduSW5Gb3JtLnZ1ZTo1NDo5XCI+XG4gICAgICAgICAgICA8QXRvbXNTb2NpYWxMaW5rcyA6c3ZnPVwiR29vZ2xlSWNvblwiIHRleHQ9XCJDb250aW51ZSB3aXRoIEdvb2dsZSZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO1wiIEBjbGljaz1cImhhbmRsZVNvY2lhbENsaWNrKDEpXCIgLz5cbiAgICAgICAgICAgIDxBdG9tc1NvY2lhbExpbmtzIDpzdmc9XCJGYWNlQm9va0ljb25cIiB0ZXh0PVwiQ29udGludWUgd2l0aCBGYWNlYm9va1wiIEBjbGljaz1cImhhbmRsZVNvY2lhbENsaWNrKDIpXCIgLz5cbiAgICAgICAgICAgIDxBdG9tc1NvY2lhbExpbmtzIDpzdmc9XCJBcHBsZUljb25cIiB0ZXh0PVwiQ29udGludWUgd2l0aCBBcHBsZSZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO1wiIEBjbGljaz1cImhhbmRsZVNvY2lhbENsaWNrKDMpXCIgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPCEtLSBUZXJtcyBhbmQgQ29uZGl0aW9ucyAtLT5cbiAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS01MDBcIiBkYXRhLXRlc3Q9XCJzaWduX2luLXRlcm1zXCIgdi1pZj1cIiFhdXRoU3RvcmUuZXhpc3RpbmdVc2VyXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvVGVtcGxhdGVzL1NpZ25JbkZvcm0udnVlOjYxOjlcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJob3Zlcjp0ZXh0LWdyYXktNDAwIGN1cnNvci1wb2ludGVyIHRleHQtY2VudGVyIHRleHQtd2hpdGUvNDBcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9UZW1wbGF0ZXMvU2lnbkluRm9ybS52dWU6NjI6MTNcIj5UZXJtcyAmIENvbmRpdGlvbnM8L2E+XG4gICAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXA+XG5pbXBvcnQgQXBwbGVJY29uIGZyb20gJ34vYXNzZXRzL0ljb25zL1NvY2lhbEljb25zL0FwcGxlSWNvbi52dWUnO1xuaW1wb3J0IEZhY2VCb29rSWNvbiBmcm9tICd+L2Fzc2V0cy9JY29ucy9Tb2NpYWxJY29ucy9GYWNlQm9va0ljb24udnVlJztcbmltcG9ydCBHb29nbGVJY29uIGZyb20gJ34vYXNzZXRzL0ljb25zL1NvY2lhbEljb25zL0dvb2dsZUljb24udnVlJztcbmltcG9ydCB7IE1lc3NhZ2UsIEtleSB9IGZyb20gJ0BlbGVtZW50LXBsdXMvaWNvbnMtdnVlJztcbmltcG9ydCB7IHVzZUF1dGhTdG9yZSB9IGZyb20gJ34vc3RvcmVzL0F1dGhTdG9yZSc7XG5cbmNvbnN0IGF1dGhTdG9yZSA9IHVzZUF1dGhTdG9yZSgpO1xuXG5cbmNvbnN0IHVwZGF0ZUVtYWlsID0gKHZhbHVlKSA9PiB7XG4gICAgYXV0aFN0b3JlLkVtYWlsID0gdmFsdWU7IFxuICAgIGF1dGhTdG9yZS52YWxpZGF0ZSgpXG59O1xuXG5jb25zdCB1cGRhdGVQYXNzd29yZCA9ICh2YWx1ZSkgPT4ge1xuICAgIGF1dGhTdG9yZS5PbGRQYXNzd29yZCA9IHZhbHVlOyBcbiAgICBhdXRoU3RvcmUudmFsaWRhdGUoKVxufTtcblxuY29uc3QgaGFuZGxlTG9naW4gPSBhc3luYyAoKSA9PiB7XG4gICAgYXV0aFN0b3JlLnRvZ2dsZUxvYWRpbmcoKTsgXG4gICAgY29uc3QgaXNWYWxpZCA9IGF1dGhTdG9yZS5jaGVja1Bhc3N3b3JkKCk7XG4gICAgaWYgKGlzVmFsaWQgIT09IHRydWUpIHtcbiAgICAgICAgYXV0aFN0b3JlLnRvZ2dsZUxvYWRpbmcoKTsgXG4gICAgICAgIGF1dGhTdG9yZS5pbmNvcnJlY3RQYXNzd29yZCA9IHRydWU7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXV0aFN0b3JlLmluY29ycmVjdFBhc3N3b3JkID0gZmFsc2U7XG4gICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwMCkpO1xuICAgIGF1dGhTdG9yZS50b2dnbGVMb2FkaW5nKCk7IFxuICAgIGF1dGhTdG9yZS5wYWdlID0gMlxufVxuXG5jb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoKSA9PiB7XG4gICAgYXV0aFN0b3JlLnZhbGlkYXRlKClcbiAgICBhdXRoU3RvcmUudG9nZ2xlTG9hZGluZygpOyBcbiAgICBjb25zdCBpc1ZhbGlkID0gYXV0aFN0b3JlLnZhbGlkYXRlRW1haWwoKTtcbiAgICBpZiAoaXNWYWxpZCAhPT0gbnVsbCkge1xuICAgICAgICBhdXRoU3RvcmUudG9nZ2xlTG9hZGluZygpOyBcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCAxMDAwKSk7XG4gICAgYXV0aFN0b3JlLnRvZ2dsZUxvYWRpbmcoKTsgXG4gICAgaWYgKGF1dGhTdG9yZS51c2Vycy5oYXMoYXV0aFN0b3JlLkVtYWlsKSkge1xuICAgICAgICBhdXRoU3RvcmUuZXhpc3RpbmdVc2VyID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBhdXRoU3RvcmUuY2hhbmdlUGFnZSgpO1xuICAgIH1cbn07XG5cbmNvbnN0IGhhbmRsZVNvY2lhbENsaWNrID0gKGlkKSA9PiB7XG4gICAgY29uc29sZS5sb2coaWQpO1xufTtcbjwvc2NyaXB0PlxuIl0sImZpbGUiOiIvaG9tZS9raGFsaWQvZnJvbnRlbmQtcWEtc2VsZWN0aW9uL1FBL2NvbXBvbmVudHMvVGVtcGxhdGVzL1NpZ25JbkZvcm0udnVlIn0=