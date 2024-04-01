import * as apiModel from './api/login.api-model';
import * as viewmodel from './login.vm';

export const mapCredentialsFromVmToApi = (credentials: viewmodel.Credentials): apiModel.CredentialsAPI => ({
    user: credentials.user,
    password: credentials.password,
})