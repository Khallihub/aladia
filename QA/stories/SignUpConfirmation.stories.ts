import type { Meta, StoryFn } from '@storybook/vue3';
import SignUpConfirmation from '~/components/SignUpConfirmation.vue';
import { ref } from 'vue';
import { useAuthStore } from '~/stores/AuthStore';

export default {
  title: 'Components/SignUpConfirmation',
  component: SignUpConfirmation,
} as Meta<typeof SignUpConfirmation>;

const Template: StoryFn<typeof SignUpConfirmation> = () => ({
  components: { SignUpConfirmation },
  setup() {
    const authStore = useAuthStore();
    
    // Mock initial state for name and surname
    authStore.Name = 'John';
    authStore.Surname = 'Doe';

    // Local state for confirmation code
    const confirmationCode = ref(['', '', '', '', '', '']);

    const validateConfirmationCode = () => {
      // Simulate code validation logic
    };

    const handleClick = () => {
      if (confirmationCode.value.join('').length === 6) {
        console.log('Confirmation Code Submitted: ', confirmationCode.value.join(''));
      } else {
        console.log('Please complete the confirmation code.');
      }
    };

    return { authStore, confirmationCode, validateConfirmationCode, handleClick };
  },
  template: '<SignUpConfirmation />',
});

// Default Story
export const Default = Template.bind({});
