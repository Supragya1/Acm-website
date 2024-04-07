import React from "react";
import Card from "./Card";

const BoardofExecutives = [
  {
    name: "Sarthak Rathore",
    position: "Member",
    image: "./../assets/Sarthak.jpg",
    variable: "BOE",
    linkedin: "",
    github: "",
    instagram: "",
  },
  {
    name: "Vaishnavi Srivastava",
    position: "Member",
    image: "./../assets/vaishnavi.jpg",
    variable: "BOE",
    linkedin: "",
    github: "",
    instagram: "",
  },
  {
    name: "Rishika Bhalla",
    position: "Member",
    image: "./../assets/RishikaImg.jpeg",
    variable: "BOE",
    linkedin: "",
    github: "",
    instagram: "",
  },
  {
    name: "Aditya Pilani",
    position: "Member",
    image: "./../assets/adityapilani.jpg",
    variable: "BOE",
    linkedin: "",
    github: "",
    instagram: "",
  },
  {
    name: "Bharat Anand",
    position: "Member",
    image: "./../assets/bharat.jpeg",
    variable: "BOE",
    linkedin: "",
    github: "",
    instagram: "",
  },
  {
    name: "Rohit Gupta",
    position: "Member",
    image: "./../assets/rohit.jpg",
    variable: "BOE",
    linkedin: "",
    github: "",
    instagram: "",
  },
  {
    name: "Chetany Bhardwaj",
    position: "Member",
    image: "./../assets/chetany.jpg",
    variable: "BOE",
    linkedin: "",
    github: "",
    instagram: "",
  },
  {
    name: "Aadish Bansal",
    position: "Member",
    image: "./../assets/adish.jpg",
    variable: "BOE",
    linkedin: "",
    github: "",
    instagram: "",
  },
  {
    name: "Dhroov Sharma",
    position: "Member",
    image: "./../assets/dhroov.jpg",
    variable: "BOE",
    linkedin: "",
    github: "",
    instagram: "",
  },
  {
    name: "Ayush Pradhan",
    position: "Member",
    image: "./../assets/ayush.jpg",
    variable: "BOE",
    linkedin: "",
    github: "",
    instagram: "",
  },
];
const OfficeBearers = [
  {
    name: "Mr.Pankaj Badoni",
    position: "Faculty Coordinator",
    image: "./../assets/pankaj.jpg",
    variable: "",
    linkedin: "",
    github: "",
    instagram: "",
  },
  {
    name: "Utkarsh Rastogi",
    position: "Chairperson",
    image: "./../assets/utkarsh.jpg",
    variable: "ACM",
    linkedin: "",
    github: "",
    instagram: "",
  },
  {
    name: "Siddhant Kwatra",
    position: "Vice-Chairperson",
    image: "./../assets/siddhant.jpg",
    variable: "ACM",
    linkedin: "",
    github: "",
    instagram: "",
  },
  {
    name: "Kavya Chugh",
    position: "Treasurer",
    image: "./../assets/Kavya.jpeg",
    variable: "ACM",
    linkedin: "",
    github: "",
    instagram: "",
  },
  {
    name: "Sahil Bathla",
    position: "Secretary",
    image: "./../assets/sahil.jpg",
    variable: "ACM",
    linkedin: "",
    github: "",
    instagram: "",
  },
  {
    name: "Shradha Mudgil",
    position: "Joint Secretary",
    image: "./../assets/shradha.jpg",
    variable: "ACM",
    linkedin: "",
    github: "",
    instagram: "",
  },
  {
    name: "Md Arslan",
    position: "Technical Head",
    image: "./../assets/arslan.jpg",
    variable: "ACM",
    linkedin: "",
    github: "",
    instagram: "",
  },
  {
    name: "Aarohi Sharma",
    position: "Event Head",
    image: "./../assets/aarohisharma.jpg",
    variable: "ACM",
    linkedin: "",
    github: "",
    instagram: "",
  },

  {
    name: "Lavanya Arora",
    position: "PR & Sponsorship Head",
    image: "./../assets/lavanya.jpg",
    variable: "ACM",
    linkedin: "",
    github: "",
    instagram: "",
  },

  {
    name: "Gurmehr Singh Gulati",
    position: "Joint PR & Sponsorship Head",
    image: "./../assets/gurmehr.jpg",
    variable: "ACM",
    linkedin: "",
    github: "",
    instagram: "",
  },
  {
    name: "Aarohi Saxena",
    position: "Social Media Head",
    image: "./../assets/aarohisaxena.jpg",
    variable: "ACM",
    linkedin: "",
    github: "",
    instagram: "",
  },
  {
    name: "Diya Rana",
    position: "Editorial Head",
    image: "./../assets/diya.jpg",
    variable: "ACM",
    linkedin: "",
    github: "",
    instagram: "",
  },
  {
    name: "Harvijay Singh Virk",
    position: "CSR Head",
    image: "./../assets/harvijay.jpg",
    variable: "ACM",
    linkedin: "",
    github: "",
    instagram: "",
  },
  {
    name: "Rajdeep Singh Sidhu",
    position: "Logistics Head",
    image: "./../assets/rajdeep.jpg",
    variable: "ACM",
    linkedin: "",
    github: "",
    instagram: "",
  },
  {
    name: "Supragya Gandotra",
    position: "Design Head",
    image: "./../assets/supragya.jpg",
    variable: "ACM",
    linkedin: "",
    github: "",
    instagram: "",
  },
  {
    name: "Milan Singhal",
    position: "Joint Design Head",
    image: "./../assets/milan.jpg",
    variable: "ACM",
    linkedin: "",
    github: "",
    instagram: "",
  },
  {
    name: "Anchit Das",
    position: "VFX Head",
    image: "./../assets/anchit.jpg",
    variable: "ACM",
    linkedin: "",
    github: "",
    instagram: "",
  },
];

function Team() {
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="heading">
            <h1>Meet our team</h1>
            <h2>XYZ</h2>
          </div>

          <div className="card-container">
            <h2>Board of Executives</h2>

            <div className="wrapper-div">
              {BoardofExecutives.map((executive) => (
                <Card
                  name={executive.name}
                  position={executive.position}
                  image={executive.image}
                  variable={executive.variable}
                  linkedin={executive.linkedin}
                  github={executive.github}
                  instagram={executive.instagram}
                />
              ))}
            </div>

            <h2>Office Bearers</h2>

            <div className="wrapper-div">
              {OfficeBearers.map((bearer) => (
                <Card
                  name={bearer.name}
                  position={bearer.position}
                  image={bearer.image}
                  variable={bearer.variable}
                  linkedin={bearer.linkedin}
                  github={bearer.github}
                  instagram={bearer.instagram}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
