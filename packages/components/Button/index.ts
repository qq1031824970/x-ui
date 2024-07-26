import Button from "./Button.vue";
import ButtonGroup from "./ButtonGroup.vue";
import { withInstall } from '@o-ui/utils'

export const XButtonGroup = withInstall(ButtonGroup);
export const XButton = withInstall(Button)

export * from "./types";