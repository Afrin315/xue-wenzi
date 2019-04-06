import React, { Component } from 'react';

class WordType extends Component {
  render() {
    const { type } = this.props

    return (
      <span>
        {type === 'noun' ? (
           <span className="text-small text-gray">n.</span>
         ) :
         type === 'verb' ? (
           <span className="text-small text-gray">v.</span>
         ) :
         type === 'adjective' ? (
           <span className="text-small text-gray">adj.</span>
         ) :
         type === 'adverb' ? (
           <span className="text-small text-gray">adv.</span>
         ) :
         type === 'pronoun' ? (
           <span className="text-small text-gray">pro.</span>
         ) :
         type === 'measure' ? (
           <span className="text-small text-gray">measure</span>
         ) : null}
      </span>
    )
  }
}

export default WordType;
