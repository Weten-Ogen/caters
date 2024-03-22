import PusherServer from 'pusher';
import PusherClient from 'pusher-js';

export const pusherServer = new PusherServer({
    appId:process.env.PUSHER_APP_ID,
    key:process.env.NEXT_PUBLIC_PUSHER_KEY,
    secret:process.env.PUSHER_APP_SECRET,
    cluster:'eu',
    userTLS: true
})

export const pusherClient = new PusherClient(
    process.env.NEXT_PUBLIC_PUSHER_KEY,{
        cluster:'eu'
    
})