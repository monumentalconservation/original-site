import React, { Component } from 'react';

class GDPR extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const {alignment} = this.props
    return (
      <section class="w-90 w-80-ns center">
        <h1>GDPR</h1>

        You are invited to take part in this research. Before you decide whether to take part, please read this this page carefully. If you have any questions please reach out to us using the contact details below.

        What is the research about?
        Give a brief summary of the aims of the research in a language accessible to participants. 

        Who is conducting the research? 
        Rosie Brigham is conducting this research as a part of her PhD studies in the Bartlett School of Environment, Energy and Resources at University College London. Josep Grau-Bove, from the Institute of Sustainable Heritage and Lyn Wilson, from Historic Environment Scotland, is supervising the research.  

        Do I have to take part?
        It is completely up to you to decide whether or not to take part in this research. You can withdraw your consent at any time. If you withdraw your consent, you do not need to give a reason, simply get in contact with your request and we will remove any images you have sent in. 

        What will happen to the results of the research?
        Check out this website and the blog for regular updates as well as our instagram account, @monumentmonitor. The main output of this research will be a PhD thesis, although it is possible that the results will be included in other reports, presentations, and/or academic papers. 

        Your submissions and how we use them

        Storage
        We store all images submitted to us on an encrypted database. Prior to being uploaded, any faces contained within photographs are blurred to ensure annonimity. In order to track patterns in submissions we do store email addresses and social media account names, however, we anonymise them with a one-way hashing formula. This means that it will get turned into a string of odd characters, and we won’t be able to change them back into the original. Emails and messages sent to us will be deleted as soon as they have been uploaded to the database. Therefore, none of the data we store will be identifiable to you.

        What do we do with the photos?
        For each case study site, we will group the images and look at them over a period of time to see if we can observe patterns of deterioration across them. If this is successful, we then analyse them using machine vision, using a tool called ‘segmentation’. This is where an algorithm is trained to recognise parts of an image and highlights and measured it accordingly. We hope this will be useful for properties suffering from erosion or vegetation growth.
        We are also interested in who submits images, and how often. Very often in citizen science projects a smaller number of people will submit the largest number of images. We want to see if this is the case for these experiments, which is also why we collect anonymised submission details.

        Data Protection Privacy Notice
        Your personal data including images you have taken, your phone number, twitter/instagram handle or email address will be processed only for the purposes outlined in this information sheet and only so long as required for this research project. It will be stored on a secure encrypted database and will only be used by the research team. The data controller for this project will be University College London (UCL). The UCL Data Protection Office provides oversight of UCL activities involving the processing of personal data. The Data Protection Officer, Lee Shailer can be contacted at data-protection@ucl.ac.uk. 

        Will you ever use my details to contact me about this project or anything else in the future?
        Other than responding to enquiries and thanking you for contributing to the project after submitting, we will not contact you. As mentioned above, we will not store any personal contact information and we will delete submissions via email and WhatsApp as soon as they have been uploaded. 

        What if I want you to remove my submission?
        If, at any point you want us to remove your contributions from the project, please email us at monumentmonitor@gmail.com with the subject “Data Removal”. Please include the date and type of your submission, as well as what site it was taken at and a description of the image. We will then delete all relevant information and send you a confirmation email. 

        Use of cookies
        We do use cookies on this website! But don’t worry, we are not interested in selling you anything, nor are we interested in helping other people sell you things. We simply want an idea of the general demographic of visitors to the site, as we hope that will tell us who is interested in the project. If you want to turn off google analytics, please use this toggle:

        How do I find out more?
        Any results will be published in our blog alongside other academic publications and papers. Alternatively, if you have questions just get in touch! Email us at monumentmonitor@gmail.com 

        Who can I contact for further information?
        If you have questions or want more information on the research, please contact: Rosie Brigham on rosie.brigham@gmail.com.

        Who can I contact to complain or express my concerns about this research?
        If you are concerned about any part of this research or your participation, please contact the Supervisor, the Dissertation Coordinator and/or the Director of Ethics at the UCL Bartlett School of Environment, Energy and Resources:
        Supervisor: Josep Grau-Bove, josep.grau-bove@ucl.ac.uk, 02031089772
        •	HES Coordinator: Lyn Wilson, l.wilson@hes.scot
        •	BSEER Director of Ethics: Michelle Shipworth, m.shipworth@ucl.ac.uk, +44 20 3108 5991
        If you are concerned about how your personal data is being processed, please contact the UCL Data Protection Officer: data-protection@ucl.ac.uk. If you remain unsatisfied, you may wish to contact the Information Commissioner’s Office (ICO): https://ico.org.uk/for-organisations/data-protection-reform/overview-of-the-gdpr/individuals-rights/  

      </section>
    );
  }
}

export default GDPR;