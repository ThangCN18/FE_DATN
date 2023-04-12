import { PersistPartial } from 'redux-persist/es/persistReducer'

export interface RootState {
  root: RootType & PersistPartial
}
export interface RootType {
    auth: AuthState,
    load: LoadState,
    notify: NotifyState
}

export interface AuthState {
  isAuthenticated: boolean
  user: User | null
}
export interface LoadState {
  isLoading: boolean
}

interface NotifyState {
  isNotify: boolean;
  typeNotify: 'success' | 'info' | 'warning' | 'error';
  titleNotify: String,
  messageNotify: String
}


export interface User {
  id: any
  email: string
  lastName: string
  firstName: string
  role: string
  avatar: string
  phoneNumber: string
  accessToken: string
  refreshToken: string
}