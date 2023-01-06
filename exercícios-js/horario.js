var agora = new Date()
var hora = agora.getHours()
var dia = agora.getDay()
if (hora<12){
    console.log('Bom dia!')
}else if (hora<=18){
    console.log('Boa tarde!')
}else{
    console.log('Boa noite')
}

switch(dia){
    case 0:
     console.log ('Domingo')
     break
    case 1:
        console.log('Segunda-feira')
        break
    case 2:
        console.log('Terça-feira')
        break
    case 3:
        console.log('Quarta-feira')
        break
    case 4:
        console.log('Quinta-feira') 
        break
    case 5:
        console.log('Sextoooou') 
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO!] Esse dia não é válido!')
        break        

}



