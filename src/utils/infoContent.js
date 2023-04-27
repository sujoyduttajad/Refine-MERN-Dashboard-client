/* DO NOT DELETE Unless you want to use the app as a template, then just change the content */
// This is particularly for the Help&Info page

export const companyInfo = {
  content: `Evoia is a Property management platform where Properties can be uploaded 
    by agents and then could be used for selling or advertising the properties. 
    Real-Estate agents can login to the app with their Google account and quickly 
    create their profile and start uploading properties. A step-by-step guide is also provided below.`,

  aboutMe: `
  I'm a skilled Frontend Developer with a passion for transforming business requirements 
  into meaningful tech applications. With a deep understanding of both technology and business, 
  I create user-friendly and visually appealing websites and web applications.
  You can find me on Twitter and GitHub, where I share my latest projects and insights. `,

  vision: `Hi, I'm Sujoy Dutta, creator and admin of Evoia. I created this app with an intent 
  to make life easier for Real-estate agents to create and update properties seamlessly with 
  creating a massive data store of all types of properties that will drive their revenue high. 
  `,
};

export const guideLabel = {
  desc1: "Click on the Properties Tab in the sidebar as shown in the image",
  desc2:
    "Now click on the 'Add Property' button on the top right corner to create a new property",
  desc3: `Filling the form is straight forward just at the appropriate values in the appropriate places. 
    Make sure the Property name is valid if you don't have then made up a name but don't put the address in place of the name.
    Add a specific property type from the dropdown. 
    The price should be only numbers and no currency symbol since all properties are in USD.
    The location should ideally be a real address of the associated property.
    Please upload a front facing photo of the property for now only one photo can be uploaded. 
    `,
};

export const linkInfo = [
  {
    address: "https://www.realtor.com/",
    title: "Realtor.com ",
  },
  {
    address: "https://www.sothebysrealty.com/eng",
    title: "Sotheby's International Realty",
  },
  {
    address: "https://www.zillow.com/",
    title: "Zillow",
  },
  {
    address: "https://www.jamesedition.com/",
    title: "JamesEdition Luxury Homes",
  },
];

export const mediaInfo = {
  pages: [
    {
      address: "/",
      title: "Dashboard",
    },
    {
      address: "/properties",
      title: "Properties",
    },
    {
      address: "/agents",
      title: "Agents",
    },
    {
      address: "/reviews",
      title: "Reviews",
    },
  ],
  resources: [
    {
      address: "/messages",
      title: "Messages",
    },
    {
      address: "/help",
      title: "Help & Info",
    },
    {
      address: "/my-profile",
      title: "My Profile",
    },
    {
      address: "/legal-terms",
      title: "Legal Terms"
    }
  ],
};
