interface Event {
  eventName: string;
  eventDescription: string;
  eventTime: string;
}
export interface UniversityEvents {
  universityName: string;
  events: Event[];
}

export const universityEventsList: UniversityEvents[] = [
  {
    universityName: "ICFAI University Himachal Pradesh",
    events: [
      {
        eventName:
          "National Workshop on “NEP 2020 Sensitization and Awareness”",
        eventDescription:
          "The ICFAI University Raipur, under the aegis of the NEP 2020 Cell and IQAC, successfully hosted a one-day national workshop on “NEP 2020 Sensitization and Awareness.” The workshop aimed to disseminate the key principles and implementation strategies of the National Education Policy (NEP) 2020, drawing participation from educators, policymakers, and administrators from across the country.",
        eventTime: "Aug 07, 2024",
      },
      {
        eventName: "Annual Technology Innovation Summit",
        eventDescription:
          "A summit showcasing groundbreaking innovations in technology and how they can be applied in education.",
        eventTime: "Sep 10, 2024",
      },
      {
        eventName: "Mental Health and Wellness Week",
        eventDescription:
          "A week-long event dedicated to promoting mental health awareness among students and faculty.",
        eventTime: "Oct 15, 2024",
      },
      {
        eventName: "Annual Technology Innovation Summit",
        eventDescription:
          "A summit showcasing groundbreaking innovations in technology and how they can be applied in education.",
        eventTime: "Sep 10, 2024",
      },
      {
        eventName: "Mental Health and Wellness Week",
        eventDescription:
          "A week-long event dedicated to promoting mental health awareness among students and faculty.",
        eventTime: "Oct 15, 2024",
      },
    ],
  },
  {
    universityName: "ICFAI Business School Dehradun",
    events: [
      {
        eventName: "International Conference on Sustainable Education",
        eventDescription:
          "A global platform to discuss sustainable education practices and their implementation in modern curriculums.",
        eventTime: "Aug 20, 2024",
      },
      {
        eventName: "Workshop on Digital Learning Tools",
        eventDescription:
          "A hands-on workshop to introduce educators to the latest digital tools for enhancing learning experiences.",
        eventTime: "Sep 25, 2024",
      },
      {
        eventName: "Annual Cultural Fest",
        eventDescription:
          "A week-long celebration of cultural diversity through performances, exhibitions, and interactive sessions.",
        eventTime: "Nov 10, 2024",
      },
    ],
  },
  {
    universityName: "ICFAI Business School Gurgaon",
    events: [
      {
        eventName: "Entrepreneurship Development Program",
        eventDescription:
          "A program aimed at nurturing entrepreneurial skills among students through workshops and mentorship sessions.",
        eventTime: "Aug 25, 2024",
      },
      {
        eventName: "National Symposium on Climate Change",
        eventDescription:
          "A symposium discussing the impact of climate change and the role of education in addressing it.",
        eventTime: "Sep 30, 2024",
      },
      {
        eventName: "Sports Week 2024",
        eventDescription:
          "An annual sports event featuring inter-college competitions in various sports disciplines.",
        eventTime: "Dec 05, 2024",
      },
    ],
  },
  {
    universityName: "ICFAI Business School Jaipur",
    events: [
      {
        eventName: "National Conference on Ancient Indian Education",
        eventDescription:
          "A conference dedicated to exploring ancient Indian education systems and their relevance today.",
        eventTime: "Sep 05, 2024",
      },
      {
        eventName: "Workshop on Art and Cultural Preservation",
        eventDescription:
          "A workshop focusing on the preservation of traditional arts and culture in modern society.",
        eventTime: "Oct 12, 2024",
      },
      {
        eventName: "Annual Research Conference",
        eventDescription:
          "A platform for researchers to present their work and discuss future directions in various fields.",
        eventTime: "Nov 22, 2024",
      },
    ],
  },
  {
    universityName: "ICFAI University Sikkim",
    events: [
      {
        eventName: "Seminar on Artificial Intelligence in Education",
        eventDescription:
          "A seminar discussing the role of AI in transforming educational practices.",
        eventTime: "Aug 12, 2024",
      },
      {
        eventName: "Workshop on Renewable Energy Solutions",
        eventDescription:
          "A workshop focusing on renewable energy solutions and their applications in educational institutions.",
        eventTime: "Sep 20, 2024",
      },
      {
        eventName: "Literature Fest 2024",
        eventDescription:
          "A literary festival celebrating contemporary and classic literature through readings, discussions, and workshops.",
        eventTime: "Oct 18, 2024",
      },
    ],
  },
];
