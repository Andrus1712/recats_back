export interface AuthRequestModel {
    username: string;
    passwowrd: string;
}

export interface AuthResponseModel {
    id: string;
    nombre: string;
    usuario: string;
    pass: string;
    id_nivel: string;
    codempresa: string;
    telefono: string;
    email: string;
    fechaacceso: string;
    fechapass: string;
    borrado: string;
    pendiente: string;
}
