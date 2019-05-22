import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'Cheese'},
    {label: 'Meat', type: 'meat '}
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map(crtl => (
            <BuildControl 
                key={crtl.label} 
                label={crtl.label} 
                added={() => props.ingredientAdded(crtl.type)}
            />
        ))}
    </div>
);

export default buildControls;