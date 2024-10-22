import type { Plugin } from 'vue'
import { describe, it, expect } from 'vitest'
import {
  XAlert,
  XButton,
  XButtonGroup,
  XCollapse,
  XCollapseItem,
  XIcon,
  XTooltip,
} from '..'
import { get, map } from 'lodash-es'

const comps = [
  XAlert,
  XButton,
  XButtonGroup,
  XCollapse,
  XCollapseItem,
  XIcon,
  XTooltip,
] as Plugin[]

describe('components/index', () => {
  it.each(map(comps, (c) => [get(c, 'name') ?? '', c]))(
    '%s should be exported',
    (_, component) => {
      expect(component).toBeDefined()
      expect(component.install).toBeDefined()
    }
  )
})
