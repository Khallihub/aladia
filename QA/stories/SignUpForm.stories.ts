import type { Meta, StoryFn } from '@storybook/vue3';
import SignUpForm from '../components/SignUpForm.vue'; 

export default {
    title: 'Components/SignUpForm', 
    component: SignUpForm,
    argTypes: {
        handleClick: { action: 'clicked' }, 
        previewImage: { action: 'image uploaded' },
    },
} as Meta<typeof SignUpForm>;

const Template: StoryFn<typeof SignUpForm> = () => ({   
    components: { SignUpForm },
    template: `<SignUpForm v-bind="args" />`,
}); 

export const Default = Template.bind({});

