// window.onload para o Javascript não rodar antes do html 
window.onload = function()
{
    var binvest = document.getElementById("bInvestimentos");

    binvest.onclick =  function() 
    {
        window.location.href='cadastro.html'
    }

}