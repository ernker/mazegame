import React from 'react'
import logo2 from '../../public/img/rubic-cube.gif'

export default class About extends React.Component {

    render() {
        return (
            <div className='rules-main-text'>
               <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 30}}>Cloud Squad</h1>
                <br />
               <p style={{ textIndent: 20}}>
                Cloud Squad is a group of professionals working on developement, integration and adoption of Cloud technologlies. We can call ourselves „Cluodophiles“. We don‘t represent any particular organisation or any employer of ours. It is a community group where everyone can join if is technically strong with extensive experience and loves (or is not tired of) challenges. 
                At the moment our squad members are mainly from Vilnius, however we are open to enthusiasts from other cities around Lithuania/Baltic region. 
                Please follow us for more details and particular dates and agenda for meetups or topics presented by us to be organised on periodical basis. 
               </p>
               <br />
               <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 30}}>„The maze game“ </h1>
               <br />
               <p style={{ textIndent: 20}}>
                We invite everyone who can code Python (for now it is only Python) and loves challenges, to participate in competition of writing the most effective and efficient code to solve our „Maze“. 
                This challenge will be running from late May till September 1st – with winners announced during first days of Septemeber, 2017. 
                Prizes for you to compete for will be published till 1st of June – please keep an eye on this page! 
                Are you strong and ready enough to conquer THE MAZE GAME? – prove it now by registering and providing your code!
               </p>
            </div>
        )
    }
}
