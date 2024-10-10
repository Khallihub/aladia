import type { Meta, StoryFn } from '@storybook/vue3';
import SignInForm from '../components/SignInForm.vue'; 

export default {
  title: 'Components/SignInForm',
  component: SignInForm,
  argTypes: {
    handleSubmit: { action: 'submitted' },
    handleSocialClick: { action: 'socialClicked' },
  },
} as Meta<typeof SignInForm>;

const Template: StoryFn<typeof SignInForm> = (args) => ({
  components: { SignInForm },
  setup() {
    return { args };
  },
  template: `<SignInForm v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {};

export const WithPrefilledEmail = Template.bind({});
WithPrefilledEmail.args = {
};
