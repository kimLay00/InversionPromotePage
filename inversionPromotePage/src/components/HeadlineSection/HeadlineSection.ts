import { ref, toRef } from 'vue';
  
export default {
    setup() {
      const isEnlarged = ref(true);
      return { isEnlarged };
    },
    mounted(){
      let _self = this;
      console.log("mounted");
      setInterval(()=>{
        console.log("will set");
        _self.isEnlarged = false;
      },500)
    }
  };