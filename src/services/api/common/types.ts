export interface IGetMyAddresses {
  id: string
  name: string
  details: string
}

export interface IOrderCompletionBody {
  "nationalId": string
  "phoneNumber": string
  "addressId": string
}