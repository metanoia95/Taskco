import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {

    state: ()=>({
        email: '',
        name:'',
        isLoggedIn:false, 
    }),

    actions: {
        setUser(user: {email: string; name: string}){
            this.email = user.email;
            this.name = user.name;
            this.isLoggedIn = true;
    
        },
        logout(){
            this.email =  '';
            this.name = '';
            this.isLoggedIn = false;

        }
    
    }

})
