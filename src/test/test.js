//import Teste from './test';


//LOGIN
const LoginUsuario={doc:'58498683050',senha:'12345'}
const LoginProprietario={doc:'00000000000191',senha:'12345'}

//REGISTRO
const RegistroUsuario={
    cpf: '58498683050',
    nome: 'Luan Golembiewski',
    dataNascimento: '23/04/2001',
    nomeMae: 'Marcia Golembiewski Da Silva Fernandes',
    email: 'luan@gmail.com',
    senha: '12345',
    numero: 44984125869
}
const RegistroProprietario={
    doc: '00000000000191',
    nome: 'Luan Golembiewski',
    email: 'luan@gmail.com',
    senha: '12345',
    numero: 44984217636
}
    
//USUARIO
const SetarUsuario = {
    Id: 1,
    CPF: "58498683050",
    Nome: "Luan Golembiewski",
    DataNascimento: "2001-04-23T03:00:00.000Z",
    NomeMae: "Marcia Golembiewski Da Silva Fernandes",
    Cidade: "INDIANÓPOLIS - PR",
    Email: "luan@gmail.com",
    Numero: 44984125869
}
const VeiculosUsuario=[
    {
        Id: 2,
        IdProprietario: 1,
        Modelo: "Fusca",
        Ano: 2023,
        Cor: "Vermelho",
        Placa: "abc1234",
        Cidade: "INDIANÓPOLIS - PR",
        Endereco: "Avenida Brasil, 1000",

        CustoMovimento: "20",
        CustoHrPassageiro: "18",
        CustoParado: "18",
        CustoPassageiro: "16",
        CustoMulta: "1",
        HorarioUso: "7;20",
        IntervaloContratacao: 3
    },
    {
        Id: 2,
        IdProprietario: 1,
        Modelo: "Kombi",
        Ano: 2023,
        Cor: "Vermelho",
        Placa: "abc1234",
        Cidade: "INDIANÓPOLIS - PR",
        Endereco: "Avenida Brasil, 1000",

        CustoMovimento: "20",
        CustoHrPassageiro: "18",
        CustoParado: "18",
        CustoPassageiro: "16",
        CustoMulta: "1",
        HorarioUso: "7;20",
        IntervaloContratacao: 3
    },
];
//PROPRIETARIO
const SetarProprietario = {
    Id: 4,
    Doc: "00000000000191",
    Nome: "Luan Golembiewski",
    Email: "luan@gmail.com",
    Numero: 44984217636
}
const VeiculosProprietario=[
    {
        Id: 2,
        IdProprietario: 1,
        Modelo: "Honda Civic",
        Ano: 2023,
        Cor: "Vermelho",
        Placa: "abc1234",
        Cidade: "INDIANÓPOLIS - PR",
        Endereco: "Avenida Brasil, 1000",

        CustoMovimento: "20",
        CustoHrPassageiro: "18",
        CustoParado: "18",
        CustoPassageiro: "16",
        CustoMulta: "1",
        HorarioUso: "7;20",
        IntervaloContratacao: 3
    },
    {
        Id: 3,
        IdProprietario: 1,
        Modelo: "Fusca Basdasjd asdk sdasdi",
        Ano: 1000,
        Cor: "branco",
        Placa: "acb4321",
        Cidade: "INDIANÓPOLIS - PR",
        Endereco: "Avenida Brasil, 1000",

        CustoMovimento: "20",
        CustoHrPassageiro: "18",
        CustoParado: "18",
        CustoPassageiro: "16",
        CustoMulta: "1",
        HorarioUso: "7;20",
        IntervaloContratacao: 3
    },
    {
        Id: 4,
        IdProprietario: 1,
        Modelo: "Fusca Basdasjd asdk sdasdi",
        Ano: 1000,
        Cor: "branco",
        Placa: "acb4321",
        Cidade: "INDIANÓPOLIS - PR",
        Endereco: "Avenida Brasil, 1000",

        CustoMovimento: "20",
        CustoHrPassageiro: "18",
        CustoParado: "18",
        CustoPassageiro: "16",
        CustoMulta: "1",
        HorarioUso: "7;20",
        IntervaloContratacao: 3
    }
];
const AddVeiculo ={
    IdProprietario: 7,
    Modelo: "Honda civic",
    Ano: 2000,
    Cor: 'Vermelho',
    Placa: 'AAA0000',
    Cidade: 'INDIANÓPOLIS - PR',
    Endereco: 'Avenida Brasil, 120',
    Img1: null,
    Img2: null,
    Img3: null,
    CustoMovimento:"20",
    "CustoHrPassageiro":"18",
    CustoParado:"18",
    CustoPassageiro:"16",
    CustoMulta:"1",
    HorarioUso:"7;20",
    IntervaloContratacao:3
};

module.exports={
    /* REGISTER */
    //RegistroUsuario,
    //RegistroProprietario,

    /* LOGIN */
    LoginUsuario,
    LoginProprietario,

    /* USUARIO */
    SetarUsuario,
    VeiculosUsuario,

    /* PROPRIETARIO */
    /* SetarProprietario, */
    //VeiculosProprietario,
    //AddVeiculo,
};
