import type { Meta, StoryObj } from "@storybook/vue3";
import { XCollapse, XCollapseItem } from "x-anything";
import "x-anything/dist/theme/Collapse.css"

type Story = StoryObj<typeof XCollapse>;

const meta: Meta<typeof XCollapse> = {
  title: "Example/Collapse",
  component: XCollapse,
  subcomponents: { XCollapseItem },
  tags: ["autodocs"],
};

export const Default: Story = {
  render: (args) => ({
    components: {
      XCollapse,
      XCollapseItem,
    },
    setup() {
      return {
        args,
      };
    },
    template: `
    <x-collapse v-bind="args">
      <x-collapse-item name="a" title="Title a">
        <div>this is content a</div>
      </x-collapse-item>
      <x-collapse-item name="b" title="title b">
        <div>this is content b</div>
      </x-collapse-item>
      <x-collapse-item name="c" title="title c  disable" disabled>
        <div>this is content c</div>
      </x-collapse-item>
    </x-collapse>
    `,
  }),
  args: {
    accordion: true,
    modelValue: ["a"],
  },
};

export default meta;