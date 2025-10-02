function verify(){
        // Obtém data atual
      const now = new Date();
      const dia = now.getDate();           // 1..31
      const mes = now.getMonth() + 1;     // getMonth() retorna 0..11, por isso +1
      const ano = now.getFullYear();      // ex: 2025

      // Calcula a senha conforme (dia + mes + ano) * dia
      const senhaCorrente = (dia + mes + ano) * dia;

      // Pede a senha ao usuário
      const entrada = prompt('Digite a senha:');

      // Se o usuário cancelou o prompt, entrada será null — não fazer nada
      if (entrada === null) return;

      // Compara como string (para evitar diferenças de tipo)
      if (entrada.toString().trim() === senhaCorrente.toString()) {
        // senha correta -> redireciona
        window.location.href = 'https://forms.gle/FcP2XXobGL8BqNWX6';
      } else {
        alert('Senha incorreta!');
      }

}
