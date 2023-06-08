function pintarDatos(datos, columnaMostrar, tipoTabla) {
    let htmlParaInsertar = "";
    htmlParaInsertar += "<thead><tr><th>Detalles</th></tr></thead>";
    htmlParaInsertar += "<tbody>";
    for (let i = 0; i < datos.length; i++) {
        htmlParaInsertar += "<tr>";
        htmlParaInsertar += "<td><a href='/detalle.html' onclick='redireccionarDetalle("+datos[i].id+",\""+tipoTabla+"\")'>"+datos[i][columnaMostrar]+"</a></td>";
        htmlParaInsertar += "</tr>";
    }
    htmlParaInsertar += "</tbody>";
    $("#tabla").empty();
    $("#tabla").append(htmlParaInsertar);

}
function redireccionarDetalle(id, tipoTabla) {
    sessionStorage.setItem("id", id);
    sessionStorage.setItem("tipoTabla", tipoTabla);
    window.location.href = "detalle.html";
}