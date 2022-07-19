import React from 'react'
import TeamMemberCard from '../components/TeamMemberCard'


const OurTeam = () => {
  return (
    <section className='pt-16'>
        <section className='container max-w-screen-xl grid md:grid-cols-2 gap-5 md:grid-rows-6' >
            <div className='md:row-span-1'>
                <h2 className="uppercase text-main-primary font-medium pb-4 text-xl text-center lg:text-start" style={{ letterSpacing: '7px' }}>our team</h2>
                    <h3 className="text-3xl font-bold pb-7 capitalize text-center lg:text-start"> meet our <br/> team members</h3>
            </div>
            <TeamMemberCard name="hesham ahmed" title="founder &amp; architect" image="team-member-1.jpg"/>
            <TeamMemberCard name="yahya mohamed" title="building contractor" image="team-member-2.jpg"/>
            <TeamMemberCard name="osama ayman" title="engineer" image="team-member-3.jpg"/>
            <TeamMemberCard name="ahmed aziz" title="engineer" image="team-member-4.jpg"/>

        </section>
    </section>
    )
}

export default OurTeam