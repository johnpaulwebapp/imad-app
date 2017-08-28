//Counter Code
var button = document.getElementById('counter');

button.onclick= function () {
    
    // Create a request object
    var request = new XMLHttpRequest();
    
    // Capture the response and store it in a varibale
    request.onreadystatechange = function (){
        if (request.readystate ===XMLHttpRequest.Done) {
            // Take some action
            if (request.status=== 200) {
                var counter = request.responseText;
               var span = document.getElementById('count');
               span.innerHTML = counter.toString();
            }
             else { alert('There was a problem with the request.'); 
                 
             }
        }
            // Not done Yet
};
    // Make the request
        request.open('GET',' http://johnpaulmsit.imad.hasura-app.io/counter',true);
        request.send(null);
    };
    