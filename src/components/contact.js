import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

function Contact(){
  return(

    <div className="contact-body">
      <Grid className="contact-grid">
      <Cell col={6}>
      <h2>Juan Paredes</h2>
      <div className="contact-image">

       <img
       src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2013%2F07%2F13%2F10%2F07%2Fman-156584_640.png&f=1&nofb=1"
       style={{width: '250px'}}
       />



      </div>

      <p className="description" style={{fontFamily: 'Mansalva'}}>Ruby on Rails software developer with a passion for software
      and clean code, with a huge interest in A.I and machine learning

      </p>



      </Cell>

      <Cell col={6}>
      <h2>Contact Me</h2>
    <hr/> {/* this way we set up the line below our h2 */ }

    <div className="contact-list">
        <List>

      <ListItem>
        <ListItemContent style={{fontSize: '20px', fontFamily:'Pacifico'}}>
          <i className="fa fa-phone-square" aria-hidden="true"></i>(+34) 666856901
        </ListItemContent>
      </ListItem>

      <ListItem>
        <ListItemContent style={{fontSize: '25px', fontFamily:'Mansalva'}}>
          <i className="fa fa-envelope" aria-hidden="true"></i>
          Juanchuu.jfpc@gmail.com
        </ListItemContent>
      </ListItem>

      <ListItem>
        <ListItemContent style={{fontSize: '25px', fontFamily:'Mansalva'}}>
          <i className="fa fa-skype" aria-hidden="true"></i>
          juanchuu.jfpc
        </ListItemContent>
      </ListItem>

       <ListItem>
        <ListItemContent style={{fontSize: '20px', fontFamily:'Pacifico'}}>
          <i className="fa fa-linkedin" aria-hidden="true"></i>
          www.linkedin.com/in/juanparedess/
        </ListItemContent>
      </ListItem>


    </List>


    </div>


      </Cell>

      </Grid>
    </div>

    );
}

export default Contact;
