import { isString } from "lodash-es";

class XUIError extends Error {
  constructor(msg: string) {
    super(msg);
    this.name = "XUIError";
  }
}
function createXUIError(scope: string, msg: string) {
  return new XUIError(`[${scope}]:${msg}`);
}

export function throwError(scope: string, msg: string) {
  throw createXUIError(scope, msg);
}

export function debugWarn(error: Error): void;
export function debugWarn(scope: string, msg: string): void;
export function debugWarn(scope: string | Error, msg?: string) {
  if (process.env.NODE_ENV !== "production") {
    const err = isString(scope) ? createXUIError(scope, msg!) : scope;
    console.warn(err);
  }
}