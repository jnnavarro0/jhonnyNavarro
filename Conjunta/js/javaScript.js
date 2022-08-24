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

//Validaciones

function validateid() {
    var expRegid = /^[0-9]{10}$/;
    var Personid = document.getElementById("id");
    if (!expRegid.exec(Personid.value)) {
        alert("Formato incorrecto");
        document.getElementById("id").value="";
        return false;

    } else {
        return true;
    }
}

function validateNamePerson() {
    var expRegNamePerson = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var PersonName = document.getElementById("Name");
    if (!expRegNamePerson.exec(PersonName.value)) {
        alert("Solo se aceptan letras");
        document.getElementById("Name").value="";
        return false;

    } else {
        return true;
    }
}

function validateNameProducto() {
    var expRegNameProducto = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var NameProducto = document.getElementById("Producto");
    if (!expRegNameProducto.exec(NameProducto.value)) {
        alert("Solo se aceptan letras");
        document.getElementById("Producto").value="";
        return false;

    } else {
        return true;
    }
}

function validatePrice() {
    var expRegPrice = /^[0-9]$/;
    var Price = document.getElementById("Precio");
    if (!expRegPrice.exec(Price.value)) {
        alert("Formato incorrecto");
        document.getElementById("Precio").value="";
        return false;

    } else {
        return true;
    }
}

function validateCantidad() {
    var expRegCantidad = /^[0-9]$/;
    var Cantidad = document.getElementById("Cantidad");
    if (!expRegCantidad.exec(Cantidad.value)) {
        alert("Formato incorrecto");
        document.getElementById("Cantidad").value="";
        return false;

    } else {
        return true;
    }
}