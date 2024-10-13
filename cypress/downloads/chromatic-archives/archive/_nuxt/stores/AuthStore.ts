import { defineStore } from "/_nuxt/node_modules/.cache/vite/client/deps/pinia.js?v=0984fb0a";
import { ref } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=0984fb0a";
export const useAuthStore = defineStore("auth", () => {
  const loading = ref(false);
  const page = ref(0);
  const Name = ref("");
  const Surname = ref("");
  const Email = ref("");
  const Password = ref("");
  const OldPassword = ref("");
  const ConfirmPassword = ref("");
  const confirmEmail = ref(false);
  const confirmationCode = ref(["", "", "", "", "", ""]);
  const existingUser = ref(false);
  const incorrectPassword = ref(false);
  const errors = ref({
    Name: null,
    Surname: null,
    Email: null,
    Password: null,
    ConfirmPassword: null,
    OldPassword: null
  });
  const touched = ref({
    Name: false,
    Surname: false,
    Email: false,
    Password: false,
    ConfirmPassword: false
  });
  const users = ref(/* @__PURE__ */ new Map());
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
      Name: Name.value ? null : "Name is required",
      Surname: Surname.value ? null : "Surname is required",
      Email: validateEmail(),
      Password: Password.value.length >= 6 ? null : "Password must be at least 6 characters",
      ConfirmPassword: Password.value === ConfirmPassword.value ? null : "Passwords do not match",
      OldPassword: null
    };
    return !Object.values(errors.value).some((error) => error !== null);
  };
  const validateEmail = () => {
    const isValid = /^[^@]+@[^@]+\.[^@]+/.test(Email.value);
    return isValid ? null : "Invalid email";
  };
  const checkPassword = () => {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkF1dGhTdG9yZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWZpbmVTdG9yZSB9IGZyb20gJ3BpbmlhJztcbmltcG9ydCB7IHJlZiwgY29tcHV0ZWQgfSBmcm9tICd2dWUnO1xuXG5pbnRlcmZhY2UgVXNlckVycm9ycyB7XG4gIE5hbWU6IHN0cmluZyB8IG51bGw7XG4gIFN1cm5hbWU6IHN0cmluZyB8IG51bGw7XG4gIEVtYWlsOiBzdHJpbmcgfCBudWxsO1xuICBQYXNzd29yZDogc3RyaW5nIHwgbnVsbDtcbiAgQ29uZmlybVBhc3N3b3JkOiBzdHJpbmcgfCBudWxsO1xuICBPbGRQYXNzd29yZDogc3RyaW5nIHwgbnVsbDtcbn1cblxuaW50ZXJmYWNlIFRvdWNoZWRGaWVsZHMge1xuICBOYW1lOiBib29sZWFuO1xuICBTdXJuYW1lOiBib29sZWFuO1xuICBFbWFpbDogYm9vbGVhbjtcbiAgUGFzc3dvcmQ6IGJvb2xlYW47XG4gIENvbmZpcm1QYXNzd29yZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IHVzZUF1dGhTdG9yZSA9IGRlZmluZVN0b3JlKCdhdXRoJywgKCkgPT4ge1xuICBjb25zdCBsb2FkaW5nID0gcmVmPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgcGFnZSA9IHJlZjxudW1iZXI+KDApO1xuICBjb25zdCBOYW1lID0gcmVmPHN0cmluZz4oJycpO1xuICBjb25zdCBTdXJuYW1lID0gcmVmPHN0cmluZz4oJycpO1xuICBjb25zdCBFbWFpbCA9IHJlZjxzdHJpbmc+KCcnKTtcbiAgY29uc3QgUGFzc3dvcmQgPSByZWY8c3RyaW5nPignJyk7XG4gIGNvbnN0IE9sZFBhc3N3b3JkID0gcmVmPHN0cmluZz4oJycpO1xuICBjb25zdCBDb25maXJtUGFzc3dvcmQgPSByZWY8c3RyaW5nPignJyk7XG4gIGNvbnN0IGNvbmZpcm1FbWFpbCA9IHJlZjxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IGNvbmZpcm1hdGlvbkNvZGUgPSByZWY8c3RyaW5nW10+KFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiXSk7XG4gIGNvbnN0IGV4aXN0aW5nVXNlciA9IHJlZjxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IGluY29ycmVjdFBhc3N3b3JkID0gcmVmPGJvb2xlYW4+KGZhbHNlKTtcbiAgXG4gIGNvbnN0IGVycm9ycyA9IHJlZjxVc2VyRXJyb3JzPih7XG4gICAgTmFtZTogbnVsbCxcbiAgICBTdXJuYW1lOiBudWxsLFxuICAgIEVtYWlsOiBudWxsLFxuICAgIFBhc3N3b3JkOiBudWxsLFxuICAgIENvbmZpcm1QYXNzd29yZDogbnVsbCxcbiAgICBPbGRQYXNzd29yZDogbnVsbFxuICB9KTtcblxuICBjb25zdCB0b3VjaGVkID0gcmVmPFRvdWNoZWRGaWVsZHM+KHtcbiAgICBOYW1lOiBmYWxzZSxcbiAgICBTdXJuYW1lOiBmYWxzZSxcbiAgICBFbWFpbDogZmFsc2UsXG4gICAgUGFzc3dvcmQ6IGZhbHNlLFxuICAgIENvbmZpcm1QYXNzd29yZDogZmFsc2VcbiAgfSk7XG5cbiAgY29uc3QgdXNlcnMgPSByZWY8TWFwPHN0cmluZywgc3RyaW5nPj4obmV3IE1hcCgpKTtcblxuICBjb25zdCB0b2dnbGVMb2FkaW5nID0gKCkgPT4ge1xuICAgIGxvYWRpbmcudmFsdWUgPSAhbG9hZGluZy52YWx1ZTtcbiAgfTtcblxuICBjb25zdCBjaGFuZ2VQYWdlID0gKCkgPT4ge1xuICAgIHBhZ2UudmFsdWUgPSBwYWdlLnZhbHVlID09PSAwID8gMSA6IDA7XG4gIH07XG5cbiAgY29uc3QgY29uZmlybUVtYWlsUGFnZSA9ICgpID0+IHtcbiAgICBjb25maXJtRW1haWwudmFsdWUgPSB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IHZhbGlkYXRlID0gKCk6IGJvb2xlYW4gPT4ge1xuICAgIGVycm9ycy52YWx1ZSA9IHtcbiAgICAgIE5hbWU6IE5hbWUudmFsdWUgPyBudWxsIDogJ05hbWUgaXMgcmVxdWlyZWQnLFxuICAgICAgU3VybmFtZTogU3VybmFtZS52YWx1ZSA/IG51bGwgOiAnU3VybmFtZSBpcyByZXF1aXJlZCcsXG4gICAgICBFbWFpbDogdmFsaWRhdGVFbWFpbCgpLFxuICAgICAgUGFzc3dvcmQ6IFBhc3N3b3JkLnZhbHVlLmxlbmd0aCA+PSA2ID8gbnVsbCA6ICdQYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVycycsXG4gICAgICBDb25maXJtUGFzc3dvcmQ6IFBhc3N3b3JkLnZhbHVlID09PSBDb25maXJtUGFzc3dvcmQudmFsdWUgPyBudWxsIDogJ1Bhc3N3b3JkcyBkbyBub3QgbWF0Y2gnLFxuICAgICAgT2xkUGFzc3dvcmQ6IG51bGxcbiAgICB9O1xuICAgIHJldHVybiAhT2JqZWN0LnZhbHVlcyhlcnJvcnMudmFsdWUpLnNvbWUoZXJyb3IgPT4gZXJyb3IgIT09IG51bGwpO1xuICB9O1xuXG4gIGNvbnN0IHZhbGlkYXRlRW1haWwgPSAoKTogc3RyaW5nIHwgbnVsbCA9PiB7XG4gICAgY29uc3QgaXNWYWxpZCA9IC9eW15AXStAW15AXStcXC5bXkBdKy8udGVzdChFbWFpbC52YWx1ZSk7XG4gICAgcmV0dXJuIGlzVmFsaWQgPyBudWxsIDogJ0ludmFsaWQgZW1haWwnO1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrUGFzc3dvcmQgPSAoKTogYm9vbGVhbiA9PiB7XG4gICAgcmV0dXJuIHVzZXJzLnZhbHVlLmdldChFbWFpbC52YWx1ZSkgPT09IE9sZFBhc3N3b3JkLnZhbHVlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbG9hZGluZyxcbiAgICBwYWdlLFxuICAgIE5hbWUsXG4gICAgU3VybmFtZSxcbiAgICBFbWFpbCxcbiAgICBQYXNzd29yZCxcbiAgICBPbGRQYXNzd29yZCxcbiAgICBDb25maXJtUGFzc3dvcmQsXG4gICAgY29uZmlybUVtYWlsLFxuICAgIGVycm9ycyxcbiAgICB0b2dnbGVMb2FkaW5nLFxuICAgIGNoYW5nZVBhZ2UsXG4gICAgY29uZmlybUVtYWlsUGFnZSxcbiAgICB2YWxpZGF0ZSxcbiAgICB2YWxpZGF0ZUVtYWlsLFxuICAgIGNoZWNrUGFzc3dvcmQsXG4gICAgY29uZmlybWF0aW9uQ29kZSxcbiAgICB0b3VjaGVkLFxuICAgIHVzZXJzLFxuICAgIGV4aXN0aW5nVXNlcixcbiAgICBpbmNvcnJlY3RQYXNzd29yZFxuICB9O1xufSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBLFNBQVMsbUJBQW1CO0FBQzVCLFNBQVMsV0FBcUI7QUFtQnZCLGFBQU0sZUFBZSxZQUFZLFFBQVEsTUFBTTtBQUNwRCxRQUFNLFVBQVUsSUFBYSxLQUFLO0FBQ2xDLFFBQU0sT0FBTyxJQUFZLENBQUM7QUFDMUIsUUFBTSxPQUFPLElBQVksRUFBRTtBQUMzQixRQUFNLFVBQVUsSUFBWSxFQUFFO0FBQzlCLFFBQU0sUUFBUSxJQUFZLEVBQUU7QUFDNUIsUUFBTSxXQUFXLElBQVksRUFBRTtBQUMvQixRQUFNLGNBQWMsSUFBWSxFQUFFO0FBQ2xDLFFBQU0sa0JBQWtCLElBQVksRUFBRTtBQUN0QyxRQUFNLGVBQWUsSUFBYSxLQUFLO0FBQ3ZDLFFBQU0sbUJBQW1CLElBQWMsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDO0FBQy9ELFFBQU0sZUFBZSxJQUFhLEtBQUs7QUFDdkMsUUFBTSxvQkFBb0IsSUFBYSxLQUFLO0FBRTVDLFFBQU0sU0FBUyxJQUFnQjtBQUFBLElBQzdCLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULE9BQU87QUFBQSxJQUNQLFVBQVU7QUFBQSxJQUNWLGlCQUFpQjtBQUFBLElBQ2pCLGFBQWE7QUFBQSxFQUNmLENBQUM7QUFFRCxRQUFNLFVBQVUsSUFBbUI7QUFBQSxJQUNqQyxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxPQUFPO0FBQUEsSUFDUCxVQUFVO0FBQUEsSUFDVixpQkFBaUI7QUFBQSxFQUNuQixDQUFDO0FBRUQsUUFBTSxRQUFRLElBQXlCLG9CQUFJLElBQUksQ0FBQztBQUVoRCxRQUFNLGdCQUFnQixNQUFNO0FBQzFCLFlBQVEsUUFBUSxDQUFDLFFBQVE7QUFBQSxFQUMzQjtBQUVBLFFBQU0sYUFBYSxNQUFNO0FBQ3ZCLFNBQUssUUFBUSxLQUFLLFVBQVUsSUFBSSxJQUFJO0FBQUEsRUFDdEM7QUFFQSxRQUFNLG1CQUFtQixNQUFNO0FBQzdCLGlCQUFhLFFBQVE7QUFBQSxFQUN2QjtBQUVBLFFBQU0sV0FBVyxNQUFlO0FBQzlCLFdBQU8sUUFBUTtBQUFBLE1BQ2IsTUFBTSxLQUFLLFFBQVEsT0FBTztBQUFBLE1BQzFCLFNBQVMsUUFBUSxRQUFRLE9BQU87QUFBQSxNQUNoQyxPQUFPLGNBQWM7QUFBQSxNQUNyQixVQUFVLFNBQVMsTUFBTSxVQUFVLElBQUksT0FBTztBQUFBLE1BQzlDLGlCQUFpQixTQUFTLFVBQVUsZ0JBQWdCLFFBQVEsT0FBTztBQUFBLE1BQ25FLGFBQWE7QUFBQSxJQUNmO0FBQ0EsV0FBTyxDQUFDLE9BQU8sT0FBTyxPQUFPLEtBQUssRUFBRSxLQUFLLFdBQVMsVUFBVSxJQUFJO0FBQUEsRUFDbEU7QUFFQSxRQUFNLGdCQUFnQixNQUFxQjtBQUN6QyxVQUFNLFVBQVUsc0JBQXNCLEtBQUssTUFBTSxLQUFLO0FBQ3RELFdBQU8sVUFBVSxPQUFPO0FBQUEsRUFDMUI7QUFFQSxRQUFNLGdCQUFnQixNQUFlO0FBQ25DLFdBQU8sTUFBTSxNQUFNLElBQUksTUFBTSxLQUFLLE1BQU0sWUFBWTtBQUFBLEVBQ3REO0FBRUEsU0FBTztBQUFBLElBQ0w7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsIm5hbWVzIjpbXX0=