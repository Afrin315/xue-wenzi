import React, { Component } from 'react';
import { Box, Text } from '@primer/components';

class WordTypeSelect extends Component {
  constructor(props) {
    super(props);
    this.state = { type: props.type };
  }

  onChange = event => {
    const type = event.target.value;
    this.props.onChange(type);
  }

  render() {
    return (
      <Box mb={2}>
        <Text
          is="label"
          fontSize={2}
          htmlFor="type-field"
        >Word type:</Text>
        <select
          id="type-field"
          onChange={this.onChange}
          value={this.state.type}
        >
          <option value=""></option>
          <option value="noun">noun</option>
          <option value="verb">verb</option>
          <option value="adjective">adjective</option>
          <option value="adverb">adverb</option>
          <option value="pronoun">pronoun</option>
          <option value="measure">measure</option>
        </select>
      </Box>
    );
  }
}

export default WordTypeSelect;
