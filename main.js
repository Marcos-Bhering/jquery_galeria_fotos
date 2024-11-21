$(document).ready(function () {
  $('header button').click(function () {
    $('form').slideDown();
  })

  $('#botao-cancelar').click(function () {
    $('form').slideUp();
  })

  $('form').on('submit', function (e) {
    e.preventDefault();
    const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
    const novoItem = $('<li style="display: none"></li>');
    $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem); /*isso vai servir para colocar o novo item dentro do <li>*/
    $(`
        <div class="overlay-imagem-link">
          <a href="${enderecoDaNovaImagem}" target="_blank" title="ver imagem em tamanho real">
          Ver imagem em tamanho real
          </a>
        </div>
      `).appendTo(novoItem);
    $(novoItem).appendTo('ul');
    $(novoItem).fadeIn(3000);/* essa e uma animação 3000 significa 3sg */
    $('#endereco-imagem-nova').val('')/* serve para limpar o campo depois de preenchido*/
  })
})