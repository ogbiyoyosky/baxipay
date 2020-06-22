export interface RequestInterface {
    setExceptionStatus: (string) => Object
    headers: (string) => Object
    basicAuth: (string) => Object
    auth: (string) => Object
    acceptJson: (string) => Object
}