
        /* Adiciona a TAG LI e o texto dentro dela */
var botaoAdicionar=document.getElementById('adicionar-conteudo')
botaoAdicionar.addEventListener('click',adicionar)

function adicionar(){
    var entradaTexto=document.getElementById('entrada-de-texto').value
    var lista=document.getElementById('lista')
    let li=document.createElement('li')
    li.textContent=entradaTexto
    
   
    if(entradaTexto == ''){
        alert("Você deve escrever Primeiro!")
    }else{ 
        lista.append(li)
    }
/* ------------------------------------------------------------------------------------------- */

            /* Risca o item ao clicar */
    li.addEventListener('click',riscar)
    function riscar() {
        li.classList.toggle("active")
        li.classList.toggle('checked')
    }
/*--------------------------------------------------------------------------------------------- */

            /* Adiciona o botão de remover */
    var minhaLista = document.getElementsByTagName("LI");
    var i;
    for (i = 0; i < minhaLista.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        minhaLista[i].appendChild(span);
    }
/* ------------------------------------------------------------------------------------------------ */


            /* Remove o item */
    var close=document.getElementsByClassName('close')
    var i
    for(i=0;i<close.length;i++){
        close[i].onclick=function(){
            var div = this.parentElement;
            div.remove(close)
        }
    }
/* ------------------------------------------------------------------------------------------------------ */  
            
            /* Enumera os itens da Lista */
    var num=document.getElementsByTagName('li')
    var i
    for(i=0;i<num.length;i++){
        var span=document.createElement('i')
        var nu=document.createTextNode(i+1)
        span.className='num'
        span.appendChild(nu)
        num[i].appendChild(span)
    }
/* ---------------------------------------------------------------------------------------------------------- */
}


