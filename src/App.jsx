

import { useState } from 'react'

import heroImg from './assets/hero.png'

import reactLogo from './assets/react.svg'

import viteLogo from './assets/vite.svg'

import './App.css'

function App() {

  return (

    <>

      <header>
        <h2>Dev Systems</h2>

        <nav>
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#aprendizado">Aprendizado</a>
          <a href="#tecnologias">Tecnologias</a>
          <a href="#areas">Mercado</a>
          <a href="#projetos">Projetos</a>
        </nav>
      </header>


      <main>

        {/* HERO */}

        <section id="inicio" className="hero">

          <div className="hero-text">

            <p className="destaque">
              TÉCNICO EM DESENVOLVIMENTO DE SISTEMAS
            </p>

            <h1>
              Transforme ideias em <span>sistemas.</span>
            </h1>

            <p>
              Desenvolva soluções, aprenda novas tecnologias e construa
              seu futuro na área de TI.
            </p>

            <a href="#sobre" className="botao">
              Conheça o curso
            </a>

          </div>

          <img
            src={heroImg}
            alt="Ilustração relacionada à tecnologia"
          />

        </section>


        {/* SOBRE O CURSO */}

        <section id="sobre" className="secao">

          <p className="titulo-pequeno">
            SOBRE O CURSO
          </p>

          <h2>
            Desenvolvimento de Sistemas
          </h2>

          <p className="texto">
            O curso Técnico em Desenvolvimento de Sistemas prepara
            os alunos para criar, desenvolver e manter sistemas e
            aplicações.
          </p>

          <p className="texto">
            O objetivo é aprender programação, desenvolvimento web,
            banco de dados e outras tecnologias utilizadas na área
            de tecnologia.
          </p>

          <p className="texto">
            O profissional dessa área pode desenvolver sistemas,
            aplicativos, sites e soluções para diferentes tipos
            de empresas.
          </p>

        </section>


        {/* O QUE VOCÊ APRENDE */}

        <section id="aprendizado" className="secao fundo">

          <p className="titulo-pequeno">
            APRENDIZADO
          </p>

          <h2>
            O que você aprende?
          </h2>

          <div className="cards">

            <div className="card">
              <h3>Lógica de programação</h3>
              <p>
                Aprenda a criar soluções utilizando lógica e programação.
              </p>
            </div>

            <div className="card">
              <h3>Desenvolvimento Web</h3>
              <p>
                Crie páginas e sistemas para a internet.
              </p>
            </div>

            <div className="card">
              <h3>Frontend</h3>
              <p>
                Desenvolva a parte visual dos sites e sistemas.
              </p>
            </div>

            <div className="card">
              <h3>Backend</h3>
              <p>
                Desenvolva a parte responsável pelo funcionamento dos sistemas.
              </p>
            </div>

            <div className="card">
              <h3>Banco de dados</h3>
              <p>
                Aprenda a armazenar e organizar informações.
              </p>
            </div>

            <div className="card">
              <h3>APIs</h3>
              <p>
                Aprenda como diferentes sistemas podem se comunicar.
              </p>
            </div>

            <div className="card">
              <h3>Aplicativos</h3>
              <p>
                Conheça o desenvolvimento de aplicações.
              </p>
            </div>

            <div className="card">
              <h3>Git e GitHub</h3>
              <p>
                Aprenda a controlar e compartilhar seus projetos.
              </p>
            </div>

          </div>

        </section>


        {/* TECNOLOGIAS */}

        <section id="tecnologias" className="secao">

          <p className="titulo-pequeno">
            TECNOLOGIAS
          </p>

          <h2>
            Tecnologias utilizadas
          </h2>

          <div className="tecnologias">

            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Node.js</span>
            <span>SQL</span>
            <span>Git</span>
            <span>GitHub</span>

          </div>

        </section>


        {/* ÁREAS DE ATUAÇÃO */}

        <section id="areas" className="secao fundo">

          <p className="titulo-pequeno">
            MERCADO DE TRABALHO
          </p>

          <h2>
            Áreas de atuação
          </h2>

          <div className="cards">

            <div className="card">
              <h3>Desenvolvimento Frontend</h3>
              <p>
                Criação da parte visual e interativa dos sistemas.
              </p>
            </div>

            <div className="card">
              <h3>Desenvolvimento Backend</h3>
              <p>
                Desenvolvimento da lógica e funcionamento dos sistemas.
              </p>
            </div>

            <div className="card">
              <h3>Desenvolvimento Full Stack</h3>
              <p>
                Trabalho envolvendo frontend e backend.
              </p>
            </div>

            <div className="card">
              <h3>Desenvolvimento de aplicações</h3>
              <p>
                Criação de aplicativos e soluções digitais.
              </p>
            </div>

            <div className="card">
              <h3>Banco de dados</h3>
              <p>
                Organização e gerenciamento de informações.
              </p>
            </div>

            <div className="card">
              <h3>Suporte e manutenção</h3>
              <p>
                Manutenção e correção de sistemas.
              </p>
            </div>

          </div>

        </section>


        {/* PROJETOS */}

        <section id="projetos" className="secao">

          <p className="titulo-pequeno">
            PROJETOS
          </p>

          <h2>
            Exemplos de projetos
          </h2>

          <div className="projetos">

            <div className="projeto">
              <span>01</span>
              <h3>Sistema de cadastro de clientes</h3>
              <p>
                Sistema para cadastrar e organizar clientes.
              </p>
            </div>

            <div className="projeto">
              <span>02</span>
              <h3>Sistema de estoque</h3>
              <p>
                Sistema para controlar produtos e estoque.
              </p>
            </div>

            <div className="projeto">
              <span>03</span>
              <h3>Aplicação de agendamentos</h3>
              <p>
                Sistema para organizar horários e agendamentos.
              </p>
            </div>

            <div className="projeto">
              <span>04</span>
              <h3>Loja virtual</h3>
              <p>
                Site para apresentar e vender produtos.
              </p>
            </div>

            <div className="projeto">
              <span>05</span>
              <h3>Dashboard administrativo</h3>
              <p>
                Painel para visualizar informações e dados.
              </p>
            </div>

            <div className="projeto">
              <span>06</span>
              <h3>Aplicativo de tarefas</h3>
              <p>
                Aplicação para organizar tarefas do dia a dia.
              </p>
            </div>

          </div>

        </section>


        {/* CHAMADA PARA AÇÃO */}

        <section className="cta">

          <h2>
            Seu futuro na tecnologia pode começar aqui.
          </h2>

          <p>
            Conheça o curso Técnico em Desenvolvimento de Sistemas.
          </p>

          <a href="#inicio" className="botao">
            Começar agora
          </a>

        </section>

      </main>


      {/* RODAPÉ */}

      <footer>

        <h3>
          Técnico em Desenvolvimento de Sistemas
        </h3>

        <p>
          SENAI
        </p>

        <p>
          2026
        </p>

        <p>
          Aluno: Francielly
        </p>

      </footer>

    </>

  )

}

export default App
