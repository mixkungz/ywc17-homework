module.exports = {
  pathPrefix: "/ywc17-homework",
  siteMetadata: {
    title: `มาตรการส่งเสริมการท่องเที่ยวในประเทศ “ชิมช้อปใช้”`,
    description: `ผู้สนใจเข้าร่วมมาตรการฯ สามารถลงทะเบียน ตั้งแต่ วันที่ 23 ก.ย. - 15 พ.ย. 62`,
    url: 'https://mixkungz.github.io/ywc17-homework',
    image: '/images/Share_Social.jpg'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `มาตรการส่งเสริมการท่องเที่ยวในประเทศ “ชิมช้อปใช้”`,
        short_name: `ชิมช้อปใช้`,
        start_url: `/`,
        background_color: `#213A8F`,
        theme_color: `#213A8F`,
        display: `minimal-ui`,
        icon: `src/images/logo-transparent.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
