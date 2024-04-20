import React, { useRef, useEffect } from "react";
import { useState } from "react";
import "./Committee.css";
export default function Committee() {
  let imgBx = document.querySelectorAll(".imgBx");
  let contentBx = document.querySelectorAll(".contentBx");

  for (let i = 0; i < imgBx.length; i++) {
    imgBx[i].addEventListener("mouseover", function () {
      for (let i = 0; i < contentBx.length; i++) {
        contentBx[i].className = "contentBx";
      }
      document.getElementById(this.dataset.id).className = "contentBx active";

      for (let i = 0; i < imgBx.length; i++) {
        imgBx[i].className = "imgBx";
      }
      this.className = "imgBx active";
    });
  }
  return (
    <>
      <main>
        <div className="container">
          <div className="icon">
            <div
              className="imgBx active"
              style={{ "--i": 1 }}
              data-id="content1"
            >
              <img
                src="./images/team/HOMADHITYA_ACM_MEMBERSHIP_CHAIR.jpeg"
                alt="Chairperson"
              />
            </div>
            <div className="imgBx" style={{ "--i": 2 }} data-id="content2">
              <img src="./images/team/dharani.jpg" alt="Chairperson" />
            </div>
            <div className="imgBx" style={{ "--i": 3 }} data-id="content3">
              <img src="./images/team/srimadhav1.jpeg" alt="Vice Chairperson" />
            </div>
            <div className="imgBx" style={{ "--i": 4 }} data-id="content4">
              <img
                src="./images/team/Advaith_ACM_ secretary.jpeg"
                alt="Secretary"
              />
            </div>
            <div className="imgBx" style={{ "--i": 5 }} data-id="content5">
              <img src="./images/team/girish.jpg" alt="Tech Lead" />
            </div>
            <div className="imgBx" style={{ "--i": 6 }} data-id="content6">
              <img src="./images/team/yuvan_acm.jpg" alt="Treasurer" />
            </div>
            <div className="imgBx" style={{ "--i": 7 }} data-id="content7">
              <img src="./images/team/Bala.jpeg" alt="Content Lead" />
            </div>
            <div className="imgBx" style={{ "--i": 8 }} data-id="content8">
              <img src="./images/team/Siyamala.jpg" alt="Social Media Lead" />
            </div>
            <div className="imgBx" style={{ "--i": 9 }} data-id="content9">
              <img src="./images/team/shivani.JPG" alt="Management Lead" />
            </div>
            <div className="imgBx" style={{ "--i": 10 }} data-id="content10">
              <img src="./images/team/krishnaprasaad.jpg" alt="Web Master" />
            </div>
            <div className="imgBx" style={{ "--i": 11 }} data-id="content11">
              <img
                src="./images/team/Archisha_Sahai.jpg"
                alt="Outreach Team Lead"
              />
            </div>
            <div className="imgBx" style={{ "--i": 12 }} data-id="content12">
              <img src="./images/team/Harish.jpeg" alt="Design Lead" />
            </div>
          </div>
          <div className="content">
            <div className="contentBx active" id="content1">
              <div className="card">
                <div className="textBx">
                  <h2>
                    Technical Committee
                    <br />
                    <span>
                      The Chapter's backbone, the Technical Team not only
                      designs the websites and apps for the Chapter, but also
                      propogates the culture of coding across entire UPES and
                      works on projects that help students learn.
                    </span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="contentBx " id="content2">
              <div className="card">
                <div className="textBx">
                  <h2>
                    Events Committee
                    <br />
                    <span>
                      The brain of the chapter, this vivacious team is tasked
                      with organizing a variety of events, whether they are
                      technical or fun-filled. Through creative concepts and
                      flawless event execution, the Events team makes sure that
                      attendees enjoy every minute from conception to
                      conclusion.
                    </span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="contentBx " id="content3">
              <div className="card">
                <div className="textBx">
                  <h2>
                    PR & Sponsorship Committee
                    <br />
                    <span>
                      This committee is the face of the chapter. The PR and
                      Sponsorship team puts in immeasurable efforts to secure
                      sponsorships for the events, responds to inquiries, and
                      tries to increase the chapter's.
                    </span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="contentBx " id="content4">
              <div className="card">
                <div className="textBx">
                  <h2>
                    Editorial Committee <br />
                    <span>
                      In addition to being the brainchild behind the Chapter's
                      formal communications and blogs, the Editorial Team is
                      also responsible for documenting the Chapter's daily
                      proceedings.
                    </span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="contentBx " id="content5">
              <div className="card">
                <div className="textBx">
                  <h2>
                    Design & VFX Committee <br />
                    <span>
                      This distinguished committee is the creative house of the
                      chapters. The Design and VFX team always leads from the
                      forefront by fabricating breathtaking videos and
                      developing visually appealing graphic material such as
                      images and animations.
                    </span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="contentBx " id="content6">
              <div className="card">
                <div className="textBx">
                  <h2>
                    CSR Committee
                    <br />
                    <span>
                      Being the reflection of the chapter’s ethics and deeds,
                      the CSR committee curates activities that help contribute
                      to the upliftment of society. It promotes education, and
                      vocational skills among young children.
                    </span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="contentBx " id="content7">
              <div className="card">
                <div className="textBx">
                  <h2>
                    Social Media Committee
                    <br />
                    <span>
                      The Social Media Committee is responsible for innovatively
                      using social media platforms as a means to connect and
                      engage members, grow the membership base, and come up with
                      strategies to increase the chapters’ social media
                      presence.
                    </span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="contentBx " id="content8">
              <div className="card">
                <div className="textBx">
                  <h2>
                    Logistics Committee <br />
                    <span>
                      The Logistics committee works behind the scenes to ensure
                      the smooth functioning of every event or activity of the
                      chapters. This team provides back-end support to every
                      other committee by managing all the arrangements
                      flawlessly.
                    </span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="contentBx " id="content9">
              <div className="card">
                <div className="textBx">
                  <h2>
                    Shivani Vinod
                    <br />
                    <span>Management lead</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="contentBx " id="content10">
              <div className="card">
                <div className="textBx">
                  <h2>
                    Krishna <br />
                    <span>Web Master</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="contentBx " id="content11">
              <div className="card">
                <div className="textBx">
                  <h2>
                    Archisha Sahai
                    <br />
                    <span>Outreach team lead</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="contentBx " id="content12">
              <div className="card">
                <div className="textBx">
                  <h2>Harish A S</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
