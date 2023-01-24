const siteConfig = {
  seo: {
    title: 'TechnoDev Blog',
    author: 'technodev',
    copyright: 'technodev',
    description:
      'Browse programming tutorials and articles. Learn Web Development, Blockchain, Web3 and Technical writing.',
    image:
      'https://res.cloudinary.com/technodevblog/image/upload/v1674575242/Blog/Technodev_Blog_v2q5q8.png',
    altText: 'technodev - blog',
    ogType: 'website',
    monetizationTag: '',
    twitterUsername: '@',
    pages: {
      supportMe: {
        title: 'Support Me | technodev - blog',
        description:
          'Your support keeps this blog alive and motivates me to keep creating content.',
        image:
          'https://res.cloudinary.com/technodevblog/image/upload/v1674575554/Blog/Support_-_Technodev_Blog_u1pafl.png'
      },
      articles: {
        title: 'Articles | technodev - blog',
        description:
          'Read articles on web development, web3, blockchain, design, and more.',
        image:
          'https://res.cloudinary.com/technodevblog/image/upload/v1674581365/Blog/Articles_-_Technodev_Blog_dmwb52.png'
      },
      snippets: {
        title: 'Snippets | technodev - blog',
        description:
          'Snippets are code samples and quick tips that I have written. Explore and share them.',
        image:
          'https://res.cloudinary.com/technodevblog/image/upload/v1674581365/Blog/Snippets-_Technodev_Blog_v2dsnw.png'
      },
      categories: {
        title: 'Categories | technodev - blog',
        description: 'Browse different categories.',
        image:
          'https://res.cloudinary.com/technodevblog/image/upload/v1674581366/Blog/Categories-_Technodev_Blog_yh64ja.png'
      },
      tags: {
        title: 'Tags | technodev - blog',
        description: 'Explore all the tags.',
        image:
          'https://res.cloudinary.com/technodevblog/image/upload/v1674581365/Blog/Tags-_Technodev_Blog_jlxjtr.png'
      },
      privacy: {
        title: 'Privacy Policy | technodev - blog',
        description: 'This page contains technodev - blog privacy policies.',
        image:
          'https://res.cloudinary.com/technodevblog/image/upload/v1674581365/Blog/Privacy-_Technodev_Blog_kugijg.png'
      },
      cookie: {
        title: 'Cookie Policy | technodev - blog',
        description: 'This page contains technodev - blog cookie policies.',
        image:
          'https://res.cloudinary.com/technodevblog/image/upload/v1674581365/Blog/cookie-_Technodev_Blog_i5bawd.png'
      },
      terms: {
        title: 'Terms & Conditions | technodev - blog',
        description: 'This page contains technodev - blog terms & conditions.',
        image:
          'https://res.cloudinary.com/technodevblog/image/upload/v1674581365/Blog/Terms-_Technodev_Blog_ekwdjd.png'
      },
      externalArticles: {
        title: 'External Articles | technodev - blog',
        description: 'Read articles written by technodev on other sites.',
        image:
          'https://res.cloudinary.com/technodevblog/image/upload/v1674581365/Blog/External-_Technodev_Blog_vlu2pd.png'
      }
    }
  },
  branding: {
    logo: 'https://res.cloudinary.com/technodevblog/image/upload/v1674581364/Blog/logo_ujsy0h.png',
    colors: {
      brand: {
        50: '#7868E6',
        100: '#FF5403',
        200: '#FF2E63',
        300: '#FFCC00',
        400: '#48466D',
        500: '#769FCD'
      },
      text: '#454E56',
      themeLight: '#7868E6',
      themeDark: '#000000'
    },
    fonts: {
      heading: 'Alliance No 2',
      body: 'Poppins'
    }
  },
  urls: {
    socials: {
      twitter: 'https://twitter.com/',
      linkedin: 'https://www.linkedin.com/in/',
      github: 'https://github.com/',
      showwcase: ''
    },
    about: '',
    status: '',
    newsletter: '',
    kofi: 'https://ko-fi.com/'
  },
  adsense: {
    publisherId: '',
    slots: {
      pageTop: '',
      inFeed: ''
    }
  },
  copyrightText: `© ${new Date().getFullYear()} technodev. All rights reserved.`,
  siteVersion: '1.1.0'
};

export default siteConfig;
