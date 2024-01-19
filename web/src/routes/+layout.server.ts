import type { LayoutServerLoad } from "./$types";


export const load: LayoutServerLoad = async ({ locals }) => {

    let user = locals.pb.authStore.model

    let posts = await locals.pb.collection('posts').getList(1 , 10 , {
        expand: 'user'
    })

    console.log(user);

    if(user) user.avatar = locals.pb.files.getUrl(user , user.avatar)

    return {
        user,
        posts
    }
};