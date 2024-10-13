import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/Templates/SignUpConfirmation.vue");import { default as __nuxt_component_0 } from "/_nuxt/components/Atoms/SubmitButton.vue";
/* Injection by vite-plugin-vue-inspector Start */
import { createElementVNode as __createElementVNode,createVNode as __createVNode,createElementBlock as __createElementBlock } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=5d575ae9"
function _interopVNode(vnode) {
  if (vnode && vnode.props && 'data-v-inspector' in vnode.props) {
    const data = vnode.props['data-v-inspector']
    delete vnode.props['data-v-inspector']
    Object.defineProperty(vnode.props, '__v_inspector', { value: data, enumerable: false })
  }
  return vnode
}
function _createElementVNode(...args) { return _interopVNode(__createElementVNode(...args)) }
function _createVNode(...args) { return _interopVNode(__createVNode(...args)) }
function _createElementBlock(...args) { return _interopVNode(__createElementBlock(...args)) }
/* Injection by vite-plugin-vue-inspector End */
import { useAuthStore } from "/_nuxt/stores/AuthStore.js";


const _sfc_main = {
  __name: 'SignUpConfirmation',
  setup(__props, { expose: __expose }) {
  __expose();

const authStore = useAuthStore();

const handleClick = async () => {
    authStore.toggleLoading(); 
    await new Promise((resolve) => setTimeout(resolve, 1000));
    authStore.users.set(authStore.Email, authStore.Password);
    authStore.page = 0;
    authStore.confirmEmail = false;
    authStore.toggleLoading(); 
};


const __returned__ = { authStore, handleClick, get useAuthStore() { return useAuthStore } }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import {  toDisplayString as _toDisplayString, vModelText as _vModelText, withDirectives as _withDirectives, resolveComponent as _resolveComponent,  openBlock as _openBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=5d575ae9"
import _imports_0 from "/_nuxt/public/logo.png?import"


const _hoisted_1 = {
  class: "h-[566px] max-w-[374px] bg-black flex items-center justify-center px-6 py-8",
  "data-v-inspector": "components/Templates/SignUpConfirmation.vue:2:5"
}
const _hoisted_2 = {
  class: "shadow-xl flex flex-col justify-start text-center w-full h-full mb-auto",
  "data-v-inspector": "components/Templates/SignUpConfirmation.vue:3:5"
}
const _hoisted_3 = {
  class: "flex flex-col items-center mb-6 h-fit",
  "data-v-inspector": "components/Templates/SignUpConfirmation.vue:4:9"
}
const _hoisted_4 = {
  class: "text-lg font-semibold text-white",
  "data-test": "sign_con-name",
  "data-v-inspector": "components/Templates/SignUpConfirmation.vue:8:13"
}
const _hoisted_5 = {
  class: "flex justify-between mb-6 w-full",
  "data-v-inspector": "components/Templates/SignUpConfirmation.vue:12:9"
}
const _hoisted_6 = {
  class: "flex justify-between mb-6 w-full",
  "data-v-inspector": "components/Templates/SignUpConfirmation.vue:13:13"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AtomsSubmitButton = __nuxt_component_0

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _createElementVNode("div", _hoisted_3, [
        _cache[12] || (_cache[12] = _createElementVNode("div", {
          class: "rounded-full mb-4 flex items-center justify-center",
          "data-v-inspector": "components/Templates/SignUpConfirmation.vue:5:13"
        }, [
          _createElementVNode("img", {
            src: _imports_0,
            alt: "Aladia Logo",
            class: "w-1/2 object-cover",
            "data-v-inspector": "components/Templates/SignUpConfirmation.vue:6:17"
          })
        ], -1 /* HOISTED */)),
        _createElementVNode("h2", _hoisted_4, _toDisplayString(`${$setup.authStore.Name} ${$setup.authStore.Surname}`), 1 /* TEXT */)
      ]),
      _cache[13] || (_cache[13] = _createElementVNode("p", {
        class: "mb-8 text-white/70",
        "data-test": "sign_con-thanks",
        "data-v-inspector": "components/Templates/SignUpConfirmation.vue:10:9"
      }, "Thanks for joining Aladia.", -1 /* HOISTED */)),
      _cache[14] || (_cache[14] = _createElementVNode("p", {
        class: "mb-20 text-center text-white/70",
        "data-test": "sign_con-info",
        "data-v-inspector": "components/Templates/SignUpConfirmation.vue:11:9"
      }, "Please enter below the 6-digit code we sent you through your registration e-mail:", -1 /* HOISTED */)),
      _createElementVNode("div", _hoisted_5, [
        _createElementVNode("div", _hoisted_6, [
          _withDirectives(_createElementVNode("input", {
            type: "text",
            maxlength: "1",
            class: "flex w-10 h-10 text-center",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.authStore.confirmationCode[0]) = $event)),
            onInput: _cache[1] || (_cache[1] = (...args) => (_ctx.validateConfirmationCode && _ctx.validateConfirmationCode(...args))),
            "data-v-inspector": "components/Templates/SignUpConfirmation.vue:14:17"
          }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [
            [_vModelText, $setup.authStore.confirmationCode[0]]
          ]),
          _withDirectives(_createElementVNode("input", {
            type: "text",
            maxlength: "1",
            class: "flex w-10 h-10 text-center",
            "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($setup.authStore.confirmationCode[1]) = $event)),
            onInput: _cache[3] || (_cache[3] = (...args) => (_ctx.validateConfirmationCode && _ctx.validateConfirmationCode(...args))),
            "data-v-inspector": "components/Templates/SignUpConfirmation.vue:15:17"
          }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [
            [_vModelText, $setup.authStore.confirmationCode[1]]
          ]),
          _withDirectives(_createElementVNode("input", {
            type: "text",
            maxlength: "1",
            class: "flex w-10 h-10 text-center",
            "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => (($setup.authStore.confirmationCode[2]) = $event)),
            onInput: _cache[5] || (_cache[5] = (...args) => (_ctx.validateConfirmationCode && _ctx.validateConfirmationCode(...args))),
            "data-v-inspector": "components/Templates/SignUpConfirmation.vue:16:17"
          }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [
            [_vModelText, $setup.authStore.confirmationCode[2]]
          ]),
          _withDirectives(_createElementVNode("input", {
            type: "text",
            maxlength: "1",
            class: "flex w-10 h-10 text-center",
            "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => (($setup.authStore.confirmationCode[3]) = $event)),
            onInput: _cache[7] || (_cache[7] = (...args) => (_ctx.validateConfirmationCode && _ctx.validateConfirmationCode(...args))),
            "data-v-inspector": "components/Templates/SignUpConfirmation.vue:17:17"
          }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [
            [_vModelText, $setup.authStore.confirmationCode[3]]
          ]),
          _withDirectives(_createElementVNode("input", {
            type: "text",
            maxlength: "1",
            class: "flex w-10 h-10 text-center",
            "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => (($setup.authStore.confirmationCode[4]) = $event)),
            onInput: _cache[9] || (_cache[9] = (...args) => (_ctx.validateConfirmationCode && _ctx.validateConfirmationCode(...args))),
            "data-v-inspector": "components/Templates/SignUpConfirmation.vue:18:17"
          }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [
            [_vModelText, $setup.authStore.confirmationCode[4]]
          ]),
          _withDirectives(_createElementVNode("input", {
            type: "text",
            maxlength: "1",
            class: "flex w-10 h-10 text-center",
            "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => (($setup.authStore.confirmationCode[5]) = $event)),
            onInput: _cache[11] || (_cache[11] = (...args) => (_ctx.validateConfirmationCode && _ctx.validateConfirmationCode(...args))),
            "data-v-inspector": "components/Templates/SignUpConfirmation.vue:19:17"
          }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [
            [_vModelText, $setup.authStore.confirmationCode[5]]
          ])
        ])
      ]),
      _cache[15] || (_cache[15] = _createElementVNode("p", {
        class: "text-gray-500 text-center text-sm mb-6",
        "data-test": "sign_con-que",
        "data-v-inspector": "components/Templates/SignUpConfirmation.vue:21:9"
      }, "You didn't receive any mail?", -1 /* HOISTED */)),
      _createVNode(_component_AtomsSubmitButton, { "handle-click": $setup.handleClick })
    ])
  ]))
}


_sfc_main.__hmrId = "e7954bc7"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/khalid/frontend-qa-selection/QA/components/Templates/SignUpConfirmation.vue"]])
//# sourceMappingURL=data:application/json;base64,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QjtNQUUzSyxhQUFpRCxnQ0FBN0IsY0FBWSxFQUFFLGtCQUFXIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJTaWduVXBDb25maXJtYXRpb24udnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZSBsYW5nPVwiXCI+XG4gICAgPGRpdiBjbGFzcz1cImgtWzU2NnB4XSBtYXgtdy1bMzc0cHhdIGJnLWJsYWNrIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB4LTYgcHktOFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1RlbXBsYXRlcy9TaWduVXBDb25maXJtYXRpb24udnVlOjI6NVwiPlxuICAgIDxkaXYgY2xhc3M9XCJzaGFkb3cteGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IHRleHQtY2VudGVyIHctZnVsbCBoLWZ1bGwgbWItYXV0b1wiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1RlbXBsYXRlcy9TaWduVXBDb25maXJtYXRpb24udnVlOjM6NVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgbWItNiBoLWZpdFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1RlbXBsYXRlcy9TaWduVXBDb25maXJtYXRpb24udnVlOjQ6OVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdW5kZWQtZnVsbCBtYi00IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvVGVtcGxhdGVzL1NpZ25VcENvbmZpcm1hdGlvbi52dWU6NToxM1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3B1YmxpYy9sb2dvLnBuZ1wiIGFsdD1cIkFsYWRpYSBMb2dvXCIgY2xhc3M9XCJ3LTEvMiBvYmplY3QtY292ZXJcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9UZW1wbGF0ZXMvU2lnblVwQ29uZmlybWF0aW9uLnZ1ZTo2OjE3XCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGgyIGNsYXNzPVwiIHRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlXCIgZGF0YS10ZXN0PVwic2lnbl9jb24tbmFtZVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1RlbXBsYXRlcy9TaWduVXBDb25maXJtYXRpb24udnVlOjg6MTNcIj57e2Ake2F1dGhTdG9yZS5OYW1lfSAke2F1dGhTdG9yZS5TdXJuYW1lfWB9fTwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBjbGFzcz1cIm1iLTggdGV4dC13aGl0ZS83MFwiIGRhdGEtdGVzdD1cInNpZ25fY29uLXRoYW5rc1wiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1RlbXBsYXRlcy9TaWduVXBDb25maXJtYXRpb24udnVlOjEwOjlcIj5UaGFua3MgZm9yIGpvaW5pbmcgQWxhZGlhLjwvcD5cbiAgICAgICAgPHAgY2xhc3M9XCJtYi0yMCB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlLzcwXCIgZGF0YS10ZXN0PVwic2lnbl9jb24taW5mb1wiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1RlbXBsYXRlcy9TaWduVXBDb25maXJtYXRpb24udnVlOjExOjlcIj5QbGVhc2UgZW50ZXIgYmVsb3cgdGhlIDYtZGlnaXQgY29kZSB3ZSBzZW50IHlvdSB0aHJvdWdoIHlvdXIgcmVnaXN0cmF0aW9uIGUtbWFpbDo8L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBtYi02IHctZnVsbFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1RlbXBsYXRlcy9TaWduVXBDb25maXJtYXRpb24udnVlOjEyOjlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBtYi02IHctZnVsbFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1RlbXBsYXRlcy9TaWduVXBDb25maXJtYXRpb24udnVlOjEzOjEzXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF4bGVuZ3RoPVwiMVwiIGNsYXNzPVwiZmxleCB3LTEwIGgtMTAgdGV4dC1jZW50ZXJcIiB2LW1vZGVsPVwiYXV0aFN0b3JlLmNvbmZpcm1hdGlvbkNvZGVbMF1cIiBAaW5wdXQ9XCJ2YWxpZGF0ZUNvbmZpcm1hdGlvbkNvZGVcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9UZW1wbGF0ZXMvU2lnblVwQ29uZmlybWF0aW9uLnZ1ZToxNDoxN1wiIC8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF4bGVuZ3RoPVwiMVwiIGNsYXNzPVwiZmxleCB3LTEwIGgtMTAgdGV4dC1jZW50ZXJcIiB2LW1vZGVsPVwiYXV0aFN0b3JlLmNvbmZpcm1hdGlvbkNvZGVbMV1cIiBAaW5wdXQ9XCJ2YWxpZGF0ZUNvbmZpcm1hdGlvbkNvZGVcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9UZW1wbGF0ZXMvU2lnblVwQ29uZmlybWF0aW9uLnZ1ZToxNToxN1wiIC8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF4bGVuZ3RoPVwiMVwiIGNsYXNzPVwiZmxleCB3LTEwIGgtMTAgdGV4dC1jZW50ZXJcIiB2LW1vZGVsPVwiYXV0aFN0b3JlLmNvbmZpcm1hdGlvbkNvZGVbMl1cIiBAaW5wdXQ9XCJ2YWxpZGF0ZUNvbmZpcm1hdGlvbkNvZGVcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9UZW1wbGF0ZXMvU2lnblVwQ29uZmlybWF0aW9uLnZ1ZToxNjoxN1wiIC8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF4bGVuZ3RoPVwiMVwiIGNsYXNzPVwiZmxleCB3LTEwIGgtMTAgdGV4dC1jZW50ZXJcIiB2LW1vZGVsPVwiYXV0aFN0b3JlLmNvbmZpcm1hdGlvbkNvZGVbM11cIiBAaW5wdXQ9XCJ2YWxpZGF0ZUNvbmZpcm1hdGlvbkNvZGVcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9UZW1wbGF0ZXMvU2lnblVwQ29uZmlybWF0aW9uLnZ1ZToxNzoxN1wiIC8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF4bGVuZ3RoPVwiMVwiIGNsYXNzPVwiZmxleCB3LTEwIGgtMTAgdGV4dC1jZW50ZXJcIiB2LW1vZGVsPVwiYXV0aFN0b3JlLmNvbmZpcm1hdGlvbkNvZGVbNF1cIiBAaW5wdXQ9XCJ2YWxpZGF0ZUNvbmZpcm1hdGlvbkNvZGVcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9UZW1wbGF0ZXMvU2lnblVwQ29uZmlybWF0aW9uLnZ1ZToxODoxN1wiIC8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF4bGVuZ3RoPVwiMVwiIGNsYXNzPVwiZmxleCB3LTEwIGgtMTAgdGV4dC1jZW50ZXJcIiB2LW1vZGVsPVwiYXV0aFN0b3JlLmNvbmZpcm1hdGlvbkNvZGVbNV1cIiBAaW5wdXQ9XCJ2YWxpZGF0ZUNvbmZpcm1hdGlvbkNvZGVcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9UZW1wbGF0ZXMvU2lnblVwQ29uZmlybWF0aW9uLnZ1ZToxOToxN1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj48L2Rpdj5cbiAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWdyYXktNTAwIHRleHQtY2VudGVyIHRleHQtc20gbWItNlwiIGRhdGEtdGVzdD1cInNpZ25fY29uLXF1ZVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1RlbXBsYXRlcy9TaWduVXBDb25maXJtYXRpb24udnVlOjIxOjlcIj5Zb3UgZGlkbid0IHJlY2VpdmUgYW55IG1haWw/PC9wPlxuICAgICAgICBcbiAgICAgICAgPEF0b21zU3VibWl0QnV0dG9uIDpoYW5kbGUtY2xpY2s9XCJoYW5kbGVDbGlja1wiIC8+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHVzZUF1dGhTdG9yZSB9IGZyb20gJ34vc3RvcmVzL0F1dGhTdG9yZSc7XG5cbmNvbnN0IGF1dGhTdG9yZSA9IHVzZUF1dGhTdG9yZSgpO1xuXG5jb25zdCBoYW5kbGVDbGljayA9IGFzeW5jICgpID0+IHtcbiAgICBhdXRoU3RvcmUudG9nZ2xlTG9hZGluZygpOyBcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCAxMDAwKSk7XG4gICAgYXV0aFN0b3JlLnVzZXJzLnNldChhdXRoU3RvcmUuRW1haWwsIGF1dGhTdG9yZS5QYXNzd29yZCk7XG4gICAgYXV0aFN0b3JlLnBhZ2UgPSAwO1xuICAgIGF1dGhTdG9yZS5jb25maXJtRW1haWwgPSBmYWxzZTtcbiAgICBhdXRoU3RvcmUudG9nZ2xlTG9hZGluZygpOyBcbn07XG5cbjwvc2NyaXB0PlxuPHN0eWxlIGxhbmc9XCJcIj5cblxuPC9zdHlsZT4iXSwiZmlsZSI6Ii9ob21lL2toYWxpZC9mcm9udGVuZC1xYS1zZWxlY3Rpb24vUUEvY29tcG9uZW50cy9UZW1wbGF0ZXMvU2lnblVwQ29uZmlybWF0aW9uLnZ1ZSJ9