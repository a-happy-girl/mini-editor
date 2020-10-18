import { createPlugin } from '../../core/createPlugin'
import { pluginOptions } from '../../types/index'

export default function (): HTMLElement {
  // this.options = pluginOption
  let pluginOption: pluginOptions = {
    name: 'color',
    openType: 'click',
    callback: function () {
      console.log('设置颜色')
    }
  }
  let plugin = createPlugin(pluginOption)
  let iconfontDom = plugin.getElementsByTagName('i')[0]
  iconfontDom.classList.add('icon-ColorLens')
  return plugin
}
