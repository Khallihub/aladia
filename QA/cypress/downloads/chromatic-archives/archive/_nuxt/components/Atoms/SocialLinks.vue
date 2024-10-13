import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/Atoms/SocialLinks.vue");/* Injection by vite-plugin-vue-inspector Start */
import { createElementVNode as __createElementVNode,createElementBlock as __createElementBlock } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=5d575ae9"
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
    default: () => { },
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
import { resolveDynamicComponent as _resolveDynamicComponent, openBlock as _openBlock, createBlock as _createBlock, toDisplayString as _toDisplayString, createTextVNode as _createTextVNode,   } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=5d575ae9"

const _hoisted_1 = {
  class: "bg-black rounded-md",
  "data-v-inspector": "components/Atoms/SocialLinks.vue:2:3"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("button", {
      onClick: _cache[0] || (_cache[0] = (...args) => ($props.onClick && $props.onClick(...args))),
      class: "w-full px-4 py-3 border border-gray-700 rounded-md text-white bg-black shadow-[0px_3px_6px_#00000000] transition-all hover:bg-white/20 hover:shadow-[0px_3px_6px_#000000] active:scale-95 focus:ring-offset-2 focus:ring-offset-gray-800 flex gap-3 justify-center items-center",
      "data-v-inspector": "components/Atoms/SocialLinks.vue:3:5"
    }, [
      (_openBlock(), _createBlock(_resolveDynamicComponent($props.svg), { class: "w-5 h-5 mr-2" })),
      _createTextVNode(" " + _toDisplayString($props.text), 1 /* TEXT */)
    ])
  ]))
}


_sfc_main.__hmrId = "e1604991"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/khalid/frontend-qa-selection/QA/components/Atoms/SocialLinks.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWFBLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BYVo7Ozs7Ozs7Ozs7O0VBekJLLEtBQUssRUFBQyxxQkFBcUI7RUFBQyxrQkFBZ0IsRUFBQzs7Ozt3QkFBbEQsb0JBT00sT0FQTixVQU9NO0lBTkosb0JBS1M7TUFMQSxPQUFLLDBDQUFFLHlDQUFPO01BQUUsS0FBSyxFQUFDLGlSQUV5RDtNQUFDLGtCQUFnQixFQUFDOztxQkFDeEcsYUFBNEMsd0JBTGxELENBS3NCLFVBQUcsS0FBRSxLQUFLLEVBQUMsY0FBYztNQUwvQyxpQkFLa0QsR0FDNUMsb0JBQUcsV0FBSSIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiU29jaWFsTGlua3MudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImJnLWJsYWNrIHJvdW5kZWQtbWRcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9BdG9tcy9Tb2NpYWxMaW5rcy52dWU6MjozXCI+XG4gICAgPGJ1dHRvbiBAY2xpY2s9XCJvbkNsaWNrXCIgY2xhc3M9XCJ3LWZ1bGwgcHgtNCBweS0zIGJvcmRlciBib3JkZXItZ3JheS03MDAgcm91bmRlZC1tZCB0ZXh0LXdoaXRlIGJnLWJsYWNrXG4gICAgc2hhZG93LVswcHhfM3B4XzZweF8jMDAwMDAwMDBdIHRyYW5zaXRpb24tYWxsIGhvdmVyOmJnLXdoaXRlLzIwIGhvdmVyOnNoYWRvdy1bMHB4XzNweF82cHhfIzAwMDAwMF0gYWN0aXZlOnNjYWxlLTk1XG4gICAgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLW9mZnNldC1ncmF5LTgwMCBmbGV4IGdhcC0zIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciAgXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvQXRvbXMvU29jaWFsTGlua3MudnVlOjM6NVwiPlxuICAgICAgPGNvbXBvbmVudCA6aXM9XCJzdmdcIiBjbGFzcz1cInctNSBoLTUgbXItMlwiIC8+XG4gICAgICB7eyB0ZXh0IH19XG4gICAgPC9idXR0b24+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cD5cblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gIHN2Zzoge1xuICAgIHR5cGU6IE9iamVjdCxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgfSxcbiAgdGV4dDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgfSxcbiAgb25DbGljazoge1xuICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgIGRlZmF1bHQ6ICgpID0+IHsgfSxcbiAgfSxcbn0pO1xuPC9zY3JpcHQ+Il0sImZpbGUiOiIvaG9tZS9raGFsaWQvZnJvbnRlbmQtcWEtc2VsZWN0aW9uL1FBL2NvbXBvbmVudHMvQXRvbXMvU29jaWFsTGlua3MudnVlIn0=