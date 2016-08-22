app.controller('BlogController', function($scope, $routeParams) {
  $scope.name = 'BlogController';
  $scope.params = $routeParams;
  $scope.entrys = [

    {
      title: "The Start Of A Long Summer!",
      intro: "My big summer project!",
      date: "14/05/2016",
      tagphoto: "image/blog/1.jpg",
      content: [
        {
          heading: "",
          text: "Hello! So this weekend I've been busy at work getting the musicians of Manchester together to help out on my project!",
          photos: [
            {
              location: "",
              url: "image/blog/1.jpg",
              comment: "[spunge] Gig",
              date: "",
            },
          ],
        },
        {
          heading: "",
          text: "So far I've got over 20 eager to help me out! Throughout my journey I will be keeping this blog, a vlog on YouTube and putting all the photos on my Facebook page!",
          photos: [
            {
              location: "",
              url: "image/blog/2.jpg",
              comment: "Sound Of Dream",
              date: "",
            },
          ],
        },
        {
          heading: "",
          text: "I'll see you on the next post!",
          photos: [
            {
              location: "",
              url: "image/blog/3.jpg",
              comment: "Andrew Warner",
              date: "",
            },
          ],
        },
      ],
    },

    {
      title: "My Summer Project",
      intro: "What am I doing?",
      date: "10/07/2016",
      tagphoto: "image/blog/2.jpg",
      content: [
        {
          heading: "",
          text: "No....Really...What am I doing? So these past few months i've been starting off with my photography project! I've been going round photographing lot's of musicians! It's been fun and stressful! But as one for my favourite musicians says 'But in the end journey's brought joys that outweigh the pain.' So I guess that after all this I will look back and see the work i've done and be proud! That's what i'm hoping anyway!",
          photos: [
            {
              location: "",
              url: "image/blog/1.jpg",
              comment: "[spunge] Gig",
              date: "",
            },
          ],
        },
        {
          heading: "",
          text: "This whole project is to get the smaller, lesser known musicians around Manchester a good bit of promotion! It also gives me a chance to work with new musicians and different types of acts in hope to build up my portfolio! I'm working with many musicians from solo acts to bands! It has been loads of fun so far but it has also been taking over my life! This and starting my new job AND moving house! But as I said before, it will all be worth it in the end!",
          photos: [
            {
              location: "",
              url: "image/blog/2.jpg",
              comment: "Sound Of Dream",
              date: "",
            },
          ],
        },
        {
          heading: "",
          text: "I am hoping for this to last until mid September and then i can do a huge summary to send out to various music folk to get the musicians i'm working with some well deserved promotion! I will still continue a few gigs from September but i will have  to prioritise Uni and my job! Once I've worked out more into this wholo blog and vlogging i will be able to show you who i've been working with so far!",
          photos: [
            {
              location: "",
              url: "",
              comment: "",
              date: "",
            },
          ],
        },
        {
          heading: "",
          text: "Until then all the updates are on my facebook page! The link to that should be at the bottom of this page!",
          photos: [
            {
              location: "",
              url: "",
              comment: "",
              date: "",
            },
          ],
        },
        {
          heading: "",
          text: "Thanks for reading! Speak soon, stay lucky x ",
          photos: [
            {
              location: "",
              url: "image/blog/3.jpg",
              comment: "Andrew Warner",
              date: "",
            },
          ],
        },
      ],
    },

    {
      title: "March Gigs!",
      intro: "Here's a little info about the gigs i went to throughout March!",
      date: "10/07/2016",
      tagphoto: "image/blog/marchdogcoffee1.jpg",
      content: [
        {
          heading: "",
          text: "Sadly, I only went to 3 gigs in March due to exam prep with uni! I saw the awesome Dog Coffee twice and then one of my favourite bands Rusty Shackle!",
          photos: [
            {
              location: "The Ram & Shackle",
              url: "image/blog/marchdogcoffee1.jpg",
              comment: "Dog Coffee",
              date: "",
            },
          ],
        },
        {
          heading: "",
          text: "This gig was the start of my photography journey with Mr Dog Coffee! I've now lost count at how many times i've seen him play! Here's him playing at The Ram & Shackle! It was an...interesting gig for sure!",
          photos: [
            {
              location: "Gullivers",
              url: "image/blog/marchrustyshackle.jpg",
              comment: "Rusty Shackle",
              date: "",
            },
          ],
        },
        {
          heading: "",
          text: "I got introduced to Rusty Shackle at Beautiful Days Festival and I fell in love! I've been listening to them for several years now and they finally played in Manchester so i could see them! I also got the huge pleasure of photographing them!",
          photos: [
            {
              location: "The Lightroom",
              url: "image/blog/marchdogcoffee2.jpg",
              comment: "Dog Coffee",
              date: "",
            },
          ],
        },
        {
          heading: "",
          text: "This was my second time photographing for Dog Coffee! He played at The Lightroom which i have learnt is an awesome venue!",
          photos: [
            {
              location: "",
              url: "",
              comment: "",
              date: "",
            },
          ],
        },
      ],
    },
  ];
})

/* START OF ENTRY TEMPLATE
{
  title: "",
  intro: "",
  date: "//",
  tagphoto: "image/blog/",
  content: [

    {
      heading: "",
      text: "",
      photos: [
        {
          location: "",
          url: "image/blog/",
          comment: "",
          date: "//",
        },
      ],
    },

    {
      photos: [
        {
          location: "",
          url: "image/blog/",
          comment: "",
          date: "//",
        },
      ],
    },

    {
      heading: "",
      text: "",
    },

  ],
},
END OF ENTRY TEMPLATE*/
