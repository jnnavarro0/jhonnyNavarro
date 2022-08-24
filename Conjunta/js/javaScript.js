function arreglo() {

    const compraV = {
        id: document.getElementById("id").value,
        Name: document.getElementById("Name").value,
        Producto: document.getElementById("Producto").value,
        Precio: document.getElementById("Precio").value,
        Cantidad: document.getElementById("Cantidad").value,
    };

    var Productos = new Array(5);
    var matriz = new Array(5);

    for (var i = 0; i <= 5; i++) {
        Productos[i] = new Array(5);
    }

    for (var i = 0; i <= 5; i++) {
        matriz[i] = new Array(5);
    }

    Productos[0][0] = compraV.id;
    Productos[1][1] = document.getElementById("Name").value,
        Productos[2][0] = compraV.Producto;
    Productos[3][1] = compraV.Precio;
    Productos[4][0] = compraV.Cantidad;

    document.write(Productos[1][1]);
    alert(compraV.Name + compraV.Precio);

    for (var i = 0; i <= 5; i++) {
        for (var j = 0; j <= 5; j++) {
            matriz[i][j] = ' i ';
        }
        matriz[i][6] = ' <br> ';
    }

    for (var i = 0; i <= 5; i++) {
        for (var j = 0; j <= 5; i++) {
            document.write(matriz[i][j]);
        }
    }
}
