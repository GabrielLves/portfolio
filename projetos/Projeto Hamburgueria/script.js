function exibirPedido() {
  let pedido1 = parseFloat(document.getElementById("pedido1").value) || 0;
  let pedido2 = parseFloat(document.getElementById("pedido2").value) || 0;
  let pedido3 = parseFloat(document.getElementById("pedido3").value) || 0;
  let pedido4 = parseFloat(document.getElementById("pedido4").value) || 0;
  let pedido5 = parseFloat(document.getElementById("pedido5").value) || 0;
  let pedido6 = parseFloat(document.getElementById("pedido6").value) || 0;
  let pedido7 = parseFloat(document.getElementById("pedido7").value) || 0;
  let pedido8 = parseFloat(document.getElementById("pedido8").value) || 0;

  let total = pedido1 * 25 + pedido2 * 20 + pedido3 * 15 + pedido4 * 45 + pedido5 * 60 + pedido6 * 27 + pedido7 * 30 + pedido8 * 7;

  let mensagem = 'Seu pedido foi:';

  if (pedido1 > 0) {
    mensagem += ` ${pedido1} X Picanha,`;
  }

  if (pedido2 > 0) {
    mensagem += ` ${pedido2} X Bacon,`;
  }

  if (pedido3 > 0) {
    mensagem += ` ${pedido3} X Salada,`;
  }

  if (pedido4 > 0) {
    mensagem += ` ${pedido4} 2x Picanha,`;
  }

  if (pedido5 > 0) {
    mensagem += ` ${pedido5} 3x Picanha,`;
  }

  if (pedido6 > 0) {
    mensagem += ` ${pedido6} X Picanha + Batata Frita,`;
  }

  if (pedido7 > 0) {
    mensagem += ` ${pedido7} X Picanha + Coxinha,`;
  }

  if (pedido8 > 0) {
    mensagem += ` ${pedido8} Coxinha de Frango,`;
  }

  mensagem = mensagem.replace(/,+$/, '');

  mensagem += ` O valor total é R$${total.toFixed(2)}.`;

  window.open(`pagina-de-obrigado.html?mensagem=${mensagem}`, '_blank');
}
