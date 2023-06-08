function traerDatosClientes(){
    $.ajax({
        url: "https://gcb7e2ec09d0f98-reto2.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client",
        type: "GET",
        datatype: "JSON",
        success: function(respuesta){
            pintarDatos(respuesta.items, "name","client");
        },
        error: function (respuesta,xhr) {
            alert('Error en la petición: ' + xhr.status);
        }
    });
}
function guardarDatosClientes(){
    let datos = {
        'id': $("#id").val(),
        'name': $("#name").val(),
        'email': $("#email").val(),
        'age': $("#age").val(),
        
    };
    $.ajax({
        url: "https://gcb7e2ec09d0f98-reto2.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(datos),
        success: function(respuesta){
            alert("El cliente "+datos.name+" se guardó correctamente");
            traerDatosClientes();
        },
        error: function (respuesta,xhr) {
            alert('Error en la petición: ' + xhr.status);
        }

});
}