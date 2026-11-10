document.addEventListener('DOMContentLoaded', () => {
  const secResultado = document.getElementById('resultado');
  const secSemResultado = document.getElementById('sem-resultado');
  const elemNomeUsuario = document.getElementById('nome-usuario');
  const elemSintese = document.getElementById('sintese');
  const listaCarreiras = document.getElementById('lista-carreiras');
  const modeloCarreira = document.getElementById('modelo-carreira');

  const urlParams = new URLSearchParams(window.location.search);
  const isExemplo = urlParams.has('exemplo');
  const nomeURL = urlParams.get('nome');

  const resultadoAPISalvo = localStorage.getItem('resultadoAPI');
  
  if (isExemplo) {
    renderizarDados(DADOS_EXEMPLO);
    return;
  }

  if (resultadoAPISalvo) {
    try {
      const apiData = JSON.parse(resultadoAPISalvo);
      renderizarDados(apiData);
      return;
    } catch (e) {
      console.error('Erro ao ler resposta da API:', e);
    }
  }

  const perfilSalvo = localStorage.getItem('perfilUsuario');
  let dadosLocal = null;

  if (nomeURL) {
    dadosLocal = {
      nome: decodeURIComponent(nomeURL),
      hobbies: 'desenhar, ilustrar, arte',
      interesses: 'desenho, design, jogos'
    };
  } else if (perfilSalvo) {
    try {
      dadosLocal = JSON.parse(perfilSalvo);
    } catch (e) {
      console.error(e);
    }
  }

  if (!dadosLocal || !dadosLocal.nome) {
    if (secSemResultado) secSemResultado.hidden = false;
    if (secResultado) secResultado.hidden = true;
    return;
  }

  // Executa algoritmo vocacional local estritamente focado no tema do usuário
  const resultadoCalculado = calcularVocacaoLocal(dadosLocal);
  renderizarDados(resultadoCalculado);

  function removerAcentos(str) {
    return str ? str.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase() : "";
  }

  function calcularVocacaoLocal(dados) {
    const textoOriginalHobbies = dados.hobbies || '';
    const textoOriginalInteresses = dados.interesses || '';
    const textoCombinado = removerAcentos(`${textoOriginalHobbies} ${textoOriginalInteresses}`);
    
    // Palavras informadas pelo usuário
    const palavrasUsuario = textoCombinado
      .split(/[\s,.;:\/\-]+/)
      .map(w => w.trim())
      .filter(w => w.length >= 2);

    // Calcular pontuação de match estrito
    const carreirasPontuadas = BANCO_CARREIRAS.map(carreira => {
      let pontos = 0;

      carreira.palavrasChave.forEach(chave => {
        const chaveNorm = removerAcentos(chave);
        
        // Coincidência exata ou de trecho na frase do usuário
        if (textoCombinado.includes(chaveNorm)) {
          pontos += 15;
        }

        // Coincidência por palavra individual
        palavrasUsuario.forEach(pUser => {
          if (pUser === chaveNorm) {
            pontos += 10;
          } else if (pUser.length >= 4 && chaveNorm.length >= 4) {
            if (pUser.includes(chaveNorm) || chaveNorm.includes(pUser)) {
              pontos += 5;
            }
          }
        });
      });

      return { ...carreira, pontos };
    });

    // Filtra para garantir prioridade total às carreiras com pontos > 0
    let carreirasComMatch = carreirasPontuadas.filter(c => c.pontos > 0);

    // Se houver pelo menos 1 match, ordena e utiliza somente as relevantes
    if (carreirasComMatch.length > 0) {
      carreirasComMatch.sort((a, b) => b.pontos - a.pontos);
    } else {
      // Caso genérico fallback
      carreirasComMatch = carreirasPontuadas;
    }

    // Pega as 3 melhores opções (todas pertencentes ao contexto)
    const top3 = carreirasComMatch.slice(0, 3);
    const maiorPontos = top3[0].pontos;

    const recomendadas = top3.map((item, index) => {
      let score = 75;
      if (maiorPontos > 0) {
        // Escala proporcional de 96% a 84% para o Top 3 relevante
        score = Math.round(96 - (index * 5) - Math.random() * 2);
        if (index === 0) score = 96;
      } else {
        score = 82 - (index * 5);
      }

      if (score > 98) score = 98;
      if (score < 65) score = 65;

      return {
        id: item.id,
        title: item.titulo,
        match_score: score,
        summary: item.resumo,
        key_skills: item.competencias,
        learning_path: item.roteiro
      };
    });

    return {
      user_name: dados.nome,
      career_identity_statement: `Com base nas suas preferências em hobbies ("${textoOriginalHobbies}") e áreas de interesse ("${textoOriginalInteresses}"), identificamos seu perfil e destacamos as carreiras em tecnologia e mídias digitais mais compatíveis com você:`,
      recommended_careers: recomendadas
    };
  }

  function renderizarDados(data) {
    if (secSemResultado) secSemResultado.hidden = true;
    if (secResultado) secResultado.hidden = false;

    if (elemNomeUsuario) elemNomeUsuario.textContent = data.user_name || 'Estudante';
    if (elemSintese) elemSintese.textContent = data.career_identity_statement || '';

    listaCarreiras.innerHTML = '';

    const carreiras = data.recommended_careers || data.carreiras || [];
    
    // Ordenar estritamente por maior compatibilidade
    carreiras.sort((a, b) => (b.match_score || parseInt(b.compatibilidade)) - (a.match_score || parseInt(a.compatibilidade)));

    carreiras.forEach((item, index) => {
      const clone = modeloCarreira.content.cloneNode(true);

      const selo = clone.querySelector('.carreira__selo');
      if (selo && index === 0) {
        selo.hidden = false;
      }

      const elTitulo = clone.querySelector('.carreira__titulo');
      if (elTitulo) elTitulo.textContent = item.title || item.titulo;

      const scoreVal = item.match_score !== undefined ? `${item.match_score}%` : (item.compatibilidade || '90%');
      const elPercentual = clone.querySelector('.carreira__percentual');
      if (elPercentual) elPercentual.textContent = scoreVal;

      const elBarra = clone.querySelector('.barra__nivel');
      if (elBarra) elBarra.style.width = scoreVal;

      const elResumo = clone.querySelector('.carreira__resumo');
      if (elResumo) elResumo.textContent = item.summary || item.resumo;

      const elChips = clone.querySelector('.chips');
      const skills = item.key_skills || item.competencias || [];
      if (elChips) {
        skills.forEach(skill => {
          const li = document.createElement('li');
          li.className = 'px-3 py-1 rounded-lg text-xs font-semibold bg-cyan-950/70 text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5 shadow-sm';
          li.innerHTML = `<i class="fa-solid fa-check text-[10px] text-cyan-400"></i> ${skill}`;
          elChips.appendChild(li);
        });
      }

      const elRoteiro = clone.querySelector('.roteiro');
      const passos = item.learning_path || item.roteiro || [];
      if (elRoteiro) {
        passos.forEach((passo, idx) => {
          const li = document.createElement('li');
          li.className = 'roteiro-item relative text-slate-300 pl-2';
          li.innerHTML = `<strong class="text-white font-semibold">Passo ${idx + 1}:</strong> ${passo}`;
          elRoteiro.appendChild(li);
        });
      }

      listaCarreiras.appendChild(clone);
    });
  }
});
