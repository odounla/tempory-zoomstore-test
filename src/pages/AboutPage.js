import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg-2023.jpg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Once upon a time, in a bustling digital landscape, there was a
            visionary team of entrepreneurs who set out to revolutionize the way
            people shop. They dreamed of creating an extraordinary online
            shopping experience that would bring joy, convenience, and limitless
            possibilities to customers worldwide. With unwavering determination,
            they founded Zoom Store, an e-commerce platform like no other. Zoom
            Store began its journey as a small virtual marketplace, offering a
            curated selection of cutting-edge, sportwear, sneakers, cloths , and
            electronics. Customers quickly discovered the convenience of
            shopping from the comfort of their homes, enjoying the thrill of
            exploring a vast array of products at their fingertips. The team at
            Zoom Store knew they were onto something special, and they were
            determined to build upon this initial success.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
