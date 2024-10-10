import type { Meta, StoryFn } from '@storybook/vue3';
import SubmitButton from '../components/SubmitButton.vue'; // Adjust path according to your project

export default {
  title: 'Components/SubmitButton',
  component: SubmitButton,
  argTypes: {
    handleClick: { action: 'clicked' },
    default: { control: 'text', description: 'Slot content for the button text' }
  },
} as Meta<typeof SubmitButton>;

const Template: StoryFn<typeof SubmitButton> = (args) => ({
  components: { SubmitButton },
  setup() {
    return { args };
  },
  template: '<SubmitButton v-bind="args">{{ args.default }}</SubmitButton>',
});

export const Default = Template.bind({});
Default.args = {
  default: 'Enter',
  handleClick: () => { console.log('Button clicked'); }
};

export const CustomText = Template.bind({});
CustomText.args = {
  default: 'Submit',
  handleClick: () => { console.log('Submit clicked'); }
};
