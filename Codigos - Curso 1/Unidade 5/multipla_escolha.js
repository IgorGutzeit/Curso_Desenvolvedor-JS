const diaSemana = 1;

switch(diaSemana){
    case 1:
        console.log("Domingo");
        break;

    case 2:
        console.log("Segunda-feira");
        break;

    case 3:
        console.log("Terça-feira");
        break;

    case 4:
        console.log("Quarta-feira");
        break;

    case 5:
        console.log("Quinta-feira");
        break;

     case 6:
        console.log("Sexta-feira");
        break;

    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Dia inválido");
};


function diaDaSemana(dia) {
    switch (dia) {
        case 1:
            return 'Domingo';

        case 2:
            return 'Segunda';

        case 3:
            return 'Terça';

        case 4:
            return 'Quarta';

        case 5:
            return 'Quinta';

        case 6:
            return 'Sexta';

        case 7:
            return 'Sábado';

        default:
            return 'Dia inválido';
    };
};


function diaDaSemanaNumber(dia){
    switch(dia){
        case "domingo":
            return 1;

        case "segunda":
            return 2;

        case "terça":
            return 3;

        case "quarta":
            return 4;

        case "quinta":
            return 5;

        case "sexta":
            return 6;

        case "sabado":
            return 7;
        default:
            return "Dia inválido";
    };
};

console.log(diaDaSemana(3));
console.log(diaDaSemanaNumber("terça"));