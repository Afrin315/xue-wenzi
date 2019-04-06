import React, { Component } from 'react';
import WordType from './WordType';

class WordListItem extends Component {
  render() {
    const { value, translation, type, pinyin, editWord } = this.props;

    return (
      <li className="mb-2 d-flex f3 flex-items-start">
        <div>
          {value}
          {translation ? (
            <span>
              &mdash; {translation}
            </span>
          ) : null}
          <div>
            <span className="Label mr-2 f4 Label--gray">{pinyin}</span>
            <WordType type={type} />
          </div>
        </div>
        <button
          type="button"
          onClick={editWord}
          className="btn-link ml-4 mt-2 text-small"
        >Edit</button>
      </li>
    );
  }
}

export default WordListItem;
