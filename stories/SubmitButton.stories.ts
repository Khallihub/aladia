import type { Meta, StoryFn } from '@storybook/vue3';
import SubmitButton from '~/components/Atoms/SubmitButton.vue';
import { useAuthStore } from '~/stores/AuthStore';

export default {
  title: 'Components/Atoms/SubmitButton',
  component: SubmitButton,
} as Meta<typeof SubmitButton>;

const Template: StoryFn<typeof SubmitButton> = (args: any) => ({
  components: { SubmitButton },
  setup() {
    const authStore = useAuthStore();

    const handleClick = () => {
      authStore.loading = !authStore.loading;
    };

    return { authStore, handleClick, args };
  },
  template: '<SubmitButton v-bind="args" :handle-click="handleClick" />',
});

// Default Story: Normal button
export const Default = Template.bind({});
Default.args = {};

// Loading Story: Button in loading state
export const Loading = Template.bind({});
Loading.play = async ({ args }: {args: any}) => {
  const authStore = useAuthStore();
  authStore.loading = true;
};
