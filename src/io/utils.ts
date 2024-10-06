/** Header pour n'importe quelle requête */
export const requestFormHeader = new Headers()
requestFormHeader.append('Authorization', `Bearer ${import.meta.env.USEAPI_TOKEN}`)
requestFormHeader.append('Content-Type', 'multipart/form-data')


export const requestHeader = new Headers()
requestFormHeader.append('Authorization', `Bearer ${import.meta.env.USEAPI_TOKEN}`)
requestFormHeader.append('Content-Type', 'application/json')
