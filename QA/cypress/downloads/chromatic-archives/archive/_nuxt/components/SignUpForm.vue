import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/SignUpForm.vue");import { ElInput as __nuxt_component_0 } from "/_nuxt/node_modules/.pnpm/element-plus@2.8.5_vue@3.5.12_typescript@5.6.3_/node_modules/element-plus/es/components/input/index.mjs?v=50424943";
import { default as __nuxt_component_1 } from "/_nuxt/components/SubmitButton.vue";
import "/_nuxt/node_modules/.pnpm/element-plus@2.8.5_vue@3.5.12_typescript@5.6.3_/node_modules/element-plus/es/components/input/style/css.mjs?v=50424943";
/* Injection by vite-plugin-vue-inspector Start */
import { createElementVNode as __createElementVNode,createElementBlock as __createElementBlock,createVNode as __createVNode } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=50424943"
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
import { ref } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=50424943";
import { User, Message, Key } from "/_nuxt/node_modules/.pnpm/@element-plus+icons-vue@2.3.1_vue@3.5.12_typescript@5.6.3_/node_modules/@element-plus/icons-vue/dist/index.js?v=50424943";
import { useAuthStore } from "/_nuxt/stores/AuthStore.js";


const _sfc_main = {
  __name: 'SignUpForm',
  setup(__props, { expose: __expose }) {
  __expose();

const authStore = useAuthStore();
const profileImage = ref({ src: null });
const touchedName = ref(false);
const touchedSurname = ref(false);
const touchedEmail = ref(false);
const touchedPassword = ref(false);
const touchedConfirmPassword = ref(false);

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
    if (authStore.errors[field]) {
        // Reset error state if the input changes
        authStore.errors[field] = null;
    }
};

const handleClick = () => {
    if (authStore.validate()) {
        authStore.confirmEmailPage();
    }
};

const __returned__ = { authStore, profileImage, touchedName, touchedSurname, touchedEmail, touchedPassword, touchedConfirmPassword, previewImage, resetError, handleClick, ref, get User() { return User }, get Message() { return Message }, get Key() { return Key }, get useAuthStore() { return useAuthStore } }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import {  openBlock as _openBlock,  createTextVNode as _createTextVNode, resolveComponent as _resolveComponent,  toDisplayString as _toDisplayString, createCommentVNode as _createCommentVNode, createStaticVNode as _createStaticVNode } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=50424943"
import _imports_0 from "/_nuxt/public/file_input.png?import"


const _hoisted_1 = {
  class: "h-[598px] max-w-[374px] p-5 flex flex-col items-center bg-black text-white space-y-3",
  "data-v-inspector": "components/SignUpForm.vue:2:5"
}
const _hoisted_2 = {
  class: "flex items-center space-x-4 relative",
  "data-v-inspector": "components/SignUpForm.vue:17:9"
}
const _hoisted_3 = {
  class: "space-y-3 w-full",
  "data-v-inspector": "components/SignUpForm.vue:46:9"
}
const _hoisted_4 = {
  class: "w-full",
  "data-v-inspector": "components/SignUpForm.vue:47:13"
}
const _hoisted_5 = {
  key: 0,
  class: "text-red-500 text-xs",
  "data-test": "sign_up-name-input-error",
  "data-v-inspector": "components/SignUpForm.vue:57:17"
}
const _hoisted_6 = { "data-v-inspector": "components/SignUpForm.vue:60:13" }
const _hoisted_7 = {
  key: 0,
  class: "text-red-500 text-xs",
  "data-test": "sign_up-surname-input-error",
  "data-v-inspector": "components/SignUpForm.vue:70:17"
}
const _hoisted_8 = { "data-v-inspector": "components/SignUpForm.vue:73:13" }
const _hoisted_9 = {
  key: 0,
  class: "text-red-500 text-xs",
  "data-test": "sign_up-email-input-error",
  "data-v-inspector": "components/SignUpForm.vue:84:17"
}
const _hoisted_10 = { "data-v-inspector": "components/SignUpForm.vue:87:13" }
const _hoisted_11 = {
  key: 0,
  class: "text-red-500 text-xs",
  "data-test": "sign_up-password-input-error",
  "data-v-inspector": "components/SignUpForm.vue:98:17"
}
const _hoisted_12 = { "data-v-inspector": "components/SignUpForm.vue:101:13" }
const _hoisted_13 = {
  key: 0,
  class: "text-red-500 text-xs",
  "data-test": "sign_up-confirm_password-input-error",
  "data-v-inspector": "components/SignUpForm.vue:112:17"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_input = __nuxt_component_0
  const _component_SubmitButton = __nuxt_component_1

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", {
      class: "next-icon flex h-8 scale-100 cursor-pointer items-center justify-center gap-2 transition-all active:scale-95 text-sm",
      onClick: _cache[0] || (_cache[0] = $event => {$setup.authStore.changePage();}),
      "data-v-inspector": "components/SignUpForm.vue:3:9"
    }, _cache[16] || (_cache[16] = [
      _createElementVNode("div", {
        class: "inline-flex items-center justify-center pt-0.5 rotate-180",
        "data-v-inspector": "components/SignUpForm.vue:5:13"
      }, [
        _createElementVNode("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          class: "octicon arrow-symbol-mktg",
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          "data-v-inspector": "components/SignUpForm.vue:6:17"
        }, [
          _createElementVNode("path", {
            fill: "currentColor",
            d: "M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z",
            "data-v-inspector": "components/SignUpForm.vue:8:21"
          }),
          _createElementVNode("path", {
            class: "octicon-chevrow-stem",
            stroke: "currentColor",
            d: "M1.75 8H11",
            "stroke-width": "1.5",
            "stroke-linecap": "round",
            "data-v-inspector": "components/SignUpForm.vue:10:21"
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
        "data-v-inspector": "components/SignUpForm.vue:18:13"
      }, null, 32 /* NEED_HYDRATION */),
      _cache[17] || (_cache[17] = _createStaticVNode("<div class=\"w-1/2 border border-white flex justify-center items-center rounded-md\" data-v-inspector=\"components/SignUpForm.vue:21:13\" data-v-ecce3aef><img id=\"profileImage\" src=\"" + _imports_0 + "\" alt=\"Profile Picture\" class=\"cursor-pointer w-24 h-24\" data-v-inspector=\"components/SignUpForm.vue:22:17\" data-v-ecce3aef></div><div data-v-inspector=\"components/SignUpForm.vue:26:13\" data-v-ecce3aef><h5 class=\"mb-1 text-sm font-semibold\" data-test=\"sign_up-greet\" data-v-inspector=\"components/SignUpForm.vue:27:17\" data-v-ecce3aef>Nice to meet you,</h5><p class=\"text-xs text-white/70\" data-test=\"sign_up-info\" data-v-inspector=\"components/SignUpForm.vue:28:17\" data-v-ecce3aef>Upload a profile picture and complete your presentation</p></div>", 2))
    ]),
    _cache[18] || (_cache[18] = _createStaticVNode("<div class=\"mb-6 text-xs text-white/70\" data-test=\"sign_up-terms\" data-v-inspector=\"components/SignUpForm.vue:32:9\" data-v-ecce3aef><label class=\"flex items-center\" data-v-inspector=\"components/SignUpForm.vue:33:13\" data-v-ecce3aef><div class=\"flex h-4 w-4 cursor-pointer items-center justify-center rounded border pt-0.5 transition-all border-white/50 hover:border-white\" data-v-inspector=\"components/SignUpForm.vue:34:17\" data-v-ecce3aef><i class=\"fa-solid fa-check tex-sm\" data-v-inspector=\"components/SignUpForm.vue:35:21\" data-v-ecce3aef></i></div><span class=\"ml-2 text-sm\" data-v-inspector=\"components/SignUpForm.vue:37:17\" data-v-ecce3aef>I accept <a href=\"#\" class=\"underline text-white\" data-v-inspector=\"components/SignUpForm.vue:38:21\" data-v-ecce3aef>Terms &amp; Conditions</a> and <a href=\"#\" class=\"underline text-white\" data-v-inspector=\"components/SignUpForm.vue:39:21\" data-v-ecce3aef>Privacy Policy</a></span></label></div><p class=\"mb-4 text-center text-xs\" data-test=\"sign_up-command\" data-v-inspector=\"components/SignUpForm.vue:44:9\" data-v-ecce3aef>Enter your details</p>", 2)),
    _createElementVNode("div", _hoisted_3, [
      _createElementVNode("div", _hoisted_4, [
        _createVNode(_component_el_input, {
          modelValue: $setup.authStore.Name,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.authStore.Name) = $event)),
          class: "w-full",
          placeholder: "Name",
          "prefix-icon": $setup.User,
          onFocus: _cache[2] || (_cache[2] = $event => ($setup.touchedName = true)),
          onInput: _cache[3] || (_cache[3] = $event => ($setup.resetError('Name'))),
          "data-test": "sign_up-name-input"
        }, null, 8 /* PROPS */, ["modelValue", "prefix-icon"]),
        ($setup.touchedName && $setup.authStore.errors.Name)
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
          onFocus: _cache[5] || (_cache[5] = $event => ($setup.touchedSurname = true)),
          onInput: _cache[6] || (_cache[6] = $event => ($setup.resetError('Surname'))),
          "data-test": "sign_up-surname-input"
        }, null, 8 /* PROPS */, ["modelValue", "prefix-icon"]),
        ($setup.touchedSurname && $setup.authStore.errors.Surname)
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
          onFocus: _cache[8] || (_cache[8] = $event => ($setup.touchedEmail = true)),
          onInput: _cache[9] || (_cache[9] = $event => ($setup.resetError('Email'))),
          "data-test": "sign_up-email-input"
        }, null, 8 /* PROPS */, ["modelValue", "prefix-icon"]),
        ($setup.touchedEmail && $setup.authStore.errors.Email)
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
          onFocus: _cache[11] || (_cache[11] = $event => ($setup.touchedPassword = true)),
          onInput: _cache[12] || (_cache[12] = $event => ($setup.resetError('Password'))),
          "data-test": "sign_up-password-input"
        }, null, 8 /* PROPS */, ["modelValue", "prefix-icon"]),
        ($setup.touchedPassword && $setup.authStore.errors.Password)
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
          onFocus: _cache[14] || (_cache[14] = $event => ($setup.touchedConfirmPassword = true)),
          onInput: _cache[15] || (_cache[15] = $event => ($setup.resetError('ConfirmPassword'))),
          "data-test": "sign_up-confirm_password-input"
        }, null, 8 /* PROPS */, ["modelValue", "prefix-icon"]),
        ($setup.touchedConfirmPassword && $setup.authStore.errors.ConfirmPassword)
          ? (_openBlock(), _createElementBlock("p", _hoisted_13, _toDisplayString($setup.authStore.errors.ConfirmPassword), 1 /* TEXT */))
          : _createCommentVNode("v-if", true)
      ])
    ]),
    _createVNode(_component_SubmitButton, { "handle-click": $setup.handleClick }),
    _cache[19] || (_cache[19] = _createElementVNode("p", {
      class: "text-center text-sm text-gray-500 mb-1",
      "data-v-inspector": "components/SignUpForm.vue:118:9"
    }, [
      _createElementVNode("a", {
        href: "#",
        class: "hover:text-gray-400 cursor-pointer text-center text-white/40",
        "data-test": "sign_up-terms-link",
        "data-v-inspector": "components/SignUpForm.vue:119:13"
      }, "Terms & Conditions")
    ], -1 /* HOISTED */))
  ]))
}

import "/_nuxt/components/SignUpForm.vue?vue&type=style&index=0&scoped=ecce3aef&lang.css"

_sfc_main.__hmrId = "ecce3aef"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-ecce3aef"],['__file',"/home/khalid/frontend-qa-selection/QA/components/SignUpForm.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0SEE7QUFDQTtBQUNBOzs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJTaWduVXBGb3JtLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImgtWzU5OHB4XSBtYXgtdy1bMzc0cHhdIHAtNSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBiZy1ibGFjayB0ZXh0LXdoaXRlIHNwYWNlLXktM1wiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1NpZ25VcEZvcm0udnVlOjI6NVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibmV4dC1pY29uIGZsZXggaC04IHNjYWxlLTEwMCBjdXJzb3ItcG9pbnRlciBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTIgdHJhbnNpdGlvbi1hbGwgYWN0aXZlOnNjYWxlLTk1IHRleHQtc21cIlxuICAgICAgICAgICAgQGNsaWNrPVwiYXV0aFN0b3JlLmNoYW5nZVBhZ2UoKTtcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9TaWduVXBGb3JtLnZ1ZTozOjlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHQtMC41IHJvdGF0ZS0xODBcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9TaWduVXBGb3JtLnZ1ZTo1OjEzXCI+XG4gICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3M9XCJvY3RpY29uIGFycm93LXN5bWJvbC1ta3RnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJub25lXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvU2lnblVwRm9ybS52dWU6NjoxN1wiPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk03LjI4MDMzIDMuMjE5NjdDNi45ODc0NCAyLjkyNjc4IDYuNTEyNTYgMi45MjY3OCA2LjIxOTY3IDMuMjE5NjdDNS45MjY3OCAzLjUxMjU2IDUuOTI2NzggMy45ODc0NCA2LjIxOTY3IDQuMjgwMzNMNy4yODAzMyAzLjIxOTY3Wk0xMSA4TDExLjUzMDMgOC41MzAzM0MxMS44MjMyIDguMjM3NDQgMTEuODIzMiA3Ljc2MjU2IDExLjUzMDMgNy40Njk2N0wxMSA4Wk02LjIxOTY3IDExLjcxOTdDNS45MjY3OCAxMi4wMTI2IDUuOTI2NzggMTIuNDg3NCA2LjIxOTY3IDEyLjc4MDNDNi41MTI1NiAxMy4wNzMyIDYuOTg3NDQgMTMuMDczMiA3LjI4MDMzIDEyLjc4MDNMNi4yMTk2NyAxMS43MTk3Wk02LjIxOTY3IDQuMjgwMzNMMTAuNDY5NyA4LjUzMDMzTDExLjUzMDMgNy40Njk2N0w3LjI4MDMzIDMuMjE5NjdMNi4yMTk2NyA0LjI4MDMzWk0xMC40Njk3IDcuNDY5NjdMNi4yMTk2NyAxMS43MTk3TDcuMjgwMzMgMTIuNzgwM0wxMS41MzAzIDguNTMwMzNMMTAuNDY5NyA3LjQ2OTY3WlwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1NpZ25VcEZvcm0udnVlOjg6MjFcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cIm9jdGljb24tY2hldnJvdy1zdGVtXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgZD1cIk0xLjc1IDhIMTFcIiBzdHJva2Utd2lkdGg9XCIxLjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1NpZ25VcEZvcm0udnVlOjEwOjIxXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBCYWNrIHRvIExvZyBpblxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC00IHJlbGF0aXZlXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvU2lnblVwRm9ybS52dWU6MTc6OVwiPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiZmlsZUlucHV0XCIgdHlwZT1cImZpbGVcIiBhY2NlcHQ9XCJpbWFnZS8qXCIgY2xhc3M9XCJhYnNvbHV0ZSBpbnNldC0wIG9wYWNpdHktMCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgQGNoYW5nZT1cInByZXZpZXdJbWFnZVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1NpZ25VcEZvcm0udnVlOjE4OjEzXCIgLz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMS8yIGJvcmRlciBib3JkZXItd2hpdGUgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcm91bmRlZC1tZFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1NpZ25VcEZvcm0udnVlOjIxOjEzXCI+XG4gICAgICAgICAgICAgICAgPGltZyBpZD1cInByb2ZpbGVJbWFnZVwiIHNyYz1cIi9wdWJsaWMvZmlsZV9pbnB1dC5wbmdcIiBhbHQ9XCJQcm9maWxlIFBpY3R1cmVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImN1cnNvci1wb2ludGVyIHctMjQgaC0yNFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1NpZ25VcEZvcm0udnVlOjIyOjE3XCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1NpZ25VcEZvcm0udnVlOjI2OjEzXCI+XG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwibWItMSB0ZXh0LXNtIGZvbnQtc2VtaWJvbGRcIiBkYXRhLXRlc3Q9XCJzaWduX3VwLWdyZWV0XCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvU2lnblVwRm9ybS52dWU6Mjc6MTdcIj5OaWNlIHRvIG1lZXQgeW91LDwvaDU+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LXhzIHRleHQtd2hpdGUvNzBcIiBkYXRhLXRlc3Q9XCJzaWduX3VwLWluZm9cIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9TaWduVXBGb3JtLnZ1ZToyODoxN1wiPlVwbG9hZCBhIHByb2ZpbGUgcGljdHVyZSBhbmQgY29tcGxldGUgeW91ciBwcmVzZW50YXRpb248L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTYgdGV4dC14cyB0ZXh0LXdoaXRlLzcwXCIgZGF0YS10ZXN0PVwic2lnbl91cC10ZXJtc1wiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1NpZ25VcEZvcm0udnVlOjMyOjlcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvU2lnblVwRm9ybS52dWU6MzM6MTNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBoLTQgdy00IGN1cnNvci1wb2ludGVyIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkIGJvcmRlciBwdC0wLjUgdHJhbnNpdGlvbi1hbGwgYm9yZGVyLXdoaXRlLzUwIGhvdmVyOmJvcmRlci13aGl0ZVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1NpZ25VcEZvcm0udnVlOjM0OjE3XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtY2hlY2sgdGV4LXNtXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvU2lnblVwRm9ybS52dWU6MzU6MjFcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtbC0yIHRleHQtc21cIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9TaWduVXBGb3JtLnZ1ZTozNzoxN1wiPkkgYWNjZXB0XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ1bmRlcmxpbmUgdGV4dC13aGl0ZVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1NpZ25VcEZvcm0udnVlOjM4OjIxXCI+VGVybXMgJiBDb25kaXRpb25zPC9hPiBhbmRcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cInVuZGVybGluZSB0ZXh0LXdoaXRlXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvU2lnblVwRm9ybS52dWU6Mzk6MjFcIj5Qcml2YWN5IFBvbGljeTwvYT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8cCBjbGFzcz1cIm1iLTQgdGV4dC1jZW50ZXIgdGV4dC14c1wiIGRhdGEtdGVzdD1cInNpZ25fdXAtY29tbWFuZFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1NpZ25VcEZvcm0udnVlOjQ0OjlcIj5FbnRlciB5b3VyIGRldGFpbHM8L3A+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNwYWNlLXktMyB3LWZ1bGxcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9TaWduVXBGb3JtLnZ1ZTo0Njo5XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvU2lnblVwRm9ybS52dWU6NDc6MTNcIj5cbiAgICAgICAgICAgICAgICA8ZWwtaW5wdXQgXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJhdXRoU3RvcmUuTmFtZVwiIFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInctZnVsbFwiIFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIiBcbiAgICAgICAgICAgICAgICAgICAgOnByZWZpeC1pY29uPVwiVXNlclwiIFxuICAgICAgICAgICAgICAgICAgICBAZm9jdXM9XCJ0b3VjaGVkTmFtZSA9IHRydWVcIlxuICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XCJyZXNldEVycm9yKCdOYW1lJylcIiBcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0PVwic2lnbl91cC1uYW1lLWlucHV0XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJ0b3VjaGVkTmFtZSAmJiBhdXRoU3RvcmUuZXJyb3JzLk5hbWVcIiBjbGFzcz1cInRleHQtcmVkLTUwMCB0ZXh0LXhzXCIgZGF0YS10ZXN0PVwic2lnbl91cC1uYW1lLWlucHV0LWVycm9yXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvU2lnblVwRm9ybS52dWU6NTc6MTdcIj57eyBhdXRoU3RvcmUuZXJyb3JzLk5hbWUgfX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9TaWduVXBGb3JtLnZ1ZTo2MDoxM1wiPlxuICAgICAgICAgICAgICAgIDxlbC1pbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImF1dGhTdG9yZS5TdXJuYW1lXCIgXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidy1mdWxsXCIgXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3VybmFtZVwiIFxuICAgICAgICAgICAgICAgICAgICA6cHJlZml4LWljb249XCJVc2VyXCIgXG4gICAgICAgICAgICAgICAgICAgIEBmb2N1cz1cInRvdWNoZWRTdXJuYW1lID0gdHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cInJlc2V0RXJyb3IoJ1N1cm5hbWUnKVwiIFxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3Q9XCJzaWduX3VwLXN1cm5hbWUtaW5wdXRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHAgdi1pZj1cInRvdWNoZWRTdXJuYW1lICYmIGF1dGhTdG9yZS5lcnJvcnMuU3VybmFtZVwiIGNsYXNzPVwidGV4dC1yZWQtNTAwIHRleHQteHNcIiBkYXRhLXRlc3Q9XCJzaWduX3VwLXN1cm5hbWUtaW5wdXQtZXJyb3JcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9TaWduVXBGb3JtLnZ1ZTo3MDoxN1wiPnt7IGF1dGhTdG9yZS5lcnJvcnMuU3VybmFtZSB9fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1NpZ25VcEZvcm0udnVlOjczOjEzXCI+XG4gICAgICAgICAgICAgICAgPGVsLWlucHV0IFxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiYXV0aFN0b3JlLkVtYWlsXCIgXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidy1mdWxsXCIgXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIiBcbiAgICAgICAgICAgICAgICAgICAgOnByZWZpeC1pY29uPVwiTWVzc2FnZVwiIFxuICAgICAgICAgICAgICAgICAgICBAZm9jdXM9XCJ0b3VjaGVkRW1haWwgPSB0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgQGlucHV0PVwicmVzZXRFcnJvcignRW1haWwnKVwiIFxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3Q9XCJzaWduX3VwLWVtYWlsLWlucHV0XCJcblxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHAgdi1pZj1cInRvdWNoZWRFbWFpbCAmJiBhdXRoU3RvcmUuZXJyb3JzLkVtYWlsXCIgY2xhc3M9XCJ0ZXh0LXJlZC01MDAgdGV4dC14c1wiIGRhdGEtdGVzdD1cInNpZ25fdXAtZW1haWwtaW5wdXQtZXJyb3JcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9TaWduVXBGb3JtLnZ1ZTo4NDoxN1wiPnt7IGF1dGhTdG9yZS5lcnJvcnMuRW1haWwgfX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9TaWduVXBGb3JtLnZ1ZTo4NzoxM1wiPlxuICAgICAgICAgICAgICAgIDxlbC1pbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImF1dGhTdG9yZS5QYXNzd29yZFwiIFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInctZnVsbFwiIFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgXG4gICAgICAgICAgICAgICAgICAgIDpwcmVmaXgtaWNvbj1cIktleVwiIFxuICAgICAgICAgICAgICAgICAgICBAZm9jdXM9XCJ0b3VjaGVkUGFzc3dvcmQgPSB0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgQGlucHV0PVwicmVzZXRFcnJvcignUGFzc3dvcmQnKVwiIFxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3Q9XCJzaWduX3VwLXBhc3N3b3JkLWlucHV0XCJcblxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHAgdi1pZj1cInRvdWNoZWRQYXNzd29yZCAmJiBhdXRoU3RvcmUuZXJyb3JzLlBhc3N3b3JkXCIgY2xhc3M9XCJ0ZXh0LXJlZC01MDAgdGV4dC14c1wiIGRhdGEtdGVzdD1cInNpZ25fdXAtcGFzc3dvcmQtaW5wdXQtZXJyb3JcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9TaWduVXBGb3JtLnZ1ZTo5ODoxN1wiPnt7IGF1dGhTdG9yZS5lcnJvcnMuUGFzc3dvcmQgfX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9TaWduVXBGb3JtLnZ1ZToxMDE6MTNcIj5cbiAgICAgICAgICAgICAgICA8ZWwtaW5wdXQgXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJhdXRoU3RvcmUuQ29uZmlybVBhc3N3b3JkXCIgXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidy1mdWxsXCIgXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29uZmlybSBQYXNzd29yZFwiIFxuICAgICAgICAgICAgICAgICAgICA6cHJlZml4LWljb249XCJLZXlcIiBcbiAgICAgICAgICAgICAgICAgICAgQGZvY3VzPVwidG91Y2hlZENvbmZpcm1QYXNzd29yZCA9IHRydWVcIlxuICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XCJyZXNldEVycm9yKCdDb25maXJtUGFzc3dvcmQnKVwiIFxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3Q9XCJzaWduX3VwLWNvbmZpcm1fcGFzc3dvcmQtaW5wdXRcIlxuXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8cCB2LWlmPVwidG91Y2hlZENvbmZpcm1QYXNzd29yZCAmJiBhdXRoU3RvcmUuZXJyb3JzLkNvbmZpcm1QYXNzd29yZFwiIGNsYXNzPVwidGV4dC1yZWQtNTAwIHRleHQteHNcIiBkYXRhLXRlc3Q9XCJzaWduX3VwLWNvbmZpcm1fcGFzc3dvcmQtaW5wdXQtZXJyb3JcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9TaWduVXBGb3JtLnZ1ZToxMTI6MTdcIj57eyBhdXRoU3RvcmUuZXJyb3JzLkNvbmZpcm1QYXNzd29yZCB9fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8U3VibWl0QnV0dG9uIDpoYW5kbGUtY2xpY2s9XCJoYW5kbGVDbGlja1wiIC8+XG5cbiAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS01MDAgbWItMVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1NpZ25VcEZvcm0udnVlOjExODo5XCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiaG92ZXI6dGV4dC1ncmF5LTQwMCBjdXJzb3ItcG9pbnRlciB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlLzQwXCIgZGF0YS10ZXN0PVwic2lnbl91cC10ZXJtcy1saW5rXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvU2lnblVwRm9ybS52dWU6MTE5OjEzXCI+VGVybXMgJiBDb25kaXRpb25zPC9hPlxuICAgICAgICA8L3A+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwPlxuaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IFVzZXIsIE1lc3NhZ2UsIEtleSB9IGZyb20gJ0BlbGVtZW50LXBsdXMvaWNvbnMtdnVlJztcbmltcG9ydCB7IHVzZUF1dGhTdG9yZSB9IGZyb20gJ34vc3RvcmVzL0F1dGhTdG9yZSc7XG5cbmNvbnN0IGF1dGhTdG9yZSA9IHVzZUF1dGhTdG9yZSgpO1xuY29uc3QgcHJvZmlsZUltYWdlID0gcmVmKHsgc3JjOiBudWxsIH0pO1xuY29uc3QgdG91Y2hlZE5hbWUgPSByZWYoZmFsc2UpO1xuY29uc3QgdG91Y2hlZFN1cm5hbWUgPSByZWYoZmFsc2UpO1xuY29uc3QgdG91Y2hlZEVtYWlsID0gcmVmKGZhbHNlKTtcbmNvbnN0IHRvdWNoZWRQYXNzd29yZCA9IHJlZihmYWxzZSk7XG5jb25zdCB0b3VjaGVkQ29uZmlybVBhc3N3b3JkID0gcmVmKGZhbHNlKTtcblxuZnVuY3Rpb24gcHJldmlld0ltYWdlKGV2ZW50KSB7XG4gICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcbiAgICBpZiAoZmlsZSkge1xuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICByZWFkZXIub25sb2FkID0gKGUpID0+IHtcbiAgICAgICAgICAgIHByb2ZpbGVJbWFnZS52YWx1ZS5zcmMgPSBlLnRhcmdldC5yZXN1bHQ7XG4gICAgICAgIH07XG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgIH1cbn1cblxuY29uc3QgcmVzZXRFcnJvciA9IChmaWVsZCkgPT4ge1xuICAgIGlmIChhdXRoU3RvcmUuZXJyb3JzW2ZpZWxkXSkge1xuICAgICAgICAvLyBSZXNldCBlcnJvciBzdGF0ZSBpZiB0aGUgaW5wdXQgY2hhbmdlc1xuICAgICAgICBhdXRoU3RvcmUuZXJyb3JzW2ZpZWxkXSA9IG51bGw7XG4gICAgfVxufTtcblxuY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgaWYgKGF1dGhTdG9yZS52YWxpZGF0ZSgpKSB7XG4gICAgICAgIGF1dGhTdG9yZS5jb25maXJtRW1haWxQYWdlKCk7XG4gICAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuI2ZpbGVJbnB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgaW5zZXQ6IDA7XG59XG48L3N0eWxlPlxuIl0sImZpbGUiOiIvaG9tZS9raGFsaWQvZnJvbnRlbmQtcWEtc2VsZWN0aW9uL1FBL2NvbXBvbmVudHMvU2lnblVwRm9ybS52dWUifQ==