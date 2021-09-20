# Dept take home
My submission for the Dept take home, using Next.JS and ButterCMS.

## Getting Started
First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technologies involved
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Next.JS](https://nextjs.org/)

- [Netlify](https://www.netlify.com/)
- [ButterCMS](https://buttercms.com/)

## Description & reasoning
Looking at the pages design I derived the following assumptions;
1. No user dependent context on the page
2. Cases might be added and/or reordered
3. Content gets updated somewhat infrequently

Looking at this, I find that two pieces of technology make sense here, a CMS and SSG (static site generation). The CMS is there so that given teams, such a marketing, can easily edit the content in a user-friendly way and since there is no user dependent state we can statically generate our sites whenever the CMS gets updated. A regular react SPA wouldn't have made much sense, since all of the requests would be the same.

Previously, I have used Gatsby + Netlify CMS, which was quite pleasant, but I wanted to try something new, hence I opted to use Next.JS. The next step is to choose a CMS, we should first look at what our data might look like:

```md
- Cases
  - Title
  - Cover image
  - Company

- Clients
  - Name
  - Logo

- Reviews
  - Review
  - Reviewer
  - Role
  - Company
```

I do not expect the site to make a lot of varying requests, as well as the shape of the data would match the potential general purpose REST api (`/cases` for all cases, `/clients` for all clients etc.). We also will need to upload images to use for the covers. Thus our CMS will have the following two requirements;
1. Make content available through REST endpoints
2. Be able to upload images
3. All of this available in the free tier

My eyes then fell upon ButterCMS, which I had also heard of previously and did satisfy above requirements.

Deployment will be done on Netlify, so whenever content gets published in ButterCMS it will trigger Netlify to initiate the build process and deploy the newly generated static sites. This can be done through the [webhooks of ButterCMS](https://buttercms.com/docs/api/#webhooks) and the [build hooks from Netlify](https://docs.netlify.com/configure-builds/build-hooks/).

So, all in all, we are using
- ButterCMS for the content
- Next.JS for statically generating the sites
- Netlify for hosting and the building pipeline

![dept-takehome-graph](https://user-images.githubusercontent.com/17083334/134090311-4c2e601f-049f-4076-a28c-5430345faf7f.png)

## Potential improvements
If I had more time, these are the main things I'd have wanted to improve:
- Better separation of child and parent components, in some cases, some components are including css rules that should have been imposed by the parents. For example, the `Review` component includes a `border-top`, which makes sense in the context of our site as a whole and how we're using it, but might not make sense in other sites where we'd want to reuse `Reivew`. So rather than the `border-top` embedded in the `Review` component, it would have been better applied by the parent of `Review`.
- Some of the content is hardcoded, like certain menu entries and countries, it would be good to extract those out so that we're not having a mix of hardcoded content & content from the CMS.
- I feel like I could have been more consistent in my usage of css, for example, in some cases I try to keep the selectors as flat as possible, for exmaple, `.footer {}`, `.footer-link {}`, where in some other places I'll target children `.footer {}`, `.footer .link {}`. The latter can sometimes cause some issues when it comes to css priorizations when you'd want to override certain `.link` rules for instance.
