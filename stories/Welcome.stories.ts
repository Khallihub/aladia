import Welcome from '../components/Templates/Welcome.vue';
import type { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Components/Templates/Welcome', 
  component: Welcome,
  argTypes: {
  },
} as Meta<typeof Welcome>;

const Template: StoryFn<typeof Welcome> = (args) => ({
  components: { Welcome },
  setup() {
    return { args };
  },
  template: '<Welcome v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
