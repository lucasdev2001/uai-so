export interface IReserva {
  data: Date;
  _id: String;
  estado: String;
  tipo: String;
  cliente: String;
  qtdPessoas: String;
  senha: String;
}

export interface ICliente {
  _id: String;
  nome: String;
  email: String;
}
