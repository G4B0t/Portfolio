import { useState } from 'react';
import { bingoCaseStudy } from '../content';
import {
  Actions,
  CardTable,
  Frame,
  History,
  LastCall,
  Readout,
  Workspace,
} from './styles';

const demo = bingoCaseStudy.demo;

export function RoundDemo() {
  const [callCount, setCallCount] = useState<number>(demo.initialCallCount);
  const [review, setReview] = useState<string | null>(null);
  const called = demo.calls.slice(0, callCount);
  const missing = demo.card.flat().filter((number) => !called.includes(number));

  function advance() {
    setCallCount((count) => Math.min(count + 1, demo.calls.length));
    setReview(null);
  }

  function reset() {
    setCallCount(0);
    setReview(null);
  }

  return (
    <Frame>
      <p>{demo.note}</p>
      <Workspace>
        <CardTable>
          <caption>{demo.cardLabel}</caption>
          <thead>
            <tr>
              {demo.columns.map((column) => (
                <th scope="col" key={column}>
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {demo.card.map((row, index) => (
              <tr key={index}>
                {row.map((number) => (
                  <td key={number} data-called={called.includes(number)}>
                    {number}
                    {called.includes(number) && <small>Called</small>}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </CardTable>
        <Readout>
          <h3>Round control</h3>
          <div aria-live="polite" aria-atomic="true">
            <p>Last called number</p>
            <LastCall>{called.at(-1) ?? '—'}</LastCall>
            <p>
              {called.length} numbers called · {25 - missing.length} / 25 card matches
            </p>
          </div>
          <Actions>
            <button
              type="button"
              onClick={advance}
              disabled={callCount === demo.calls.length}
            >
              Call next number
            </button>
            <button
              type="button"
              onClick={() =>
                setReview(
                  missing.length
                    ? `Card incomplete: ${missing.length} numbers still missing.`
                    : 'Card complete: all 25 numbers have been called.',
                )
              }
            >
              Check card
            </button>
            <button type="button" onClick={reset}>
              Reset round
            </button>
          </Actions>
          <p role="status">{review ?? 'Check the card against the called numbers.'}</p>
        </Readout>
      </Workspace>
      <History>
        <summary>Call history ({called.length})</summary>
        {called.length ? (
          <ol aria-label="Numbers in call order">
            {called.map((number) => (
              <li key={number}>{number}</li>
            ))}
          </ol>
        ) : (
          <p>No numbers called yet.</p>
        )}
      </History>
    </Frame>
  );
}
