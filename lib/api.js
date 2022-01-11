const API_URL = process.env.WP_API_URL;

async function fetchAPI(query, { variables } = {}) {
  // Set up some headers to tell the fetch call
  // that this is an application/json type
  const headers = { 'Content-Type': 'application/json' };

  // build out the fetch() call using the API_URL
  // environment variable pulled in at the start
  // Note the merging of the query and variables
  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query, variables })
  });

  // error handling work
  const json = await res.json();
  if (json.errors) {
    console.log(json.errors);
    console.log('error details', query, variables);
    throw new Error('Failed to fetch API');
  }
  return json.data;
}

export async function getAllPosts(preview) {
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC}}) {
        edges {
          node {
            id
            date
            title
            slug
          }
        }
      }
    }
    `
  );

  return "test";
}

export async function getMainMenu(preview){
  const data = await fetchAPI(
    `query mainMenu {
      menuItems(where: {location: PRIMARY}) {
        edges {
          node {
            id
            label
            url
            path
          }
        }
      }
    }
    `
  );
  return data?.menuItems;
}

export async function getHeroSlider(preview){
  const data = await fetchAPI(
    `
    query heroSlider {
      page(id: "8", idType: DATABASE_ID) {
        id
        hero {
          heroSlider {
            buttonLink
            buttonTitle
            description
            title
            image {
              sourceUrl
            }
          }
        }
      }
    }
    `
  );
  return data?.page;
}

export async function getAboutData(preview){
  const data = await fetchAPI(
    `
    query MyQuery {
      page(id: "13", idType: DATABASE_ID) {
        title
        featuredImage {
          node {
            sourceUrl
          }
        }
        content
        about {
          aboutUsSubtitle
        }
      }
    }
    `
  );
  return data?.page;
}

export async function getCollections(){
  const data = await fetchAPI(
    `query MyQuery {
      allCollection {
        nodes {
          title
          content
          featuredImage {
            node {
              sourceUrl
            }
          }
          collectionCategory {
            nodes {
              name
            }
          }
        }
      }
    }`
  );

  return data?.allCollection.nodes;
}

export async function getCollectionCategories(){
  const data = await fetchAPI(
    `query MyQuery {
      allCollectionCategory {
        nodes {
          name
        }
      }
    }`
  );

  return data?.allCollectionCategory.nodes;
}

export async function getBrideStories(){
  const data = await fetchAPI(
    `query MyQuery {
      allBridesStories {
        nodes {
          title
          content
          featuredImage {
            node {
              sourceUrl
            }
          }
          bridesStories {
            client
          }
        }
      }
    }`
  );

  return data?.allBridesStories.nodes;
}

export async function getContactDetails(){
  const data = await fetchAPI(
    `query MyQuery {
      page(id: "19", idType: DATABASE_ID) {
        id
        contact {
          contactInfo {
            icon {
              sourceUrl
            }
            title
            content
          }
        }
      }
    }    
    `)

    return data?.page;
}