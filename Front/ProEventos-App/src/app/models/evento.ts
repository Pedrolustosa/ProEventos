export interface Evento {
    id: number;
    local: string;
    DataEvento?: Date;
    Tema: string;
    QtdPessoas: number;
    ImagemURL: string;
    Telefone: string;
    Email: string;
    Lote: Lote;
    RedeSociais: RedeSocial;
    PalestrantesEventos: PalestranteEvento;
}
