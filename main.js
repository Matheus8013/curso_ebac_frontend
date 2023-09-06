$(document).ready(function() {

    $('form').on('submit' , function(e) {
        e.preventDefault();

        const novaTarefa = $('#nova-tarefa').val();
        const novoItem = $('<li style= "dispaly: none;"></li>');
        $(`<p>${novaTarefa}</p>`).appendTo(novoItem);
        $(`<div class="lista-tarefas"><p>${novaTarefa}</p></div> `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#novaTarefa').val('');
        $('ul').on('click' , 'li' , function(){
            $(this).addClass('feito');
        })
    })
})