var statusConta= true
var cargoUser = 'admin'


if (statusConta === true) {

    if (cargoUser === "admin") {
        console.log(`Bem-vindo(a), Admin. Acesso Total.`);
    } else if (cargoUsuario === "gerente") {
        console.log(`Bem-vindo(a), Gerente. Acesso Parcial.`);
    } else {
        console.log(`Bem-vindo(a), Usuário Básico. Acesso Limitado.`);
    }
} else {
    console.log("Acesso Negado: Sua conta está inativa.");
}

/*
Teste combinações:
1. statusConta = true, cargoUsuario = "admin"
2. statusConta = true, cargoUsuario = "usuario"
3. statusConta = false, cargoUsuario = "admin"
*/