import Button from "./Button.vue";
import ButtonGroup from "./ButtonGroup.vue";
import { withInstall } from '@x-anything/utils'

export const XButtonGroup = withInstall(ButtonGroup);
export const XButton = withInstall(Button)

export * from "./types";