import { error , redirect, type Actions } from "@sveltejs/kit";



export const actions: Actions = {
    default: async ({ locals , request }) => {

        try {
            const data: any = Object.fromEntries(await request.formData())
    
            await locals.pb.collection('users').authWithPassword(data["email"] as string , data["password"] as string)

            if(!locals?.pb?.authStore?.model?.verified){
                locals.pb.authStore.clear()

                return { notVerified: true }
            } 

            
        } catch (err) {
            console.log(err);
            throw error(500 , 'Something went wrong')
        }
        
        throw redirect(303 , "/")
    }
};