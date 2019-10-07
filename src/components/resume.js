import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

function Resume(){
  return(
      <div>
        <Grid>

        <Cell col={4} left side>

        <div style={{textAling: 'center'}}>
        <img
        src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2013%2F07%2F13%2F10%2F07%2Fman-156584_640.png&f=1&nofb=1"
        alt="avatar"
        style={{height: '200px'}}

        />


        </div>

        <h2 style={{paddingTop: '2em'}}>Juan</h2>
        <h4 style={{color: 'grey'}}>Programmer</h4>
        <hr style={{borderTop: '3px solid' }}/>


        </Cell>

        <Cell className="resume-right-col" col={8} right scene>Right


        </Cell>

        </Grid>
      </div>
    );
}


export default Resume;
