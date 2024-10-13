import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/Templates/SignInForm.vue");import { default as __nuxt_component_0 } from "/_nuxt/components/Atoms/WelcomeCard.vue";
import { ElInput as __nuxt_component_1 } from "/_nuxt/node_modules/.pnpm/element-plus@2.8.5_vue@3.5.12_typescript@5.6.3_/node_modules/element-plus/es/components/input/index.mjs?v=5d575ae9";
import { default as __nuxt_component_2 } from "/_nuxt/components/Atoms/SubmitButton.vue";
import { default as __nuxt_component_3 } from "/_nuxt/components/Atoms/SocialLinks.vue";
import "/_nuxt/node_modules/.pnpm/element-plus@2.8.5_vue@3.5.12_typescript@5.6.3_/node_modules/element-plus/es/components/input/style/css.mjs?v=5d575ae9";
/* Injection by vite-plugin-vue-inspector Start */
import { createVNode as __createVNode,createElementVNode as __createElementVNode,createElementBlock as __createElementBlock } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=5d575ae9"
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
import { Message, Key } from "/_nuxt/node_modules/.pnpm/@element-plus+icons-vue@2.3.1_vue@3.5.12_typescript@5.6.3_/node_modules/@element-plus/icons-vue/dist/index.js?v=5d575ae9";
import WelcomeCard from "/_nuxt/components/Atoms/WelcomeCard.vue";
import { useAuthStore } from "/_nuxt/stores/AuthStore.js";


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

const __returned__ = { authStore, updateEmail, updatePassword, handleLogin, handleSubmit, handleSocialClick, AppleIcon, FaceBookIcon, GoogleIcon, get Message() { return Message }, get Key() { return Key }, WelcomeCard, get useAuthStore() { return useAuthStore } }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import { createCommentVNode as _createCommentVNode, resolveComponent as _resolveComponent,   openBlock as _openBlock,  toDisplayString as _toDisplayString } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=5d575ae9"

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiU2lnbkluRm9ybS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJoLVs1OThweF0gbWF4LXctWzM3NHB4XSBwLTUgZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBiZy1ibGFjayB0ZXh0LXdoaXRlIHNwYWNlLXktNFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1RlbXBsYXRlcy9TaWduSW5Gb3JtLnZ1ZToyOjVcIj5cbiAgICAgICAgPCEtLSBMb2dvIGFuZCBXZWxjb21lIFRleHQgLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlclwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1RlbXBsYXRlcy9TaWduSW5Gb3JtLnZ1ZTo0OjlcIj5cbiAgICAgICAgICAgIDxBdG9tc1dlbGNvbWVDYXJkIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxwIHYtaWY9XCIhYXV0aFN0b3JlLmV4aXN0aW5nVXNlclwiIGNsYXNzPVwidy1mdWxsIHRleHQtY2VudGVyIHRleHQtc20gZm9udC1zZW1pYm9sZFwiIGRhdGEtdGVzdD1cInNpZ25faW4taW5mb1wiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1RlbXBsYXRlcy9TaWduSW5Gb3JtLnZ1ZTo4OjlcIj5cbiAgICAgICAgICAgIEVudGVyIHlvdXIgZW1haWxcbiAgICAgICAgPC9wPlxuICAgICAgICA8cCB2LWlmPVwiYXV0aFN0b3JlLmV4aXN0aW5nVXNlclwiIGNsYXNzPVwidy1mdWxsIHRleHQtY2VudGVyIHRleHQtc20gZm9udC1zZW1pYm9sZFwiIGRhdGEtdGVzdD1cInNpZ25faW4taW5mby1wYXNzXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvVGVtcGxhdGVzL1NpZ25JbkZvcm0udnVlOjExOjlcIj5cbiAgICAgICAgICAgIEVudGVyIHlvdXIgcGFzc3dvcmRcbiAgICAgICAgPC9wPlxuICAgICAgICA8IS0tIEVtYWlsIEZvcm0gLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzcGFjZS15LTRcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9UZW1wbGF0ZXMvU2lnbkluRm9ybS52dWU6MTU6OVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwYWNlLXktNFwiIHYtaWY9XCIhYXV0aFN0b3JlLmV4aXN0aW5nVXNlclwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1RlbXBsYXRlcy9TaWduSW5Gb3JtLnZ1ZToxNjoxM1wiPlxuICAgICAgICAgICAgICAgIDxlbC1pbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImF1dGhTdG9yZS5FbWFpbFwiIFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInctZnVsbFwiIFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsIEFkZHJlc3NcIiBcbiAgICAgICAgICAgICAgICAgICAgOnByZWZpeC1pY29uPVwiTWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICAgIDplcnJvcj1cImF1dGhTdG9yZS5lcnJvcnMuRW1haWw/Lmxlbmd0aCA+IDBcIlxuICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XCJ1cGRhdGVFbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdD1cInNpZ25faW4taW5wdXRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHAgdi1pZj1cImF1dGhTdG9yZS5lcnJvcnMuRW1haWw/Lmxlbmd0aCA+IDBcIiBjbGFzcz1cInRleHQtcmVkLTUwMCB0ZXh0LXhzXCIgZGF0YS10ZXN0PVwic2lnbl9pbi1lcnJvclwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1RlbXBsYXRlcy9TaWduSW5Gb3JtLnZ1ZToyNjoxN1wiPnt7IGF1dGhTdG9yZS5lcnJvcnMuRW1haWwgfX08L3A+XG4gICAgICAgICAgICAgICAgPEF0b21zU3VibWl0QnV0dG9uIDpoYW5kbGUtY2xpY2s9XCJoYW5kbGVTdWJtaXRcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BhY2UteS00XCIgdi1pZj1cImF1dGhTdG9yZS5leGlzdGluZ1VzZXJcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9UZW1wbGF0ZXMvU2lnbkluRm9ybS52dWU6Mjk6MTNcIj5cbiAgICAgICAgICAgICAgICA8ZWwtaW5wdXQgXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJhdXRoU3RvcmUuT2xkUGFzc3dvcmRcIiBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ3LWZ1bGxcIiBcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIFxuICAgICAgICAgICAgICAgICAgICA6cHJlZml4LWljb249XCJLZXlcIlxuICAgICAgICAgICAgICAgICAgICA6ZXJyb3I9XCJhdXRoU3RvcmUuaW5jb3JyZWN0UGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XCJ1cGRhdGVQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdD1cInNpZ25faW4taW5wdXQtcGFzc1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8cCB2LWlmPVwiYXV0aFN0b3JlLmluY29ycmVjdFBhc3N3b3JkXCIgY2xhc3M9XCJ0ZXh0LXJlZC01MDAgdGV4dC14c1wiIGRhdGEtdGVzdD1cInNpZ25faW4tcGFzcy1lcnJvclwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1RlbXBsYXRlcy9TaWduSW5Gb3JtLnZ1ZTozOToxN1wiPlxuICAgICAgICAgICAgICAgICAgICBJbmNvcnJlY3QgUGFzc3dvcmRcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPEF0b21zU3VibWl0QnV0dG9uIDpoYW5kbGUtY2xpY2s9XCJoYW5kbGVMb2dpblwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPCEtLSBEaXZpZGVyIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWItNiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTRcIiB2LWlmPVwiIWF1dGhTdG9yZS5leGlzdGluZ1VzZXJcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9UZW1wbGF0ZXMvU2lnbkluRm9ybS52dWU6NDc6OVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImgtWzFweF0gdy00MCBiZy1ncmFkaWVudC10by1yIGZyb20td2hpdGUvMCB0by13aGl0ZVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1RlbXBsYXRlcy9TaWduSW5Gb3JtLnZ1ZTo0ODoxM1wiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9UZW1wbGF0ZXMvU2lnbkluRm9ybS52dWU6NDk6MTNcIj5PcjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImgtWzFweF0gdy00MCBiZy1ncmFkaWVudC10by1yIGZyb20td2hpdGUgdG8td2hpdGUvMFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1RlbXBsYXRlcy9TaWduSW5Gb3JtLnZ1ZTo1MDoxM1wiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8IS0tIFNvY2lhbCBMb2dpbiBCdXR0b25zIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3BhY2UteS00XCIgZGF0YS10ZXN0PVwic2lnbl9pbi1zb2NpYWxzXCIgdi1pZj1cIiFhdXRoU3RvcmUuZXhpc3RpbmdVc2VyXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvVGVtcGxhdGVzL1NpZ25JbkZvcm0udnVlOjU0OjlcIj5cbiAgICAgICAgICAgIDxBdG9tc1NvY2lhbExpbmtzIDpzdmc9XCJHb29nbGVJY29uXCIgdGV4dD1cIkNvbnRpbnVlIHdpdGggR29vZ2xlJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7XCIgQGNsaWNrPVwiaGFuZGxlU29jaWFsQ2xpY2soMSlcIiAvPlxuICAgICAgICAgICAgPEF0b21zU29jaWFsTGlua3MgOnN2Zz1cIkZhY2VCb29rSWNvblwiIHRleHQ9XCJDb250aW51ZSB3aXRoIEZhY2Vib29rXCIgQGNsaWNrPVwiaGFuZGxlU29jaWFsQ2xpY2soMilcIiAvPlxuICAgICAgICAgICAgPEF0b21zU29jaWFsTGlua3MgOnN2Zz1cIkFwcGxlSWNvblwiIHRleHQ9XCJDb250aW51ZSB3aXRoIEFwcGxlJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7XCIgQGNsaWNrPVwiaGFuZGxlU29jaWFsQ2xpY2soMylcIiAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8IS0tIFRlcm1zIGFuZCBDb25kaXRpb25zIC0tPlxuICAgICAgICA8cCBjbGFzcz1cInRleHQtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTUwMFwiIGRhdGEtdGVzdD1cInNpZ25faW4tdGVybXNcIiB2LWlmPVwiIWF1dGhTdG9yZS5leGlzdGluZ1VzZXJcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9UZW1wbGF0ZXMvU2lnbkluRm9ybS52dWU6NjE6OVwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImhvdmVyOnRleHQtZ3JheS00MDAgY3Vyc29yLXBvaW50ZXIgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZS80MFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1RlbXBsYXRlcy9TaWduSW5Gb3JtLnZ1ZTo2MjoxM1wiPlRlcm1zICYgQ29uZGl0aW9uczwvYT5cbiAgICAgICAgPC9wPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cD5cbmltcG9ydCBBcHBsZUljb24gZnJvbSAnfi9hc3NldHMvSWNvbnMvU29jaWFsSWNvbnMvQXBwbGVJY29uLnZ1ZSc7XG5pbXBvcnQgRmFjZUJvb2tJY29uIGZyb20gJ34vYXNzZXRzL0ljb25zL1NvY2lhbEljb25zL0ZhY2VCb29rSWNvbi52dWUnO1xuaW1wb3J0IEdvb2dsZUljb24gZnJvbSAnfi9hc3NldHMvSWNvbnMvU29jaWFsSWNvbnMvR29vZ2xlSWNvbi52dWUnO1xuaW1wb3J0IHsgTWVzc2FnZSwgS2V5IH0gZnJvbSAnQGVsZW1lbnQtcGx1cy9pY29ucy12dWUnO1xuaW1wb3J0IFdlbGNvbWVDYXJkIGZyb20gJ34vY29tcG9uZW50cy9BdG9tcy9XZWxjb21lQ2FyZC52dWUnO1xuaW1wb3J0IHsgdXNlQXV0aFN0b3JlIH0gZnJvbSAnfi9zdG9yZXMvQXV0aFN0b3JlJztcblxuY29uc3QgYXV0aFN0b3JlID0gdXNlQXV0aFN0b3JlKCk7XG5cblxuY29uc3QgdXBkYXRlRW1haWwgPSAodmFsdWUpID0+IHtcbiAgICBhdXRoU3RvcmUuRW1haWwgPSB2YWx1ZTsgXG4gICAgYXV0aFN0b3JlLnZhbGlkYXRlKClcbn07XG5cbmNvbnN0IHVwZGF0ZVBhc3N3b3JkID0gKHZhbHVlKSA9PiB7XG4gICAgYXV0aFN0b3JlLk9sZFBhc3N3b3JkID0gdmFsdWU7IFxuICAgIGF1dGhTdG9yZS52YWxpZGF0ZSgpXG59O1xuXG5jb25zdCBoYW5kbGVMb2dpbiA9IGFzeW5jICgpID0+IHtcbiAgICBhdXRoU3RvcmUudG9nZ2xlTG9hZGluZygpOyBcbiAgICBjb25zdCBpc1ZhbGlkID0gYXV0aFN0b3JlLmNoZWNrUGFzc3dvcmQoKTtcbiAgICBpZiAoaXNWYWxpZCAhPT0gdHJ1ZSkge1xuICAgICAgICBhdXRoU3RvcmUudG9nZ2xlTG9hZGluZygpOyBcbiAgICAgICAgYXV0aFN0b3JlLmluY29ycmVjdFBhc3N3b3JkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhdXRoU3RvcmUuaW5jb3JyZWN0UGFzc3dvcmQgPSBmYWxzZTtcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCAxMDAwKSk7XG4gICAgYXV0aFN0b3JlLnRvZ2dsZUxvYWRpbmcoKTsgXG4gICAgYXV0aFN0b3JlLnBhZ2UgPSAyXG59XG5cbmNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICgpID0+IHtcbiAgICBhdXRoU3RvcmUudmFsaWRhdGUoKVxuICAgIGF1dGhTdG9yZS50b2dnbGVMb2FkaW5nKCk7IFxuICAgIGNvbnN0IGlzVmFsaWQgPSBhdXRoU3RvcmUudmFsaWRhdGVFbWFpbCgpO1xuICAgIGlmIChpc1ZhbGlkICE9PSBudWxsKSB7XG4gICAgICAgIGF1dGhTdG9yZS50b2dnbGVMb2FkaW5nKCk7IFxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDEwMDApKTtcbiAgICBhdXRoU3RvcmUudG9nZ2xlTG9hZGluZygpOyBcbiAgICBpZiAoYXV0aFN0b3JlLnVzZXJzLmhhcyhhdXRoU3RvcmUuRW1haWwpKSB7XG4gICAgICAgIGF1dGhTdG9yZS5leGlzdGluZ1VzZXIgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGF1dGhTdG9yZS5jaGFuZ2VQYWdlKCk7XG4gICAgfVxufTtcblxuY29uc3QgaGFuZGxlU29jaWFsQ2xpY2sgPSAoaWQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhpZCk7XG59O1xuPC9zY3JpcHQ+XG4iXSwiZmlsZSI6Ii9ob21lL2toYWxpZC9mcm9udGVuZC1xYS1zZWxlY3Rpb24vUUEvY29tcG9uZW50cy9UZW1wbGF0ZXMvU2lnbkluRm9ybS52dWUifQ==