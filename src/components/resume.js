import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

function Resume(){
  return(
      <div>
        <Grid>

        <Cell col={4} left side>left</Cell>

        <Cell col={8} right scene>Right</Cell>

        </Grid>
      </div>
    );
}


export default Resume;
