import { createPlugin } from '../../core/createPlugin'
import { pluginOptions } from '../../types/index'
import { hasClass } from '../../utils/common'

export default function (): HTMLElement {
  let pluginOption: pluginOptions = {
    name: 'color',
    openType: 'click',
    callback: function (pluginDom) {
      console.log('设置标题')
      if (hasClass(pluginDom, 'm-n-toolbar-active')) {
        pluginDom.classList.remove('m-n-toolbar-active')
      } else {
        pluginDom.classList.add('m-n-toolbar-active')
      }
    }
  }
  let plugin = createPlugin(pluginOption)
  let iconfontDom = plugin.getElementsByClassName('m-n-icon')[0]
  iconfontDom.classList.add('icon-header')
  return plugin
}
