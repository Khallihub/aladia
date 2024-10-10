import type { Meta, StoryFn } from '@storybook/vue3';
import SignUpForm from '../components/SignUpForm.vue'; 
import { User, Message, Key } from '@element-plus/icons-vue';

export default {
    title: 'Components/SignUpForm', 
    component: SignUpForm,
    argTypes: {
        handleClick: { action: 'clicked' }, 
        previewImage: { action: 'image uploaded' },
    },
} as Meta<typeof SignUpForm>;

const Template: StoryFn<typeof SignUpForm> = (args) => ({
    components: { SignUpForm },
    setup() {
        return { args, User, Message, Key };
    },
    template: `<SignUpForm v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
};

export const PreFilled = Template.bind({});
PreFilled.args = {

};
