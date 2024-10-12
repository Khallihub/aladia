import{_ as r}from"./68YM6oYl.js";import{r as m}from"./CpPJmdYN.js";import{u as c}from"./ZlAkEr69.js";import"./Ccq5cmq1.js";import"./D9rSyKX4.js";import"./CbI4lzGV.js";import"./DlAUqK2U.js";const v={title:"Components/SignUpConfirmation",component:r},s=()=>({components:{SignUpConfirmation:r},setup(){const n=c();n.Name="John",n.Surname="Doe";const e=m(["","","","","",""]);return{authStore:n,confirmationCode:e,validateConfirmationCode:()=>{},handleClick:()=>{e.value.join("").length===6?console.log("Confirmation Code Submitted: ",e.value.join("")):console.log("Please complete the confirmation code.")}}},template:"<SignUpConfirmation />"}),o=s.bind({});var t,i,a;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`() => ({
  components: {
    SignUpConfirmation
  },
  setup() {
    const authStore = useAuthStore();

    // Mock initial state for name and surname
    authStore.Name = 'John';
    authStore.Surname = 'Doe';

    // Local state for confirmation code
    const confirmationCode = ref(['', '', '', '', '', '']);
    const validateConfirmationCode = () => {
      // Simulate code validation logic
    };
    const handleClick = () => {
      if (confirmationCode.value.join('').length === 6) {
        console.log('Confirmation Code Submitted: ', confirmationCode.value.join(''));
      } else {
        console.log('Please complete the confirmation code.');
      }
    };
    return {
      authStore,
      confirmationCode,
      validateConfirmationCode,
      handleClick
    };
  },
  template: '<SignUpConfirmation />'
})`,...(a=(i=o.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const U=["Default"];export{o as Default,U as __namedExportsOrder,v as default};
