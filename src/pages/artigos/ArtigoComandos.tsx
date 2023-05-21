export default function ArtigoComandos() {
  return (
    <>
      <section>
        <h2>Comandos mais importantes do Linux</h2>

        <h3>1°. Comando: ls</h3>
        <p>
          Possivelmente um dos primeiros comandos a ser usado quando se abre o
          terminal, permite que você liste o que tem no diretório em que se
          encontra. Porém esse comando tem algumas variações, como:
          <ul>
            <li>
              ls -l: mostra a lista de diretório com as permissões, tamanho,
              data de modificação, etc.
            </li>
            <li>
              ls -t: ordena arquivos e diretórios por data de modificação, do
              mais recente para o mais antigo.
            </li>
            <li>
              ls -a: lista todos os arquivos, incluindo os ocultos, que começam
              com (.), que são ocultos no Linux.
            </li>
          </ul>
          Lembrando que essas são apenas algumas variações comuns do comando,
          você pode usar o comando “man ls“ para obter mais opções e informações
          completas sobre cada uma.
        </p>
      </section>
      <section>
        <h3>2°. Comando: pwd</h3>

        <p>
          Produz o caminho absoluto do diretório em que você está. Por exemplo:
          se o nome do seu usuário é Cebolinha e você está no diretório de
          documentos, o caminho seria: /home/Cebolinha/Documentos.
        </p>
      </section>
      <section>
        <h3>3° Comando: cd</h3>

        <p>
          É tão popular quanto o comando ls, permite que você mude de diretório.
          Por exemplo: se você está no diretório Documentos e quer ir para um
          subpasta chamada Projetos, basta digitar “ cd Projetos “. Neste mesmo
          comando existem alguns truques podem facilitar a sua experiencia
          usando o Linux, como:
          <ul>
            <li>cd: vai direto para a pasta home.</li>
            <li>
              cd ..: vai para o diretório anterior ao qual você se encontra.
              Exemplo: se estiver na pasta Projetos, você volta para o diretório
              Documentos.
            </li>
          </ul>
        </p>
      </section>
      <section>
        <h3>4° Comando: cp</h3>

        <p>
          É usado para copiar arquivos e diretórios. Exemplo: “cp arquivo.txt
          diretório/”, para copiar vários arquivos “cp arquivo1.txt aquivo2.txt
          diretório/”.
        </p>
      </section>
      <section>
        <h3>5° Comando: rm</h3>

        <p>
          É usado para remover arquivos e diretórios. Exemplo: “rm arquivo.txt“,
          removerá o arquivo do diretório atual, “rm arquivo1.txt arquivo2.txt“,
          para remover vários arquivos ao mesmo tempo.
        </p>

        <p>
          Esse comando também tem algumas variações, como:
          <ul>
            <li>
              rm -r: remove todos os arquivos e subdiretórios dentro do
              diretório.
            </li>
            <li>rmdir: remove o diretório, desde que esteja vazio.</li>
          </ul>
          Sempre tome cuidado, pois é quase impossível de recuperar um arquivo
          removido.
        </p>
      </section>
      <section>
        <h3>6° Comando: mv</h3>

        <p>
          É usado para mover ou renomear arquivos e diretórios, exemplo: “ mv
          arquivo.txt diretório/ “, moverá para o diretório desejado, “ mv
          arquivo1.txt arquivo2.txt diretório/ “, para mover vários arquivos ao
          mesmo tempo.
        </p>
        <p>
          Para renomear basta escrever o arquivo que você deseja renomear e o
          novo nome, exemplo: “ mv arquivo1.txt arquivo_novo.txt “.
        </p>
        <p>
          Você também pode mover um diretório e todo o seu conteúdo, só precisa
          digitar o diretório de origem e o destino. A / significa que você quer
          mover o conteúdo junto, exemplo: “ mv diretórioOrigem/
          diretórioDestino/ “. Também é possível mover e renomear ao mesmo
          tempo, exemplo: “ mv arquivo.txt diretório/ novo_arquivo.txt “.
        </p>
      </section>
      <section>
        <h3>7° Comando: mkdir</h3>

        <p>
          Permite que você crie diretórios, exemplo: “ mkdir Trabalhos “, também
          pode ser criado mais de um ao mesmo tempo, “ mkdir
          Trabalhos_sistemas_operacionais Trabalhos_WEB_Ux ”.
        </p>
      </section>
      <section>
        <h3>8° Comando: clear</h3>

        <p>
          Limpa a tela do terminal, após isso você terá uma tela limpa e pronta
          para executar novos comando. Não altera nada do que foi feito
          anteriormente.
        </p>
      </section>
      <section>
        <h3>9° Comando: exit</h3>

        <p>É usado para sair da sessão atual do Terminal.</p>
      </section>
      <section>
        <h3>10° Comando: cat</h3>

        <p>
          Serve para mostrar o conteúdo de um arquivo, exemplo: “ cat
          arquivo.txt “ será exibido na sequencia em que está no arquivo, “ cat
          arquivo1.txt arquivo2.txt “ exibirá o conteúdo de mais de um arquivo
          consecutivamente.
        </p>
      </section>
      <section>
        <h3>11° Comando: date</h3>

        <p>Basta digitar isso e aparecerá a data e o horário local.</p>
      </section>
      <section>
        <h3>12° Comando: man</h3>

        <p>
          Abre o manual de um comando especifico ou de uma página de manual,
          exemplo: “ man {"<comando>"} “ abrirá o manual do comando que você
          digitou ou “man man “ que abrirá a página do manual.
        </p>
        <p>Vale lembrar que alguns comandos não tem manual.</p>
      </section>
    </>
  )
}
