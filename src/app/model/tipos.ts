export interface Pessoa{
    id?: number;
    nome: string,
    sobrenome: string,
    dtNascimento: string,
    cpf: string,
    cargo: string,
    email: string, 
    senha: string
}


export interface Produtos{
    id?: string;
    nome: string,
    preco: string,
    categoria: string,
    imagem: string,
    estoque: number,
    detalhes: string,
    destaque: string,
    status: string
}


export interface Contatos{
    id?: string;
    nome: string,
    email: string,
    assunto: string,
    mensagem: string
}


export interface Usuario{
    id?: string;
    nome: string,
    email: string,
    telefone: string,
    senha: string,
    status: string
}
