import { useContext } from "react"
import { AppRoutes } from "./app.routes"
import { AuthContext } from "../context/AuthContext"
import { AuthRoutes } from "./auth.routes"


export const Routes = () => {
    const {signed} = useContext(AuthContext)

    return signed ? <AppRoutes/> : <AuthRoutes/>
}