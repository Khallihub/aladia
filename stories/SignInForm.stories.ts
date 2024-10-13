import type { Meta, StoryFn } from '@storybook/vue3';
import SignInForm from '~/components/Templates/SignInForm.vue';
import { useAuthStore } from '~/stores/AuthStore';

export default {
  title: 'Components/Templates/SignInForm',
  component: SignInForm,
} as Meta<typeof SignInForm>;

const Template: StoryFn<typeof SignInForm> = () => ({
  components: { SignInForm },
  setup() {
    const authStore = useAuthStore();
    authStore.existingUser = false;
    authStore.incorrectPassword = false;
    authStore.users = new Map();

    const handleSocialClick = (id: number) => {
      console.log('Social login clicked:', id);
    };

    const updateEmail = (value: string) => {
      authStore.Email = value;
      authStore.errors.Email = '';
    };

    const handleSubmit = () => {
      if (!authStore.Email || authStore.errors.Email) {
        authStore.errors.Email = authStore.Email ? 'Invalid email format' : 'Email is required';
      } else {
        console.log('Email Submitted:', authStore.Email);
      }
    };

    return { authStore, handleSocialClick, updateEmail, handleSubmit };
  },
  template: '<SignInForm />',
});

// Default Story: Empty email input
export const Default = Template.bind({});
Default.play = () => {
  const authStore = useAuthStore();
  authStore.Email = ''; // Empty email
  authStore.errors.Email = ''; // No error
};

// Filled Story: Pre-filled valid email input
export const Filled = Template.bind({});
Filled.play = () => {
  const authStore = useAuthStore();
  authStore.Email = 'test@example.com'; // Valid email
  authStore.errors.Email = ''; // No error
};

// Invalid Email Story: Pre-filled invalid email, with error
export const InvalidEmail = Template.bind({});
InvalidEmail.play = () => {
  const authStore = useAuthStore();
  authStore.Email = 'test.com'; // Invalid email
  authStore.errors.Email = 'Invalid email'; // Error message for invalid email
};

// login Story: Existing user, with correct password
export const Login = Template.bind({});
Login.play = () => {
  const authStore = useAuthStore();
  authStore.Email = 'khalid@gmail.com'
  authStore.existingUser = true;
  authStore.incorrectPassword = false;
  authStore.users.set('khalid@gmail.com', '123456');
  authStore.OldPassword = '123456';
  console.log(authStore)
}

// login Story: Existing user, with incorrect password
export const WrongLogin = Template.bind({});
WrongLogin.play = () => {
  const authStore = useAuthStore();
  authStore.Email = 'abdu@gmail.com'
  authStore.existingUser = true;
  authStore.incorrectPassword = true;
  authStore.users.set('abdu@gmail.com', '654321');
  authStore.OldPassword = '123456';
}
