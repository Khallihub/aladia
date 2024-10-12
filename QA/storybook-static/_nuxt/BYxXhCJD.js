import{_ as a}from"./CsZsf3Vu.js";import{u as m}from"./ZlAkEr69.js";import"./Dm1bvDNI.js";import"./CpPJmdYN.js";import"./DlAUqK2U.js";import"./Cs9wVCFg.js";import"./VU8wUJ6S.js";import"./Ccq5cmq1.js";import"./D9rSyKX4.js";import"./CbI4lzGV.js";const _={title:"Components/SignInForm",component:a},i=()=>({components:{SignInForm:a},setup(){const r=m();return r.Email="",r.errors.Email=null,{setEmail:o=>{r.Email=o},setError:o=>{r.errors.Email=o},authStore:r}},template:"<SignInForm />"}),t=i.bind({});t.storyName="Default";var n,e,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`() => ({
  components: {
    SignInForm
  },
  setup() {
    const authStore = useAuthStore();

    // Mock initial state
    authStore.Email = "";
    authStore.errors.Email = null;
    const setEmail = (email: string) => {
      authStore.Email = email;
    };
    const setError = (error: any) => {
      authStore.errors.Email = error;
    };
    return {
      setEmail,
      setError,
      authStore
    };
  },
  template: '<SignInForm />'
})`,...(s=(e=t.parameters)==null?void 0:e.docs)==null?void 0:s.source}}};const D=["Default"];export{t as Default,D as __namedExportsOrder,_ as default};
