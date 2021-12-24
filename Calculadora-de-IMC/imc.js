var calcular=document.getElementById('calcular')

calcular.addEventListener('click',imc)

function imc(){
    var altura=document.getElementById('altura').value
    var peso=document.getElementById('peso').value
    var resultado=document.getElementById('resultado')

    if(altura == '' || peso ==''){
        resultado.innerText=("Preencha todos os campos")
    }else{
        var valorIMC=(peso/(altura*altura)).toFixed(2)

        let classificacao=''

        if(valorIMC <18.5){
            classificacao='abaixo do peso'
        }else if(valorIMC<25){
            classificacao='com o peso ideal'
        }else if(valorIMC<29.9){
            classificacao='com sobrepeso'
        }else if(valorIMC<39){
            classificacao='com obesidade'
        }else if(valorIMC>40){
            classificacao='com obesidade grave'
        }

        resultado.textContent=`O seu indice IMC é de ${valorIMC} e você está ${classificacao}`
    }
}   