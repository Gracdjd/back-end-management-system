export const SET_TOKEN = (name: string, token: string) => {
  localStorage.setItem(name, token)
}

export const GET_TOKEN = (name: string) => localStorage.getItem(name)

export const CLEAR_TOKEN = (name: string) => localStorage.removeItem(name)
