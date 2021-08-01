import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TerryOld from '../assets/terry_old.jpg';
import Terry2014 from '../assets/terry_2014.jpg';
import Terry2003 from '../assets/vaENkQPR_400x400.jpg'
import Terry1994 from '../assets/jmbBFRUl_400x400.jpg'
import TerryGrad from '../assets/1_9f7v5K4u8AsAH2sCiThgFQ.jpeg'

function Timeline() {
  return (
    <div className="dark-bg">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          dateClassName="text-white"
          date="December 15, 1969"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Terrence Andrew Davis</h3>
          <span className="font-thin">
            Born in West Allis, Wisconsin, later moving to Washington, Michigan, California and Arizona. He was the seventh of eight children, and his father was an industrial engineer. As a child, Davis used an Apple II at his elementary school, and as a teenager, learned assembly language on a Commodore 64.
          </span>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="1994"
          dateClassName="text-white"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<img src={TerryGrad} className="rounded-full w-full h-full" alt="grad" />}
        >
          <h3 className="vertical-timeline-element-title">Graduation</h3>
          <h4 className="vertical-timeline-element-subtitle">Arizona State</h4>
          <span className="font-thin">
            He earned a master's degree in electrical engineering from Arizona State University in 1994 and worked for several years at Ticketmaster as a programmer for VAX machines. On the subject of his certifications, he wrote in 2011: "Everybody knows electrical is higher in the engineering pecking order than CS because it requires real math ;-) I'm a rocket scientist, though, not a very good one".
          </span>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          dateClassName="text-white"
          className="vertical-timeline-element--work"
          date="1996"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<img src={Terry1994} className="rounded-full" alt="Terry" />}
        >
          <h3 className="vertical-timeline-element-title">Spiritual Awakening.</h3>
          <span className="font-thin">
            In March, he had begun experiencing regular manic episodes and developed delusions centering around space aliens and government agents. He recalled "I started seeing people following me around in suits and stuff. It just seemed something was strange." He started donating large sums of money to charity organizations, something he had never done before. Later, he surmised, "that act caused God to reveal Himself to me and saved me."
          </span>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2003"
          dateClassName="text-white"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<img src={Terry2003} alt="terry" className="rounded-full" />}
        >
          <h3 className="vertical-timeline-element-title">The Onset of Illness</h3>
          <span className="font-thin">
            After 2003, Davis' hospitalizations became less frequent. His schizophrenia still affected his communication skills, and his online comments were usually incomprehensible. However, he was reported as "always lucid" if the topic was about computers. Vice noted that, in 2012, he had a productive conversation with the contributors at MetaFilter, where his work was introduced as "an operating system written by a schizophrenic programmer".
          </span>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014"
          dateClassName="text-white"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<img src={Terry2014} alt="terry 2014" className="rounded-full" />}
        >
          <h3 className="vertical-timeline-element-title">Terry, God's lonely programmer.</h3>
          <span className="font-thin">
            In 2014, Davis said that he "was genuinely pretty crazy in a way. Now I'm not. I'm crazy in a different way maybe." Davis acknowledged that the sequence of events leading to his spiritual awakening might give the impression of "mental illness, as opposed to some glorious revelation from God. ... It would sound polite if you said I scared myself thinking about quantum computers. And then I guess you just throw in your ordinary mental illness." Reflecting on the initial episode, he said, "I'm not especially proud of the logic and thinking. It looks very young and childish and pathetic. ... In the Bible it says if you seek God, He will be fond of you. I was really seeking, and I was looking everywhere to see what he might be saying to me."
          </span>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="August 11, 2018"
          dateClassName="text-white"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<img src={TerryOld} alt="terry old" className="rounded-full" />}
        >
          <h3 className="vertical-timeline-element-title">The End of the Beginning.</h3>
          <span className="font-thin">
            On the evening of August 11, 2018, while walking alongside railroad tracks in The Dalles, Oregon, Davis was struck and killed by a Union Pacific train. Investigators could not determine whether his death was suicide or accidental, although the train engineer believed his death to be a suicide. The police report stated that Davis was walking with his back toward the train and that he turned around before the moment of impact. When The Dalles Chronicle ran a story about an unnamed homeless man who was struck by a train, the newspaper was inundated with phone calls inquiring whether it was Davis, which the paper later confirmed in a follow-up piece.
          </span>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Timeline
