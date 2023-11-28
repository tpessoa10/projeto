import { createContext, useCallback } from "react";
import { MMKVLoader, useMMKVStorage } from "react-native-mmkv-storage";


const storage = new MMKVLoader().withEncryption().withInstanceID(`Auth`).initialize()

interface AuthContextData {
    user: object
    signed: boolean
    signIn(): Promise<void>
    signOut(): void
}


export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

interface AuthProviderProps {
    children: React.ReactNode
}
export const AuthProvider = ({children}: AuthProviderProps) => {

    const [user, setUser] = useMMKVStorage<object | undefined>(`user`, storage, undefined)

    const signIn = useCallback(async () => {
        setUser({name: `Teste`})
    }, [])

    const signOut = useCallback(() => {
        setUser(undefined)
    }, [])


    return (
        <AuthContext.Provider value={{user, signed: !!user, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}
