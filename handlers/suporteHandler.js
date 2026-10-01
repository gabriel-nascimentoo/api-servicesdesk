function suporteN1(chamado){
    console.log("N1 recebeu o chamado");
    if(chamado.prioridade == "normal"){
        console.log("N1 assumiu o chamado");
        return "Suporte N1";
    }
    console.log("N1 nao conseguiu resolver");
    console.log("Encaminhado para N2");
    return suporteN2(chamado);
}
function suporteN2(chamado){
    console.log("N2 recebeu o chamado");
    if(chamado.prioridade == "media"){
        console.log("N2 assumiu o chamado");
        return "suporte N2";
    }
    console.log("N2 nao conseguiu resolver");
    console.log("Encaminhado para ESPECIALISTA...");
    return especialista(chamado);
}
function especialista(chamado){
    console.log("ESPECIALISTA recebeu o chamado");
    if(chamado.prioridade == "alta"){
        console.log("ESPECIALISTA assumiu o chamado");
        return "Suporte ESPECIALISTA";
    }
    throw new Error("Nnenhum responsavel encontrado!")
}

module.exports = {
    suporteN1
}

