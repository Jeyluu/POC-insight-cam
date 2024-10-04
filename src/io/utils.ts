/** Header pour n'importe quelle requête */
export const requestHeader = new Headers()
requestHeader.append('Authorization', `Bearer ${import.meta.env.USEAPI_TOKEN}`)
requestHeader.append('Content-Type', 'multipart/form-data')

