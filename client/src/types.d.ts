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

export interface IPrato {
  _id: string | null;
  nome: "";
  foto: "";
  descricao: "";
  preco: "";
  disponibel: boolean;
}
