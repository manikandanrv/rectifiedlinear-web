import { request, gql } from 'graphql-request';
import moment from 'moment'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
    const query = gql`query Assets {
        postsConnection {
          edges {
            node {
              excerpt
              slug
              title
              eventDate
              author {
                bio
                id
                name
                photo {
                  url
                }
              }
              createdAt
              featuredImage {
                url
              }
              categories {
                name
                slug
              }
            }
          }
        }
      }
      `

      
    const result = await request(graphqlAPI, query);

    return result.postsConnection.edges;
} 

export const getPostDetails = async ( slug) => {
  const query = gql`query getPostDetails($slug : String!) {
    post(where: {slug: $slug}) {
        excerpt
        slug
        title
        author {
          bio
          id
          name
          photo {
            url
          }
        }
        createdAt
        featuredImage {
          url
        }
        categories {
          name
          slug
        }
        content {
          raw
        }
      }
    }
    `

    
  const result = await request(graphqlAPI, query, {slug});

  return result.post;
} 

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails() {
      posts(
        where: {categories_some : {slug_in: ["pastevents"]}} 

        orderBy : createdAt_ASC
        last : 3
      ) {
        title
        eventDate
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `
  const result = await request(graphqlAPI, query);

  return result.posts;

}

export const getSimilarPosts = async (categories, sluf) => {
  const query = gql`
    query GetPostDetails($slug : String!, $categories : [String!]) {
      posts(

        where: {slug_not: $slug, AND {categories_some : {slug_in: $categories}} }
        last : 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `
  const result = await request(graphqlAPI, query);

  return result.posts;

}


export const getFutureEvents = async () => {
  const current_dt = moment().format('YYYY-MM-DDT00:00:00.000+05:30')
  const query = gql`
    query GetFutureEvents() {
  futureEvents(where: {eventDateTime_gte: "2023-04-10T00:00:00.000+02:00" }
  ) {
    title
    description
    eventDateTime
  }
}`
const result = await request(graphqlAPI, query);

return result.futureEvents;

}

export const getFeaturedPosts = async () => {
  const query = gql`
    query GetCategoryPost() {
      posts(where: {featuredPost: true}) {
        author {
          name
          photo {
            url
          }
        }
        featuredImage {
          url
        }
        title
        slug
        createdAt
      }
    }   
  `;

  const result = await request(graphqlAPI, query);

  return result.posts;
};

