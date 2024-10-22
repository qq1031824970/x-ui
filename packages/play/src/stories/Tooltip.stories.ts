import type { StoryObj, Meta } from "@storybook/vue3";

import { fn } from "@storybook/test";
import { XTooltip } from "x-anything";
import 'x-anything/dist/theme/Tooltip.css'

type Story = StoryObj<typeof XTooltip>;

const meta: Meta<typeof XTooltip> = {
  title: "Example/Tooltip",
  component: XTooltip,
  tags: ["autodocs"],
  argTypes: {
    trigger: {
      options: ["hover", "click", "contextmenu"],
      control: {
        type: "select",
      },
    },
    placement: {
      options: ["top", "bottom", "left", "right"],
      control: {
        type: "select",
      },
    },
  },
  args: {
    "onVisible-change": fn(),
  },
};

export const Default: Story = {
  args: {
    content: "This is a tooltip",
    placement: "top",
    trigger: "hover",
  },
  render: (args) => ({
    components: { XTooltip },
    setup() {
      return {
        args,
      };
    },
    template: `
      <XTooltip v-bind="args">
          <div style="height:30px;width:200px;background:red;padding:auto">trigger</div>
      </XTooltip>
    `,
  }),
};

export default meta;