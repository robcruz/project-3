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
      </div>


      <Panel>
        <div className="infoContainer">
        <h2 className="title">About SwapMe</h2>
        <p className="info"> Swap Me is an application developed Aleksei Cruz, Rob Gaerlan, Kaden Maguglin, and Michael Myers. The purpose of this app is to provide an easy,
         all in one solution to the bartering market. A direct, straight trade application, made for people to easily chat, and trade their items locally. </p>
         </div>

      </Panel>

      <Panel>

        <h2>The Rules</h2>
        <Collapsible className="infoheader" trigger=" POST ">
          <p>Step one: go to the swap tab, and post your item. Make sure to include your email address so people know where to contact you!</p>
        </Collapsible>

        <br></br>

        <Collapsible className="infoheader" trigger=" CHAT " >
          <p>Step two: chat with someone who's interested in your item, here's where you decide what to trade for, and how to trade it!</p>
        </Collapsible>

        <br></br>

        <Collapsible className="infoheader" trigger=" TRADE ">
          <p>Meet up and straight trade your items, maybe even make a new friend!</p>
        </Collapsible>

      </Panel>

      <Panel>
        <h2>Contact Us</h2>
        <form class="form">
          <p type="Name:"><input className="contactTab" placeholder="Write your name here.."></input></p>
          <p type="Email:"><input  className="contactTab" placeholder="Let us know how to contact you back.."></input></p>
          <p type="Message:"><input  className="contactTab" placeholder="What would you like to tell us.."></input></p>
          <button className="sendTab">Send Message</button>

        </form>


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
