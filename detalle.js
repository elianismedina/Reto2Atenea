function traerDetalle() {
  let id = sessionStorage.getItem("id");
  let tipoTabla = sessionStorage.getItem("tipoTabla");

  $.ajax({
    url:
      "https://gcb7e2ec09d0f98-reto2.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/" +
      tipoTabla +
      "/" +
      tipoTabla +
      "/" +
      id,
    type: "GET",
    datatype: "JSON",
    success: function (respuesta) {
      pintarDetalle(respuesta.items);
    },
    error: function (respuesta, xhr) {
      alert("Error en la petición: " + xhr.status);
    },
  });
}
function pintarDetalle(datos) {
  let htmlParaInsertar = "";
  htmlParaInsertar += "<thead><tr>";

  Object.keys(datos[0]).forEach(
    (elemento) => (htmlParaInsertar += "<th>" + elemento + "</th>")
  );

  htmlParaInsertar += "</tr></thead>";
  htmlParaInsertar += "<tbody>";
  htmlParaInsertar += "<tr>";

  Object.values(datos[0]).forEach((elemento, indice) => {
    if (indice < 1) {
      htmlParaInsertar += "<td>"+elemento+"</td>";
    } else {
      htmlParaInsertar +=
        "<td><input value="+elemento+"></td>";
    }
  });

  htmlParaInsertar += "</tr>";
  htmlParaInsertar += "</tbody>";
  $("#tabla").empty();
  $("#tabla").append(htmlParaInsertar);
}
function eliminarDatos(){
    let id = sessionStorage.getItem("id");
    let tipoTabla = sessionStorage.getItem("tipoTabla");
    let datos = {
        'id': id,
    };

    $.ajax({
        url: "https://gcb7e2ec09d0f98-reto2.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/"+tipoTabla+"/"+tipoTabla,
        type: "DELETE",
        contentType: "application/json",
        data: JSON.stringify(datos),
        success: function(respuesta){
            alert("El registro se eliminó correctamente");
            window.location.href = "index.html";
        },
        error: function (respuesta,xhr) {
            alert('Error en la petición: ' + xhr.status);
        }
    });
}
function actualizarDatos(){
    let tipoTabla = sessionStorage.getItem("tipoTabla");
    let datos = {};
    if (tipoTabla == "car"){
        datos = datosCarro();
    }else if (tipoTabla == "client"){
        datos = datosCliente();
    }else if (tipoTabla == "message"){
        datos = datosMensaje();
    }
    $.ajax({
        url: "https://gcb7e2ec09d0f98-reto2.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/"+tipoTabla+"/"+tipoTabla,
        type: "PUT",
        contentType: "application/json",
        data: JSON.stringify(datos),
        success: function(respuesta){
            alert("El registro se actualizó correctamente");
            window.location.href = "index.html";
        },
        error: function (respuesta,xhr) {
            alert('Error en la petición: ' + xhr.status);
        }
    });


}
function datosCarro(){
    let fila = document.getElementById("tabla").rows.item(1).cells;
    let datos = {
        'id': fila.item(0).innerText,
        'brand': fila.item(1).children[0].value,
        'model': fila.item(2).children[0].value,
        'category_id': fila.item(3).children[0].value,

    };
    return datos;
}
function datosCliente(){
    let fila = document.getElementById("tabla").rows.item(1).cells;
    let datos = {
        'id': fila.item(0).innerText,
        'name': fila.item(1).children[0].value,
        'email': fila.item(2).children[0].value,
        'age': fila.item(3).children[0].value,
        
    };
    return datos;
}
function datosMensaje(){
    let fila = document.getElementById("tabla").rows.item(1).cells;
    let datos = {
        'id': fila.item(0).innerText,
        'messagetext': fila.item(1).children[0].value,
        
    };
    return datos;
}








