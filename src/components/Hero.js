import React from "react";
import {MarketingButton} from "../styles/Button";
import {Wrapper, FoodElements, SaucePosition, PizzaPosition, TopHero, SubHero, TrustSection} from "../styles/Header";
import {sauceFull, pizza} from "../icons";

function Hero({handleLogIn}) {
  return (
    <React.Fragment>
      <TopHero>
        <Wrapper>
          <div style={{paddingTop: 24}}>
            <h1>The path to your next</h1>
            <h2>Open Source</h2>
            <h1>contribution.</h1>
          </div>
          <FoodElements>
            <SaucePosition alt="sauce" src={sauceFull} />
            <PizzaPosition alt="pizza" src={pizza} />
          </FoodElements>
        </Wrapper>
      </TopHero>
      <SubHero>
        <Wrapper>
          <MarketingButton primary onClick={handleLogIn}>
            Login
          </MarketingButton>
          <a href="">
            <MarketingButton>Read The Story</MarketingButton>
          </a>
        </Wrapper>
      </SubHero>
      <TrustSection>
        {/*
        <small>Trusted By</small>
        <ul>
          <li>ONE</li>
          <li>TWO</li>
          <li>THREE</li>
          <li>FOUR</li>
        </ul>
        */}
      </TrustSection>
    </React.Fragment>
  );
}

export default Hero;
