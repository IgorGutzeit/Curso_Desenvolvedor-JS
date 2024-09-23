function somarValores(n1, n2){
    if(typeof n1 !== "number" || typeof n2 !== "number"){
        throw new TypeError ("Os valores devem ser números");
    }else{
        return n1 + n2;
    }
};


try{
    console.log(somarValores(10, 20));
    console.log(somarValores("10", 20));
} catch(erro) {
    console.log(erro.message);
    console.log(erro.name); //Informa o nome do erro que está sendo lançado, nesse caso TypeError
    //console.log(erro.stack);
};
