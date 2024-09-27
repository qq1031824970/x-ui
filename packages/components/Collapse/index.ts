import Collapse from "./Collapse.vue";
import CollapseItem from "./CollapseItem.vue";
import { withInstall } from '@x-anything/utils'

export const XCollapse = withInstall(Collapse)
export const XCollapseItem = withInstall(CollapseItem)

export * from './types'