import type { Meta, StoryFn } from '@storybook/vue3';
import SignInForm from '~/components/SignInForm.vue';
import { useAuthStore } from '~/stores/AuthStore';

export default {
  title: 'Components/SignInForm',
  component: SignInForm,
} as Meta<typeof SignInForm>;

const Template: StoryFn<typeof SignInForm> = () => ({
  components: { SignInForm },
  setup() {
    const authStore = useAuthStore();

    authStore.Email = 'test@example.com';
    authStore.errors = {
      Name: "",
      Surname: "",
      Email: "",
      ConfirmPassword: "",
      Password: "",
    };

    const handleSocialClick = (id: number) => {
      console.log('Social login clicked:', id);
    };

    const updateEmail = (value: string) => {
      authStore.Email = value;
      authStore.errors.Email = '';
    };

    const handleSubmit = () => {
      if (!authStore.Email) {
        authStore.errors.Email = 'Email is required';
      } else {
        console.log('Email Submitted:', authStore.Email);
      }
    };

    return { authStore, handleSocialClick, updateEmail, handleSubmit };
  },
  template: '<SignInForm />',
});

// Default Story
export const Default = Template.bind({});
