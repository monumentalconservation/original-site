import React, { Component } from 'react';
import ImageTile from './ImageTile'

import headshot from '../images/headshot-portrait.jpg'
import josep from '../images/josep.jpg'
import lyn from '../images/lyn-taking-photo.jpg'



class About extends Component {
  render() {
    return (
      <div className="about ph4 w-80-ns center flex flex-wrap">
        <section className="w-100 w-50-ns mt4 mb4 mb4-ns pa4-ns">
          <ImageTile 
            title="Rosie Brigham, PhD Researcher"
            image={headshot} 
            text="Rosie studied History of Art and Conservation at UCL, though shortly after graduating she re-trained as a software engineer. After several years of working as a full stack and backend developer she re-joined academia to specialise in Citizen Heritage Science, and started the Monument Monitor project."
            twitter="@rosie934"
            email="rosie.brigham.10@ucl.ac.uk" />
        </section>


        <section className="w-100 w-50-ns mb4 mt6-ns mb4-ns pa4-ns">
          <ImageTile 
            title="Josep Grau-Bove, Academic Supervisor"
            image={josep} 
            text="Josep is a Heritage Scientist currently working at the Institute of Sustainable Heritage. He is the director of the the director for the MRes in Science in Egineering in Arts, Heritage and Archeology as well and the MSc in Heritage Data Science."
            twitter="@lomecreu" />
        </section>

        <section className="w-100 w-50-ns mb4 mb4-ns pa4-ns">
        <ImageTile 
            title="Lyn Wilson, Heritage Supervisor"
            image={lyn} 
            text="Lyn has over 20 years’ experience in digital documentation practice and conservation/archaeological science. She is currently responsible for digital documentation and the application of cutting-edge technologies within Historic Environment Scotland and managed the Scottish Ten project on behalf of the Scottish Government"
            twitter="@Scottish3D" />
        </section>
      </div>
    );
  }
}

export default About;
