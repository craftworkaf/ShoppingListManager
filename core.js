var taskuri = [
{name:'walk the cat', completed : false},
{name:'play golf', completed : true},
{name:'pay bills', completed : true},
]


// var tx = 'hello'

// var template = `<p>${tx}</p>`;
   
    // $('.tasks').html(template);

/**
 * 
 * @param {*} name 
 * @param {*} completed 
 */

function templ(name,completed,status=0){

    if (status==0){

        var x =  `<p>${name}<p>`;
        return completed==false? x : '';



    }else{

            var x =  `<p>${name}<p>`;
            return completed==true? x : '';

        }


}


function showTasks(t, target){

    $(target).html(''); // clear tasks container content


        //loop through tasks and add values to the container


    for(i=0; i<t.length; i++){
        var el=t[i];
        // document.getElementById('para').innerHTML = `<p></p>`;
        // if (el.completed != true){
        $(target).append(templ(el.name,el.completed, 0));

        // localStorage.setItem(el.name, el.completed);
        // }
    }

}

    $(document).ready(function(){

        $('.tasks').on('click','p', function() {
            $(this).css({color: 'red'});
        })


        
        $('#input').focus();  //focus the input

               
        showTasks(taskuri,'.tasks');  //show tasks


        $('#input').keypress(function(event){
            if(event.keyCode==13){
                $('#add').trigger('click')
            }
        })


        $('#add').click(function(){

             if ($('#input').val() != '' ){ 

            // create new object if the value is not empty


            
                 //create a new task object
               var taskName =   {
                    name : $('#input').val(),
                    completed : false
                }
                // var taskName = $('#input').val(); 
                // console.log(taskName);


                //add tasks to tasks array

                taskuri.push(taskName);

                //refresh the tasks container

                showTasks(taskuri, '.tasks');

                //clear input

                $('#input').val('');
                $('#input').focus();
            }else {
                    $('#input').css({border: '1px solid red'});
                    $('#input').focus();
                }  
            })
        
        
    
    })








    ///local storage



    // localStorage.setItem('name','yes')  
    // (name and value)




















    
