function calcular(tipo, valor){
    let estilo = document.getElementById('resultado')
    estilo.style.textAlign = "right"
    estilo.style.color = "#BEBEBE"

    if(tipo === 'acao'){
        if(valor === 'c'){
            //limpar o visor no campo resultado
            document.getElementById('resultado').value = ''
        }

        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
            document.getElementById('resultado').value += valor
        }

        if(valor === '='){
            let valor_campo = document.getElementById('resultado').value
            document.getElementById('resultado').value = eval(valor_campo)
        }

    }else if (tipo === 'valor'){
        document.getElementById('resultado').value += valor

    }else{
        alert()
    }


}
