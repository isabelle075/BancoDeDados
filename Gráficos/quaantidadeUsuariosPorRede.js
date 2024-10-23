async function quantidadeUsuariosPorRede() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json&#39';
    const res = await fetch (url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados);
    
    const data = [
        {
            x: nomeDasRedes,
            y: quantidadeDeUsuarios,
            type: 'bar'
        }
    ]
    
    const layout = {
  
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title:{
            text: 'Redes socias com mais usuarios',
            x: 0,
            font: {
                color:getCSS(--primary-color),
                size: 30,
                font: getCSS('--font')
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Nome das redes',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
              text: 'Bilhões de usuários ativos',
              font: {
                  color: getCSS('--secondary-color')
              }
            }
          }
    }

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Ploty.newPlot(grafico,data,layout)
    
    }
    
    quantidadeUsuariosPorRede();
