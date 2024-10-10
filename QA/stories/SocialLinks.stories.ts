import type { StoryFn, Meta } from '@storybook/vue3';
import SocialLinks from '../components/SocialLinks.vue';
import { action } from '@storybook/addon-actions';

// Example icon (replace this with your actual SVG component)
const GoogleIcon = {
  template: `<svg class="w-5 h-5" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10c5.514 0 10-4.486 10-10S17.514 2 12 2z" fill="#4285F4"/><path d="M12 4c1.065 0 2.09.275 2.99.765l-1.35 1.35c-.513-.244-1.08-.365-1.64-.365-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5c1.74 0 3.3-1.015 4-2.5h-2.5v-2h5.5v5.5h-2V14c-.884 1.84-2.764 3-4.5 3-3.035 0-5.5-2.465-5.5-5.5S8.965 4 12 4z" fill="#34A853"/></svg>`
};

// Define the props types
interface SocialLinksProps {
  svg: any; // You can replace `any` with a more specific type if your SVG components are typed
  text: string;
  onClick: () => void;
}

export default {
  title: 'Components/SocialLinks',
  component: SocialLinks,
  argTypes: {
    svg: {
      control: 'object',
      description: 'The SVG icon component',
    },
    text: {
      control: 'text',
      description: 'The button text',
    },
    onClick: { action: 'clicked' },
  },
} as Meta<typeof SocialLinks>;

// Template for the component
const Template: StoryFn<SocialLinksProps> = (args) => ({
  components: { SocialLinks },
  setup() {
    return { args };
  },
  template: '<SocialLinks v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  svg: GoogleIcon,
  text: 'Continue with Google',
  onClick: action('button-click'),
};
