import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/Templates/SignUpForm.vue");import { ElInput as __nuxt_component_0 } from "/_nuxt/node_modules/.pnpm/element-plus@2.8.5_vue@3.5.12_typescript@5.6.3_/node_modules/element-plus/es/components/input/index.mjs?v=0984fb0a";
import { default as __nuxt_component_1 } from "/_nuxt/components/Atoms/SubmitButton.vue";
import "/_nuxt/node_modules/.pnpm/element-plus@2.8.5_vue@3.5.12_typescript@5.6.3_/node_modules/element-plus/es/components/input/style/css.mjs?v=0984fb0a";
/* Injection by vite-plugin-vue-inspector Start */
import { createElementVNode as __createElementVNode,createElementBlock as __createElementBlock,createVNode as __createVNode } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=0984fb0a"
function _interopVNode(vnode) {
  if (vnode && vnode.props && 'data-v-inspector' in vnode.props) {
    const data = vnode.props['data-v-inspector']
    delete vnode.props['data-v-inspector']
    Object.defineProperty(vnode.props, '__v_inspector', { value: data, enumerable: false })
  }
  return vnode
}
function _createElementVNode(...args) { return _interopVNode(__createElementVNode(...args)) }
function _createElementBlock(...args) { return _interopVNode(__createElementBlock(...args)) }
function _createVNode(...args) { return _interopVNode(__createVNode(...args)) }
/* Injection by vite-plugin-vue-inspector End */
import { ref } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=0984fb0a";
import { User, Message, Key } from "/_nuxt/node_modules/.pnpm/@element-plus+icons-vue@2.3.1_vue@3.5.12_typescript@5.6.3_/node_modules/@element-plus/icons-vue/dist/index.js?v=0984fb0a";
import { useAuthStore } from "/_nuxt/stores/AuthStore.ts";


const _sfc_main = {
  __name: 'SignUpForm',
  setup(__props, { expose: __expose }) {
  __expose();

const authStore = useAuthStore();
const profileImage = ref({ src: null });

function previewImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            profileImage.value.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

const resetError = (field) => {
    authStore.validate()
    if (authStore.errors[field] === "") {
        authStore.errors[field] = null;
    }
};

const handleClick = () => {
    if (authStore.validate()) {
        authStore.confirmEmailPage();
    }
};

const __returned__ = { authStore, profileImage, previewImage, resetError, handleClick, ref, get User() { return User }, get Message() { return Message }, get Key() { return Key }, get useAuthStore() { return useAuthStore } }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import {  openBlock as _openBlock,  createTextVNode as _createTextVNode, resolveComponent as _resolveComponent,  toDisplayString as _toDisplayString, createCommentVNode as _createCommentVNode, createStaticVNode as _createStaticVNode } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=0984fb0a"
import _imports_0 from "/_nuxt/public/file_input.png?import"


const _hoisted_1 = {
  class: "h-[598px] max-w-[374px] p-5 flex flex-col items-center bg-black text-white space-y-3",
  "data-v-inspector": "components/Templates/SignUpForm.vue:2:5"
}
const _hoisted_2 = {
  class: "flex items-center space-x-4 relative",
  "data-v-inspector": "components/Templates/SignUpForm.vue:17:9"
}
const _hoisted_3 = {
  class: "space-y-3 w-full",
  "data-v-inspector": "components/Templates/SignUpForm.vue:46:9"
}
const _hoisted_4 = {
  class: "w-full",
  "data-v-inspector": "components/Templates/SignUpForm.vue:47:13"
}
const _hoisted_5 = {
  key: 0,
  class: "text-red-500 text-xs",
  "data-test": "sign_up-name-input-error",
  "data-v-inspector": "components/Templates/SignUpForm.vue:57:17"
}
const _hoisted_6 = { "data-v-inspector": "components/Templates/SignUpForm.vue:60:13" }
const _hoisted_7 = {
  key: 0,
  class: "text-red-500 text-xs",
  "data-test": "sign_up-surname-input-error",
  "data-v-inspector": "components/Templates/SignUpForm.vue:70:17"
}
const _hoisted_8 = { "data-v-inspector": "components/Templates/SignUpForm.vue:73:13" }
const _hoisted_9 = {
  key: 0,
  class: "text-red-500 text-xs",
  "data-test": "sign_up-email-input-error",
  "data-v-inspector": "components/Templates/SignUpForm.vue:84:17"
}
const _hoisted_10 = { "data-v-inspector": "components/Templates/SignUpForm.vue:87:13" }
const _hoisted_11 = {
  key: 0,
  class: "text-red-500 text-xs",
  "data-test": "sign_up-password-input-error",
  "data-v-inspector": "components/Templates/SignUpForm.vue:98:17"
}
const _hoisted_12 = { "data-v-inspector": "components/Templates/SignUpForm.vue:101:13" }
const _hoisted_13 = {
  key: 0,
  class: "text-red-500 text-xs",
  "data-test": "sign_up-confirm_password-input-error",
  "data-v-inspector": "components/Templates/SignUpForm.vue:112:17"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_input = __nuxt_component_0
  const _component_AtomsSubmitButton = __nuxt_component_1

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", {
      class: "next-icon flex h-8 scale-100 cursor-pointer items-center justify-center gap-2 transition-all active:scale-95 text-sm",
      onClick: _cache[0] || (_cache[0] = $event => {$setup.authStore.changePage();}),
      "data-v-inspector": "components/Templates/SignUpForm.vue:3:9"
    }, _cache[16] || (_cache[16] = [
      _createElementVNode("div", {
        class: "inline-flex items-center justify-center pt-0.5 rotate-180",
        "data-v-inspector": "components/Templates/SignUpForm.vue:5:13"
      }, [
        _createElementVNode("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          class: "octicon arrow-symbol-mktg",
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          "data-v-inspector": "components/Templates/SignUpForm.vue:6:17"
        }, [
          _createElementVNode("path", {
            fill: "currentColor",
            d: "M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z",
            "data-v-inspector": "components/Templates/SignUpForm.vue:8:21"
          }),
          _createElementVNode("path", {
            class: "octicon-chevrow-stem",
            stroke: "currentColor",
            d: "M1.75 8H11",
            "stroke-width": "1.5",
            "stroke-linecap": "round",
            "data-v-inspector": "components/Templates/SignUpForm.vue:10:21"
          })
        ])
      ], -1 /* HOISTED */),
      _createTextVNode(" Back to Log in ")
    ])),
    _createElementVNode("div", _hoisted_2, [
      _createElementVNode("input", {
        id: "fileInput",
        type: "file",
        accept: "image/*",
        class: "absolute inset-0 opacity-0 cursor-pointer",
        onChange: $setup.previewImage,
        "data-v-inspector": "components/Templates/SignUpForm.vue:18:13"
      }, null, 32 /* NEED_HYDRATION */),
      _cache[17] || (_cache[17] = _createStaticVNode("<div class=\"w-1/2 border border-white flex justify-center items-center rounded-md\" data-v-inspector=\"components/Templates/SignUpForm.vue:21:13\" data-v-ee42eec4><img id=\"profileImage\" src=\"" + _imports_0 + "\" alt=\"Profile Picture\" class=\"cursor-pointer w-24 h-24\" data-v-inspector=\"components/Templates/SignUpForm.vue:22:17\" data-v-ee42eec4></div><div data-v-inspector=\"components/Templates/SignUpForm.vue:26:13\" data-v-ee42eec4><h5 class=\"mb-1 text-sm font-semibold\" data-test=\"sign_up-greet\" data-v-inspector=\"components/Templates/SignUpForm.vue:27:17\" data-v-ee42eec4>Nice to meet you,</h5><p class=\"text-xs text-white/70\" data-test=\"sign_up-info\" data-v-inspector=\"components/Templates/SignUpForm.vue:28:17\" data-v-ee42eec4>Upload a profile picture and complete your presentation</p></div>", 2))
    ]),
    _cache[18] || (_cache[18] = _createStaticVNode("<div class=\"mb-6 text-xs text-white/70\" data-test=\"sign_up-terms\" data-v-inspector=\"components/Templates/SignUpForm.vue:32:9\" data-v-ee42eec4><label class=\"flex items-center\" data-v-inspector=\"components/Templates/SignUpForm.vue:33:13\" data-v-ee42eec4><div class=\"flex h-4 w-4 cursor-pointer items-center justify-center rounded border pt-0.5 transition-all border-white/50 hover:border-white\" data-v-inspector=\"components/Templates/SignUpForm.vue:34:17\" data-v-ee42eec4><i class=\"fa-solid fa-check tex-sm\" data-v-inspector=\"components/Templates/SignUpForm.vue:35:21\" data-v-ee42eec4></i></div><span class=\"ml-2 text-sm\" data-v-inspector=\"components/Templates/SignUpForm.vue:37:17\" data-v-ee42eec4>I accept <a href=\"#\" class=\"underline text-white\" data-v-inspector=\"components/Templates/SignUpForm.vue:38:21\" data-v-ee42eec4>Terms &amp; Conditions</a> and <a href=\"#\" class=\"underline text-white\" data-v-inspector=\"components/Templates/SignUpForm.vue:39:21\" data-v-ee42eec4>Privacy Policy</a></span></label></div><p class=\"mb-4 text-center text-xs\" data-test=\"sign_up-command\" data-v-inspector=\"components/Templates/SignUpForm.vue:44:9\" data-v-ee42eec4>Enter your details</p>", 2)),
    _createElementVNode("div", _hoisted_3, [
      _createElementVNode("div", _hoisted_4, [
        _createVNode(_component_el_input, {
          modelValue: $setup.authStore.Name,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.authStore.Name) = $event)),
          class: "w-full",
          placeholder: "Name",
          "prefix-icon": $setup.User,
          onFocus: _cache[2] || (_cache[2] = $event => ($setup.authStore.touched.Name = true)),
          onInput: _cache[3] || (_cache[3] = $event => ($setup.resetError('Name'))),
          "data-test": "sign_up-name-input"
        }, null, 8 /* PROPS */, ["modelValue", "prefix-icon"]),
        ($setup.authStore.touched.Name && $setup.authStore.errors.Name)
          ? (_openBlock(), _createElementBlock("p", _hoisted_5, _toDisplayString($setup.authStore.errors.Name), 1 /* TEXT */))
          : _createCommentVNode("v-if", true)
      ]),
      _createElementVNode("div", _hoisted_6, [
        _createVNode(_component_el_input, {
          modelValue: $setup.authStore.Surname,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => (($setup.authStore.Surname) = $event)),
          class: "w-full",
          placeholder: "Surname",
          "prefix-icon": $setup.User,
          onFocus: _cache[5] || (_cache[5] = $event => ($setup.authStore.touched.Surname = true)),
          onInput: _cache[6] || (_cache[6] = $event => ($setup.resetError('Surname'))),
          "data-test": "sign_up-surname-input"
        }, null, 8 /* PROPS */, ["modelValue", "prefix-icon"]),
        ($setup.authStore.touched.Surname && $setup.authStore.errors.Surname)
          ? (_openBlock(), _createElementBlock("p", _hoisted_7, _toDisplayString($setup.authStore.errors.Surname), 1 /* TEXT */))
          : _createCommentVNode("v-if", true)
      ]),
      _createElementVNode("div", _hoisted_8, [
        _createVNode(_component_el_input, {
          modelValue: $setup.authStore.Email,
          "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => (($setup.authStore.Email) = $event)),
          class: "w-full",
          placeholder: "Email",
          "prefix-icon": $setup.Message,
          onFocus: _cache[8] || (_cache[8] = $event => ($setup.authStore.touched.Email = true)),
          onInput: _cache[9] || (_cache[9] = $event => ($setup.resetError('Email'))),
          "data-test": "sign_up-email-input"
        }, null, 8 /* PROPS */, ["modelValue", "prefix-icon"]),
        ($setup.authStore.touched.Email && $setup.authStore.errors.Email)
          ? (_openBlock(), _createElementBlock("p", _hoisted_9, _toDisplayString($setup.authStore.errors.Email), 1 /* TEXT */))
          : _createCommentVNode("v-if", true)
      ]),
      _createElementVNode("div", _hoisted_10, [
        _createVNode(_component_el_input, {
          modelValue: $setup.authStore.Password,
          "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => (($setup.authStore.Password) = $event)),
          class: "w-full",
          placeholder: "Password",
          "prefix-icon": $setup.Key,
          onFocus: _cache[11] || (_cache[11] = $event => ($setup.authStore.touched.Password = true)),
          onInput: _cache[12] || (_cache[12] = $event => ($setup.resetError('Password'))),
          "data-test": "sign_up-password-input"
        }, null, 8 /* PROPS */, ["modelValue", "prefix-icon"]),
        ($setup.authStore.touched.Password && $setup.authStore.errors.Password)
          ? (_openBlock(), _createElementBlock("p", _hoisted_11, _toDisplayString($setup.authStore.errors.Password), 1 /* TEXT */))
          : _createCommentVNode("v-if", true)
      ]),
      _createElementVNode("div", _hoisted_12, [
        _createVNode(_component_el_input, {
          modelValue: $setup.authStore.ConfirmPassword,
          "onUpdate:modelValue": _cache[13] || (_cache[13] = $event => (($setup.authStore.ConfirmPassword) = $event)),
          class: "w-full",
          placeholder: "Confirm Password",
          "prefix-icon": $setup.Key,
          onFocus: _cache[14] || (_cache[14] = $event => ($setup.authStore.touched.ConfirmPassword = true)),
          onInput: _cache[15] || (_cache[15] = $event => ($setup.resetError('ConfirmPassword'))),
          "data-test": "sign_up-confirm_password-input"
        }, null, 8 /* PROPS */, ["modelValue", "prefix-icon"]),
        ($setup.authStore.touched.ConfirmPassword && $setup.authStore.errors.ConfirmPassword)
          ? (_openBlock(), _createElementBlock("p", _hoisted_13, _toDisplayString($setup.authStore.errors.ConfirmPassword), 1 /* TEXT */))
          : _createCommentVNode("v-if", true)
      ])
    ]),
    _createVNode(_component_AtomsSubmitButton, { "handle-click": $setup.handleClick }),
    _cache[19] || (_cache[19] = _createElementVNode("p", {
      class: "text-center text-sm text-gray-500 mb-1",
      "data-v-inspector": "components/Templates/SignUpForm.vue:118:9"
    }, [
      _createElementVNode("a", {
        href: "#",
        class: "hover:text-gray-400 cursor-pointer text-center text-white/40",
        "data-test": "sign_up-terms-link",
        "data-v-inspector": "components/Templates/SignUpForm.vue:119:13"
      }, "Terms & Conditions")
    ], -1 /* HOISTED */))
  ]))
}

import "/_nuxt/components/Templates/SignUpForm.vue?vue&type=style&index=0&scoped=ee42eec4&lang.css"

_sfc_main.__hmrId = "ee42eec4"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-ee42eec4"],['__file',"/home/khalid/frontend-qa-selection/QA/components/Templates/SignUpForm.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0SEE7QUFDQTtBQUNBOzs7Ozs7OztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIlNpZ25VcEZvcm0udnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiaC1bNTk4cHhdIG1heC13LVszNzRweF0gcC01IGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGJnLWJsYWNrIHRleHQtd2hpdGUgc3BhY2UteS0zXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvVGVtcGxhdGVzL1NpZ25VcEZvcm0udnVlOjI6NVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibmV4dC1pY29uIGZsZXggaC04IHNjYWxlLTEwMCBjdXJzb3ItcG9pbnRlciBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTIgdHJhbnNpdGlvbi1hbGwgYWN0aXZlOnNjYWxlLTk1IHRleHQtc21cIlxuICAgICAgICAgICAgQGNsaWNrPVwiYXV0aFN0b3JlLmNoYW5nZVBhZ2UoKTtcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9UZW1wbGF0ZXMvU2lnblVwRm9ybS52dWU6Mzo5XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB0LTAuNSByb3RhdGUtMTgwXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvVGVtcGxhdGVzL1NpZ25VcEZvcm0udnVlOjU6MTNcIj5cbiAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cIm9jdGljb24gYXJyb3ctc3ltYm9sLW1rdGdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIlxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cIm5vbmVcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9UZW1wbGF0ZXMvU2lnblVwRm9ybS52dWU6NjoxN1wiPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk03LjI4MDMzIDMuMjE5NjdDNi45ODc0NCAyLjkyNjc4IDYuNTEyNTYgMi45MjY3OCA2LjIxOTY3IDMuMjE5NjdDNS45MjY3OCAzLjUxMjU2IDUuOTI2NzggMy45ODc0NCA2LjIxOTY3IDQuMjgwMzNMNy4yODAzMyAzLjIxOTY3Wk0xMSA4TDExLjUzMDMgOC41MzAzM0MxMS44MjMyIDguMjM3NDQgMTEuODIzMiA3Ljc2MjU2IDExLjUzMDMgNy40Njk2N0wxMSA4Wk02LjIxOTY3IDExLjcxOTdDNS45MjY3OCAxMi4wMTI2IDUuOTI2NzggMTIuNDg3NCA2LjIxOTY3IDEyLjc4MDNDNi41MTI1NiAxMy4wNzMyIDYuOTg3NDQgMTMuMDczMiA3LjI4MDMzIDEyLjc4MDNMNi4yMTk2NyAxMS43MTk3Wk02LjIxOTY3IDQuMjgwMzNMMTAuNDY5NyA4LjUzMDMzTDExLjUzMDMgNy40Njk2N0w3LjI4MDMzIDMuMjE5NjdMNi4yMTk2NyA0LjI4MDMzWk0xMC40Njk3IDcuNDY5NjdMNi4yMTk2NyAxMS43MTk3TDcuMjgwMzMgMTIuNzgwM0wxMS41MzAzIDguNTMwMzNMMTAuNDY5NyA3LjQ2OTY3WlwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1RlbXBsYXRlcy9TaWduVXBGb3JtLnZ1ZTo4OjIxXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJvY3RpY29uLWNoZXZyb3ctc3RlbVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMS43NSA4SDExXCIgc3Ryb2tlLXdpZHRoPVwiMS41XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9UZW1wbGF0ZXMvU2lnblVwRm9ybS52dWU6MTA6MjFcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIEJhY2sgdG8gTG9nIGluXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTQgcmVsYXRpdmVcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9UZW1wbGF0ZXMvU2lnblVwRm9ybS52dWU6MTc6OVwiPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiZmlsZUlucHV0XCIgdHlwZT1cImZpbGVcIiBhY2NlcHQ9XCJpbWFnZS8qXCIgY2xhc3M9XCJhYnNvbHV0ZSBpbnNldC0wIG9wYWNpdHktMCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgQGNoYW5nZT1cInByZXZpZXdJbWFnZVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1RlbXBsYXRlcy9TaWduVXBGb3JtLnZ1ZToxODoxM1wiIC8+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEvMiBib3JkZXIgYm9yZGVyLXdoaXRlIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHJvdW5kZWQtbWRcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9UZW1wbGF0ZXMvU2lnblVwRm9ybS52dWU6MjE6MTNcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGlkPVwicHJvZmlsZUltYWdlXCIgc3JjPVwicHVibGljL2ZpbGVfaW5wdXQucG5nXCIgYWx0PVwiUHJvZmlsZSBQaWN0dXJlXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjdXJzb3ItcG9pbnRlciB3LTI0IGgtMjRcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9UZW1wbGF0ZXMvU2lnblVwRm9ybS52dWU6MjI6MTdcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvVGVtcGxhdGVzL1NpZ25VcEZvcm0udnVlOjI2OjEzXCI+XG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwibWItMSB0ZXh0LXNtIGZvbnQtc2VtaWJvbGRcIiBkYXRhLXRlc3Q9XCJzaWduX3VwLWdyZWV0XCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvVGVtcGxhdGVzL1NpZ25VcEZvcm0udnVlOjI3OjE3XCI+TmljZSB0byBtZWV0IHlvdSw8L2g1PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC14cyB0ZXh0LXdoaXRlLzcwXCIgZGF0YS10ZXN0PVwic2lnbl91cC1pbmZvXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvVGVtcGxhdGVzL1NpZ25VcEZvcm0udnVlOjI4OjE3XCI+VXBsb2FkIGEgcHJvZmlsZSBwaWN0dXJlIGFuZCBjb21wbGV0ZSB5b3VyIHByZXNlbnRhdGlvbjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwibWItNiB0ZXh0LXhzIHRleHQtd2hpdGUvNzBcIiBkYXRhLXRlc3Q9XCJzaWduX3VwLXRlcm1zXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvVGVtcGxhdGVzL1NpZ25VcEZvcm0udnVlOjMyOjlcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvVGVtcGxhdGVzL1NpZ25VcEZvcm0udnVlOjMzOjEzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggaC00IHctNCBjdXJzb3ItcG9pbnRlciBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZCBib3JkZXIgcHQtMC41IHRyYW5zaXRpb24tYWxsIGJvcmRlci13aGl0ZS81MCBob3Zlcjpib3JkZXItd2hpdGVcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9UZW1wbGF0ZXMvU2lnblVwRm9ybS52dWU6MzQ6MTdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jaGVjayB0ZXgtc21cIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9UZW1wbGF0ZXMvU2lnblVwRm9ybS52dWU6MzU6MjFcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtbC0yIHRleHQtc21cIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9UZW1wbGF0ZXMvU2lnblVwRm9ybS52dWU6Mzc6MTdcIj5JIGFjY2VwdFxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwidW5kZXJsaW5lIHRleHQtd2hpdGVcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9UZW1wbGF0ZXMvU2lnblVwRm9ybS52dWU6Mzg6MjFcIj5UZXJtcyAmIENvbmRpdGlvbnM8L2E+IGFuZFxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwidW5kZXJsaW5lIHRleHQtd2hpdGVcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9UZW1wbGF0ZXMvU2lnblVwRm9ybS52dWU6Mzk6MjFcIj5Qcml2YWN5IFBvbGljeTwvYT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8cCBjbGFzcz1cIm1iLTQgdGV4dC1jZW50ZXIgdGV4dC14c1wiIGRhdGEtdGVzdD1cInNpZ25fdXAtY29tbWFuZFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1RlbXBsYXRlcy9TaWduVXBGb3JtLnZ1ZTo0NDo5XCI+RW50ZXIgeW91ciBkZXRhaWxzPC9wPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzcGFjZS15LTMgdy1mdWxsXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvVGVtcGxhdGVzL1NpZ25VcEZvcm0udnVlOjQ2OjlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGxcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9UZW1wbGF0ZXMvU2lnblVwRm9ybS52dWU6NDc6MTNcIj5cbiAgICAgICAgICAgICAgICA8ZWwtaW5wdXQgXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJhdXRoU3RvcmUuTmFtZVwiIFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInctZnVsbFwiIFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIiBcbiAgICAgICAgICAgICAgICAgICAgOnByZWZpeC1pY29uPVwiVXNlclwiIFxuICAgICAgICAgICAgICAgICAgICBAZm9jdXM9XCJhdXRoU3RvcmUudG91Y2hlZC5OYW1lID0gdHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cInJlc2V0RXJyb3IoJ05hbWUnKVwiIFxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3Q9XCJzaWduX3VwLW5hbWUtaW5wdXRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHAgdi1pZj1cImF1dGhTdG9yZS50b3VjaGVkLk5hbWUgJiYgYXV0aFN0b3JlLmVycm9ycy5OYW1lXCIgY2xhc3M9XCJ0ZXh0LXJlZC01MDAgdGV4dC14c1wiIGRhdGEtdGVzdD1cInNpZ25fdXAtbmFtZS1pbnB1dC1lcnJvclwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1RlbXBsYXRlcy9TaWduVXBGb3JtLnZ1ZTo1NzoxN1wiPnt7IGF1dGhTdG9yZS5lcnJvcnMuTmFtZSB9fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1RlbXBsYXRlcy9TaWduVXBGb3JtLnZ1ZTo2MDoxM1wiPlxuICAgICAgICAgICAgICAgIDxlbC1pbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImF1dGhTdG9yZS5TdXJuYW1lXCIgXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidy1mdWxsXCIgXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3VybmFtZVwiIFxuICAgICAgICAgICAgICAgICAgICA6cHJlZml4LWljb249XCJVc2VyXCIgXG4gICAgICAgICAgICAgICAgICAgIEBmb2N1cz1cImF1dGhTdG9yZS50b3VjaGVkLlN1cm5hbWUgPSB0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgQGlucHV0PVwicmVzZXRFcnJvcignU3VybmFtZScpXCIgXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdD1cInNpZ25fdXAtc3VybmFtZS1pbnB1dFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8cCB2LWlmPVwiYXV0aFN0b3JlLnRvdWNoZWQuU3VybmFtZSAmJiBhdXRoU3RvcmUuZXJyb3JzLlN1cm5hbWVcIiBjbGFzcz1cInRleHQtcmVkLTUwMCB0ZXh0LXhzXCIgZGF0YS10ZXN0PVwic2lnbl91cC1zdXJuYW1lLWlucHV0LWVycm9yXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvVGVtcGxhdGVzL1NpZ25VcEZvcm0udnVlOjcwOjE3XCI+e3sgYXV0aFN0b3JlLmVycm9ycy5TdXJuYW1lIH19PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvVGVtcGxhdGVzL1NpZ25VcEZvcm0udnVlOjczOjEzXCI+XG4gICAgICAgICAgICAgICAgPGVsLWlucHV0IFxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiYXV0aFN0b3JlLkVtYWlsXCIgXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidy1mdWxsXCIgXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIiBcbiAgICAgICAgICAgICAgICAgICAgOnByZWZpeC1pY29uPVwiTWVzc2FnZVwiIFxuICAgICAgICAgICAgICAgICAgICBAZm9jdXM9XCJhdXRoU3RvcmUudG91Y2hlZC5FbWFpbCA9IHRydWVcIlxuICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XCJyZXNldEVycm9yKCdFbWFpbCcpXCIgXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdD1cInNpZ25fdXAtZW1haWwtaW5wdXRcIlxuXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8cCB2LWlmPVwiYXV0aFN0b3JlLnRvdWNoZWQuRW1haWwgJiYgYXV0aFN0b3JlLmVycm9ycy5FbWFpbFwiIGNsYXNzPVwidGV4dC1yZWQtNTAwIHRleHQteHNcIiBkYXRhLXRlc3Q9XCJzaWduX3VwLWVtYWlsLWlucHV0LWVycm9yXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvVGVtcGxhdGVzL1NpZ25VcEZvcm0udnVlOjg0OjE3XCI+e3sgYXV0aFN0b3JlLmVycm9ycy5FbWFpbCB9fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1RlbXBsYXRlcy9TaWduVXBGb3JtLnZ1ZTo4NzoxM1wiPlxuICAgICAgICAgICAgICAgIDxlbC1pbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImF1dGhTdG9yZS5QYXNzd29yZFwiIFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInctZnVsbFwiIFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgXG4gICAgICAgICAgICAgICAgICAgIDpwcmVmaXgtaWNvbj1cIktleVwiIFxuICAgICAgICAgICAgICAgICAgICBAZm9jdXM9XCJhdXRoU3RvcmUudG91Y2hlZC5QYXNzd29yZCA9IHRydWVcIlxuICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XCJyZXNldEVycm9yKCdQYXNzd29yZCcpXCIgXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdD1cInNpZ25fdXAtcGFzc3dvcmQtaW5wdXRcIlxuXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8cCB2LWlmPVwiYXV0aFN0b3JlLnRvdWNoZWQuUGFzc3dvcmQgJiYgYXV0aFN0b3JlLmVycm9ycy5QYXNzd29yZFwiIGNsYXNzPVwidGV4dC1yZWQtNTAwIHRleHQteHNcIiBkYXRhLXRlc3Q9XCJzaWduX3VwLXBhc3N3b3JkLWlucHV0LWVycm9yXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvVGVtcGxhdGVzL1NpZ25VcEZvcm0udnVlOjk4OjE3XCI+e3sgYXV0aFN0b3JlLmVycm9ycy5QYXNzd29yZCB9fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1RlbXBsYXRlcy9TaWduVXBGb3JtLnZ1ZToxMDE6MTNcIj5cbiAgICAgICAgICAgICAgICA8ZWwtaW5wdXQgXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJhdXRoU3RvcmUuQ29uZmlybVBhc3N3b3JkXCIgXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidy1mdWxsXCIgXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29uZmlybSBQYXNzd29yZFwiIFxuICAgICAgICAgICAgICAgICAgICA6cHJlZml4LWljb249XCJLZXlcIiBcbiAgICAgICAgICAgICAgICAgICAgQGZvY3VzPVwiYXV0aFN0b3JlLnRvdWNoZWQuQ29uZmlybVBhc3N3b3JkID0gdHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cInJlc2V0RXJyb3IoJ0NvbmZpcm1QYXNzd29yZCcpXCIgXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdD1cInNpZ25fdXAtY29uZmlybV9wYXNzd29yZC1pbnB1dFwiXG5cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJhdXRoU3RvcmUudG91Y2hlZC5Db25maXJtUGFzc3dvcmQgJiYgYXV0aFN0b3JlLmVycm9ycy5Db25maXJtUGFzc3dvcmRcIiBjbGFzcz1cInRleHQtcmVkLTUwMCB0ZXh0LXhzXCIgZGF0YS10ZXN0PVwic2lnbl91cC1jb25maXJtX3Bhc3N3b3JkLWlucHV0LWVycm9yXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvVGVtcGxhdGVzL1NpZ25VcEZvcm0udnVlOjExMjoxN1wiPnt7IGF1dGhTdG9yZS5lcnJvcnMuQ29uZmlybVBhc3N3b3JkIH19PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxBdG9tc1N1Ym1pdEJ1dHRvbiA6aGFuZGxlLWNsaWNrPVwiaGFuZGxlQ2xpY2tcIiAvPlxuXG4gICAgICAgIDxwIGNsYXNzPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktNTAwIG1iLTFcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9UZW1wbGF0ZXMvU2lnblVwRm9ybS52dWU6MTE4OjlcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJob3Zlcjp0ZXh0LWdyYXktNDAwIGN1cnNvci1wb2ludGVyIHRleHQtY2VudGVyIHRleHQtd2hpdGUvNDBcIiBkYXRhLXRlc3Q9XCJzaWduX3VwLXRlcm1zLWxpbmtcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9UZW1wbGF0ZXMvU2lnblVwRm9ybS52dWU6MTE5OjEzXCI+VGVybXMgJiBDb25kaXRpb25zPC9hPlxuICAgICAgICA8L3A+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwPlxuaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IFVzZXIsIE1lc3NhZ2UsIEtleSB9IGZyb20gJ0BlbGVtZW50LXBsdXMvaWNvbnMtdnVlJztcbmltcG9ydCB7IHVzZUF1dGhTdG9yZSB9IGZyb20gJ34vc3RvcmVzL0F1dGhTdG9yZSc7XG5cbmNvbnN0IGF1dGhTdG9yZSA9IHVzZUF1dGhTdG9yZSgpO1xuY29uc3QgcHJvZmlsZUltYWdlID0gcmVmKHsgc3JjOiBudWxsIH0pO1xuXG5mdW5jdGlvbiBwcmV2aWV3SW1hZ2UoZXZlbnQpIHtcbiAgICBjb25zdCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xuICAgIGlmIChmaWxlKSB7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSAoZSkgPT4ge1xuICAgICAgICAgICAgcHJvZmlsZUltYWdlLnZhbHVlLnNyYyA9IGUudGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgfTtcbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgfVxufVxuXG5jb25zdCByZXNldEVycm9yID0gKGZpZWxkKSA9PiB7XG4gICAgYXV0aFN0b3JlLnZhbGlkYXRlKClcbiAgICBpZiAoYXV0aFN0b3JlLmVycm9yc1tmaWVsZF0gPT09IFwiXCIpIHtcbiAgICAgICAgYXV0aFN0b3JlLmVycm9yc1tmaWVsZF0gPSBudWxsO1xuICAgIH1cbn07XG5cbmNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIGlmIChhdXRoU3RvcmUudmFsaWRhdGUoKSkge1xuICAgICAgICBhdXRoU3RvcmUuY29uZmlybUVtYWlsUGFnZSgpO1xuICAgIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiNmaWxlSW5wdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGluc2V0OiAwO1xufVxuPC9zdHlsZT5cbiJdLCJmaWxlIjoiL2hvbWUva2hhbGlkL2Zyb250ZW5kLXFhLXNlbGVjdGlvbi9RQS9jb21wb25lbnRzL1RlbXBsYXRlcy9TaWduVXBGb3JtLnZ1ZSJ9