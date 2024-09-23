export interface Option {
  label: string, value: string, description?: string
}

export interface SelectProps {
  options: Option[]
  modelValue: Option
}

export interface SelectEmits {
  (e: "update:modelValue", val: Option | {}): void;
}
