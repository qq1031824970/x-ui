import type { StoryObj, Meta, ArgTypes } from "@storybook/vue3";
import { ref, watch } from "vue";
import { fn } from "@storybook/test";
import { XAlert, type AlertInstance } from "x-anything";
import "x-anything/dist/theme/Alert.css";

type Story = StoryObj<typeof XAlert> & { argTypes?: ArgTypes };

const meta: Meta<typeof XAlert> = {
  title: "Example/Alert",
  component: XAlert,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["success", "warning", "info", "danger"],
    },
    effect: {
      control: "select",
      options: ["light", "dark"],
    },
    center: {
      control: "boolean",
    },
  },
  args: {
    onClose: fn(),
  },
};

export const Default: Story & { args: { visible: boolean } } = {
  args: {
    title: "标题",
    description: "这是一段描述",
    type: "success",
    effect: "light",
    closable: true,
    showIcon: true,
    visible: true,
  },
  render: (args) => ({
    components: { XAlert },
    setup() {
      const alertRef = ref<AlertInstance>();
      watch(
        () => (args as any).visible,
        (val: boolean) => {
          if (val) {
            alertRef.value?.open();
          } else {
            alertRef.value?.close();
          }
        }
      );
      return { args, alertRef };
    },
    template: `
     <x-alert ref="alertRef" v-bind="args"></x-alert>
    `,
  }),
};

export default meta;