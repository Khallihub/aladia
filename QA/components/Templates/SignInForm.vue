<template>
    <div class="h-[598px] max-w-[374px] p-5 flex-col items-center justify-between bg-black text-white space-y-4">
        <!-- Logo and Welcome Text -->
        <div class="w-full flex justify-center">
            <AtomsWelcomeCard />
        </div>

        <p v-if="!authStore.existingUser" class="w-full text-center text-sm font-semibold" data-test="sign_in-info">
            Enter your email
        </p>
        <p v-if="authStore.existingUser" class="w-full text-center text-sm font-semibold" data-test="sign_in-info-pass">
            Enter your password
        </p>
        <!-- Email Form -->
        <div class="space-y-4">
            <div class="space-y-4" v-if="!authStore.existingUser">
                <el-input 
                    v-model="authStore.Email" 
                    class="w-full" 
                    placeholder="Email Address" 
                    :prefix-icon="Message"
                    :error="authStore.errors.Email?.length > 0"
                    @input="updateEmail"
                    data-test="sign_in-input"
                />
                <p v-if="authStore.errors.Email?.length > 0" class="text-red-500 text-xs" data-test="sign_in-error">{{ authStore.errors.Email }}</p>
                <AtomsSubmitButton :handle-click="handleSubmit" />
            </div>
            <div class="space-y-4" v-if="authStore.existingUser">
                <el-input 
                    v-model="authStore.OldPassword" 
                    class="w-full" 
                    placeholder="Password" 
                    :prefix-icon="Key"
                    :error="authStore.incorrectPassword"
                    @input="updatePassword"
                    data-test="sign_in-input-pass"
                />
                <p v-if="authStore.incorrectPassword" class="text-red-500 text-xs" data-test="sign_in-pass-error">
                    Incorrect Password
                </p>
                <AtomsSubmitButton :handle-click="handleLogin" />
            </div>
        </div>

        <!-- Divider -->
        <div class="mb-6 flex items-center justify-between gap-4" v-if="!authStore.existingUser">
            <div class="h-[1px] w-40 bg-gradient-to-r from-white/0 to-white"></div>
            <div>Or</div>
            <div class="h-[1px] w-40 bg-gradient-to-r from-white to-white/0"></div>
        </div>

        <!-- Social Login Buttons -->
        <div class="space-y-4" data-test="sign_in-socials" v-if="!authStore.existingUser">
            <AtomsSocialLinks :svg="GoogleIcon" text="Continue with Google&nbsp;&nbsp;&nbsp;&nbsp;" @click="handleSocialClick(1)" />
            <AtomsSocialLinks :svg="FaceBookIcon" text="Continue with Facebook" @click="handleSocialClick(2)" />
            <AtomsSocialLinks :svg="AppleIcon" text="Continue with Apple&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" @click="handleSocialClick(3)" />
        </div>

        <!-- Terms and Conditions -->
        <p class="text-center text-sm text-gray-500" data-test="sign_in-terms" v-if="!authStore.existingUser">
            <a href="#" class="hover:text-gray-400 cursor-pointer text-center text-white/40">Terms & Conditions</a>
        </p>
    </div>
</template>

<script setup>
import AppleIcon from '~/assets/Icons/SocialIcons/AppleIcon.vue';
import FaceBookIcon from '~/assets/Icons/SocialIcons/FaceBookIcon.vue';
import GoogleIcon from '~/assets/Icons/SocialIcons/GoogleIcon.vue';
import { Message, Key } from '@element-plus/icons-vue';
import { useAuthStore } from '~/stores/AuthStore';

const authStore = useAuthStore();


const updateEmail = (value) => {
    authStore.Email = value; 
    authStore.validate()
};

const updatePassword = (value) => {
    authStore.OldPassword = value; 
    authStore.validate()
};

const handleLogin = async () => {
    authStore.toggleLoading(); 
    const isValid = authStore.checkPassword();
    if (isValid !== true) {
        authStore.toggleLoading(); 
        authStore.incorrectPassword = true;
        return;
    }
    authStore.incorrectPassword = false;
    await new Promise((resolve) => setTimeout(resolve, 1000));
    authStore.toggleLoading(); 
    authStore.page = 2
}

const handleSubmit = async () => {
    authStore.validate()
    authStore.toggleLoading(); 
    const isValid = authStore.validateEmail();
    if (isValid !== null) {
        authStore.toggleLoading(); 
        return;
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
    authStore.toggleLoading(); 
    if (authStore.users[authStore.Email]) {
        authStore.existingUser = true;
    } else {
        authStore.changePage();
    }
};

const handleSocialClick = (id) => {
    console.log(id);
};
</script>
