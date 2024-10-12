import{S as r}from"./ZlAkEr69.js";import"./CpPJmdYN.js";import"./CbI4lzGV.js";import"./DlAUqK2U.js";const l={title:"Components/SubmitButton",component:r,argTypes:{handleClick:{action:"clicked"},default:{control:"text",description:"Slot content for the button text"}}},s=a=>({components:{SubmitButton:r},setup(){return{args:a}},template:'<SubmitButton v-bind="args">{{ args.default }}</SubmitButton>'}),t=s.bind({});t.args={default:"Enter",handleClick:()=>{console.log("Button clicked")}};var e,n,o;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`args => ({
  components: {
    SubmitButton
  },
  setup() {
    return {
      args
    };
  },
  template: '<SubmitButton v-bind="args">{{ args.default }}</SubmitButton>'
})`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const p=["Default"];export{t as Default,p as __namedExportsOrder,l as default};
