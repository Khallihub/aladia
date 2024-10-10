import WelcomeCard from '../components/WelcomeCard.vue';
import type { Meta, StoryFn } from '@storybook/vue3'; // Import types from Storybook
 // Import types from Storybook

export default {
  title: 'Components/WelcomeCard', // Storybook category and name
  component: WelcomeCard,
  argTypes: {
    // You can add controls here if needed
  },
} as Meta<typeof WelcomeCard>;

// Template for the component story
const Template: StoryFn<typeof WelcomeCard> = (args) => ({
  components: { WelcomeCard },
  setup() {
    return { args }; // Here 'args' is properly defined and returned from setup
  },
  template: '<WelcomeCard v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
