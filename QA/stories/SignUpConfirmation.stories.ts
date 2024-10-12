import type { Meta, StoryFn } from '@storybook/vue3';
import SignUpConfirmation from '~/components/Templates/SignUpConfirmation.vue';
import { useAuthStore } from '~/stores/AuthStore';

export default {
  title: 'Components/Templates/SignUpConfirmation',
  component: SignUpConfirmation,
} as Meta<typeof SignUpConfirmation>;

const Template: StoryFn<typeof SignUpConfirmation> = () => ({
  components: { SignUpConfirmation },
  setup() {
    const authStore = useAuthStore();
    
    authStore.Name = 'John';
    authStore.Surname = 'Doe';
    authStore.confirmationCode = ['', '', '', '', '', '']

    const validateConfirmationCode = () => {
    };

    const handleClick = () => {
      console.log('Submit clicked');
    };

    return { authStore, validateConfirmationCode, handleClick };
  },
  template: '<SignUpConfirmation />',
});

export const EmptyConfirmationCode = Template.bind({});
EmptyConfirmationCode.play = () => {
  const authStore = useAuthStore();
  authStore.Name = 'John';
  authStore.Surname = 'Doe';
  authStore.confirmationCode = ['', '', '', '', '', '']
};

export const FilledConfirmationCode = Template.bind({});
FilledConfirmationCode.play = () => {
  const authStore = useAuthStore();
  authStore.Name = 'John';
  authStore.Surname = 'Doe';
  authStore.confirmationCode = ['1', '2', '3', '4', '5', '6'];
};
