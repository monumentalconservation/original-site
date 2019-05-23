import React, { Component } from 'react';
import ArticleLink from './ArticleLink'
import Border from './Border'
import rekrei from '../images/rekrei.png'

class Results extends Component {
  render() {
    return (
      <div className="results ph4 ph0-m w-80-ns mb6 center flex flex-wrap">
        <h2 className="f3 f2-l normal lh-title-ns ">Any results or publications from the project be posted on this page, as well as highlights from the submissions. If you want to keep up with our progress, follow us on <a href="https://www.instagram.com/monumentmonitor/" target="_blank">Instagram</a>.</h2>        


        {resultsAndPublications.map(item => (
          <ArticleLink {...item} />
        ))}

        
      </div>
    );
  }
}

export default Results;


const resultsAndPublications = [
  {
    title: 'Introducing Monument Monitor - Historic Environment Scotland Blog',
    link: 'https://blog.historicenvironment.scot/2019/05/monument-monitor/',
    description: 'Historic Environment Scotland takes up the pen to publicise this project, learn how you can be a ‘citizen scientist’ at 20 of Scotland’s most evocative historic sites as part of an exciting new conservation project.',
    imageLink: 'https://blog.historicenvironment.scot/wp-content/uploads/2019/05/machrie-moor-twitter-submission.png',
    alignment: 'left',
    styles: 'flex-wrap'
  },
  {
    title: 'Introducing Monument Monitor - National Heritage Science Forum Blog',
    link: 'https://nationalheritagescienceforum.wordpress.com/2019/03/17/introducing-monument-monitor-a-citizen-heritage-science-project/',
    description: 'Writing for Heritage Science week researcher, Rosie Brigham introduces the project to the Heritage Science community',
    imageLink: 'https://nationalheritagescienceforum.files.wordpress.com/2019/03/example-sign-achnabreck.jpg?w=1272&h=900',
    alignment: 'right',
    styles: 'mt5 flex-row-reverse'
  },
  {
    title: 'Let the Visitors do the research',
    link: 'http://www.seaha-cdt.ac.uk/2018/06/let-visitors-do-the-science-rosie-brighams-research-on-citizen-science-data-in-angewandte-chemie/',
    description: 'Writing for the Science and Engineering in Arts, Heritage and Archeology Center for Doctoral Training, Rosie demonstrates that measurements of colour taken by mobile phones can be reliable if there are enough photographs to account for error.',
    imageLink: 'http://www.seaha-cdt.ac.uk/wordpress/wp-content/uploads/2017/07/SEAHALogo_RustyGlass_BlackBG-Ammended_May_17-1.jpg',
    alignment: 'left',
    styles: 'flex-wrap'
  },
  {
    title: 'Crowdsourcing as an Analytical Method: Metrology of Smartphone Measurements in Heritage Science',
    link: 'https://onlinelibrary.wiley.com/doi/epdf/10.1002/ange.201801743',
    description: 'Read our paper published in Angewandte Chemie that looks at the accuracy of colour in images taken by a vaerity of mobile phone cameras',
    imageLink: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6055710/bin/ANIE-57-7423-g004.jpg',
    alignment: 'right',
    styles: 'mt5 flex-row-reverse'
  },
  {
    title: 'Issues in long term conservation monitoring',
    link: 'https://www.youtube.com/watch?v=4-jFy7Fae_E',
    description: 'Rosie talks to the REKREI Open Digital Heritage conference in Kyoto about the forerunner that paved the way for the Monument Monitor. She highlights issues faced by conservation projects that are designed to run over extended periods of time',
    imageLink: rekrei,
    alignment: 'left',
    styles: 'flex-wrap'
  }
];