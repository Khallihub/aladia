import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

interface UserErrors {
  Name: string | null;
  Surname: string | null;
  Email: string | null;
  Password: string | null;
  ConfirmPassword: string | null;
  OldPassword: string | null;
}

interface TouchedFields {
  Name: boolean;
  Surname: boolean;
  Email: boolean;
  Password: boolean;
  ConfirmPassword: boolean;
}

export const useAuthStore = defineStore('auth', () => {
  const loading = ref<boolean>(false);
  const page = ref<number>(0);
  const Name = ref<string>('');
  const Surname = ref<string>('');
  const Email = ref<string>('');
  const Password = ref<string>('');
  const OldPassword = ref<string>('');
  const ConfirmPassword = ref<string>('');
  const confirmEmail = ref<boolean>(false);
  const confirmationCode = ref<string[]>(["", "", "", "", "", ""]);
  const existingUser = ref<boolean>(false);
  const incorrectPassword = ref<boolean>(false);
  
  const errors = ref<UserErrors>({
    Name: null,
    Surname: null,
    Email: null,
    Password: null,
    ConfirmPassword: null,
    OldPassword: null
  });

  const touched = ref<TouchedFields>({
    Name: false,
    Surname: false,
    Email: false,
    Password: false,
    ConfirmPassword: false
  });

  const users = ref<Map<string, string>>(new Map());

  const toggleLoading = () => {
    loading.value = !loading.value;
  };

  const changePage = () => {
    page.value = page.value === 0 ? 1 : 0;
  };

  const confirmEmailPage = () => {
    confirmEmail.value = true;
  };

  const validate = (): boolean => {
    errors.value = {
      Name: Name.value ? null : 'Name is required',
      Surname: Surname.value ? null : 'Surname is required',
      Email: validateEmail(),
      Password: Password.value.length >= 6 ? null : 'Password must be at least 6 characters',
      ConfirmPassword: Password.value === ConfirmPassword.value ? null : 'Passwords do not match',
      OldPassword: null
    };
    return !Object.values(errors.value).some(error => error !== null);
  };

  const validateEmail = (): string | null => {
    const isValid = /^[^@]+@[^@]+\.[^@]+/.test(Email.value);
    return isValid ? null : 'Invalid email';
  };

  const checkPassword = (): boolean => {
    return users.value.get(Email.value) === OldPassword.value;
  };

  return {
    loading,
    page,
    Name,
    Surname,
    Email,
    Password,
    OldPassword,
    ConfirmPassword,
    confirmEmail,
    errors,
    toggleLoading,
    changePage,
    confirmEmailPage,
    validate,
    validateEmail,
    checkPassword,
    confirmationCode,
    touched,
    users,
    existingUser,
    incorrectPassword
  };
});
