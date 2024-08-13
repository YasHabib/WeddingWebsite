// GoogleAuth.js

export const initGoogleAPI = (clientId, scope) => {
    return new Promise((resolve, reject) => {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
                clientId: clientId,
                scope: 'https://www.googleapis.com/auth/drive.file',
            }).then(() => {
                resolve(window.gapi.auth2.getAuthInstance());
            }).catch(error => {
                reject(error);
            });
        });
    });
};

export const signIn = (authInstance) => {
    return authInstance.signIn();
};

export const signOut = (authInstance) => {
    return authInstance.signOut();
};

