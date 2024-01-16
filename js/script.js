$(document).ready(function () {
$('#carrossel-imagens').slick({
        autoplay:true,
    })
    $('.menu-hamburguer').click(function () { 
        $('nav').slideToggle();
        
    });

    $('#telefone').mask('(00)00000-0000',{
        placeholder: '(00)00000-0000'   
    });
    $('form').validate({
        rules:{
            nome: {
                required: true
            },
            email :{
                required: true,
                email: true
            },
            telefone: {
                required: true
            }

        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            email: 'Campo Obrigatório',
            telefone:'Campo Obrigatório'
        },
        submitHandler: function(form){
            
        },
        invalidHandler: function(evento,validador ){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){
                alert('Por favor, preencha os campos')
            }
        }
    })

    $('.lista-veiculos button').click(function(){
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text()

        $('#veiculo-interesse').val(nomeVeiculo)

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
    
});