import { describe, expect, it } from 'vitest'
import {
  debugWarn,
  throwError,
  withInstall,
  makeInstaller,
  typeIconMap
} from '../'
import { each } from "lodash-es";

describe('utils/index', () => {
  it('debugWarn should expported', () => {
    expect(debugWarn).toBeDefined()
  })
  it('throwError should expported', () => {
    expect(throwError).toBeDefined()
  })
  it('withInstall should expported', () => {
    expect(withInstall).toBeDefined()
  })
  it('makeInstaller should expported', () => {
    expect(makeInstaller).toBeDefined()
  })
  it("typeIconMap should be worked", () => {
    expect(typeIconMap).toBeDefined();
    each(
      [
        ["info", "circle-info"],
        ["success", "check-circle"],
        ["warning", "circle-exclamation"],
        ["danger", "circle-xmark"],
        ["error", "circle-xmark"],
      ],
      ([type, icon]) => {
        expect(typeIconMap.get(type)).toBe(icon);
      }
    );
  });
})