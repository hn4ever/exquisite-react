import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const Game = () => {
  const [lines, setLines] = useState([])
  const [submission, setSubmission] = useState(false)

  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(' ');

  const makeSentence = (words) => {
    return FIELDS.map((field) => {
      if (field.key) {
        return words[field.key];
      } else {
        return field;
      }
    }).join(' ')
  }

  const addLine = (words) => {
    const newLines = [...lines]
    newLines.push(makeSentence(words))
    setLines(newLines)
  }

  const showPoem = () => {
    setSubmission(true);
  }

  // const lastRecentSubmission = lines[lines.length-1];
const lastRecentSubmission = lines[lines.length - 1]
  // const convert = (line) => {
  //   //make a method to change a single line to sentence
  // }

  // const allSentences = //map all addline and 
  // lines.map //each do convert
  // //save it 'it will saved as all sentences'


  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>
{/* 
      {(!submission && submission.length >= 1)?
      <RecentSubmission submission={lastRecentSubmission}/> : null} */}
      <RecentSubmission submission={lastRecentSubmission}/>

      {(submission)?
      null : <PlayerSubmissionForm index={lines.length + 1} sendSubmission={addLine} fields={FIELDS} />}

      
      <FinalPoem isSubmitted={submission} submissions={lines} revealPoem={showPoem}/>

    </div>
  );
}


const FIELDS = [
  'The',
  {
    key: 'adj1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  'the',
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  '.',
];

export default Game;
