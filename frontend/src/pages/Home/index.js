import React, { useState } from 'react';

import api from '../../services/api';

import './styles.css';

export default function Home() {
  const [nuvem, setNuvem] = useState('');
  const [aeroporto, setAeroporto] = useState('');
  const [colunas, setColunas] = useState('');
  const [linhas, setLinhas] = useState('');
  const [dados, setDados] = useState({});

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.get(
      `/?nuvens=${nuvem}&aeroportos=${aeroporto}&colunas=${colunas}&linhas=${linhas}`
    );

    setDados({ ...response.data });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Quantidade de nuvens"
          title="Quantidade de nuvens"
          value={nuvem}
          onChange={(e) => setNuvem(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantidade de aeroportos"
          title="Quantidade de aeroportos"
          value={aeroporto}
          onChange={(e) => setAeroporto(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantidade de colunas"
          title="Quantidade de colunas"
          value={colunas}
          onChange={(e) => setColunas(e.target.value)}
        />

        <input
          type="number"
          placeholder="Quantidade de linhas"
          title="Quantidade de linhas"
          value={linhas}
          onChange={(e) => setLinhas(e.target.value)}
        />

        <button type="submit">Enviar</button>
      </form>
      {dados.mapa ? (
        <>
          <hr />
          <p>
            Dias para o primeiro aeroporto ser coberto:
            <strong>{dados.diasPrimeiroAeroporto}</strong>
          </p>
          <p>
            Dias para todos os aeroportos serem cobertos:
            <strong>{dados.diasTodosAeroportos}</strong>
          </p>
        </>
      ) : (
        <></>
      )}

      <hr />
      <table>
        <tbody>
          {dados.mapa ? (
            dados.mapa.map((linha, indexLinha) => {
              const qtdColunas = Object.keys(linha);
              const key = qtdColunas + indexLinha;
              return (
                <tr key={key}>
                  {qtdColunas.map((coluna, indexColuna) => {
                    const keyColuna = qtdColunas + indexColuna;
                    return (
                      <td key={keyColuna}>
                        {dados.mapa[indexLinha][indexColuna].tipo}
                      </td>
                    );
                  })}
                </tr>
              );
            })
          ) : (
            <></>
          )}
        </tbody>
      </table>
    </>
  );
}
