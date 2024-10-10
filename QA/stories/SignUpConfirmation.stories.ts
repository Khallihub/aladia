import type { Meta, StoryFn } from '@storybook/vue3';
import SignUpConfirmation from '../components/SignUpConfirmation.vue'; 

export default {
  title: 'Components/SignUpConfirmation',
  component: SignUpConfirmation,
  argTypes: {
    handleClick: { action: 'clicked' },
  },
} as Meta<typeof SignUpConfirmation>;

const Template: StoryFn<typeof SignUpConfirmation> = (args) => ({
  components: { SignUpConfirmation },
  setup() {
    return { args };
  },
  template: `<SignUpConfirmation v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {};

export const WithCustomMessage = Template.bind({});
WithCustomMessage.args = {
};
