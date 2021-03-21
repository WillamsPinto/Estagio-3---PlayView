<!DOCTYPE html>
<html lang="pt-br">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="https://necolas.github.io/normalize.css/4.1.1/normalize.css">
        <link rel="stylesheet" type="text/css" href="css/style.css" media="screen" />


        <!--------------------- Bootstrap ---------------------------->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

        <!------------------------------ JQuery -------------------------------->
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
            integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
            crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
            integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
            crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
            integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
            crossorigin="anonymous"></script>

        <title>PlayView</title>
    </head>
    <body>
        <header >
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="topo">
                <a class="navbar-brand" href="index.html" style="font-family: bangers; font-size: 180%; padding-bottom:0px ;">
                    PlayView
                </a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
              
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul id ='interna' class="topnav d-flex d-flex d-flex justify-content-around"  style = "background: #343a40" >
                        <li ><a href="cursos.html">Cursos</a></li>
                        <li ><a href="sobre.html">Sobre</a></li>                        
                        <li ><a href="#contato">Contato </a></li>
                    </ul>
                </div>
            </nav>
        </header>

        <div id="conteudo">
            <table align="center">
                <ul style="list-style-type: none;">
                    <td  id = "img_login" >
                        <img src="./img/capa.png">
                    </td>
                    
                    <td>
                        <fieldset>
                            <table cellspacing="10" >
                                <tr>
                                    <td>Login: </td>
                                    <td align="left">
                                        <input type ="text" name="CPFLogin"  maxlength="10" placeholder="CPF" required="required" >
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td>Senha: </td>
                                    <td align="left">
                                        <input type ="password" name="senha"  maxlength="10" placeholder="******" required="required">
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td></td>
                                    <td>
                                        <table cellspacing="3" ALIGN = "right" >
                                            <td>
                                                <form action="" method="post">
                                                    <input type="submit" name="submit" value="Entrar">
                                                </form>
                                            </td>
                                            
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            
                            <form action="cadastro.html" method="get">
                                <input  type="submit" value="Cadastrar">
                            </form>					
                        </fieldset>
                        
                        </td></tr>
                </ul>
                </table>

                <br>
        </div>
    </body>
</html>