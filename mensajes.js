function traerDatosMensajes(){
    $.ajax({
        url: "https://gcb7e2ec09d0f98-reto2.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message",
        type: "GET",
        datatype: "JSON",
        success: function(respuesta){
            pintarDatos(respuesta.items, "messagetext","message");
        },
        error: function (respuesta,xhr) {
            alert('Error en la petición: ' + xhr.status);
        }
    });
}
function guardarDatosMensajes(){
    let datos = {
        'id': $("#id").val(),
        'messagetext': $("#messagetext").val(),
        
        
    };
    $.ajax({
        url: "https://gcb7e2ec09d0f98-reto2.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(datos),
        success: function(respuesta){
            alert("El mensaje se guardó correctamente");
            traerDatosClientes();
        },
        error: function (respuesta,xhr) {
            alert('Error en la petición: ' + xhr.status);
        }

});
}