import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/Templates/SignUpForm.vue");import { ElInput as __nuxt_component_0 } from "/_nuxt/node_modules/.pnpm/element-plus@2.8.5_vue@3.5.12_typescript@5.6.3_/node_modules/element-plus/es/components/input/index.mjs?v=5d575ae9";
import { default as __nuxt_component_1 } from "/_nuxt/components/Atoms/SubmitButton.vue";
import "/_nuxt/node_modules/.pnpm/element-plus@2.8.5_vue@3.5.12_typescript@5.6.3_/node_modules/element-plus/es/components/input/style/css.mjs?v=5d575ae9";
/* Injection by vite-plugin-vue-inspector Start */
import { createElementVNode as __createElementVNode,createElementBlock as __createElementBlock,createVNode as __createVNode } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=5d575ae9"
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
import { ref } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=5d575ae9";
import { User, Message, Key } from "/_nuxt/node_modules/.pnpm/@element-plus+icons-vue@2.3.1_vue@3.5.12_typescript@5.6.3_/node_modules/@element-plus/icons-vue/dist/index.js?v=5d575ae9";
import { useAuthStore } from "/_nuxt/stores/AuthStore.js";


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
import {  openBlock as _openBlock,  createTextVNode as _createTextVNode, resolveComponent as _resolveComponent,  toDisplayString as _toDisplayString, createCommentVNode as _createCommentVNode, createStaticVNode as _createStaticVNode } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=5d575ae9"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0SEE7QUFDQTtBQUNBOzs7Ozs7OztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIlNpZ25VcEZvcm0udnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiaC1bNTk4cHhdIG1heC13LVszNzRweF0gcC01IGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGJnLWJsYWNrIHRleHQtd2hpdGUgc3BhY2UteS0zXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvVGVtcGxhdGVzL1NpZ25VcEZvcm0udnVlOjI6NVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibmV4dC1pY29uIGZsZXggaC04IHNjYWxlLTEwMCBjdXJzb3ItcG9pbnRlciBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTIgdHJhbnNpdGlvbi1hbGwgYWN0aXZlOnNjYWxlLTk1IHRleHQtc21cIlxuICAgICAgICAgICAgQGNsaWNrPVwiYXV0aFN0b3JlLmNoYW5nZVBhZ2UoKTtcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9UZW1wbGF0ZXMvU2lnblVwRm9ybS52dWU6Mzo5XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB0LTAuNSByb3RhdGUtMTgwXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvVGVtcGxhdGVzL1NpZ25VcEZvcm0udnVlOjU6MTNcIj5cbiAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cIm9jdGljb24gYXJyb3ctc3ltYm9sLW1rdGdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIlxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cIm5vbmVcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9UZW1wbGF0ZXMvU2lnblVwRm9ybS52dWU6NjoxN1wiPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk03LjI4MDMzIDMuMjE5NjdDNi45ODc0NCAyLjkyNjc4IDYuNTEyNTYgMi45MjY3OCA2LjIxOTY3IDMuMjE5NjdDNS45MjY3OCAzLjUxMjU2IDUuOTI2NzggMy45ODc0NCA2LjIxOTY3IDQuMjgwMzNMNy4yODAzMyAzLjIxOTY3Wk0xMSA4TDExLjUzMDMgOC41MzAzM0MxMS44MjMyIDguMjM3NDQgMTEuODIzMiA3Ljc2MjU2IDExLjUzMDMgNy40Njk2N0wxMSA4Wk02LjIxOTY3IDExLjcxOTdDNS45MjY3OCAxMi4wMTI2IDUuOTI2NzggMTIuNDg3NCA2LjIxOTY3IDEyLjc4MDNDNi41MTI1NiAxMy4wNzMyIDYuOTg3NDQgMTMuMDczMiA3LjI4MDMzIDEyLjc4MDNMNi4yMTk2NyAxMS43MTk3Wk02LjIxOTY3IDQuMjgwMzNMMTAuNDY5NyA4LjUzMDMzTDExLjUzMDMgNy40Njk2N0w3LjI4MDMzIDMuMjE5NjdMNi4yMTk2NyA0LjI4MDMzWk0xMC40Njk3IDcuNDY5NjdMNi4yMTk2NyAxMS43MTk3TDcuMjgwMzMgMTIuNzgwM0wxMS41MzAzIDguNTMwMzNMMTAuNDY5NyA3LjQ2OTY3WlwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1RlbXBsYXRlcy9TaWduVXBGb3JtLnZ1ZTo4OjIxXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJvY3RpY29uLWNoZXZyb3ctc3RlbVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMS43NSA4SDExXCIgc3Ryb2tlLXdpZHRoPVwiMS41XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9UZW1wbGF0ZXMvU2lnblVwRm9ybS52dWU6MTA6MjFcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIEJhY2sgdG8gTG9nIGluXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTQgcmVsYXRpdmVcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9UZW1wbGF0ZXMvU2lnblVwRm9ybS52dWU6MTc6OVwiPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiZmlsZUlucHV0XCIgdHlwZT1cImZpbGVcIiBhY2NlcHQ9XCJpbWFnZS8qXCIgY2xhc3M9XCJhYnNvbHV0ZSBpbnNldC0wIG9wYWNpdHktMCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgQGNoYW5nZT1cInByZXZpZXdJbWFnZVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1RlbXBsYXRlcy9TaWduVXBGb3JtLnZ1ZToxODoxM1wiIC8+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEvMiBib3JkZXIgYm9yZGVyLXdoaXRlIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHJvdW5kZWQtbWRcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9UZW1wbGF0ZXMvU2lnblVwRm9ybS52dWU6MjE6MTNcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGlkPVwicHJvZmlsZUltYWdlXCIgc3JjPVwiL3B1YmxpYy9maWxlX2lucHV0LnBuZ1wiIGFsdD1cIlByb2ZpbGUgUGljdHVyZVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY3Vyc29yLXBvaW50ZXIgdy0yNCBoLTI0XCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvVGVtcGxhdGVzL1NpZ25VcEZvcm0udnVlOjIyOjE3XCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1RlbXBsYXRlcy9TaWduVXBGb3JtLnZ1ZToyNjoxM1wiPlxuICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cIm1iLTEgdGV4dC1zbSBmb250LXNlbWlib2xkXCIgZGF0YS10ZXN0PVwic2lnbl91cC1ncmVldFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1RlbXBsYXRlcy9TaWduVXBGb3JtLnZ1ZToyNzoxN1wiPk5pY2UgdG8gbWVldCB5b3UsPC9oNT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQteHMgdGV4dC13aGl0ZS83MFwiIGRhdGEtdGVzdD1cInNpZ25fdXAtaW5mb1wiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1RlbXBsYXRlcy9TaWduVXBGb3JtLnZ1ZToyODoxN1wiPlVwbG9hZCBhIHByb2ZpbGUgcGljdHVyZSBhbmQgY29tcGxldGUgeW91ciBwcmVzZW50YXRpb248L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTYgdGV4dC14cyB0ZXh0LXdoaXRlLzcwXCIgZGF0YS10ZXN0PVwic2lnbl91cC10ZXJtc1wiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1RlbXBsYXRlcy9TaWduVXBGb3JtLnZ1ZTozMjo5XCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlclwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1RlbXBsYXRlcy9TaWduVXBGb3JtLnZ1ZTozMzoxM1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGgtNCB3LTQgY3Vyc29yLXBvaW50ZXIgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQgYm9yZGVyIHB0LTAuNSB0cmFuc2l0aW9uLWFsbCBib3JkZXItd2hpdGUvNTAgaG92ZXI6Ym9yZGVyLXdoaXRlXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvVGVtcGxhdGVzL1NpZ25VcEZvcm0udnVlOjM0OjE3XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtY2hlY2sgdGV4LXNtXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvVGVtcGxhdGVzL1NpZ25VcEZvcm0udnVlOjM1OjIxXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWwtMiB0ZXh0LXNtXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvVGVtcGxhdGVzL1NpZ25VcEZvcm0udnVlOjM3OjE3XCI+SSBhY2NlcHRcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cInVuZGVybGluZSB0ZXh0LXdoaXRlXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvVGVtcGxhdGVzL1NpZ25VcEZvcm0udnVlOjM4OjIxXCI+VGVybXMgJiBDb25kaXRpb25zPC9hPiBhbmRcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cInVuZGVybGluZSB0ZXh0LXdoaXRlXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvVGVtcGxhdGVzL1NpZ25VcEZvcm0udnVlOjM5OjIxXCI+UHJpdmFjeSBQb2xpY3k8L2E+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHAgY2xhc3M9XCJtYi00IHRleHQtY2VudGVyIHRleHQteHNcIiBkYXRhLXRlc3Q9XCJzaWduX3VwLWNvbW1hbmRcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9UZW1wbGF0ZXMvU2lnblVwRm9ybS52dWU6NDQ6OVwiPkVudGVyIHlvdXIgZGV0YWlsczwvcD5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwic3BhY2UteS0zIHctZnVsbFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1RlbXBsYXRlcy9TaWduVXBGb3JtLnZ1ZTo0Njo5XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvVGVtcGxhdGVzL1NpZ25VcEZvcm0udnVlOjQ3OjEzXCI+XG4gICAgICAgICAgICAgICAgPGVsLWlucHV0IFxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiYXV0aFN0b3JlLk5hbWVcIiBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ3LWZ1bGxcIiBcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCIgXG4gICAgICAgICAgICAgICAgICAgIDpwcmVmaXgtaWNvbj1cIlVzZXJcIiBcbiAgICAgICAgICAgICAgICAgICAgQGZvY3VzPVwiYXV0aFN0b3JlLnRvdWNoZWQuTmFtZSA9IHRydWVcIlxuICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XCJyZXNldEVycm9yKCdOYW1lJylcIiBcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0PVwic2lnbl91cC1uYW1lLWlucHV0XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJhdXRoU3RvcmUudG91Y2hlZC5OYW1lICYmIGF1dGhTdG9yZS5lcnJvcnMuTmFtZVwiIGNsYXNzPVwidGV4dC1yZWQtNTAwIHRleHQteHNcIiBkYXRhLXRlc3Q9XCJzaWduX3VwLW5hbWUtaW5wdXQtZXJyb3JcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9UZW1wbGF0ZXMvU2lnblVwRm9ybS52dWU6NTc6MTdcIj57eyBhdXRoU3RvcmUuZXJyb3JzLk5hbWUgfX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9UZW1wbGF0ZXMvU2lnblVwRm9ybS52dWU6NjA6MTNcIj5cbiAgICAgICAgICAgICAgICA8ZWwtaW5wdXQgXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJhdXRoU3RvcmUuU3VybmFtZVwiIFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInctZnVsbFwiIFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN1cm5hbWVcIiBcbiAgICAgICAgICAgICAgICAgICAgOnByZWZpeC1pY29uPVwiVXNlclwiIFxuICAgICAgICAgICAgICAgICAgICBAZm9jdXM9XCJhdXRoU3RvcmUudG91Y2hlZC5TdXJuYW1lID0gdHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cInJlc2V0RXJyb3IoJ1N1cm5hbWUnKVwiIFxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3Q9XCJzaWduX3VwLXN1cm5hbWUtaW5wdXRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHAgdi1pZj1cImF1dGhTdG9yZS50b3VjaGVkLlN1cm5hbWUgJiYgYXV0aFN0b3JlLmVycm9ycy5TdXJuYW1lXCIgY2xhc3M9XCJ0ZXh0LXJlZC01MDAgdGV4dC14c1wiIGRhdGEtdGVzdD1cInNpZ25fdXAtc3VybmFtZS1pbnB1dC1lcnJvclwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1RlbXBsYXRlcy9TaWduVXBGb3JtLnZ1ZTo3MDoxN1wiPnt7IGF1dGhTdG9yZS5lcnJvcnMuU3VybmFtZSB9fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1RlbXBsYXRlcy9TaWduVXBGb3JtLnZ1ZTo3MzoxM1wiPlxuICAgICAgICAgICAgICAgIDxlbC1pbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImF1dGhTdG9yZS5FbWFpbFwiIFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInctZnVsbFwiIFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgXG4gICAgICAgICAgICAgICAgICAgIDpwcmVmaXgtaWNvbj1cIk1lc3NhZ2VcIiBcbiAgICAgICAgICAgICAgICAgICAgQGZvY3VzPVwiYXV0aFN0b3JlLnRvdWNoZWQuRW1haWwgPSB0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgQGlucHV0PVwicmVzZXRFcnJvcignRW1haWwnKVwiIFxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3Q9XCJzaWduX3VwLWVtYWlsLWlucHV0XCJcblxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHAgdi1pZj1cImF1dGhTdG9yZS50b3VjaGVkLkVtYWlsICYmIGF1dGhTdG9yZS5lcnJvcnMuRW1haWxcIiBjbGFzcz1cInRleHQtcmVkLTUwMCB0ZXh0LXhzXCIgZGF0YS10ZXN0PVwic2lnbl91cC1lbWFpbC1pbnB1dC1lcnJvclwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1RlbXBsYXRlcy9TaWduVXBGb3JtLnZ1ZTo4NDoxN1wiPnt7IGF1dGhTdG9yZS5lcnJvcnMuRW1haWwgfX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9UZW1wbGF0ZXMvU2lnblVwRm9ybS52dWU6ODc6MTNcIj5cbiAgICAgICAgICAgICAgICA8ZWwtaW5wdXQgXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJhdXRoU3RvcmUuUGFzc3dvcmRcIiBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ3LWZ1bGxcIiBcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIFxuICAgICAgICAgICAgICAgICAgICA6cHJlZml4LWljb249XCJLZXlcIiBcbiAgICAgICAgICAgICAgICAgICAgQGZvY3VzPVwiYXV0aFN0b3JlLnRvdWNoZWQuUGFzc3dvcmQgPSB0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgQGlucHV0PVwicmVzZXRFcnJvcignUGFzc3dvcmQnKVwiIFxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3Q9XCJzaWduX3VwLXBhc3N3b3JkLWlucHV0XCJcblxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHAgdi1pZj1cImF1dGhTdG9yZS50b3VjaGVkLlBhc3N3b3JkICYmIGF1dGhTdG9yZS5lcnJvcnMuUGFzc3dvcmRcIiBjbGFzcz1cInRleHQtcmVkLTUwMCB0ZXh0LXhzXCIgZGF0YS10ZXN0PVwic2lnbl91cC1wYXNzd29yZC1pbnB1dC1lcnJvclwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1RlbXBsYXRlcy9TaWduVXBGb3JtLnZ1ZTo5ODoxN1wiPnt7IGF1dGhTdG9yZS5lcnJvcnMuUGFzc3dvcmQgfX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9UZW1wbGF0ZXMvU2lnblVwRm9ybS52dWU6MTAxOjEzXCI+XG4gICAgICAgICAgICAgICAgPGVsLWlucHV0IFxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiYXV0aFN0b3JlLkNvbmZpcm1QYXNzd29yZFwiIFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInctZnVsbFwiIFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbmZpcm0gUGFzc3dvcmRcIiBcbiAgICAgICAgICAgICAgICAgICAgOnByZWZpeC1pY29uPVwiS2V5XCIgXG4gICAgICAgICAgICAgICAgICAgIEBmb2N1cz1cImF1dGhTdG9yZS50b3VjaGVkLkNvbmZpcm1QYXNzd29yZCA9IHRydWVcIlxuICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XCJyZXNldEVycm9yKCdDb25maXJtUGFzc3dvcmQnKVwiIFxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3Q9XCJzaWduX3VwLWNvbmZpcm1fcGFzc3dvcmQtaW5wdXRcIlxuXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8cCB2LWlmPVwiYXV0aFN0b3JlLnRvdWNoZWQuQ29uZmlybVBhc3N3b3JkICYmIGF1dGhTdG9yZS5lcnJvcnMuQ29uZmlybVBhc3N3b3JkXCIgY2xhc3M9XCJ0ZXh0LXJlZC01MDAgdGV4dC14c1wiIGRhdGEtdGVzdD1cInNpZ25fdXAtY29uZmlybV9wYXNzd29yZC1pbnB1dC1lcnJvclwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1RlbXBsYXRlcy9TaWduVXBGb3JtLnZ1ZToxMTI6MTdcIj57eyBhdXRoU3RvcmUuZXJyb3JzLkNvbmZpcm1QYXNzd29yZCB9fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8QXRvbXNTdWJtaXRCdXR0b24gOmhhbmRsZS1jbGljaz1cImhhbmRsZUNsaWNrXCIgLz5cblxuICAgICAgICA8cCBjbGFzcz1cInRleHQtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTUwMCBtYi0xXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvVGVtcGxhdGVzL1NpZ25VcEZvcm0udnVlOjExODo5XCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiaG92ZXI6dGV4dC1ncmF5LTQwMCBjdXJzb3ItcG9pbnRlciB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlLzQwXCIgZGF0YS10ZXN0PVwic2lnbl91cC10ZXJtcy1saW5rXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvVGVtcGxhdGVzL1NpZ25VcEZvcm0udnVlOjExOToxM1wiPlRlcm1zICYgQ29uZGl0aW9uczwvYT5cbiAgICAgICAgPC9wPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBVc2VyLCBNZXNzYWdlLCBLZXkgfSBmcm9tICdAZWxlbWVudC1wbHVzL2ljb25zLXZ1ZSc7XG5pbXBvcnQgeyB1c2VBdXRoU3RvcmUgfSBmcm9tICd+L3N0b3Jlcy9BdXRoU3RvcmUnO1xuXG5jb25zdCBhdXRoU3RvcmUgPSB1c2VBdXRoU3RvcmUoKTtcbmNvbnN0IHByb2ZpbGVJbWFnZSA9IHJlZih7IHNyYzogbnVsbCB9KTtcblxuZnVuY3Rpb24gcHJldmlld0ltYWdlKGV2ZW50KSB7XG4gICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcbiAgICBpZiAoZmlsZSkge1xuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICByZWFkZXIub25sb2FkID0gKGUpID0+IHtcbiAgICAgICAgICAgIHByb2ZpbGVJbWFnZS52YWx1ZS5zcmMgPSBlLnRhcmdldC5yZXN1bHQ7XG4gICAgICAgIH07XG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgIH1cbn1cblxuY29uc3QgcmVzZXRFcnJvciA9IChmaWVsZCkgPT4ge1xuICAgIGF1dGhTdG9yZS52YWxpZGF0ZSgpXG4gICAgaWYgKGF1dGhTdG9yZS5lcnJvcnNbZmllbGRdID09PSBcIlwiKSB7XG4gICAgICAgIGF1dGhTdG9yZS5lcnJvcnNbZmllbGRdID0gbnVsbDtcbiAgICB9XG59O1xuXG5jb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBpZiAoYXV0aFN0b3JlLnZhbGlkYXRlKCkpIHtcbiAgICAgICAgYXV0aFN0b3JlLmNvbmZpcm1FbWFpbFBhZ2UoKTtcbiAgICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4jZmlsZUlucHV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3BhY2l0eTogMDtcbiAgICBpbnNldDogMDtcbn1cbjwvc3R5bGU+XG4iXSwiZmlsZSI6Ii9ob21lL2toYWxpZC9mcm9udGVuZC1xYS1zZWxlY3Rpb24vUUEvY29tcG9uZW50cy9UZW1wbGF0ZXMvU2lnblVwRm9ybS52dWUifQ==