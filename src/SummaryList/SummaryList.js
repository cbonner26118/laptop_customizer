import React, { Component } from 'react';
import SummaryItem from '../SummaryItem/SummaryItem';

export default class SummaryList extends Component {

  render() {

    const summary = Object.keys(this.props.selected).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = this.props.selected[feature];
    
    return (
        <SummaryItem 
          featureHash={featureHash}
          selectedOption={selectedOption}
          feature={feature}
        />
      );
    });
    
    
    return summary;
  }

}