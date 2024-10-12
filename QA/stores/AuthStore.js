import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const loading = ref(false);
  const page = ref(0);
  const Name = ref('');
  const Surname = ref('');
  const Email = ref('');
  const Password = ref('');
  const ConfirmPassword = ref('');
  const confirmEmail = ref(false);
  const confirmationCode = ref(["", "", "", "", "", ""]);
  const errors = ref({
    Name: '',
    Surname: '',
    Email: '',
    Password:  '',
    ConfirmPassword: ''
  });
  const touched = ref({
    Name: false,
    Surname: false,
    Email: false,
    Password: false,
    ConfirmPassword: false
  })

  const toggleLoading = () => {
    loading.value = !loading.value;
  };

  const changePage = () => {
    page.value = page.value === 0 ? 1 : 0;
  };

  const confirmEmailPage = () => {
    confirmEmail.value = true;
  };

  const validate = () => {
    errors.value = {
      Name: Name.value ? null : 'Name is required',
      Surname: Surname.value ? null : 'Surname is required',
      Email: validateEmail(), 
      Password: Password.value.length >= 6 ? null : 'Password must be at least 6 characters',
      ConfirmPassword: Password.value === ConfirmPassword.value ? null : 'Passwords do not match',
    };
    return !Object.values(errors.value).some(error => error);
  };

  const validateEmail = () => {
    const isValid = Email.value.match(/^[^@]+@[^@]+\.[^@]+/);
    if (isValid) {
      return null; // No error
    } else {
      return 'Invalid email'; // Error message
    }
  };

  return {
    loading,
    page,
    Name,
    Surname,
    Email,
    Password,
    ConfirmPassword,
    confirmEmail,
    errors,
    toggleLoading,
    changePage,
    confirmEmailPage,
    validate,
    validateEmail,
    confirmationCode,
    touched
  };
});
