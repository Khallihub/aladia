import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/WelcomeCard.vue");/* Injection by vite-plugin-vue-inspector Start */
import { createElementVNode as __createElementVNode,createElementBlock as __createElementBlock } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=50424943"
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
/* Injection by vite-plugin-vue-inspector End */
const _sfc_main = {}
import {  openBlock as _openBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=50424943"
import _imports_0 from "/_nuxt/public/logo.png?import"


const _hoisted_1 = {
  class: "bg-black p-4 rounded-lg shadow-lg max-w-[372px] flex items-center justify-between transition-all duration-300 border border-white",
  "data-v-inspector": "components/WelcomeCard.vue:2:3"
}

function _sfc_render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, _cache[0] || (_cache[0] = [
    _createElementVNode("img", {
      src: _imports_0,
      alt: "Aladia Logo",
      class: "w-1/2 object-cover",
      "data-v-inspector": "components/WelcomeCard.vue:3:5"
    }, null, -1 /* HOISTED */),
    _createElementVNode("div", {
      class: "w-1/2",
      "data-v-inspector": "components/WelcomeCard.vue:4:5"
    }, [
      _createElementVNode("h2", {
        class: "text-white font-semibold",
        "data-test": "welcome-text",
        "data-v-inspector": "components/WelcomeCard.vue:5:9"
      }, "Welcome to Aladia,"),
      _createElementVNode("p", {
        class: "text-gray-400 text-sm",
        "data-test": "welcome-info",
        "data-v-inspector": "components/WelcomeCard.vue:6:7"
      }, "Create or access your account from here")
    ], -1 /* HOISTED */)
  ])))
}


_sfc_main.__hmrId = "526a1dfd"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/khalid/frontend-qa-selection/QA/components/WelcomeCard.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7T0FFUyxFQUFzQjs7OztLQUR4QixXQUFNO0VBQW9JLGtCQUFnQixFQUFDLGtDQUFnQzs7Ozt5QkFBaE07UUFDRSxnQkFBNkg7dUJBQWxHO01BQUMsR0FBRyxFQUFDO01BQWMsS0FBSyxPQUFDO01BQXFCLG9CQUFpQjs7SUFDMUYsc0JBR007dUJBSFk7TUFBQzs7TUFDZjt5QkFBVTtRQUEyQixZQUFTLENBQUMsbUJBQWM7UUFBQyxxQkFBaUI7U0FBaUMsb0JBQWtCO01BQ3BJLHFCQUF1Sjt5QkFBOUk7UUFBd0IsWUFBUyxDQUFDLGNBQWM7UUFBQyxxQkFBaUI7U0FBaUMsMENBQXVDIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJXZWxjb21lQ2FyZC52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiYmctYmxhY2sgcC00IHJvdW5kZWQtbGcgc2hhZG93LWxnIG1heC13LVszNzJweF0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBib3JkZXIgYm9yZGVyLXdoaXRlXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvV2VsY29tZUNhcmQudnVlOjI6M1wiPlxuICAgIDxpbWcgc3JjPVwiL3B1YmxpYy9sb2dvLnBuZ1wiIGFsdD1cIkFsYWRpYSBMb2dvXCIgY2xhc3M9XCJ3LTEvMiBvYmplY3QtY292ZXJcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9XZWxjb21lQ2FyZC52dWU6Mzo1XCIgLz5cbiAgICA8ZGl2IGNsYXNzPVwidy0xLzJcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9XZWxjb21lQ2FyZC52dWU6NDo1XCI+XG4gICAgICAgIDxoMiBjbGFzcz1cInRleHQtd2hpdGUgZm9udC1zZW1pYm9sZFwiIGRhdGEtdGVzdD1cIndlbGNvbWUtdGV4dFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1dlbGNvbWVDYXJkLnZ1ZTo1OjlcIj5XZWxjb21lIHRvIEFsYWRpYSw8L2gyPlxuICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWdyYXktNDAwIHRleHQtc21cIiBkYXRhLXRlc3Q9XCJ3ZWxjb21lLWluZm9cIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9XZWxjb21lQ2FyZC52dWU6Njo3XCI+Q3JlYXRlIG9yIGFjY2VzcyB5b3VyIGFjY291bnQgZnJvbSBoZXJlPC9wPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXA+XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT5cbiJdLCJmaWxlIjoiL2hvbWUva2hhbGlkL2Zyb250ZW5kLXFhLXNlbGVjdGlvbi9RQS9jb21wb25lbnRzL1dlbGNvbWVDYXJkLnZ1ZSJ9