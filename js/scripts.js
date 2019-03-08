// UI logic.

$(document).ready(function () {

    var routes = ["juja", "mombasa", "waiyaki", "jogoo", "ngong", "kiambu", "thika"];

        routes[0]= ["Eastleigh", "Jonsaga", "Kariobangi", "Babadogo"];
        routes[1]= ["Rasasi", "City hoppa", "Indima nje", "Nyayo" ];
        routes[2]= ["Star Bus", "Super Metro", "Metro", "Latema"];
        routes[3]= ["Umoinner", "Embasava", "Donni", "Pipepline" ];
        routes[4]= ["Rukangu", "Citi Hoppa", "KBS", "Nangiks"];
        routes[5]= ["Banana", "Ruaka", "BHM", "Lopha Travels"];
        routes[6]= ["Nakaski", "Kenya Mpya", "Manchester", "Rukagina"];
        $("#Juja").click(function(){
          $("#show").text(routes[0])
        
        });
        $("#Mombasa").click(function(){
            $("#show").text(routes[1])
          
          })
          $("#Waiyaki").click(function(){
            $("#show").text(routes[2])
          
          })
          $("#Jogoo").click(function(){
            $("#show").text(routes[3])
          
          })
          $("#Ngong").click(function(){
            $("#show").text(routes[4])
          
          })
          $("#Kiambu").click(function(){
            $("#show").text(routes[5])
          
          })
          $("#Thika").click(function(){
            $("#show").text(routes[6])
          
          })
  
