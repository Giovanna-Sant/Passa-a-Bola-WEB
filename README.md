# 📌 Plataforma Passa a Bola  

A **Plataforma Passa a Bola** foi desenvolvida com o objetivo de oferecer um espaço digital voltado para jogadoras de futebol feminino, permitindo **gestão de perfil, acompanhamento de jogos, calendário de eventos e oportunidades de destaque profissional**.  

Nosso foco é dar visibilidade, organização e facilidade de acesso às jogadoras, criando uma rede de conexões entre atletas, treinadores e olheiros.  

---

## 🚀 Inovações da Plataforma  

- 🎯 **Perfis interativos**: cada jogadora pode criar e editar seu perfil, adicionando informações pessoais, estatísticas e histórico de jogos.  
- 📅 **Calendário dinâmico**: possibilidade de confirmar presença em jogos, campeonatos e encontros, facilitando a organização.  
- ⭐ **Destaque de jogadoras**: área dedicada para atletas com maior desempenho, aumentando a visibilidade.  
- 🛍️ **Loja integrada**: espaço de interação onde as jogadoras podem acessar produtos e recursos exclusivos.  
- 📢 **Comunicados e avisos em tempo real**: mantém todas informadas sobre mudanças, eventos e oportunidades.  
-🤖 **Chatbot**: permite o acesso mais prático e rápido à informações como data de jogos, horário e muito mais.

---

## 🖥 Link para utilização do CHATBOT

https://typebot.co/passa-a-bola-s5yu65e

---

## 🛠️ Tecnologias Utilizadas  

- **React.js** → para a construção de uma interface dinâmica, responsiva e componentizada.  
- **Tailwind CSS** → para estilização moderna e eficiente, garantindo consistência visual e personalização rápida.  
- **Ferramentas de prototipagem** → apoio no design e usabilidade das páginas.  

---

## 📌 Descrição dos pontos de acesso à API

###  Endpoint: Ligas de Futebol

* **URL:** `https://v3.football.api-sports.io/leagues`
* **Método:** `GET`
* **Descrição:** Retorna uma lista de ligas de futebol, com informações como nome da liga, país e logo.
* **Headers obrigatórios:**

  ```http
  "x-apisports-key": "SUA_CHAVE_AQUI"
  ```
* **Exemplo de uso (fetch):**

  ```javascript
  fetch("https://v3.football.api-sports.io/leagues", {
    method: "GET",
    headers: {
      "x-apisports-key": "SUA_CHAVE_AQUI"
    }
  })
    .then(res => res.json())
    .then(data => console.log(data.response));
  ```
* **Parâmetros opcionais:** Nenhum obrigatório para o seu uso atual, mas a API permite filtrar por `id`, `country` ou `season`.

---
## 👥 Nossa Equipe  

O projeto foi desenvolvido pelos estudantes da **FIAP**:  

- Dennis Nieto Generoso – RM563671  
- Giovanna da Silva Santos – RM566301  
- Giovanna Luiza Bento – RM563203  
- Isabella Jardim Marques – RM566470  
- Mayene Moura da Silva – RM564624  

---

## 📖 Conclusão  

A **Plataforma Passa a Bola** representa um passo inovador na criação de ambientes digitais voltados para o futebol feminino, unindo tecnologia, acessibilidade e valorização do esporte.  
Combinamos **design moderno, desenvolvimento ágil e foco na experiência da usuária**, garantindo uma solução prática e escalável.  

---
