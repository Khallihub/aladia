<template lang="">
    <div class="h-[566px] max-w-[374px] bg-black flex items-center justify-center px-6 py-8">
    <div class="shadow-xl flex flex-col justify-start text-center w-full h-full mb-auto">
        <div class="flex flex-col items-center mb-6 h-fit">
            <div class="rounded-full mb-4 flex items-center justify-center">
                <img src="/public/logo.png" alt="Aladia Logo" class="w-1/2 object-cover" />
            </div>
            <h2 class=" text-lg font-semibold text-white">{{`${authStore.Name} ${authStore.Surname}`}}</h2>
        </div>
        <p class="mb-8 text-white/70">Thanks for joining Aladia.</p>
        <p class="mb-20 text-center text-white/70">Please enter below the 6-digit code we sent you through your registration e-mail:</p>
        <div class="flex justify-between mb-6 w-full">
            <div class="flex justify-between mb-6 w-full">
                <input type="text" maxlength="1" class="flex w-10 h-10" v-model="confirmationCode[0]" @input="validateConfirmationCode" />
                <input type="text" maxlength="1" class="flex w-10 h-10" v-model="confirmationCode[1]" @input="validateConfirmationCode" />
                <input type="text" maxlength="1" class="flex w-10 h-10" v-model="confirmationCode[2]" @input="validateConfirmationCode" />
                <input type="text" maxlength="1" class="flex w-10 h-10" v-model="confirmationCode[3]" @input="validateConfirmationCode" />
                <input type="text" maxlength="1" class="flex w-10 h-10" v-model="confirmationCode[4]" @input="validateConfirmationCode" />
                <input type="text" maxlength="1" class="flex w-10 h-10" v-model="confirmationCode[5]" @input="validateConfirmationCode" />
            </div></div>
        <p class="text-gray-500 text-center text-sm mb-6">You didn't receive any mail?</p>
        
        <SubmitButton :handle-click="handleClick" />
    </div>
    </div>
</template>
<script setup>
import { useAuthStore } from '~/stores/AuthStore';

const authStore = useAuthStore();
const confirmationCode = ref(['', '', '', '', '', '']);

const validateConfirmationCode = () => {
    // Check if all inputs are filled
    const isComplete = confirmationCode.value.every(code => code);
    if (isComplete) {
        // You could also add further validation for the code itself
    }
};

const handleClick = () => {
    if (confirmationCode.value.join('').length === 6) {
        // Proceed with confirmation
        console.log("Confirmation Code Submitted: ", confirmationCode.value.join(''));
    } else {
        // Handle error (e.g., show a message)
        console.log("Please complete the confirmation code.");
    }
};

</script>
<style lang="">

</style>