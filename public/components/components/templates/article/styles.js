import css from 'styled-jsx/css'

export default css`
  .Article {
    outline: 1px solid #aaa;
    max-width: 750px;
    margin: 0 auto;
    position: relative;
  }

  // Global
  :global(.article--instagram) {
    display: grid;
    justify-items: center;
  }

  // li:before {
  //   color: #000 !important;
  // }

  // li.active,
  // a {
  //   color: red;
  // }

  // a:hover {
  //   color: red;
  // }

  // .image__img {
  //   width: 100%;
  // }
  `

//     // Headings
//     //------------------------------------------------------------------------//
//     h1 {
//       line-height: 44px;
//       margin: 20px 0;
//     }

//     h2 {
//       line-height: 27px;
//       margin: 20px 0;
//     }

//     h3 {
//       line-height: 22px;
//       margin: 20px 0;
//     }

//     // Image
//     //------------------------------------------------------------------------//
//     .img-responsive {
//       margin-bottom: 15px;
//     }

//     // Links
//     //------------------------------------------------------------------------//
//     a {
//       color: $brand-primary;

//       &:hover {
//         color: #bdbaba;
//       }
//     }

//     // Paragraph
//     //------------------------------------------------------------------------//
//     p {
//       margin-bottom: 20px;
//     }

//     // UL
//     //------------------------------------------------------------------------//
//     ul {
//       list-style: none;
//       margin-bottom: 20px;
//       padding-left: 25px;

//       li {
//         &::before {
//           color: $brand-primary;
//           content: '\002022';
//           display: inline-block;
//           width: 14px;
//         }
//       }
//     }

//     // Table
//     //------------------------------------------------------------------------//
//     .table {
//       tr {
//         td {
//           border-top: 0;
//           padding: 0;
//         }
//       }

//       p {
//         margin: 0;
//       }
//     }
//   }

//   // Instagram
//   //--------------------------------------------------------------------------//
//   &--instagram {
//     display: grid;
//     justify-items: center;
//   }

//   // Breadcrumb
//   //--------------------------------------------------------------------------//
//   &__breadcrumb {
//     background-color: rgba(62, 62, 62, 0.5);
//     position: absolute;
//     top: 0;
//     width: 100%;
//     z-index: 1;

//     li:before {
//       color: #000 !important;
//     }

//     li.active,
//     a {
//       color: #fff;
//     }

//     a:hover {
//       color: $brand-primary;
//     }
//   }

//   // Media queries - Mobile Landscape
//   //--------------------------------------------------------------------------//
//   @media only screen and (orientation: portrait) and (min-width: 320px) and (max-width: 767px) {
//     // Image
//     //------------------------------------------------------------------------//
//     &__image {
//       margin: 0 -15px;

//       // Background slant
//       //----------------------------------------------------------------------//
//       &:after {
//         height: 40px;
//       }
//     }
//   }

//   // Media queries - Mobile
//   //--------------------------------------------------------------------------//
//   @media only screen and (min-width: 320px) and (max-width: 767px) {
//     margin-bottom: 30px;
//     margin-top: 171px;
//     position: initial;

//     // Image
//     //------------------------------------------------------------------------//
//     &__image {
//       margin: 0 -15px;
//     }

//     &.newsroom {
//       margin-top: 0;
//     }

//     // Embed
//     //------------------------------------------------------------------------//
//     .embed-responsive {
//       margin-left: -15px;
//       margin-right: -15px;
//     }

//     // Breadcrumb
//     //------------------------------------------------------------------------//
//     &__breadcrumb {
//       margin-left: -15px;
//       margin-right: -15px;
//     }
//   }
