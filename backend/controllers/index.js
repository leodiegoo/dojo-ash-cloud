"use strict";

const {
  addAeroportos,
  addNuvens,
  criarMapa,
  resolverProblema
} = require("../util/index");

const Grid = require("../models/grid/index");

module.exports = function (router) {
  router.get("/", function (req, res) {
    let {
      nuvens = Grid.minimoNuvens,
      aeroportos = Grid.minimoAeroportos,
      linhas = Grid.minimoLinhas,
      colunas = Grid.minimoColunas
    } = req.query;

    nuvens = nuvens || Grid.minimoNuvens;
    aeroportos = aeroportos || Grid.minimoAeroportos;
    linhas = linhas || Grid.minimoLinhas;
    colunas = colunas || Grid.minimoColunas;

    console.log(linhas);

    let map = criarMapa(linhas, colunas);
    map = addAeroportos(linhas, colunas, aeroportos, map);
    map = addNuvens(linhas, colunas, nuvens, map);

    let resultados = resolverProblema(linhas, colunas, aeroportos, map);

    res.json(
      new Grid(
        linhas,
        colunas,
        resultados.diasPrimeiroAeroporto,
        resultados.diasTodosAeroportos,
        resultados.map
      )
    );
  });
};
