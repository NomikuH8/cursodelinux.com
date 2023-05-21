import image1 from "../../assets/artigos/endeavouros/1.png"
import image2 from "../../assets/artigos/endeavouros/2.png"
import image3 from "../../assets/artigos/endeavouros/3.png"
import image4 from "../../assets/artigos/endeavouros/4.png"
import image5 from "../../assets/artigos/endeavouros/5.png"
import image6 from "../../assets/artigos/endeavouros/6.png"
import image7 from "../../assets/artigos/endeavouros/7.png"

export default function ArtigoEndeavour() {
  return (
    <>
      <section>
        <h2>Como instalar EndeavourOS 2023</h2>

        <p>
          Não é à toa que EndeavourOS é uma das distros mais populares no{" "}
          <a
            href="https://reddit.com/r/unixporn"
            target="_blank"
            referrerPolicy="no-referrer">
            UnixPorn
          </a>
          , essa distro oferece muitas opções de customização na hora de
          instalar, além de ser baseado no Arch Linux.
        </p>

        <p>
          Há algumas coisas que você precisa saber antes de instalar o
          EndeavourOS:
        </p>
        <ol>
          <li>
            É uma distro baseada em Arch, isso significa que seus conhecimentos
            com Ubuntu (baseado em Debian) não são de grande valor, mas serão
            necessários para aprender essa nova base.
          </li>
          <li>
            O <i>package manager</i> utilizado é o <i>pacman</i>, mas nós
            utilizaremos um Wrapper dele, o <i>yay</i>.
          </li>
          <li>
            É bom você entender sobre sabores de Linux, pois essa distro oferece
            vários para sua escolha.
          </li>
        </ol>
        <p>Com esses avisos, vamos seguir em frente.</p>
      </section>
      <section>
        <h1>Guia de instalação</h1>

        <p>
          Irei fazer a instalação numa máquina virtual, caso deseja instalar em
          hardware real, os passos são outros
        </p>

        <p>
          Primeiro, precisamos da ISO do sistema, para isso, vamos ao site
          deles:{" "}
          <a
            href="https://endeavouros.com/"
            target="_blank"
            referrerPolicy="no-referrer">
            endeavouros.com
          </a>
        </p>

        <img src={image1} alt="" />

        <p>
          Lá embaixo, baixe a ISO a partir do Github, pois é o único que suporta
          o mundo todo
        </p>

        <img src={image2} alt="" />

        <p>
          Depois de baixar, abra seu VirtualBox, crie uma nova máquina com suas
          preferências, coloque a ISO na máquina e a inicie
        </p>

        <img src={image3} alt="" />

        <p>Quando iniciar, você será apresentado à essa tela:</p>

        <img src={image4} alt="" />

        <p>
          Aqui você precisa decidir: instalação padrão ou instalar edições da
          comunidade. A instalação padrão oferece:
          <ul>
            <li>Nenhum desktop</li>
            <li>XFCE</li>
            <li>i3-wm</li>
            <li>Plasma KDE</li>
            <li>GNOME</li>
            <li>Cinnamon</li>
            <li>Mate</li>
            <li>Budgie</li>
            <li>LXDE</li>
            <li>LXQT</li>
          </ul>
          A instalação de edições da comunidade oferece:
          <ul>
            <li>BSPWM</li>
            <li>Openbox</li>
            <li>Qtile</li>
            <li>Sway</li>
            <li>Worm</li>
          </ul>
          Vai de você decidir qual desses sabores deseja. Para o tutorial,
          seguirei com o Budgie na instalação padrão.
        </p>

        <p>
          Instalar EndeavourOS é bem direto, então seguirei à seção de
          Bootloader
        </p>

        <p>
          Na seção de Bootloader, selecione GRUB, assim ele pode detectar outros
          sistemas, escolher entre eles e entre outras funções
        </p>

        <img src={image5} alt="" />

        <p>
          Nas partições selecionarei Apagar disco (não se preocupe, seus dados
          estão seguros) e colocarei swap sem hibernação
        </p>

        <img src={image6} alt="" />

        <p>Após isso, só configurar seu usuário e instalar</p>

        <p>
          Após a instalação, nessa tela, é só reiniciar e você estará no
          EndeavourOS. Parabéns, você conseguiu instalar EndeavourOS!
        </p>

        <img src={image7} alt="" />
      </section>
    </>
  )
}
