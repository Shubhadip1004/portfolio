// src/data/publications.js

const publications = [
  {
    id: 1,

    // Publication Information
    publicationType: "Book Chapter",
    status: "Published",

    title:
      "Enhanced Black Hole Optimization: A Metaheuristic Approach to Address Optimization Challenges",

    description:
      "Proposes an Enhanced Black Hole Optimization (EBHO) algorithm that improves convergence speed and solution quality for complex optimization problems. The work was initially presented at ICDMIS 2025 and later published as a Springer book chapter in the Lecture Notes in Networks and Systems (LNNS) series.",

    // Publisher Details
    publisher: "Springer",
    series: "Lecture Notes in Networks and Systems (LNNS)",
    presentedAt: "ICDMIS 2025",

    year: 2025,

    // Optional (Fill these later if available)
    volume: "1970",
    chapter: "",
    doi: "https://doi.org/10.1007/978-3-032-25952-3_10",
    isbn: "978-3-032-25952-3",

    // Authors
    authors: [
      "Shubhadip Mahata",
      "Soumyadip Paul",
      "Partha Ghosh"
    ],

    // Thumbnail shown on the card
    previewImage: "/images/publications/ebho-first-page.jpg",

    // Buttons
    previewLink:
      "https://drive.google.com/file/d/1H_qo6NSdupjrvyRTEp0dT5SlDz-La45I/view?usp=drive_link",

    publicationLink:
      "https://link.springer.com/chapter/10.1007/978-3-032-25952-3_10",

    // Optional tags (can be displayed as chips later)
    keywords: [
      "Metaheuristic Algorithm (MA)",
      "Optimization",
      "Enhanced Black Hole Optimization (EBHO)",
      "Exploration",
      "Exploitation"
    ]
  }
];

export default publications;