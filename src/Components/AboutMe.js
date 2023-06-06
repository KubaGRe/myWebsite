import React from 'react'
import photo from './photo_main.jpg';
const AboutMe = () => {
  return (
    <div className='aboutme-wraper'>
      <div className='about-me'>
        <div className='about-me-info'>
              <img src={photo} alt='JakubGrelaPhoto' className='about-info-image'/>
              <div className='about-info-description'>
                <p>
                  I graduated with master's degree in <b>Electrical Engineering</b> in 2021. My first job position 
                  I got was in Automotive Industry as Vehicle Test Engineer Inter in <b>Aptiv</b>. I worked there for fourteen months.
                  After that time I moved to <b>Merit</b> as Software Test Engineer Intern. I was developing and conducting test cases in Vector's software.
                  In September 2021 I have started my current job as Software Test Engineer in <b>Nokia</b>. Here I'm involved in the development of the 5G network technology
                  by writing tests using <b>Robot Framework and Python</b> for new features. Apart from that I'm also responsible for performing regression testing, supporting development teams and reporting bugs.
                  In 2022 I have started post-graduate studied <b>Software Development Methods</b>. Since October to June 2023 I have been studying <b>algorithms, writing code in Java, JavaScript and HTML</b>.
                  I got to know new technologies used in Web Development such as <b>Spring, Vue.js, React, Hibernate, MongoDB</b>. In my free time I like to play boardgames, ride bike and hangout with my friends.
                </p>
              </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe