import { generateRandomName } from "$lib/utils";
import { redirect, type Actions, error } from "@sveltejs/kit";



export const actions: Actions = {
    default: async ({ locals , request }) => {
        
        try {
            const data = Object.fromEntries(await request.formData())
    
            // const userNameTaken = await locals.pb.collection('users').getFirstListItem(`username="${data["username"]}"`) != null
    
            // if(userNameTaken) return { userNameTaken: true }

            const record = {
                "username": data["username"],
                "password": data["password"],
                "passwordConfirm": data["passwordConfirm"],
                "email": data["email"],
            }

            await locals.pb.collection('users').create(record)

            // await locals.pb.collection('users').requestVerification(data["email"] as string)
        /**
         * @todo Handle errors
         */
        } catch (err) {
            console.log(err)

            throw error(500 , 'Something went wrong')
        }

        throw redirect(303 , '/login')
    }
}