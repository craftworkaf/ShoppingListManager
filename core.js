var taskuri = [

{name:'walk the cat', completed : false},

{name:'play golf', completed : true},

{name:'pay bills', completed : true},

]

/**
 * 
 * @param {*} name 
 * @param {*} completed 
 */
function templ(name,index){

   return `<p data-index=${index}> ${name}  </p>`  ;

}

function showTasks(t, target, status=true){

    $(target).html('')

    

    // {name:'walk the cat', completed : false},
    
    for( i=0; i<t.length; i++){
        var el  =  t[i];

        if(el.completed==status){
            $(target).append( templ(el.name, i) );
        }
        
    
    }

   var x = taskuri.filter(function(m){

        return m.completed == status

    })

    $(target).parent().find('span').text(x.length)


}



$(document).ready(function(){

    $('body').on( 'click','p',function(){
        

        var index = $(this).attr('data-index')
        
        // taskuri[index].completed = true;


        if(taskuri[index].completed == true){

            taskuri[index].completed = false

        }else{

            taskuri[index].completed = true
        }


        showTasks(taskuri, '.tasks', false) 
        showTasks(taskuri, '.completedTasks',true)
        
    })



    showTasks(taskuri, '.tasks', false) 
    showTasks(taskuri, '.completedTasks',true)

    $('#input').keypress(function(event){
        if ( event.keyCode==13 ){
            $('#add').trigger('click')
        }
    })

    $('#add').click(function(){
        
        if( $('#input').val() != '' ){

            //create new object if the value is not empty
            var taskName =  {
                    name : $('#input').val(),
                    completed : false
                }

                //add tasks to tasks array
                taskuri.push(taskName)

                //refresh the tasks container
                showTasks(taskuri, '.tasks',false)

                //clear the input 
                $('#input').val('')

                //focus the input 
                $('#input').focus()


            }else{

                //advise the user 
                $('#input').css({borderColor : ' red'})

                //focus the input 
                $('#input').focus()
            }
    })
    

    $('#input').focus()  //focus the input 

})












    
