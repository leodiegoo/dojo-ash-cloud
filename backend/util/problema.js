'use strict';

const Point = require('../models/point/Point');

function resolverProblema(linhas, colunas, aeroportos, map) {
    let totalAeroportosAbertos = 1;
    let diasPrimeiroAeroporto = 0;
    let diasTodosAeroportos = 0;
    let dias = 1;
    let newMap = JSON.parse(JSON.stringify(map)); // 
    while (totalAeroportosAbertos > 0) {
        avancarDia(linhas, colunas, newMap);
        totalAeroportosAbertos = getTotalAeroportosAbertos(newMap);

        if (
            totalAeroportosAbertos !== aeroportos &&
            diasPrimeiroAeroporto <= 0
        ) {
            diasPrimeiroAeroporto = dias;
        } else if (totalAeroportosAbertos === 0) {
            diasTodosAeroportos = dias;
        }
        dias++;
    }

    if (diasTodosAeroportos === 0 && diasPrimeiroAeroporto > 0) {
        diasTodosAeroportos = diasPrimeiroAeroporto;
    }

    return { diasPrimeiroAeroporto, diasTodosAeroportos, map };
}

function avancarDia(linhas, colunas, map) {
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map.length; j++) {
            let point = map[i][j];
            if (point.tipo === Point.NUVEM) {
                moverNuvem(linhas, colunas, map, point);
            }
        }
    }
}

function moverNuvem(linhas, colunas, map, point) {
    moverParaCima(linhas, colunas, map, point);
    moverParaDireita(linhas, colunas, map, point);
    moverParaBaixo(linhas, colunas, map, point);
    moverParaEsquerda(linhas, colunas, map, point);
}

function moverParaCima(linhas, colunas, map, point) {
    let x = point.x - 1;
    if (map[x]) {
        let newPoint = map[x][point.y];
        if (x >= 0 && newPoint.tipo !== Point.NUVEM) {
            let novaNuvem = new Point(x, point.y, Point.NUVEM);
            map[x][point.y] = novaNuvem;
        }
    }
}

function moverParaDireita(linhas, colunas, map, point) {
    let y = point.y + 1;
    if (map[point.x][y]) {
        let newPoint = map[point.x][y];
        if (y <= colunas && newPoint.tipo !== Point.NUVEM) {
            let novaNuvem = new Point(point.x, y, Point.NUVEM);
            map[point.x][y] = novaNuvem;
        }
    }
}

function moverParaBaixo(linhas, colunas, map, point) {
    let x = point.x + 1;
    if (map[x]) {
        let newPoint = map[x][point.y];
        if (x <= linhas && newPoint.tipo !== Point.NUVEM) {
            let novaNuvem = new Point(x, point.y, Point.NUVEM);
            map[x][point.y] = novaNuvem;
        }
    }
}

function moverParaEsquerda(linhas, colunas, map, point) {
    let y = point.y - 1;
    if (map[point.x][y]) {
        let newPoint = map[point.x][y];
        if (y <= colunas && newPoint.tipo !== Point.NUVEM) {
            let novaNuvem = new Point(point.x, y, Point.NUVEM);
            map[point.x][y] = novaNuvem;
        }
    }
}

function getTotalAeroportosAbertos(map) {
    let total = 0;
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map.length; j++) {
            let point = map[i][j];
            if (point.tipo === Point.AEROPORTO) {
                total++;
            }
        }
    }
    return total;
}

module.exports = { resolverProblema };
