import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/Templates/Welcome.vue");/* Injection by vite-plugin-vue-inspector Start */
import { createElementVNode as __createElementVNode,createElementBlock as __createElementBlock } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=0984fb0a"
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
import { createCommentVNode as _createCommentVNode,  openBlock as _openBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=0984fb0a"
import _imports_0 from "/_nuxt/public/logo.png?import"


const _hoisted_1 = {
  class: "h-[598px] max-w-[374px] p-5 flex flex-col items-center justify-evenly bg-black text-white",
  "data-v-inspector": "components/Templates/Welcome.vue:2:5"
}

function _sfc_render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createCommentVNode(" Logo and Welcome Text "),
    _cache[0] || (_cache[0] = _createElementVNode("div", {
      class: "animate-pulsebg-black p-4 rounded-lg shadow-lg max-w-[372px] flex items-center justify-between transition-all duration-300 border border-white",
      "data-v-inspector": "components/Templates/Welcome.vue:4:9"
    }, [
      _createElementVNode("img", {
        src: _imports_0,
        alt: "Aladia Logo",
        class: "w-1/2 object-cover",
        "data-v-inspector": "components/Templates/Welcome.vue:6:13"
      }),
      _createElementVNode("div", {
        class: "w-1/2",
        "data-v-inspector": "components/Templates/Welcome.vue:7:13"
      }, [
        _createElementVNode("h2", {
          class: "text-white font-semibold",
          "data-test": "welcome-text",
          "data-v-inspector": "components/Templates/Welcome.vue:8:17"
        }, "Welcome to Aladia,")
      ])
    ], -1 /* HOISTED */))
  ]))
}


_sfc_main.__hmrId = "e387431f"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/khalid/frontend-qa-selection/QA/components/Templates/Welcome.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7T0FLaUIsb0JBQXNCOzs7O0tBSjlCLFdBQU07RUFBNEYsa0JBQWdCLEdBQUMseUNBQXNDOzs7O3lCQUE5SjtRQUNJLDBDQUE4Qjs4QkFDOUIsb0JBTU07VUFMRixDQUFLLEVBQUM7TUFBaUosdUJBQWlCLG1DQUFzQzs7TUFDOU07eUJBQTJCO1FBQUMsR0FBRyxFQUFDO1FBQWMsS0FBSyxPQUFDO1FBQXFCLG9CQUFpQjs7TUFDMUY7eUJBQWtCO1FBQUM7O1FBQ2Y7MkJBQVU7VUFBMkIsWUFBUyxDQUFDLG1CQUFjO1VBQUMscUJBQWlCO1dBQXdDLG9CQUFrQiIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiV2VsY29tZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJoLVs1OThweF0gbWF4LXctWzM3NHB4XSBwLTUgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1ldmVubHkgYmctYmxhY2sgdGV4dC13aGl0ZVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1RlbXBsYXRlcy9XZWxjb21lLnZ1ZToyOjVcIj5cbiAgICAgICAgPCEtLSBMb2dvIGFuZCBXZWxjb21lIFRleHQgLS0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwiYW5pbWF0ZS1wdWxzZWJnLWJsYWNrIHAtNCByb3VuZGVkLWxnIHNoYWRvdy1sZyBtYXgtdy1bMzcycHhdIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgYm9yZGVyIGJvcmRlci13aGl0ZVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1RlbXBsYXRlcy9XZWxjb21lLnZ1ZTo0OjlcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3B1YmxpYy9sb2dvLnBuZ1wiIGFsdD1cIkFsYWRpYSBMb2dvXCIgY2xhc3M9XCJ3LTEvMiBvYmplY3QtY292ZXJcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9UZW1wbGF0ZXMvV2VsY29tZS52dWU6NjoxM1wiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xLzJcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9UZW1wbGF0ZXMvV2VsY29tZS52dWU6NzoxM1wiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInRleHQtd2hpdGUgZm9udC1zZW1pYm9sZFwiIGRhdGEtdGVzdD1cIndlbGNvbWUtdGV4dFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1RlbXBsYXRlcy9XZWxjb21lLnZ1ZTo4OjE3XCI+V2VsY29tZSB0byBBbGFkaWEsPC9oMj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+Il0sImZpbGUiOiIvaG9tZS9raGFsaWQvZnJvbnRlbmQtcWEtc2VsZWN0aW9uL1FBL2NvbXBvbmVudHMvVGVtcGxhdGVzL1dlbGNvbWUudnVlIn0=