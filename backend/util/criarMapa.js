'use strict';

const Point = require('../models/point/index');

function criarMapa(linhas, colunas) {
    let map = [];
    for (let x = 0; x < linhas; x++) {
        map.push({});
        for (let y = 0; y < colunas; y++) {
            map[x][y] = new Point(x, y, Point.VAZIO);
        }
    }

    return map;
}

module.exports = { criarMapa };
