// Import main css
import '~/assets/style/index.scss';

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue';

// import vssue
import Vssue from 'vssue';
// import the api package for specific platform
import GithubV3 from '@vssue/api-github-v3';

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function(Vue, { router, head, isClient }) {
  Vue.use(Vssue, {
    // set the platform api
    api: GithubV3,

    // here set the default options for your OAuth App
    owner: 'eladcandroid',
    repo: 'gocode-blog',
    clientId: process.env.GRIDSOME_VSSUE_CLIENT_ID,
    clientSecret: process.env.GRIDSOME_VSSUE_CLIENT_SECRET, // only required for some of the platforms
    autoCreateIssue: true,
    locale: 'he-IL'
  });
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Heebo'
  });
}
