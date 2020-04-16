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
    title: "Stay at home and Send us your old photos!",
    link: "https://blog.historicenvironment.scot/2020/04/monument-monitor-2/",
    description: "With the country under lockdown, we do not want visitors to our case study heritage sites. Instead, we are asking people to send in their photos from visits past, the older the better! Even if we are temporarily unable to explore ancient castles, wander around stone circles and picnic amid the ruins of brochs, we can learn much about them from all our individual experiences from years past. Send your images to submissions@monumentmonitor.co.uk",
    imageLink: 'https://blog.historicenvironment.scot/wp-content/uploads/2020/04/008-001-008-494-R-banner.png',
    alignment: 'right',
    styles: 'mt5 flex-row-reverse'
  },{
    title: "Research at Clava Cairns featured on BBC news",
    link: "https://www.bbc.co.uk/news/uk-scotland-highlands-islands-50670902",
    description: "BBC news report on our work at Clava Cairns, a 4000 year old burial site near the battlefield of Culloden. Often tourists like to take 'souveniers' home with them, though apparently one Belgium tourist regretted this decision claiming it 'cursed' his family. Since the MM project started, there has been a noticable drop in reported incidents at Clava",
    imageLink: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/D1C1/production/_96379635_vandals.jpg',
    alignment: 'left',
    styles: 'flex-wrap'
  }, {
    title: "Monument Monitor at the ICON Twitter conference",
    link: "https://twitter.com/rosie934/status/1202260343440990209",
    description: "Read  the initial results from the MM project in this Twitter thread which was a part of the Institute of Conservations 2019 Twitter Conference. ",
    imageLink: 'https://pbs.twimg.com/media/EK9JzLKXsAYJenp?format=jpg&name=4096x4096',
    alignment: 'right',
    styles: 'mt5 flex-row-reverse'
  },{
    title: "Monument Monitor researcher on BBC Radio Scotland's John Beattie program",
    link: "https://www.bbc.co.uk/programmes/m0009s21",
    description: "Rosie Brigham makes a breif appearance on John Beatties lunchtime show to discuss how the project is helping Historic Environment Scotland is using visitors images to help monitor their unstaffed sites.",
    imageLink: 'https://ichef.bbci.co.uk/images/ic/640x360/p06dzwyp.jpg',
    alignment: 'left',
    styles: 'flex-wrap'
  },
  {
    title: "Monument Monitor in the Scottish Herald",
    link: "https://www.heraldscotland.com/news/17734011.tourists-photos-will-be-used-to-conserve-historic-sites/",
    description: "Climate change is presenting organisations, such as Historic Environment Scotland (HES), with new and unprecedented challenges in the care and protection of important historic sites and places. HES looks after over 300 of Scotland’s historic monuments, from Tantallon Castle in East Lothian to Skara Brae in Orkney and last year welcomed more than 5.2 million visitors to its staffed properties. HES estimates that a further seven million people visited its unstaffed properties – sites that are free of charge to visit at any time...",
    imageLink: 'https://www.historicenvironment.scot/media/1251/tantallon-2.jpg?center=0.375,0.45&mode=crop&width=800&height=480&rnd=131051015740000000',
    alignment: 'right',
    styles: 'mt5 flex-row-reverse'
  },
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
    description: 'Read our paper published in Angewandte Chemie, that looks at the accuracy of colour in images taken by a variety of mobile phone cameras',
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