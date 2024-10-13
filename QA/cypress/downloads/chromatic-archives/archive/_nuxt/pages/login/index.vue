import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/pages/login/index.vue");import { default as __nuxt_component_0 } from "/_nuxt/components/Templates/SignInForm.vue";
import { default as __nuxt_component_1 } from "/_nuxt/components/Templates/SignUpForm.vue";
import { default as __nuxt_component_2 } from "/_nuxt/components/Templates/SignUpConfirmation.vue";
import { default as __nuxt_component_3 } from "/_nuxt/components/Templates/Welcome.vue";
import { default as __nuxt_component_4 } from "/_nuxt/node_modules/.pnpm/nuxt@3.11.2_@parcel+watcher@2.4.1_@types+node@18.19.55_ioredis@5.4.1_magicast@0.3.5_rollup@4._6wqjbqw6dmapnmro6xpkorp354/node_modules/nuxt/dist/app/components/client-only.js?v=5d575ae9";
/* Injection by vite-plugin-vue-inspector Start */
import { createVNode as __createVNode,createElementBlock as __createElementBlock,createElementVNode as __createElementVNode } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=5d575ae9"
function _interopVNode(vnode) {
  if (vnode && vnode.props && 'data-v-inspector' in vnode.props) {
    const data = vnode.props['data-v-inspector']
    delete vnode.props['data-v-inspector']
    Object.defineProperty(vnode.props, '__v_inspector', { value: data, enumerable: false })
  }
  return vnode
}
function _createVNode(...args) { return _interopVNode(__createVNode(...args)) }
function _createElementBlock(...args) { return _interopVNode(__createElementBlock(...args)) }
function _createElementVNode(...args) { return _interopVNode(__createElementVNode(...args)) }
/* Injection by vite-plugin-vue-inspector End */
import { useAuthStore } from "/_nuxt/stores/AuthStore.js";

  
const _sfc_main = {
  __name: 'index',
  setup(__props, { expose: __expose }) {
  __expose();

  const authStore = useAuthStore(); 

  
const __returned__ = { authStore, get useAuthStore() { return useAuthStore } }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import { resolveComponent as _resolveComponent,  openBlock as _openBlock,  createCommentVNode as _createCommentVNode,  withCtx as _withCtx, createBlock as _createBlock } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=5d575ae9"

const _hoisted_1 = {
  class: "bg-black w-screen h-screen flex justify-center items-center",
  "data-v-inspector": "pages/login/index.vue:3:7"
}
const _hoisted_2 = {
  class: "border border-[#ffffff1a] w-fit rounded-md",
  "data-v-inspector": "pages/login/index.vue:4:9"
}
const _hoisted_3 = {
  key: 0,
  "data-v-inspector": "pages/login/index.vue:5:11"
}
const _hoisted_4 = {
  key: 1,
  "data-v-inspector": "pages/login/index.vue:8:11"
}
const _hoisted_5 = {
  key: 2,
  "data-v-inspector": "pages/login/index.vue:11:11"
}
const _hoisted_6 = {
  key: 3,
  "data-v-inspector": "pages/login/index.vue:14:11"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_TemplatesSignInForm = __nuxt_component_0
  const _component_TemplatesSignUpForm = __nuxt_component_1
  const _component_TemplatesSignUpConfirmation = __nuxt_component_2
  const _component_TemplatesWelcome = __nuxt_component_3
  const _component_ClientOnly = __nuxt_component_4

  return (_openBlock(), _createBlock(_component_ClientOnly, null, {
    default: _withCtx(() => [
      _createElementVNode("div", _hoisted_1, [
        _createElementVNode("div", _hoisted_2, [
          ($setup.authStore.page === 0 && !$setup.authStore.confirmEmail)
            ? (_openBlock(), _createElementBlock("div", _hoisted_3, [
                _createVNode(_component_TemplatesSignInForm)
              ]))
            : _createCommentVNode("v-if", true),
          ($setup.authStore.page === 1 && !$setup.authStore.confirmEmail)
            ? (_openBlock(), _createElementBlock("div", _hoisted_4, [
                _createVNode(_component_TemplatesSignUpForm)
              ]))
            : _createCommentVNode("v-if", true),
          ($setup.authStore.confirmEmail)
            ? (_openBlock(), _createElementBlock("div", _hoisted_5, [
                _createVNode(_component_TemplatesSignUpConfirmation)
              ]))
            : _createCommentVNode("v-if", true),
          ($setup.authStore.page === 2)
            ? (_openBlock(), _createElementBlock("div", _hoisted_6, [
                _createVNode(_component_TemplatesWelcome)
              ]))
            : _createCommentVNode("v-if", true)
        ])
      ])
    ]),
    _: 1 /* STABLE */
  }))
}


_sfc_main.__hmrId = "d08ef7d4"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/khalid/frontend-qa-selection/QA/pages/login/index.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCRSxNQUFNLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7O0FBRW5ELENBQUM7Ozs7OztBQUZELENBQUMsQ0FFQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDOztBQUVuQyxDQUFDOzs7Ozs7Ozs7O0VBeEJVLEtBQUssRUFBQyw2REFBNkQ7RUFBQyxrQkFBZ0IsRUFBQzs7O0VBQ25GLEtBQUssRUFBQyw0Q0FBNEM7RUFBQyxrQkFBZ0IsRUFBQzs7O0VBSGpGO0VBSXNFLGtCQUFnQixFQUFDOzs7RUFKdkY7RUFPc0Usa0JBQWdCLEVBQUM7OztFQVB2RjtFQVU2QyxrQkFBZ0IsRUFBQzs7O0VBVjlEO0VBYTJDLGtCQUFnQixFQUFDOzs7Ozs7Ozs7O3dCQVp4RCxhQWlCYTtJQWxCakIsa0JBRU0sQ0FlTTtNQWZOLG9CQWVNLE9BZk4sVUFlTTtRQWRKLG9CQWFNLE9BYk4sVUFhTTtXQVpPLGdCQUFTLENBQUMsSUFBSSxXQUFXLGdCQUFTLENBQUMsWUFBWTs2QkFBMUQsb0JBRU0sT0FGTixVQUVNO2dCQURKLGFBQXVCOztjQUxuQztXQU9xQixnQkFBUyxDQUFDLElBQUksV0FBVyxnQkFBUyxDQUFDLFlBQVk7NkJBQTFELG9CQUVNLE9BRk4sVUFFTTtnQkFESixhQUF1Qjs7Y0FSbkM7V0FVcUIsZ0JBQVMsQ0FBQyxZQUFZOzZCQUFqQyxvQkFFTSxPQUZOLFVBRU07Z0JBREosYUFBK0I7O2NBWDNDO1dBYXFCLGdCQUFTLENBQUMsSUFBSTs2QkFBekIsb0JBRU0sT0FGTixVQUVNO2dCQURKLGFBQW9COztjQWRoQzs7OztJQUFBIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJpbmRleC52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlIGxhbmc9XCJcIj5cbiAgICA8Q2xpZW50T25seT5cbiAgICAgIDxkaXYgY2xhc3M9XCJiZy1ibGFjayB3LXNjcmVlbiBoLXNjcmVlbiBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiIGRhdGEtdi1pbnNwZWN0b3I9XCJwYWdlcy9sb2dpbi9pbmRleC52dWU6Mzo3XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3JkZXIgYm9yZGVyLVsjZmZmZmZmMWFdIHctZml0IHJvdW5kZWQtbWRcIiBkYXRhLXYtaW5zcGVjdG9yPVwicGFnZXMvbG9naW4vaW5kZXgudnVlOjQ6OVwiPlxuICAgICAgICAgIDxkaXYgdi1pZj1cImF1dGhTdG9yZS5wYWdlID09PSAwICYmICFhdXRoU3RvcmUuY29uZmlybUVtYWlsXCIgZGF0YS12LWluc3BlY3Rvcj1cInBhZ2VzL2xvZ2luL2luZGV4LnZ1ZTo1OjExXCI+XG4gICAgICAgICAgICA8VGVtcGxhdGVzU2lnbkluRm9ybSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgdi1pZj1cImF1dGhTdG9yZS5wYWdlID09PSAxICYmICFhdXRoU3RvcmUuY29uZmlybUVtYWlsXCIgZGF0YS12LWluc3BlY3Rvcj1cInBhZ2VzL2xvZ2luL2luZGV4LnZ1ZTo4OjExXCI+XG4gICAgICAgICAgICA8VGVtcGxhdGVzU2lnblVwRm9ybSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgdi1pZj1cImF1dGhTdG9yZS5jb25maXJtRW1haWxcIiBkYXRhLXYtaW5zcGVjdG9yPVwicGFnZXMvbG9naW4vaW5kZXgudnVlOjExOjExXCI+XG4gICAgICAgICAgICA8VGVtcGxhdGVzU2lnblVwQ29uZmlybWF0aW9uIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiB2LWlmPVwiYXV0aFN0b3JlLnBhZ2UgPT09IDJcIiBkYXRhLXYtaW5zcGVjdG9yPVwicGFnZXMvbG9naW4vaW5kZXgudnVlOjE0OjExXCI+XG4gICAgICAgICAgICA8VGVtcGxhdGVzV2VsY29tZSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvQ2xpZW50T25seT5cbiAgPC90ZW1wbGF0ZT5cbiAgXG4gIDxzY3JpcHQgc2V0dXA+XG4gIGltcG9ydCB7IHVzZUF1dGhTdG9yZSB9IGZyb20gJ34vc3RvcmVzL0F1dGhTdG9yZSc7XG5cbiAgY29uc3QgYXV0aFN0b3JlID0gdXNlQXV0aFN0b3JlKCk7IFxuXG4gIDwvU2NyaXB0PlxuIl0sImZpbGUiOiIvaG9tZS9raGFsaWQvZnJvbnRlbmQtcWEtc2VsZWN0aW9uL1FBL3BhZ2VzL2xvZ2luL2luZGV4LnZ1ZSJ9