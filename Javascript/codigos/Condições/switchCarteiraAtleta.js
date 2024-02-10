let nome = "Alec"
let idade = 11
let categoria = ''

switch (idade) {
    case 5,6,7,8,9,10:
        categoria = 'Infatil'
        break;

        case 11,12,13,14,15:
        categoria = 'Juvenil'
        break;
    default:
        break;
}
console.log(`Categoria = ${categoria}`);