var input = document.getElementById("monitor");


function Digitar(input){
    monitor.value+=input;
}

function Calcular() {

   monitor.value = eval (monitor.value)

}

function Deletar() {
    monitor.value = ""

}