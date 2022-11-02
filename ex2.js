function contar(){
    var numero = 0;
    for (i=0; i<25; i++){
        if(numero % 2 == 0){
            numero = numero + 2;
        }
        document.getElementById('contagem').innerHTML += ""+numero+", ";
    }    
}