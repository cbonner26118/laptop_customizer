import React from 'react';
import FeatureList from '../FeatureList/FeatureList';

export default function MainForm(props) {
    return (

<form className='main__form'>
            <h2>Customize your laptop</h2>
            <FeatureList
              features={props.features}
              selected={props.selected}
              updateFeature={props.updateFeature}
            />
          </form>
    )
}