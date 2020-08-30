import { ExcelComponent } from "@core/ExcelComponent";
import { createTable } from "./table.template";
import { resizeHandler } from "./table.resize";
import { shouldResize } from "./table.function";

export class Table extends ExcelComponent{
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click', 'mousedown', 'mousemove', 'mouseup']
    })
  }
  toHTML() {
      return createTable()
  }
  
  onClick(event) {
  
  }

 
  onMousedown(event) {
    if (shouldResize(event)) {
   resizeHandler(this.$root, event)
    }
  }
  onMousemove(event) {
  }

  onMouseup(event) {
  }
}
