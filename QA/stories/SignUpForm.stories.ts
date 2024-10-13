import type { Meta, StoryFn } from '@storybook/vue3';
import SignUpForm from '~/components/Templates/SignUpForm.vue';
import { useAuthStore } from '~/stores/AuthStore';

export default {
  title: 'Components/Templates/SignUpForm',
  component: SignUpForm,
} as Meta<typeof SignUpForm>;

const Template: StoryFn<typeof SignUpForm> = () => ({
  components: { SignUpForm },
  setup() {
    const authStore = useAuthStore();

    const resetForm = () => {
      authStore.Name = '';
      authStore.Surname = '';
      authStore.Email = '';
      authStore.Password = '';
      authStore.ConfirmPassword = '';
      authStore.errors = {
        Name: '',
        Surname: '',
        Email: '',
        Password: '',
        ConfirmPassword: '',
        OldPassword: ''
      };

    };

    const handleClick = () => {
      if (authStore.validate()) {
        authStore.confirmEmailPage();
      }
    };

    return { authStore, resetForm, handleClick };
  },
  template: '<SignUpForm />',
});

// Default Story: Empty form
export const Default = Template.bind({});
Default.play = () => {
  const authStore = useAuthStore();
  authStore.Name = '';
  authStore.Surname = '';
  authStore.Email = '';
  authStore.Password = '';
  authStore.ConfirmPassword = '';
  authStore.errors = {
    Name: '',
    Surname: '',
    Email: '',
    Password: '',
    ConfirmPassword: '',
    OldPassword: ''
  };
};

// Filled Story: Pre-filled valid input
export const Filled = Template.bind({});
Filled.play = () => {
  const authStore = useAuthStore();
  authStore.Name = 'John';
  authStore.Surname = 'Doe';
  authStore.Email = 'john.doe@example.com';
  authStore.Password = 'Password123';
  authStore.ConfirmPassword = 'Password123';
  authStore.errors = {
    Name: '',
    Surname: '',
    Email: '',
    Password: '',
    ConfirmPassword: '',
    OldPassword: ''
  };
};

// Invalid Email Story: Pre-filled invalid email, with error
export const InvalidEmail = Template.bind({});
InvalidEmail.play = () => {
  const authStore = useAuthStore();
  authStore.Name = 'John';
  authStore.Surname = 'Doe';
  authStore.Email = 'invalid-email';
  authStore.Password = 'Password123';
  authStore.ConfirmPassword = 'Password123';
  authStore.errors = {
    Name: '',
    Surname: '',
    Email: 'Invalid email',
    Password: '',
    ConfirmPassword: '',
    OldPassword: ''
  };
  authStore.touched.Email = true;
};

// Password Mismatch Story: Pre-filled valid inputs with mismatched passwords
export const PasswordMismatch = Template.bind({});
PasswordMismatch.play = () => {
  const authStore = useAuthStore();
  authStore.Name = 'John';
  authStore.Surname = 'Doe';
  authStore.Email = 'john.doe@example.com';
  authStore.Password = 'Password123';
  authStore.ConfirmPassword = 'Password321'; 
  authStore.errors = {
    Name: '',
    Surname: '',
    Email: '',
    Password: '',
    ConfirmPassword: 'Passwords do not match',
    OldPassword: ''
  };
  authStore.touched.ConfirmPassword = true;
};
