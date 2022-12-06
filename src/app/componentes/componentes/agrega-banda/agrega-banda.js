var Id_Banda;
var NombreBanda;
var Ciudad;
var Fecha;
var Link;

function guardaDatos()
{
    NombreBanda = document.getElementById("TextBoxNombreBanda").value;
    Ciudad = document.getElementById("FormControlEstado").value;
    Fecha = document.getElementById("date").value;
    Link = document.getElementById("TextBoxLink").value;

    console.log(NombreBanda);
    console.log(Ciudad);
    console.log(Fecha);
    console.log(Link);
}