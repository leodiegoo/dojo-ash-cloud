'use scrict';
class Point {
    static get NUVEM() {
        return '*';
    }
    static get AEROPORTO() {
        return 'A';
    }
    static get VAZIO() {
        return '.';
    }
    constructor(x, y, tipo) {
        this.x = x;
        this.y = y;
        this.tipo = tipo;
    }
}

module.exports = Point;
