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
    
    //submit name
   var nameInput = document.getElementById ('name');
   var name = nameInput.value;
   var submitt = document.getElementById ('submit_btn');
   submit.onclick = function (){
       //Make a request tothr server and send the name
       
       //Capture the list of names and render it as a list
       
       var names =['name1','name2','name3','name4'];
       var list ='';
       for (var i=0; i<names.lenth; i++) {
         list += '<li>' + names[i] + '</li>';
        }
        var ul =document.getElementById('namelist');
        ul.innerHTML = list;
        };