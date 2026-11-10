document.addEventListener('DOMContentLoaded', () => {
  const formPerfil = document.getElementById('form-perfil');
  const modalAviso = document.getElementById('modal-aviso');
  const btnSubmit = document.getElementById('btn-submit');
  const btnTexto = document.getElementById('btn-texto');
  const btnIcone = document.getElementById('btn-icone');

  const inputNome = document.getElementById('nome');
  const textareaHobbies = document.getElementById('hobbies');
  const textareaInteresses = document.getElementById('interesses');

  const erroNome = document.getElementById('erro-nome');
  const erroHobbies = document.getElementById('erro-hobbies');
  const erroInteresses = document.getElementById('erro-interesses');

  if (formPerfil) {
    formPerfil.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (erroNome) erroNome.classList.add('hidden');
      if (erroHobbies) erroHobbies.classList.add('hidden');
      if (erroInteresses) erroInteresses.classList.add('hidden');

      const nomeVal = inputNome.value.trim();
      const hobbiesLista = textareaHobbies.value
        .split(',')
        .map(h => h.trim())
        .filter(h => h.length > 0);

      const interessesLista = textareaInteresses.value
        .split(',')
        .map(i => i.trim())
        .filter(i => i.length > 0);

      let temErro = false;

      if (!nomeVal || nomeVal.length < 2 || nomeVal.length > 60) {
        if (erroNome) erroNome.classList.remove('hidden');
        temErro = true;
      }

      if (hobbiesLista.length === 0) {
        if (erroHobbies) erroHobbies.classList.remove('hidden');
        temErro = true;
      }

      if (interessesLista.length === 0) {
        if (erroInteresses) erroInteresses.classList.remove('hidden');
        temErro = true;
      }

      if (temErro) return;

      const payload = {
        name: nomeVal,
        hobbies: hobbiesLista,
        interests: interessesLista
      };

      if (CONFIG.API_URL && CONFIG.API_URL.trim() !== '') {
        btnSubmit.disabled = true;
        btnTexto.textContent = 'Analisando perfil...';
        btnIcone.className = 'fa-solid fa-spinner animate-spin';

        try {
          const response = await fetch(CONFIG.API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });

          if (!response.ok) throw new Error('Erro na resposta da API');

          const resultadoAPI = await response.json();
          localStorage.setItem('resultadoAPI', JSON.stringify(resultadoAPI));
          localStorage.setItem('perfilUsuario', JSON.stringify({
            nome: payload.name,
            hobbies: payload.hobbies.join(', '),
            interesses: payload.interests.join(', ')
          }));

          window.location.href = 'resultado.html';
        } catch (err) {
          console.error('Falha ao conectar à API:', err);
          if (modalAviso) modalAviso.showModal();
        } finally {
          btnSubmit.disabled = false;
          btnTexto.textContent = 'Descobrir minha carreira';
          btnIcone.className = 'fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform';
        }
      } else {
        localStorage.setItem('perfilUsuario', JSON.stringify({
          nome: payload.name,
          hobbies: payload.hobbies.join(', '),
          interesses: payload.interests.join(', ')
        }));
        localStorage.removeItem('resultadoAPI');

        window.location.href = 'resultado.html';
      }
    });
  }
});
