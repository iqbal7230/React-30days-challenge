import React, { useState } from 'react'

const Readmore =({children})=>{
    const text = children;
    const [isReadmore, setIsReadmore]= useState(true);
    const toggleReadmore=()=>{
        setIsReadmore(!isReadmore)
    }
    return(
        <p className='text'>
        {isReadmore ? text.slice(0,400): text}
        <span onClick={toggleReadmore} className="read-hide" style={{color: 'green'}}>
        {isReadmore ? " ..Read more" : " Show less"}
            
            
        </span>
        </p>
    );
};

export default function Content() {
  return (
    <div className='containner'>
    <Readmore>
      Visual impairment is a relatively common condition that is affecting millions of people worldwide. According to the World Health Organization, at least 2.2
 billion people worldwide have near or distant vision impairment and 36 million people are blind . This statistic indicates that 1 out of every 5 individuals in the world has a visual impairment, and 1 out of every 200 people is blind. Despite the significant number of people with blindness, very few assistive technologies are commercially available for these people to conveniently interact with digital web content. One of the most predominant assistive technologies for people with severe vision impairments, including blindness, is a screen reader, such as NVDA (https://www.nvaccess.org/ (accessed on 1 October 2023)), JAWS (https://www.freedomscientific.com/products/software/jaws/ (accessed on 1 October 2023)), or VoiceOver (https://www.apple.com/accessibility/mac/vision/ (accessed on 1 October 2023)).
A screen reader, as the name suggests, narrates the content on the screen and allows blind users to navigate the content using special keyboard shortcuts (e.g., ‘H’ for the next heading). This one-dimensional mode of interaction has been shown to create a plethora of accessibility and usability issues for blind users while interacting with computer applications. These challenges encompass the absence of well-defined structural elements, labels, and descriptions within web elements, hindering the screen reader’s ability to identify and interpret content. Moreover, the inclusion of dynamic and interactive features, like animations, pop-ups, and videos, may not be screen reader-compatible, resulting in potential interference and incomplete experiences. Additionally, the inconsistency and complexity of web design and layouts can be disorienting and overwhelming for blind users. Furthermore, the lack of feedback and guidance within web applications or websites leaves blind users uncertain and lost, impeding their ability to make informed decisions and navigate effectively.
Existing works to improve accessibility and usability predominantly focus on general web navigation and visual content, such as images, and videos; extraneous content, such as advertisements and promotions, however, is still an uncharted research territory. Advertisements and promotions are widely present on most modern websites, serving as a crucial means of generating revenue and frequently offering utility to users. Research indicates that people engage with advertisements by clicking on them and, in general, consider ads as beneficial. However, such extraneous content is, by design, visually rich, and as such, primarily intended for sighted consumption; therefore, it is unclear how these extraneous elements impact the browsing experience and engagement of blind users who can only listen to content using their screen readers. To fill this knowledge gap, we conducted an interview study with 18 blind participants familiar with web browsing.
    The study uncovered many insights, with the most notable one being that blind users are often ‘deceived’ by ads, specifically the ones that are contextually integrated into the web page content, e.g., native promotion ads that are similar to surrounding web page content, as shown in Figure 1 (https://www.kayak.com/flights/ORF-WAS/2023-12-01/2024-01-11?sort=bestflight_a&attempt=3&lastms=1697423402586&force=true (accessed on 1 October 2023)). The participants further stated that such deceptions often resulted in interacting with content that did not align with their intended objectives or interests, and sometimes the consequences were serious, such as unintentionally installing viruses, revealing personal information, and buying unintended items on shopping websites. Another informative observation from the study was that only a small fraction of the participants used ad blockers; many participants stated that ad blockers were hard to install and configure with screen readers. Moreover, a few participants also expressed that they were unable to access some of their favorite websites with an active ad blocker, as these websites prohibited access to their content on detecting an ad blocker.
    </Readmore>
    </div>
  )
}
