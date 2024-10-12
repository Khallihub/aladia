<template lang="">
    <ClientOnly>
      <div class="bg-black w-screen h-screen flex justify-center items-center">
        <div class="border border-[#ffffff1a] w-fit rounded-md">
          <div v-if="authStore.page === 0 && !authStore.confirmEmail">
            <TemplatesSignInForm />
          </div>
          <div v-if="authStore.page === 1 && !authStore.confirmEmail">
            <TemplatesSignUpForm />
          </div>
          <div v-if="authStore.confirmEmail">
            <TemplatesSignUpConfirmation />
          </div>
        </div>
      </div>
    </ClientOnly>
  </template>
  
  <script setup>
  import { useAuthStore } from '~/stores/AuthStore';

  const authStore = useAuthStore(); 

  </Script>
  

  
  <style lang="">
  /* You can add any specific styles here */
  </style>
  