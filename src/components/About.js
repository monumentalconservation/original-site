import React, { Component } from 'react';
import ImageTile from './ImageTile'

import headshot from '../images/headshot-portrait.jpg'
import josep from '../images/josep.jpg'
import lyn from '../images/lyn-bridge.jpg'
import matija from '../images/matija.jpeg'
import lewis from '../images/lewis.png'

class About extends Component {
  render() {
    return (
      <div className="about ph4 w-80-ns mb6 center flex flex-wrap">
        <section className="tile w-100 w-50-ns mt4 mt0-ns mb4 mb0-ns ph4-ns">
          <ImageTile 
            title="Rosie Brigham, PhD Researcher"
            image={headshot} 
            text="Rosie studied History of Art and Conservation at UCL, though shortly after graduating she re-trained as a software engineer. After several years of working as a full stack and backend developer she re-joined academia to specialise in Citizen Heritage Science, and started the Monument Monitor project."
            twitter="@rosie934"
            email="rosie.brigham.10@ucl.ac.uk" />
        </section>


        <section className="tile w-100 w-50-ns mb4 mb0-ns ph4-ns pt5-ns">
          <ImageTile 
            title="Josep Grau-Bove, Academic Supervisor"
            image={josep} 
            text="Josep is a Heritage Scientist currently working at the Institute of Sustainable Heritage. He is the director of the the director for the MRes in Science in Egineering in Arts, Heritage and Archeology as well and the MSc in Heritage Data Science."
            twitter="@lomecreu" />
        </section>

        <section className="tile w-100 w-50-ns mb4 mb0-ns ph4-ns">
          <ImageTile 
            title="Lyn Wilson, Heritage Supervisor"
            image={lyn} 
            text="Lyn Wilson is a heritage scientist with over 20 years’ experience in digital documentation practice and conservation/archaeological science. She has a BSc in Archaeology, MA and PhD in Archaeological Science. As Digital Documentation Manager at Historic Environment Scotland, Lyn is responsible for 3D recording the properties and collections in the care of HES for conservation, asset management, interpretation, education and to improve accessibility."
            twitter="@Scottish3D" />
        </section>

        <section className="w-100 w-50-ns mb4 mb0-ns ph4-ns pt5-ns">
          <ImageTile 
            title="Matija Strlic"
            image={matija} 
            text="Matija is Deputy Director of UCL Institute for Sustainable Heritage and Deputy Director of the EPSRC Centre for Doctoral Training in Arts, Heritage and Archaeology. Matija's research focus is in the cross-disciplinary field of heritage science, particularly development of new scientific tools and methods to study heritage materials and collections, and their interactions with the environment."
            twitter="@matijastrlic" />
        </section>

        <section className="tile w-100 w-50-ns mb4 mb0-ns ph4-ns">
          <ImageTile 
              title="Lewis Griffin"
              image={lewis} 
              text="Lewis D Griffin received a BA degree in Mathematics & Philosophy from Oxford University, UK, in 1988, and a PhD degree from the University of London in 1995 for the thesis “Descriptions of Image Structure” in the area of computational vision. Following positions at Aston University (Vision Sciences) and Kings College London (Imaging Sciences) he has been at University College London (Computer Science) since 2005, where is now a Reader. His research interests include image structure, colour vision, machine learning and biomedical modelling, with applications in security science, biomedicine and geoscience."
          />
        </section>
      </div>
    );
  }
}

export default About;
