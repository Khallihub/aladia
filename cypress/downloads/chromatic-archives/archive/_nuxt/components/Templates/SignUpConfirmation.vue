import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/Templates/SignUpConfirmation.vue");import { default as __nuxt_component_0 } from "/_nuxt/components/Atoms/SubmitButton.vue";
/* Injection by vite-plugin-vue-inspector Start */
import { createElementVNode as __createElementVNode,createVNode as __createVNode,createElementBlock as __createElementBlock } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=0984fb0a"
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
import { useAuthStore } from "/_nuxt/stores/AuthStore.ts";


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
import {  toDisplayString as _toDisplayString, vModelText as _vModelText, withDirectives as _withDirectives, resolveComponent as _resolveComponent,  openBlock as _openBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=0984fb0a"
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
//# sourceMappingURL=data:application/json;base64,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QWlELGdDQUE3QixjQUFZLEVBQUUsa0JBQVciLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIlNpZ25VcENvbmZpcm1hdGlvbi52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlIGxhbmc9XCJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiaC1bNTY2cHhdIG1heC13LVszNzRweF0gYmctYmxhY2sgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHgtNiBweS04XCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvVGVtcGxhdGVzL1NpZ25VcENvbmZpcm1hdGlvbi52dWU6Mjo1XCI+XG4gICAgPGRpdiBjbGFzcz1cInNoYWRvdy14bCBmbGV4IGZsZXgtY29sIGp1c3RpZnktc3RhcnQgdGV4dC1jZW50ZXIgdy1mdWxsIGgtZnVsbCBtYi1hdXRvXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvVGVtcGxhdGVzL1NpZ25VcENvbmZpcm1hdGlvbi52dWU6Mzo1XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBtYi02IGgtZml0XCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvVGVtcGxhdGVzL1NpZ25VcENvbmZpcm1hdGlvbi52dWU6NDo5XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm91bmRlZC1mdWxsIG1iLTQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9UZW1wbGF0ZXMvU2lnblVwQ29uZmlybWF0aW9uLnZ1ZTo1OjEzXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvcHVibGljL2xvZ28ucG5nXCIgYWx0PVwiQWxhZGlhIExvZ29cIiBjbGFzcz1cInctMS8yIG9iamVjdC1jb3ZlclwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1RlbXBsYXRlcy9TaWduVXBDb25maXJtYXRpb24udnVlOjY6MTdcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aDIgY2xhc3M9XCIgdGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtd2hpdGVcIiBkYXRhLXRlc3Q9XCJzaWduX2Nvbi1uYW1lXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvVGVtcGxhdGVzL1NpZ25VcENvbmZpcm1hdGlvbi52dWU6ODoxM1wiPnt7YCR7YXV0aFN0b3JlLk5hbWV9ICR7YXV0aFN0b3JlLlN1cm5hbWV9YH19PC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwIGNsYXNzPVwibWItOCB0ZXh0LXdoaXRlLzcwXCIgZGF0YS10ZXN0PVwic2lnbl9jb24tdGhhbmtzXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvVGVtcGxhdGVzL1NpZ25VcENvbmZpcm1hdGlvbi52dWU6MTA6OVwiPlRoYW5rcyBmb3Igam9pbmluZyBBbGFkaWEuPC9wPlxuICAgICAgICA8cCBjbGFzcz1cIm1iLTIwIHRleHQtY2VudGVyIHRleHQtd2hpdGUvNzBcIiBkYXRhLXRlc3Q9XCJzaWduX2Nvbi1pbmZvXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvVGVtcGxhdGVzL1NpZ25VcENvbmZpcm1hdGlvbi52dWU6MTE6OVwiPlBsZWFzZSBlbnRlciBiZWxvdyB0aGUgNi1kaWdpdCBjb2RlIHdlIHNlbnQgeW91IHRocm91Z2ggeW91ciByZWdpc3RyYXRpb24gZS1tYWlsOjwvcD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1iZXR3ZWVuIG1iLTYgdy1mdWxsXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvVGVtcGxhdGVzL1NpZ25VcENvbmZpcm1hdGlvbi52dWU6MTI6OVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1iZXR3ZWVuIG1iLTYgdy1mdWxsXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvVGVtcGxhdGVzL1NpZ25VcENvbmZpcm1hdGlvbi52dWU6MTM6MTNcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBtYXhsZW5ndGg9XCIxXCIgY2xhc3M9XCJmbGV4IHctMTAgaC0xMCB0ZXh0LWNlbnRlclwiIHYtbW9kZWw9XCJhdXRoU3RvcmUuY29uZmlybWF0aW9uQ29kZVswXVwiIEBpbnB1dD1cInZhbGlkYXRlQ29uZmlybWF0aW9uQ29kZVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1RlbXBsYXRlcy9TaWduVXBDb25maXJtYXRpb24udnVlOjE0OjE3XCIgLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBtYXhsZW5ndGg9XCIxXCIgY2xhc3M9XCJmbGV4IHctMTAgaC0xMCB0ZXh0LWNlbnRlclwiIHYtbW9kZWw9XCJhdXRoU3RvcmUuY29uZmlybWF0aW9uQ29kZVsxXVwiIEBpbnB1dD1cInZhbGlkYXRlQ29uZmlybWF0aW9uQ29kZVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1RlbXBsYXRlcy9TaWduVXBDb25maXJtYXRpb24udnVlOjE1OjE3XCIgLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBtYXhsZW5ndGg9XCIxXCIgY2xhc3M9XCJmbGV4IHctMTAgaC0xMCB0ZXh0LWNlbnRlclwiIHYtbW9kZWw9XCJhdXRoU3RvcmUuY29uZmlybWF0aW9uQ29kZVsyXVwiIEBpbnB1dD1cInZhbGlkYXRlQ29uZmlybWF0aW9uQ29kZVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1RlbXBsYXRlcy9TaWduVXBDb25maXJtYXRpb24udnVlOjE2OjE3XCIgLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBtYXhsZW5ndGg9XCIxXCIgY2xhc3M9XCJmbGV4IHctMTAgaC0xMCB0ZXh0LWNlbnRlclwiIHYtbW9kZWw9XCJhdXRoU3RvcmUuY29uZmlybWF0aW9uQ29kZVszXVwiIEBpbnB1dD1cInZhbGlkYXRlQ29uZmlybWF0aW9uQ29kZVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1RlbXBsYXRlcy9TaWduVXBDb25maXJtYXRpb24udnVlOjE3OjE3XCIgLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBtYXhsZW5ndGg9XCIxXCIgY2xhc3M9XCJmbGV4IHctMTAgaC0xMCB0ZXh0LWNlbnRlclwiIHYtbW9kZWw9XCJhdXRoU3RvcmUuY29uZmlybWF0aW9uQ29kZVs0XVwiIEBpbnB1dD1cInZhbGlkYXRlQ29uZmlybWF0aW9uQ29kZVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1RlbXBsYXRlcy9TaWduVXBDb25maXJtYXRpb24udnVlOjE4OjE3XCIgLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBtYXhsZW5ndGg9XCIxXCIgY2xhc3M9XCJmbGV4IHctMTAgaC0xMCB0ZXh0LWNlbnRlclwiIHYtbW9kZWw9XCJhdXRoU3RvcmUuY29uZmlybWF0aW9uQ29kZVs1XVwiIEBpbnB1dD1cInZhbGlkYXRlQ29uZmlybWF0aW9uQ29kZVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1RlbXBsYXRlcy9TaWduVXBDb25maXJtYXRpb24udnVlOjE5OjE3XCIgLz5cbiAgICAgICAgICAgIDwvZGl2PjwvZGl2PlxuICAgICAgICA8cCBjbGFzcz1cInRleHQtZ3JheS01MDAgdGV4dC1jZW50ZXIgdGV4dC1zbSBtYi02XCIgZGF0YS10ZXN0PVwic2lnbl9jb24tcXVlXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvVGVtcGxhdGVzL1NpZ25VcENvbmZpcm1hdGlvbi52dWU6MjE6OVwiPllvdSBkaWRuJ3QgcmVjZWl2ZSBhbnkgbWFpbD88L3A+XG4gICAgICAgIFxuICAgICAgICA8QXRvbXNTdWJtaXRCdXR0b24gOmhhbmRsZS1jbGljaz1cImhhbmRsZUNsaWNrXCIgLz5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0IHNldHVwPlxuaW1wb3J0IHsgdXNlQXV0aFN0b3JlIH0gZnJvbSAnfi9zdG9yZXMvQXV0aFN0b3JlJztcblxuY29uc3QgYXV0aFN0b3JlID0gdXNlQXV0aFN0b3JlKCk7XG5cbmNvbnN0IGhhbmRsZUNsaWNrID0gYXN5bmMgKCkgPT4ge1xuICAgIGF1dGhTdG9yZS50b2dnbGVMb2FkaW5nKCk7XG4gICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwMCkpO1xuICAgIGF1dGhTdG9yZS51c2Vycy5zZXQoYXV0aFN0b3JlLkVtYWlsLCBhdXRoU3RvcmUuUGFzc3dvcmQpO1xuICAgIGF1dGhTdG9yZS5wYWdlID0gMDtcbiAgICBhdXRoU3RvcmUuY29uZmlybUVtYWlsID0gZmFsc2U7XG4gICAgYXV0aFN0b3JlLnRvZ2dsZUxvYWRpbmcoKTtcbn07XG5cbjwvc2NyaXB0PlxuPHN0eWxlIGxhbmc9XCJcIj5cblxuPC9zdHlsZT4iXSwiZmlsZSI6Ii9ob21lL2toYWxpZC9mcm9udGVuZC1xYS1zZWxlY3Rpb24vUUEvY29tcG9uZW50cy9UZW1wbGF0ZXMvU2lnblVwQ29uZmlybWF0aW9uLnZ1ZSJ9