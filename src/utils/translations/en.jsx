export const en = {
  pages: {
    home: {
      hero: {
        text: "The scale of the challenges facing our planet can seem daunting, but we can all do something."
      },
      team: {
        title: "Our top team",
        text: "Learn more about how you can save our planet's nature.",
        members: [
          { id: 1, name: "Ivan", trans: (x, y) => `translate(${x / 45}px,${y / -40 - 10}px)` },
          { id: 2, name: "Valeria", trans: (x, y) => `translate(${x / -30}px,${y / 25}px)` },
          { id: 3, name: "Yehor", trans: (x, y) => `translate(${x / 55}px,${y / -40}px)` }
        ]
      },
      login: {
        title: "Get started today!",
        text: "Learn more about how you can save our planet's nature. From smart consumption to switching to renewable energy, each of us can do our part to save the planet.",
        formTitle: "Log in"
      },
      faq: {
        title: "Ready to Get started?",
        description:
          "When pattern is mentioned in interior design, it is easy to asso- ciate it with a geometric patterned wallpaper or colourful prints on interior fabrics.",
        btn: "Contact us",
        items: [
          {
            id: 1,
            question: "What can I do to protect our planet?",
            answer:
              "Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources"
          },
          {
            id: 2,
            question: "How to save nature ecology?",
            answer:
              "Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources"
          },
          {
            id: 3,
            question: "What is nature conservation?",
            answer:
              "Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources"
          }
        ]
      },
      saves: {
        items: [
          { id: 1, title: "Avoid plastic", text: "Taking on the issue of ensuring access to safe water requires worldwide effort." },
          { id: 2, title: "Choose organic", text: "Taking on the issue of ensuring access to safe water requires worldwide effort." },
          { id: 3, title: "Save water", text: "Taking on the issue of ensuring access to safe water requires worldwide effort." },
          { id: 4, title: "Plant trees", text: "Taking on the issue of ensuring access to safe water requires worldwide effort." },
          { id: 5, title: "Save energy", text: "Taking on the issue of ensuring access to safe water requires worldwide effort." }
        ]
      }
    },
    pageNotFound: {
      title: "Oops..! Page Not Found"
    }
  },
  footer: {
    title: "Contacts",
    contactsText: "2019 Rootz Foundation. All rights reserved",
    headquartersTitle: "Headquarters",
    headquartersText: (
      <>
        1234 Taliban Los&nbsp;Angeles, La, 1234567 <a href="tel:(123) 456-7890">(123) 456-7890</a>
      </>
    ),
    socialTitle: "Social media",
    socials: ["twitter", "facebook", "linkedin"]
  },
  navigation: [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "Our mission", url: "/our-mission" },
    { id: 3, name: "Places", url: "/places" },
    { id: 4, name: "Team", url: "/team" }
  ],
  alts: {
    goToMain: "Go to main page",
    twitter: "Go to Twitter",
    facebook: "Go to Facebook",
    linkedin: "Go to Linkedin"
  },
  btn: {
    apply: "Apply",
    search: "Search",
    book: "Book a demo",
    contact: "Contact us",
    goToMain: "Back home"
  },
  forms: {
    name: {
      placeholder: "Name"
    },
    email: {
      placeholder: "Email"
    },
    search: {
      placeholder: "Find the place to help"
    }
  },
  socials: {
    twitter: "https://twitter.com/",
    facebook: "https://www.facebook.com/",
    linkedin: "https://www.linkedin.com/feed/"
  }
};
