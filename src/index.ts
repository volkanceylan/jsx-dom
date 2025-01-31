export { createRef, isRef } from "./ref"
export { useClassList, useText } from "./hooks"
export { memo, StrictMode, useCallback, useMemo, useRef } from "./react-compat-api"

import { Component, Fragment, createElement } from "./jsx-dom"
import { ShadowRoot } from "./shadow"

export { styled } from "./styled"
export { ShadowRoot } from "./shadow"

export {
  className,
  Component,
  Component as PureComponent,
  createElement as h,
  createElement,
  createFactory,
  Fragment,
  jsx as jsxs,
  jsx,
  SVGNamespace,
} from "./jsx-dom"

export default {
  Component,
  PureComponent: Component,
  createElement,
  Fragment,
  ShadowRoot,
}

export function preventDefault(event: Event) {
  event.preventDefault()
  return event
}

export function stopPropagation(event: Event) {
  event.stopPropagation()
  return event
}
