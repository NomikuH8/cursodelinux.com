export default function ArtigoAplicativos() {
  return (
    <>
      <section>
        <h2>Como instalar aplicativos no Arch Linux</h2>

        <p>
          Aqui vamos aprofundar nossos conhecimentos em Pacman, o package
          manager oficial do Arch Linux.
        </p>

        <p>
          Aqui vai uma lista de opções que vamos destrinchar nesse artigo:
          <ul>
            <li>
              <pre>pacman -S</pre>
            </li>
            <li>
              <pre>pacman -Ss</pre>
            </li>
            <li>
              <pre>pacman -Syu</pre>
            </li>
            <li>
              <pre>pacman -Q</pre>
            </li>
            <li>
              <pre>pacman -R</pre>
            </li>
          </ul>
        </p>
      </section>
      <section>
        <h2>
          <pre>pacman -S</pre>
        </h2>

        <p>
          Este comando serve para instalar aplicativos no seu sistema.
          Geralmente o mesmo é combinado com -y para que atualize os links de
          repositório.
        </p>

        <span>Exemplo:</span>
        <blockquote>
          <pre>pacman -S firefox</pre>
          <pre>pacman -S libreoffice</pre>
          <pre>pacman -S discord</pre>
        </blockquote>
      </section>
      <section>
        <h2>
          <pre>pacman -Ss</pre>
        </h2>

        <p>
          Este comando serve para pesquisar aplicativos no banco de dados. Se
          existe, ele retornará programas com a sua pesquisa.
        </p>

        <span>Exemplo:</span>
        <blockquote>
          <pre>pacman -Ss python</pre>
          <pre>pacman -Ss ubuntu</pre>
          <pre>pacman -Ss audacity</pre>
        </blockquote>
      </section>
      <section>
        <h2>
          <pre>pacman -Syu</pre>
        </h2>

        <p>Com este comando, você pode atualizar seu sistema por completo.</p>

        <span>Exemplo:</span>
        <blockquote>
          <pre>pacman -Syu</pre>
        </blockquote>
      </section>
      <section>
        <h2>
          <pre>pacman -Q</pre>
        </h2>

        <p>
          Através deste comando é possível ver a versão do que está instalado,
          seja apenas 1 programa, sejam todos os pacotes instalados.
        </p>

        <span>Exemplo:</span>
        <blockquote>
          <pre>pacman -Q</pre>
          <pre>pacman -Q firefox</pre>
          <pre>pacman -Q libreoffice</pre>
        </blockquote>
      </section>
      <section>
        <h2>
          <pre>pacman -R</pre>
        </h2>

        <p>
          Por este comando você pode remover pacotes instalados, ou seja,
          desinstalar programas.
        </p>

        <span>Exemplo:</span>
        <blockquote>
          <pre>pacman -R firefox</pre>
          <pre>pacman -R libreoffice</pre>
        </blockquote>
      </section>
      <section>
        <p>Através desses comandos, você pode dominar o Arch Linux.</p>
      </section>
    </>
  )
}
