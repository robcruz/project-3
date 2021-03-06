import React from "react"
import "./Info.css";
import { Tabs, Tab, Panel } from '@bumaga/tabs'
import Collapsible from 'react-collapsible';



export default props => (


  <div className="Table-Wrapper">

    <h1 className="namestyle">How Does SwapMe Work?</h1>

    <hr></hr>


    <Tabs>
      <div>
        <Tab><button className="tab">About</button></Tab>
        <Tab><button className="tab">Rules</button></Tab>
        <Tab><button className="tab">Contact</button></Tab>
        <Tab><button className="tab">Report</button></Tab>
      </div>



      <Panel>
        <div className="BG">
          <div className="contactContainer">
            <h2 className="title">About SwapMe</h2>
            <p className="info"> Swap Me is an application developed Aleksei Cruz, Rob Gaerlan, Kaden Maguglin, and Michael Myers. The purpose of this app is to provide an easy,
         all in one solution to the bartering market. A direct, straight trade application, made for people to easily chat, and trade their items locally. </p>
          </div>
        </div>

      </Panel>

      <Panel>
        <div className="BG">
          <div className="contactContainer">
            <h2 className="contactTitle">The Rules</h2>
            <Collapsible className="infoheader" trigger=" POST ">
              <p className="description">Step one: go to the swap tab, and post your item. Make sure to include your email address so people know where to contact you!</p>
            </Collapsible>


            <br></br>

            <Collapsible className="infoheader" trigger=" CHAT " >
              <p className="description">Step two: chat with someone who's interested in your item, here's where you decide what to trade for, and how to trade it!</p>
            </Collapsible>

            <br></br>

            <Collapsible className="infoheader" trigger=" TRADE ">
              <p className="description">Meet up and straight trade your items, maybe even make a new friend!</p>
            </Collapsible>
          </div>
        </div>
      </Panel>

      <Panel>
        <div className="BG">
          <div className="contactContainer">
            <h2 className="contactTitle">Contact Us</h2>
            <form class="form">
              <p type="Name:"><input className="contactTab" placeholder="Write your name here.."></input></p>
              <p type="Email:"><input className="contactTab" placeholder="Let us know how to contact you back.."></input></p>
              <p type="Message:"><input className="contactTab" placeholder="What would you like to tell us.."></input></p>
              <button className="sendTab">Send Message</button>

            </form>
          </div>
        </div>

      </Panel>


    </Tabs>

  </div>

);



export const Body2 = () => (

  <div>
    <div>hi</div>
  </div>
);

export const Body3 = () => (
  <div>
    <div>hi</div>
  </div>
);
