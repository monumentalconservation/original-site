import React, { Component } from 'react';
import ImageTile from './ImageTile'

import headshot from '../images/headshot-portrait.jpg'
import josep from '../images/josep.jpg'
import lyn from '../images/lyn-bridge.jpg'
import matija from '../images/matija.jpeg'
import lewis from '../images/lewis.png'
import marek from '../images/marek.jpg'

class About extends Component {
  render() {
    return (
      <div className="about ph4 ph0-m w-80-ns mb6 center flex flex-wrap">
        <ImageTile 
          className="mt4 mt0-ns pl0-m"
          title="Rosie Brigham"
          image={headshot} 
          text="After studying History of Art and Conservation at UCL Rosie re-trained as a software developer and worked in the London fin tech and start-up world. She never lost her passion for history and conservation and after several years of working as a full stack and backend developer she re-joined academia to specialise in Citizen Heritage Science, and founded the Monument Monitor project."
          twitter="@rosie934"
          email="rosie.brigham.10@ucl.ac.uk" 
        />

        <ImageTile
          className="pt5-ns pr0-m"
          title="Josep Grau-Bove"
          image={josep} 
          text="Josep is a Heritage Scientist currently working at the Institute of Sustainable Heritage. He is the director of the the director for the MRes in Science in Egineering in Arts, Heritage and Archeology as well and the MSc in Heritage Data Science."
          twitter="@lomecreu" 
        />

        <ImageTile
          className="pl0-m" 
          title="Lyn Wilson"
          image={lyn} 
          text="Lyn Wilson is a heritage scientist with over 20 years’ experience in digital documentation practice and conservation/archaeological science. She has a BSc in Archaeology, MA and PhD in Archaeological Science. As Digital Documentation Manager at Historic Environment Scotland, Lyn is responsible for 3D recording the properties and collections in the care of HES for conservation, asset management, interpretation, education and to improve accessibility."
          twitter="@Scottish3D" 
        />

        <ImageTile
          className="pt5-ns pr0-m"
          title="Marek Barwinski"
          image={marek}
          text="Marek is Head of Machine Learning at InstaDeep, leading automation and scaling of AI-first solutions. Marek operates at an intersection of software development and research with a background in physics and computational neuroscience. As Senior Software Engineer, he was Tech Lead at DeepMind creating machine learning models for millions of Google users. Prior, at DeepMind Technologies as Senior Product Engineer, he lead the implementation and deployment of a deep learning based computer vision backend for e-commerce. Marek started his serial startup adventures at Cortexica where as Senior Research Scientist he delivered an innovative on-GPU visual retrieval API to UK and US retail giants. "
        />

        <ImageTile
          className="pl0-m" 
          title="Matija Strlic"
          image={matija} 
          text="Matija is Deputy Director of UCL Institute for Sustainable Heritage and Deputy Director of the EPSRC Centre for Doctoral Training in Arts, Heritage and Archaeology. Matija's research focus is in the cross-disciplinary field of heritage science, particularly development of new scientific tools and methods to study heritage materials and collections, and their interactions with the environment."
          twitter="@matijastrlic" 
        />

        <ImageTile
          className="pt5-ns pr0-m" 
            title="Lewis Griffin"
            image={lewis} 
            text="Lewis D Griffin received a BA degree in Mathematics & Philosophy from Oxford University, UK, in 1988, and a PhD degree from the University of London in 1995 for the thesis “Descriptions of Image Structure” in the area of computational vision. Following positions at Aston University (Vision Sciences) and Kings College London (Imaging Sciences) he has been at University College London (Computer Science) since 2005, where is now a Reader. His research interests include image structure, colour vision, machine learning and biomedical modelling, with applications in security science, biomedicine and geoscience."
        />

      </div>
    );
  }
}

export default About;
