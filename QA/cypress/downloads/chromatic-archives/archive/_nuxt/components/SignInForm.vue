import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/SignInForm.vue");import { ElInput as __nuxt_component_0 } from "/_nuxt/node_modules/.pnpm/element-plus@2.8.5_vue@3.5.12_typescript@5.6.3_/node_modules/element-plus/es/components/input/index.mjs?v=50424943";
import { default as __nuxt_component_1 } from "/_nuxt/components/SubmitButton.vue";
import "/_nuxt/node_modules/.pnpm/element-plus@2.8.5_vue@3.5.12_typescript@5.6.3_/node_modules/element-plus/es/components/input/style/css.mjs?v=50424943";
/* Injection by vite-plugin-vue-inspector Start */
import { createVNode as __createVNode,createElementVNode as __createElementVNode,createElementBlock as __createElementBlock } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=50424943"
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
import SocialLinks from "/_nuxt/components/SocialLinks.vue";
import { Message } from "/_nuxt/node_modules/.pnpm/@element-plus+icons-vue@2.3.1_vue@3.5.12_typescript@5.6.3_/node_modules/@element-plus/icons-vue/dist/index.js?v=50424943";
import WelcomeCard from "/_nuxt/components/WelcomeCard.vue";
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
    authStore.changePage();
};

const handleSocialClick = (id) => {
    console.log(id);
};

const __returned__ = { authStore, updateEmail, handleSubmit, handleSocialClick, AppleIcon, FaceBookIcon, GoogleIcon, SocialLinks, get Message() { return Message }, WelcomeCard, get useAuthStore() { return useAuthStore } }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import { createCommentVNode as _createCommentVNode,   resolveComponent as _resolveComponent, toDisplayString as _toDisplayString, openBlock as _openBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=50424943"

const _hoisted_1 = {
  class: "h-[598px] max-w-[374px] p-5 flex-col items-center justify-between bg-black text-white space-y-4",
  "data-v-inspector": "components/SignInForm.vue:2:5"
}
const _hoisted_2 = {
  class: "w-full flex justify-center",
  "data-v-inspector": "components/SignInForm.vue:4:9"
}
const _hoisted_3 = {
  class: "space-y-4",
  "data-v-inspector": "components/SignInForm.vue:12:9"
}
const _hoisted_4 = {
  class: "space-y-4",
  "data-v-inspector": "components/SignInForm.vue:13:13"
}
const _hoisted_5 = {
  key: 0,
  class: "text-red-500 text-xs",
  "data-test": "sign_in-error",
  "data-v-inspector": "components/SignInForm.vue:23:17"
}
const _hoisted_6 = {
  class: "space-y-4",
  "data-test": "sign_in-socials",
  "data-v-inspector": "components/SignInForm.vue:36:9"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_input = __nuxt_component_0
  const _component_SubmitButton = __nuxt_component_1

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createCommentVNode(" Logo and Welcome Text "),
    _createElementVNode("div", _hoisted_2, [
      _createVNode($setup["WelcomeCard"])
    ]),
    _cache[4] || (_cache[4] = _createElementVNode("p", {
      class: "w-full text-center text-sm font-semibold",
      "data-test": "sign_in-info",
      "data-v-inspector": "components/SignInForm.vue:8:9"
    }, " Enter your email ", -1 /* HOISTED */)),
    _createCommentVNode(" Email Form "),
    _createElementVNode("div", _hoisted_3, [
      _createElementVNode("div", _hoisted_4, [
        _createVNode(_component_el_input, {
          modelValue: $setup.authStore.Email,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.authStore.Email) = $event)),
          class: "w-full",
          placeholder: "Email Address",
          "prefix-icon": $setup.Message,
          error: $setup.authStore.errors.Email,
          onInput: $setup.updateEmail,
          "data-test": "sign_in-input"
        }, null, 8 /* PROPS */, ["modelValue", "prefix-icon", "error"]),
        ($setup.authStore.errors.Email)
          ? (_openBlock(), _createElementBlock("p", _hoisted_5, _toDisplayString($setup.authStore.errors.Email), 1 /* TEXT */))
          : _createCommentVNode("v-if", true),
        _createVNode(_component_SubmitButton, { "handle-click": $setup.handleSubmit })
      ])
    ]),
    _createCommentVNode(" Divider "),
    _cache[5] || (_cache[5] = _createElementVNode("div", {
      class: "mb-6 flex items-center justify-between gap-4",
      "data-v-inspector": "components/SignInForm.vue:29:9"
    }, [
      _createElementVNode("div", {
        class: "h-[1px] w-40 bg-gradient-to-r from-white/0 to-white",
        "data-v-inspector": "components/SignInForm.vue:30:13"
      }),
      _createElementVNode("div", { "data-v-inspector": "components/SignInForm.vue:31:13" }, "Or"),
      _createElementVNode("div", {
        class: "h-[1px] w-40 bg-gradient-to-r from-white to-white/0",
        "data-v-inspector": "components/SignInForm.vue:32:13"
      })
    ], -1 /* HOISTED */)),
    _createCommentVNode(" Social Login Buttons "),
    _createElementVNode("div", _hoisted_6, [
      _createVNode($setup["SocialLinks"], {
        svg: $setup.GoogleIcon,
        text: "Continue with Google    ",
        onClick: _cache[1] || (_cache[1] = $event => ($setup.handleSocialClick(1)))
      }),
      _createVNode($setup["SocialLinks"], {
        svg: $setup.FaceBookIcon,
        text: "Continue with Facebook",
        onClick: _cache[2] || (_cache[2] = $event => ($setup.handleSocialClick(2)))
      }),
      _createVNode($setup["SocialLinks"], {
        svg: $setup.AppleIcon,
        text: "Continue with Apple     ",
        onClick: _cache[3] || (_cache[3] = $event => ($setup.handleSocialClick(3)))
      })
    ]),
    _createCommentVNode(" Terms and Conditions "),
    _cache[6] || (_cache[6] = _createElementVNode("p", {
      class: "text-center text-sm text-gray-500",
      "data-test": "sign_in-terms",
      "data-v-inspector": "components/SignInForm.vue:43:9"
    }, [
      _createElementVNode("a", {
        href: "#",
        class: "hover:text-gray-400 cursor-pointer text-center text-white/40",
        "data-v-inspector": "components/SignInForm.vue:44:13"
      }, "Terms & Conditions")
    ], -1 /* HOISTED */))
  ]))
}


_sfc_main.__hmrId = "06f5661f"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/khalid/frontend-qa-selection/QA/components/SignInForm.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiU2lnbkluRm9ybS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJoLVs1OThweF0gbWF4LXctWzM3NHB4XSBwLTUgZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBiZy1ibGFjayB0ZXh0LXdoaXRlIHNwYWNlLXktNFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1NpZ25JbkZvcm0udnVlOjI6NVwiPlxuICAgICAgICA8IS0tIExvZ28gYW5kIFdlbGNvbWUgVGV4dCAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvU2lnbkluRm9ybS52dWU6NDo5XCI+XG4gICAgICAgICAgICA8V2VsY29tZUNhcmQgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHAgY2xhc3M9XCJ3LWZ1bGwgdGV4dC1jZW50ZXIgdGV4dC1zbSBmb250LXNlbWlib2xkXCIgZGF0YS10ZXN0PVwic2lnbl9pbi1pbmZvXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvU2lnbkluRm9ybS52dWU6ODo5XCI+XG4gICAgICAgICAgICBFbnRlciB5b3VyIGVtYWlsXG4gICAgICAgIDwvcD5cbiAgICAgICAgPCEtLSBFbWFpbCBGb3JtIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3BhY2UteS00XCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvU2lnbkluRm9ybS52dWU6MTI6OVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwYWNlLXktNFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1NpZ25JbkZvcm0udnVlOjEzOjEzXCI+XG4gICAgICAgICAgICAgICAgPGVsLWlucHV0IFxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiYXV0aFN0b3JlLkVtYWlsXCIgXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidy1mdWxsXCIgXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWwgQWRkcmVzc1wiIFxuICAgICAgICAgICAgICAgICAgICA6cHJlZml4LWljb249XCJNZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgOmVycm9yPVwiYXV0aFN0b3JlLmVycm9ycy5FbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cInVwZGF0ZUVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0PVwic2lnbl9pbi1pbnB1dFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8cCB2LWlmPVwiYXV0aFN0b3JlLmVycm9ycy5FbWFpbFwiIGNsYXNzPVwidGV4dC1yZWQtNTAwIHRleHQteHNcIiBkYXRhLXRlc3Q9XCJzaWduX2luLWVycm9yXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvU2lnbkluRm9ybS52dWU6MjM6MTdcIj57eyBhdXRoU3RvcmUuZXJyb3JzLkVtYWlsIH19PC9wPlxuICAgICAgICAgICAgICAgIDxTdWJtaXRCdXR0b24gOmhhbmRsZS1jbGljaz1cImhhbmRsZVN1Ym1pdFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPCEtLSBEaXZpZGVyIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWItNiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTRcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9TaWduSW5Gb3JtLnZ1ZToyOTo5XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaC1bMXB4XSB3LTQwIGJnLWdyYWRpZW50LXRvLXIgZnJvbS13aGl0ZS8wIHRvLXdoaXRlXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvU2lnbkluRm9ybS52dWU6MzA6MTNcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvU2lnbkluRm9ybS52dWU6MzE6MTNcIj5PcjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImgtWzFweF0gdy00MCBiZy1ncmFkaWVudC10by1yIGZyb20td2hpdGUgdG8td2hpdGUvMFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1NpZ25JbkZvcm0udnVlOjMyOjEzXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwhLS0gU29jaWFsIExvZ2luIEJ1dHRvbnMgLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzcGFjZS15LTRcIiBkYXRhLXRlc3Q9XCJzaWduX2luLXNvY2lhbHNcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9TaWduSW5Gb3JtLnZ1ZTozNjo5XCI+XG4gICAgICAgICAgICA8U29jaWFsTGlua3MgOnN2Zz1cIkdvb2dsZUljb25cIiB0ZXh0PVwiQ29udGludWUgd2l0aCBHb29nbGUmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtcIiBAY2xpY2s9XCJoYW5kbGVTb2NpYWxDbGljaygxKVwiIC8+XG4gICAgICAgICAgICA8U29jaWFsTGlua3MgOnN2Zz1cIkZhY2VCb29rSWNvblwiIHRleHQ9XCJDb250aW51ZSB3aXRoIEZhY2Vib29rXCIgQGNsaWNrPVwiaGFuZGxlU29jaWFsQ2xpY2soMilcIiAvPlxuICAgICAgICAgICAgPFNvY2lhbExpbmtzIDpzdmc9XCJBcHBsZUljb25cIiB0ZXh0PVwiQ29udGludWUgd2l0aCBBcHBsZSZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO1wiIEBjbGljaz1cImhhbmRsZVNvY2lhbENsaWNrKDMpXCIgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPCEtLSBUZXJtcyBhbmQgQ29uZGl0aW9ucyAtLT5cbiAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS01MDBcIiBkYXRhLXRlc3Q9XCJzaWduX2luLXRlcm1zXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvU2lnbkluRm9ybS52dWU6NDM6OVwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImhvdmVyOnRleHQtZ3JheS00MDAgY3Vyc29yLXBvaW50ZXIgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZS80MFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1NpZ25JbkZvcm0udnVlOjQ0OjEzXCI+VGVybXMgJiBDb25kaXRpb25zPC9hPlxuICAgICAgICA8L3A+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwPlxuaW1wb3J0IEFwcGxlSWNvbiBmcm9tICd+L2Fzc2V0cy9JY29ucy9Tb2NpYWxJY29ucy9BcHBsZUljb24udnVlJztcbmltcG9ydCBGYWNlQm9va0ljb24gZnJvbSAnfi9hc3NldHMvSWNvbnMvU29jaWFsSWNvbnMvRmFjZUJvb2tJY29uLnZ1ZSc7XG5pbXBvcnQgR29vZ2xlSWNvbiBmcm9tICd+L2Fzc2V0cy9JY29ucy9Tb2NpYWxJY29ucy9Hb29nbGVJY29uLnZ1ZSc7XG5pbXBvcnQgU29jaWFsTGlua3MgZnJvbSAnfi9jb21wb25lbnRzL1NvY2lhbExpbmtzLnZ1ZSc7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnQGVsZW1lbnQtcGx1cy9pY29ucy12dWUnO1xuaW1wb3J0IFdlbGNvbWVDYXJkIGZyb20gJ34vY29tcG9uZW50cy9XZWxjb21lQ2FyZC52dWUnO1xuaW1wb3J0IHsgdXNlQXV0aFN0b3JlIH0gZnJvbSAnfi9zdG9yZXMvQXV0aFN0b3JlJztcblxuY29uc3QgYXV0aFN0b3JlID0gdXNlQXV0aFN0b3JlKCk7XG5cbmNvbnN0IHVwZGF0ZUVtYWlsID0gKHZhbHVlKSA9PiB7XG4gICAgYXV0aFN0b3JlLkVtYWlsID0gdmFsdWU7IFxuICAgIGF1dGhTdG9yZS52YWxpZGF0ZSgpXG59O1xuXG5jb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoKSA9PiB7XG4gICAgYXV0aFN0b3JlLnZhbGlkYXRlKClcbiAgICBhdXRoU3RvcmUudG9nZ2xlTG9hZGluZygpOyBcbiAgICBjb25zdCBpc1ZhbGlkID0gYXV0aFN0b3JlLnZhbGlkYXRlRW1haWwoKTtcbiAgICBpZiAoaXNWYWxpZCAhPT0gbnVsbCkge1xuICAgICAgICBhdXRoU3RvcmUudG9nZ2xlTG9hZGluZygpOyBcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCAxMDAwKSk7XG4gICAgYXV0aFN0b3JlLnRvZ2dsZUxvYWRpbmcoKTsgXG4gICAgYXV0aFN0b3JlLmNoYW5nZVBhZ2UoKTtcbn07XG5cbmNvbnN0IGhhbmRsZVNvY2lhbENsaWNrID0gKGlkKSA9PiB7XG4gICAgY29uc29sZS5sb2coaWQpO1xufTtcbjwvc2NyaXB0PlxuIl0sImZpbGUiOiIvaG9tZS9raGFsaWQvZnJvbnRlbmQtcWEtc2VsZWN0aW9uL1FBL2NvbXBvbmVudHMvU2lnbkluRm9ybS52dWUifQ==