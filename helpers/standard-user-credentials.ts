import { Credentials } from "./credentials"

export const StandardCredentials: Record<string, Credentials> = {
    staging: {
        username: process.env.STAGING_STANDARD_USERNAME,
        password: process.env.STAGING_STANDARD_PASSWORD,
    },
    production: {
        username: process.env.PRODUCTION_STANDARD_USERNAME,
        password: process.env.PRODUCTION_STANDARD_PASSWORD,
    },
}
