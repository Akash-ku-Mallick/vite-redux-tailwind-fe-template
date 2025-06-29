import type { UserData } from "../../types/user.type";

export interface loginReturnType {
    data: UserData
    token?: string
    isCompleted: boolean
    isVerified: boolean
    message: string
}