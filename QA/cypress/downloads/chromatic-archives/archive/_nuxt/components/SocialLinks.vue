import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/SocialLinks.vue");/* Injection by vite-plugin-vue-inspector Start */
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

const _sfc_main = {
  __name: 'SocialLinks',
  props: {
    svg: {
      type: Object,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    onClick: {
      type: Function,
      default: () => {},
    },
  },
  setup(__props, { expose: __expose }) {
  __expose();

  
  const props = __props;
  
const __returned__ = { props }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import {  resolveDynamicComponent as _resolveDynamicComponent, openBlock as _openBlock, createBlock as _createBlock, toDisplayString as _toDisplayString, createTextVNode as _createTextVNode, Fragment as _Fragment,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=50424943"

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock(_Fragment, null, [
    _cache[1] || (_cache[1] = _createElementVNode("div", { "data-v-inspector": "components/SocialLinks.vue:2:3" }, null, -1 /* HOISTED */)),
    _createElementVNode("button", {
      onClick: _cache[0] || (_cache[0] = (...args) => ($props.onClick && $props.onClick(...args))),
      class: "w-full px-4 py-3 border border-gray-700 rounded-md text-white bg-black shadow-[0px_3px_6px_#00000000] transition-all hover:bg-white/20 hover:shadow-[0px_3px_6px_#000000] active:scale-95 focus:ring-offset-2 focus:ring-offset-gray-800 flex gap-3 justify-center items-center",
      "data-v-inspector": "components/SocialLinks.vue:3:5"
    }, [
      (_openBlock(), _createBlock(_resolveDynamicComponent($props.svg), { class: "w-5 h-5 mr-2" })),
      _createTextVNode(" " + _toDisplayString($props.text), 1 /* TEXT */)
    ])
  ], 64 /* STABLE_FRAGMENT */))
}


_sfc_main.__hmrId = "b96cd4c3"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/khalid/frontend-qa-selection/QA/components/SocialLinks.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY0EsQ0FBQztBQUNELENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQWFaO0FBQ0osQ0FBQzs7Ozs7Ozs7Ozt3QkE3QkQ7OEJBQ0Usb0JBQTZELFNBQXhELGtCQUFnQixFQUFDLGdDQUFnQztJQUNwRCxvQkFRUztNQVBOLE9BQUssMENBQUUseUNBQU87TUFDZixLQUFLLEVBQUMsaVJBRW1GO01BQUMsa0JBQWdCLEVBQUM7O3FCQUUzRyxhQUE0Qyx3QkFSbEQsQ0FRc0IsVUFBRyxLQUFFLEtBQUssRUFBQyxjQUFjO01BUi9DLGlCQVFrRCxHQUM1QyxvQkFBRyxXQUFJIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJTb2NpYWxMaW5rcy52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL1NvY2lhbExpbmtzLnZ1ZToyOjNcIj48L2Rpdj5cbiAgICA8YnV0dG9uXG4gICAgICBAY2xpY2s9XCJvbkNsaWNrXCJcbiAgICAgIGNsYXNzPVwidy1mdWxsIHB4LTQgcHktMyBib3JkZXIgYm9yZGVyLWdyYXktNzAwIHJvdW5kZWQtbWQgdGV4dC13aGl0ZSBiZy1ibGFja1xuICAgICAgc2hhZG93LVswcHhfM3B4XzZweF8jMDAwMDAwMDBdIHRyYW5zaXRpb24tYWxsIGhvdmVyOmJnLXdoaXRlLzIwIGhvdmVyOnNoYWRvdy1bMHB4XzNweF82cHhfIzAwMDAwMF0gYWN0aXZlOnNjYWxlLTk1XG4gICAgICAgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLW9mZnNldC1ncmF5LTgwMCBmbGV4IGdhcC0zIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciAgXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvU29jaWFsTGlua3MudnVlOjM6NVwiXG4gICAgPlxuICAgICAgPGNvbXBvbmVudCA6aXM9XCJzdmdcIiBjbGFzcz1cInctNSBoLTUgbXItMlwiIC8+XG4gICAgICB7eyB0ZXh0IH19XG4gICAgPC9idXR0b24+XG4gIDwvdGVtcGxhdGU+XG4gIFxuICA8c2NyaXB0IHNldHVwPlxuICBcbiAgY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gICAgc3ZnOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIHRleHQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgb25DbGljazoge1xuICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICBkZWZhdWx0OiAoKSA9PiB7fSxcbiAgICB9LFxuICB9KTtcbiAgPC9zY3JpcHQ+XG4gICJdLCJmaWxlIjoiL2hvbWUva2hhbGlkL2Zyb250ZW5kLXFhLXNlbGVjdGlvbi9RQS9jb21wb25lbnRzL1NvY2lhbExpbmtzLnZ1ZSJ9