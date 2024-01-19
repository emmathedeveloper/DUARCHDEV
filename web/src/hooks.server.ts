//@ts-nocheck

import type { Handle } from "@sveltejs/kit";
import PocketBase from 'pocketbase'


export async function handle<Handle>({ event , resolve }){

    event.locals.pb = new PocketBase('http://127.0.0.1:8090')

    event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie')) 

    if(event.locals.pb.authStore.isValid){
        event.locals.user = structuredClone(event.locals.pb.authStore.model)
    }else{
        event.locals.user = undefined
    }
    
    let response = await resolve(event)

    response.headers.set('set-cookie' , event.locals.pb.authStore.exportToCookie({ secure: false }))

    return response
}