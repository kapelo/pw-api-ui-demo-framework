import { Credentials } from './credentials';
import { StandardCredentials } from './standard-user-credentials';

export class UserCredential {
    environment: string;

    constructor(environment: string) {
        this.environment = environment;
    }

    getUserCredentials(credentials: Record<string, Credentials>) {
        const userCredentials = credentials[this.environment];

        this.verifyCredentials(userCredentials);

        return userCredentials;
    }

    private verifyCredentials(credentials: Credentials) {
        if (!credentials) {
            throw Error(`Credentials were not found for ${this.environment} environment!`);
        }

        if (!credentials.username) {
            throw Error(`Username is not set for ${this.environment} environment!`);
        }

        if (!credentials.password) {
            throw Error(`Password is not set for ${this.environment} environment!`);
        }
    }
}

export function getStandardUserCredentials(environment: string) {
    return new UserCredential(environment).getUserCredentials(StandardCredentials);
}
