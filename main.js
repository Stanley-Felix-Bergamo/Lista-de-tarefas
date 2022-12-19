$(document).ready(function () {
    cadastrarTarefa();
});




function cadastrarTarefa() {
    $('#btn').click(function (e) {
        e.preventDefault();

        const tarefa = $('#tarefa').val();
        const novaTarefa = $(`<li>${tarefa}</li>`);

        $(novaTarefa).appendTo('ul');

        $('li').click(function () {
            $(this).addClass('riscarTexto');
        });


        $('#tarefa').val('');
    });
};

