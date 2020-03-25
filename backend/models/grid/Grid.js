'use scrict';
class Grid {
    static get minimoNuvens() {
        return 4;
    }
    static get minimoAeroportos() {
        return 3;
    }
    static get minimoColunas() {
        return 10;
    }
    static get minimoLinhas() {
        return 10;
    }

    constructor(
        linhas,
        colunas,
        diasPrimeiroAeroporto,
        diasTodosAeroportos,
        mapa
    ) {
        this.linhas = linhas;
        this.colunas = colunas;
        this.diasPrimeiroAeroporto = diasPrimeiroAeroporto;
        this.diasTodosAeroportos = diasTodosAeroportos;
        this.mapa = mapa;
    }
}

module.exports = Grid;
