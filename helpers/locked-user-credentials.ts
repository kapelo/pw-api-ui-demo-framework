import { Credentials } from "./credentials"

export const LockedCredentials: Record<string, Credentials> = {
    staging: {
        username: process.env.STAGING_LOCKED_USERNAME,
        password: process.env.STAGING_STANDARD_PASSWORD,
    },
    production: {
        username: process.env.PRODUCTION_LOCKED_USERNAME,
        password: process.env.PRODUCTION_STANDARD_PASSWORD,
    },
}
