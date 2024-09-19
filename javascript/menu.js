document.querySelectorAll(".botao__comprar").forEach(function(button) {
    button.addEventListener("click", function(event) {
        event.preventDefault(); 

        var confirmarCompra = confirm("Tem certeza de que deseja comprar este item?");

        if (confirmarCompra) {
            alert("Compra realizada com sucesso!");
            
        } else {
            alert("Compra cancelada.");
        }
    });
});