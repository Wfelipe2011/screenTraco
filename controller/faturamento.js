import { service } from '../service/index.js'
import { screen } from "../screen/index.js";

export const FaturamentoComponent = () => {

  screen.getSpinner()
  setTimeout(() => {
    screen.getFaturamentoHtml();
    const objetoFaturamento = [];
    service.getActivities().then((dados) => {
      dados.forEach((element) => {
        if (element.price !== null) {
          objetoFaturamento.push(element);
        }
      });
      gerarObjetoDatas()
      filtrarObjetoDatas()
      gerarFaturamento(datasFiltradas)
    });

    const datasBrutas = []
    const gerarObjetoDatas = () => {
      objetoFaturamento.forEach((element) => {
        datasBrutas.push({ dia: dataConvert(element.checkout_at).dia, mes: stringMes(dataConvert(element.checkout_at).mes) })
      });
    }

    const stringMes = (mes) => {
      const mesEmString = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
      return mesEmString[mes]
    }

    const datasFiltradas = []
    const filtrarObjetoDatas = () => {
      datasBrutas.forEach(item => {
        var duplicate = datasFiltradas.findIndex(reditem => {
          return item.dia == reditem.dia
        }) > -1
        if (!duplicate) {
          datasFiltradas.push(item)
        }
      })
    }

    const dataConvert = (objetoFaturamento) => {
      const data = {
        dia: new Date(objetoFaturamento).getDate(),
        mes: new Date(objetoFaturamento).getMonth()
      }
      return data
    }

    const gerarFaturamento = (datasFiltradas) => {
      let total = 0;
      let contador = 0;

      objetoFaturamento.forEach((valor) => {
        if (typeof valor.price == "number") {
          contador++;
          total += valor.price;
        }
      });
      criarNovaLinha(contador, total);
      criarOpçoes(datasFiltradas)
    }

    const criarOpçoes = (datas) => {
      datas.reverse()
      const select = document.getElementById("datas");
      datas.forEach((element) => {
        const option = new Option(`${element.dia}/${element.mes}`, element.dia);
        select.add(option);
      });
    }

    const tabela = document.getElementById("tbody");
    function criarNovaLinha(qtd, total) {
      const linhaNovo = document.createElement("tr");
      const conteudo = `
      <td id="qtd">${qtd}</td>
      <td id="total">R$ ${total.toFixed(2)}</td> 
      <td><select id="datas"></select></td>
`;
      linhaNovo.innerHTML = conteudo;
      renderGrafico()
      return tabela.appendChild(linhaNovo);
    }

    tabela.addEventListener('click', (event) => {
      if (event.path[0].id == 'datas') {
        filtrarPorData(event)
      }
    })

    const filtrarPorData = (event) => {
      let total = 0;
      let contador = 0;
      const dia = +event.path[0].value
      objetoFaturamento.forEach((item) => {
        if (dataConvert(item.checkout_at).dia === dia) {
          if (typeof (item.price) == "number") {
            contador++;
            total += item.price;
          }
        }
      })
      atualizarLinha(contador, total)
    }

    const atualizarLinha = (qtd, total) => {
      document.getElementById('qtd').innerText = qtd
      document.getElementById('total').innerText = `R$ ${total.toFixed(2)}`
    }


    let PieChartArray = [['Faturamento', 'Por dia']]

    const filtrarTodasData = (arraydias) => {
      let total = 0;
      arraydias.forEach(obj => {
        total = 0
        objetoFaturamento.forEach((item) => {
          if (dataConvert(item.checkout_at).dia === obj.dia) {
            if (typeof (item.price) == "number") {
              total += item.price;
            }
          }
        })

        PieChartArray.push([`${obj.dia}/${obj.mes}`, +total.toFixed(2)])
      })
    }

    function renderGrafico() {
      google.charts.load('current', { 'packages': ['corechart'] });
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        filtrarTodasData(datasFiltradas)


        var data = google.visualization.arrayToDataTable(PieChartArray);

        var options = {
          is3D: true
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));

        chart.draw(data, options);
      }
    }
  }, 600)


}

