import { describe, it, expect } from 'vitest'

import * as Components from './index'

describe('Index.ts coverage', () => {
  it('should import all components', () => {
    expect(Components).toBeDefined()
  })
})
