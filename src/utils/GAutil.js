import ReactGA from 'react-ga';

export const addCurrentUrltoGA = () => {
    const currentUrl = window.location.pathname + window.location.search;
    console.log('currentUrl : ' + currentUrl);
    ReactGA.pageview(window.location.pathname + window.location.search);
};
