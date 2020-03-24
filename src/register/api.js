import queryString from 'query-string';
import * as R from 'ramda';

const CORS_URL = 'https://cors-anywhere.herokuapp.com/';
const FORM_URL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeIqh8PrSelmefommm_HXGLkCXIA-oa180DRN6mHGukBN4TFw/formResponse';

export const submit = (values) => fetch(`${CORS_URL}${FORM_URL}`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: queryString.stringify(values),
});

const API_KEY = 'AIzaSyCqgsnrf_ptIMULLJ0bN5IWlWFZQ0VkK84';
const SPREADSHEET_ID = '1shxlEBEDrhjVCNaSMz8xV5MMEaRS0laWrJHcrauFNqE';
const RANGE = 'public';

const GDOC_ULR = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`;

const transformFreeSlots = R.pipe(
    R.prop('values'),
    R.apply(R.zip),
    R.fromPairs,
    R.map(parseInt),
);

export const getFreeSlots = () => fetch(GDOC_ULR).then((response) => response.json()).then(transformFreeSlots);
