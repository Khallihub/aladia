<template>
    <div class="h-[598px] max-w-[374px] p-5 flex flex-col items-center bg-black text-white space-y-3">
        <div class="next-icon flex h-8 scale-100 cursor-pointer items-center justify-center gap-2 transition-all active:scale-95 text-sm"
            @click="authStore.changePage();">
            <div class="inline-flex items-center justify-center pt-0.5 rotate-180">
                <svg xmlns="http://www.w3.org/2000/svg" class="octicon arrow-symbol-mktg" width="16" height="16"
                    viewBox="0 0 16 16" fill="none">
                    <path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z">
                    </path>
                    <path class="octicon-chevrow-stem" stroke="currentColor" d="M1.75 8H11" stroke-width="1.5"
                        stroke-linecap="round"></path>
                </svg>
            </div>
            Back to Log in
        </div>

        <div class="flex items-center space-x-4 relative">
            <input id="fileInput" type="file" accept="image/*" class="absolute inset-0 opacity-0 cursor-pointer"
                @change="previewImage" />

            <div class="w-1/2 border border-white flex justify-center items-center rounded-md">
                <img id="profileImage" src="/public/file_input.png" alt="Profile Picture"
                    class="cursor-pointer w-24 h-24" />
            </div>

            <div>
                <h5 class="mb-1 text-sm font-semibold" data-test="sign_up-greet">Nice to meet you,</h5>
                <p class="text-xs text-white/70" data-test="sign_up-info">Upload a profile picture and complete your presentation</p>
            </div>
        </div>

        <div class="mb-6 text-xs text-white/70" data-test="sign_up-terms">
            <label class="flex items-center">
                <div class="flex h-4 w-4 cursor-pointer items-center justify-center rounded border pt-0.5 transition-all border-white/50 hover:border-white">
                    <i class="fa-solid fa-check tex-sm"></i>
                </div>
                <span class="ml-2 text-sm">I accept
                    <a href="#" class="underline text-white">Terms & Conditions</a> and
                    <a href="#" class="underline text-white">Privacy Policy</a>
                </span>
            </label>
        </div>

        <p class="mb-4 text-center text-xs" data-test="sign_up-command">Enter your details</p>

        <div class="space-y-3 w-full">
            <div class="w-full">
                <el-input 
                    v-model="authStore.Name" 
                    class="w-full" 
                    placeholder="Name" 
                    :prefix-icon="User" 
                    @focus="touchedName = true"
                    @input="resetError('Name')" 
                    data-test="sign_up-name-input"
                />
                <p v-if="touchedName && authStore.errors.Name" class="text-red-500 text-xs" data-test="sign_up-name-input-error">{{ authStore.errors.Name }}</p>
            </div>

            <div>
                <el-input 
                    v-model="authStore.Surname" 
                    class="w-full" 
                    placeholder="Surname" 
                    :prefix-icon="User" 
                    @focus="touchedSurname = true"
                    @input="resetError('Surname')" 
                    data-test="sign_up-surname-input"
                />
                <p v-if="touchedSurname && authStore.errors.Surname" class="text-red-500 text-xs" data-test="sign_up-surname-input-error">{{ authStore.errors.Surname }}</p>
            </div>

            <div>
                <el-input 
                    v-model="authStore.Email" 
                    class="w-full" 
                    placeholder="Email" 
                    :prefix-icon="Message" 
                    @focus="touchedEmail = true"
                    @input="resetError('Email')" 
                    data-test="sign_up-email-input"

                />
                <p v-if="touchedEmail && authStore.errors.Email" class="text-red-500 text-xs" data-test="sign_up-email-input-error">{{ authStore.errors.Email }}</p>
            </div>

            <div>
                <el-input 
                    v-model="authStore.Password" 
                    class="w-full" 
                    placeholder="Password" 
                    :prefix-icon="Key" 
                    @focus="touchedPassword = true"
                    @input="resetError('Password')" 
                    data-test="sign_up-password-input"

                />
                <p v-if="touchedPassword && authStore.errors.Password" class="text-red-500 text-xs" data-test="sign_up-password-input-error">{{ authStore.errors.Password }}</p>
            </div>

            <div>
                <el-input 
                    v-model="authStore.ConfirmPassword" 
                    class="w-full" 
                    placeholder="Confirm Password" 
                    :prefix-icon="Key" 
                    @focus="touchedConfirmPassword = true"
                    @input="resetError('ConfirmPassword')" 
                    data-test="sign_up-confirm_password-input"

                />
                <p v-if="touchedConfirmPassword && authStore.errors.ConfirmPassword" class="text-red-500 text-xs" data-test="sign_up-confirm_password-input-error">{{ authStore.errors.ConfirmPassword }}</p>
            </div>
        </div>

        <AtomsSubmitButton :handle-click="handleClick" />

        <p class="text-center text-sm text-gray-500 mb-1">
            <a href="#" class="hover:text-gray-400 cursor-pointer text-center text-white/40" data-test="sign_up-terms-link">Terms & Conditions</a>
        </p>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { User, Message, Key } from '@element-plus/icons-vue';
import { useAuthStore } from '~/stores/AuthStore';

const authStore = useAuthStore();
const profileImage = ref({ src: null });
import { computed } from 'vue';

const touchedName = computed(() => !!authStore.Name);
const touchedSurname = computed(() => !!authStore.Surname);
const touchedEmail = computed(() => !!authStore.Email);
const touchedPassword = computed(() => !!authStore.Password);
const touchedConfirmPassword = computed(() => !!authStore.ConfirmPassword);

function previewImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            profileImage.value.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

const resetError = (field) => {
    if (authStore.errors[field]) {
        // Reset error state if the input changes
        authStore.errors[field] = null;
    }
};

const handleClick = () => {
    if (authStore.validate()) {
        authStore.confirmEmailPage();
    }
};
</script>

<style scoped>
#fileInput {
    position: absolute;
    opacity: 0;
    inset: 0;
}
</style>
