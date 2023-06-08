function traerDatosCarros(){
    $.ajax({
        url: "https://gcb7e2ec09d0f98-reto2.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/car/car",
        type: "GET",
        datatype: "JSON",
        success: function(respuesta){
            pintarDatos(respuesta.items, "brand","car");
        },
        error: function (respuesta,xhr) {
            alert('Error en la petición: ' + xhr.status);
        }
    });
}
function guardarDatosCarros(){
    let datos = {
        'id': $("#id").val(),
        'brand': $("#brand").val(),
        'model': $("#model").val(),
        'category_id': $("#category_id").val(),
    };
    $.ajax({
        url: "https://gcb7e2ec09d0f98-reto2.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/car/car",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(datos),
        success: function(respuesta){
            alert("El carro "+datos.brand+" se guardó correctamente");
            traerDatosCarros();
        },
        error: function (respuesta,xhr) {
            alert('Error en la petición: ' + xhr.status);
        }

});
}
