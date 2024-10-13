import WelcomeCard from '../components/Atoms/WelcomeCard.vue';
import type { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Components/Atoms/WelcomeCard', 
  component: WelcomeCard,
  argTypes: {
  },
} as Meta<typeof WelcomeCard>;

const Template: StoryFn<typeof WelcomeCard> = (args) => ({
  components: { WelcomeCard },
  setup() {
    return { args };
  },
  template: '<WelcomeCard v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
