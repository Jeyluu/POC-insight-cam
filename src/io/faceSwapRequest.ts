import { requestFormHeader,requestHeader } from "./utils"


export async function account(
    discord: string,
    server: string,
    channel?: string,
    ){
try {
    const requestParams: RequestInit = {
        method:'POST',
        headers: requestHeader,
        body: JSON.stringify({
            channel,
            server,
            discord,
        })
    }

    const resp = await fetch(`https://api.useapi.net/v1/faceswap/saveid`,requestParams)

    return resp
} catch (error){
    throw `La requête saveId a échouée suite à ${error}`
}
}


export async function saveid(
    idname: string,
    image: string,
    channel?: string,
    ){
try {
    const requestParams: RequestInit = {
        method:'POST',
        headers: requestHeader,
        body: JSON.stringify({
            channel,
            idname,
            image,
        })
    }

    const resp = await fetch(`https://api.useapi.net/v1/faceswap/saveid`,requestParams)

    return resp
} catch (error){
    throw `La requête saveId a échouée suite à ${error}`
}
}