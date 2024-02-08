import { Credentials } from "./credentials"

export const StandardCredentials: Record<string, Credentials> = {
    production: {
        username: process.env.PRODUCTION_STANDARD_USERNAME,
        password: process.env.PRODUCTION_STANDARD_PASSWORD,
    },
}
