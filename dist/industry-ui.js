'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var axios = require('axios');
var moment = require('moment');
var dateFns$1 = require('date-fns');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var styled = require('styled-components');
var cloneDeep = require('lodash/cloneDeep');
var ReactDOM = require('react-dom');
var reactResizeDetector = require('react-resize-detector');
var Head = require('next/head');
var gravatar = require('gravatar');
var reactFontawesome = require('@fortawesome/react-fontawesome');
var NextLink = require('next/link');
var Tippy = require('@tippyjs/react');
var reactHookForm = require('react-hook-form');
var ReactDatePicker = require('react-datepicker');
var reactDropzone = require('react-dropzone');
var Dropzone$1 = require('react-dropzone-uploader');
var draftJs = require('draft-js');
var Select = require('react-select');
var AsyncSelect = require('react-select/async');
var reactDraftWysiwyg = require('react-draft-wysiwyg');
var draftToHtml = require('draftjs-to-html');
require('react-draft-wysiwyg/dist/react-draft-wysiwyg.css');
var _range = require('lodash/range');
var Highcharts = require('highcharts/highstock');
var HighchartsReact = require('highcharts-react-official');
var bar = require('@nivo/bar');
var colors = require('@nivo/colors');
var line = require('@nivo/line');
var pie = require('@nivo/pie');
var emojiMart = require('emoji-mart');
var util$1 = require('util');
var reactGoogleMaps = require('react-google-maps');
var MarkerClusterer$1 = require('react-google-maps/lib/components/addons/MarkerClusterer');
var reactNprogress = require('@tanem/react-nprogress');
var chunk = require('lodash/chunk');
var Router = require('next/router');
var reactBigCalendar = require('react-big-calendar');
var dynamic = require('next/dynamic');
var reactColor = require('react-color');
var yup$1 = require('yup');
var _filter = require('lodash/filter');
var client = require('@apollo/client');
var merge$1 = require('lodash/merge');
var App = require('next/app');
var TagManager = require('react-gtm-module');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () {
            return e[k];
          }
        });
      }
    });
  }
  n['default'] = e;
  return Object.freeze(n);
}

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);
var moment__default = /*#__PURE__*/_interopDefaultLegacy(moment);
var bcrypt__default = /*#__PURE__*/_interopDefaultLegacy(bcrypt);
var jwt__default = /*#__PURE__*/_interopDefaultLegacy(jwt);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var cloneDeep__default = /*#__PURE__*/_interopDefaultLegacy(cloneDeep);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);
var Head__default = /*#__PURE__*/_interopDefaultLegacy(Head);
var gravatar__default = /*#__PURE__*/_interopDefaultLegacy(gravatar);
var NextLink__default = /*#__PURE__*/_interopDefaultLegacy(NextLink);
var Tippy__default = /*#__PURE__*/_interopDefaultLegacy(Tippy);
var ReactDatePicker__default = /*#__PURE__*/_interopDefaultLegacy(ReactDatePicker);
var Dropzone__default = /*#__PURE__*/_interopDefaultLegacy(Dropzone$1);
var Select__default = /*#__PURE__*/_interopDefaultLegacy(Select);
var AsyncSelect__default = /*#__PURE__*/_interopDefaultLegacy(AsyncSelect);
var draftToHtml__default = /*#__PURE__*/_interopDefaultLegacy(draftToHtml);
var _range__default = /*#__PURE__*/_interopDefaultLegacy(_range);
var Highcharts__default = /*#__PURE__*/_interopDefaultLegacy(Highcharts);
var HighchartsReact__default = /*#__PURE__*/_interopDefaultLegacy(HighchartsReact);
var util__default = /*#__PURE__*/_interopDefaultLegacy(util$1);
var chunk__default = /*#__PURE__*/_interopDefaultLegacy(chunk);
var Router__default = /*#__PURE__*/_interopDefaultLegacy(Router);
var dynamic__default = /*#__PURE__*/_interopDefaultLegacy(dynamic);
var _filter__default = /*#__PURE__*/_interopDefaultLegacy(_filter);
var merge__default = /*#__PURE__*/_interopDefaultLegacy(merge$1);
var App__default = /*#__PURE__*/_interopDefaultLegacy(App);
var TagManager__default = /*#__PURE__*/_interopDefaultLegacy(TagManager);

/**
 * Country
 */
var COUNTRY = [{
  disabled: true,
  text: 'Select country',
  value: ''
}, {
  value: 'AF',
  text: 'Afghanistan'
}, {
  value: 'AX',
  text: 'Åland Islands'
}, {
  value: 'AL',
  text: 'Albania'
}, {
  value: 'DZ',
  text: 'Algeria'
}, {
  value: 'AS',
  text: 'American Samoa'
}, {
  value: 'AD',
  text: 'Andorra'
}, {
  value: 'AO',
  text: 'Angola'
}, {
  value: 'AI',
  text: 'Anguilla'
}, {
  value: 'AQ',
  text: 'Antarctica'
}, {
  value: 'AG',
  text: 'Antigua and Barbuda'
}, {
  value: 'AR',
  text: 'Argentina'
}, {
  value: 'AM',
  text: 'Armenia'
}, {
  value: 'AW',
  text: 'Aruba'
}, {
  value: 'AU',
  text: 'Australia'
}, {
  value: 'AT',
  text: 'Austria'
}, {
  value: 'AZ',
  text: 'Azerbaijan'
}, {
  value: 'BS',
  text: 'Bahamas'
}, {
  value: 'BH',
  text: 'Bahrain'
}, {
  value: 'BD',
  text: 'Bangladesh'
}, {
  value: 'BB',
  text: 'Barbados'
}, {
  value: 'BY',
  text: 'Belarus'
}, {
  value: 'BE',
  text: 'Belgium'
}, {
  value: 'BZ',
  text: 'Belize'
}, {
  value: 'BJ',
  text: 'Benin'
}, {
  value: 'BM',
  text: 'Bermuda'
}, {
  value: 'BT',
  text: 'Bhutan'
}, {
  value: 'BO',
  text: 'Bolivia, Plurinational State of'
}, {
  value: 'BQ',
  text: 'Bonaire, Sint Eustatius and Saba'
}, {
  value: 'BA',
  text: 'Bosnia and Herzegovina'
}, {
  value: 'BW',
  text: 'Botswana'
}, {
  value: 'BV',
  text: 'Bouvet Island'
}, {
  value: 'BR',
  text: 'Brazil'
}, {
  value: 'IO',
  text: 'British Indian Ocean Territory'
}, {
  value: 'BN',
  text: 'Brunei Darussalam'
}, {
  value: 'BG',
  text: 'Bulgaria'
}, {
  value: 'BF',
  text: 'Burkina Faso'
}, {
  value: 'BI',
  text: 'Burundi'
}, {
  value: 'KH',
  text: 'Cambodia'
}, {
  value: 'CM',
  text: 'Cameroon'
}, {
  value: 'CA',
  text: 'Canada'
}, {
  value: 'CV',
  text: 'Cape Verde'
}, {
  value: 'KY',
  text: 'Cayman Islands'
}, {
  value: 'CF',
  text: 'Central African Republic'
}, {
  value: 'TD',
  text: 'Chad'
}, {
  value: 'CL',
  text: 'Chile'
}, {
  value: 'CN',
  text: 'China'
}, {
  value: 'CX',
  text: 'Christmas Island'
}, {
  value: 'CC',
  text: 'Cocos (Keeling) Islands'
}, {
  value: 'CO',
  text: 'Colombia'
}, {
  value: 'KM',
  text: 'Comoros'
}, {
  value: 'CG',
  text: 'Congo'
}, {
  value: 'CD',
  text: 'Congo, the Democratic Republic of the'
}, {
  value: 'CK',
  text: 'Cook Islands'
}, {
  value: 'CR',
  text: 'Costa Rica'
}, {
  value: 'CI',
  text: "Côte d'Ivoire"
}, {
  value: 'HR',
  text: 'Croatia'
}, {
  value: 'CU',
  text: 'Cuba'
}, {
  value: 'CW',
  text: 'Curaçao'
}, {
  value: 'CY',
  text: 'Cyprus'
}, {
  value: 'CZ',
  text: 'Czech Republic'
}, {
  value: 'DK',
  text: 'Denmark'
}, {
  value: 'DJ',
  text: 'Djibouti'
}, {
  value: 'DM',
  text: 'Dominica'
}, {
  value: 'DO',
  text: 'Dominican Republic'
}, {
  value: 'EC',
  text: 'Ecuador'
}, {
  value: 'EG',
  text: 'Egypt'
}, {
  value: 'SV',
  text: 'El Salvador'
}, {
  value: 'GQ',
  text: 'Equatorial Guinea'
}, {
  value: 'ER',
  text: 'Eritrea'
}, {
  value: 'EE',
  text: 'Estonia'
}, {
  value: 'ET',
  text: 'Ethiopia'
}, {
  value: 'FK',
  text: 'Falkland Islands (Malvinas)'
}, {
  value: 'FO',
  text: 'Faroe Islands'
}, {
  value: 'FJ',
  text: 'Fiji'
}, {
  value: 'FI',
  text: 'Finland'
}, {
  value: 'FR',
  text: 'France'
}, {
  value: 'GF',
  text: 'French Guiana'
}, {
  value: 'PF',
  text: 'French Polynesia'
}, {
  value: 'TF',
  text: 'French Southern Territories'
}, {
  value: 'GA',
  text: 'Gabon'
}, {
  value: 'GM',
  text: 'Gambia'
}, {
  value: 'GE',
  text: 'Georgia'
}, {
  value: 'DE',
  text: 'Germany'
}, {
  value: 'GH',
  text: 'Ghana'
}, {
  value: 'GI',
  text: 'Gibraltar'
}, {
  value: 'GR',
  text: 'Greece'
}, {
  value: 'GL',
  text: 'Greenland'
}, {
  value: 'GD',
  text: 'Grenada'
}, {
  value: 'GP',
  text: 'Guadeloupe'
}, {
  value: 'GU',
  text: 'Guam'
}, {
  value: 'GT',
  text: 'Guatemala'
}, {
  value: 'GG',
  text: 'Guernsey'
}, {
  value: 'GN',
  text: 'Guinea'
}, {
  value: 'GW',
  text: 'Guinea-Bissau'
}, {
  value: 'GY',
  text: 'Guyana'
}, {
  value: 'HT',
  text: 'Haiti'
}, {
  value: 'HM',
  text: 'Heard Island and McDonald Islands'
}, {
  value: 'VA',
  text: 'Holy See (Vatican City State)'
}, {
  value: 'HN',
  text: 'Honduras'
}, {
  value: 'HK',
  text: 'Hong Kong'
}, {
  value: 'HU',
  text: 'Hungary'
}, {
  value: 'IS',
  text: 'Iceland'
}, {
  value: 'IN',
  text: 'India'
}, {
  value: 'ID',
  text: 'Indonesia'
}, {
  value: 'IR',
  text: 'Iran, Islamic Republic of'
}, {
  value: 'IQ',
  text: 'Iraq'
}, {
  value: 'IE',
  text: 'Ireland'
}, {
  value: 'IM',
  text: 'Isle of Man'
}, {
  value: 'IL',
  text: 'Israel'
}, {
  value: 'IT',
  text: 'Italy'
}, {
  value: 'JM',
  text: 'Jamaica'
}, {
  value: 'JP',
  text: 'Japan'
}, {
  value: 'JE',
  text: 'Jersey'
}, {
  value: 'JO',
  text: 'Jordan'
}, {
  value: 'KZ',
  text: 'Kazakhstan'
}, {
  value: 'KE',
  text: 'Kenya'
}, {
  value: 'KI',
  text: 'Kiribati'
}, {
  value: 'KP',
  text: "Korea, Democratic People's Republic of"
}, {
  value: 'KR',
  text: 'Korea, Republic of'
}, {
  value: 'KW',
  text: 'Kuwait'
}, {
  value: 'KG',
  text: 'Kyrgyzstan'
}, {
  value: 'LA',
  text: "Lao People's Democratic Republic"
}, {
  value: 'LV',
  text: 'Latvia'
}, {
  value: 'LB',
  text: 'Lebanon'
}, {
  value: 'LS',
  text: 'Lesotho'
}, {
  value: 'LR',
  text: 'Liberia'
}, {
  value: 'LY',
  text: 'Libya'
}, {
  value: 'LI',
  text: 'Liechtenstein'
}, {
  value: 'LT',
  text: 'Lithuania'
}, {
  value: 'LU',
  text: 'Luxembourg'
}, {
  value: 'MO',
  text: 'Macao'
}, {
  value: 'MK',
  text: 'Macedonia, the Former Yugoslav Republic of'
}, {
  value: 'MG',
  text: 'Madagascar'
}, {
  value: 'MW',
  text: 'Malawi'
}, {
  value: 'MY',
  text: 'Malaysia'
}, {
  value: 'MV',
  text: 'Maldives'
}, {
  value: 'ML',
  text: 'Mali'
}, {
  value: 'MT',
  text: 'Malta'
}, {
  value: 'MH',
  text: 'Marshall Islands'
}, {
  value: 'MQ',
  text: 'Martinique'
}, {
  value: 'MR',
  text: 'Mauritania'
}, {
  value: 'MU',
  text: 'Mauritius'
}, {
  value: 'YT',
  text: 'Mayotte'
}, {
  value: 'MX',
  text: 'Mexico'
}, {
  value: 'FM',
  text: 'Micronesia, Federated States of'
}, {
  value: 'MD',
  text: 'Moldova, Republic of'
}, {
  value: 'MC',
  text: 'Monaco'
}, {
  value: 'MN',
  text: 'Mongolia'
}, {
  value: 'ME',
  text: 'Montenegro'
}, {
  value: 'MS',
  text: 'Montserrat'
}, {
  value: 'MA',
  text: 'Morocco'
}, {
  value: 'MZ',
  text: 'Mozambique'
}, {
  value: 'MM',
  text: 'Myanmar'
}, {
  value: 'NA',
  text: 'Namibia'
}, {
  value: 'NR',
  text: 'Nauru'
}, {
  value: 'NP',
  text: 'Nepal'
}, {
  value: 'NL',
  text: 'Netherlands'
}, {
  value: 'NC',
  text: 'New Caledonia'
}, {
  value: 'NZ',
  text: 'New Zealand'
}, {
  value: 'NI',
  text: 'Nicaragua'
}, {
  value: 'NE',
  text: 'Niger'
}, {
  value: 'NG',
  text: 'Nigeria'
}, {
  value: 'NU',
  text: 'Niue'
}, {
  value: 'NF',
  text: 'Norfolk Island'
}, {
  value: 'MP',
  text: 'Northern Mariana Islands'
}, {
  value: 'NO',
  text: 'Norway'
}, {
  value: 'OM',
  text: 'Oman'
}, {
  value: 'PK',
  text: 'Pakistan'
}, {
  value: 'PW',
  text: 'Palau'
}, {
  value: 'PS',
  text: 'Palestine, State of'
}, {
  value: 'PA',
  text: 'Panama'
}, {
  value: 'PG',
  text: 'Papua New Guinea'
}, {
  value: 'PY',
  text: 'Paraguay'
}, {
  value: 'PE',
  text: 'Peru'
}, {
  value: 'PH',
  text: 'Philippines'
}, {
  value: 'PN',
  text: 'Pitcairn'
}, {
  value: 'PL',
  text: 'Poland'
}, {
  value: 'PT',
  text: 'Portugal'
}, {
  value: 'PR',
  text: 'Puerto Rico'
}, {
  value: 'QA',
  text: 'Qatar'
}, {
  value: 'RE',
  text: 'Réunion'
}, {
  value: 'RO',
  text: 'Romania'
}, {
  value: 'RU',
  text: 'Russian Federation'
}, {
  value: 'RW',
  text: 'Rwanda'
}, {
  value: 'BL',
  text: 'Saint Barthélemy'
}, {
  value: 'SH',
  text: 'Saint Helena, Ascension and Tristan da Cunha'
}, {
  value: 'KN',
  text: 'Saint Kitts and Nevis'
}, {
  value: 'LC',
  text: 'Saint Lucia'
}, {
  value: 'MF',
  text: 'Saint Martin (French part)'
}, {
  value: 'PM',
  text: 'Saint Pierre and Miquelon'
}, {
  value: 'VC',
  text: 'Saint Vincent and the Grenadines'
}, {
  value: 'WS',
  text: 'Samoa'
}, {
  value: 'SM',
  text: 'San Marino'
}, {
  value: 'ST',
  text: 'Sao Tome and Principe'
}, {
  value: 'SA',
  text: 'Saudi Arabia'
}, {
  value: 'SN',
  text: 'Senegal'
}, {
  value: 'RS',
  text: 'Serbia'
}, {
  value: 'SC',
  text: 'Seychelles'
}, {
  value: 'SL',
  text: 'Sierra Leone'
}, {
  value: 'SG',
  text: 'Singapore'
}, {
  value: 'SX',
  text: 'Sint Maarten (Dutch part)'
}, {
  value: 'SK',
  text: 'Slovakia'
}, {
  value: 'SI',
  text: 'Slovenia'
}, {
  value: 'SB',
  text: 'Solomon Islands'
}, {
  value: 'SO',
  text: 'Somalia'
}, {
  value: 'ZA',
  text: 'South Africa'
}, {
  value: 'GS',
  text: 'South Georgia and the South Sandwich Islands'
}, {
  value: 'SS',
  text: 'South Sudan'
}, {
  value: 'ES',
  text: 'Spain'
}, {
  value: 'LK',
  text: 'Sri Lanka'
}, {
  value: 'SD',
  text: 'Sudan'
}, {
  value: 'SR',
  text: 'Surilabel'
}, {
  value: 'SJ',
  text: 'Svalbard and Jan Mayen'
}, {
  value: 'SZ',
  text: 'Swaziland'
}, {
  value: 'SE',
  text: 'Sweden'
}, {
  value: 'CH',
  text: 'Switzerland'
}, {
  value: 'SY',
  text: 'Syrian Arab Republic'
}, {
  value: 'TW',
  text: 'Taiwan, Province of China'
}, {
  value: 'TJ',
  text: 'Tajikistan'
}, {
  value: 'TZ',
  text: 'Tanzania, United Republic of'
}, {
  value: 'TH',
  text: 'Thailand'
}, {
  value: 'TL',
  text: 'Timor-Leste'
}, {
  value: 'TG',
  text: 'Togo'
}, {
  value: 'TK',
  text: 'Tokelau'
}, {
  value: 'TO',
  text: 'Tonga'
}, {
  value: 'TT',
  text: 'Trinidad and Tobago'
}, {
  value: 'TN',
  text: 'Tunisia'
}, {
  value: 'TR',
  text: 'Turkey'
}, {
  value: 'TM',
  text: 'Turkmenistan'
}, {
  value: 'TC',
  text: 'Turks and Caicos Islands'
}, {
  value: 'TV',
  text: 'Tuvalu'
}, {
  value: 'UG',
  text: 'Uganda'
}, {
  value: 'UA',
  text: 'Ukraine'
}, {
  value: 'AE',
  text: 'United Arab Emirates'
}, {
  value: 'GB',
  text: 'United Kingdom'
}, {
  value: 'US',
  text: 'United States'
}, {
  value: 'UM',
  text: 'United States Minor Outlying Islands'
}, {
  value: 'UY',
  text: 'Uruguay'
}, {
  value: 'UZ',
  text: 'Uzbekistan'
}, {
  value: 'VU',
  text: 'Vanuatu'
}, {
  value: 'VE',
  text: 'Venezuela, Bolivarian Republic of'
}, {
  value: 'VN',
  text: 'Viet Nam'
}, {
  value: 'VG',
  text: 'Virgin Islands, British'
}, {
  value: 'VI',
  text: 'Virgin Islands, U.S.'
}, {
  value: 'WF',
  text: 'Wallis and Futuna'
}, {
  value: 'EH',
  text: 'Western Sahara'
}, {
  value: 'YE',
  text: 'Yemen'
}, {
  value: 'ZM',
  text: 'Zambia'
}, {
  value: 'ZW',
  text: 'Zimbabwe'
}];

/**
 * Dog Breeds
 */
var DOG_BREED = [{
  disabled: true,
  text: 'Select breed',
  value: ''
}, {
  text: 'Affenpinscher',
  value: 'affenpinscher'
}, {
  text: 'Afghan Hound',
  value: 'afghan-hound'
}, {
  text: 'Airedale Terrier',
  value: 'airedale-terrier'
}, {
  text: 'Akita',
  value: 'akita'
}, {
  text: 'Alapaha Blue Blood Bulldog',
  value: 'alapaha-blue-blood-bulldog'
}, {
  text: 'Alaskan Malamute',
  value: 'alaskan-malamute'
}, {
  text: 'American Bulldog',
  value: 'american-bulldog'
}, {
  text: 'American Cocker Spaniel',
  value: 'american-cocker-spaniel'
}, {
  text: 'Anatolian Shepherd',
  value: 'anatolian-shepherd'
}, {
  text: 'Australian Cattle Dog',
  value: 'australian-cattle-dog'
}, {
  text: 'Australian Kelpie',
  value: 'australian-kelpie'
}, {
  text: 'Australian Shepherd',
  value: 'australian-shepherd'
}, {
  text: 'Australian Silky Terrier',
  value: 'australian-silky-terrier'
}, {
  text: 'Australian Terrier',
  value: 'australian-terrier'
}, {
  text: 'Azawakh',
  value: 'azawakh'
}, {
  text: 'Basenji',
  value: 'basenji'
}, {
  text: 'Basset Bleu De Gascogne',
  value: 'basset-bleu-de-gascogne'
}, {
  text: 'Basset Fauve De Bretagne',
  value: 'basset-fauve-de-bretagne'
}, {
  text: 'Basset Griffon Vendeen',
  value: 'basset-griffon-vendeen'
}, {
  text: 'Basset Hound',
  value: 'basset-hound'
}, {
  text: 'Bavarian Mountain Hound',
  value: 'bavarian-mountain-hound'
}, {
  text: 'Beagle',
  value: 'beagle'
}, {
  text: 'Bearded Collie',
  value: 'bearded-collie'
}, {
  text: 'Beauceron',
  value: 'beauceron'
}, {
  text: 'Bedlington Terrier',
  value: 'bedlington-terrier'
}, {
  text: 'Belgian Shepherd Dog',
  value: 'belgian-shepherd-dog'
}, {
  text: 'Bergamasco',
  value: 'bergamasco'
}, {
  text: 'Bernese Mountain Dog',
  value: 'bernese-mountain-dog'
}, {
  text: 'Bichon Frise',
  value: 'bichon-frise'
}, {
  text: 'Biewer Terrier',
  value: 'biewer-terrier'
}, {
  text: 'Bloodhound',
  value: 'bloodhound'
}, {
  text: 'Boerboel',
  value: 'boerboel'
}, {
  text: 'Bolognese',
  value: 'bolognese'
}, {
  text: 'Borador',
  value: 'borador'
}, {
  text: 'Border Collie',
  value: 'border-collie'
}, {
  text: 'Border Jack',
  value: 'border-jack'
}, {
  text: 'Border Terrier',
  value: 'border-terrier'
}, {
  text: 'Borzoi',
  value: 'borzoi'
}, {
  text: 'Boston Terrier',
  value: 'boston-terrier'
}, {
  text: 'Bouvier Des Flandres',
  value: 'bouvier-des-flandres'
}, {
  text: 'Boxer',
  value: 'boxer'
}, {
  text: 'Bracco Italiano',
  value: 'bracco-italiano'
}, {
  text: "Braque d'auvergne",
  value: 'braque-dauvergne'
}, {
  text: 'Briard',
  value: 'briard'
}, {
  text: 'Brittany Spaniel',
  value: 'brittany-spaniel'
}, {
  text: 'Bull Terrier',
  value: 'bull-terrier'
}, {
  text: 'Bullmastiff',
  value: 'bullmastiff'
}, {
  text: 'Cairn Terrier',
  value: 'cairn-terrier'
}, {
  text: 'Canaan Dog',
  value: 'canaan-dog'
}, {
  text: 'Canadian Eskimo Dog',
  value: 'canadian-eskimo-dog'
}, {
  text: 'Cane Corso',
  value: 'cane-corso'
}, {
  text: 'Cardigan Welsh Corgi',
  value: 'cardigan-welsh-corgi'
}, {
  text: 'Catalan Sheepdog',
  value: 'catalan-sheepdog'
}, {
  text: 'Caucasian Shepherd Dog',
  value: 'caucasian-shepherd-dog'
}, {
  text: 'Cavachon',
  value: 'cavachon'
}, {
  text: 'Cavalier King Charles Spaniel',
  value: 'cavalier-king-charles-spaniel'
}, {
  text: 'Cavapoo',
  value: 'cavapoo'
}, {
  text: 'Central Asian Shepherd',
  value: 'central-asian-shepherd'
}, {
  text: 'Cesky Terrier',
  value: 'cesky-terrier'
}, {
  text: 'Chesapeake Bay Retriever',
  value: 'chesapeake-bay-retriever'
}, {
  text: 'Chihuahua',
  value: 'chihuahua'
}, {
  text: 'Chinese Crested',
  value: 'chinese-crested'
}, {
  text: 'Chorkie',
  value: 'chorkie'
}, {
  text: 'Chow Chow',
  value: 'chow-chow'
}, {
  text: 'Chug',
  value: 'chug'
}, {
  text: "Cirneco dell'etna",
  value: 'cirneco-delletna'
}, {
  text: 'Clumber Spaniel',
  value: 'clumber-spaniel'
}, {
  text: 'Cockapoo',
  value: 'cockapoo'
}, {
  text: 'Cocker Spaniel',
  value: 'cocker-spaniel'
}, {
  text: 'Coonhound',
  value: 'coonhound'
}, {
  text: 'Coton De Tulear',
  value: 'coton-de-tulear'
}, {
  text: 'Curly Coated Retriever',
  value: 'curly-coated-retriever'
}, {
  text: 'Dalmatian',
  value: 'dalmatian'
}, {
  text: 'Dandie Dinmont Terrier',
  value: 'dandie-dinmont-terrier'
}, {
  text: 'Deerhound',
  value: 'deerhound'
}, {
  text: 'Dobermann',
  value: 'dobermann'
}, {
  text: 'Dogue de Bordeaux',
  value: 'dogue-de-bordeaux'
}, {
  text: 'English Bulldog',
  value: 'english-bulldog'
}, {
  text: 'English Setter',
  value: 'english-setter'
}, {
  text: 'English Springer Spaniel',
  value: 'english-springer-spaniel'
}, {
  text: 'English Toy Terrier',
  value: 'english-toy-terrier'
}, {
  text: 'Entlebucher Mountain Dog',
  value: 'entlebucher-mountain-dog'
}, {
  text: 'Estrela Mountain Dog',
  value: 'estrela-mountain-dog'
}, {
  text: 'Eurasier',
  value: 'eurasier'
}, {
  text: 'Field Spaniel',
  value: 'field-spaniel'
}, {
  text: 'Finnish Lapphund',
  value: 'finnish-lapphund'
}, {
  text: 'Finnish Spitz',
  value: 'finnish-spitz'
}, {
  text: 'Flat Coated Retriever',
  value: 'flat-coated-retriever'
}, {
  text: 'Foxhound',
  value: 'foxhound'
}, {
  text: 'French Bulldog',
  value: 'french-bulldog'
}, {
  text: 'German Longhaired Pointer',
  value: 'german-longhaired-pointer'
}, {
  text: 'German Pinscher',
  value: 'german-pinscher'
}, {
  text: 'German Shepherd',
  value: 'german-shepherd'
}, {
  text: 'German Shorthaired Pointer',
  value: 'german-shorthaired-pointer'
}, {
  text: 'German Spitz Klein',
  value: 'german-spitz-klein'
}, {
  text: 'German Spitz Mittel',
  value: 'german-spitz-mittel'
}, {
  text: 'German Wirehaired Pointer',
  value: 'german-wirehaired-pointer'
}, {
  text: 'Giant Schnauzer',
  value: 'giant-schnauzer'
}, {
  text: 'Glen of Imaal Terrier',
  value: 'glen-of-imaal-terrier'
}, {
  text: 'Goldador',
  value: 'goldador'
}, {
  text: 'Golden Retriever',
  value: 'golden-retriever'
}, {
  text: 'Goldendoodle',
  value: 'goldendoodle'
}, {
  text: 'Gordon Setter',
  value: 'gordon-setter'
}, {
  text: 'Grand Basset Griffon Vendeen',
  value: 'grand-basset-griffon-vendeen'
}, {
  text: 'Grand Bleu De Gascogne',
  value: 'grand-bleu-de-gascogne'
}, {
  text: 'Great Dane',
  value: 'great-dane'
}, {
  text: 'Greater Swiss Mountain Dog',
  value: 'greater-swiss-mountain-dog'
}, {
  text: 'Greenland Dog',
  value: 'greenland-dog'
}, {
  text: 'Greyhound',
  value: 'greyhound'
}, {
  text: 'Griffon Bruxellois',
  value: 'griffon-bruxellois'
}, {
  text: 'Griffon Fauve De Bretagne',
  value: 'griffon-fauve-de-bretagne'
}, {
  text: 'Groenendael Belgian Shepherd Dog',
  value: 'groenendael-belgian-shepherd-dog'
}, {
  text: 'Hamiltonstovare',
  value: 'hamiltonstovare'
}, {
  text: 'Harrier',
  value: 'harrier'
}, {
  text: 'Havanese',
  value: 'havanese'
}, {
  text: 'Hovawart',
  value: 'hovawart'
}, {
  text: 'Hungarian Kuvasz',
  value: 'hungarian-kuvasz'
}, {
  text: 'Hungarian Puli',
  value: 'hungarian-puli'
}, {
  text: 'Hungarian Pumi',
  value: 'hungarian-pumi'
}, {
  text: 'Huntaway',
  value: 'huntaway'
}, {
  text: 'Ibizan Hound',
  value: 'ibizan-hound'
}, {
  text: 'Intermediate Mexican Hairless',
  value: 'intermediate-mexican-hairless'
}, {
  text: 'Irish Red & White Setter',
  value: 'irish-red-&-white-setter'
}, {
  text: 'Irish Setter',
  value: 'irish-setter'
}, {
  text: 'Irish Terrier',
  value: 'irish-terrier'
}, {
  text: 'Irish Water Spaniel',
  value: 'irish-water-spaniel'
}, {
  text: 'Irish Wolfhound',
  value: 'irish-wolfhound'
}, {
  text: 'Italian Greyhound',
  value: 'italian-greyhound'
}, {
  text: 'Italian Spinone',
  value: 'italian-spinone'
}, {
  text: 'Jack Russell Terrier',
  value: 'jack-russell-terrier'
}, {
  text: 'Jackahuahua',
  value: 'jackahuahua'
}, {
  text: 'Jackapoo',
  value: 'jackapoo'
}, {
  text: 'Jagdterrier',
  value: 'jagdterrier'
}, {
  text: 'Japanese Akita Inu',
  value: 'japanese-akita-inu'
}, {
  text: 'Japanese Chin',
  value: 'japanese-chin'
}, {
  text: 'Japanese Shiba Inu',
  value: 'japanese-shiba-inu'
}, {
  text: 'Japanese Spitz',
  value: 'japanese-spitz'
}, {
  text: 'Jorkie',
  value: 'jorkie'
}, {
  text: 'Jug',
  value: 'jug'
}, {
  text: 'Keeshond',
  value: 'keeshond'
}, {
  text: 'Kerry Blue Terrier',
  value: 'kerry-blue-terrier'
}, {
  text: 'King Charles Spaniel',
  value: 'king-charles-spaniel'
}, {
  text: 'Komondor',
  value: 'komondor'
}, {
  text: 'Kooikerhondje',
  value: 'kooikerhondje'
}, {
  text: 'Korean Jindo',
  value: 'korean-jindo'
}, {
  text: 'Korthals Griffon',
  value: 'korthals-griffon'
}, {
  text: 'Kromfohrlander',
  value: 'kromfohrlander'
}, {
  text: 'Labrador Retriever',
  value: 'labrador-retriever'
}, {
  text: 'Labradoodle',
  value: 'labradoodle'
}, {
  text: 'Laekenois Belgian Shepherd Dog',
  value: 'laekenois-belgian-shepherd-dog'
}, {
  text: 'Lagotto Romagnolo',
  value: 'lagotto-romagnolo'
}, {
  text: 'Lakeland Terrier',
  value: 'lakeland-terrier'
}, {
  text: 'Lancashire Heeler',
  value: 'lancashire-heeler'
}, {
  text: 'Large Münsterländer',
  value: 'large-munsterlander'
}, {
  text: 'Leonberger',
  value: 'leonberger'
}, {
  text: 'Lhasa Apso',
  value: 'lhasa-apso'
}, {
  text: 'Long Coat Chihuahua',
  value: 'long-coat-chihuahua'
}, {
  text: 'Long Haired Dachshund',
  value: 'long-haired-dachshund'
}, {
  text: 'Long Haired Pyrenean Sheepdog',
  value: 'long-haired-pyrenean-sheepdog'
}, {
  text: 'Lowchen',
  value: 'lowchen'
}, {
  text: 'Lurcher',
  value: 'lurcher'
}, {
  text: 'Malinois Belgian Shepherd Dog',
  value: 'malinois-belgian-shepherd-dog'
}, {
  text: 'Malshi',
  value: 'malshi'
}, {
  text: 'Maltese',
  value: 'maltese'
}, {
  text: 'Maltipoo',
  value: 'maltipoo'
}, {
  text: 'Manchester Terrier',
  value: 'manchester-terrier'
}, {
  text: 'Maremma Sheepdog',
  value: 'maremma-sheepdog'
}, {
  text: 'Mastiff',
  value: 'mastiff'
}, {
  text: 'Minature Mexican Hairless',
  value: 'minature-mexican-hairless'
}, {
  text: 'Miniature Bull Terrier',
  value: 'miniature-bull-terrier'
}, {
  text: 'Miniature Long Haired Dachshund',
  value: 'miniature-long-haired-dachshund'
}, {
  text: 'Miniature Pinscher',
  value: 'miniature-pinscher'
}, {
  text: 'Miniature Poodle',
  value: 'miniature-poodle'
}, {
  text: 'Miniature Schnauzer',
  value: 'miniature-schnauzer'
}, {
  text: 'Miniature Smooth Haired Dachshund',
  value: 'miniature-smooth-haired-dachshund'
}, {
  text: 'Miniature Wire Haired Dachshund',
  value: 'miniature-wire-haired-dachshund'
}, {
  text: 'Mixed Breed',
  value: 'mixed-breed'
}, {
  text: 'Neapolitan Mastiff',
  value: 'neapolitan-mastiff'
}, {
  text: 'Newfoundland',
  value: 'newfoundland'
}, {
  text: 'Norfolk Terrier',
  value: 'norfolk-terrier'
}, {
  text: 'Northern Inuit',
  value: 'northern-inuit'
}, {
  text: 'Norwegian Buhund',
  value: 'norwegian-buhund'
}, {
  text: 'Norwegian Elkhound',
  value: 'norwegian-elkhound'
}, {
  text: 'Norwich Terrier',
  value: 'norwich-terrier'
}, {
  text: 'Nova Scotia Duck Tolling Retriever',
  value: 'nova-scotia-duck-tolling-retriever'
}, {
  text: 'Old English Sheepdog',
  value: 'old-english-sheepdog'
}, {
  text: 'Old Tyme Bulldog',
  value: 'old-tyme-bulldog'
}, {
  text: 'Otterhound',
  value: 'otterhound'
}, {
  text: 'Papillon',
  value: 'papillon'
}, {
  text: 'Parson Russell Terrier',
  value: 'parson-russell-terrier'
}, {
  text: 'Patterdale Terrier',
  value: 'patterdale-terrier'
}, {
  text: 'Pekingese',
  value: 'pekingese'
}, {
  text: 'Pembroke Welsh Corgi',
  value: 'pembroke-welsh-corgi'
}, {
  text: 'Petit Basset Griffon Vendeen',
  value: 'petit-basset-griffon-vendeen'
}, {
  text: 'Pharaoh Hound',
  value: 'pharaoh-hound'
}, {
  text: 'Picardy Sheepdog',
  value: 'picardy-sheepdog'
}, {
  text: 'Picardy Spaniel',
  value: 'picardy-spaniel'
}, {
  text: 'Pinscher',
  value: 'pinscher'
}, {
  text: 'Plummer Terrier',
  value: 'plummer-terrier'
}, {
  text: 'Pointer',
  value: 'pointer'
}, {
  text: 'Polish Lowland Sheepdog',
  value: 'polish-lowland-sheepdog'
}, {
  text: 'Pomeranian',
  value: 'pomeranian'
}, {
  text: 'Pomsky',
  value: 'pomsky'
}, {
  text: 'Poochon',
  value: 'poochon'
}, {
  text: 'Portuguese Podengo',
  value: 'portuguese-podengo'
}, {
  text: 'Portuguese Pointer',
  value: 'portuguese-pointer'
}, {
  text: 'Portuguese Water Dog',
  value: 'portuguese-water-dog'
}, {
  text: 'Presa Canario',
  value: 'presa-canario'
}, {
  text: 'Pug',
  value: 'pug'
}, {
  text: 'Puggle',
  value: 'puggle'
}, {
  text: 'Pyrenean Mastiff',
  value: 'pyrenean-mastiff'
}, {
  text: 'Pyrenean Mountain Dog',
  value: 'pyrenean-mountain-dog'
}, {
  text: 'Pyrenean Sheepdog',
  value: 'pyrenean-sheepdog'
}, {
  text: 'Rhodesian Ridgeback',
  value: 'rhodesian-ridgeback'
}, {
  text: 'Rottweiler',
  value: 'rottweiler'
}, {
  text: 'Rough Collie',
  value: 'rough-collie'
}, {
  text: 'Russian Black Terrier',
  value: 'russian-black-terrier'
}, {
  text: 'Russian Toy Terrier',
  value: 'russian-toy-terrier'
}, {
  text: 'Saarloos Wolfdog',
  value: 'saarloos-wolfdog'
}, {
  text: 'Saluki',
  value: 'saluki'
}, {
  text: 'Samoyed',
  value: 'samoyed'
}, {
  text: 'Schipperke',
  value: 'schipperke'
}, {
  text: 'Schnauzer',
  value: 'schnauzer'
}, {
  text: 'Schnoodle',
  value: 'schnoodle'
}, {
  text: 'Scottish Terrier',
  value: 'scottish-terrier'
}, {
  text: 'Sealyham Terrier',
  value: 'sealyham-terrier'
}, {
  text: 'Segugio Italiano',
  value: 'segugio-italiano'
}, {
  text: 'Shar Pei',
  value: 'shar-pei'
}, {
  text: 'Sheprador',
  value: 'sheprador'
}, {
  text: 'Shetland Sheepdog',
  value: 'shetland-sheepdog'
}, {
  text: 'Shih Tzu',
  value: 'shih-tzu'
}, {
  text: 'Shihpoo',
  value: 'shihpoo'
}, {
  text: 'Shollie',
  value: 'shollie'
}, {
  text: 'Siberian Husky',
  value: 'siberian-husky'
}, {
  text: 'Skye Terrier',
  value: 'skye-terrier'
}, {
  text: 'Sloughi',
  value: 'sloughi'
}, {
  text: 'Slovakian Rough Haired Pointer',
  value: 'slovakian-rough-haired-pointer'
}, {
  text: 'Small Münsterländer',
  value: 'small-munsterlander'
}, {
  text: 'Smooth Coat Chihuahua',
  value: 'smooth-coat-chihuahua'
}, {
  text: 'Smooth Collie',
  value: 'smooth-collie'
}, {
  text: 'Smooth Fox Terrier',
  value: 'smooth-fox-terrier'
}, {
  text: 'Smooth Haired Dachshund',
  value: 'smooth-haired-dachshund'
}, {
  text: 'Soft Coated Wheaten Terrier',
  value: 'soft-coated-wheaten-terrier'
}, {
  text: 'Spanish Water Dog',
  value: 'spanish-water-dog'
}, {
  text: 'Sporting Lucas Terrier',
  value: 'sporting-lucas-terrier'
}, {
  text: 'Springador',
  value: 'springador'
}, {
  text: 'Sprocker',
  value: 'sprocker'
}, {
  text: 'Sprollie',
  value: 'sprollie'
}, {
  text: 'Sproodle',
  value: 'sproodle'
}, {
  text: 'St. Bernard',
  value: 'st-bernard'
}, {
  text: 'Staffador',
  value: 'staffador'
}, {
  text: 'Staffordshire Bull Terrier',
  value: 'staffordshire-bull-terrier'
}, {
  text: 'Staffy Jack',
  value: 'staffy-jack'
}, {
  text: 'Standard Mexican Hairless',
  value: 'standard-mexican-hairless'
}, {
  text: 'Standard Poodle',
  value: 'standard-poodle'
}, {
  text: 'Sussex Spaniel',
  value: 'sussex-spaniel'
}, {
  text: 'Swedish Lapphund',
  value: 'swedish-lapphund'
}, {
  text: 'Swedish Vallhund',
  value: 'swedish-vallhund'
}, {
  text: 'Tervueren Belgian Shepherd Dog',
  value: 'tervueren-belgian-shepherd-dog'
}, {
  text: 'Thai Ridgeback',
  value: 'thai-ridgeback'
}, {
  text: 'Tibetan Mastiff',
  value: 'tibetan-mastiff'
}, {
  text: 'Tibetan Spaniel',
  value: 'tibetan-spaniel'
}, {
  text: 'Tibetan Terrier',
  value: 'tibetan-terrier'
}, {
  text: 'Toy Poodle',
  value: 'toy-poodle'
}, {
  text: 'Turkish Kangal',
  value: 'turkish-kangal'
}, {
  text: 'Utonagan',
  value: 'utonagan'
}, {
  text: 'Vizsla',
  value: 'vizsla'
}, {
  text: 'Weimaraner',
  value: 'weimaraner'
}, {
  text: 'Welsh Collie',
  value: 'welsh-collie'
}, {
  text: 'Welsh Springer Spaniel',
  value: 'welsh-springer-spaniel'
}, {
  text: 'Welsh Terrier',
  value: 'welsh-terrier'
}, {
  text: 'West Highland Terrier',
  value: 'west-highland-terrier'
}, {
  text: 'Whippet',
  value: 'whippet'
}, {
  text: 'White Swiss Shepherd',
  value: 'white-swiss-shepherd'
}, {
  text: 'Wire Fox Terrier',
  value: 'wire-fox-terrier'
}, {
  text: 'Wire Haired Dachshund',
  value: 'wire-haired-dachshund'
}, {
  text: 'Wire Haired Vizsla',
  value: 'wire-haired-vizsla'
}, {
  text: 'Yorkshire Terrier',
  value: 'yorkshire-terrier'
}];

/**
 * Dog Coats
 */
var DOG_COAT = [{
  disabled: true,
  text: 'Select coat type',
  value: ''
}, {
  text: 'Short',
  value: 'short'
}, {
  text: 'Long',
  value: 'long'
}, {
  text: 'Wire',
  value: 'wire'
}, {
  text: 'Smooth',
  value: 'smooth'
}, {
  text: 'Wool',
  value: 'wool'
}, {
  text: 'Double',
  value: 'double'
}, {
  text: 'Silky',
  value: 'silky'
}, {
  text: 'Curly',
  value: 'curly'
}, {
  text: 'Combination',
  value: 'combination'
}, {
  text: 'Hairless',
  value: 'hairless'
}, {
  text: 'Other (Not Listed)',
  value: 'other'
}];

/**
 * Colour
 */
var DOG_COLOUR = [{
  disabled: true,
  text: 'Select colour',
  value: ''
}, {
  text: 'Black',
  value: 'black'
}, {
  text: 'Brown',
  value: 'brown'
}, {
  text: 'Chocolate',
  value: 'chocolate'
}];

/**
 * Dog Groups
 */
var DOG_GROUP = [{
  disabled: true,
  text: 'Filter by group',
  value: ''
}, {
  text: 'Gundogs',
  value: 'Gundog'
}, {
  text: 'Hounds',
  value: 'Hound'
}, {
  text: 'Pastoral',
  value: 'Pastoral'
}, {
  text: 'Terriers',
  value: 'Terrier'
}, {
  text: 'Toys',
  value: 'Toy'
}, {
  text: 'Working',
  value: 'Working'
}, {
  text: 'Utility',
  value: 'Utility'
}];

/**
 * Gender
 */
var GENDER = [{
  disabled: true,
  text: 'Select gender',
  value: ''
}, {
  text: 'Male',
  value: 'male'
}, {
  text: 'Female',
  value: 'female'
}];

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function getCjsExportFromNamespace (n) {
	return n && n['default'] || n;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var runtime_1 = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined$1; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined$1) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined$1;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined$1;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined$1;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined$1, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined$1;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined$1;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined$1;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   module.exports 
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}
});

var regenerator = runtime_1;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var useAxios = function useAxios(url, params, initialValue) {
  if (!url) {
    return {
      data: {
        isLoading: false
      }
    };
  }

  var _useContext = React.useContext(ConfigContext),
      apiConfig = _useContext.apiConfig;

  var _useState = React.useState(_objectSpread(_objectSpread({}, initialValue), {}, {
    isLoading: true
  })),
      data = _useState[0],
      setData = _useState[1];

  React.useEffect(function () {
    var bearerToken = window.localStorage.getItem('bearerToken');

    if (bearerToken) {
      apiConfig.headers.Authorization = 'Bearer ' + bearerToken;
    }

    var http = axios__default['default'].create(apiConfig); // Mock requests

    var mocker = {};
    mocker.apply(http);

    var fetchData = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
        var response, status;
        return regenerator.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return http.get(url, {
                  params: params
                });

              case 3:
                response = _context.sent;

                if (response.status === 200) {
                  setData(_objectSpread(_objectSpread({}, response.data), {}, {
                    isLoading: false
                  }));
                }

                _context.next = 11;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                status = _context.t0.response ? _context.t0.response.status : 404;
                setData({
                  status: status,
                  isLoading: false
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchData();
  }, [url]);
  return {
    data: data
  };
};

var useGeoCoder = function useGeoCoder(_ref) {
  var address = _ref.address,
      apiKey = _ref.apiKey,
      city = _ref.city,
      language = _ref.language,
      region = _ref.region;

  var _useState = React.useState({
    lat: '',
    lng: ''
  }),
      coordinates = _useState[0],
      setCoordinates = _useState[1];

  React.useEffect(function () {
    var getCoordinates = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
        var geo, coordinates;
        return regenerator.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                geo = new GeoCoder({
                  apiKey: apiKey,
                  language: language,
                  region: region
                });
                _context.next = 3;
                return geo.fromAddress({
                  address: address,
                  city: city
                });

              case 3:
                coordinates = _context.sent;
                setCoordinates(coordinates);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function getCoordinates() {
        return _ref2.apply(this, arguments);
      };
    }();

    getCoordinates();
  }, []);
  return coordinates;
};

/**
 * Hooks  - useInterval
 * Allows running code on specific intervals
 *
 * @see https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 */
var useInterval = function useInterval(callback, delay) {
  var savedCallback = React.useRef(); // Remember the latest callback.

  React.useEffect(function () {
    savedCallback.current = callback;
  }, [callback]); // Set up the interval.

  React.useEffect(function () {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      var id = setInterval(tick, delay);
      return function () {
        return clearInterval(id);
      };
    }
  }, [delay]);
};

/**
 * Hooks - useForm
 */
var _require = require('react-hook-form'),
    Controller = _require.Controller,
    useForm = _require.useForm;

/**
 * Hooks - Use Local Storage
 */
var useLocalStorage = function useLocalStorage(key, initialValue) {
  var parse = function parse(item) {
    var a = item;

    try {
      a = JSON.parse(item);
    } catch (e) {}

    return a;
  }; // State to store our value
  // Pass initial state function to useState so logic is only executed once


  var _useState = React.useState(function () {
    try {
      // Get from local storage by key
      var item = window.localStorage.getItem(key); // Parse stored json or if none return initialValue

      return item ? parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      return initialValue;
    }
  }),
      storedValue = _useState[0],
      setStoredValue = _useState[1]; // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.


  var setValue = function setValue(value) {
    try {
      // Allow value to be a function so we have same API as useState
      var valueToStore = value instanceof Function ? value(storedValue) : value; // Save state

      setStoredValue(valueToStore); // Save to local storage

      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.error(error);
    }
  };

  return [storedValue, setValue];
};

/**
 * Use Previous
 * Allows us os save the previous state variable, good for counters or loops
 */
var usePrevious = function usePrevious(value) {
  var ref = React.useRef();
  React.useEffect(function () {
    ref.current = value;
  });
  return ref.current;
};

/**
 * useTimer
 */
function useTimer() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$autoStart = _ref.autoStart,
      autoStart = _ref$autoStart === void 0 ? true : _ref$autoStart,
      _ref$interval = _ref.interval,
      interval = _ref$interval === void 0 ? 1000 : _ref$interval,
      startTime = _ref.startTime,
      endTime = _ref.endTime;

  var getTime = function getTime() {
    var diff = 0;
    var now = endTime ? moment__default['default'](endTime) : moment__default['default']();

    if (typeof startTime === 'string') {
      diff = now.diff() - moment__default['default'](startTime).diff();
    }

    return diff > -1 ? diff : 0;
  };

  var _useState = React.useState(getTime()),
      time = _useState[0],
      setTime = _useState[1];

  var _useState2 = React.useState(null),
      timer = _useState2[0],
      setTimer = _useState2[1];

  useInterval(function () {
    setTime(function (prev) {
      return prev + interval;
    });
  }, timer);

  var start = function start() {
    if (!timer) setTimer(interval);
  };

  var stop = function stop() {
    setTimer(null);
  };

  React.useEffect(function () {
    if (autoStart) start();
    return function () {
      stop();
    };
  }, []);

  var getFormattedTime = function getFormattedTime() {
    var temp = moment__default['default'].duration(time);
    return {
      seconds: temp.seconds().toString().padStart(2, '0'),
      minutes: temp.minutes().toString().padStart(2, '0'),
      hours: parseInt(temp.asHours(), 10),
      exactHours: temp.asHours().toFixed(2)
    };
  };

  return {
    time: getFormattedTime(),
    start: start,
    stop: stop
  };
}

/**
 * useTranslation
 *
 * @see https://dev.to/biscuitech/i18n-with-next-js-and-full-ssg-support-2aih
 *
 * @todo Translations are usually pushed into the provider not here!
 */
var useTranslation = function useTranslation() {
  var _useContext = React.useContext(ConfigContext),
      defaultLocale = _useContext.defaultLocale,
      Translations = _useContext.Translations;

  var _useContext2 = React.useContext(InternationalisationContext),
      locale = _useContext2.locale;

  var t = function t(key) {
    if (!Translations[locale][key]) {
      // Debug
      console.warn("Translation '".concat(key, "' for locale '").concat(locale, "' not found."));
    }

    return Translations[locale][key] || Translations[defaultLocale][key] || '';
  };

  return {
    t: t,
    locale: locale
  };
};

/**
 * Age calculation from dateTime
 * birthDate: Instance of Date
 */
var age = function age(birthDate) {
  if (!birthDate || !dateFns$1.isValid(birthDate)) {
    return 0;
  }

  return dateFns$1.differenceInYears(new Date(), birthDate);
};

var arrayOfKeys = function arrayOfKeys(obj) {
  var arr = [];

  for (var key in obj) {
    arr.push(key);
  }

  return arr;
};

/**
 * Array of Values
 */
var arrayOfValues = function arrayOfValues(obj) {
  var arr = [];

  for (var key in obj) {
    arr.push(obj[key]);
  }

  return arr;
};

/**
 * Auth utils
 */
var hashPassword = function hashPassword(password) {
  return bcrypt__default['default'].hashSync(password, 10);
};
var validatePassword = function validatePassword(user, password) {
  return bcrypt__default['default'].compareSync(password, user.password);
};
var generateToken = function generateToken(data, config) {
  return jwt__default['default'].sign(data, config.secret, {
    expiresIn: '14d'
  });
};
var validateToken = function validateToken(token, config) {
  return jwt__default['default'].verify(token, config.key, {
    algorithms: ['RS512']
  });
};
var decodeToken = function decodeToken(token) {
  return jwt__default['default'].decode(token);
};
var getUserFromToken = function getUserFromToken(headers, config) {
  if (!headers.Authorization) {
    return null;
  }

  var token = headers.Authorization.split(' ')[1];

  if (!token) {
    return null;
  }

  var decoded = validateToken(token, config);

  if (!decoded || !decoded.user) {
    return null;
  }

  return decoded.user;
};

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * average geolocation center
 * @param {Array<{lat:number,lng:number}>} coords
 */
var averageGeolocation = function averageGeolocation(coords) {
  if (coords.length === 1) {
    return coords[0];
  }

  var x = 0.0;
  var y = 0.0;
  var z = 0.0;

  var _iterator = _createForOfIteratorHelper(coords),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var coord = _step.value;
      var latitude = coord.lat * Math.PI / 180;
      var longitude = coord.lng * Math.PI / 180;
      x += Math.cos(latitude) * Math.cos(longitude);
      y += Math.cos(latitude) * Math.sin(longitude);
      z += Math.sin(latitude);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var total = coords.length;
  x = x / total;
  y = y / total;
  z = z / total;
  var centralLongitude = Math.atan2(y, x);
  var centralSquareRoot = Math.sqrt(x * x + y * y);
  var centralLatitude = Math.atan2(z, centralSquareRoot);
  return {
    lat: centralLatitude * 180 / Math.PI,
    lng: centralLongitude * 180 / Math.PI
  };
};

/**
 * Utils - Camel Case
 */
// Utils
var camelCase = function camelCase(string) {
  return string.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
};

/**
 * Capitalise the first letter in a string
 */
var capitalize = function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _unsupportedIterableToArray$1(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest();
}

/**
 * Colour
 */
var blendLinearRgb = function blendLinearRgb(p, c1, c2) {
  var i = parseInt;
  var r = Math.round;
  var P = 1 - p;

  var _c1$split = c1.split(','),
      _c1$split2 = _slicedToArray(_c1$split, 4),
      a = _c1$split2[0],
      b = _c1$split2[1],
      c = _c1$split2[2],
      d = _c1$split2[3];

  var _c2$split = c2.split(','),
      _c2$split2 = _slicedToArray(_c2$split, 4),
      e = _c2$split2[0],
      f = _c2$split2[1],
      g = _c2$split2[2],
      h = _c2$split2[3];

  var x = d || h;
  var j = x ? ',' + (!d ? h : !h ? d : r((parseFloat(d) * P + parseFloat(h) * p) * 1000) / 1000 + ')') : ')';
  return 'rgb' + (x ? 'a(' : '(') + r(i(a[3] === 'a' ? a.slice(5) : a.slice(4)) * P + i(e[3] === 'a' ? e.slice(5) : e.slice(4)) * p) + ',' + r(i(b) * P + i(f) * p) + ',' + r(i(c) * P + i(g) * p) + j;
};
var shadeLinearRgb = function shadeLinearRgb(p, c1) {
  var i = parseInt;
  var r = Math.round;

  var _c1$split3 = c1.split(','),
      _c1$split4 = _slicedToArray(_c1$split3, 4),
      a = _c1$split4[0],
      b = _c1$split4[1],
      c = _c1$split4[2],
      d = _c1$split4[3];

  var P = p < 0;
  var t = P ? 0 : 255 * p;
  P = P ? 1 + p : 1 - p;
  return 'rgb' + (d ? 'a(' : '(') + r(i(a[3] === 'a' ? a.slice(5) : a.slice(4)) * P + t) + ',' + r(i(b) * P + t) + ',' + r(i(c) * P + t) + (d ? ',' + d : ')');
};

/* eslint no-undef: 0 */

/**
 * Converts an image URL to Data URL (Base64) using Canvas
 */
var convertImgUrlToDataURLviaCanvas = function convertImgUrlToDataURLviaCanvas(url) {
  return new Promise(function (resolve, reject) {
    var img = new Image();
    img.crossOrigin = '*';

    img.onload = function () {
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      var dataURL;
      canvas.height = this.height;
      canvas.width = this.width;
      ctx.drawImage(this, 0, 0);
      dataURL = canvas.toDataURL();
      resolve(dataURL);
      canvas = null;
    };

    img.onerror = function () {
      reject(new Error('Could not load image at ' + url));
    };

    img.src = url;
  });
};

/**
 * Format date
 */
var dateFns = function dateFns(string) {
  return dateFns$1.format(new Date(string), 'LLL d, H:mm');
};
var shortDate = function shortDate(string) {
  var date = Date.parse(string);
  return !isNaN(date) ? dateFns$1.format(date, 'MMM d') : string;
};

/**
 * Debounce
 */
function debounce(callback, wait) {
  var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var timeout = null;
  return function () {
    var _arguments = arguments,
        _this = this;

    var callNow = immediate && !timeout;

    var next = function next() {
      return callback.apply(_this, _arguments);
    };

    clearTimeout(timeout);
    timeout = setTimeout(next, wait);

    if (callNow) {
      next();
    }
  };
}

/**
 * Components - Suppliers - SSIP - Force Update
 */
var useForceUpdate = function useForceUpdate() {
  var _useState = React.useState(1),
      value = _useState[0],
      setValue = _useState[1]; // integer state


  var forceUpdate = function forceUpdate() {
    return setValue(function (value) {
      return ++value;
    });
  }; // update the state to force render


  return [forceUpdate, value];
};

/**
 * Format date
 */
var formatDate = function formatDate(date) {
  return new Date(date.seconds * 1000).toLocaleDateString();
};
var formatIntDate = function formatIntDate(date) {
  var code = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-GB';

  if (date instanceof Date === false) {
    return date;
  }

  var newDate = new Intl.DateTimeFormat(code, {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
  return newDate;
};
var formatIntDateShort = function formatIntDateShort(date) {
  var code = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-GB';

  if (date instanceof Date === false) {
    return date;
  }

  var newDate = new Intl.DateTimeFormat(code, {
    month: 'long',
    day: '2-digit'
  }).format(date);
  return newDate;
};
var formatIntDateYear = function formatIntDateYear(date) {
  var code = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-GB';

  if (date instanceof Date === false) {
    return date;
  }

  var newDate = new Intl.DateTimeFormat(code, {
    year: 'numeric'
  }).format(date);
  return newDate;
};
var formatTime = function formatTime(date) {
  var d = new Date(date);
  var hour = '' + d.getHours();
  var minute = '' + d.getMinutes();
  if (hour.length < 2) hour = '0' + hour;
  if (minute.length < 2) minute = '0' + minute;
  return "".concat(hour, ":").concat(minute);
};
var formatDateStandard = function formatDateStandard(date) {
  var showTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var d = new Date(date);
  var year = d.getFullYear();
  var month = '' + (d.getMonth() + 1);
  var day = '' + d.getDate();
  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  var formattedDate = [year, month, day].join('-');

  if (showTime) {
    return formattedDate + ' ' + formatTime(date);
  } else {
    return formattedDate;
  }
};
var formatRelativeTime = function formatRelativeTime(date) {
  return moment__default['default'](date).fromNow();
};

/**
 * Format Price
 */
var formatPrice = function formatPrice(amount) {
  var currency = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GBP';
  var numberFormat = new Intl.NumberFormat(['en-GB'], {
    currency: currency,
    currencyDisplay: 'symbol',
    style: 'currency'
  });
  return numberFormat.format(amount);
};

/**
 * Get Acronym
 */
var getAcronym = function getAcronym(string) {
  var matches = string.match(/\b(\w)/g);
  return matches.join('');
};

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Get one object from array
 */
var getOne = function getOne(id, array) {
  var selected = array.filter(function (i) {
    return i.id === parseInt(id);
  });
  return selected.length ? _objectSpread$1({}, selected[0]) : null;
};

/**
 * Gets a parameter from the URL
 */
var getUrlParameter = function getUrlParameter(name) {
  name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(window.location.search);
  console.log(window.location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

/**
 * Media Query
 *
 * Usage
 * const Container = styled.div`
 *   color: #333;
 *   ${MEDIA_QUERY.desktop`padding: 0 20px;`}
 *   ${MEDIA_QUERY.tablet`padding: 0 10px;`}
 *   ${MEDIA_QUERY.phone`padding: 0 5px;`}
 * `
 */
var sizes = {
  giant: 1200,
  desktop: 992,
  tablet: 768,
  phone: 576
};
var MEDIA_QUERY = Object.keys(sizes).reduce(function (accumulator, label) {
  var emSize = sizes[label] / 16;

  accumulator[label] = function () {
    return styled.css(["@media (min-width:", "em){", "}"], emSize, styled.css.apply(void 0, arguments));
  };

  return accumulator;
}, {});
var MEDIA_QUERY_MAX = Object.keys(sizes).reduce(function (accumulator, label) {
  var emSize = sizes[label] / 16;

  accumulator[label] = function () {
    return styled.css(["@media (max-width:", "em){", "}"], emSize, styled.css.apply(void 0, arguments));
  };

  return accumulator;
}, {});

/**
 * Mock helpers
 */

var mergeLocalData = function mergeLocalData(array, key) {
  var identifier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';
  var local = JSON.parse(window.localStorage.getItem(key));

  if (local) {
    local.map(function (i) {
      var existing = array.find(function (o) {
        return o[identifier] === parseInt(i[identifier]);
      });

      if (existing) {
        Object.keys(i).map(function (key) {
          existing[key] = i[key];
        });
      } else {
        array.push(i);
      }
    });
  }

  return cloneDeep__default['default'](array);
};
var findByKey = function findByKey(array, key, value) {
  return array.find(function (a) {
    return a[key] === value;
  });
};
var filterByKey = function filterByKey(array, key, value) {
  return array.filter(function (a) {
    return a[key] === value;
  });
};
var filterByString = function filterByString(array, key, string) {
  return array.filter(function (a) {
    return a[key].toLowerCase().includes(string.toLowerCase());
  });
}; // add associated object to an item

var getItemAssociation = function getItemAssociation(item, related, key, foreignKey) {
  return related.find(function (r) {
    return r[key] === item[foreignKey];
  });
}; // add associated array to an item

var getItemAssociations = function getItemAssociations(item, related, key, foreignKey) {
  return related.filter(function (r) {
    return r[key] === item[foreignKey];
  });
}; // add associated array to an array

var getAssociations = function getAssociations(array, related, association, key, foreignKey) {
  return array.map(function (item) {
    item[association] = related.find(function (r) {
      return r[key] === item[foreignKey];
    });
    return item;
  });
}; // add associated array via pivot array

var getManyToManyAssociations = function getManyToManyAssociations(item, pivot, related, key, foreignKey) {
  var associatedItems = pivot.filter(function (a) {
    return a[key] === item.id;
  });
  return associatedItems.map(function (a) {
    return related.find(function (r) {
      return r.id === a[foreignKey];
    });
  });
}; // get first item of an array

var getFirst = function getFirst(array) {
  return array[0];
}; // get last item of an array

var getLast = function getLast(array) {
  return array[array.length - 1];
};

var objectWithoutProperties = function objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/**
 * random hex color generator
 */
var RandomColor = function RandomColor() {
  return '#' + (Math.random() * 0xffffff << 0).toString(16);
};

/**
 * random key generator
 */
var RandomKey = function RandomKey() {
  return (Math.random() * 0xffffffff << 0).toString(16);
};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element$1=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element$1,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

var __jsx = React__default['default'].createElement;
var ReactHolderJs = function ReactHolderJs(_ref) {
  var src = _ref.src,
      width = _ref.width,
      height = _ref.height,
      usePlaceholder = _ref.usePlaceholder;
  React.useEffect(function () {
    init();
  }, [src, usePlaceholder]);
  var placeholderRef = React.useRef();

  var init = function init() {
    if (!(typeof window !== 'undefined' && window.document)) {
      return;
    }

    if (!usePlaceholder) {
      return;
    }

    var node = ReactDOM__default['default'].findDOMNode(placeholderRef.current); // require in here to prevent errors during server-side rendering

    var Holder = require('holderjs');

    Holder.run({
      domain: 'holder.js',
      images: node,
      object: null,
      bgnodes: null,
      stylenodes: null
    });
  };

  if (usePlaceholder) {
    var _src = "holder.js/".concat(width, "x").concat(height);

    return __jsx("img", {
      src: _src,
      ref: placeholderRef,
      "data-src": _src
    });
  } else {
    return __jsx("img", {
      src: src
    });
  }
};
ReactHolderJs.propTypes = {
  placeholder: propTypes.object,
  src: propTypes.string.isRequired,
  usePlaceholder: propTypes.bool
};
ReactHolderJs.defaultProps = {
  placeholder: {
    auto: true,
    theme: 'vine'
  },
  usePlaceholder: false
};

var __jsx$1 = React__default['default'].createElement;
var ResizeDetector = reactResizeDetector.withResizeDetector( /*#__PURE__*/React.memo(function (_ref) {
  var height = _ref.height,
      onResize = _ref.onResize,
      style = _ref.style,
      width = _ref.width;
  window.requestAnimationFrame(function () {
    return onResize({
      height: height,
      width: width
    });
  });
  return __jsx$1(ResizeDetectorWrapper, {
    style: style
  });
}, function (_ref2, _ref3) {
  var prevWidth = _ref2.width;
  var nextWidth = _ref3.width;
  return prevWidth === nextWidth;
}));
var ResizeDetectorWrapper = styled__default['default'].div.withConfig({
  displayName: "resizeDetector__ResizeDetectorWrapper",
  componentId: "sc-1agzfum-0"
})(["height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%;"]);

/**
 * mimics a request to server
 */
function requestSimulator() {
  return _requestSimulator.apply(this, arguments);
}

function _requestSimulator() {
  _requestSimulator = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
    var responseType,
        timeout,
        _args = arguments;
    return regenerator.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            responseType = _args.length > 0 && _args[0] !== undefined ? _args[0] : 'success';
            timeout = _args.length > 1 && _args[1] !== undefined ? _args[1] : 1000;
            _context.next = 4;
            return new Promise(function (resolve, reject) {
              setTimeout(function () {
                if (responseType === 'success') resolve({
                  message: 'Success!'
                });else {
                  reject(new Error('Register failed!'));
                }
              }, timeout);
            });

          case 4:
            return _context.abrupt("return", _context.sent);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _requestSimulator.apply(this, arguments);
}

/**
 * Slugify a string
 */
var slugify = function slugify(string) {
  var replacer = '-';
  var slug = string.toString().toLowerCase().trim().normalize('NFKD') // Normalization Form Compatibility Decomposition
  .replace(/\s+/g, replacer) // Replace spaces replacer
  .replace(/[^\w-]+/g, '') // Remove all non-word chars
  .replace(/--+/g, replacer) // Replace multiple spaces with replacer
  .replace(new RegExp(replacer + '$'), ''); // Replace the replacer in the last occurence

  return slug;
};

/**
 * Truncate
 * Truncate the text to a single line
 */
var Truncate = function Truncate() {
  return "\n  display: inline-block;\n  line-height: initial;\n  overflow: hidden;\n  white-space: nowrap;\n  width: 100%;\n  word-break: break-all;\n  word-wrap: break-word;\n  text-overflow: ellipsis;\n  ";
}; // TODO: This will be deprecated when we manage it directly in JS.

var TruncateByMaxHeight = function TruncateByMaxHeight(maxHeight) {
  return "\n    display: inline-block;\n    line-height: 1.4;\n    overflow: hidden;\n    white-space: wrap;\n    max-height: ".concat(maxHeight, ";\n    width: 100%;\n\n  ");
};

/**
 * Validator: Post Code - UK
 */
var validatorPostCode = function validatorPostCode(postCode) {
  var regExp = /^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})$/;
  return regExp.test(postCode);
}; // Return area and district from Post Code

var parsePostCode = function parsePostCode(postCode) {
  var parsed = (postCode === null || postCode === void 0 ? void 0 : postCode.match(/([A-Z]+)([0-9]+).*?[A-Z0-9]{3}/i)) || '';
  return {
    area: parsed[1],
    district: parsed[2]
  };
};

/**
 * Validator: Uri
 */
var validatorUri = function validatorUri(uri) {
  var regExp = /^((mailto|tel|http|https|ftp):)/;
  return regExp.test(uri);
};

/**
 * Validator: UUID4
 */
var validatorUuid4 = function validatorUuid4(uuid) {
  var regExp = /^[a-z0-9-]{36}$/gi;
  return regExp.test(uuid);
};

var historyPush = function historyPush(query) {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      host = _window$location.host,
      pathname = _window$location.pathname;
  var url = "".concat(protocol, "//").concat(host).concat(pathname).concat(query);
  window.history.pushState({
    path: url
  }, '', url);
};

/**
 * Viewport width
 */
var viewPort = function viewPort(source) {
  if (source && source.clientWidth) {
    return source.clientWidth;
  }

  if (typeof window !== 'undefined' && window.innerWidth) {
    return window.innerWidth;
  }

  return null;
};

/**
 * Theme - Constants - Align
 */
var ALIGN = {
  Start: 'flex-start',
  End: 'flex-end',
  Left: 'left',
  Right: 'right',
  Center: 'center',
  'Space Between': 'space-between',
  'Space Around': 'space-around',
  Initial: 'initial',
  Inherit: 'inherit'
};

/**
 * Theme - Constants - Context
 */
var CONTEXT = {
  DARKGREY: 'darkGrey',
  WHITE: 'white',
  BLACK: 'black',
  DARK: 'dark',
  LIGHT: 'light',
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  INFO: 'info',
  WARNING: 'warning',
  DANGER: 'danger',
  HELP: 'help',
  MALE: 'male',
  FEMALE: 'female',
  TRANSPARENT: 'transparent'
};

/**
 * Theme - Constants - Contaxt Arrat
 */
var contextArray = function () {
  var array = [];

  for (var key in CONTEXT) {
    array.push(CONTEXT[key]);
  }

  return array;
}();

/**
 *  Theme - Constants - Size
 */
var SIZE = {
  XXS: 'xxs',
  XS: 'xs',
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl',
  XXL: 'xxl',
  XXXL: 'xxxl'
};

/**
 * Theme - Constants - Size Array
 */
var sizeArray = function () {
  var array = [];

  for (var key in SIZE) {
    array.push(SIZE[key]);
  }

  return array;
}();

/**
 * Theme - Constants - Position
 */
var Position = {
  Bottom: 'bottom',
  Top: 'top',
  Right: 'right',
  Left: 'left'
};

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      display: block;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  .text-center {\n    text-align: center;\n  }\n\n  .text-right {\n    text-align: right;\n  }\n\n  .text-white {\n    color: #fff;\n  }\n\n  .float-left {\n    float: left;\n  }\n\n  .float-right {\n    float: right;\n  }\n\n  .d-none {\n    display: none;\n  }\n\n  .d-md-block {\n    ", "\n  }\n\n  #iubenda_policy .iub_content {\n    padding: 0 !important;\n  }\n\n  #iubenda_policy.iubenda_fluid_policy .iub_container {\n    margin: 0 !important;\n  }\n\n  /* Normalise */\n  html {\n    box-sizing: border-box;\n    font-size: 16px;\n    line-height: 1.5;\n  }\n\n  *, *::before, *::after {\n    box-sizing: border-box;\n  }\n\n  body {\n    color: ", ";\n    font-family: ", ", sans-serif;\n    margin: 0;\n    position: relative;\n  }\n\n  .fc-event {\n    cursor: pointer;\n  }\n\n  abbr[title] {\n    border-bottom: none;\n    text-decoration: underline;\n    text-decoration: underline dotted;\n  }\n\n  b,\n  strong {\n    font-weight: bolder;\n  }\n\n  code,\n  kbd,\n  samp {\n    font-size: 1em;\n  }\n\n  small {\n    font-size: 80%;\n  }\n\n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n\n  sub {\n    bottom: -0.25em;\n  }\n\n  sup {\n    top: -0.5em;\n  }\n\n  img {\n    border-style: none;\n  }\n\n  input,\n  optgroup,\n  select {\n    font-family: inherit;\n    font-size: 100%;\n    line-height: 1.15;\n    margin: 0;\n  }\n\n  /* textarea {\n    overflow: auto;\n  } */\n\n  input {\n    overflow: visible;\n  }\n\n  select {\n    text-transform: none;\n  }\n\n  button::-moz-focus-inner,\n  [type=\"button\"]::-moz-focus-inner,\n  [type=\"reset\"]::-moz-focus-inner,\n  [type=\"submit\"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n  }\n\n  button:-moz-focusring,\n  [type=\"button\"]:-moz-focusring,\n  [type=\"reset\"]:-moz-focusring,\n  [type=\"submit\"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n  }\n\n  fieldset {\n    border: 0;\n    margin-bottom: 1rem;\n    padding: 0.5rem 0 0;\n  }\n\n  legend {\n    box-sizing: border-box;\n    color: inherit;\n    display: table;\n    max-width: 100%;\n    padding: 0;\n    white-space: normal;\n  }\n\n  progress {\n    vertical-align: baseline;\n  }\n\n  [type=\"checkbox\"],\n  [type=\"radio\"] {\n    box-sizing: border-box;\n    padding: 0;\n  }\n\n  [type=\"number\"]::-webkit-inner-spin-button,\n  [type=\"number\"]::-webkit-outer-spin-button {\n    height: auto;\n  }\n\n  [type=\"search\"] {\n    outline-offset: -2px;\n  }\n\n  ::-webkit-file-upload-button {\n    font: inherit;\n  }\n\n  details {\n    display: block;\n  }\n\n  summary {\n    display: list-item;\n  }\n\n  template {\n    display: none;\n  }\n\n  [hidden] {\n    display: none;\n  }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var ThemeStyle = styled.createGlobalStyle(_templateObject(), MEDIA_QUERY.desktop(_templateObject2()), function (props) {
  return props.theme.TYPOGRAPHY.fontColour;
}, function (props) {
  return props.theme.TYPOGRAPHY.font;
});

/**
 * Background colour
 */
var BACKGROUND = function BACKGROUND(_ref) {
  var context = _ref.context,
      outline = _ref.outline,
      theme = _ref.theme;
  return "background-color: ".concat(outline && 'transparent' || context && theme.COLOUR[context] || theme.COLOUR.dark, ";");
};

/**
 * Colour
 */
var COLOUR = function COLOUR(_ref) {
  var context = _ref.context,
      outline = _ref.outline,
      theme = _ref.theme;
  return "color: ".concat(outline && theme.COLOUR[context] || context === 'light' && theme.COLOUR.dark || context === 'white' && theme.COLOUR.primary || context && theme.COLOUR[context] || theme.COLOUR[context], ";");
};

/**
 * Theme - Variables - COLOUR
 */
var COLOUR$1 = {
  accent: 'rgb(102, 171, 255)',
  active: 'rgb(204 ,0, 0)',
  black: 'rgb(0, 0, 0)',
  blackText: 'rgb(102, 102, 102)',
  danger: 'rgb(255, 51, 51)',
  dark: 'rgb(63, 81, 90)',
  darkGrey: 'rgb(204, 204, 204)',
  darkText: '#666666',
  drykiss_lightBlue: 'rgb(0, 225, 218)',
  drykiss_darkPink: 'rgb(255, 0, 99)',
  error: 'rgb(255, 45, 45)',
  fadeBlue: 'rgba(36, 94, 229, 0.3)',
  fadeRed: 'rgba(255, 45, 45, 0.25)',
  female: 'rgb(248, 139, 157)',
  grey: 'rgb(235, 235, 235)',
  grey80: 'rgb(204, 204, 204)',
  gold40: 'rgb(250, 207, 56)',
  help: 'rgb(255, 203, 68)',
  info: 'rgb(25, 129, 255)',
  light: 'rgb(242, 242, 242)',
  lightBlue: 'rgb(173, 195, 245)',
  lightRed: 'rgb(255, 151, 151)',
  male: 'rgb(142, 206, 253)',
  primary: 'rgb(51, 51, 255)',
  secondary: 'rgb(6, 121, 216)',
  success: 'rgb(89, 217, 143)',
  formSuccess: 'rgb(69, 186, 190)',
  transparent: 'transparent',
  visited: 'rgb(180, 14, 180)',
  warning: 'rgb(250, 207, 56)',
  white: 'rgb(255, 255, 255)'
};

/**
 * Theme - Utils - Colour List
 */
var colourList = function () {
  var list = [];

  for (var key in COLOUR$1) {
    list.push({
      colour: COLOUR$1[key],
      id: RandomKey()
    });
  }

  return list;
}();

var DIMENSION = function DIMENSION(_ref) {
  var h100 = _ref.h100,
      w100 = _ref.w100,
      h100vh = _ref.h100vh,
      w100vw = _ref.w100vw;
  var temp = '';
  if (h100) temp += 'height: 100% !important;';
  if (w100) temp += 'width: 100% !important;';
  if (h100vh) temp += 'height: 100vh !important;';
  if (w100vw) temp += 'width: 100vw !important;';
  return temp;
};
var DIMENSION_PROP_TYPES = {
  h100: propTypes.bool,
  w100: propTypes.bool,
  h100vh: propTypes.bool,
  w100vw: propTypes.bool
};

var DISPLAY = function DISPLAY(_ref) {
  var dBlock = _ref.dBlock,
      dFlex = _ref.dFlex,
      dInline = _ref.dInline,
      dInlineBlock = _ref.dInlineBlock,
      dInlineFlex = _ref.dInlineFlex,
      dNone = _ref.dNone;
  var display = null;
  if (dBlock) display = 'block';
  if (dFlex) display = 'flex';
  if (dInline) display = 'inline';
  if (dInlineBlock) display = 'inline-block';
  if (dInlineFlex) display = 'inline-flex';
  if (dNone) display = 'none';
  return display ? "display: ".concat(display, " !important;") : '';
};
var DISPLAY_PROP_TYPES = {
  dBlock: propTypes.bool,
  dFlex: propTypes.bool,
  dInline: propTypes.bool,
  dInlineBlock: propTypes.bool,
  dInlineFlex: propTypes.bool,
  dNone: propTypes.bool
};

/**
 * Theme - Font Size
 */
var FONTSIZE = function FONTSIZE(_ref) {
  var size = _ref.size,
      theme = _ref.theme;
  var fontSize = size && Object.values(SIZE).indexOf(size);
  return "font-size: ".concat(fontSize > -1 ? theme.TYPOGRAPHY.fontSizes[fontSize] + 'px' : theme.TYPOGRAPHY.fontSizeBase, ";");
};

/**
 * Theme - Utils - Form Styles
 */
var ERROR_STYLE = function ERROR_STYLE(_ref) {
  var theme = _ref.theme,
      isTyping = _ref.isTyping,
      withAddon = _ref.withAddon;
  return styled.css(["border-color:", ";border-image:initial;border-style:solid;border-left-width:", ";&:hover{border-color:", ";}&:focus{border-color:", ";}", ""], theme.COLOUR.danger, !withAddon && '0.25rem', !isTyping && theme.COLOUR.lightRed, theme.COLOUR.error, isTyping === true && styled.css(["box-shadow:0px 0px 4px ", ";"], theme.COLOUR.fadeRed));
};
var COMMON_INPUT_STYLES = function COMMON_INPUT_STYLES(_ref2) {
  var disabled = _ref2.disabled,
      errors = _ref2.errors,
      isTyping = _ref2.isTyping,
      readOnly = _ref2.readOnly,
      Required = _ref2.Required,
      theme = _ref2.theme;
  return styled.css(["background-clip:padding-box;background-color:", ";border:1px solid ", ";border-radius:", ";box-sizing:border-box;color:", ";display:block;font-size:0.75rem;", " ", " outline:none;padding:0 0.725rem;transition:border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;width:100%;&:hover{border-color:", ";}&:focus{border-color:", ";}::placeholder{color:", ";opacity:1;}", " ", ""], theme.COLOUR.white, theme.COLOUR.grey80, theme.FORM_ELEMENTS_STYLES.inputBorderRadius, theme.COLOUR.blackText, Required && styled.css(["border-right-width:0.25rem;"]), isTyping === true && styled.css(["box-shadow:0px 0px 4px ", ";"], theme.COLOUR.fadeBlue), !disabled && !readOnly && theme.COLOUR.lightBlue, function () {
    if (!readOnly) {
      return errors ? theme.COLOUR.error : theme.COLOUR.primary;
    } else {
      return theme ? theme.COLOUR.darkGrey : '#CCCCCC';
    }
  }(), theme ? theme.COLOUR.grey80 : '#cccccc', disabled && styled.css(["background:", ";cursor:not-allowed;border-color:", ";"], theme.COLOUR.grey, function (_ref3) {
    var theme = _ref3.theme;
    return theme ? theme.COLOUR.darkGrey : '#cccccc';
  }), readOnly && styled.css(["background-color:transparent;border-color:", ";border-width:1px;padding:0.5rem;"], function (_ref4) {
    var theme = _ref4.theme;
    return theme ? theme.COLOUR.darkGrey : '#cccccc';
  }));
};

var SPACER_FORMULA = function SPACER_FORMULA(factor) {
  return factor * 4;
};
var SPACING = function SPACING() {
  var amount = 4;

  for (var _len = arguments.length, nums = new Array(_len), _key = 0; _key < _len; _key++) {
    nums[_key] = arguments[_key];
  }

  return nums.reduce(function (output, n) {
    return "".concat(output).concat(n * amount).concat(n > 0 ? 'px' : '', " ");
  }, '');
};
var SPACER = function SPACER(_ref) {
  var m = _ref.m,
      m0 = _ref.m0,
      mx = _ref.mx,
      my = _ref.my,
      mt = _ref.mt,
      mb = _ref.mb,
      mr = _ref.mr,
      ml = _ref.ml,
      mAuto = _ref.mAuto,
      p = _ref.p,
      p0 = _ref.p0,
      px = _ref.px,
      py = _ref.py,
      pt = _ref.pt,
      pb = _ref.pb,
      pr = _ref.pr,
      pl = _ref.pl;
  var temp = '';
  if (m) temp += "margin: ".concat(SPACER_FORMULA(m), "px !important;");
  if (m0) temp += 'margin: 0 !important;';
  if (mx) temp += "margin: 0 ".concat(SPACER_FORMULA(mx), "px !important;");
  if (my) temp += "margin: ".concat(SPACER_FORMULA(my), "px 0 !important;");
  if (mt) temp += "margin-top: ".concat(SPACER_FORMULA(mt), "px !important;");
  if (mb) temp += "margin-bottom: ".concat(SPACER_FORMULA(mb), "px !important;");
  if (mr) temp += "margin-right: ".concat(SPACER_FORMULA(mr), "px !important;");
  if (ml) temp += "margin-left: ".concat(SPACER_FORMULA(ml), "px !important;");
  if (mAuto) temp += 'margin: auto !important;';
  if (p) temp += "padding: ".concat(SPACER_FORMULA(p), "px !important;");
  if (p0) temp += 'padding: 0 !important;';
  if (px) temp += "padding: 0 ".concat(SPACER_FORMULA(px), "px !important;");
  if (py) temp += "padding: ".concat(SPACER_FORMULA(py), "px 0 !important;");
  if (pt) temp += "padding-top: ".concat(SPACER_FORMULA(pt), "px !important;");
  if (pb) temp += "padding-bottom: ".concat(SPACER_FORMULA(pb), "px !important;");
  if (pr) temp += "padding-right: ".concat(SPACER_FORMULA(pr), "px !important;");
  if (pl) temp += "padding-left: ".concat(SPACER_FORMULA(pl), "px !important;");
  return temp;
};
var SPACER_PROP_TYPES = {
  m: propTypes.number,
  m0: propTypes.bool,
  mx: propTypes.number,
  my: propTypes.number,
  mt: propTypes.number,
  mb: propTypes.number,
  mr: propTypes.number,
  ml: propTypes.number,
  mAuto: propTypes.bool,
  p: propTypes.number,
  p0: propTypes.bool,
  px: propTypes.number,
  py: propTypes.number,
  pt: propTypes.number,
  pb: propTypes.number,
  pr: propTypes.number,
  pl: propTypes.number
};

/**
 * Theme - Variables - Typography
 */
var fontSizeBase = '1rem;';
var fontSizeLg = '($fontSizeBase * 1.25);';
var fontSizeSm = '($fontSizeBase * .875);';
var fonts = {
  sans: 'sans-serif'
};
var font = fonts.sans;
var fontColour = '#6b7a87';
var fontFamilies = fonts;
var fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72, 96];
var TYPOGRAPHY = {
  fontSizeBase: fontSizeBase,
  fontSizeLg: fontSizeLg,
  fontSizeSm: fontSizeSm,
  font: font,
  fontColour: fontColour,
  fontFamilies: fontFamilies,
  fontSizes: fontSizes
};

/**
 * Avatar - Variables
 */
var AVATAR = {
  background: COLOUR$1.primary,
  colour: COLOUR$1.black
};

var BADGE = {
  BORDER_RADIUS: {
    round: '5rem',
    square: '0.25rem'
  },
  FONT_SIZE: {
    xxs: '0.625rem',
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '1.5rem',
    xxl: '2rem',
    xxxl: '3rem'
  },
  PADDING: {
    xxs: '0 0.5rem',
    xs: '0.125rem 0.5rem',
    sm: '0.25rem 0.5rem',
    md: '0.375rem 0.5rem',
    lg: '0.5rem 0.75rem',
    xl: '0.625rem 1rem',
    xxl: '0.75rem 1rem',
    xxxl: '0.875rem 1.5rem'
  },
  SHAPE: {
    ROUND: 'round',
    SQUARE: 'square'
  }
};

/**
 * Theme - Variables - Bar
 */
var BAR = {
  background: '#003753',
  highlight: COLOUR$1.primary,
  linkColour: COLOUR$1.light,
  linkHover: 'rgba(0, 0, 0, 0.75)',
  minSize: '6rem',
  transitionTiming: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '0.3s'
};

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var legendTranslateX = 110;
var BARCHART = {
  animate: false,
  colors: COLOUR$1,
  margin: function margin() {
    return {
      top: 50,
      right: this.showLegend ? 125 : 125 - legendTranslateX,
      // boolean passed as prop
      bottom: 50,
      left: 80
    };
  },
  borderColor: COLOUR$1.black,
  borderWidth: 1,
  enableGridX: false,
  enableGridY: true,
  enableLabel: true,
  isInteractive: false,
  labelSkipHeight: 24,
  padding: 0.2,
  axisBottom: function axisBottom() {
    return _objectSpread$2({
      tickSize: 10,
      tickPadding: 10,
      tickRotation: -1,
      legend: this.bottomLegend,
      // string passed as prop
      legendPosition: 'middle',
      legendOffset: 36
    }, this.axisBottom);
  },
  axisLeft: function axisLeft() {
    return _objectSpread$2({
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: this.leftLegend,
      // string passed as prop
      legendPosition: 'middle',
      legendOffset: -60
    }, this.axisLeft);
  },
  legends: [{
    anchor: 'bottom-right',
    dataFrom: 'keys',
    direction: 'column',
    effects: [{
      on: 'hover',
      style: {
        itemOpacity: 1
      }
    }],
    itemDirection: 'left-to-right',
    itemHeight: 20,
    itemsSpacing: 2,
    itemOpacity: 0.85,
    itemWidth: 100,
    justify: false,
    translateX: legendTranslateX,
    translateY: 0,
    symbolSize: 20
  }]
};

/**
 * Full Calendar - Variables
 */
var CALENDAR = {
  header: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
  }
};

/**
 * Theme - Variables - Copyright
 */
var COPYRIGHT = {
  background: COLOUR$1.white,
  colour: COLOUR$1.black
};

var DROPDOWN = {
  BORDER_COLOUR: 'rgb(149, 171, 182)'
};

/**
 * Footer - Variables
 */
var FOOTER = {
  background: COLOUR$1.white,
  colour: COLOUR$1.black
};

/**
 * Form - Variables
 */
var FORM_ELEMENTS_STYLES = {
  inputBorderRadius: '.25rem'
};

/**
 * Theme - Variables - Grid
 */
var breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 1024,
  xl: 1200
};
var containerWidths = {
  sm: 576,
  md: 768,
  lg: 1008,
  xl: 1152
};
var gridColumns = 12;
var gutterWidth = 32;
var defaultScreenClass = 'sm';
var space = [0, 4, 8, 16, 32, 64, 128];
var radius = 4;
var GRID = {
  breakpoints: breakpoints,
  containerWidths: containerWidths,
  defaultScreenClass: defaultScreenClass,
  gutterWidth: gutterWidth,
  gridColumns: gridColumns,
  radius: radius,
  space: space
};

/**
 * Theme - Variables - Headings
 */
var HEADINGS = {
  h1: {
    fontFamily: TYPOGRAPHY.font,
    fontSize: '2rem',
    lineHeight: '1.25',
    textTransform: 'initial'
  },
  h2: {
    fontFamily: TYPOGRAPHY.font,
    fontSize: '1.5rem',
    lineHeight: '1.3333',
    textTransform: 'initial'
  },
  h3: {
    fontFamily: TYPOGRAPHY.font,
    fontSize: '1.25rem',
    lineHeight: '1.4',
    textTransform: 'initial'
  },
  h4: {
    fontFamily: TYPOGRAPHY.font,
    fontSize: '1rem',
    lineHeight: '1.5',
    textTransform: 'initial'
  },
  h5: {
    fontFamily: TYPOGRAPHY.font,
    fontSize: '0.85rem',
    lineHeight: '1.429',
    textTransform: 'initial'
  },
  h6: {
    fontFamily: TYPOGRAPHY.font,
    fontSize: '0.85rem',
    letterSpacing: '2px',
    lineHeight: '1.5',
    textTransform: 'uppercase'
  }
};

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var lastValue = null;
var LINECHART = {
  axisBottom: function axisBottom() {
    var _this = this;

    return _objectSpread$3({
      axisTop: null,
      axisRight: null,
      format: function format(value) {
        if (_this.axisBottomDistinct) {
          var formatted = shortDate(value);

          if (formatted !== lastValue) {
            lastValue = formatted;
            return formatted;
          }
        } else return value;
      },
      legend: this.bottomLegend,
      // string passed as prop
      legendOffset: 36,
      legendPosition: 'middle',
      orient: 'bottom',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0
    }, this.axisBottom);
  },
  axisLeft: function axisLeft() {
    var _this2 = this;

    return _objectSpread$3({
      format: function format(value) {
        if (value % 1 === 0) return "".concat(value + _this2.axisLeftSymbol || value);
      },
      legend: this.leftLegend,
      // string passed as prop
      legendOffset: -50,
      legendPosition: 'middle',
      orient: 'left',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0
    }, this.axisLeft);
  },
  margin: function margin() {
    return {
      bottom: 50,
      left: 60,
      right: this.showLegend ? 110 : 30,
      // props context
      top: 30
    };
  },
  legends: [{
    anchor: 'bottom-right',
    direction: 'column',
    effects: [{
      on: 'hover',
      style: {
        itemBackground: 'rgba(0, 0, 0, .03)',
        itemOpacity: 1
      }
    }],
    justify: false,
    translateX: 100,
    translateY: 0,
    itemsSpacing: 0,
    itemDirection: 'left-to-right',
    itemWidth: 80,
    itemHeight: 20,
    itemOpacity: 0.75,
    symbolSize: 12,
    symbolShape: 'circle',
    symbolBorderColor: 'rgba(0, 0, 0, .5)'
  }],
  pointColor: COLOUR$1.white,
  pointSize: 10,
  pointBorderColor: {
    from: 'serieColor'
  },
  pointBorderWidth: 2,
  pointLabel: 'y',
  pointLabelYOffset: -12,
  useMesh: true,
  xScale: {
    type: 'point'
  },
  yScale: function yScale() {
    return {
      type: 'linear',
      stacked: !!this.stacked,
      // props context
      min: 'auto',
      max: 'auto'
    };
  }
};

/**
 * Theme - Variables - Link
 */
var LINK = {
  colour: COLOUR$1.primary
};

/**
 * Navbar - Variables
 */
var NAVBAR = {
  // Navbar
  background: COLOUR$1.white,
  colourActive: COLOUR$1.dark,
  height: '4rem',
  padding: '0 1rem',
  paddingTablet: '0 1rem',
  paddingDesktop: '0 3rem',
  // Borders
  borderTopColor: COLOUR$1.primary,
  borderTopWidth: '0.25rem',
  borderTopStyle: 'solid',
  // Overlay
  backgroundOverlay: COLOUR$1.white,
  heightOverlay: '100%',
  positionOverlay: 'fixed',
  widthOverlay: '100%',
  // Toggler
  colourToggler: COLOUR$1.dark,
  fontSizeToggler: '0.875',
  paddingToggler: '1.25rem 0 1.25rem 1rem',
  colourHoverToggler: COLOUR$1.primary,
  // Collapse
  positionCollapse: 'static',
  // Link
  paddingLink: '1rem 0.75rem',
  colourDefault: COLOUR$1.dark,
  colourHover: COLOUR$1.primary,
  colourDefaultDesktop: COLOUR$1.dark,
  colourHoverDesktop: COLOUR$1.primary,
  // List
  fontSizeList: '0.875rem',
  // ListItem
  borderTopListItem: '1px solid #33475b',
  backgroundListItem: 'transparent',
  backgroundHoverListItem: COLOUR$1.light,
  borderBottomHoverListItem: 'none',
  justifyContentDesktopListItem: 'center',
  marginBottomDesktopListItem: 'inherit'
};

/**
 * Theme - Variables - Page
 */
var PAGE = {
  backGroundColour: 'rgb(245, 248, 250)'
};

/**
 * PieChart - Variables
 */
var PIECHART = {
  animate: true,
  borderColor: {
    from: 'color',
    modifiers: [['darker', 0.2]]
  },
  borderWidth: 1,
  cornerRadius: 3,
  padAngle: 0.7,
  innerRadius: 0.5,
  legends: [{
    anchor: 'bottom',
    direction: 'row',
    translateY: 56,
    itemWidth: 100,
    itemHeight: 18,
    itemTextColor: '#999',
    symbolSize: 18,
    symbolShape: 'circle',
    effects: [{
      on: 'hover',
      style: {
        itemTextColor: '#000'
      }
    }]
  }],
  margin: function margin() {
    return {
      top: 30,
      right: 80,
      bottom: this.showLegend ? 80 : 30,
      // props context
      left: 80
    };
  },
  motionStiffness: 90,
  motionDamping: 15,
  radialLabelsSkipAngle: 10,
  radialLabelsTextXOffset: 6,
  radialLabelsTextColor: COLOUR$1.black,
  radialLabelsLinkOffset: 0,
  radialLabelsLinkDiagonalLength: 16,
  radialLabelsLinkHorizontalLength: 24,
  radialLabelsLinkStrokeWidth: 1,
  radialLabelsLinkColor: {
    from: 'color'
  },
  slicesLabelsSkipAngle: 10,
  slicesLabelsTextColor: COLOUR$1.black,
  startAngle: -180
};

/**
 * Progress - Variables
 */
var PROGRESS = {
  bgColor: COLOUR$1.light,
  borderRadius: '.25rem',
  fontSize: {
    xs: '.25rem',
    sm: '.5rem',
    md: '.75rem',
    lg: '1.25rem',
    xl: '1.5rem'
  },
  height: {
    xs: '.15rem',
    sm: '.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem'
  }
};
var PROGRESSBAR = {
  bgImage: "\n  linear-gradient(\n    45deg,\n    rgba(255,255,255,.15) 25%,\n    transparent 25%,\n    transparent 50%,\n    rgba(255,255,255,.15) 50%,\n    rgba(255,255,255,.15) 75%,\n    transparent 75%,\n    transparent\n    )\n    ",
  bgSize: '1rem 1rem',
  context: 'primary',
  role: 'progressbar',
  transition: 'width .6s ease'
};

/**
 * Theme - Variables - Sidebar
 */
var SIDEBAR = {
  background: '#003753',
  highlight: COLOUR$1.primary,
  linkColour: COLOUR$1.light,
  linkHover: 'rgba(0, 0, 0, 0.75)'
};

/**
 * Theme - Variables - Stepper
 */
var STEPPER = {
  colour: COLOUR$1.primary,
  colourCheckmark: COLOUR$1.success
};

/**
 * Table - Variables
 */
var TABLE = {
  fontSize: '0.875rem',
  padding: '0.5rem'
};

/**
 * Theme - Variables - Tabs
 */
var TABS = {
  activeColour: COLOUR$1.white,
  borderColour: '#dee2e6',
  borderRadius: '.1rem',
  colour: COLOUR$1.light,
  disabledColour: '#eee',
  hoverColour: '#dee2e6'
};

/**
 * Theme - Variables - Text
 */
var TEXT_STYLE = {
  DEFAULT_COLOUR: 'rgb(102, 102, 102)',
  FONT_FAMILY: {
    "default": TYPOGRAPHY.font,
    xxl: 'JetBrains Mono ExtraBold',
    xxxl: 'JetBrains Mono ExtraBold'
  },
  FONT_SIZE: {
    xxs: '0.625rem',
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '1.5rem',
    xxl: '2rem',
    xxxl: '3rem'
  },
  LINE_HEIGHT: {
    xxs: '1rem',
    xs: '1.125rem',
    sm: '1.375rem',
    md: '1.5rem',
    lg: '1.75rem',
    xl: '2.25rem',
    xxl: '3rem',
    xxxl: '4.5rem'
  }
};

/**
 * Theme - Variables
 */
var Theme = {
  AVATAR: AVATAR,
  BADGE: BADGE,
  BAR: BAR,
  BARCHART: BARCHART,
  CALENDAR: CALENDAR,
  COLOUR: COLOUR$1,
  COPYRIGHT: COPYRIGHT,
  DROPDOWN: DROPDOWN,
  FOOTER: FOOTER,
  FORM_ELEMENTS_STYLES: FORM_ELEMENTS_STYLES,
  GRID: GRID,
  HEADINGS: HEADINGS,
  LINECHART: LINECHART,
  LINK: LINK,
  NAVBAR: NAVBAR,
  PAGE: PAGE,
  PIECHART: PIECHART,
  PROGRESS: PROGRESS,
  PROGRESSBAR: PROGRESSBAR,
  SIDEBAR: SIDEBAR,
  SPACING: SPACING,
  STEPPER: STEPPER,
  TABLE: TABLE,
  TABS: TABS,
  TEXT_STYLE: TEXT_STYLE,
  TYPOGRAPHY: TYPOGRAPHY
};

var __jsx$2 = React__default['default'].createElement;
var MetaHead = function MetaHead(_ref) {
  var canonical = _ref.canonical,
      brand = _ref.brand,
      meta = _ref.meta;
  var description = meta.description,
      path = meta.path,
      title = meta.title;
  return __jsx$2(Head__default['default'], null, __jsx$2("title", null, title, " | ", brand), __jsx$2("meta", {
    name: "description",
    content: description,
    key: "description"
  }), __jsx$2("meta", {
    rel: "canonical",
    href: canonical + path,
    key: "canonical"
  }), __jsx$2("meta", {
    property: "og:title",
    content: title
  }), __jsx$2("meta", {
    property: "og:description",
    content: description
  }), __jsx$2("meta", {
    property: "og:url",
    content: canonical + path
  }), __jsx$2("meta", {
    name: "twitter:url",
    content: canonical + path
  }), __jsx$2("meta", {
    name: "twitter:title",
    content: title
  }), __jsx$2("meta", {
    name: "twitter:description",
    content: description
  }));
};
MetaHead.propTypes = {
  brand: propTypes.string.isRequired,
  meta: propTypes.object.isRequired
};

var __jsx$3 = React__default['default'].createElement;
var Address = function Address(_ref) {
  var county = _ref.county,
      country = _ref.country,
      line1 = _ref.line1,
      line2 = _ref.line2,
      line3 = _ref.line3,
      postcode = _ref.postcode,
      town = _ref.town;
  return __jsx$3("address", null, __jsx$3(Text, null, line1), line2 && __jsx$3(Text, null, line2), line3 && __jsx$3(Text, null, line3), __jsx$3(Text, null, town), county && __jsx$3(Text, null, county), __jsx$3(Text, null, postcode), __jsx$3(Text, null, country));
};
Address.propTypes = {
  county: propTypes.string,
  country: propTypes.string.isRequired,
  line1: propTypes.string.isRequired,
  line2: propTypes.string,
  line3: propTypes.string,
  postcode: propTypes.string.isRequired,
  town: propTypes.string
};

/**
 * Avatar - Props
 */
var AvatarPropTypes = {
  action: propTypes.node,
  actionClick: propTypes.func,
  children: propTypes.any,
  className: propTypes.any,
  click: propTypes.func,
  content: propTypes.any,
  context: propTypes.oneOf(Object.values(CONTEXT)),
  gmail: propTypes.string,
  size: propTypes.oneOf(Object.values(SIZE)),
  src: propTypes.string,
  style: propTypes.objectOf(propTypes.oneOfType([propTypes.number, propTypes.string]))
};
var AvatarDefaultProps = {
  context: 'primary',
  size: 'lg'
};

var __jsx$4 = React__default['default'].createElement;
var Avatar = function Avatar(_ref) {
  var action = _ref.action,
      actionClick = _ref.actionClick,
      children = _ref.children,
      className = _ref.className,
      click = _ref.click,
      content = _ref.content,
      context = _ref.context,
      gmail = _ref.gmail,
      size = _ref.size,
      src = _ref.src,
      style = _ref.style;
  var avatarSrc = src || gmail && gravatar__default['default'].url(gmail, {
    d: 'identicon'
  });
  return __jsx$4(StyledAvatar, {
    className: className,
    context: context,
    onClick: click,
    size: size,
    style: style
  }, children || avatarSrc && __jsx$4(Image$1, {
    alt: "Avatar",
    src: avatarSrc
  }) || getAcronym(content), action && __jsx$4(StyledAction, {
    onClick: actionClick
  }, action));
};
var StyledAction = styled__default['default'].div.withConfig({
  displayName: "avatar__StyledAction",
  componentId: "sc-56ekci-0"
})(["background-color:rgba(0,0,0,0.5);bottom:0;color:#fff;cursor:pointer;font-size:", ";left:0;padding:4px;position:absolute;opacity:0;right:0;transition:all 0.1s ease-in-out;text-align:center;visibility:hidden;width:100%;"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.TYPOGRAPHY.fontSizeBase;
});
var StyledAvatar = styled__default['default'].div.withConfig({
  displayName: "avatar__StyledAvatar",
  componentId: "sc-56ekci-1"
})(["align-items:center;background:", ";border-radius:50%;box-sizing:border-box;color:", ";display:flex;justify-content:center;position:relative;overflow:hidden;object-fit:cover;", " ", " &:hover{", "{visibility:visible;opacity:1;}}"], function (_ref3) {
  var context = _ref3.context,
      theme = _ref3.theme;
  return context ? theme.COLOUR[context] : theme.AVATAR.background;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.AVATAR.colour;
}, function (props) {
  return FONTSIZE(props);
}, function (_ref5) {
  var size = _ref5.size,
      theme = _ref5.theme;
  var sizeIndex = size && Object.values(SIZE).indexOf(size);
  var dimension = theme.TYPOGRAPHY.fontSizes[sizeIndex] + 24;
  return styled.css(["height:", "px;min-width:", "px;width:", "px;"], dimension, dimension, dimension);
}, StyledAction);
Avatar.propTypes = AvatarPropTypes;
Avatar.defaultProps = AvatarDefaultProps;

/**
 * Icon — Constants — Prefix
 * Provides a list of the prefixes of FontAwesome Icons
 */
var ICON_PREFIX = {
  Solid: 'fas',
  Regular: 'far',
  Light: 'fal',
  Duotone: 'fad',
  Brands: 'fab'
};

/**
 * Icon — Constants — Pull
 * Provides a list of the pulls of FontAwesome Icons
 */
var ICON_PULL = {
  left: 'left',
  right: 'right'
};

/**
 * Icon — Constants — Size
 * Provides a list of the sizes of FontAwesome Icons
 */
var ICON_SIZE = {
  ExtraSmall: 'xs',
  Small: 'sm',
  Large: 'lg',
  x2: '2x',
  x3: '3x',
  x4: '4x',
  x5: '5x',
  x6: '6x',
  x7: '7x',
  x8: '8x',
  x9: '9x',
  x10: '10x'
};

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var IconPropTypes = _objectSpread$4(_objectSpread$4({
  border: propTypes.bool,
  className: propTypes.any,
  context: propTypes.oneOf(Object.values(CONTEXT)),
  mask: propTypes.oneOfType([propTypes.object, propTypes.array, propTypes.string]),
  fixedWidth: propTypes.bool,
  inverse: propTypes.bool,
  icon: propTypes.oneOfType([propTypes.object, propTypes.array, propTypes.string.isRequired]),
  listItem: propTypes.bool,
  prefix: propTypes.oneOf(Object.values(ICON_PREFIX)),
  pull: propTypes.oneOf(Object.values(ICON_PULL)),
  pulse: propTypes.bool,
  size: propTypes.oneOf(Object.values(ICON_SIZE)),
  spin: propTypes.bool,
  style: propTypes.objectOf(propTypes.oneOfType([propTypes.number, propTypes.string])),
  title: propTypes.string,
  transform: propTypes.oneOfType([propTypes.string, propTypes.object]),
  swapOpacity: propTypes.bool
}, DISPLAY_PROP_TYPES), SPACER_PROP_TYPES);
var IconDefaultProps = {
  fixedWidth: true,
  prefix: 'fas'
};

var __jsx$5 = React__default['default'].createElement;
var Icon = function Icon(_ref) {
  var icon = _ref.icon,
      prefix = _ref.prefix,
      props = _objectWithoutProperties(_ref, ["icon", "prefix"]);

  return __jsx$5(StyledIcon, _extends({
    icon: [prefix, icon]
  }, props));
};
var StyledIcon = styled__default['default'](reactFontawesome.FontAwesomeIcon).withConfig({
  displayName: "icon__StyledIcon",
  componentId: "sc-1fbcyge-0"
})(["color:", ";", " ", ""], function (_ref2) {
  var color = _ref2.color,
      context = _ref2.context,
      theme = _ref2.theme;
  return context ? theme.COLOUR[context] : color;
}, function (theme) {
  return DISPLAY(theme);
}, function (theme) {
  return SPACER(theme);
});
Icon.propTypes = IconPropTypes;
Icon.defaultProps = IconDefaultProps;

var __jsx$6 = React__default['default'].createElement;
var IconStacked = function IconStacked(_ref) {
  var icon = _ref.icon,
      prefix = _ref.prefix;
  return __jsx$6("span", {
    className: "fa-stack fa-1x",
    style: {
      pointerEvents: 'none'
    }
  }, __jsx$6(Icon, {
    className: "fa-stack-2x",
    color: "#eaf0f6",
    fixedWidth: false,
    icon: "circle",
    prefix: "fas"
  }), __jsx$6(Icon, {
    className: "fa-stack-1x",
    color: "#506e91",
    fixedWidth: false,
    icon: icon,
    prefix: prefix
  }));
};
IconStacked.propTypes = {
  icon: propTypes.string.isRequired,
  prefix: propTypes.string
};
IconStacked.defaultProps = {
  prefix: 'fas'
};

/**
 * Badge - Props
 */
var BadgePropTypes = {
  children: propTypes.node,
  className: propTypes.string,
  content: propTypes.string.isRequired,
  context: propTypes.oneOf(Object.values(CONTEXT)),
  icon: propTypes.string,
  iconPrefix: propTypes.string,
  shape: propTypes.oneOf(['round', 'square']),
  size: propTypes.oneOf(Object.values(SIZE)),
  style: propTypes.object,
  to: propTypes.string
};
var BadgeDefaultProps = {
  context: 'primary',
  shape: 'square',
  size: 'md'
};

var __jsx$7 = React__default['default'].createElement;
var Badge = function Badge(_ref) {
  var children = _ref.children,
      className = _ref.className,
      content = _ref.content,
      context = _ref.context,
      icon = _ref.icon,
      iconPrefix = _ref.iconPrefix,
      shape = _ref.shape,
      size = _ref.size,
      style = _ref.style,
      to = _ref.to;
  return __jsx$7(StyledBadge, {
    className: className,
    context: context,
    href: to,
    itemProp: "keywords",
    shape: shape,
    size: size,
    style: style
  }, icon && __jsx$7(StyledIcon$1, {
    icon: icon,
    prefix: iconPrefix
  }), content || children);
};
var StyledBadge = styled__default['default'].a.withConfig({
  displayName: "badge__StyledBadge",
  componentId: "sc-1yjw714-0"
})(["", " ", " border:", ";border-radius:", ";color:", ";display:inline-block;line-height:1;margin:0 0.5em 0.5em 0;padding:", ";font-size:", ";text-align:center;vertical-align:baseline;white-space:nowrap;transition:all 0.1s ease-in-out;text-decoration:none;cursor:default;", " &:empty{display:none;}"], function (props) {
  return BACKGROUND(props);
}, function (props) {
  return FONTSIZE(props);
}, function (_ref2) {
  var context = _ref2.context,
      theme = _ref2.theme;
  return context !== 'white' ? 'none' : '1px solid ' + theme.COLOUR.blackText;
}, function (_ref3) {
  var shape = _ref3.shape,
      theme = _ref3.theme;
  return theme.BADGE.BORDER_RADIUS[shape];
}, function (_ref4) {
  var theme = _ref4.theme,
      context = _ref4.context;
  return context !== 'white' ? theme.COLOUR.white : theme.COLOUR.black;
}, function (_ref5) {
  var size = _ref5.size,
      theme = _ref5.theme;
  return theme.BADGE.PADDING[size];
}, function (_ref6) {
  var size = _ref6.size,
      theme = _ref6.theme;
  return theme.BADGE.FONT_SIZE[size];
}, function (_ref7) {
  var href = _ref7.href;
  return href && styled.css(["&:hover{opacity:0.7;cursor:pointer;}"]);
});
var StyledIcon$1 = styled__default['default'](Icon).withConfig({
  displayName: "badge__StyledIcon",
  componentId: "sc-1yjw714-1"
})(["margin-right:5px;"]);
Badge.propTypes = BadgePropTypes;
Badge.defaultProps = BadgeDefaultProps;

var __jsx$8 = React__default['default'].createElement;
var Blockquote = function Blockquote(_ref) {
  var footer = _ref.footer,
      text = _ref.text;
  return __jsx$8(StyledBlockquote, null, __jsx$8(StyledText, null, text), footer && __jsx$8(StyledFooter, null, footer));
};
var StyledBlockquote = styled__default['default'].blockquote.withConfig({
  displayName: "blockquote__StyledBlockquote",
  componentId: "sc-1l9ajin-0"
})(["border-left:5px solid rgba(240,0,0,0.5);margin:1rem 0;padding:10px 20px;"]);
var StyledText = styled__default['default'].h1.withConfig({
  displayName: "blockquote__StyledText",
  componentId: "sc-1l9ajin-1"
})(["color:#000;font-size:2rem;font-weight:normal;margin:0;"]);
var StyledFooter = styled__default['default'].footer.withConfig({
  displayName: "blockquote__StyledFooter",
  componentId: "sc-1l9ajin-2"
})(["font-size:1rem;&::before{content:'\\2014 \\A0';}"]);
Blockquote.propTypes = {
  footer: propTypes.string,
  text: propTypes.string.isRequired
};

function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$5(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var ButtonPropTypes = _objectSpread$5(_objectSpread$5(_objectSpread$5({
  block: propTypes.bool,
  centre: propTypes.bool,
  children: propTypes.node,
  className: propTypes.string,
  content: propTypes.node,
  context: propTypes.oneOf(Object.values(CONTEXT)),
  dashed: propTypes.bool,
  disabled: propTypes.bool,
  endIcon: propTypes.string,
  endIconProps: propTypes.object,
  onClick: propTypes.func,
  outline: propTypes.bool,
  shadow: propTypes.bool,
  startIcon: propTypes.string,
  startIconProps: propTypes.object,
  size: propTypes.oneOf(Object.values(SIZE)),
  style: propTypes.objectOf(propTypes.oneOfType([propTypes.number, propTypes.string])),
  type: propTypes.oneOf(['button', 'reset', 'submit'])
}, DIMENSION_PROP_TYPES), DISPLAY_PROP_TYPES), SPACER_PROP_TYPES);
var ButtonDefaultProps = {
  context: 'primary',
  disabled: false,
  shadow: false,
  size: 'md',
  type: 'button'
};

var __jsx$9 = React__default['default'].createElement;
var Button = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      content = _ref.content,
      context = _ref.context,
      endIcon = _ref.endIcon,
      endIconProps = _ref.endIconProps,
      startIcon = _ref.startIcon,
      startIconProps = _ref.startIconProps,
      outline = _ref.outline,
      props = _objectWithoutProperties(_ref, ["children", "content", "context", "endIcon", "endIconProps", "startIcon", "startIconProps", "outline"]);

  var theme = styled.useTheme();
  var textContext = getTextContext(context, outline);
  var text = children || content;
  return __jsx$9(StyledButton, _extends({
    context: context,
    outline: outline,
    textContext: textContext,
    ref: ref,
    role: "button"
  }, props), startIcon && __jsx$9(Icon, _extends({
    icon: startIcon
  }, startIconProps, {
    prefix: startIconProps === null || startIconProps === void 0 ? void 0 : startIconProps.prefix
  })), text && __jsx$9(StyledContent, null, text), endIcon && __jsx$9(Icon, _extends({
    icon: endIcon
  }, endIconProps, {
    prefix: endIconProps === null || endIconProps === void 0 ? void 0 : endIconProps.prefix
  })));
});

var getTextContext = function getTextContext(context, outline, theme) {
  if (context === 'white') {
    return 'primary';
  }

  if (outline) {
    return context;
  }

  return 'white';
};

var StyledButton = styled__default['default'].button.withConfig({
  displayName: "button__StyledButton",
  componentId: "n5qq37-0"
})(["", " align-items:center;border:", ";border-radius:.25rem;box-sizing:border-box;color:", ";cursor:pointer;display:", ";font-size:14px;height:3rem;justify-content:center;line-height:100%;outline:none;overflow:visible;text-decoration:none;text-transform:none;user-select:none;vertical-align:middle;white-space:nowrap;margin:", ";padding:", ";width:", ";", " ", " ", " ", " & + &{margin-top:", ";}&:hover{background-color:", ";border-color:", ";color:", ";}transition:all 0.1s ease-in-out;", " ", " ", " ", ""], function (props) {
  return BACKGROUND(props);
}, function (_ref2) {
  var context = _ref2.context,
      dashed = _ref2.dashed,
      outline = _ref2.outline,
      COLOUR = _ref2.theme.COLOUR;
  return outline ? "1px ".concat(dashed ? 'dashed' : 'solid', " ").concat(COLOUR[context]) : 'none';
}, function (_ref3) {
  var textContext = _ref3.textContext,
      COLOUR = _ref3.theme.COLOUR;
  return COLOUR[textContext];
}, function (_ref4) {
  var block = _ref4.block,
      centre = _ref4.centre;
  return centre || block ? 'flex' : 'inline-flex';
}, function (_ref5) {
  var centre = _ref5.centre;
  return centre ? 'auto' : 0;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.SPACING(3, 6);
}, function (_ref7) {
  var block = _ref7.block;
  return block ? '100%' : 'initial';
}, function (_ref8) {
  var disabled = _ref8.disabled;
  return disabled && styled.css(["cursor:not-allowed;opacity:0.2;pointer-events:none;"]);
}, function (_ref9) {
  var size = _ref9.size,
      theme = _ref9.theme;
  return size === 'xs' && styled.css(["font-size:12px;padding:", ";height:24px;"], theme.SPACING(1, 2));
}, function (_ref10) {
  var size = _ref10.size;
  return size === 'sm' && styled.css(["font-size:12px;padding:", ";height:32px;"], function (_ref11) {
    var theme = _ref11.theme;
    return theme.SPACING(2, 4);
  });
}, function (_ref12) {
  var size = _ref12.size;
  return size === 'lg' && styled.css(["font-size:16px;padding:", ";height:56px;"], function (_ref13) {
    var theme = _ref13.theme;
    return theme.SPACING(4, 8);
  });
}, function (_ref14) {
  var block = _ref14.block;
  return block ? '1rem' : 'initial';
}, function (_ref15) {
  var context = _ref15.context,
      COLOUR = _ref15.theme.COLOUR;
  return shadeLinearRgb(-0.1, COLOUR[context]);
}, function (_ref16) {
  var context = _ref16.context,
      COLOUR = _ref16.theme.COLOUR;
  return shadeLinearRgb(-0.12, COLOUR[context]);
}, function (_ref17) {
  var COLOUR = _ref17.theme.COLOUR;
  return COLOUR.white;
}, function (props) {
  return props.shadow && 'box-shadow: 0px 10px 24px 0px rgba(0, 0, 0, .12), 0px 10px 24px 0px rgba(0, 0, 0, .12), 0px 10px 24px 0px rgba(0, 0, 0, .12);';
}, function (theme) {
  return DIMENSION(theme);
}, function (theme) {
  return DISPLAY(theme);
}, function (theme) {
  return SPACER(theme);
});
var StyledContent = styled__default['default'].div.withConfig({
  displayName: "button__StyledContent",
  componentId: "n5qq37-1"
})([":not(:first-child){margin-left:", ";}:not(:last-child){margin-right:", ";}"], function (_ref18) {
  var theme = _ref18.theme;
  return theme.SPACING(2);
}, function (_ref19) {
  var theme = _ref19.theme;
  return theme.SPACING(2);
});
Button.propTypes = ButtonPropTypes;
Button.defaultProps = ButtonDefaultProps;

var __jsx$a = React__default['default'].createElement;
var ButtonToolbar = function ButtonToolbar(_ref) {
  var align = _ref.align,
      children = _ref.children;
  return __jsx$a(StyledToolbar, {
    align: align,
    "aria-label": "Toolbar with button groups",
    role: "toolbar"
  }, __jsx$a(StyledGroup, {
    role: "group",
    "aria-label": "First group"
  }, children));
};
var StyledToolbar = styled__default['default'].div.withConfig({
  displayName: "toolbar__StyledToolbar",
  componentId: "sc-14iq22n-0"
})(["display:flex;flex-wrap:wrap;justify-content:", ";"], function (_ref2) {
  var align = _ref2.align;
  return align;
});
var StyledGroup = styled__default['default'].div.withConfig({
  displayName: "toolbar__StyledGroup",
  componentId: "sc-14iq22n-1"
})(["display:inline-flex;position:relative;vertical-align:middle;a:hover{color:white;}a:not(:last-child),button:not(:last-child){border-bottom-right-radius:0;border-right:1px solid ", ";border-top-right-radius:0;}a:not(:first-child),button:not(:first-child),a:not(:first-child) button{border-top-left-radius:0;border-bottom-left-radius:0;margin-left:0;}a:not(:last-child) button{border-bottom-right-radius:0;border-right:1px solid ", ";border-top-right-radius:0;}"], function (_ref3) {
  var COLOUR = _ref3.theme.COLOUR;
  return COLOUR.light;
}, function (_ref4) {
  var COLOUR = _ref4.theme.COLOUR;
  return COLOUR.light;
});
ButtonToolbar.propTypes = {
  align: propTypes.string,
  children: propTypes.node.isRequired
};
ButtonToolbar.defaultProps = {
  align: 'center'
};

var __jsx$b = React__default['default'].createElement;
var Close = function Close(_ref) {
  var className = _ref.className,
      click = _ref.click,
      context = _ref.context,
      icon = _ref.icon,
      prefix = _ref.prefix;
  return __jsx$b(StyledButton$1, {
    className: className,
    context: context,
    onClick: click
  }, __jsx$b(Icon, {
    "aria-hidden": "true",
    context: context,
    icon: icon,
    prefix: prefix
  }));
};
var StyledButton$1 = styled__default['default'](Button).withConfig({
  displayName: "close__StyledButton",
  componentId: "bk2anc-0"
})(["background-color:transparent;border:0;color:", ";cursor:pointer;float:right;font-size:1.5rem;height:auto;line-height:0;margin:0;padding:0;text-shadow:0 1px 0 #fff;z-index:10000;&:hover{background-color:transparent;color:#000;opacity:0.8;text-decoration:none;}"], function (_ref2) {
  var context = _ref2.context,
      theme = _ref2.theme;
  return theme.COLOUR[context];
});
Close.propTypes = {
  className: propTypes.any,
  click: propTypes.func.isRequired,
  context: propTypes.oneOf(Object.values(CONTEXT)),
  icon: propTypes.string,
  prefix: propTypes.string
};
Close.defaultProps = {
  context: 'dark',
  icon: 'times-circle',
  prefix: 'fas'
};

var __jsx$c = React__default['default'].createElement;
var Date$1 = function Date(_ref) {
  var date = _ref.date,
      size = _ref.size;
  return __jsx$c(StyledTime, {
    size: size,
    dateTime: date,
    itemProp: "datePublished",
    pubdate: "pubdate"
  }, date);
};
var StyledTime = styled__default['default'].time.withConfig({
  displayName: "date__StyledTime",
  componentId: "sc-1t9t69m-0"
})(["", ""], function (_ref2) {
  var _theme$TEXT_STYLE$FON, _theme$TEXT_STYLE$LIN, _ref3, _theme$TEXT_STYLE$FON2;

  var size = _ref2.size,
      theme = _ref2.theme;
  return styled.css(["font-size:", ";line-height:", ";font-family:", ";color:", ";"], (_theme$TEXT_STYLE$FON = theme.TEXT_STYLE.FONT_SIZE[size]) !== null && _theme$TEXT_STYLE$FON !== void 0 ? _theme$TEXT_STYLE$FON : '1rem', (_theme$TEXT_STYLE$LIN = theme.TEXT_STYLE.LINE_HEIGHT[size]) !== null && _theme$TEXT_STYLE$LIN !== void 0 ? _theme$TEXT_STYLE$LIN : '1rem', (_ref3 = (_theme$TEXT_STYLE$FON2 = theme.TEXT_STYLE.FONT_FAMILY[size]) !== null && _theme$TEXT_STYLE$FON2 !== void 0 ? _theme$TEXT_STYLE$FON2 : theme.TEXT_STYLE.FONT_FAMILY["default"]) !== null && _ref3 !== void 0 ? _ref3 : 'sans-serif', theme.COLOUR.black);
});
Date$1.propTypes = {
  date: propTypes.string.isRequired
};
Date$1.defaultProps = {
  size: 'md'
};

/**
 * Details - Props
 */
var DetailsPropTypes = {
  children: propTypes.node.isRequired,
  context: propTypes.oneOf(Object.values(CONTEXT)),
  open: propTypes.bool,
  summary: propTypes.string.isRequired,
  SummaryActionsComponent: propTypes.node,
  style: propTypes.any,
  Toolbar: propTypes.node
};
var DetailsDefaultProps = {
  context: 'primary',
  open: false
};

var __jsx$d = React__default['default'].createElement;
var Details = function Details(_ref) {
  var children = _ref.children,
      context = _ref.context,
      open = _ref.open,
      summary = _ref.summary,
      SummaryActionsComponent = _ref.SummaryActionsComponent,
      style = _ref.style,
      Toolbar = _ref.Toolbar,
      props = _objectWithoutProperties(_ref, ["children", "context", "open", "summary", "SummaryActionsComponent", "style", "Toolbar"]);

  return __jsx$d(StyledDetails, {
    context: context,
    open: open
  }, __jsx$d(StyledSummary, null, summary, props.button && __jsx$d(StyledButton$2, {
    content: props.button || 'Add New',
    context: "secondary",
    onClick: props.handleClick,
    size: "sm"
  }), SummaryActionsComponent && __jsx$d(ActionsWrapper, null, SummaryActionsComponent), Toolbar && __jsx$d(Toolbar, null)), __jsx$d(StyledBody, {
    style: style
  }, children));
};
var ActionsWrapper = styled__default['default'].div.withConfig({
  displayName: "details__ActionsWrapper",
  componentId: "sc-1tw1laa-0"
})(["float:right;width:fit-content;"]);
var StyledDetails = styled__default['default'].details.withConfig({
  displayName: "details__StyledDetails",
  componentId: "sc-1tw1laa-1"
})(["background-color:#fff;border:1px solid #eee;border-bottom:1px solid ", ";box-shadow:rgba(45,62,80,0.12) 0 1px 5px 0;margin-bottom:0.5rem;"], function (_ref2) {
  var context = _ref2.context,
      theme = _ref2.theme;
  return theme.COLOUR[context];
});
var StyledSummary = styled__default['default'].summary.withConfig({
  displayName: "details__StyledSummary",
  componentId: "sc-1tw1laa-2"
})(["cursor:pointer;font-weight:bold;outline:none;padding:1rem;position:relative;"]);
var StyledButton$2 = styled__default['default'](Button).withConfig({
  displayName: "details__StyledButton",
  componentId: "sc-1tw1laa-3"
})(["float:right;"]);
var StyledBody = styled__default['default'].div.withConfig({
  displayName: "details__StyledBody",
  componentId: "sc-1tw1laa-4"
})(["font-size:1rem;padding:0 1rem 1rem;"]);
Details.propTypes = DetailsPropTypes;
Details.defaultProps = DetailsDefaultProps;

var __jsx$e = React__default['default'].createElement;
var DetailsText = function DetailsText(_ref) {
  var content = _ref.content,
      text = _ref.text;
  return __jsx$e(React__default['default'].Fragment, null, __jsx$e(Space, {
    marginBottom: "sm"
  }), __jsx$e(Text, {
    content: content,
    context: "dark",
    size: "sm"
  }), __jsx$e(Text, null, text));
};

/**
 * Atoms - Divider - Props
 */
var DividerPropTypes = {
  className: propTypes.any,
  context: propTypes.oneOf(Object.values(CONTEXT)),
  size: propTypes.oneOf(Object.values(SIZE)),
  thickness: propTypes.number
};
var DividerDefaultProps = {
  context: 'light',
  size: 'md',
  thickness: 2
};

/**
 * Divider
 */
var Divider = styled__default['default'].hr.withConfig({
  displayName: "divider__Divider",
  componentId: "sc-1896imx-0"
})(["border:none;height:", "px;flex-shrink:0;width:100%;", " ", " margin:", ";", ""], function (_ref) {
  var thickness = _ref.thickness;
  return thickness;
}, function (props) {
  return BACKGROUND(props);
}, function (_ref2) {
  var vertical = _ref2.vertical;
  return vertical && styled.css(["width:", "px;height:100%;"], function (_ref3) {
    var thickness = _ref3.thickness;
    return thickness;
  });
}, function (_ref4) {
  var size = _ref4.size,
      theme = _ref4.theme,
      vertical = _ref4.vertical;

  if (size === 'sm') {
    if (vertical) {
      return theme.SPACING(0, 4);
    }

    return theme.SPACING(4, 0);
  }

  if (size === 'lg') {
    if (vertical) {
      return theme.SPACING(0, 12);
    }

    return theme.SPACING(12, 0);
  }

  if (vertical) {
    return theme.SPACING(0, 8);
  }

  return theme.SPACING(8, 0);
}, function (_ref5) {
  var flexItem = _ref5.flexItem;
  return flexItem && styled.css(["height:auto;align-self:stretch;"]);
});
Divider.propTypes = DividerPropTypes;
Divider.defaultProps = DividerDefaultProps;

var __jsx$f = React__default['default'].createElement;
var FigureCaption = function FigureCaption(_ref) {
  var children = _ref.children,
      className = _ref.className,
      style = _ref.style;
  return __jsx$f(StyledCaption, {
    children: children,
    className: className,
    style: style
  });
};
var StyledCaption = styled__default['default'].figcaption.withConfig({
  displayName: "caption__StyledCaption",
  componentId: "ounis6-0"
})(["background-color:", ";border:1px solid ", ";border-radius:0 0 0.25rem 0.25rem;font-size:90%;margin-top:-2px;padding:0.5rem;"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.COLOUR.white;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.COLOUR.dark;
});
FigureCaption.propTypes = {
  children: propTypes.node,
  className: propTypes.any,
  style: propTypes.objectOf(propTypes.oneOfType([propTypes.number, propTypes.string]))
};

/**
 * Image
 */
var Image$1 = styled__default['default'].img.attrs(function (props) {
  return {
    itemProp: 'contentUrl'
  };
}).withConfig({
  displayName: "image__Image",
  componentId: "ainnks-0"
})(["", " ", " ", " ", " ", ""], function (_ref) {
  var cover = _ref.cover;
  return cover && styled.css(["height:150px;object-fit:fill;width:100%;"]);
}, function (_ref2) {
  var fluid = _ref2.fluid;
  return fluid && styled.css(["height:auto;max-width:100%;"]);
}, function (_ref3) {
  var rounded = _ref3.rounded;
  return rounded && styled.css(["border-radius:0.25rem;"]);
}, function (_ref4) {
  var roundedCircle = _ref4.roundedCircle;
  return roundedCircle && styled.css(["border-radius:50%;"]);
}, function (_ref5) {
  var thumbnail = _ref5.thumbnail,
      theme = _ref5.theme;
  return thumbnail && styled.css(["background-color:", ";border:1px solid ", ";border-radius:0.25rem;height:auto;max-width:100%;padding:0.65rem;"], theme.COLOUR.light, theme.COLOUR.dark);
});
Image$1.propTypes = {
  alt: propTypes.string.isRequired,
  className: propTypes.any,
  click: propTypes.func,
  cover: propTypes.bool,
  fluid: propTypes.bool,
  rounded: propTypes.bool,
  roundedCircle: propTypes.bool,
  src: propTypes.string.isRequired,
  style: propTypes.objectOf(propTypes.oneOfType([propTypes.number, propTypes.string])),
  thumbnail: propTypes.bool
};
Image$1.defaultProps = {
  fluid: true,
  rounded: false,
  roundedCircle: false,
  thumbnail: false
};

var __jsx$g = React__default['default'].createElement;
var FigureImage = function FigureImage(_ref) {
  var className = _ref.className,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ["className", "style"]);

  return __jsx$g(StyledImage, _extends({
    className: className,
    style: style
  }, props));
};
var StyledImage = styled__default['default'](Image$1).withConfig({
  displayName: "image__StyledImage",
  componentId: "sc-2jm9e0-0"
})(["display:block;line-height:1;"]);
FigureImage.propTypes = {
  className: propTypes.any,
  style: propTypes.objectOf(propTypes.oneOfType([propTypes.number, propTypes.string]))
};

var __jsx$h = React__default['default'].createElement;

var Figure = function Figure(_ref) {
  var children = _ref.children,
      className = _ref.className,
      slant = _ref.slant,
      style = _ref.style;
  return __jsx$h(StyledFigure, {
    children: children,
    className: className,
    itemProp: "image",
    itemScope: "",
    itemType: "http://schema.org/ImageObject",
    slant: slant,
    style: style
  });
};

var slantStyles = "\n  &:after {\n    background-color: #fff;\n    bottom: 0;\n    content: '';\n    display: block;\n    height: 25%;\n    left: 0;\n    position: absolute;\n    right: 0;\n    transform: skewy(6deg);\n    transform-origin: 0 100%;\n    width: 100%;\n    z-index: 1;\n  }\n";
var StyledFigure = styled__default['default'].figure.withConfig({
  displayName: "figure__StyledFigure",
  componentId: "sc-7qqof-0"
})(["display:inline-block;border:0;margin:0 0 1rem;", ""], function (props) {
  return props.slant && slantStyles;
});
Figure.propTypes = {
  children: propTypes.node,
  className: propTypes.any,
  slant: propTypes.bool,
  style: propTypes.objectOf(propTypes.oneOfType([propTypes.number, propTypes.string]))
};
Figure.defaultProps = {
  slant: false
};
Figure.Caption = FigureCaption;
Figure.Image = FigureImage;

/**
 * Google Analytics
 */
// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
var GoogleAnalyticsPageView = function GoogleAnalyticsPageView(url, id) {
  window.gtag('config', id, {
    page_path: url
  });
}; // https://developers.google.com/analytics/devguides/collection/gtagjs/events

var GoogleEvent = function GoogleEvent(_ref) {
  var action = _ref.action,
      category = _ref.category,
      label = _ref.label,
      value = _ref.value;
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  });
};

var __jsx$i = React__default['default'].createElement;
var Column = function Column(_ref) {
  var children = _ref.children,
      className = _ref.className,
      columnRef = _ref.columnRef,
      style = _ref.style,
      sm = _ref.sm,
      md = _ref.md,
      lg = _ref.lg,
      xl = _ref.xl,
      offset = _ref.offset;
  sm = sm !== undefined ? sm : 0;
  md = md !== undefined ? md : sm;
  lg = lg !== undefined ? lg : md;
  xl = xl !== undefined ? xl : lg;
  offset.sm = offset.sm !== undefined ? offset.sm : 0;
  offset.md = offset.md !== undefined ? offset.md : offset.sm;
  offset.lg = offset.lg !== undefined ? offset.lg : offset.md;
  offset.xl = offset.xl !== undefined ? offset.xl : offset.lg;
  return __jsx$i(StyledColumn, {
    children: children,
    className: className,
    off: offset,
    size: {
      sm: sm,
      md: md,
      lg: lg,
      xl: xl
    },
    style: style,
    ref: columnRef
  });
};
var StyledColumn = styled__default['default'].div.withConfig({
  displayName: "Column__StyledColumn",
  componentId: "sc-135xo8w-0"
})(["box-sizing:border-box;height:100%;margin-left:unset;min-height:1px;position:relative;padding-left:", "px;padding-right:", "px;width:100%;@media (min-width:0){flex:0 0 ", "%;margin-left:", "%;max-width:", "%;}@media (min-width:", "px){flex:0 0 ", "%;margin-left:", "%;max-width:", "%;}@media (min-width:", "px){flex:0 0 ", "%;margin-left:", "%;max-width:", "%;}@media (min-width:", "px){flex:0 0 ", "%;margin-left:", "%;max-width:", "%;}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.GRID.gutterWidth / 2;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.GRID.gutterWidth / 2;
}, function (_ref4) {
  var size = _ref4.size;
  return size.sm ? (100 / (12 / size.sm)).toFixed(5) : 100;
}, function (_ref5) {
  var off = _ref5.off;
  return off.sm ? (100 / 12 * off.sm).toFixed(5) : 0;
}, function (_ref6) {
  var size = _ref6.size;
  return size.sm ? (100 / (12 / size.sm)).toFixed(5) : 100;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.GRID.breakpoints.md;
}, function (_ref8) {
  var size = _ref8.size;
  return (100 / (12 / size.md)).toFixed(5);
}, function (_ref9) {
  var off = _ref9.off;
  return (100 / 12 * off.md).toFixed(5);
}, function (_ref10) {
  var size = _ref10.size;
  return (100 / (12 / size.md)).toFixed(5);
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.GRID.breakpoints.lg;
}, function (_ref12) {
  var size = _ref12.size;
  return (100 / (12 / size.lg)).toFixed(5);
}, function (_ref13) {
  var off = _ref13.off;
  return (100 / 12 * off.lg).toFixed(5);
}, function (_ref14) {
  var size = _ref14.size;
  return (100 / (12 / size.lg)).toFixed(5);
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.GRID.breakpoints.xl;
}, function (_ref16) {
  var size = _ref16.size;
  return (100 / (12 / size.xl)).toFixed(5);
}, function (_ref17) {
  var off = _ref17.off;
  return (100 / 12 * off.xl).toFixed(5);
}, function (_ref18) {
  var size = _ref18.size;
  return (100 / (12 / size.xl)).toFixed(5);
});
Column.propTypes = {
  children: propTypes.any.isRequired,
  className: propTypes.string,
  debug: propTypes.bool,
  fluid: propTypes.string,
  md: propTypes.number,
  lg: propTypes.number,
  offset: propTypes.shape({
    sm: propTypes.number,
    md: propTypes.number,
    lg: propTypes.number,
    xl: propTypes.number
  }),
  sm: propTypes.number,
  style: propTypes.objectOf(propTypes.oneOfType([propTypes.number, propTypes.string])),
  xl: propTypes.number
};
Column.defaultProps = {
  offset: {},
  style: {},
  debug: false
};

var __jsx$j = React__default['default'].createElement;
var Container = function Container(_ref) {
  var children = _ref.children,
      className = _ref.className,
      fluid = _ref.fluid,
      style = _ref.style;
  return __jsx$j(StyledGrid, {
    children: children,
    className: className,
    fluid: fluid,
    style: style
  });
};
var StyledGrid = styled__default['default'].div.withConfig({
  displayName: "Container__StyledGrid",
  componentId: "sc-1efnbom-0"
})(["box-sizing:border-box;margin-left:auto;margin-right:auto;position:relative;width:", ";", " ", ""], function (_ref2) {
  var fluid = _ref2.fluid;
  return fluid && '100%';
}, function (_ref3) {
  var theme = _ref3.theme;
  return styled.css(["padding-left:", "px;padding-right:", "px;"], theme.GRID.gutterWidth / 2, theme.GRID.gutterWidth / 2);
}, function (_ref4) {
  var fluid = _ref4.fluid;
  return !fluid && styled.css(["@media (min-width:", "px){max-width:", "px;}@media (min-width:", "px){max-width:", "px;}@media (min-width:", "px){max-width:", "px;}@media (min-width:", "px){max-width:", "px;}"], function (_ref5) {
    var theme = _ref5.theme;
    return theme.GRID.breakpoints.sm;
  }, function (_ref6) {
    var theme = _ref6.theme;
    return theme.GRID.containerWidths.sm;
  }, function (_ref7) {
    var theme = _ref7.theme;
    return theme.GRID.breakpoints.md;
  }, function (_ref8) {
    var theme = _ref8.theme;
    return theme.GRID.containerWidths.md;
  }, function (_ref9) {
    var theme = _ref9.theme;
    return theme.GRID.breakpoints.lg;
  }, function (_ref10) {
    var theme = _ref10.theme;
    return theme.GRID.containerWidths.lg;
  }, function (_ref11) {
    var theme = _ref11.theme;
    return theme.GRID.breakpoints.xl;
  }, function (_ref12) {
    var theme = _ref12.theme;
    return theme.GRID.containerWidths.xl;
  });
});
Container.propTypes = {
  children: propTypes.node.isRequired,
  className: propTypes.string,
  fluid: propTypes.bool,
  style: propTypes.objectOf(propTypes.oneOfType([propTypes.number, propTypes.string]))
};
Container.defaultProps = {
  fluid: false,
  style: {}
};

var __jsx$k = React__default['default'].createElement;
var Row = function Row(_ref) {
  var align = _ref.align,
      children = _ref.children,
      className = _ref.className,
      justify = _ref.justify,
      noGutter = _ref.noGutter,
      noWrap = _ref.noWrap,
      style = _ref.style;
  return __jsx$k(StyledRow, {
    align: align,
    children: children,
    className: className,
    justify: justify,
    noGutter: noGutter,
    noWrap: noWrap,
    style: style
  });
};
var StyledRow = styled__default['default'].div.withConfig({
  displayName: "Row__StyledRow",
  componentId: "sc-1oayzma-0"
})(["display:flex;flex-grow:0;flex-shrink:0;flex-wrap:", ";", " ", " ", " ", ""], function (_ref2) {
  var noWrap = _ref2.noWrap;
  return noWrap ? 'nowrap' : 'wrap';
}, function (_ref3) {
  var theme = _ref3.theme;
  return styled.css(["margin-left:-", "px;margin-right:-", "px;"], theme.GRID.gutterWidth / 2, theme.GRID.gutterWidth / 2);
}, function (_ref4) {
  var noGutter = _ref4.noGutter,
      theme = _ref4.theme;
  return noGutter && styled.css(["margin-left:-", "px;margin-right:-", "px;"], theme.GRID.gutterWidth, theme.GRID.gutterWidth);
}, function (_ref5) {
  var align = _ref5.align;
  return styled.css(["align-items:", ";"], align === 'start' && 'flex-start' || align === 'end' && 'flex-end' || align === 'center' && 'center' || align === 'stretch' && 'stretch' || align === 'baseline' && 'baseline');
}, function (_ref6) {
  var justify = _ref6.justify;
  return styled.css(["justify-content:", ";"], justify === 'start' && 'flex-start' || justify === 'end' && 'flex-end' || justify === 'between' && 'space-between' || justify === 'around' && 'space-around' || justify === 'center' && 'center' || justify === 'initial' && 'initial' || justify === 'inherit' && 'inherit');
});
Row.propTypes = {
  align: propTypes.oneOf(['baseline', 'start', 'center', 'end', 'stretch']),
  children: propTypes.node.isRequired,
  className: propTypes.string,
  gutterWidth: propTypes.number,
  justify: propTypes.oneOf(['start', 'center', 'end', 'between', 'around', 'initial', 'inherit']),
  noGutter: propTypes.bool,
  noWrap: propTypes.bool,
  style: propTypes.objectOf(propTypes.oneOfType([propTypes.number, propTypes.string]))
};
Row.defaultProps = {
  align: 'stretch',
  gutterWidth: null,
  justify: 'start',
  noGutter: false,
  style: {},
  noWrap: false
};

/**
 * Heading - Props
 */
var HeadingPropTypes = {
  className: propTypes.any,
  content: propTypes.oneOfType([propTypes.string, propTypes.object]),
  context: propTypes.oneOf(Object.values(CONTEXT)),
  noMargin: propTypes.bool,
  noWrap: propTypes.bool,
  style: propTypes.objectOf(propTypes.oneOfType([propTypes.number, propTypes.string])),
  tag: propTypes.string
};
var HeadingDefaultProps = {
  context: 'black',
  noWrap: false,
  tag: 'h1'
};

var __jsx$l = React__default['default'].createElement;
var Heading = function Heading(_ref) {
  var className = _ref.className,
      content = _ref.content,
      context = _ref.context,
      noMargin = _ref.noMargin,
      noWrap = _ref.noWrap,
      style = _ref.style,
      tag = _ref.tag;
  return __jsx$l(StyledHeading, {
    as: tag,
    className: className,
    context: context,
    noMargin: noMargin,
    noWrap: noWrap,
    itemProp: "name headline",
    rel: "bookmark",
    style: style
  }, content && content.__html ? __jsx$l("span", {
    dangerouslySetInnerHTML: content
  }) : content);
};
var StyledHeading = styled__default['default'].span.withConfig({
  displayName: "heading__StyledHeading",
  componentId: "sc-5ag1xp-0"
})(["font-weight:normal;", " position:relative;", " ", " ", ""], function (props) {
  return COLOUR(props);
}, function (_ref2) {
  var as = _ref2.as,
      theme = _ref2.theme;
  return styled.css(["font-family:", ";font-size:", ";line-height:", ";text-transform:", ";margin:0;"], theme.HEADINGS[as].fontFamily, theme.HEADINGS[as].fontSize, theme.HEADINGS[as].lineHeight, theme.HEADINGS[as].textTransform);
}, function (_ref3) {
  var ellipsis = _ref3.ellipsis;
  return ellipsis && styled.css(["overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"]);
}, function (_ref4) {
  var noWrap = _ref4.noWrap;
  return noWrap && styled.css(["overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"]);
});
Heading.propTypes = HeadingPropTypes;
Heading.defaultProps = HeadingDefaultProps;

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

var __jsx$m = React__default['default'].createElement;
var Link = function Link(_ref) {
  var border = _ref.border,
      children = _ref.children,
      className = _ref.className,
      context = _ref.context,
      onClick = _ref.onClick,
      passHref = _ref.passHref,
      replace = _ref.replace,
      scroll = _ref.scroll,
      shallow = _ref.shallow,
      target = _ref.target,
      to = _ref.to;
  var obj = _typeof(to) === 'object' ? to : {
    href: to
  };
  return !validatorUri(to) ? __jsx$m(NextLink__default['default'], _extends({}, obj, {
    passHref: passHref,
    replace: replace,
    scroll: scroll,
    shallow: shallow
  }), __jsx$m(StyledLink, {
    border: border,
    className: className,
    context: context,
    onClick: onClick,
    target: target
  }, children)) : __jsx$m(StyledLink, {
    border: border,
    className: className,
    context: context,
    href: to,
    target: target
  }, children);
};
var StyledLink = styled__default['default'].a.withConfig({
  displayName: "link__StyledLink",
  componentId: "sc-1k7fazj-0"
})(["background-color:transparent;border-bottom:", ";color:", ";display:", ";cursor:pointer;max-width:100%;outline:none;text-decoration:none;&:hover,&.link--hover{border-bottom:", ";color:", ";}&:active,&.link--active{border-bottom:", ";color:", ";}&:visited,&.link--visited{border-bottom:", ";color:", ";}"], function (_ref2) {
  var border = _ref2.border,
      context = _ref2.context,
      theme = _ref2.theme;
  return border && "2px solid ".concat(shadeLinearRgb(0.88, theme.COLOUR[context] || theme.LINK.colour));
}, function (_ref3) {
  var context = _ref3.context,
      theme = _ref3.theme;
  return theme.COLOUR[context] || theme.LINK.colour;
}, function (_ref4) {
  var border = _ref4.border;
  return border ? 'inline-block' : 'block';
}, function (_ref5) {
  var border = _ref5.border,
      context = _ref5.context,
      theme = _ref5.theme;
  return border && "2px solid ".concat(shadeLinearRgb(0.8, theme.COLOUR[context] || theme.LINK.colour));
}, function (_ref6) {
  var context = _ref6.context,
      theme = _ref6.theme;
  return shadeLinearRgb(-0.2, theme.COLOUR[context] || theme.LINK.colour);
}, function (_ref7) {
  var border = _ref7.border,
      theme = _ref7.theme;
  return border && "2px solid ".concat(shadeLinearRgb(0.8, theme.COLOUR.active));
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.COLOUR.active;
}, function (_ref9) {
  var border = _ref9.border,
      theme = _ref9.theme;
  return border && "2px solid ".concat(shadeLinearRgb(0.8, theme.COLOUR.visited));
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.COLOUR.visited;
});
Link.propTypes = {
  border: propTypes.bool,
  children: propTypes.node.isRequired,
  className: propTypes.any,
  context: propTypes.oneOf(Object.values(CONTEXT)),
  onClick: propTypes.func,
  passHref: propTypes.bool,
  replace: propTypes.bool,
  scroll: propTypes.bool,
  shallow: propTypes.bool,
  target: propTypes.string,
  to: propTypes.oneOfType([propTypes.object, propTypes.string]).isRequired
};
Link.defaultProps = {
  border: true,
  replace: false,
  scroll: true,
  shallow: false
};

var __jsx$n = React__default['default'].createElement;
var List = function List(_ref) {
  var border = _ref.border,
      children = _ref.children,
      className = _ref.className,
      flush = _ref.flush,
      inline = _ref.inline,
      group = _ref.group,
      style = _ref.style,
      unstyled = _ref.unstyled;

  var renderListItems = function renderListItems() {
    return React__default['default'].Children.map(children, function (child) {
      return /*#__PURE__*/React__default['default'].cloneElement(child, {
        border: border,
        flush: flush,
        group: group
      });
    });
  };

  return __jsx$n(StyledList, {
    border: border,
    className: className,
    flush: flush,
    group: group,
    inline: inline,
    role: "list",
    style: style,
    unstyled: unstyled
  }, renderListItems());
};
var groupStyles = styled.css(["margin:-1px;"]);
var inlineStyles = styled.css(["align-items:center;display:inline-flex;"]);
var unstyledStyles = styled.css(["list-style:none;margin:0;padding-left:0;"]);
var StyledList = styled__default['default'].ul.withConfig({
  displayName: "list__StyledList",
  componentId: "nv3dze-0"
})(["", " ", " ", ""], function (_ref2) {
  var group = _ref2.group;
  return group ? groupStyles : '';
}, function (_ref3) {
  var inline = _ref3.inline;
  return inline ? inlineStyles : '';
}, function (_ref4) {
  var unstyled = _ref4.unstyled,
      border = _ref4.border,
      group = _ref4.group,
      flush = _ref4.flush;
  return unstyled || border || flush || group ? unstyledStyles : '';
});
List.propTypes = {
  border: propTypes.bool,
  children: propTypes.node.isRequired,
  className: propTypes.string,
  inline: propTypes.bool,
  flush: propTypes.bool,
  group: propTypes.bool,
  style: propTypes.object,
  unstyled: propTypes.bool
};
List.defaultProps = {
  className: '',
  inline: false,
  group: false,
  unstyled: false
};

var __jsx$o = React__default['default'].createElement;
var ListItem = function ListItem(_ref) {
  var border = _ref.border,
      children = _ref.children,
      className = _ref.className,
      flush = _ref.flush,
      group = _ref.group,
      icon = _ref.icon,
      prefix = _ref.prefix,
      style = _ref.style;
  return __jsx$o(StyledItem, {
    border: border,
    className: className,
    flush: flush,
    group: group,
    style: style
  }, icon && __jsx$o(StyledIcon$2, {
    "aria-hidden": "true",
    icon: icon,
    prefix: prefix,
    size: "2x"
  }), children);
};
var borderStyles = styled.css(["border:1px solid rgba(0,0,0,0.125);"]);
var flushStyles = styled.css(["border-right:0;border-left:0;border-radius:0;&:first-child{border-top:0;}&:last-child{border-bottom:0;margin-bottom:0;}"]);
var groupStyles$1 = styled.css(["margin-bottom:-1px;padding:0.75rem 1.25rem;"]);
var StyledItem = styled__default['default'].li.withConfig({
  displayName: "listItem__StyledItem",
  componentId: "sc-1glmc6k-0"
})(["position:relative;", " ", " ", ""], function (_ref2) {
  var border = _ref2.border,
      group = _ref2.group,
      flush = _ref2.flush;
  return (border || group || flush) && groupStyles$1;
}, function (_ref3) {
  var border = _ref3.border,
      flush = _ref3.flush;
  return (border || flush) && borderStyles;
}, function (_ref4) {
  var flush = _ref4.flush;
  return flush && flushStyles;
});
var StyledIcon$2 = styled__default['default'](Icon).withConfig({
  displayName: "listItem__StyledIcon",
  componentId: "sc-1glmc6k-1"
})(["color:", ";float:left;margin:0.1rem 1rem 0 0;"], function (_ref5) {
  var theme = _ref5.theme;
  return theme.COLOUR.secondary;
});
ListItem.propTypes = {
  border: propTypes.bool,
  children: propTypes.node.isRequired,
  flush: propTypes.bool,
  group: propTypes.bool,
  icon: propTypes.string,
  prefix: propTypes.string
};

/**
 * Progress
 */
var Progress = styled__default['default'].div.withConfig({
  displayName: "progress__Progress",
  componentId: "sc-1fk70jh-0"
})(["background-color:", ";border-radius:", ";display:flex;font-size:", ";height:", ";overflow:hidden;"], function (_ref) {
  var theme = _ref.theme,
      bgColor = _ref.theme.PROGRESS.bgColor;
  return bgColor;
}, function (_ref2) {
  var borderRadius = _ref2.theme.PROGRESS.borderRadius;
  return borderRadius;
}, function (_ref3) {
  var size = _ref3.size,
      fontSize = _ref3.theme.PROGRESS.fontSize;
  return fontSize[size];
}, function (_ref4) {
  var size = _ref4.size,
      height = _ref4.theme.PROGRESS.height;
  return height[size];
});
Progress.propTypes = {
  size: propTypes.oneOf(Object.values(SIZE))
};
Progress.defaultProps = {
  size: 'md'
};

var __jsx$p = React__default['default'].createElement;
var ProgressBar = function ProgressBar(props) {
  return __jsx$p(ProgressBarDiv, _extends({
    "aria-valuenow": props.now,
    "aria-valuemin": props.ariaValueMin,
    "aria-valuemax": props.ariaValueMax
  }, props));
};
ProgressBar.propTypes = {
  animated: propTypes.bool,
  ariaValueMax: propTypes.number,
  ariaValueMin: propTypes.number,
  bgImage: propTypes.string,
  bgSize: propTypes.string,
  color: propTypes.string,
  context: propTypes.oneOf(Object.values(CONTEXT)),
  now: propTypes.number,
  role: propTypes.string,
  striped: propTypes.bool,
  transition: propTypes.string
};
ProgressBar.defaultProps = {
  animated: false,
  ariaValueMax: 100,
  ariaValueMin: 0,
  now: 0,
  striped: false
};

/**
 * Progress - Bar Div
 */
var ProgressBarStripesAnimation = styled.keyframes(["0%{background-position:1rem 0;}100%{background-position:0 0;}"]);
var ProgressBarDiv = styled__default['default'].div.withConfig({
  displayName: "progressBarDiv__ProgressBarDiv",
  componentId: "sc-1e0t0py-0"
})(["", " animation:", ";background-image:", ";background-size:", ";color:", ";display:flex;flex-direction:column;justify-content:center;overflow:hidden;text-align:center;transition:", ";white-space:nowrap;width:", ";"], function (props) {
  return BACKGROUND(props);
}, function (_ref) {
  var animated = _ref.animated;
  return animated ? styled.css(["", " 1s linear infinite"], ProgressBarStripesAnimation) : 'none 0 ease 0 1 normal none running';
}, function (_ref2) {
  var striped = _ref2.striped,
      bgImage = _ref2.theme.PROGRESSBAR.bgImage;
  return striped ? bgImage : 'none';
}, function (_ref3) {
  var striped = _ref3.striped,
      bgSize = _ref3.theme.PROGRESSBAR.bgSize;
  return striped ? bgSize : 'auto';
}, function (_ref4) {
  var color = _ref4.color,
      context = _ref4.context,
      theme = _ref4.theme;
  return color || (context === 'white' ? theme.COLOUR.primary : theme.COLOUR.white);
}, function (_ref5) {
  var transition = _ref5.theme.PROGRESSBAR.transition;
  return transition;
}, function (_ref6) {
  var now = _ref6.now;
  return now + '%';
});
ProgressBarDiv.propTypes = {
  animated: propTypes.bool,
  bgImage: propTypes.string,
  bgSize: propTypes.string,
  now: propTypes.number,
  striped: propTypes.bool,
  transition: propTypes.string
};

function _templateObject2$1() {
  var data = _taggedTemplateLiteral(["\n     margin-bottom:  calc(", " * 2);"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n          ", ": calc(", " * 2);"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var sizes$1 = {
  xxsSize: '0.25rem',
  xsSize: '0.5rem',
  smSize: '0.75rem',
  mdSize: '1rem',
  lgSize: '1.5rem',
  xlSize: '2rem',
  xxlSize: '2.5rem',
  xxxlSize: '3rem'
};
var spaceStyler = function spaceStyler(properties) {
  var stl = '';
  var counter = 0;
  properties.forEach(function (property) {
    if (property.v) {
      counter++;
      stl += "".concat(property.k, ": ").concat(sizes$1[property.v + 'Size'], ";\n          ").concat(MEDIA_QUERY.desktop(_templateObject$1(), property.k, sizes$1[property.v + 'Size']));
    }
  });

  if (counter === 0) {
    return styled.css(["margin-bottom:", ";", ""], sizes$1.mdSize, MEDIA_QUERY.desktop(_templateObject2$1(), sizes$1.mdSize));
  }

  return styled.css(["", ""], stl);
};

var __jsx$q = React__default['default'].createElement;
var Space = function Space(_ref) {
  var children = _ref.children,
      content = _ref.content,
      margin = _ref.margin,
      marginX = _ref.marginX,
      marginY = _ref.marginY,
      marginTop = _ref.marginTop,
      marginRight = _ref.marginRight,
      marginBottom = _ref.marginBottom,
      marginLeft = _ref.marginLeft,
      padding = _ref.padding,
      paddingX = _ref.paddingX,
      paddingY = _ref.paddingY,
      paddingTop = _ref.paddingTop,
      paddingRight = _ref.paddingRight,
      paddingBottom = _ref.paddingBottom,
      paddingLeft = _ref.paddingLeft;
  return __jsx$q(StyledSpace, {
    margin: margin,
    marginX: marginX,
    marginY: marginY,
    marginTop: marginTop,
    marginRight: marginRight,
    marginBottom: marginBottom,
    marginLeft: marginLeft,
    padding: padding,
    paddingX: paddingX,
    paddingY: paddingY,
    paddingTop: paddingTop,
    paddingRight: paddingRight,
    paddingBottom: paddingBottom,
    paddingLeft: paddingLeft
  }, content || children);
};
var StyledSpace = styled__default['default'].div.withConfig({
  displayName: "space__StyledSpace",
  componentId: "sc-1otqdhh-0"
})(["margin:0;padding:0;", ""], function (_ref2) {
  var margin = _ref2.margin,
      marginBottom = _ref2.marginBottom,
      marginTop = _ref2.marginTop,
      marginLeft = _ref2.marginLeft,
      marginRight = _ref2.marginRight,
      padding = _ref2.padding,
      paddingLeft = _ref2.paddingLeft,
      paddingRight = _ref2.paddingRight,
      paddingTop = _ref2.paddingTop,
      paddingBottom = _ref2.paddingBottom;
  return spaceStyler([{
    k: 'margin',
    v: margin
  }, {
    k: 'margin-bottom',
    v: marginBottom
  }, {
    k: 'margin-left',
    v: marginLeft
  }, {
    k: 'margin-right',
    v: marginRight
  }, {
    k: 'margin-top',
    v: marginTop
  }, {
    k: 'padding',
    v: padding
  }, {
    k: 'padding-bottom',
    v: paddingBottom
  }, {
    k: 'padding-left',
    v: paddingLeft
  }, {
    k: 'padding-right',
    v: paddingRight
  }, {
    k: 'padding-top',
    v: paddingTop
  }]);
});
Space.protoTypes = {
  children: propTypes.node,
  content: propTypes.string,
  margin: propTypes.oneOf(Object.values(SIZE)),
  marginY: propTypes.oneOf(Object.values(SIZE)),
  marginX: propTypes.oneOf(Object.values(SIZE)),
  marginTop: propTypes.oneOf(Object.values(SIZE)),
  marginRight: propTypes.oneOf(Object.values(SIZE)),
  marginBottom: propTypes.oneOf(Object.values(SIZE)),
  marginLeft: propTypes.oneOf(Object.values(SIZE)),
  padding: propTypes.oneOf(Object.values(SIZE)),
  paddingY: propTypes.oneOf(Object.values(SIZE)),
  paddingX: propTypes.oneOf(Object.values(SIZE)),
  paddingTop: propTypes.oneOf(Object.values(SIZE)),
  paddingRight: propTypes.oneOf(Object.values(SIZE)),
  paddingBottom: propTypes.oneOf(Object.values(SIZE)),
  paddingLeft: propTypes.oneOf(Object.values(SIZE))
};

function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$6(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$6(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var TextPropTypes = _objectSpread$6(_objectSpread$6({
  align: propTypes.string,
  children: propTypes.node,
  content: propTypes.string,
  context: propTypes.oneOf(Object.values(CONTEXT)),
  size: propTypes.oneOf(Object.values(SIZE))
}, DISPLAY_PROP_TYPES), SPACER_PROP_TYPES);
var TextDefaultProps = {
  context: 'dark',
  size: 'md'
};

var __jsx$r = React__default['default'].createElement;

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n        -webkit-text-stroke: 3px #000;\n      "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n        -webkit-text-stroke: 2px #000;\n      "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n        font-size: 8rem;\n      "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n        font-size: 7rem;\n      "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n        font-size: 6rem;\n      "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n        font-size: 5rem;\n      "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n        font-size: 5rem;\n      "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        font-size: 4rem;\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = _taggedTemplateLiteral(["\n        font-size: 3rem;\n      "]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n        font-size: 2rem;\n      "]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var Text = function Text(_ref) {
  var align = _ref.align,
      children = _ref.children,
      className = _ref.className,
      colour = _ref.colour,
      content = _ref.content,
      context = _ref.context,
      stroke = _ref.stroke,
      size = _ref.size,
      props = _objectWithoutProperties(_ref, ["align", "children", "className", "colour", "content", "context", "stroke", "size"]);

  return __jsx$r(StyledText$1, _extends({
    align: align,
    className: className,
    colour: colour,
    context: context,
    stroke: stroke,
    size: size
  }, props), content || children);
};
var StyledText$1 = styled__default['default'].p.withConfig({
  displayName: "text__StyledText",
  componentId: "sc-1hmk421-0"
})(["color:", ";margin:0;padding:0;text-align:", ";", " ", " ", " ", " ", " ", ""], function (_ref2) {
  var context = _ref2.context,
      _ref2$theme = _ref2.theme,
      COLOUR = _ref2$theme.COLOUR,
      TEXT_STYLE = _ref2$theme.TEXT_STYLE;
  return context ? COLOUR[context] : TEXT_STYLE.DEFAULT_COLOUR;
}, function (_ref3) {
  var align = _ref3.align;
  return align;
}, function (_ref4) {
  var _theme$TEXT_STYLE$FON, _theme$TEXT_STYLE$LIN, _ref5, _theme$TEXT_STYLE$FON2;

  var size = _ref4.size,
      theme = _ref4.theme;
  return styled.css(["font-size:", ";line-height:", ";font-family:", ";"], (_theme$TEXT_STYLE$FON = theme.TEXT_STYLE.FONT_SIZE[size]) !== null && _theme$TEXT_STYLE$FON !== void 0 ? _theme$TEXT_STYLE$FON : '1rem', (_theme$TEXT_STYLE$LIN = theme.TEXT_STYLE.LINE_HEIGHT[size]) !== null && _theme$TEXT_STYLE$LIN !== void 0 ? _theme$TEXT_STYLE$LIN : '1rem', (_ref5 = (_theme$TEXT_STYLE$FON2 = theme.TEXT_STYLE.FONT_FAMILY[size]) !== null && _theme$TEXT_STYLE$FON2 !== void 0 ? _theme$TEXT_STYLE$FON2 : theme.TEXT_STYLE.FONT_FAMILY["default"]) !== null && _ref5 !== void 0 ? _ref5 : 'sans-serif');
}, function (_ref6) {
  var size = _ref6.size;
  return size === 'xxl' && styled.css(["", " ", " ", " ", ""], MEDIA_QUERY.phone(_templateObject$2()), MEDIA_QUERY.tablet(_templateObject2$2()), MEDIA_QUERY.desktop(_templateObject3()), MEDIA_QUERY.giant(_templateObject4()));
}, function (_ref7) {
  var size = _ref7.size;
  return size === 'xxxl' && styled.css(["", " ", " ", " ", ""], MEDIA_QUERY.phone(_templateObject5()), MEDIA_QUERY.tablet(_templateObject6()), MEDIA_QUERY.desktop(_templateObject7()), MEDIA_QUERY.giant(_templateObject8()));
}, function (_ref8) {
  var stroke = _ref8.stroke;
  return stroke === 'true' && styled.css(["-webkit-text-stroke:1px #000;color:transparent;", " ", ""], MEDIA_QUERY.tablet(_templateObject9()), MEDIA_QUERY.desktop(_templateObject10()));
}, function (theme) {
  return DISPLAY(theme);
}, function (theme) {
  return SPACER(theme);
});
Text.protoTypes = TextPropTypes;
Text.defaultProps = TextDefaultProps;

var __jsx$s = React__default['default'].createElement;
var Switch = function Switch(_ref) {
  var context = _ref.context,
      disabled = _ref.disabled,
      handleToggle = _ref.handleToggle,
      size = _ref.size,
      toggled = _ref.toggled;
  return __jsx$s(StyledSwitchContainer, {
    context: context,
    disabled: disabled,
    onClick: handleToggle,
    size: size,
    toggled: toggled
  }, __jsx$s(StyledSwitch, {
    size: size,
    toggled: toggled
  }));
};
var StyledSwitchContainer = styled__default['default'].div.withConfig({
  displayName: "switch__StyledSwitchContainer",
  componentId: "sc-1wx9a43-0"
})(["align-items:center;background-color:", ";cursor:", ";display:flex;justify-content:space-between;opacity:", ";position:relative;transition:background-color 0.2s;", " ", " ", ""], function (_ref2) {
  var context = _ref2.context,
      theme = _ref2.theme,
      toggled = _ref2.toggled;
  return toggled ? theme.COLOUR[context] : '#cbd5e0';
}, function (_ref3) {
  var disabled = _ref3.disabled;
  return disabled ? 'not-allowed' : 'pointer';
}, function (_ref4) {
  var disabled = _ref4.disabled;
  return disabled ? 0.5 : 1;
}, function (_ref5) {
  var size = _ref5.size;
  return size === 'sm' && styled.css(["border-radius:40px;height:20px;width:40px;"]);
}, function (_ref6) {
  var size = _ref6.size;
  return size === 'md' && styled.css(["border-radius:60px;height:30px;width:60px;"]);
}, function (_ref7) {
  var size = _ref7.size;
  return size === 'lg' && styled.css(["border-radius:100px;height:50px;width:100px;"]);
});
var StyledSwitch = styled__default['default'].span.withConfig({
  displayName: "switch__StyledSwitch",
  componentId: "sc-1wx9a43-1"
})(["background:#fff;box-shadow:0 0 2px 0 rgba(10,10,10,0.29);left:2px;position:absolute;top:2px;transition:left 0.2s,transform 0.2s;", " ", " ", " ", ""], function (_ref8) {
  var toggled = _ref8.toggled;
  return toggled && "\n      left: calc(100% - 2px);\n      transform: translateX(-100%);\n    ";
}, function (_ref9) {
  var size = _ref9.size;
  return size === 'sm' && styled.css(["border-radius:16px;height:16px;width:16px;"]);
}, function (_ref10) {
  var size = _ref10.size;
  return size === 'md' && styled.css(["border-radius:26px;height:26px;width:26px;"]);
}, function (_ref11) {
  var size = _ref11.size;
  return size === 'lg' && styled.css(["border-radius:46px;height:46px;width:46px;"]);
});
Switch.propTypes = {
  handleToggle: propTypes.func,
  size: propTypes.oneOf(['sm', 'md', 'lg']),
  toggled: propTypes.bool
};

var __jsx$t = React__default['default'].createElement;
var Toggle = function Toggle(_ref) {
  var context = _ref.context,
      disabled = _ref.disabled,
      onToggle = _ref.onToggle,
      size = _ref.size,
      initial = _ref.toggled;

  var _useState = React.useState(initial),
      toggled = _useState[0],
      setToggled = _useState[1];

  React.useEffect(function () {
    setToggled(initial);
  }, [initial]);

  var handleToggle = function handleToggle() {
    onToggle && onToggle(!toggled);
    setToggled(!toggled);
  };

  return __jsx$t(StyledToggle, null, __jsx$t(Switch, {
    context: context,
    disabled: disabled,
    handleToggle: !disabled && handleToggle,
    size: size,
    toggled: toggled
  }));
};
var StyledToggle = styled__default['default'].div.withConfig({
  displayName: "toggle__StyledToggle",
  componentId: "wgmn17-0"
})(["display:inline-block;position:relative;"]);
Toggle.propTypes = {
  context: propTypes.oneOf(Object.values(CONTEXT)),
  disabled: propTypes.bool,
  onToggle: propTypes.func,
  size: propTypes.oneOf(['sm', 'md', 'lg']),
  toggled: propTypes.bool
};
Toggle.defaultProps = {
  context: 'success',
  size: 'md',
  toggled: false
};

/**
 * Tooltip - Props
 */
var TooltipPropTypes = {
  children: propTypes.node,
  content: propTypes.node,
  context: propTypes.oneOf(Object.values(CONTEXT))
};
var TooltipDefaultProps = {
  context: 'black'
};

var __jsx$u = React__default['default'].createElement;
var Tooltip = function Tooltip(_ref) {
  var children = _ref.children,
      content = _ref.content,
      context = _ref.context,
      props = _objectWithoutProperties(_ref, ["children", "content", "context"]);

  return __jsx$u(StyledTippy, _extends({
    content: content,
    context: context
  }, props), children);
};
var StyledTippy = styled__default['default'](Tippy__default['default']).withConfig({
  displayName: "tooltip__StyledTippy",
  componentId: "sc-6b7oo7-0"
})(["&&{", " .tippy-content{padding:8px;}.tippy-arrow::before{color:", ";}}"], function (props) {
  return BACKGROUND(props);
}, function (_ref2) {
  var context = _ref2.context,
      theme = _ref2.theme;
  return theme.COLOUR[context];
});
Tooltip.propTypes = TooltipPropTypes;
Tooltip.defaultProps = TooltipDefaultProps;

var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

/*:: import type { Window } from '../types'; */

/*:: declare function getWindow(node: Node | Window): Window; */
function getWindow(node) {
  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

/*:: declare function isElement(node: mixed): boolean %checks(node instanceof
  Element); */

function isElement$1(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
/*:: declare function isHTMLElement(node: mixed): boolean %checks(node instanceof
  HTMLElement); */


function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      } // Flow doesn't support to extend this property, but it's the most
      // effective way to apply styles to an HTMLElement
      // $FlowFixMe


      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


var applyStyles$1 = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect,
  requires: ['computeStyles']
};

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

// Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.
function getLayoutRect(element) {
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: element.offsetWidth,
    height: element.offsetHeight
  };
}

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // $FlowFixMe: Node is not aware of host

  var isShadow = Boolean(rootNode && rootNode.host); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (isShadow) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}

function getDocumentElement(element) {
  // $FlowFixMe: assume body is always available
  return ((isElement$1(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}

function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// $FlowFixMe: this is a quicker (but less type safe) way to save quite some bytes from the bundle
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    // $FlowFixMe: need a better way to handle this...
    element.host || // ShadowRoot detected
    // $FlowFixMe: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}

function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === 'fixed') {
    return null;
  }

  var offsetParent = element.offsetParent;

  if (offsetParent) {
    var html = getDocumentElement(offsetParent);

    if (getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static' && getComputedStyle(html).position !== 'static') {
      return html;
    }
  }

  return offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var currentNode = getParentNode(element);

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.

    if (css.transform !== 'none' || css.perspective !== 'none' || css.willChange && css.willChange !== 'auto') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static') {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

function within(min, value, max) {
  return Math.max(min, Math.min(value, max));
}

function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

function mergePaddingObject(paddingObject) {
  return Object.assign(Object.assign({}, getFreshSideObject()), paddingObject);
}

function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = state.modifiersData[name + "#persistent"].padding;
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect$1(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element,
      _options$padding = options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (process.env.NODE_ENV !== "production") {
    if (!isHTMLElement(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
    }
  }

  if (!contains(state.elements.popper, arrowElement)) {
    if (process.env.NODE_ENV !== "production") {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
    }

    return;
  }

  state.elements.arrow = arrowElement;
  state.modifiersData[name + "#persistent"] = {
    padding: mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements))
  };
} // eslint-disable-next-line import/no-unused-modules


var arrow$1 = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect$1,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsets(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: Math.round(x * dpr) / dpr || 0,
    y: Math.round(y * dpr) / dpr || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive;

  var _roundOffsets = roundOffsets(offsets),
      x = _roundOffsets.x,
      y = _roundOffsets.y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);
    } // $FlowFixMe: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it

    /*:: offsetParent = (offsetParent: Element); */


    if (placement === top) {
      sideY = bottom;
      y -= offsetParent.clientHeight - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left) {
      sideX = right;
      x -= offsetParent.clientWidth - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign(Object.assign({}, commonStyles), {}, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign(Object.assign({}, commonStyles), {}, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref3) {
  var state = _ref3.state,
      options = _ref3.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive;

  if (process.env.NODE_ENV !== "production") {
    var transitionProperty = getComputedStyle(state.elements.popper).transitionProperty || '';

    if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
    }
  }

  var commonStyles = {
    placement: getBasePlacement(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign(Object.assign({}, state.styles.popper), mapToStyles(Object.assign(Object.assign({}, commonStyles), {}, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign(Object.assign({}, state.styles.arrow), mapToStyles(Object.assign(Object.assign({}, commonStyles), {}, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false
    })));
  }

  state.attributes.popper = Object.assign(Object.assign({}, state.attributes.popper), {}, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var computeStyles$1 = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
};

var passive = {
  passive: true
};

function effect$2(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


var eventListeners = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect$2,
  data: {}
};

var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

var hash$1 = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash$1[matched];
  });
}

function getBoundingClientRect(element) {
  var rect = element.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    x: rect.left,
    y: rect.top
  };
}

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}

// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = element.ownerDocument.body;
  var width = Math.max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = Math.max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle(body || html).direction === 'rtl') {
    x += Math.max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the 
reference element's position.
*/

function listScrollParents(element, list) {
  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = getNodeName(scrollParent) === 'body';
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}

function rectToClientRect(rect) {
  return Object.assign(Object.assign({}, rect), {}, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement$1(clipperElement)) {
    return [];
  } // $FlowFixMe: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement$1(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = Math.max(rect.top, accRect.top);
    accRect.right = Math.min(rect.right, accRect.right);
    accRect.bottom = Math.min(rect.bottom, accRect.bottom);
    accRect.left = Math.max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

function getVariation(placement) {
  return placement.split('-')[1];
}

function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = Math.floor(offsets[mainAxis]) - Math.floor(reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = Math.floor(offsets[mainAxis]) + Math.ceil(reference[len] / 2 - element[len] / 2);
        break;
    }
  }

  return offsets;
}

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var referenceElement = state.elements.reference;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement$1(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(referenceElement);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign(Object.assign({}, popperRect), popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

/*:: type OverflowsMap = { [ComputedPlacement]: number }; */

/*;; type OverflowsMap = { [key in ComputedPlacement]: number }; */
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements; // $FlowFixMe

  var allowedPlacements = placements$1.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;

    if (process.env.NODE_ENV !== "production") {
      console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
    }
  } // $FlowFixMe: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


var flip$1 = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};

function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign(Object.assign({}, state.attributes.popper), {}, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


var hide$1 = {
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
};

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign(Object.assign({}, rects), {}, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var offset$1 = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
};

function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var popperOffsets$1 = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
};

function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign(Object.assign({}, state.rects), {}, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis) {
    var mainSide = mainAxis === 'y' ? top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = popperOffsets[mainAxis] + overflow[mainSide];
    var max = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? Math.min(min, tetherMin) : min, offset, tether ? Math.max(max, tetherMax) : max);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _mainSide = mainAxis === 'x' ? top : left;

    var _altSide = mainAxis === 'x' ? bottom : right;

    var _offset = popperOffsets[altAxis];

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var _preventedOffset = within(_min, _offset, _max);

    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var preventOverflow$1 = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
};

function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

// Composite means it takes into account transforms as well as layout.

function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement);
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

function debounce$1(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return [].concat(args).reduce(function (p, c) {
    return p.replace(/%s/, c);
  }, str);
}

var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
function validateModifiers(modifiers) {
  modifiers.forEach(function (modifier) {
    Object.keys(modifier).forEach(function (key) {
      switch (key) {
        case 'name':
          if (typeof modifier.name !== 'string') {
            console.error(format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
          }

          break;

        case 'enabled':
          if (typeof modifier.enabled !== 'boolean') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
          }

        case 'phase':
          if (modifierPhases.indexOf(modifier.phase) < 0) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(', '), "\"" + String(modifier.phase) + "\""));
          }

          break;

        case 'fn':
          if (typeof modifier.fn !== 'function') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'effect':
          if (typeof modifier.effect !== 'function') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'requires':
          if (!Array.isArray(modifier.requires)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
          }

          break;

        case 'requiresIfExists':
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
          }

          break;

        case 'options':
        case 'data':
          break;

        default:
          console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
            return "\"" + s + "\"";
          }).join(', ') + "; but \"" + key + "\" was provided.");
      }

      modifier.requires && modifier.requires.forEach(function (requirement) {
        if (modifiers.find(function (mod) {
          return mod.name === requirement;
        }) == null) {
          console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}

function uniqueBy(arr, fn) {
  var identifiers = new Set();
  return arr.filter(function (item) {
    var identifier = fn(item);

    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}

function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign(Object.assign(Object.assign({}, existing), current), {}, {
      options: Object.assign(Object.assign({}, existing.options), current.options),
      data: Object.assign(Object.assign({}, existing.data), current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign(Object.assign({}, DEFAULT_OPTIONS), defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(options) {
        cleanupModifierEffects();
        state.options = Object.assign(Object.assign(Object.assign({}, defaultOptions), state.options), options);
        state.scrollParents = {
          reference: isElement$1(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if (process.env.NODE_ENV !== "production") {
          var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
            var name = _ref.name;
            return name;
          });
          validateModifiers(modifiers);

          if (getBasePlacement(state.options.placement) === auto) {
            var flipModifier = state.orderedModifiers.find(function (_ref2) {
              var name = _ref2.name;
              return name === 'flip';
            });

            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
            }
          }

          var _getComputedStyle = getComputedStyle(popper),
              marginTop = _getComputedStyle.marginTop,
              marginRight = _getComputedStyle.marginRight,
              marginBottom = _getComputedStyle.marginBottom,
              marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
          // cause bugs with positioning, so we'll warn the consumer


          if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
          }
        }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if (process.env.NODE_ENV !== "production") {
            console.error(INVALID_ELEMENT_ERROR);
          }

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (process.env.NODE_ENV !== "production") {
            __debug_loops__ += 1;

            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce$1(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      if (process.env.NODE_ENV !== "production") {
        console.error(INVALID_ELEMENT_ERROR);
      }

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}

var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

/**!
* tippy.js v6.2.6
* (c) 2017-2020 atomiks
* MIT License
*/
var BOX_CLASS = "tippy-box";
var CONTENT_CLASS = "tippy-content";
var BACKDROP_CLASS = "tippy-backdrop";
var ARROW_CLASS = "tippy-arrow";
var SVG_ARROW_CLASS = "tippy-svg-arrow";
var TOUCH_OPTIONS = {
  passive: true,
  capture: true
};

function hasOwnProperty$1(obj, key) {
  return {}.hasOwnProperty.call(obj, key);
}
function getValueAtIndexOrReturn(value, index, defaultValue) {
  if (Array.isArray(value)) {
    var v = value[index];
    return v == null ? Array.isArray(defaultValue) ? defaultValue[index] : defaultValue : v;
  }

  return value;
}
function isType(value, type) {
  var str = {}.toString.call(value);
  return str.indexOf('[object') === 0 && str.indexOf(type + "]") > -1;
}
function invokeWithArgsOrReturn(value, args) {
  return typeof value === 'function' ? value.apply(void 0, args) : value;
}
function debounce$2(fn, ms) {
  // Avoid wrapping in `setTimeout` if ms is 0 anyway
  if (ms === 0) {
    return fn;
  }

  var timeout;
  return function (arg) {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      fn(arg);
    }, ms);
  };
}
function removeProperties(obj, keys) {
  var clone = Object.assign({}, obj);
  keys.forEach(function (key) {
    delete clone[key];
  });
  return clone;
}
function splitBySpaces(value) {
  return value.split(/\s+/).filter(Boolean);
}
function normalizeToArray(value) {
  return [].concat(value);
}
function pushIfUnique(arr, value) {
  if (arr.indexOf(value) === -1) {
    arr.push(value);
  }
}
function unique(arr) {
  return arr.filter(function (item, index) {
    return arr.indexOf(item) === index;
  });
}
function getBasePlacement$1(placement) {
  return placement.split('-')[0];
}
function arrayFrom(value) {
  return [].slice.call(value);
}
function removeUndefinedProps(obj) {
  return Object.keys(obj).reduce(function (acc, key) {
    if (obj[key] !== undefined) {
      acc[key] = obj[key];
    }

    return acc;
  }, {});
}

function div() {
  return document.createElement('div');
}
function isElement$2(value) {
  return ['Element', 'Fragment'].some(function (type) {
    return isType(value, type);
  });
}
function isNodeList(value) {
  return isType(value, 'NodeList');
}
function isMouseEvent(value) {
  return isType(value, 'MouseEvent');
}
function isReferenceElement(value) {
  return !!(value && value._tippy && value._tippy.reference === value);
}
function getArrayOfElements(value) {
  if (isElement$2(value)) {
    return [value];
  }

  if (isNodeList(value)) {
    return arrayFrom(value);
  }

  if (Array.isArray(value)) {
    return value;
  }

  return arrayFrom(document.querySelectorAll(value));
}
function setTransitionDuration(els, value) {
  els.forEach(function (el) {
    if (el) {
      el.style.transitionDuration = value + "ms";
    }
  });
}
function setVisibilityState(els, state) {
  els.forEach(function (el) {
    if (el) {
      el.setAttribute('data-state', state);
    }
  });
}
function getOwnerDocument(elementOrElements) {
  var _normalizeToArray = normalizeToArray(elementOrElements),
      element = _normalizeToArray[0];

  return element ? element.ownerDocument || document : document;
}
function isCursorOutsideInteractiveBorder(popperTreeData, event) {
  var clientX = event.clientX,
      clientY = event.clientY;
  return popperTreeData.every(function (_ref) {
    var popperRect = _ref.popperRect,
        popperState = _ref.popperState,
        props = _ref.props;
    var interactiveBorder = props.interactiveBorder;
    var basePlacement = getBasePlacement$1(popperState.placement);
    var offsetData = popperState.modifiersData.offset;

    if (!offsetData) {
      return true;
    }

    var topDistance = basePlacement === 'bottom' ? offsetData.top.y : 0;
    var bottomDistance = basePlacement === 'top' ? offsetData.bottom.y : 0;
    var leftDistance = basePlacement === 'right' ? offsetData.left.x : 0;
    var rightDistance = basePlacement === 'left' ? offsetData.right.x : 0;
    var exceedsTop = popperRect.top - clientY + topDistance > interactiveBorder;
    var exceedsBottom = clientY - popperRect.bottom - bottomDistance > interactiveBorder;
    var exceedsLeft = popperRect.left - clientX + leftDistance > interactiveBorder;
    var exceedsRight = clientX - popperRect.right - rightDistance > interactiveBorder;
    return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
  });
}
function updateTransitionEndListener(box, action, listener) {
  var method = action + "EventListener"; // some browsers apparently support `transition` (unprefixed) but only fire
  // `webkitTransitionEnd`...

  ['transitionend', 'webkitTransitionEnd'].forEach(function (event) {
    box[method](event, listener);
  });
}

var currentInput = {
  isTouch: false
};
var lastMouseMoveTime = 0;
/**
 * When a `touchstart` event is fired, it's assumed the user is using touch
 * input. We'll bind a `mousemove` event listener to listen for mouse input in
 * the future. This way, the `isTouch` property is fully dynamic and will handle
 * hybrid devices that use a mix of touch + mouse input.
 */

function onDocumentTouchStart() {
  if (currentInput.isTouch) {
    return;
  }

  currentInput.isTouch = true;

  if (window.performance) {
    document.addEventListener('mousemove', onDocumentMouseMove);
  }
}
/**
 * When two `mousemove` event are fired consecutively within 20ms, it's assumed
 * the user is using mouse input again. `mousemove` can fire on touch devices as
 * well, but very rarely that quickly.
 */

function onDocumentMouseMove() {
  var now = performance.now();

  if (now - lastMouseMoveTime < 20) {
    currentInput.isTouch = false;
    document.removeEventListener('mousemove', onDocumentMouseMove);
  }

  lastMouseMoveTime = now;
}
/**
 * When an element is in focus and has a tippy, leaving the tab/window and
 * returning causes it to show again. For mouse users this is unexpected, but
 * for keyboard use it makes sense.
 * TODO: find a better technique to solve this problem
 */

function onWindowBlur() {
  var activeElement = document.activeElement;

  if (isReferenceElement(activeElement)) {
    var instance = activeElement._tippy;

    if (activeElement.blur && !instance.state.isVisible) {
      activeElement.blur();
    }
  }
}
function bindGlobalEventListeners() {
  document.addEventListener('touchstart', onDocumentTouchStart, TOUCH_OPTIONS);
  window.addEventListener('blur', onWindowBlur);
}

var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
var ua = isBrowser ? navigator.userAgent : '';
var isIE = /MSIE |Trident\//.test(ua);

function createMemoryLeakWarning(method) {
  var txt = method === 'destroy' ? 'n already-' : ' ';
  return [method + "() was called on a" + txt + "destroyed instance. This is a no-op but", 'indicates a potential memory leak.'].join(' ');
}
function clean(value) {
  var spacesAndTabs = /[ \t]{2,}/g;
  var lineStartWithSpaces = /^[ \t]*/gm;
  return value.replace(spacesAndTabs, ' ').replace(lineStartWithSpaces, '').trim();
}

function getDevMessage(message) {
  return clean("\n  %ctippy.js\n\n  %c" + clean(message) + "\n\n  %c\uD83D\uDC77\u200D This is a development-only message. It will be removed in production.\n  ");
}

function getFormattedMessage(message) {
  return [getDevMessage(message), // title
  'color: #00C584; font-size: 1.3em; font-weight: bold;', // message
  'line-height: 1.5', // footer
  'color: #a6a095;'];
} // Assume warnings and errors never have the same message

var visitedMessages;

if (process.env.NODE_ENV !== "production") {
  resetVisitedMessages();
}

function resetVisitedMessages() {
  visitedMessages = new Set();
}
function warnWhen(condition, message) {
  if (condition && !visitedMessages.has(message)) {
    var _console;

    visitedMessages.add(message);

    (_console = console).warn.apply(_console, getFormattedMessage(message));
  }
}
function errorWhen(condition, message) {
  if (condition && !visitedMessages.has(message)) {
    var _console2;

    visitedMessages.add(message);

    (_console2 = console).error.apply(_console2, getFormattedMessage(message));
  }
}
function validateTargets(targets) {
  var didPassFalsyValue = !targets;
  var didPassPlainObject = Object.prototype.toString.call(targets) === '[object Object]' && !targets.addEventListener;
  errorWhen(didPassFalsyValue, ['tippy() was passed', '`' + String(targets) + '`', 'as its targets (first) argument. Valid types are: String, Element,', 'Element[], or NodeList.'].join(' '));
  errorWhen(didPassPlainObject, ['tippy() was passed a plain object which is not supported as an argument', 'for virtual positioning. Use props.getReferenceClientRect instead.'].join(' '));
}

var pluginProps = {
  animateFill: false,
  followCursor: false,
  inlinePositioning: false,
  sticky: false
};
var renderProps = {
  allowHTML: false,
  animation: 'fade',
  arrow: true,
  content: '',
  inertia: false,
  maxWidth: 350,
  role: 'tooltip',
  theme: '',
  zIndex: 9999
};
var defaultProps = Object.assign({
  appendTo: function appendTo() {
    return document.body;
  },
  aria: {
    content: 'auto',
    expanded: 'auto'
  },
  delay: 0,
  duration: [300, 250],
  getReferenceClientRect: null,
  hideOnClick: true,
  ignoreAttributes: false,
  interactive: false,
  interactiveBorder: 2,
  interactiveDebounce: 0,
  moveTransition: '',
  offset: [0, 10],
  onAfterUpdate: function onAfterUpdate() {},
  onBeforeUpdate: function onBeforeUpdate() {},
  onCreate: function onCreate() {},
  onDestroy: function onDestroy() {},
  onHidden: function onHidden() {},
  onHide: function onHide() {},
  onMount: function onMount() {},
  onShow: function onShow() {},
  onShown: function onShown() {},
  onTrigger: function onTrigger() {},
  onUntrigger: function onUntrigger() {},
  onClickOutside: function onClickOutside() {},
  placement: 'top',
  plugins: [],
  popperOptions: {},
  render: null,
  showOnCreate: false,
  touch: true,
  trigger: 'mouseenter focus',
  triggerTarget: null
}, pluginProps, {}, renderProps);
var defaultKeys = Object.keys(defaultProps);
var setDefaultProps = function setDefaultProps(partialProps) {
  /* istanbul ignore else */
  if (process.env.NODE_ENV !== "production") {
    validateProps(partialProps, []);
  }

  var keys = Object.keys(partialProps);
  keys.forEach(function (key) {
    defaultProps[key] = partialProps[key];
  });
};
function getExtendedPassedProps(passedProps) {
  var plugins = passedProps.plugins || [];
  var pluginProps = plugins.reduce(function (acc, plugin) {
    var name = plugin.name,
        defaultValue = plugin.defaultValue;

    if (name) {
      acc[name] = passedProps[name] !== undefined ? passedProps[name] : defaultValue;
    }

    return acc;
  }, {});
  return Object.assign({}, passedProps, {}, pluginProps);
}
function getDataAttributeProps(reference, plugins) {
  var propKeys = plugins ? Object.keys(getExtendedPassedProps(Object.assign({}, defaultProps, {
    plugins: plugins
  }))) : defaultKeys;
  var props = propKeys.reduce(function (acc, key) {
    var valueAsString = (reference.getAttribute("data-tippy-" + key) || '').trim();

    if (!valueAsString) {
      return acc;
    }

    if (key === 'content') {
      acc[key] = valueAsString;
    } else {
      try {
        acc[key] = JSON.parse(valueAsString);
      } catch (e) {
        acc[key] = valueAsString;
      }
    }

    return acc;
  }, {});
  return props;
}
function evaluateProps(reference, props) {
  var out = Object.assign({}, props, {
    content: invokeWithArgsOrReturn(props.content, [reference])
  }, props.ignoreAttributes ? {} : getDataAttributeProps(reference, props.plugins));
  out.aria = Object.assign({}, defaultProps.aria, {}, out.aria);
  out.aria = {
    expanded: out.aria.expanded === 'auto' ? props.interactive : out.aria.expanded,
    content: out.aria.content === 'auto' ? props.interactive ? null : 'describedby' : out.aria.content
  };
  return out;
}
function validateProps(partialProps, plugins) {
  if (partialProps === void 0) {
    partialProps = {};
  }

  if (plugins === void 0) {
    plugins = [];
  }

  var keys = Object.keys(partialProps);
  keys.forEach(function (prop) {
    var nonPluginProps = removeProperties(defaultProps, Object.keys(pluginProps));
    var didPassUnknownProp = !hasOwnProperty$1(nonPluginProps, prop); // Check if the prop exists in `plugins`

    if (didPassUnknownProp) {
      didPassUnknownProp = plugins.filter(function (plugin) {
        return plugin.name === prop;
      }).length === 0;
    }

    warnWhen(didPassUnknownProp, ["`" + prop + "`", "is not a valid prop. You may have spelled it incorrectly, or if it's", 'a plugin, forgot to pass it in an array as props.plugins.', '\n\n', 'All props: https://atomiks.github.io/tippyjs/v6/all-props/\n', 'Plugins: https://atomiks.github.io/tippyjs/v6/plugins/'].join(' '));
  });
}

var innerHTML = function innerHTML() {
  return 'innerHTML';
};

function dangerouslySetInnerHTML(element, html) {
  element[innerHTML()] = html;
}

function createArrowElement(value) {
  var arrow = div();

  if (value === true) {
    arrow.className = ARROW_CLASS;
  } else {
    arrow.className = SVG_ARROW_CLASS;

    if (isElement$2(value)) {
      arrow.appendChild(value);
    } else {
      dangerouslySetInnerHTML(arrow, value);
    }
  }

  return arrow;
}

function setContent(content, props) {
  if (isElement$2(props.content)) {
    dangerouslySetInnerHTML(content, '');
    content.appendChild(props.content);
  } else if (typeof props.content !== 'function') {
    if (props.allowHTML) {
      dangerouslySetInnerHTML(content, props.content);
    } else {
      content.textContent = props.content;
    }
  }
}
function getChildren(popper) {
  var box = popper.firstElementChild;
  var boxChildren = arrayFrom(box.children);
  return {
    box: box,
    content: boxChildren.find(function (node) {
      return node.classList.contains(CONTENT_CLASS);
    }),
    arrow: boxChildren.find(function (node) {
      return node.classList.contains(ARROW_CLASS) || node.classList.contains(SVG_ARROW_CLASS);
    }),
    backdrop: boxChildren.find(function (node) {
      return node.classList.contains(BACKDROP_CLASS);
    })
  };
}
function render(instance) {
  var popper = div();
  var box = div();
  box.className = BOX_CLASS;
  box.setAttribute('data-state', 'hidden');
  box.setAttribute('tabindex', '-1');
  var content = div();
  content.className = CONTENT_CLASS;
  content.setAttribute('data-state', 'hidden');
  setContent(content, instance.props);
  popper.appendChild(box);
  box.appendChild(content);
  onUpdate(instance.props, instance.props);

  function onUpdate(prevProps, nextProps) {
    var _getChildren = getChildren(popper),
        box = _getChildren.box,
        content = _getChildren.content,
        arrow = _getChildren.arrow;

    if (nextProps.theme) {
      box.setAttribute('data-theme', nextProps.theme);
    } else {
      box.removeAttribute('data-theme');
    }

    if (typeof nextProps.animation === 'string') {
      box.setAttribute('data-animation', nextProps.animation);
    } else {
      box.removeAttribute('data-animation');
    }

    if (nextProps.inertia) {
      box.setAttribute('data-inertia', '');
    } else {
      box.removeAttribute('data-inertia');
    }

    box.style.maxWidth = typeof nextProps.maxWidth === 'number' ? nextProps.maxWidth + "px" : nextProps.maxWidth;

    if (nextProps.role) {
      box.setAttribute('role', nextProps.role);
    } else {
      box.removeAttribute('role');
    }

    if (prevProps.content !== nextProps.content || prevProps.allowHTML !== nextProps.allowHTML) {
      setContent(content, instance.props);
    }

    if (nextProps.arrow) {
      if (!arrow) {
        box.appendChild(createArrowElement(nextProps.arrow));
      } else if (prevProps.arrow !== nextProps.arrow) {
        box.removeChild(arrow);
        box.appendChild(createArrowElement(nextProps.arrow));
      }
    } else if (arrow) {
      box.removeChild(arrow);
    }
  }

  return {
    popper: popper,
    onUpdate: onUpdate
  };
} // Runtime check to identify if the render function is the default one; this
// way we can apply default CSS transitions logic and it can be tree-shaken away

render.$$tippy = true;

var idCounter = 1;
var mouseMoveListeners = []; // Used by `hideAll()`

var mountedInstances = [];
function createTippy(reference, passedProps) {
  var props = evaluateProps(reference, Object.assign({}, defaultProps, {}, getExtendedPassedProps(removeUndefinedProps(passedProps)))); // ===========================================================================
  // 🔒 Private members
  // ===========================================================================

  var showTimeout;
  var hideTimeout;
  var scheduleHideAnimationFrame;
  var isVisibleFromClick = false;
  var didHideDueToDocumentMouseDown = false;
  var didTouchMove = false;
  var ignoreOnFirstUpdate = false;
  var lastTriggerEvent;
  var currentTransitionEndListener;
  var onFirstUpdate;
  var listeners = [];
  var debouncedOnMouseMove = debounce$2(onMouseMove, props.interactiveDebounce);
  var currentTarget;
  var doc = getOwnerDocument(props.triggerTarget || reference); // ===========================================================================
  // 🔑 Public members
  // ===========================================================================

  var id = idCounter++;
  var popperInstance = null;
  var plugins = unique(props.plugins);
  var state = {
    // Is the instance currently enabled?
    isEnabled: true,
    // Is the tippy currently showing and not transitioning out?
    isVisible: false,
    // Has the instance been destroyed?
    isDestroyed: false,
    // Is the tippy currently mounted to the DOM?
    isMounted: false,
    // Has the tippy finished transitioning in?
    isShown: false
  };
  var instance = {
    // properties
    id: id,
    reference: reference,
    popper: div(),
    popperInstance: popperInstance,
    props: props,
    state: state,
    plugins: plugins,
    // methods
    clearDelayTimeouts: clearDelayTimeouts,
    setProps: setProps,
    setContent: setContent,
    show: show,
    hide: hide,
    hideWithInteractivity: hideWithInteractivity,
    enable: enable,
    disable: disable,
    unmount: unmount,
    destroy: destroy
  }; // TODO: Investigate why this early return causes a TDZ error in the tests —
  // it doesn't seem to happen in the browser

  /* istanbul ignore if */

  if (!props.render) {
    if (process.env.NODE_ENV !== "production") {
      errorWhen(true, 'render() function has not been supplied.');
    }

    return instance;
  } // ===========================================================================
  // Initial mutations
  // ===========================================================================


  var _props$render = props.render(instance),
      popper = _props$render.popper,
      onUpdate = _props$render.onUpdate;

  popper.setAttribute('data-tippy-root', '');
  popper.id = "tippy-" + instance.id;
  instance.popper = popper;
  reference._tippy = instance;
  popper._tippy = instance;
  var pluginsHooks = plugins.map(function (plugin) {
    return plugin.fn(instance);
  });
  var hasAriaExpanded = reference.hasAttribute('aria-expanded');
  addListeners();
  handleAriaExpandedAttribute();
  handleStyles();
  invokeHook('onCreate', [instance]);

  if (props.showOnCreate) {
    scheduleShow();
  } // Prevent a tippy with a delay from hiding if the cursor left then returned
  // before it started hiding


  popper.addEventListener('mouseenter', function () {
    if (instance.props.interactive && instance.state.isVisible) {
      instance.clearDelayTimeouts();
    }
  });
  popper.addEventListener('mouseleave', function (event) {
    if (instance.props.interactive && instance.props.trigger.indexOf('mouseenter') >= 0) {
      doc.addEventListener('mousemove', debouncedOnMouseMove);
      debouncedOnMouseMove(event);
    }
  });
  return instance; // ===========================================================================
  // 🔒 Private methods
  // ===========================================================================

  function getNormalizedTouchSettings() {
    var touch = instance.props.touch;
    return Array.isArray(touch) ? touch : [touch, 0];
  }

  function getIsCustomTouchBehavior() {
    return getNormalizedTouchSettings()[0] === 'hold';
  }

  function getIsDefaultRenderFn() {
    var _instance$props$rende;

    // @ts-ignore
    return !!((_instance$props$rende = instance.props.render) == null ? void 0 : _instance$props$rende.$$tippy);
  }

  function getCurrentTarget() {
    return currentTarget || reference;
  }

  function getDefaultTemplateChildren() {
    return getChildren(popper);
  }

  function getDelay(isShow) {
    // For touch or keyboard input, force `0` delay for UX reasons
    // Also if the instance is mounted but not visible (transitioning out),
    // ignore delay
    if (instance.state.isMounted && !instance.state.isVisible || currentInput.isTouch || lastTriggerEvent && lastTriggerEvent.type === 'focus') {
      return 0;
    }

    return getValueAtIndexOrReturn(instance.props.delay, isShow ? 0 : 1, defaultProps.delay);
  }

  function handleStyles() {
    popper.style.pointerEvents = instance.props.interactive && instance.state.isVisible ? '' : 'none';
    popper.style.zIndex = "" + instance.props.zIndex;
  }

  function invokeHook(hook, args, shouldInvokePropsHook) {
    if (shouldInvokePropsHook === void 0) {
      shouldInvokePropsHook = true;
    }

    pluginsHooks.forEach(function (pluginHooks) {
      if (pluginHooks[hook]) {
        pluginHooks[hook].apply(void 0, args);
      }
    });

    if (shouldInvokePropsHook) {
      var _instance$props;

      (_instance$props = instance.props)[hook].apply(_instance$props, args);
    }
  }

  function handleAriaContentAttribute() {
    var aria = instance.props.aria;

    if (!aria.content) {
      return;
    }

    var attr = "aria-" + aria.content;
    var id = popper.id;
    var nodes = normalizeToArray(instance.props.triggerTarget || reference);
    nodes.forEach(function (node) {
      var currentValue = node.getAttribute(attr);

      if (instance.state.isVisible) {
        node.setAttribute(attr, currentValue ? currentValue + " " + id : id);
      } else {
        var nextValue = currentValue && currentValue.replace(id, '').trim();

        if (nextValue) {
          node.setAttribute(attr, nextValue);
        } else {
          node.removeAttribute(attr);
        }
      }
    });
  }

  function handleAriaExpandedAttribute() {
    if (hasAriaExpanded || !instance.props.aria.expanded) {
      return;
    }

    var nodes = normalizeToArray(instance.props.triggerTarget || reference);
    nodes.forEach(function (node) {
      if (instance.props.interactive) {
        node.setAttribute('aria-expanded', instance.state.isVisible && node === getCurrentTarget() ? 'true' : 'false');
      } else {
        node.removeAttribute('aria-expanded');
      }
    });
  }

  function cleanupInteractiveMouseListeners() {
    doc.removeEventListener('mousemove', debouncedOnMouseMove);
    mouseMoveListeners = mouseMoveListeners.filter(function (listener) {
      return listener !== debouncedOnMouseMove;
    });
  }

  function onDocumentPress(event) {
    // Moved finger to scroll instead of an intentional tap outside
    if (currentInput.isTouch) {
      if (didTouchMove || event.type === 'mousedown') {
        return;
      }
    } // Clicked on interactive popper


    if (instance.props.interactive && popper.contains(event.target)) {
      return;
    } // Clicked on the event listeners target


    if (getCurrentTarget().contains(event.target)) {
      if (currentInput.isTouch) {
        return;
      }

      if (instance.state.isVisible && instance.props.trigger.indexOf('click') >= 0) {
        return;
      }
    } else {
      invokeHook('onClickOutside', [instance, event]);
    }

    if (instance.props.hideOnClick === true) {
      instance.clearDelayTimeouts();
      instance.hide(); // `mousedown` event is fired right before `focus` if pressing the
      // currentTarget. This lets a tippy with `focus` trigger know that it
      // should not show

      didHideDueToDocumentMouseDown = true;
      setTimeout(function () {
        didHideDueToDocumentMouseDown = false;
      }); // The listener gets added in `scheduleShow()`, but this may be hiding it
      // before it shows, and hide()'s early bail-out behavior can prevent it
      // from being cleaned up

      if (!instance.state.isMounted) {
        removeDocumentPress();
      }
    }
  }

  function onTouchMove() {
    didTouchMove = true;
  }

  function onTouchStart() {
    didTouchMove = false;
  }

  function addDocumentPress() {
    doc.addEventListener('mousedown', onDocumentPress, true);
    doc.addEventListener('touchend', onDocumentPress, TOUCH_OPTIONS);
    doc.addEventListener('touchstart', onTouchStart, TOUCH_OPTIONS);
    doc.addEventListener('touchmove', onTouchMove, TOUCH_OPTIONS);
  }

  function removeDocumentPress() {
    doc.removeEventListener('mousedown', onDocumentPress, true);
    doc.removeEventListener('touchend', onDocumentPress, TOUCH_OPTIONS);
    doc.removeEventListener('touchstart', onTouchStart, TOUCH_OPTIONS);
    doc.removeEventListener('touchmove', onTouchMove, TOUCH_OPTIONS);
  }

  function onTransitionedOut(duration, callback) {
    onTransitionEnd(duration, function () {
      if (!instance.state.isVisible && popper.parentNode && popper.parentNode.contains(popper)) {
        callback();
      }
    });
  }

  function onTransitionedIn(duration, callback) {
    onTransitionEnd(duration, callback);
  }

  function onTransitionEnd(duration, callback) {
    var box = getDefaultTemplateChildren().box;

    function listener(event) {
      if (event.target === box) {
        updateTransitionEndListener(box, 'remove', listener);
        callback();
      }
    } // Make callback synchronous if duration is 0
    // `transitionend` won't fire otherwise


    if (duration === 0) {
      return callback();
    }

    updateTransitionEndListener(box, 'remove', currentTransitionEndListener);
    updateTransitionEndListener(box, 'add', listener);
    currentTransitionEndListener = listener;
  }

  function on(eventType, handler, options) {
    if (options === void 0) {
      options = false;
    }

    var nodes = normalizeToArray(instance.props.triggerTarget || reference);
    nodes.forEach(function (node) {
      node.addEventListener(eventType, handler, options);
      listeners.push({
        node: node,
        eventType: eventType,
        handler: handler,
        options: options
      });
    });
  }

  function addListeners() {
    if (getIsCustomTouchBehavior()) {
      on('touchstart', onTrigger, {
        passive: true
      });
      on('touchend', onMouseLeave, {
        passive: true
      });
    }

    splitBySpaces(instance.props.trigger).forEach(function (eventType) {
      if (eventType === 'manual') {
        return;
      }

      on(eventType, onTrigger);

      switch (eventType) {
        case 'mouseenter':
          on('mouseleave', onMouseLeave);
          break;

        case 'focus':
          on(isIE ? 'focusout' : 'blur', onBlurOrFocusOut);
          break;

        case 'focusin':
          on('focusout', onBlurOrFocusOut);
          break;
      }
    });
  }

  function removeListeners() {
    listeners.forEach(function (_ref) {
      var node = _ref.node,
          eventType = _ref.eventType,
          handler = _ref.handler,
          options = _ref.options;
      node.removeEventListener(eventType, handler, options);
    });
    listeners = [];
  }

  function onTrigger(event) {
    var _lastTriggerEvent;

    var shouldScheduleClickHide = false;

    if (!instance.state.isEnabled || isEventListenerStopped(event) || didHideDueToDocumentMouseDown) {
      return;
    }

    var wasFocused = ((_lastTriggerEvent = lastTriggerEvent) == null ? void 0 : _lastTriggerEvent.type) === 'focus';
    lastTriggerEvent = event;
    currentTarget = event.currentTarget;
    handleAriaExpandedAttribute();

    if (!instance.state.isVisible && isMouseEvent(event)) {
      // If scrolling, `mouseenter` events can be fired if the cursor lands
      // over a new target, but `mousemove` events don't get fired. This
      // causes interactive tooltips to get stuck open until the cursor is
      // moved
      mouseMoveListeners.forEach(function (listener) {
        return listener(event);
      });
    } // Toggle show/hide when clicking click-triggered tooltips


    if (event.type === 'click' && (instance.props.trigger.indexOf('mouseenter') < 0 || isVisibleFromClick) && instance.props.hideOnClick !== false && instance.state.isVisible) {
      shouldScheduleClickHide = true;
    } else {
      scheduleShow(event);
    }

    if (event.type === 'click') {
      isVisibleFromClick = !shouldScheduleClickHide;
    }

    if (shouldScheduleClickHide && !wasFocused) {
      scheduleHide(event);
    }
  }

  function onMouseMove(event) {
    var target = event.target;
    var isCursorOverReferenceOrPopper = getCurrentTarget().contains(target) || popper.contains(target);

    if (event.type === 'mousemove' && isCursorOverReferenceOrPopper) {
      return;
    }

    var popperTreeData = getNestedPopperTree().concat(popper).map(function (popper) {
      var _instance$popperInsta;

      var instance = popper._tippy;
      var state = (_instance$popperInsta = instance.popperInstance) == null ? void 0 : _instance$popperInsta.state;

      if (state) {
        return {
          popperRect: popper.getBoundingClientRect(),
          popperState: state,
          props: props
        };
      }

      return null;
    }).filter(Boolean);

    if (isCursorOutsideInteractiveBorder(popperTreeData, event)) {
      cleanupInteractiveMouseListeners();
      scheduleHide(event);
    }
  }

  function onMouseLeave(event) {
    var shouldBail = isEventListenerStopped(event) || instance.props.trigger.indexOf('click') >= 0 && isVisibleFromClick;

    if (shouldBail) {
      return;
    }

    if (instance.props.interactive) {
      instance.hideWithInteractivity(event);
      return;
    }

    scheduleHide(event);
  }

  function onBlurOrFocusOut(event) {
    if (instance.props.trigger.indexOf('focusin') < 0 && event.target !== getCurrentTarget()) {
      return;
    } // If focus was moved to within the popper


    if (instance.props.interactive && event.relatedTarget && popper.contains(event.relatedTarget)) {
      return;
    }

    scheduleHide(event);
  }

  function isEventListenerStopped(event) {
    return currentInput.isTouch ? getIsCustomTouchBehavior() !== event.type.indexOf('touch') >= 0 : false;
  }

  function createPopperInstance() {
    destroyPopperInstance();
    var _instance$props2 = instance.props,
        popperOptions = _instance$props2.popperOptions,
        placement = _instance$props2.placement,
        offset = _instance$props2.offset,
        getReferenceClientRect = _instance$props2.getReferenceClientRect,
        moveTransition = _instance$props2.moveTransition;
    var arrow = getIsDefaultRenderFn() ? getChildren(popper).arrow : null;
    var computedReference = getReferenceClientRect ? {
      getBoundingClientRect: getReferenceClientRect,
      contextElement: getReferenceClientRect.contextElement || getCurrentTarget()
    } : reference;
    var tippyModifier = {
      name: '$$tippy',
      enabled: true,
      phase: 'beforeWrite',
      requires: ['computeStyles'],
      fn: function fn(_ref2) {
        var state = _ref2.state;

        if (getIsDefaultRenderFn()) {
          var _getDefaultTemplateCh = getDefaultTemplateChildren(),
              box = _getDefaultTemplateCh.box;

          ['placement', 'reference-hidden', 'escaped'].forEach(function (attr) {
            if (attr === 'placement') {
              box.setAttribute('data-placement', state.placement);
            } else {
              if (state.attributes.popper["data-popper-" + attr]) {
                box.setAttribute("data-" + attr, '');
              } else {
                box.removeAttribute("data-" + attr);
              }
            }
          });
          state.attributes.popper = {};
        }
      }
    };
    var modifiers = [{
      name: 'offset',
      options: {
        offset: offset
      }
    }, {
      name: 'preventOverflow',
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    }, {
      name: 'flip',
      options: {
        padding: 5
      }
    }, {
      name: 'computeStyles',
      options: {
        adaptive: !moveTransition
      }
    }, tippyModifier];

    if (getIsDefaultRenderFn() && arrow) {
      modifiers.push({
        name: 'arrow',
        options: {
          element: arrow,
          padding: 3
        }
      });
    }

    modifiers.push.apply(modifiers, (popperOptions == null ? void 0 : popperOptions.modifiers) || []);
    instance.popperInstance = createPopper(computedReference, popper, Object.assign({}, popperOptions, {
      placement: placement,
      onFirstUpdate: onFirstUpdate,
      modifiers: modifiers
    }));
  }

  function destroyPopperInstance() {
    if (instance.popperInstance) {
      instance.popperInstance.destroy();
      instance.popperInstance = null;
    }
  }

  function mount() {
    var appendTo = instance.props.appendTo;
    var parentNode; // By default, we'll append the popper to the triggerTargets's parentNode so
    // it's directly after the reference element so the elements inside the
    // tippy can be tabbed to
    // If there are clipping issues, the user can specify a different appendTo
    // and ensure focus management is handled correctly manually

    var node = getCurrentTarget();

    if (instance.props.interactive && appendTo === defaultProps.appendTo || appendTo === 'parent') {
      parentNode = node.parentNode;
    } else {
      parentNode = invokeWithArgsOrReturn(appendTo, [node]);
    } // The popper element needs to exist on the DOM before its position can be
    // updated as Popper needs to read its dimensions


    if (!parentNode.contains(popper)) {
      parentNode.appendChild(popper);
    }

    createPopperInstance();
    /* istanbul ignore else */

    if (process.env.NODE_ENV !== "production") {
      // Accessibility check
      warnWhen(instance.props.interactive && appendTo === defaultProps.appendTo && node.nextElementSibling !== popper, ['Interactive tippy element may not be accessible via keyboard', 'navigation because it is not directly after the reference element', 'in the DOM source order.', '\n\n', 'Using a wrapper <div> or <span> tag around the reference element', 'solves this by creating a new parentNode context.', '\n\n', 'Specifying `appendTo: document.body` silences this warning, but it', 'assumes you are using a focus management solution to handle', 'keyboard navigation.', '\n\n', 'See: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity'].join(' '));
    }
  }

  function getNestedPopperTree() {
    return arrayFrom(popper.querySelectorAll('[data-tippy-root]'));
  }

  function scheduleShow(event) {
    instance.clearDelayTimeouts();

    if (event) {
      invokeHook('onTrigger', [instance, event]);
    }

    addDocumentPress();
    var delay = getDelay(true);

    var _getNormalizedTouchSe = getNormalizedTouchSettings(),
        touchValue = _getNormalizedTouchSe[0],
        touchDelay = _getNormalizedTouchSe[1];

    if (currentInput.isTouch && touchValue === 'hold' && touchDelay) {
      delay = touchDelay;
    }

    if (delay) {
      showTimeout = setTimeout(function () {
        instance.show();
      }, delay);
    } else {
      instance.show();
    }
  }

  function scheduleHide(event) {
    instance.clearDelayTimeouts();
    invokeHook('onUntrigger', [instance, event]);

    if (!instance.state.isVisible) {
      removeDocumentPress();
      return;
    } // For interactive tippies, scheduleHide is added to a document.body handler
    // from onMouseLeave so must intercept scheduled hides from mousemove/leave
    // events when trigger contains mouseenter and click, and the tip is
    // currently shown as a result of a click.


    if (instance.props.trigger.indexOf('mouseenter') >= 0 && instance.props.trigger.indexOf('click') >= 0 && ['mouseleave', 'mousemove'].indexOf(event.type) >= 0 && isVisibleFromClick) {
      return;
    }

    var delay = getDelay(false);

    if (delay) {
      hideTimeout = setTimeout(function () {
        if (instance.state.isVisible) {
          instance.hide();
        }
      }, delay);
    } else {
      // Fixes a `transitionend` problem when it fires 1 frame too
      // late sometimes, we don't want hide() to be called.
      scheduleHideAnimationFrame = requestAnimationFrame(function () {
        instance.hide();
      });
    }
  } // ===========================================================================
  // 🔑 Public methods
  // ===========================================================================


  function enable() {
    instance.state.isEnabled = true;
  }

  function disable() {
    // Disabling the instance should also hide it
    // https://github.com/atomiks/tippy.js-react/issues/106
    instance.hide();
    instance.state.isEnabled = false;
  }

  function clearDelayTimeouts() {
    clearTimeout(showTimeout);
    clearTimeout(hideTimeout);
    cancelAnimationFrame(scheduleHideAnimationFrame);
  }

  function setProps(partialProps) {
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== "production") {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('setProps'));
    }

    if (instance.state.isDestroyed) {
      return;
    }

    invokeHook('onBeforeUpdate', [instance, partialProps]);
    removeListeners();
    var prevProps = instance.props;
    var nextProps = evaluateProps(reference, Object.assign({}, instance.props, {}, partialProps, {
      ignoreAttributes: true
    }));
    instance.props = nextProps;
    addListeners();

    if (prevProps.interactiveDebounce !== nextProps.interactiveDebounce) {
      cleanupInteractiveMouseListeners();
      debouncedOnMouseMove = debounce$2(onMouseMove, nextProps.interactiveDebounce);
    } // Ensure stale aria-expanded attributes are removed


    if (prevProps.triggerTarget && !nextProps.triggerTarget) {
      normalizeToArray(prevProps.triggerTarget).forEach(function (node) {
        node.removeAttribute('aria-expanded');
      });
    } else if (nextProps.triggerTarget) {
      reference.removeAttribute('aria-expanded');
    }

    handleAriaExpandedAttribute();
    handleStyles();

    if (onUpdate) {
      onUpdate(prevProps, nextProps);
    }

    if (instance.popperInstance) {
      createPopperInstance(); // Fixes an issue with nested tippies if they are all getting re-rendered,
      // and the nested ones get re-rendered first.
      // https://github.com/atomiks/tippyjs-react/issues/177
      // TODO: find a cleaner / more efficient solution(!)

      getNestedPopperTree().forEach(function (nestedPopper) {
        // React (and other UI libs likely) requires a rAF wrapper as it flushes
        // its work in one
        requestAnimationFrame(nestedPopper._tippy.popperInstance.forceUpdate);
      });
    }

    invokeHook('onAfterUpdate', [instance, partialProps]);
  }

  function setContent(content) {
    instance.setProps({
      content: content
    });
  }

  function show() {
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== "production") {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('show'));
    } // Early bail-out


    var isAlreadyVisible = instance.state.isVisible;
    var isDestroyed = instance.state.isDestroyed;
    var isDisabled = !instance.state.isEnabled;
    var isTouchAndTouchDisabled = currentInput.isTouch && !instance.props.touch;
    var duration = getValueAtIndexOrReturn(instance.props.duration, 0, defaultProps.duration);

    if (isAlreadyVisible || isDestroyed || isDisabled || isTouchAndTouchDisabled) {
      return;
    } // Normalize `disabled` behavior across browsers.
    // Firefox allows events on disabled elements, but Chrome doesn't.
    // Using a wrapper element (i.e. <span>) is recommended.


    if (getCurrentTarget().hasAttribute('disabled')) {
      return;
    }

    invokeHook('onShow', [instance], false);

    if (instance.props.onShow(instance) === false) {
      return;
    }

    instance.state.isVisible = true;

    if (getIsDefaultRenderFn()) {
      popper.style.visibility = 'visible';
    }

    handleStyles();
    addDocumentPress();

    if (!instance.state.isMounted) {
      popper.style.transition = 'none';
    } // If flipping to the opposite side after hiding at least once, the
    // animation will use the wrong placement without resetting the duration


    if (getIsDefaultRenderFn()) {
      var _getDefaultTemplateCh2 = getDefaultTemplateChildren(),
          box = _getDefaultTemplateCh2.box,
          content = _getDefaultTemplateCh2.content;

      setTransitionDuration([box, content], 0);
    }

    onFirstUpdate = function onFirstUpdate() {
      if (!instance.state.isVisible || ignoreOnFirstUpdate) {
        return;
      }

      ignoreOnFirstUpdate = true; // reflow

      void popper.offsetHeight;
      popper.style.transition = instance.props.moveTransition;

      if (getIsDefaultRenderFn() && instance.props.animation) {
        var _getDefaultTemplateCh3 = getDefaultTemplateChildren(),
            _box = _getDefaultTemplateCh3.box,
            _content = _getDefaultTemplateCh3.content;

        setTransitionDuration([_box, _content], duration);
        setVisibilityState([_box, _content], 'visible');
      }

      handleAriaContentAttribute();
      handleAriaExpandedAttribute();
      pushIfUnique(mountedInstances, instance);
      instance.state.isMounted = true;
      invokeHook('onMount', [instance]);

      if (instance.props.animation && getIsDefaultRenderFn()) {
        onTransitionedIn(duration, function () {
          instance.state.isShown = true;
          invokeHook('onShown', [instance]);
        });
      }
    };

    mount();
  }

  function hide() {
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== "production") {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('hide'));
    } // Early bail-out


    var isAlreadyHidden = !instance.state.isVisible;
    var isDestroyed = instance.state.isDestroyed;
    var isDisabled = !instance.state.isEnabled;
    var duration = getValueAtIndexOrReturn(instance.props.duration, 1, defaultProps.duration);

    if (isAlreadyHidden || isDestroyed || isDisabled) {
      return;
    }

    invokeHook('onHide', [instance], false);

    if (instance.props.onHide(instance) === false) {
      return;
    }

    instance.state.isVisible = false;
    instance.state.isShown = false;
    ignoreOnFirstUpdate = false;
    isVisibleFromClick = false;

    if (getIsDefaultRenderFn()) {
      popper.style.visibility = 'hidden';
    }

    cleanupInteractiveMouseListeners();
    removeDocumentPress();
    handleStyles();

    if (getIsDefaultRenderFn()) {
      var _getDefaultTemplateCh4 = getDefaultTemplateChildren(),
          box = _getDefaultTemplateCh4.box,
          content = _getDefaultTemplateCh4.content;

      if (instance.props.animation) {
        setTransitionDuration([box, content], duration);
        setVisibilityState([box, content], 'hidden');
      }
    }

    handleAriaContentAttribute();
    handleAriaExpandedAttribute();

    if (instance.props.animation) {
      if (getIsDefaultRenderFn()) {
        onTransitionedOut(duration, instance.unmount);
      }
    } else {
      instance.unmount();
    }
  }

  function hideWithInteractivity(event) {
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== "production") {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('hideWithInteractivity'));
    }

    doc.addEventListener('mousemove', debouncedOnMouseMove);
    pushIfUnique(mouseMoveListeners, debouncedOnMouseMove);
    debouncedOnMouseMove(event);
  }

  function unmount() {
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== "production") {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('unmount'));
    }

    if (instance.state.isVisible) {
      instance.hide();
    }

    if (!instance.state.isMounted) {
      return;
    }

    destroyPopperInstance(); // If a popper is not interactive, it will be appended outside the popper
    // tree by default. This seems mainly for interactive tippies, but we should
    // find a workaround if possible

    getNestedPopperTree().forEach(function (nestedPopper) {
      nestedPopper._tippy.unmount();
    });

    if (popper.parentNode) {
      popper.parentNode.removeChild(popper);
    }

    mountedInstances = mountedInstances.filter(function (i) {
      return i !== instance;
    });
    instance.state.isMounted = false;
    invokeHook('onHidden', [instance]);
  }

  function destroy() {
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== "production") {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('destroy'));
    }

    if (instance.state.isDestroyed) {
      return;
    }

    instance.clearDelayTimeouts();
    instance.unmount();
    removeListeners();
    delete reference._tippy;
    instance.state.isDestroyed = true;
    invokeHook('onDestroy', [instance]);
  }
}

function tippy(targets, optionalProps) {
  if (optionalProps === void 0) {
    optionalProps = {};
  }

  var plugins = defaultProps.plugins.concat(optionalProps.plugins || []);
  /* istanbul ignore else */

  if (process.env.NODE_ENV !== "production") {
    validateTargets(targets);
    validateProps(optionalProps, plugins);
  }

  bindGlobalEventListeners();
  var passedProps = Object.assign({}, optionalProps, {
    plugins: plugins
  });
  var elements = getArrayOfElements(targets);
  /* istanbul ignore else */

  if (process.env.NODE_ENV !== "production") {
    var isSingleContentElement = isElement$2(passedProps.content);
    var isMoreThanOneReferenceElement = elements.length > 1;
    warnWhen(isSingleContentElement && isMoreThanOneReferenceElement, ['tippy() was passed an Element as the `content` prop, but more than', 'one tippy instance was created by this invocation. This means the', 'content element will only be appended to the last tippy instance.', '\n\n', 'Instead, pass the .innerHTML of the element, or use a function that', 'returns a cloned version of the element instead.', '\n\n', '1) content: element.innerHTML\n', '2) content: () => element.cloneNode(true)'].join(' '));
  }

  var instances = elements.reduce(function (acc, reference) {
    var instance = reference && createTippy(reference, passedProps);

    if (instance) {
      acc.push(instance);
    }

    return acc;
  }, []);
  return isElement$2(targets) ? instances[0] : instances;
}

tippy.defaultProps = defaultProps;
tippy.setDefaultProps = setDefaultProps;
tippy.currentInput = currentInput;

tippy.setDefaultProps({
  render: render
});

/**
 * useTooltip
 */

var useTooltip = function useTooltip() {
  return {
    tooltip: tippy
  };
};

var __jsx$v = React__default['default'].createElement;
var CheckboxComponent = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var disabled = _ref.disabled,
      props = _objectWithoutProperties(_ref, ["disabled"]);

  return __jsx$v(StyledCheckbox, _extends({
    disabled: disabled,
    ref: ref,
    type: "checkbox"
  }, props));
});
var StyledCheckbox = styled__default['default'].input.withConfig({
  displayName: "component__StyledCheckbox",
  componentId: "sc-1cyi0gq-0"
})(["cursor:pointer;margin-right:0.5rem;"]);
CheckboxComponent.propTypes = {
  disabled: propTypes.bool
};
CheckboxComponent.defaultProps = {
  stacked: false
};

var __jsx$w = React__default['default'].createElement;
var CheckboxField = function CheckboxField(_ref) {
  var data = _ref.data,
      errors = _ref.errors,
      legend = _ref.legend,
      stacked = _ref.stacked,
      props = _objectWithoutProperties(_ref, ["data", "errors", "legend", "stacked"]);

  return __jsx$w(StyledFieldset, {
    error: errors[props.name]
  }, legend && __jsx$w("legend", null, legend), data.map(function (_ref2) {
    var disabled = _ref2.disabled,
        label = _ref2.label,
        data = _objectWithoutProperties(_ref2, ["disabled", "label"]);

    return __jsx$w(StyledLabel, {
      htmlFor: data.id,
      key: data.id,
      stacked: stacked
    }, __jsx$w(FieldHOC, _extends({
      component: CheckboxComponent,
      disabled: disabled,
      errors: errors[props.name],
      showError: false
    }, data, props)), label);
  }));
};
var StyledFieldset = styled__default['default'].fieldset.withConfig({
  displayName: "checkbox__StyledFieldset",
  componentId: "sc-1wburha-0"
})(["border-radius:0.25rem;", ""], function (_ref3) {
  var error = _ref3.error;
  return error && styled.css(["", " padding:0.5rem;"], function (props) {
    return ERROR_STYLE(props);
  });
});
var StyledLabel = styled__default['default'].label.withConfig({
  displayName: "checkbox__StyledLabel",
  componentId: "sc-1wburha-1"
})(["cursor:pointer;margin-right:1.25rem;position:relative;", ""], function (_ref4) {
  var stacked = _ref4.stacked;
  return stacked && styled.css(["display:block;margin:0.5rem 0;"]);
});
CheckboxField.propTypes = {
  data: propTypes.array.isRequired,
  errors: propTypes.object,
  legend: propTypes.string,
  stacked: propTypes.bool
};
CheckboxField.defaultProps = {
  data: [],
  errors: {},
  stacked: false
};

/**
 * Form - DatePicker - Calendar - Properties
 */
var PROPERTIES = {
  adjustDateOnChange: propTypes.bool,
  allowSameDay: propTypes.bool,
  ariaLabelledBy: propTypes.string,
  autoComplete: propTypes.string,
  autoFocus: propTypes.bool,
  calendarClassName: propTypes.string,
  calendarContainer: propTypes.func,
  children: propTypes.node,
  className: propTypes.string,
  customInput: propTypes.element,
  customInputRef: propTypes.string,
  dateFormat: propTypes.oneOfType([propTypes.string, propTypes.array]),
  dateFormatCalendar: propTypes.string,
  dayClassName: propTypes.func,
  disabled: propTypes.bool,
  disabledKeyboardNavigation: propTypes.bool,
  dropdownMode: propTypes.oneOf(['scroll', 'select']),
  endDate: propTypes.instanceOf(Date),
  excludeDates: propTypes.array,
  filterDate: propTypes.func,
  fixedHeight: propTypes.bool,
  formatWeekNumber: propTypes.func,
  highlightDates: propTypes.array,
  id: propTypes.string,
  includeDates: propTypes.array,
  includeTimes: propTypes.array,
  injectTimes: propTypes.array,
  inline: propTypes.bool,
  isClearable: propTypes.bool,
  locale: propTypes.oneOfType([propTypes.string, propTypes.shape({
    locale: propTypes.object
  })]).isRequired,
  maxDate: propTypes.instanceOf(Date),
  minDate: propTypes.instanceOf(Date),
  monthsShown: propTypes.number,
  name: propTypes.string,
  onBlur: propTypes.func,
  onChange: propTypes.func,
  onSelect: propTypes.func,
  onWeekSelect: propTypes.func,
  onClickOutside: propTypes.func,
  onChangeRaw: propTypes.func,
  onFocus: propTypes.func,
  onInputClick: propTypes.func,
  onKeyDown: propTypes.func,
  onMonthChange: propTypes.func,
  onYearChange: propTypes.func,
  onInputError: propTypes.func,
  open: propTypes.bool,
  onCalendarOpen: propTypes.func,
  onCalendarClose: propTypes.func,
  openToDate: propTypes.instanceOf(Date),
  peekNextMonth: propTypes.bool,
  placeholderText: propTypes.string,
  popperContainer: propTypes.func,
  popperClassName: propTypes.string,
  popperModifiers: propTypes.object,
  popperPlacement: propTypes.string,
  popperProps: propTypes.object,
  preventOpenOnFocus: propTypes.bool,
  readOnly: propTypes.bool,
  required: propTypes.bool,
  scrollableYearDropdown: propTypes.bool,
  scrollableMonthYearDropdown: propTypes.bool,
  selected: propTypes.instanceOf(Date),
  selectsEnd: propTypes.bool,
  selectsStart: propTypes.bool,
  showMonthDropdown: propTypes.bool,
  showPreviousMonths: propTypes.bool,
  showMonthYearDropdown: propTypes.bool,
  showWeekNumbers: propTypes.bool,
  showYearDropdown: propTypes.bool,
  strictParsing: propTypes.bool,
  forceShowMonthNavigation: propTypes.bool,
  showDisabledMonthNavigation: propTypes.bool,
  startDate: propTypes.instanceOf(Date),
  startOpen: propTypes.bool,
  tabIndex: propTypes.number,
  timeCaption: propTypes.string,
  title: propTypes.string,
  todayButton: propTypes.node,
  useWeekdaysShort: propTypes.bool,
  formatWeekDay: propTypes.func,
  value: propTypes.oneOfType([propTypes.string, propTypes.instanceOf(Date)]),
  weekLabel: propTypes.string,
  withPortal: propTypes.bool,
  yearDropdownItemNumber: propTypes.number,
  shouldCloseOnSelect: propTypes.bool,
  showTimeInput: propTypes.bool,
  showMonthYearPicker: propTypes.bool,
  showQuarterYearPicker: propTypes.bool,
  showTimeSelect: propTypes.bool,
  showTimeSelectOnly: propTypes.bool,
  timeFormat: propTypes.string,
  timeIntervals: propTypes.number,
  minTime: propTypes.instanceOf(Date),
  maxTime: propTypes.instanceOf(Date),
  excludeTimes: propTypes.array,
  useShortMonthInDropdown: propTypes.bool,
  clearButtonTitle: propTypes.string,
  previousMonthButtonLabel: propTypes.string,
  nextMonthButtonLabel: propTypes.string,
  previousYearButtonLabel: propTypes.string,
  nextYearButtonLabel: propTypes.string,
  timeInputLabel: propTypes.string,
  renderCustomHeader: propTypes.func,
  renderDayContents: propTypes.func,
  wrapperClassName: propTypes.string,
  inlineFocusSelectedMonth: propTypes.bool,
  onDayMouseEnter: propTypes.func,
  onMonthMouseLeave: propTypes.func,
  showPopperArrow: propTypes.bool
};

var __jsx$x = React__default['default'].createElement;
var DatePickerCalendar = function DatePickerCalendar(_ref) {
  var control = _ref.control,
      defaultValue = _ref.defaultValue,
      errors = _ref.errors,
      name = _ref.name,
      placeholder = _ref.placeholder,
      parentProps = _objectWithoutProperties(_ref, ["control", "defaultValue", "errors", "name", "placeholder"]);

  return __jsx$x(reactHookForm.Controller, {
    render: function render(props) {
      return __jsx$x(ReactDatePicker__default['default'], _extends({
        customInput: __jsx$x(StyledInput, {
          errors: errors[name]
        }),
        selected: props.value
      }, props, parentProps, {
        placeholderText: placeholder !== null && placeholder !== void 0 ? placeholder : 'Click to select time'
      }));
    },
    control: control,
    defaultValue: defaultValue,
    name: name
  });
};
DatePickerCalendar.propTypes = PROPERTIES;
DatePickerCalendar.defaultProps = {
  autoFocus: false,
  dateFormat: 'd MMM yyyy',
  dropdownMode: 'scroll',
  isClearable: true,
  minDate: new Date(),
  name: 'expiryAt',
  shouldCloseOnSelect: true,
  showTimeSelect: false,
  timeIntervals: 30,
  todayButton: 'Today'
};

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray$1(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread();
}

/**
 * Date Picker - Input
 */
var MONTHS = [{
  disabled: true,
  text: 'Select month',
  value: ''
}, {
  text: 'January',
  value: 1
}, {
  text: 'February',
  value: 2
}, {
  text: 'March',
  value: 3
}, {
  text: 'April',
  value: 4
}, {
  text: 'May',
  value: 5
}, {
  text: 'June',
  value: 6
}, {
  text: 'July',
  value: 7
}, {
  text: 'August',
  value: 8
}, {
  text: 'September',
  value: 9
}, {
  text: 'October',
  value: 10
}, {
  text: 'November',
  value: 11
}, {
  text: 'December',
  value: 12
}]; // Days

var days = [{
  disabled: true,
  text: 'Select day',
  value: ''
}];

for (var d$1 = 1; d$1 <= 31; d$1++) {
  days.push({
    text: d$1,
    value: d$1
  });
}

var DAYS = days;

var __jsx$y = React__default['default'].createElement;
var DatePickerInput = function DatePickerInput(_ref) {
  var data = _ref.data,
      errors = _ref.errors,
      index = _ref.index,
      label = _ref.label,
      name = _ref.name,
      placeHolder = _ref.placeHolder,
      register = _ref.register,
      showDay = _ref.showDay,
      showMonth = _ref.showMonth,
      showYear = _ref.showYear,
      yearEnd = _ref.yearEnd,
      yearStart = _ref.yearStart;
  var defaultOptions = {
    errors: errors,
    register: register
  };
  return __jsx$y(React__default['default'].Fragment, null, __jsx$y(Space, {
    marginBottom: "0.5rem"
  }, label), __jsx$y(Row, null, showDay && __jsx$y(Column, {
    md: 4
  }, __jsx$y(SelectField, _extends({}, defaultOptions, {
    data: {
      'data-index': index,
      'data-name': 'day'
    },
    name: "day".concat(name),
    options: DAYS
  }))), showMonth && __jsx$y(Column, {
    md: 4
  }, __jsx$y(SelectField, _extends({}, defaultOptions, {
    data: {
      'data-index': index,
      'data-name': 'month'
    },
    name: "month".concat(name),
    options: [{
      disabled: true,
      text: placeHolder !== null && placeHolder !== void 0 ? placeHolder : 'Select month',
      value: ''
    }].concat(_toConsumableArray(MONTHS))
  }))), showYear && __jsx$y(Column, {
    md: 4
  }, __jsx$y(SelectField, _extends({}, defaultOptions, {
    data: {
      'data-index': index,
      'data-name': 'year'
    },
    name: "year".concat(name),
    placeholder: "Select year",
    range: [yearStart, yearEnd]
  })))));
};
DatePickerInput.propTypes = {
  data: propTypes.object,
  errors: propTypes.object.isRequired,
  index: propTypes.number,
  label: propTypes.string,
  name: propTypes.string,
  register: propTypes.func.isRequired,
  showDay: propTypes.bool,
  showMonth: propTypes.bool,
  showYear: propTypes.bool,
  yearEnd: propTypes.number,
  yearStart: propTypes.number
};
DatePickerInput.defaultProps = {
  day: true,
  index: 1,
  month: true,
  showDay: true,
  showMonth: true,
  showYear: true,
  year: true,
  yearEnd: 2020,
  yearStart: 1920
};

var __jsx$z = React__default['default'].createElement;
var Accept = function Accept(_ref) {
  var accept = _ref.accept;
  var files = accept.replace(/,/g, ' and ');
  return __jsx$z("em", null, "(Only ", files, " will be accepted)");
};
Accept.propTypes = {
  accept: propTypes.string.isRequired
};
Accept.defaultProps = {
  accept: 'image/jpeg,image/png'
};

var __jsx$A = React__default['default'].createElement;
var DropzonePreview = function DropzonePreview(_ref) {
  var file = _ref.file,
      handleRemove = _ref.handleRemove,
      index = _ref.index;
  return __jsx$A(StyledPreview, null, __jsx$A(Close, {
    click: handleRemove
  }), __jsx$A(Image$1, {
    alt: "Upload ".concat(index),
    src: file.preview
  }));
};
var StyledPreview = styled__default['default'].div.withConfig({
  displayName: "preview__StyledPreview",
  componentId: "bfmgta-0"
})(["border:1px solid #000;margin-bottom:1.5rem;z-index:1;"]);
DropzonePreview.propTypes = {
  file: propTypes.any.isRequired,
  handleRemove: propTypes.func.isRequired,
  index: propTypes.any.isRequired
};

var __jsx$B = React__default['default'].createElement;
var Dropzone = function Dropzone(_ref) {
  var accept = _ref.accept,
      disabled = _ref.disabled,
      multiple = _ref.multiple,
      onChange = _ref.onChange;

  var _useState = React.useState([]),
      files = _useState[0],
      setFiles = _useState[1];

  React.useEffect(function () {
    return function () {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach(function (file) {
        return URL.revokeObjectURL(file.preview);
      });
    };
  }, [files]);

  var _useDropzone = reactDropzone.useDropzone({
    accept: accept,
    disabled: disabled,
    multiple: multiple,
    onDrop: function onDrop(acceptedFiles) {
      var accepted = acceptedFiles.map(function (file) {
        return Object.assign(file, {
          preview: URL.createObjectURL(file)
        });
      });
      setFiles(accepted);

      if (onChange) {
        onChange(accepted);
      }
    }
  }),
      getRootProps = _useDropzone.getRootProps,
      getInputProps = _useDropzone.getInputProps,
      isDragActive = _useDropzone.isDragActive,
      isDragAccept = _useDropzone.isDragAccept,
      isDragReject = _useDropzone.isDragReject;

  var removeFile = function removeFile(file) {
    var newFiles = _toConsumableArray(files);

    newFiles.splice(newFiles.indexOf(file), 1);
    setFiles(newFiles);
  };

  var thumbs = function thumbs() {
    return __jsx$B(StyledContainer, {
      fluid: true
    }, __jsx$B(Row, null, files.map(function (file) {
      return __jsx$B(Column, {
        md: 3,
        key: file.name
      }, __jsx$B(DropzonePreview, {
        file: file,
        handleRemove: function handleRemove() {
          return removeFile(file);
        },
        index: file.name
      }));
    })));
  };

  return __jsx$B(React__default['default'].Fragment, null, __jsx$B(StyledContainer, _extends({
    dragActive: isDragActive,
    dragAccept: isDragAccept,
    dragReject: isDragReject,
    disabled: disabled
  }, getRootProps()), __jsx$B("input", getInputProps()), isDragAccept && __jsx$B(Text, null, "Accepted"), isDragReject && __jsx$B(Text, null, "Rejected"), isDragActive ? __jsx$B(Text, null, "Drop here") : __jsx$B(React__default['default'].Fragment, null, __jsx$B(Text, null, "Drop, or click to select"), accept && __jsx$B(Accept, {
    accept: accept
  }), multiple ? __jsx$B(Text, null, "Accepts multiple files") : __jsx$B(Text, null, "Single file only"))), files.length > 0 && thumbs());
};
var StyledContainer = styled__default['default'].div.withConfig({
  displayName: "dropzone__StyledContainer",
  componentId: "e0zwa5-0"
})(["background-color:", ";border-color:", ";border-radius:0.25rem;border-style:", ";border-width:2px;cursor:pointer;margin-bottom:1rem;height:25vh;padding:1rem;outline:none;overflow:auto;text-align:center;transition:border 0.24s ease-in-out;width:100%;", ""], function (_ref2) {
  var theme = _ref2.theme;
  return theme.COLOUR.light;
}, function (_ref3) {
  var dragAccept = _ref3.dragAccept,
      dragReject = _ref3.dragReject,
      COLOUR = _ref3.theme.COLOUR;
  return dragReject && COLOUR.danger || dragAccept && COLOUR.success;
}, function (_ref4) {
  var dragActive = _ref4.dragActive;
  return dragActive ? 'solid' : 'dashed';
}, function (_ref5) {
  var disabled = _ref5.disabled;
  return disabled && styled.css(["cursor:not-allowed;opacity:0.5;"]);
});
Dropzone.propTypes = {
  accept: propTypes.string,
  disabled: propTypes.bool,
  multiple: propTypes.bool
};
Dropzone.defaultProps = {
  accept: 'image/*',
  disabled: false,
  multiple: true
};

var __jsx$C = React__default['default'].createElement;
var DropzoneUploader = function DropzoneUploader(_ref) {
  var autoUpload = _ref.autoUpload,
      SubmitButtonComponent = _ref.SubmitButtonComponent,
      url = _ref.url;

  // Specify upload params and url for your files
  var getUploadParams = function getUploadParams(_ref2) {
    var meta = _ref2.meta;
    return {
      url: url
    };
  }; // Called every time a file's `status` changes


  var handleChangeStatus = function handleChangeStatus(_ref3, status) {
    var meta = _ref3.meta,
        file = _ref3.file;
    console.info(status, meta, file);
  }; // Receives array of files that are done uploading when submit button is clicked


  var handleSubmit = function handleSubmit(files, allFiles) {
    allFiles.forEach(function (f) {
      return f.remove();
    });
  };

  return __jsx$C(Dropzone__default['default'], {
    accept: "image/*,audio/*,video/*",
    autoUpload: autoUpload,
    canRestart: false,
    getUploadParams: getUploadParams,
    onChangeStatus: handleChangeStatus,
    onSubmit: handleSubmit // submitButtonDisabled={false}
    // SubmitButtonComponent={SubmitButtonComponent}

  });
};
DropzoneUploader.propTypes = {
  autoUpload: propTypes.bool,
  // handleSubmit: func.isRequired,
  url: propTypes.string
};
DropzoneUploader.defaultProps = {
  autoUpload: false,
  url: 'https://httpbin.org/post'
};

var __jsx$D = React__default['default'].createElement;
var DropzoneField = function DropzoneField(_ref) {
  var control = _ref.control,
      name = _ref.name,
      props = _objectWithoutProperties(_ref, ["control", "name"]);

  return __jsx$D(reactHookForm.Controller, _extends({
    as: Dropzone,
    control: control,
    name: name
  }, props));
};
DropzoneField.propTypes = {
  accept: propTypes.string,
  control: propTypes.object,
  disabled: propTypes.bool,
  errors: propTypes.object,
  multiple: propTypes.bool,
  name: propTypes.string
};
DropzoneField.defaultProps = {
  disabled: false,
  name: 'dropzone',
  multiple: false
};

var __jsx$E = React__default['default'].createElement;
var FormError = function FormError(_ref) {
  var message = _ref.message,
      colour = _ref.colour,
      props = _objectWithoutProperties(_ref, ["message", "colour"]);

  return __jsx$E(Space, {
    marginTop: SIZE.XS
  }, __jsx$E(StyledSmall, {
    color: colour
  }, message));
};
var StyledSmall = styled__default['default'].small.withConfig({
  displayName: "error__StyledSmall",
  componentId: "qya04k-0"
})(["color:", ";display:block;font-size:0.625rem;font-weight:400;width:100%;"], function (_ref2) {
  var theme = _ref2.theme,
      colour = _ref2.colour;
  return colour !== null && colour !== void 0 ? colour : theme.COLOUR.error;
});
FormError.propTypes = {
  message: propTypes.string.isRequired,
  colour: propTypes.string
};

var __jsx$F = React__default['default'].createElement;
var CurrencyInput = function CurrencyInput(_ref) {
  var currencySymbol = _ref.currencySymbol,
      errors = _ref.errors,
      label = _ref.label,
      min = _ref.min,
      name = _ref.name,
      register = _ref.register,
      show = _ref.show,
      style = _ref.style,
      size = _ref.size,
      theme = _ref.theme,
      vat = _ref.vat;
  return __jsx$F(FormLabel, {
    show: show,
    label: label
  }, __jsx$F(InputGroup, {
    theme: theme,
    error: errors[name]
  }, __jsx$F(InputGroupAddon, {
    addonType: "prepend",
    error: errors[name],
    text: true,
    theme: theme,
    size: size
  }, currencySymbol), __jsx$F(FormField, {
    errors: errors,
    min: min,
    name: name,
    register: register,
    style: style,
    size: size,
    withAddon: true,
    step: "any",
    type: "number"
  }), vat && __jsx$F(InputGroupAddon, {
    addonType: "append",
    error: errors[name],
    text: true,
    theme: theme,
    size: size
  }, "Inc VAT")));
};
CurrencyInput.propTypes = {
  currencySymbol: propTypes.oneOfType([propTypes.object, propTypes.string]),
  errors: propTypes.object.isRequired,
  label: propTypes.string.isRequired,
  min: propTypes.number,
  name: propTypes.string.isRequired,
  register: propTypes.func.isRequired,
  show: propTypes.bool,
  style: propTypes.node,
  vat: propTypes.bool
};
CurrencyInput.defaultProps = {
  currencySymbol: '£',
  min: 0,
  show: true,
  vat: false
};

var __jsx$G = React__default['default'].createElement;
var FormField = function FormField(_ref) {
  var disabled = _ref.disabled,
      errors = _ref.errors,
      helperMessage = _ref.helperMessage,
      name = _ref.name,
      placeholder = _ref.placeholder,
      readOnly = _ref.readOnly,
      regExp = _ref.regExp,
      register = _ref.register,
      size = _ref.size,
      validate = _ref.validate,
      withAddon = _ref.withAddon,
      props = _objectWithoutProperties(_ref, ["disabled", "errors", "helperMessage", "name", "placeholder", "readOnly", "regExp", "register", "size", "validate", "withAddon"]);

  var _useState = React.useState(false),
      isTyping = _useState[0],
      setisTyping = _useState[1];

  return __jsx$G(FieldHOC, _extends({
    "aria-label": name,
    component: StyledInput,
    disabled: disabled,
    helperMessage: helperMessage,
    onKeyDown: function onKeyDown(e) {
      setisTyping(true);
    },
    onBlur: function onBlur() {
      setisTyping(false);
    },
    errors: errors[name],
    isTyping: isTyping,
    key: name,
    name: name,
    placeholder: placeholder,
    readOnly: readOnly,
    register: register,
    size: size,
    withAddon: withAddon
  }, props));
};
var StyledInput = styled__default['default'].input.attrs(function (props) {
  return {
    autoComplete: 'off',
    autoFocus: false
  };
}).withConfig({
  displayName: "input__StyledInput",
  componentId: "sc-1ltkrnx-0"
})(["", " ", " ", ""], function (props) {
  return COMMON_INPUT_STYLES(props);
}, function (_ref2) {
  var errors = _ref2.errors;
  return errors && styled.css(["", ""], function (props) {
    return ERROR_STYLE(props);
  });
}, function (_ref3) {
  var size = _ref3.size;

  switch (size) {
    case SIZE.SM:
      return styled.css(["height:1.5rem;font-size:0.625rem;"]);

    case SIZE.MD:
      return styled.css(["height:1.875rem;"]);

    case SIZE.LG:
      return styled.css(["height:2.25rem;"]);

    default:
      return styled.css(["height:2.25rem;"]);
  }
});
FormField.propTypes = {
  accept: propTypes.string,
  autoComplete: propTypes.oneOfType([propTypes.bool, propTypes.string]),
  autoFocus: propTypes.bool,
  disabled: propTypes.bool,
  errors: propTypes.object.isRequired,
  helperMessage: propTypes.string,
  label: propTypes.string,
  name: propTypes.string.isRequired,
  placeholder: propTypes.string,
  readOnly: propTypes.bool,
  register: propTypes.func.isRequired,
  size: propTypes.oneOf([SIZE.SM, SIZE.MD, SIZE.LG]),
  style: propTypes.object,
  type: propTypes.string,
  value: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.bool, propTypes.arrayOf(propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.bool]))])
};
FormField.defaultProps = {
  autoComplete: 'off',
  autoFocus: false,
  disabled: false,
  readOnly: false,
  type: 'text'
};

var __jsx$H = React__default['default'].createElement;
var PercentInput = function PercentInput(_ref) {
  var errors = _ref.errors,
      label = _ref.label,
      name = _ref.name,
      register = _ref.register,
      show = _ref.show,
      symbol = _ref.symbol;
  return __jsx$H(FormLabel, {
    show: show,
    label: label
  }, __jsx$H(InputGroup, null, __jsx$H(FormField, {
    errors: errors,
    name: name,
    register: register,
    step: "any",
    type: "number"
  }), __jsx$H(InputGroupAddon, {
    addonType: "append",
    text: true
  }, symbol)));
};
PercentInput.propTypes = {
  errors: propTypes.object.isRequired,
  label: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  register: propTypes.func.isRequired,
  show: propTypes.bool,
  symbol: propTypes.oneOfType([propTypes.object, propTypes.string])
};
PercentInput.defaultProps = {
  show: true,
  symbol: '%'
};

var __jsx$I = React__default['default'].createElement;
var Form = function Form(_ref) {
  var children = _ref.children,
      className = _ref.className,
      handleSubmit = _ref.handleSubmit,
      id = _ref.id,
      style = _ref.style;
  return __jsx$I(StyledForm, {
    className: className,
    id: id,
    onSubmit: handleSubmit,
    style: style
  }, children);
};
var StyledForm = styled__default['default'].form.withConfig({
  displayName: "form__StyledForm",
  componentId: "sc-88j1vz-0"
})(["margin-bottom:1rem;"]);
Form.propTypes = {
  children: propTypes.node.isRequired,
  className: propTypes.any,
  handleSubmit: propTypes.func.isRequired,
  id: propTypes.string,
  style: propTypes.any
};

var __jsx$J = React__default['default'].createElement;

function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$7(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$7(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var FieldHOC = function FieldHOC(_ref) {
  var Component = _ref.component,
      errors = _ref.errors,
      children = _ref.children,
      helperMessage = _ref.helperMessage,
      register = _ref.register,
      show = _ref.show,
      showError = _ref.showError,
      validate = _ref.validate,
      props = _objectWithoutProperties(_ref, ["component", "errors", "children", "helperMessage", "register", "show", "showError", "validate"]);

  return __jsx$J(React__default['default'].Fragment, null, __jsx$J(Component, _extends({
    "aria-label": props.name,
    errors: errors === null || errors === void 0 ? void 0 : errors.message,
    key: props.name,
    name: props.name,
    ref: register(_objectSpread$7(_objectSpread$7(_objectSpread$7(_objectSpread$7(_objectSpread$7({
      validate: validate
    }, props.max && {
      max: props.max
    }), props.min && {
      min: props.min
    }), props.maxLength && {
      maxLength: props.maxLength
    }), props.minLength && {
      minLength: props.minLength
    }), props.regExp && {
      pattern: new RegExp(props.regExp)
    })),
    style: _objectSpread$7({
      display: !show ? 'none' : undefined
    }, props.style)
  }, props), children), helperMessage && __jsx$J(Space, {
    marginTop: SIZE.SM,
    marginBottom: SIZE.XS
  }, __jsx$J(Text, {
    size: SIZE.XS,
    context: "default"
  }, helperMessage)), showError && __jsx$J(FormError, {
    message: (errors === null || errors === void 0 ? void 0 : errors.message) || ''
  }));
};
FieldHOC.defaultProps = {
  errors: {},
  register: function register() {},
  show: true,
  showError: false
};

var __jsx$K = React__default['default'].createElement;
var colourPlate = {
  dark: COLOUR$1.darkText,
  darkBorder: COLOUR$1.grey80,
  "default": COLOUR$1.grey,
  disabled: COLOUR$1.darkGrey,
  error: COLOUR$1.error,
  readOnly: COLOUR$1.grey,
  success: COLOUR$1.formSuccess,
  warning: COLOUR$1.gold40
};
var inputThemeColourPlate = {
  dark: 'darkText',
  darkBorder: 'grey80',
  "default": 'grey',
  disabled: 'darkGrey',
  error: 'error',
  readOnly: 'grey',
  success: 'formSuccess',
  warning: 'gold40'
};
var InputTypes = {
  NUMBER: 'number',
  TEXT: 'text',
  PASSWORD: 'password'
};

var colourProvider = function colourProvider(theme, decoration) {
  if (theme === null || theme === void 0 ? void 0 : theme.COLOUR) {
    return theme.COLOUR[inputThemeColourPlate[decoration]];
  } else {
    return colourPlate[decoration];
  }
};

var Input = function Input(_ref) {
  var _errors$name;

  var adornments = _ref.adornments,
      decoration = _ref.decoration,
      errors = _ref.errors,
      label = _ref.label,
      message = _ref.message,
      name = _ref.name,
      placeholder = _ref.placeholder,
      register = _ref.register,
      size = _ref.size,
      type = _ref.type,
      props = _objectWithoutProperties(_ref, ["adornments", "decoration", "errors", "label", "message", "name", "placeholder", "register", "size", "type"]);

  return __jsx$K(Wrapper, {
    theme: props.theme,
    decoration: decoration,
    readOnly: props.readOnly
  }, label && __jsx$K(React__default['default'].Fragment, null, __jsx$K(Space, {
    marginBottom: "xs"
  }, __jsx$K(StyledLabel$1, {
    theme: props.theme,
    content: label
  }))), __jsx$K(Space, {
    marginBottom: "xs"
  }, __jsx$K(InputWrapper, {
    size: size
  }, (adornments === null || adornments === void 0 ? void 0 : adornments.startAdornment) && __jsx$K(Adornment, {
    startAdornment: true,
    size: size
  }, adornments.startAdornment), __jsx$K(StyledInput$1, _extends({
    adornments: adornments,
    disabled: props.disabled || decoration === InputDecorationTypes.DISABLED,
    message: message,
    name: name,
    placeholder: placeholder,
    readOnly: props.readOnly || decoration === InputDecorationTypes.READONLY,
    ref: register,
    size: size,
    type: type,
    required: ((_errors$name = errors[name]) === null || _errors$name === void 0 ? void 0 : _errors$name.type) === 'required'
  }, props)), (adornments === null || adornments === void 0 ? void 0 : adornments.endAdornment) && __jsx$K(Adornment, {
    size: size
  }, adornments.endAdornment))), message && __jsx$K(StyledMessage, null, message));
};
var StyledLabel$1 = styled__default['default'](Text).withConfig({
  displayName: "input__StyledLabel",
  componentId: "sc-12vpjez-0"
})(["color:", ";font-size:0.75rem;"], function (_ref2) {
  var theme = _ref2.theme;
  return colourProvider(theme, 'dark');
});
var StyledMessage = styled__default['default'](Text).withConfig({
  displayName: "input__StyledMessage",
  componentId: "sc-12vpjez-1"
})(["font-size:0.625rem;color:", ";"], function (_ref3) {
  var theme = _ref3.theme,
      decoration = _ref3.decoration;
  return colourProvider(theme, 'disabled');
});
var InputWrapper = styled__default['default'].div.withConfig({
  displayName: "input__InputWrapper",
  componentId: "sc-12vpjez-2"
})(["align-items:center;display:flex;width:100%;", ""], function (_ref4) {
  var size = _ref4.size;

  switch (size) {
    case SIZE.SM:
      return styled.css(["height:1.5rem;", "{padding:0.5rem 1rem;}"], Adornment);

    case SIZE.MD:
      return styled.css(["height:1.875rem;._,", "{padding:0.75rem 1.25rem;}"], Adornment);

    case SIZE.LG:
      return styled.css(["height:2.25rem;.__,", "{padding:0.875rem 1.625rem;}"], Adornment);

    default:
      return styled.css(["height:1.875rem;.___,", "{padding:0.75rem 1.25rem;}"], Adornment);
  }
});
var withAdornmentStyles = styled.css(["", ""], function (_ref5) {
  var adornments = _ref5.adornments;
  return adornments && styled.css(["", " ", ""], adornments.startAdornment && styled.css(["border-bottom-left-radius:0;border-top-left-radius:0;"]), adornments.endAdornment && styled.css(["border-bottom-right-radius:0;border-top-right-radius:0;"]));
});
var StyledInput$1 = styled__default['default'].input.attrs(function (props) {
  return {
    'aria-label': props.name,
    autoComplete: 'off',
    autoFocus: false
  };
}).withConfig({
  displayName: "input__StyledInput",
  componentId: "sc-12vpjez-3"
})(["border:1px solid;border-left-width:", ";border-radius:0.25rem;font-size:0.75rem;height:100%;outline:none;padding:0 0.625rem;width:100%;&:focus{border-color:", ";}::placeholder{color:", ";opacity:1;}", ""], function (_ref6) {
  var required = _ref6.required,
      adornments = _ref6.adornments;
  return required === true && !adornments.startAdornment && ' 0.5rem';
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme ? theme.COLOUR.primary : '#245EE5';
}, function (_ref8) {
  var theme = _ref8.theme;
  return colourProvider(theme, 'danger');
}, withAdornmentStyles);
var Wrapper = styled__default['default'].div.withConfig({
  displayName: "input__Wrapper",
  componentId: "sc-12vpjez-4"
})(["width:100%;", ""], function (_ref9) {
  var decoration = _ref9.decoration,
      readOnly = _ref9.readOnly,
      theme = _ref9.theme;
  return styled.css(["", "{color:", ";}", ",", "{border-color:", ";", "}", "{background-color:", ";}"], StyledMessage, decoration === InputDecorationTypes.DEFAULT || decoration === InputDecorationTypes.WARNING || decoration === InputDecorationTypes.READONLY ? colourProvider(theme, 'dark') : colourProvider(theme, decoration), StyledInput$1, Adornment, decoration !== InputDecorationTypes.DEFAULT ? colourProvider(theme, decoration) : colourProvider(theme, 'dark'), decoration === InputDecorationTypes.READONLY || readOnly === true && styled.css(["background:transparent;pointer-events:none;"]), Adornment, colourProvider(theme, decoration));
});
Input.propTypes = {
  adornments: propTypes.shape({
    startAdornment: propTypes.node,
    endAdornment: propTypes.node
  }),
  errors: propTypes.object.isRequired,
  label: propTypes.string,
  name: propTypes.string.isRequired,
  placeholder: propTypes.string,
  register: propTypes.func.isRequired,
  type: propTypes.oneOf(arrayOfValues(InputTypes))
};
Input.defaultProps = {
  decoration: 'default',
  type: InputTypes.TEXT,
  size: SIZE.MD
};

var Adornment = styled__default['default'].div.withConfig({
  displayName: "adornment__Adornment",
  componentId: "c7tn09-0"
})(["align-items:center;border:1px solid;display:flex;height:100%;", ""], function (_ref) {
  var startAdornment = _ref.startAdornment;
  return startAdornment ? styled.css(["border-bottom-left-radius:'0.25rem';border-right:none;border-top-left-radius:'0.25rem';"]) : styled.css(["border-bottom-right-radius:'0.25rem';border-left:none;border-top-right-radius:'0.25rem';"]);
});

var InputDecorationTypes = {
  DEFAULT: 'default',
  DISABLED: 'disabled',
  ERROR: 'error',
  READONLY: 'readOnly',
  SUCCESS: 'success',
  WARNING: 'warning'
};

var __jsx$L = React__default['default'].createElement;
var InputGroupAddon = function InputGroupAddon(_ref) {
  var addonType = _ref.addonType,
      className = _ref.className,
      children = _ref.children,
      context = _ref.context,
      error = _ref.error,
      size = _ref.size,
      text = _ref.text,
      theme = _ref.theme;
  return __jsx$L(StyledInputGroupAddon, {
    addonType: addonType,
    className: addonType,
    children: children,
    context: context,
    error: error,
    size: size,
    text: text,
    theme: theme
  });
};
var StyledInputGroupAddon = styled__default['default'].div.withConfig({
  displayName: "addon__StyledInputGroupAddon",
  componentId: "sc-143wx32-0"
})(["align-items:center;display:flex;& > *{height:100%;}", " ", " &,button{", " ", "}"], function (_ref2) {
  var text = _ref2.text;
  return text && styled.css(["background-color:", ";border:1px solid ", ";border-radius:", ";color:", ";display:flex;font-size:0.75rem;font-weight:400;line-height:1;margin-bottom:0;padding:0.375rem 1.25rem;text-align:center;transition:background-color 0.15s linear;white-space:nowrap;"], function (_ref3) {
    var theme = _ref3.theme,
        error = _ref3.error;
    return error ? theme.COLOUR.danger : theme.COLOUR.grey;
  }, function (_ref4) {
    var theme = _ref4.theme,
        error = _ref4.error;
    return error ? theme.COLOUR.danger : theme.COLOUR.darkGrey;
  }, function (_ref5) {
    var theme = _ref5.theme;
    return theme.FORM_ELEMENTS_STYLES.inputBorderRadius;
  }, function (_ref6) {
    var theme = _ref6.theme,
        error = _ref6.error;
    return error ? theme.COLOUR.light : theme.COLOUR.blackText;
  });
}, function (_ref7) {
  var size = _ref7.size;
  return size === SIZE.SM && styled.css(["font-size:0.625rem;padding:0 0.75rem;"]);
}, function (_ref8) {
  var addonType = _ref8.addonType;
  return addonType === 'prepend' && styled.css(["border-top-right-radius:0;border-bottom-right-radius:0;margin-right:-1px;"]);
}, function (_ref9) {
  var addonType = _ref9.addonType;
  return addonType === 'append' && styled.css(["border-top-left-radius:0;border-bottom-left-radius:0;margin-left:-1px;"]);
});
InputGroupAddon.propTypes = {
  addonType: propTypes.oneOf(['prepend', 'append']),
  className: propTypes.any,
  children: propTypes.node,
  context: propTypes.oneOf(Object.values(CONTEXT)),
  text: propTypes.bool
};
InputGroupAddon.defaultProps = {
  addonType: 'append',
  context: 'light'
};

var __jsx$M = React__default['default'].createElement;
var InputGroup = function InputGroup(_ref) {
  var children = _ref.children,
      error = _ref.error,
      size = _ref.size,
      theme = _ref.theme;
  return __jsx$M(StyledInputGroup, {
    children: children,
    error: error,
    size: size,
    theme: theme
  });
};
var StyledInputGroup = styled__default['default'].div.withConfig({
  displayName: "group__StyledInputGroup",
  componentId: "ghbmob-0"
})(["align-items:stretch;display:flex;flex-wrap:wrap;position:relative;width:100%;input{flex:1 1 0%;min-width:0;margin-bottom:0;position:relative;:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0;}:first-child{border-top-right-radius:0;border-bottom-right-radius:0;}}", ""], function (_ref2) {
  var error = _ref2.error,
      theme = _ref2.theme;
  return error && theme && styled.css(["&:hover{.prepend,.append{background:", ";border-color:", ";}}"], theme.COLOUR.lightRed, theme.COLOUR.lightRed);
});
InputGroup.propTypes = {
  size: propTypes.string
};
InputGroup.defaultProps = {
  size: 'md'
};

var __jsx$N = React__default['default'].createElement;
var BLOCK_TYPES = [{
  label: 'H1',
  style: 'header-one'
}, {
  label: 'H2',
  style: 'header-two'
}, {
  label: 'H3',
  style: 'header-three'
}, {
  label: 'H4',
  style: 'header-four'
}, {
  label: 'H5',
  style: 'header-five'
}, {
  label: 'H6',
  style: 'header-six'
}, {
  label: 'Blockquote',
  style: 'blockquote'
}, {
  label: 'UL',
  style: 'unordered-list-item'
}, {
  label: 'OL',
  style: 'ordered-list-item'
}, {
  label: 'Code Block',
  style: 'code-block'
}];
var INLINE_STYLES = [{
  label: 'Bold',
  style: 'BOLD'
}, {
  label: 'Italic',
  style: 'ITALIC'
}, {
  label: 'Underline',
  style: 'UNDERLINE'
}];
var BlockStyleControls = function BlockStyleControls(props) {
  var editorState = props.editorState;
  var selection = editorState.getSelection();
  var blockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();
  return __jsx$N("div", {
    className: "RichEditor-controls"
  }, BLOCK_TYPES.map(function (type) {
    return __jsx$N(StyleButton, {
      key: type.label,
      active: type.style === blockType,
      label: type.label,
      onToggle: props.onToggle,
      style: type.style
    });
  }));
};
var InlineStyleControls = function InlineStyleControls(props) {
  var currentStyle = props.editorState.getCurrentInlineStyle();
  return __jsx$N("div", {
    className: "RichEditor-controls"
  }, INLINE_STYLES.map(function (type) {
    return __jsx$N(StyleButton, {
      key: type.label,
      active: currentStyle.has(type.style),
      label: type.label,
      onToggle: props.onToggle,
      style: type.style
    });
  }));
};
var styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2
  }
};
var getBlockStyle = function getBlockStyle(block) {
  switch (block.getType()) {
    case 'blockquote':
      return 'RichEditor-blockquote';

    default:
      return null;
  }
};

var StyleButton = function StyleButton(_ref) {
  var active = _ref.active,
      label = _ref.label,
      onToggle = _ref.onToggle,
      style = _ref.style;

  var handleToggle = function handleToggle(e) {
    e.preventDefault();
    onToggle(style);
  };

  return __jsx$N(StyledRichButton, {
    active: active,
    onMouseDown: handleToggle
  }, label);
};

var StyledRichButton = styled__default['default'].span.withConfig({
  displayName: "config__StyledRichButton",
  componentId: "sc-18t2mch-0"
})(["cursor:pointer;margin:0 0.5rem;", ""], function (_ref2) {
  var active = _ref2.active;
  return active && styled.css(["color:red;"]);
});

var __jsx$O = React__default['default'].createElement;
var IUIRich = function IUIRich() {
  var _useState = React.useState(draftJs.EditorState.createEmpty()),
      editorState = _useState[0],
      seteditorState = _useState[1];

  var ref = React.useRef(null);

  var focus = function focus() {
    ref.current.focus();
  };

  var handleChange = function handleChange(EditorState) {
    return seteditorState(EditorState);
  };

  var onKeyCommand = function onKeyCommand(command) {
    var newState = draftJs.RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      handleChange(newState);
      return true;
    }

    return false;
  };

  var handleTab = function handleTab(e) {
    var maxDepth = 4;
    handleChange(draftJs.RichUtils.onTab(e, editorState, maxDepth));
  };

  var toggleBlockType = function toggleBlockType(blockType) {
    handleChange(draftJs.RichUtils.toggleBlockType(editorState, blockType));
  };

  var toggleInlineStyle = function toggleInlineStyle(inlineStyle) {
    handleChange(draftJs.RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };

  return __jsx$O("div", {
    onClick: focus
  }, __jsx$O(BlockStyleControls, {
    editorState: editorState,
    onToggle: toggleBlockType
  }), __jsx$O(InlineStyleControls, {
    editorState: editorState,
    onToggle: toggleInlineStyle
  }), __jsx$O(draftJs.Editor, {
    blockStyleFn: getBlockStyle,
    customStyleMap: styleMap,
    editorState: editorState,
    handleKeyCommand: onKeyCommand,
    onChange: handleChange,
    onTab: handleTab,
    placeholder: "write here...",
    ref: ref,
    spellCheck: true
  }));
};

var __jsx$P = React__default['default'].createElement;
var FormLabel = function FormLabel(_ref) {
  var children = _ref.children,
      id = _ref.id,
      label = _ref.label,
      show = _ref.show,
      size = _ref.size;
  return __jsx$P(StyledLabel$2, {
    hasChild: children,
    htmlFor: id,
    show: show
  }, __jsx$P(Space, {
    marginBottom: "xs"
  }, __jsx$P(Text, {
    size: size !== null && size !== void 0 ? size : 'md',
    colour: "darkText",
    content: label
  })), children);
};
var StyledLabel$2 = styled__default['default'].label.withConfig({
  displayName: "label__StyledLabel",
  componentId: "fmiqu3-0"
})(["display:", ";margin-bottom:", ";.react-datepicker-wrapper{width:100%;}"], function (_ref2) {
  var show = _ref2.show;
  return show ? 'block' : 'none';
}, function (_ref3) {
  var hasChild = _ref3.hasChild;
  return !hasChild ? '0' : '1rem';
});
FormLabel.propTypes = {
  children: propTypes.node,
  id: propTypes.string,
  label: propTypes.string,
  show: propTypes.bool
};
FormLabel.defaultProps = {
  show: true
};

var __jsx$Q = React__default['default'].createElement;
var RadioComponent = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var disabled = _ref.disabled,
      props = _objectWithoutProperties(_ref, ["disabled"]);

  return __jsx$Q(StyledInput$2, _extends({
    disabled: disabled,
    type: "radio",
    ref: ref
  }, props));
});
var StyledInput$2 = styled__default['default'].input.withConfig({
  displayName: "component__StyledInput",
  componentId: "sc-1lw7efx-0"
})(["cursor:pointer;margin-right:0.5rem;"]);
RadioComponent.propTypes = {
  disabled: propTypes.bool
};
RadioComponent.defaultProps = {
  stacked: false
};

var __jsx$R = React__default['default'].createElement;
var RadioField = function RadioField(_ref) {
  var data = _ref.data,
      errors = _ref.errors,
      legend = _ref.legend,
      stacked = _ref.stacked,
      props = _objectWithoutProperties(_ref, ["data", "errors", "legend", "stacked"]);

  return __jsx$R(StyledFieldset$1, {
    error: errors[props.name]
  }, legend && __jsx$R(StyledLegend, {
    error: errors[props.name]
  }, legend), data.map(function (_ref2) {
    var disabled = _ref2.disabled,
        label = _ref2.label,
        data = _objectWithoutProperties(_ref2, ["disabled", "label"]);

    return __jsx$R(StyledLabel$3, {
      htmlFor: data.id,
      key: data.id,
      stacked: stacked
    }, __jsx$R(FieldHOC, _extends({
      component: RadioComponent,
      disabled: disabled,
      errors: errors[props.name],
      showError: false
    }, data, props)), label);
  }));
};
var StyledFieldset$1 = styled__default['default'].fieldset.withConfig({
  displayName: "radio__StyledFieldset",
  componentId: "wmvn6q-0"
})(["border-radius:0.25rem;", ""], function (_ref3) {
  var error = _ref3.error;
  return error && styled.css(["", " padding:0.5rem;"], function (props) {
    return ERROR_STYLE(props);
  });
});
var StyledLegend = styled__default['default'].legend.withConfig({
  displayName: "radio__StyledLegend",
  componentId: "wmvn6q-1"
})(["", ""], function (_ref4) {
  var error = _ref4.error;
  return error && styled.css(["padding:0 0.5rem;"]);
});
var StyledLabel$3 = styled__default['default'].label.withConfig({
  displayName: "radio__StyledLabel",
  componentId: "wmvn6q-2"
})(["cursor:pointer;margin-right:1.25rem;position:relative;", ""], function (_ref5) {
  var stacked = _ref5.stacked;
  return stacked && styled.css(["display:block;margin:0.5rem 0;"]);
});
RadioField.propTypes = {
  data: propTypes.array.isRequired,
  legend: propTypes.string,
  stacked: propTypes.bool
};
RadioField.defaultProps = {
  data: [],
  stacked: false
};

var reactSelectDefaultProps = function reactSelectDefaultProps(defaultStyles) {
  return {
    backspaceRemovesValue: true,
    closeMenuOnSelect: true,
    closeMenuOnScroll: false,
    components: {},
    controlShouldRenderValue: true,
    defaultValue: undefined,
    error: '',
    errors: {},
    escapeClearsValue: false,
    isDisabled: false,
    isLoading: false,
    isMulti: false,
    isRtl: false,
    isSearchable: true,
    loadingMessage: function loadingMessage() {
      return 'Loading...';
    },
    maxMenuHeight: 300,
    minMenuHeight: 140,
    menuPlacement: 'bottom',
    menuPosition: 'absolute',
    menuShouldBlockScroll: false,
    noOptionsMessage: function noOptionsMessage() {
      return 'No options';
    },
    openMenuOnFocus: false,
    openMenuOnClick: true,
    options: [],
    pageSize: 5,
    placeholder: 'Select...',
    screenReaderStatus: function screenReaderStatus(_ref) {
      var count = _ref.count;
      return "".concat(count, " result").concat(count !== 1 ? 's' : '', " available");
    },
    styles: defaultStyles,
    tabIndex: '0',
    tabSelectsValue: true
  };
};

var reactSelectPropTypes = {
  // Whether select is async or not
  async: propTypes.bool,
  // Focus the control when it is mounted
  autoFocus: propTypes.bool,
  // Remove the currently focused option when the user presses backspace
  backspaceRemovesValue: propTypes.bool,
  // Remove focus from the input when the user selects an option (handy for dismissing the keyboard
  // on touch devices)
  blurInputOnSelect: propTypes.bool,
  // When the user reaches the top/bottom of the menu, prevent scroll on the scroll-parent
  captureMenuScroll: propTypes.bool,
  // Close the select menu when the user selects an option
  closeMenuOnSelect: propTypes.bool,
  // If `true`, close the select menu when the user scrolls the document/body. If a function, takes
  // a standard javascript `ScrollEvent` you return a boolean: `true` => The menu closes
  // `false` => The menu stays open This is useful when you have a scrollable modal and want to
  // portal the menu out, but want to avoid graphical issues.
  closeMenuOnScroll: propTypes.oneOfType([propTypes.bool, propTypes.func]),
  // This complex object includes all the compositional components that are used in `react-select`.
  // If you wish to overwrite a component, pass in an object with the appropriate namespace. If you
  // only wish to restyle a component, we recommend using the `styles` prop instead. For a list of
  // the components that can be passed in, and the shape that will be passed to them, see
  // [the components docs](/components)
  components: propTypes.object,
  // Whether the value of the select, e.g. SingleValue, should be displayed in the control.
  controlShouldRenderValue: propTypes.bool,
  defaultValue: propTypes.oneOfType([propTypes.array, propTypes.object]),
  // Delimiter used to join multiple values into a single HTML Input value
  delimiter: propTypes.string,
  // Clear all values when the user presses escape AND the menu is closed
  escapeClearsValue: propTypes.bool,
  // Hide the selected option from the menu
  hideSelectedOptions: propTypes.bool,
  // The id to set on the SelectContainer component
  id: propTypes.string,
  // The id of the search input
  inputId: propTypes.string,
  // Define an id prefix for the select components e.g. {your-id}-value
  instanceId: propTypes.oneOfType([propTypes.number, propTypes.string]),
  // Is the select value clearable
  isClearable: propTypes.bool,
  // Is the select disabled
  isDisabled: propTypes.bool,
  // Is the select in a state of loading (async)
  isLoading: propTypes.bool,
  // Support multiple selected options
  isMulti: propTypes.bool,
  // Is the select direction right-to-left
  isRtl: propTypes.bool,
  // Whether to enable search functionality
  isSearchable: propTypes.bool,
  // Label text
  label: propTypes.string,
  // Async: Text to display when loading options
  loadingMessage: propTypes.func,
  // Minimum height of the menu before flipping
  minMenuHeight: propTypes.number,
  // Maximum height of the menu before scrolling
  maxMenuHeight: propTypes.number,
  // Whether the menu is open
  menuIsOpen: propTypes.bool,
  // Default placement of the menu in relation to the control. 'auto' will flip when there isn't
  // enough space below the control.
  menuPlacement: propTypes.oneOf(['auto', 'bottom', 'top']),
  // The CSS position value of the menu, when "fixed" extra layout management is required
  menuPosition: propTypes.oneOf(['absolute', 'fixed']),
  // Whether to block scroll events when the menu is open
  menuShouldBlockScroll: propTypes.bool,
  // Whether the menu should be scrolled into view when it opens
  menuShouldScrollIntoView: propTypes.bool,
  // Text to display when there are no options
  noOptionsMessage: propTypes.func,
  // Handle blur events on the control
  onBlur: propTypes.func,
  // Handle focus events on the control
  onFocus: propTypes.func,
  // Handle key down events on the select
  onKeyDown: propTypes.func,
  // Handle the menu opening
  onMenuOpen: propTypes.func,
  // Handle the menu closing
  onMenuClose: propTypes.func,
  // Fired when the user scrolls to the top of the menu
  onMenuScrollToTop: propTypes.func,
  // Fired when the user scrolls to the bottom of the menu
  onMenuScrollToBottom: propTypes.func,
  // Allows control of whether the menu is opened when the Select is focused
  openMenuOnFocus: propTypes.bool,
  // Allows control of whether the menu is opened when the Select is clicked
  openMenuOnClick: propTypes.bool,
  // Array of options that populate the select menu
  options: propTypes.array.isRequired,
  // Number of options to jump in menu when page{up|down} keys are used
  pageSize: propTypes.number,
  // Placeholder for the select value
  placeholder: propTypes.string,
  // Status to relay to screen readers
  screenReaderStatus: propTypes.func,
  // The value of the select; reflected by the selected option
  selectedOption: propTypes.oneOfType([propTypes.array, propTypes.object]),
  // Sets the tabIndex attribute on the input
  tabIndex: propTypes.string,
  // Select the currently focused option when the user presses tab
  tabSelectsValue: propTypes.bool
};

function ownKeys$8(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$8(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$8(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$8(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var defaultStyles = {
  container: function container(base, state) {
    return _objectSpread$8(_objectSpread$8({}, base), {}, {
      margin: '0'
    });
  },
  control: function control(base, state) {
    return _objectSpread$8(_objectSpread$8({}, base), {}, {
      backgroundColor: '#fff',
      borderColor: COLOUR.dark,
      borderRadius: '0.25rem',
      color: COLOUR.dark,
      fontSize: '1rem',
      height: '3rem',
      lineHeight: 1.5,
      padding: '0'
    });
  },
  menu: function menu(base, state) {
    return _objectSpread$8(_objectSpread$8({}, base), {}, {
      borderColor: COLOUR.dark,
      boxShadow: '0 0 0 0.2rem rgba(0, 123, 255, 0.25)',
      color: COLOUR.dark
    });
  },
  multiValue: function multiValue(base, state) {
    return state.data.isFixed ? _objectSpread$8(_objectSpread$8({}, base), {}, {
      backgroundColor: 'gray'
    }) : base;
  },
  multiValueLabel: function multiValueLabel(base, state) {
    return state.data.isFixed ? _objectSpread$8(_objectSpread$8({}, base), {}, {
      fontWeight: 'bold',
      color: 'white',
      paddingRight: 6
    }) : base;
  },
  multiValueRemove: function multiValueRemove(base, state) {
    return state.data.isFixed ? _objectSpread$8(_objectSpread$8({}, base), {}, {
      display: 'none'
    }) : base;
  },
  placeholder: function placeholder(base, state) {
    return {
      color: '#003753'
    };
  },
  singleValue: function singleValue(base, state) {
    return _objectSpread$8(_objectSpread$8({}, base), {}, {
      color: '#003753'
    });
  }
};

var __jsx$S = React__default['default'].createElement;
var ReactSelectField = function ReactSelectField(_ref) {
  var async = _ref.async,
      cacheOptions = _ref.cacheOptions,
      control = _ref.control,
      defaultOptions = _ref.defaultOptions,
      defaultValue = _ref.defaultValue,
      error = _ref.error,
      errors = _ref.errors,
      loadOptions = _ref.loadOptions,
      name = _ref.name,
      options = _ref.options,
      selectedOption = _ref.selectedOption,
      size = _ref.size,
      parentProps = _objectWithoutProperties(_ref, ["async", "cacheOptions", "control", "defaultOptions", "defaultValue", "error", "errors", "loadOptions", "name", "options", "selectedOption", "size"]);

  var Component = /*#__PURE__*/React.forwardRef(function (data, ref) {
    if (async) {
      return __jsx$S(AsyncSelect__default['default'], _extends({
        cacheOptions: cacheOptions,
        defaultOptions: defaultOptions,
        loadOptions: loadOptions,
        ref: ref
      }, data));
    } else {
      return __jsx$S(Select__default['default'], _extends({
        ref: ref
      }, data));
    }
  });
  return __jsx$S(Wrapper$1, {
    size: size,
    error: error || errors[name]
  }, __jsx$S(reactHookForm.Controller, {
    render: function render(props) {
      return __jsx$S(Component, _extends({
        options: options,
        selectedOption: props.value
      }, props, parentProps));
    },
    control: control,
    defaultValue: defaultValue,
    name: name
  }));
};
var Wrapper$1 = styled__default['default'].div.withConfig({
  displayName: "ReactSelect__Wrapper",
  componentId: "sc-10dmu44-0"
})(["& > div:first-of-type > div:first-of-type{", " display:flex;padding:0;color:", ";", "}", ""], function (props) {
  return COMMON_INPUT_STYLES(props);
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.COLOUR.blackText;
}, function (_ref3) {
  var size = _ref3.size;

  switch (size) {
    case SIZE.SM:
      return styled.css(["height:1.5rem;"]);

    case SIZE.MD:
      return styled.css(["height:1.875rem;"]);

    case SIZE.LG:
      return styled.css(["height:2.25rem !important;"]);

    default:
      return styled.css(["height:2.25rem !important;"]);
  }
}, function (_ref4) {
  var error = _ref4.error;
  return error && styled.css(["[class*='control']{", "}"], function (props) {
    return ERROR_STYLE(props);
  });
});
ReactSelectField.propTypes = reactSelectPropTypes;
ReactSelectField.defaultProps = reactSelectDefaultProps(defaultStyles);

var __jsx$T = React__default['default'].createElement;
var RichTextInput = function RichTextInput(_ref) {
  var _editor$current;

  var control = _ref.control,
      errors = _ref.errors,
      initialValue = _ref.initialValue,
      name = _ref.name;
  var content = draftJs.EditorState.createWithContent(draftJs.ContentState.createFromBlockArray(draftJs.convertFromHTML(initialValue !== null && initialValue !== void 0 ? initialValue : '')));
  console.log(content);
  var editor = React.useRef(null); // const [editorState, setEditorState] = useState(EditorState.createEmpty())

  var _onEditorStateChange = function onEditorStateChange(editorState, onChange) {
    console.log(editorState);
    console.log(draftToHtml__default['default'](draftJs.convertToRaw(editorState.getCurrentContent())));
    onChange(editorState); // onChange(draftToHtml(convertToRaw(editorState.getCurrentContent())))
    // setEditorState(editorState)
    // setValue(name, draftToHtml(convertToRaw(editorState.getCurrentContent())))
  };

  return __jsx$T(Wrapper$2, {
    errors: errors[name],
    onClick: (_editor$current = editor.current) === null || _editor$current === void 0 ? void 0 : _editor$current.focus()
  }, __jsx$T(reactHookForm.Controller, {
    name: name,
    control: control,
    defaultValue: content,
    render: function render(_ref2) {
      var value = _ref2.value,
          onChange = _ref2.onChange;
      return __jsx$T(reactDraftWysiwyg.Editor, {
        editorState: value,
        wrapperClassName: "wrapper-class",
        editorClassName: "editor-class",
        onEditorStateChange: function onEditorStateChange(e) {
          return _onEditorStateChange(e, onChange);
        }
      });
    }
  }));
};
var Wrapper$2 = styled__default['default'].div.withConfig({
  displayName: "richTextInput__Wrapper",
  componentId: "vech9m-0"
})(["", " ", ""], function (props) {
  return COMMON_INPUT_STYLES(props);
}, function (_ref3) {
  var errors = _ref3.errors;
  return errors && styled.css(["", ""], function (props) {
    return ERROR_STYLE(props);
  });
});
RichTextInput.propTypes = {
  control: propTypes.object.isRequired,
  errors: propTypes.object.isRequired,
  name: propTypes.string.isRequired,
  initialValue: propTypes.string
};

var __jsx$U = React__default['default'].createElement;
var Search = function Search(_ref) {
  var appendSearchButton = _ref.appendSearchButton,
      appendSearchIcon = _ref.appendSearchIcon,
      errors = _ref.errors,
      label = _ref.label,
      placeholder = _ref.placeholder,
      prependSearchIcon = _ref.prependSearchIcon,
      prefix = _ref.prefix,
      register = _ref.register,
      type = _ref.type;
  return __jsx$U(InputGroup, null, prependSearchIcon && __jsx$U(InputGroupAddon, {
    addonType: "prepend",
    text: true
  }, __jsx$U(Icon, {
    size: "md",
    icon: "search",
    prefix: prefix
  })), __jsx$U(FormField, {
    errors: errors,
    name: "query",
    placeholder: placeholder,
    register: register,
    type: type
  }), appendSearchIcon && __jsx$U(InputGroupAddon, {
    addonType: "append",
    text: true
  }, __jsx$U(Icon, {
    icon: "search",
    size: "md",
    prefix: prefix
  })), appendSearchButton && __jsx$U(InputGroupAddon, {
    addonType: "append"
  }, __jsx$U(Button, {
    content: label || 'Search',
    context: "dark",
    size: "sm",
    type: "submit"
  })));
};
Search.propTypes = {
  appendSearchButton: propTypes.bool,
  appendSearchIcon: propTypes.bool,
  errors: propTypes.object.isRequired,
  label: propTypes.string,
  placeholder: propTypes.string,
  prependSearchIcon: propTypes.bool,
  register: propTypes.func.isRequired,
  type: propTypes.oneOf(['search', 'text'])
};
Search.defaultProps = {
  appendSearchButton: false,
  appendSearchIcon: false,
  prependSearchIcon: false,
  type: 'search'
};

var __jsx$V = React__default['default'].createElement;
var SelectCountryField = function SelectCountryField(_ref) {
  var errors = _ref.errors,
      name = _ref.name,
      register = _ref.register,
      props = _objectWithoutProperties(_ref, ["errors", "name", "register"]);

  return __jsx$V(SelectField, _extends({
    errors: errors,
    name: name,
    options: COUNTRY,
    register: register
  }, props));
};
SelectCountryField.propTypes = {
  errors: propTypes.object.isRequired,
  name: propTypes.string.isRequired,
  register: propTypes.func.isRequired
};

var __jsx$W = React__default['default'].createElement;
var SelectField = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var data = _ref.data,
      defaultValue = _ref.defaultValue,
      disabled = _ref.disabled,
      errors = _ref.errors,
      name = _ref.name,
      options = _ref.options,
      placeholder = _ref.placeholder,
      range = _ref.range,
      showError = _ref.showError,
      size = _ref.size,
      props = _objectWithoutProperties(_ref, ["data", "defaultValue", "disabled", "errors", "name", "options", "placeholder", "range", "showError", "size"]);

  var renderRange = function renderRange() {
    var options = [__jsx$W("option", {
      disabled: true,
      value: "",
      key: "initial0"
    }, placeholder)];

    _range__default['default'](range[1], range[0]).map(function (i) {
      return options.push(__jsx$W("option", {
        key: "range".concat(i),
        value: i
      }, i));
    });

    return options;
  };

  var renderOptions = function renderOptions(items) {
    if (items) {
      options = items;
    }

    return options.map(function (_ref2) {
      var disabled = _ref2.disabled,
          group = _ref2.group,
          items = _ref2.items,
          text = _ref2.text,
          value = _ref2.value;

      if (group) {
        return __jsx$W("optgroup", {
          key: "option".concat(group),
          label: group
        }, renderOptions(items));
      }

      return __jsx$W("option", {
        children: text,
        disabled: disabled,
        key: "option".concat(value),
        value: value
      });
    });
  };

  return __jsx$W(FieldHOC, _extends({
    component: StyledSelect,
    defaultValue: defaultValue,
    disabled: disabled,
    errors: errors[name],
    name: name,
    ref: ref,
    showError: showError,
    size: size
  }, data, props), range && range.length > 0 && renderRange(), options && renderOptions());
});
var StyledSelect = styled__default['default'].select.withConfig({
  displayName: "Select__StyledSelect",
  componentId: "sc-113skpa-0"
})(["", " ", " ", ""], function (props) {
  return COMMON_INPUT_STYLES(props);
}, function (_ref3) {
  var size = _ref3.size;

  switch (size) {
    case SIZE.SM:
      return styled.css(["height:1.5rem;font-size:0.625rem;"]);

    case SIZE.MD:
      return styled.css(["height:1.875rem;"]);

    case SIZE.LG:
      return styled.css(["height:2.25rem;"]);

    default:
      return styled.css(["height:2.25rem;"]);
  }
}, function (_ref4) {
  var errors = _ref4.errors;
  return errors && styled.css(["", ""], function (props) {
    return ERROR_STYLE(props);
  });
});
SelectField.propTypes = {
  data: propTypes.object,
  defaultValue: propTypes.string,
  disabled: propTypes.bool,
  errors: propTypes.object,
  name: propTypes.string,
  options: propTypes.array,
  placeholder: propTypes.string,
  range: propTypes.array,
  showError: propTypes.bool
};
SelectField.defaultProps = {
  defaultValue: '',
  disabled: false,
  range: [],
  showError: false
};

var __jsx$X = React__default['default'].createElement;
var TextareaField = function TextareaField(_ref) {
  var autoFocus = _ref.autoFocus,
      className = _ref.className,
      cols = _ref.cols,
      dir = _ref.dir,
      disabled = _ref.disabled,
      errors = _ref.errors,
      maxLength = _ref.maxLength,
      name = _ref.name,
      placeholder = _ref.placeholder,
      readOnly = _ref.readOnly,
      register = _ref.register,
      rows = _ref.rows,
      size = _ref.size,
      spellCheck = _ref.spellCheck,
      tabIndex = _ref.tabIndex,
      wrap = _ref.wrap;
  return __jsx$X(FieldHOC, {
    autoFocus: autoFocus,
    className: className,
    cols: cols,
    component: StyledTextarea,
    dir: dir,
    disabled: disabled,
    errors: errors[name],
    maxLength: maxLength,
    name: name,
    placeholder: placeholder,
    readOnly: readOnly,
    register: register,
    rows: rows,
    size: size,
    spellcheck: spellCheck,
    tabIndex: tabIndex,
    wrap: wrap
  });
};
var StyledTextarea = styled__default['default'].textarea.withConfig({
  displayName: "textarea__StyledTextarea",
  componentId: "sc-12e9yj7-0"
})(["", " direction:", ";display:block;font-size:1rem;line-height:2rem;", " ", ""], function (props) {
  return COMMON_INPUT_STYLES(props);
}, function (_ref2) {
  var dir = _ref2.dir;
  return dir;
}, function (_ref3) {
  var errors = _ref3.errors;
  return errors && styled.css(["", ""], function (props) {
    return ERROR_STYLE(props);
  });
}, function (_ref4) {
  var size = _ref4.size;
  return size === SIZE.SM && styled.css(["font-size:0.625rem;"]);
});
TextareaField.propTypes = {
  autoFocus: propTypes.bool,
  className: propTypes.any,
  cols: propTypes.number,
  dir: propTypes.oneOf(['ltr', 'rtl']),
  disabled: propTypes.bool,
  errors: propTypes.object.isRequired,
  maxLength: propTypes.number,
  name: propTypes.string.isRequired,
  placeholder: propTypes.string,
  readOnly: propTypes.bool,
  register: propTypes.func.isRequired,
  rows: propTypes.number,
  size: propTypes.oneOf(Object.values(SIZE)),
  spellCheck: propTypes.bool,
  tabIndex: propTypes.number,
  wrap: propTypes.oneOf(['soft', 'hard'])
};
TextareaField.defaultProps = {
  autoFocus: false,
  dir: 'ltr',
  rows: 5,
  size: 'md'
};

/**
 * Form - Validation
 */
var yup = require('yup');

var _require$1 = require('@hookform/resolvers'),
    yupResolver = _require$1.yupResolver;

var __jsx$Y = React__default['default'].createElement;

var renderItem = function renderItem(_ref, index, current, handleCurrent) {
  var body = _ref.body,
      context = _ref.context,
      title = _ref.title;
  return __jsx$Y(AccordionItem, {
    key: index,
    context: context,
    open: current.includes(index),
    title: title,
    handleOpen: function handleOpen() {
      return handleCurrent(index);
    }
  }, body);
}; // there is no need to redefine and rerender Body on every state change


var Body = function Body(_ref2) {
  var children = _ref2.children,
      data = _ref2.data,
      closeOthersOnOpen = _ref2.closeOthersOnOpen;
  var initialOpen = children ? children.findIndex(function (_) {
    return _.props.open;
  }) : data.findIndex(function (_) {
    return _.open;
  });

  var _useState = React.useState(initialOpen > -1 ? [initialOpen] : []),
      current = _useState[0],
      setCurrent = _useState[1];

  var handleCurrent = function handleCurrent(index) {
    setCurrent(function (prev) {
      var temp = [];

      if (closeOthersOnOpen && !prev.includes(index)) {
        temp = [index];
      } else {
        if (prev.includes(index)) temp = prev.filter(function (_) {
          return _ !== index;
        });else temp = [].concat(_toConsumableArray(prev), [index]);
      }

      return temp;
    });
  };

  var map = [];

  if (children) {
    map = React.Children.map(children, function (child, index) {
      return /*#__PURE__*/React.cloneElement(child, {
        index: index,
        key: index,
        open: current.includes(index),
        handleOpen: function handleOpen(index) {
          return handleCurrent(index);
        }
      });
    });
  } else {
    map = data.map(function (item, index) {
      return renderItem(item, index, current, handleCurrent);
    });
  }

  return map;
};

var Accordion = function Accordion(_ref3) {
  var children = _ref3.children,
      className = _ref3.className,
      data = _ref3.data,
      style = _ref3.style,
      closeOthersOnOpen = _ref3.closeOthersOnOpen;
  //  moved the body component  and its dependants outside because StyledAccordion doesn't need to be rendered on every single change of body state
  return __jsx$Y(StyledAccordion, {
    className: className,
    style: style
  }, __jsx$Y(Body, {
    children: children,
    data: data,
    closeOthersOnOpen: closeOthersOnOpen
  }));
};
var StyledAccordion = styled__default['default'].div.withConfig({
  displayName: "accordion__StyledAccordion",
  componentId: "zg6lk6-0"
})(["border:1px solid rgba(0,0,0,0.125);border-radius:0.25rem;"]);
Accordion.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  closeOthersOnOpen: propTypes.bool,
  data: propTypes.array,
  style: propTypes.object
};

var __jsx$Z = React__default['default'].createElement;
var AccordionItem = /*#__PURE__*/React.memo(function (_ref) {
  var children = _ref.children,
      className = _ref.className,
      context = _ref.context,
      handleOpen = _ref.handleOpen,
      index = _ref.index,
      open = _ref.open,
      title = _ref.title;
  return __jsx$Z(StyledAccordionItem, {
    className: className
  }, __jsx$Z(Header, {
    className: open ? 'opened' : 'closed',
    onClick: function onClick() {
      return handleOpen(index);
    },
    context: context || 'dark'
  }, title, ' ', __jsx$Z(HeaderIcon, {
    "aria-hidden": "true",
    context: "white",
    icon: open ? 'chevron-up' : 'chevron-down'
  })), __jsx$Z(Content, {
    className: open ? 'opened' : 'closed'
  }, children));
}, function (_ref2, _ref3) {
  var prevOpenState = _ref2.open,
      prevContext = _ref2.context;
  var nextOpenState = _ref3.open,
      nextContext = _ref3.context;
  return prevOpenState === nextOpenState && prevContext === nextContext;
});
var StyledAccordionItem = styled__default['default'].div.withConfig({
  displayName: "accordionItem__StyledAccordionItem",
  componentId: "sc-8aj890-0"
})(["&:last-child header.closed{border:0;}"]);
var Header = styled__default['default'].header.withConfig({
  displayName: "accordionItem__Header",
  componentId: "sc-8aj890-1"
})(["background-color:", ";border-bottom:1px solid ", ";color:", ";cursor:pointer;font-size:1rem;padding:0.75rem 1.25rem;"], function (_ref4) {
  var context = _ref4.context,
      theme = _ref4.theme;
  return theme.COLOUR[context];
}, function (props) {
  return props.theme.COLOUR[props.context];
}, function (_ref5) {
  var context = _ref5.context,
      theme = _ref5.theme;
  return context === 'white' ? theme.COLOUR.primary : theme.COLOUR.white;
});
var HeaderIcon = styled__default['default'](Icon).withConfig({
  displayName: "accordionItem__HeaderIcon",
  componentId: "sc-8aj890-2"
})(["float:right;"]);
var Content = styled__default['default'].div.withConfig({
  displayName: "accordionItem__Content",
  componentId: "sc-8aj890-3"
})(["box-sizing:border-box;max-height:0;overflow:hidden;&.opened{max-height:fit-content;padding:1.25rem;}"]);
AccordionItem.propTypes = {
  children: propTypes.string.isRequired,
  className: propTypes.string,
  context: propTypes.oneOf(Object.values(CONTEXT)),
  handleOpen: propTypes.func,
  index: propTypes.number,
  open: propTypes.bool,
  title: propTypes.string.isRequired
};
AccordionItem["default"] = {
  context: 'dark',
  open: false
};

var __jsx$_ = React__default['default'].createElement;
var Alert = function Alert(_ref) {
  var className = _ref.className,
      close = _ref.close,
      content = _ref.content,
      context = _ref.context,
      header = _ref.header,
      icon = _ref.icon,
      iconPrefix = _ref.iconPrefix,
      style = _ref.style;

  var _useState = React.useState(true),
      visible = _useState[0],
      setVisible = _useState[1];

  var handleClose = function handleClose() {
    setVisible(false);
    close && close();
  };

  return visible && __jsx$_(StyledAlert, {
    className: className,
    context: context,
    style: style
  }, close && __jsx$_(StyledClose, {
    click: handleClose,
    context: "white",
    header: header,
    icon: "times"
  }), header && __jsx$_(AlertHeader, {
    context: context,
    header: header,
    icon: icon,
    iconPrefix: iconPrefix
  }), __jsx$_(AlertContent, {
    content: content,
    icon: header ? null : icon,
    iconPrefix: iconPrefix
  }));
};
var StyledAlert = styled__default['default'].div.withConfig({
  displayName: "alert__StyledAlert",
  componentId: "aamjtz-0"
})(["", " border:1px solid ", ";border-radius:0.25rem;color:", ";position:relative;"], function (props) {
  return BACKGROUND(props);
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.COLOUR.light;
}, function (_ref3) {
  var context = _ref3.context,
      theme = _ref3.theme;
  return shadeLinearRgb(-0.8, theme.COLOUR[context]);
});
var StyledClose = styled__default['default'](Close).withConfig({
  displayName: "alert__StyledClose",
  componentId: "aamjtz-1"
})(["margin:0;position:absolute;right:0;top:", ";"], function (_ref4) {
  var header = _ref4.header;
  return header ? '0' : '4px';
});
Alert.propTypes = {
  close: propTypes.func,
  content: propTypes.oneOfType([propTypes.object, propTypes.string]).isRequired,
  context: propTypes.oneOf(Object.values(CONTEXT)),
  header: propTypes.string,
  icon: propTypes.string,
  iconPrefix: propTypes.string,
  style: propTypes.objectOf(propTypes.oneOfType([propTypes.number, propTypes.string]))
};
Alert.defaultProps = {
  context: 'primary'
};

var __jsx$$ = React__default['default'].createElement;
var AlertContent = function AlertContent(_ref) {
  var content = _ref.content,
      icon = _ref.icon,
      iconPrefix = _ref.iconPrefix;
  return __jsx$$(StyledAlertContent, null, icon && __jsx$$(Icon, {
    "aria-hidden": "true",
    context: "help",
    icon: icon,
    prefix: iconPrefix
  }), content);
};
var StyledAlertContent = styled__default['default'].div.withConfig({
  displayName: "content__StyledAlertContent",
  componentId: "sc-1ipm4sm-0"
})(["padding:0.75rem 1.25rem;"]);
AlertContent.propTypes = {
  content: propTypes.oneOfType([propTypes.object, propTypes.string]).isRequired,
  icon: propTypes.string,
  iconPrefix: propTypes.string
};

var __jsx$10 = React__default['default'].createElement;
var AlertHeader = function AlertHeader(_ref) {
  var context = _ref.context,
      header = _ref.header,
      icon = _ref.icon,
      iconPrefix = _ref.iconPrefix;
  return __jsx$10(StyledHeader, {
    context: context
  }, icon && __jsx$10(Icon, {
    "aria-hidden": "true",
    context: "help",
    icon: icon,
    prefix: iconPrefix
  }), " ", header);
};
var StyledHeader = styled__default['default'].div.withConfig({
  displayName: "header__StyledHeader",
  componentId: "sc-16vasow-0"
})(["background:", ";border-top-left-radius:0.25rem;border-top-right-radius:0.25rem;color:#fff;font-weight:600;letter-spacing:1px;padding:0.5rem 1.25rem;"], function (_ref2) {
  var context = _ref2.context,
      theme = _ref2.theme;
  return shadeLinearRgb(-0.4, theme.COLOUR[context]);
});
AlertHeader.propTypes = {
  context: propTypes.oneOf(Object.values(CONTEXT)),
  header: propTypes.string.isRequired,
  icon: propTypes.string,
  iconPrefix: propTypes.string
};

var __jsx$11 = React__default['default'].createElement;
var Breadcrumb = function Breadcrumb(_ref) {
  var category = _ref.category,
      path = _ref.path,
      page = _ref.page;
  var categoryFormatted = category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ');
  return __jsx$11("nav", {
    "aria-label": "breadcrumb"
  }, __jsx$11(StyledOl, {
    itemScope: "",
    itemType: "http://schema.org/BreadcrumbList"
  }, __jsx$11(StyledLi, {
    itemProp: "itemListElement",
    itemScope: "",
    itemType: "http://schema.org/ListItem"
  }, __jsx$11(Link, {
    to: "/",
    passHref: true
  }, __jsx$11(StyledA, {
    itemProp: "item",
    itemScope: "itemscope",
    itemType: "http://schema.org/Thing"
  }, __jsx$11(Icon, {
    icon: "home-heart"
  }))), __jsx$11("meta", {
    itemProp: "position",
    content: "1"
  })), __jsx$11(StyledLi, {
    itemProp: "itemListElement",
    itemScope: "",
    itemType: "http://schema.org/ListItem"
  }, __jsx$11(Link, {
    to: {
      as: "/blog/".concat(slugify(path)),
      href: {
        pathname: '/blog/category',
        query: {
          category: slugify(path)
        }
      }
    },
    passHref: true
  }, __jsx$11(StyledA, {
    itemProp: "item",
    itemScope: "itemscope",
    itemType: "http://schema.org/Thing"
  }, categoryFormatted)), __jsx$11("meta", {
    itemProp: "position",
    content: "2"
  })), __jsx$11(StyledLi, {
    "aria-current": "page",
    itemProp: "itemListElement",
    itemScope: "",
    itemType: "http://schema.org/ListItem"
  }, __jsx$11("span", {
    itemProp: "name"
  }, page), __jsx$11("meta", {
    itemProp: "position",
    content: "3"
  }))));
};
var StyledA = styled__default['default'].span.withConfig({
  displayName: "breadcrumb__StyledA",
  componentId: "sc-1p4h6tg-0"
})(["color:#fff;&:hover{color:#00ccbc;}"]);
var StyledOl = styled__default['default'].ol.withConfig({
  displayName: "breadcrumb__StyledOl",
  componentId: "sc-1p4h6tg-1"
})(["background-color:rgba(62,62,62,0.5);border-bottom:1px #aaa solid;border-radius:0;color:#fff;display:flex;flex-wrap:wrap;list-style:none;margin:0;padding:0.75rem 1rem;position:absolute;top:0;width:100%;z-index:1;"]);
var StyledLi = styled__default['default'].li.withConfig({
  displayName: "breadcrumb__StyledLi",
  componentId: "sc-1p4h6tg-2"
})(["&:not(:first-child)::before{color:#ccc;content:'/';display:inline-block;padding-left:0.5rem;padding-right:0.5rem;}"]);
Breadcrumb.propTypes = {
  category: propTypes.string.isRequired,
  page: propTypes.string.isRequired,
  path: propTypes.string.isRequired
};

var __jsx$12 = React__default['default'].createElement;
var Buttons = function Buttons(_ref) {
  var back = _ref.back,
      backText = _ref.backText,
      next = _ref.next,
      nextDisabled = _ref.nextDisabled,
      nextText = _ref.nextText,
      pathBack = _ref.pathBack,
      pathNext = _ref.pathNext;
  return __jsx$12(React__default['default'].Fragment, null, __jsx$12(Divider, {
    size: "sm"
  }), back && __jsx$12(Link, {
    to: pathBack
  }, __jsx$12(Button, {
    context: "secondary",
    size: "lg"
  }, backText)), next && __jsx$12("div", {
    className: "float-right"
  }, pathNext && __jsx$12(Link, {
    to: pathNext
  }, __jsx$12(Button, {
    context: "primary",
    size: "lg"
  }, nextText)), !pathNext && __jsx$12(Button, {
    context: "primary",
    disabled: nextDisabled,
    size: "lg",
    type: "submit"
  }, nextText)), __jsx$12("div", {
    style: {
      clear: 'both',
      marginBottom: '1rem'
    }
  }));
};
Buttons.propTypes = {
  back: propTypes.bool,
  backText: propTypes.string,
  next: propTypes.bool,
  nextDisabled: propTypes.bool,
  nextText: propTypes.string,
  pathBack: propTypes.oneOfType([propTypes.object, propTypes.string]),
  pathNext: propTypes.string
};
Buttons.defaultProps = {
  backText: 'Back',
  nextText: 'Next'
};

var __jsx$13 = React__default['default'].createElement;
var CardCTA = function CardCTA(_ref) {
  var func = _ref.func,
      link = _ref.link,
      title = _ref.title;

  var CtaButton = function CtaButton(props) {
    return __jsx$13(StyledButton$3, _extends({
      content: title,
      context: "secondary"
    }, props));
  };

  return link ? __jsx$13(Link, {
    border: false,
    passHref: true,
    to: link
  }, __jsx$13(CtaButton, null)) : __jsx$13(CtaButton, {
    onClick: func
  });
};
var StyledButton$3 = styled__default['default'](Button).withConfig({
  displayName: "cta__StyledButton",
  componentId: "sc-1yle9v9-0"
})(["display:block;margin-top:0.5rem;"]);
CardCTA.propTypes = {
  func: propTypes.func,
  link: propTypes.string,
  title: propTypes.string
};
CardCTA.defaultProps = {
  title: 'Read more'
};

var __jsx$14 = React__default['default'].createElement;
var CardBody = function CardBody(_ref) {
  var center = _ref.center,
      children = _ref.children,
      className = _ref.className,
      context = _ref.context,
      ctaFunc = _ref.ctaFunc,
      ctaLink = _ref.ctaLink,
      ctaTitle = _ref.ctaTitle,
      showCta = _ref.showCta,
      title = _ref.title,
      titleNoWrap = _ref.titleNoWrap;
  return __jsx$14(StyledBody$1, {
    className: className,
    center: center
  }, title && __jsx$14(StyledWrapper, null, __jsx$14(StyledTitle, {
    content: title,
    noWrap: titleNoWrap,
    tag: "h2"
  })), (children || showCta) && __jsx$14(StyledContent$1, {
    context: context
  }, children, showCta && __jsx$14(CardCTA, {
    func: ctaFunc,
    link: ctaLink,
    title: ctaTitle
  })));
};
var StyledBody$1 = styled__default['default'].div.withConfig({
  displayName: "body__StyledBody",
  componentId: "r9ylmd-0"
})(["", ""], function (_ref2) {
  var center = _ref2.center;
  return center && "\n    align-items: center;\n    display: flex;\n    justify-content: center;\n    flex: 1 1 auto;\n    text-align: center;\n  ";
});
var StyledWrapper = styled__default['default'].div.withConfig({
  displayName: "body__StyledWrapper",
  componentId: "r9ylmd-1"
})(["display:flex;"]);
var StyledTitle = styled__default['default'](Heading).withConfig({
  displayName: "body__StyledTitle",
  componentId: "r9ylmd-2"
})(["margin:24px auto 16px auto;text-align:center;width:75%;"]);
var StyledContent$1 = styled__default['default'].div.withConfig({
  displayName: "body__StyledContent",
  componentId: "r9ylmd-3"
})(["padding:1rem;"]);
CardBody.propTypes = {
  center: propTypes.bool,
  children: propTypes.node,
  className: propTypes.string,
  context: propTypes.oneOf(Object.values(CONTEXT)),
  ctaFunc: propTypes.func,
  ctaLink: propTypes.string,
  ctaTitle: propTypes.string,
  showCta: propTypes.bool,
  title: propTypes.string,
  titleNoWrap: propTypes.bool
};
CardBody.defaultProps = {
  context: 'primary',
  showCta: false
};

/**
 * Card - Props
 */
var CardPropTypes = {
  alt: propTypes.string,
  body: propTypes.node,
  bordered: propTypes.bool,
  center: propTypes.bool,
  children: propTypes.node,
  className: propTypes.any,
  context: propTypes.oneOf(Object.values(CONTEXT)),
  ctaFunc: propTypes.func,
  ctaLink: propTypes.string,
  ctaTitle: propTypes.string,
  deck: propTypes.bool,
  footer: propTypes.string,
  fullHeight: propTypes.bool,
  header: propTypes.string,
  to: propTypes.oneOfType([propTypes.object, propTypes.string]),
  horizontal: propTypes.bool,
  icon: propTypes.string,
  image: propTypes.string,
  role: propTypes.string,
  rounded: propTypes.bool,
  shadow: propTypes.bool,
  showCta: propTypes.bool,
  style: propTypes.object,
  title: propTypes.string,
  titleNoWrap: propTypes.bool
};
var CardDefaultProps = {
  bordered: false,
  context: 'white',
  footerContext: 'light',
  role: 'article',
  rounded: true,
  shadow: false,
  titleNoWrap: false
};

var __jsx$15 = React__default['default'].createElement;

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex: 1 0 calc(100%/3 - 30px);\n    flex-direction: column;\n    margin-right: 15px;\n    margin-left: 15px;\n  "]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var Card = function Card(_ref) {
  var alt = _ref.alt,
      body = _ref.body,
      bordered = _ref.bordered,
      center = _ref.center,
      children = _ref.children,
      className = _ref.className,
      close = _ref.close,
      context = _ref.context,
      ctaFunc = _ref.ctaFunc,
      ctaLink = _ref.ctaLink,
      ctaTitle = _ref.ctaTitle,
      deck = _ref.deck,
      footer = _ref.footer,
      footerContext = _ref.footerContext,
      header = _ref.header,
      icon = _ref.icon,
      image = _ref.image,
      rounded = _ref.rounded,
      shadow = _ref.shadow,
      showCta = _ref.showCta,
      style = _ref.style,
      title = _ref.title,
      titleNoWrap = _ref.titleNoWrap,
      to = _ref.to;

  var linked = function linked() {
    return __jsx$15(Link, {
      border: false,
      passHref: true,
      to: to
    }, card());
  };

  var card = function card() {
    return __jsx$15(StyledCard, {
      bordered: bordered,
      className: className,
      context: context,
      deck: deck,
      rounded: rounded,
      shadow: shadow,
      style: style
    }, close && __jsx$15(Close, {
      click: close
    }), image && __jsx$15(CardImage, {
      alt: alt,
      src: image
    }), header && __jsx$15(CardHeader, {
      content: header,
      context: footerContext
    }), icon && __jsx$15(StyledIcon$3, {
      icon: icon,
      size: "4x"
    }), (title || body) && __jsx$15(CardBody, {
      center: center,
      children: body,
      context: context,
      ctaFunc: ctaFunc,
      ctaLink: ctaLink,
      ctaTitle: ctaTitle,
      showCta: showCta,
      title: title,
      titleNoWrap: titleNoWrap
    }), children, footer && __jsx$15(CardFooter, {
      children: footer,
      context: footerContext
    }));
  };

  return to ? linked() : card();
};
var StyledCard = styled__default['default'].div.withConfig({
  displayName: "card__StyledCard",
  componentId: "sc-7z4bwp-0"
})(["background-clip:border-box;background-color:", ";border:", ";border-radius:", ";box-shadow:", ";color:", ";display:flex;flex-direction:column;font-size:inherit;margin:0;min-width:0;position:relative;word-wrap:break-word;overflow:hidden;", ""], function (_ref2) {
  var context = _ref2.context,
      theme = _ref2.theme;
  return theme.COLOUR[context];
}, function (_ref3) {
  var bordered = _ref3.bordered;
  return bordered && '1px solid rgba(0, 0, 0, .125)';
}, function (_ref4) {
  var rounded = _ref4.rounded;
  return rounded && '0.25rem';
}, function (_ref5) {
  var shadow = _ref5.shadow;
  return shadow && '0px 8px 10px rgba(24, 37, 50, 0.1), 0px 0px 1px rgba(24, 37, 50, 0.08)';
}, function (_ref6) {
  var context = _ref6.context,
      theme = _ref6.theme;
  return context === 'light' || context === 'white' ? theme.COLOUR.dark : theme.COLOUR.white;
}, function (_ref7) {
  var deck = _ref7.deck;
  return deck && MEDIA_QUERY.desktop(_templateObject$3());
});
var StyledIcon$3 = styled__default['default'](Icon).withConfig({
  displayName: "card__StyledIcon",
  componentId: "sc-7z4bwp-1"
})(["margin:1rem auto;"]);
Card.propTypes = CardPropTypes;
Card.defaultProps = CardDefaultProps;

var __jsx$16 = React__default['default'].createElement;

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n    flex-flow: row wrap;\n    margin-left: -15px;\n    margin-right: -15px;\n  "]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var CardDecks = function CardDecks(_ref) {
  var children = _ref.children;
  return __jsx$16(StyledDecks, null, children);
};
var StyledDecks = styled__default['default'].div.withConfig({
  displayName: "decks__StyledDecks",
  componentId: "sc-1or8ba2-0"
})(["display:flex;flex-direction:column;", ""], MEDIA_QUERY.desktop(_templateObject$4()));
CardDecks.propTypes = {
  children: propTypes.node.isRequired
};

var __jsx$17 = React__default['default'].createElement;
var CardFooter = function CardFooter(_ref) {
  var children = _ref.children,
      context = _ref.context;
  return __jsx$17(StyledFooter$1, {
    context: context
  }, children);
};
var StyledFooter$1 = styled__default['default'].div.withConfig({
  displayName: "footer__StyledFooter",
  componentId: "h0mvsc-0"
})(["align-items:center;background-color:", ";border-top:1px solid rgba(0,0,0,0.125);border-radius:0 0 0.25rem 0.25rem;color:", ";display:flex;justify-content:center;margin-top:auto;min-height:4.5rem;padding:0.75rem;text-align:center;"], function (_ref2) {
  var context = _ref2.context,
      theme = _ref2.theme;
  return theme.COLOUR[context];
}, function (_ref3) {
  var context = _ref3.context,
      theme = _ref3.theme;
  return context === 'light' || context === 'white' ? theme.COLOUR.dark : theme.COLOUR.white;
});
CardFooter.propTypes = {
  context: propTypes.oneOf(Object.values(CONTEXT)),
  children: propTypes.node
};
CardFooter.defaultProps = {
  context: 'light'
};

var __jsx$18 = React__default['default'].createElement;
var CardHeader = function CardHeader(_ref) {
  var content = _ref.content,
      context = _ref.context;
  return __jsx$18(StyledHeader$1, {
    context: context
  }, content);
};
var StyledHeader$1 = styled__default['default'].h2.withConfig({
  displayName: "header__StyledHeader",
  componentId: "sc-1h2ryx5-0"
})(["background-color:", ";border-bottom:1px solid rgba(0,0,0,0.125);border-radius:0.25rem 0.25rem 0 0;color:", ";font-size:1.25rem;margin:0;padding:0.75rem 0.5rem;text-align:center;"], function (_ref2) {
  var context = _ref2.context,
      theme = _ref2.theme;
  return theme.COLOUR[context];
}, function (_ref3) {
  var context = _ref3.context,
      theme = _ref3.theme;
  return context === 'light' || context === 'white' ? theme.COLOUR.dark : theme.COLOUR.white;
});
CardHeader.propTypes = {
  content: propTypes.string.isRequired,
  context: propTypes.oneOf(Object.values(CONTEXT))
};

var __jsx$19 = React__default['default'].createElement;
var CardImage = function CardImage(_ref) {
  var alt = _ref.alt,
      header = _ref.header,
      src = _ref.src;
  return __jsx$19(StyledContainer$1, null, __jsx$19(StyledImage$1, {
    alt: alt,
    fluid: false,
    imageClasses: "rounded",
    src: src
  }, header));
};
var StyledContainer$1 = styled__default['default'].div.withConfig({
  displayName: "image__StyledContainer",
  componentId: "sc-1341tnt-0"
})(["align-items:flex-start;display:flex;flex-direction:column;flex-wrap:wrap;"]);
var StyledImage$1 = styled__default['default'](Image$1).withConfig({
  displayName: "image__StyledImage",
  componentId: "sc-1341tnt-1"
})(["display:block;object-fit:cover;width:100%;.rounded{border-radius:0.25rem 0.25rem 0 0;border-style:none;}"]);
CardImage.propTypes = {
  alt: propTypes.string.isRequired,
  src: propTypes.string.isRequired
};

var __jsx$1a = React__default['default'].createElement;
var HighChart = function HighChart(_ref) {
  var options = _ref.options,
      constructorType = _ref.constructorType;
  return __jsx$1a(HighchartsReact__default['default'], {
    highcharts: Highcharts__default['default'],
    options: options,
    constructorType: constructorType
  });
};

var __jsx$1b = React__default['default'].createElement;

var BarComponent = function BarComponent(_ref) {
  var theme = _ref.theme,
      props = _objectWithoutProperties(_ref, ["theme"]);

  var BARCHART = theme.BARCHART;
  var _props$colorBy = props.colorBy,
      colorBy = _props$colorBy === void 0 ? bar.BarDefaultProps.colorBy : _props$colorBy,
      colorScheme = props.colorScheme,
      data = props.data,
      _props$enableGridY = props.enableGridY,
      enableGridY = _props$enableGridY === void 0 ? BARCHART.enableGridY : _props$enableGridY,
      _props$enableGridX = props.enableGridX,
      enableGridX = _props$enableGridX === void 0 ? BARCHART.enableGridX : _props$enableGridX,
      _props$groupMode = props.groupMode,
      groupMode = _props$groupMode === void 0 ? bar.BarDefaultProps.groupMode : _props$groupMode,
      _props$indexBy = props.indexBy,
      indexBy = _props$indexBy === void 0 ? bar.BarDefaultProps.indexBy : _props$indexBy,
      _props$isInteractive = props.isInteractive,
      isInteractive = _props$isInteractive === void 0 ? BARCHART.isInteractive : _props$isInteractive,
      _props$keys = props.keys,
      keys = _props$keys === void 0 ? bar.BarDefaultProps.keys : _props$keys,
      _props$label = props.label,
      label = _props$label === void 0 ? bar.BarDefaultProps.label : _props$label,
      _props$layout = props.layout,
      layout = _props$layout === void 0 ? bar.BarDefaultProps.layout : _props$layout,
      _props$minValue = props.minValue,
      minValue = _props$minValue === void 0 ? bar.BarDefaultProps.minValue : _props$minValue,
      _props$maxValue = props.maxValue,
      maxValue = _props$maxValue === void 0 ? bar.BarDefaultProps.maxValue : _props$maxValue,
      _props$reverse = props.reverse,
      reverse = _props$reverse === void 0 ? bar.BarDefaultProps.reverse : _props$reverse,
      showLegend = props.showLegend,
      _props$tooltip = props.tooltip,
      tooltip = _props$tooltip === void 0 ? bar.BarDefaultProps.tooltip : _props$tooltip;
  return __jsx$1b(bar.ResponsiveBar, {
    animate: BARCHART.animate,
    axisBottom: BARCHART.axisBottom.call(props),
    axisLeft: BARCHART.axisLeft.call(props),
    borderColor: BARCHART.borderColor,
    borderWidth: BARCHART.borderWidth,
    colorBy: colorBy,
    colors: {
      scheme: colorScheme
    },
    data: data,
    enableLabel: BARCHART.enableLabel,
    enableGridX: enableGridX,
    enableGridY: enableGridY,
    groupMode: groupMode,
    indexBy: indexBy,
    isInteractive: isInteractive,
    keys: keys,
    label: label,
    labelSkipHeight: BARCHART.labelSkipHeight,
    layout: layout,
    legends: showLegend ? BARCHART.legends : [],
    minValue: minValue,
    maxValue: maxValue,
    margin: BARCHART.margin.call(props),
    padding: BARCHART.padding,
    reverse: reverse,
    tooltip: tooltip
  });
};
/**
 * Unrequire specific props as this is a wrapper component
 * Nivo uses recompose/withPropsOnChange to assign a default value to these props
 * More info: https://github.com/plouc/nivo/blob/master/packages/bar/src/enhance.js
 */


bar.BarPropTypes.getBorderColor = propTypes.func;
bar.BarPropTypes.getColor = propTypes.func;
bar.BarPropTypes.getIndex = propTypes.func;
bar.BarPropTypes.getLabel = propTypes.func;
bar.BarPropTypes.getLabelTextColor = propTypes.func;
bar.BarPropTypes.getLabelLinkColor = propTypes.func;
bar.BarPropTypes.getTooltipLabel = propTypes.func;
var BarChart = styled.withTheme(BarComponent);
BarChart.displayName = 'BarChart';
BarChart.propTypes = Object.assign({}, bar.BarPropTypes, {
  bottomLegend: propTypes.string,
  colorScheme: propTypes.oneOf(Object.keys(colors.colorSchemes)),
  leftLegend: propTypes.string,
  showLegend: propTypes.bool
});
BarChart.defaultProps = Object.assign({}, bar.BarDefaultProps, {
  colorScheme: 'nivo',
  showLegend: false
});

var __jsx$1c = React__default['default'].createElement;
var LineChart = styled.withTheme(function (_ref) {
  var theme = _ref.theme,
      props = _objectWithoutProperties(_ref, ["theme"]);

  var LINECHART = theme.LINECHART,
      _theme$LINECHART = theme.LINECHART,
      axisBottom = _theme$LINECHART.axisBottom,
      axisLeft = _theme$LINECHART.axisLeft,
      axisTop = _theme$LINECHART.axisTop,
      axisRight = _theme$LINECHART.axisRight,
      legends = _theme$LINECHART.legends,
      margin = _theme$LINECHART.margin,
      pointColor = _theme$LINECHART.pointColor,
      pointBorderColor = _theme$LINECHART.pointBorderColor,
      pointBorderWidth = _theme$LINECHART.pointBorderWidth,
      pointLabel = _theme$LINECHART.pointLabel,
      pointLabelYOffset = _theme$LINECHART.pointLabelYOffset,
      useMesh = _theme$LINECHART.useMesh,
      xScale = _theme$LINECHART.xScale,
      yScale = _theme$LINECHART.yScale;
  var colorScheme = props.colorScheme,
      curve = props.curve,
      data = props.data,
      enableArea = props.enableArea,
      areaOpacity = props.areaOpacity,
      enableCrosshair = props.enableCrosshair,
      enablePoints = props.enablePoints,
      enablePointLabel = props.enablePointLabel,
      enableGridX = props.enableGridX,
      enableGridY = props.enableGridY,
      enableSlices = props.enableSlices,
      isInteractive = props.isInteractive,
      lineWidth = props.lineWidth,
      _props$pointSize = props.pointSize,
      pointSize = _props$pointSize === void 0 ? LINECHART.pointSize : _props$pointSize,
      showLegend = props.showLegend,
      _props$tooltip = props.tooltip,
      tooltip = _props$tooltip === void 0 ? line.LineDefaultProps.tooltip : _props$tooltip;
  return __jsx$1c(line.ResponsiveLine, {
    areaOpacity: areaOpacity,
    axisTop: axisTop,
    axisRight: axisRight,
    axisBottom: axisBottom.call(props),
    axisLeft: axisLeft.call(props),
    curve: curve,
    colors: {
      scheme: colorScheme
    },
    data: data,
    enableArea: enableArea,
    enableCrosshair: enableCrosshair,
    enablePoints: enablePoints,
    enablePointLabel: enablePointLabel,
    enableGridX: enableGridX,
    enableGridY: enableGridY,
    enableSlices: enableSlices,
    isInteractive: isInteractive,
    lineWidth: lineWidth,
    legends: showLegend ? legends : [],
    margin: margin.call(props),
    pointSize: pointSize,
    pointColor: pointColor,
    pointBorderColor: pointBorderColor,
    pointBorderWidth: pointBorderWidth,
    pointLabel: pointLabel,
    pointLabelYOffset: pointLabelYOffset,
    tooltip: tooltip,
    useMesh: useMesh,
    xScale: xScale,
    yScale: yScale.call(props)
  });
});
LineChart.displayName = 'LineChart';
LineChart.propTypes = Object.assign({}, line.LinePropTypes, {
  // TODO: maybe write more custom schemes :)
  bottomLegend: propTypes.string,
  colorScheme: propTypes.oneOf(Object.keys(colors.colorSchemes)),
  leftLegend: propTypes.string,
  showLegend: propTypes.bool
});
LineChart.defaultProps = Object.assign({}, line.LineDefaultProps, {
  colorScheme: 'nivo',
  showLegend: false
});

var __jsx$1d = React__default['default'].createElement;
var PieChart = styled.withTheme(function (_ref) {
  var theme = _ref.theme,
      props = _objectWithoutProperties(_ref, ["theme"]);

  var PIECHART = theme.PIECHART,
      _theme$PIECHART = theme.PIECHART,
      animate = _theme$PIECHART.animate,
      borderColor = _theme$PIECHART.borderColor,
      borderWidth = _theme$PIECHART.borderWidth,
      startAngle = _theme$PIECHART.startAngle,
      legends = _theme$PIECHART.legends,
      margin = _theme$PIECHART.margin,
      motionStiffness = _theme$PIECHART.motionStiffness,
      motionDamping = _theme$PIECHART.motionDamping,
      radialLabelsSkipAngle = _theme$PIECHART.radialLabelsSkipAngle,
      radialLabelsTextColor = _theme$PIECHART.radialLabelsTextColor,
      radialLabelsLinkColor = _theme$PIECHART.radialLabelsLinkColor,
      slicesLabelsSkipAngle = _theme$PIECHART.slicesLabelsSkipAngle,
      slicesLabelsTextColor = _theme$PIECHART.slicesLabelsTextColor;
  var colorScheme = props.colorScheme,
      _props$cornerRadius = props.cornerRadius,
      cornerRadius = _props$cornerRadius === void 0 ? PIECHART.cornerRadius : _props$cornerRadius,
      data = props.data,
      enableRadialLabels = props.enableRadialLabels,
      enableSlicesLabels = props.enableSlicesLabels,
      _props$innerRadius = props.innerRadius,
      innerRadius = _props$innerRadius === void 0 ? PIECHART.innerRadius : _props$innerRadius,
      isInteractive = props.isInteractive,
      onClick = props.onClick,
      _props$padAngle = props.padAngle,
      padAngle = _props$padAngle === void 0 ? PIECHART.padAngle : _props$padAngle,
      _props$radialLabelsLi = props.radialLabelsLinkStrokeWidth,
      radialLabelsLinkStrokeWidth = _props$radialLabelsLi === void 0 ? PIECHART.radialLabelsLinkStrokeWidth : _props$radialLabelsLi,
      _props$radialLabelsTe = props.radialLabelsTextXOffset,
      radialLabelsTextXOffset = _props$radialLabelsTe === void 0 ? PIECHART.radialLabelsTextXOffset : _props$radialLabelsTe,
      _props$radialLabelsLi2 = props.radialLabelsLinkHorizontalLength,
      radialLabelsLinkHorizontalLength = _props$radialLabelsLi2 === void 0 ? PIECHART.radialLabelsLinkHorizontalLength : _props$radialLabelsLi2,
      _props$radialLabelsLi3 = props.radialLabelsLinkDiagonalLength,
      radialLabelsLinkDiagonalLength = _props$radialLabelsLi3 === void 0 ? PIECHART.radialLabelsLinkDiagonalLength : _props$radialLabelsLi3,
      _props$radialLabelsLi4 = props.radialLabelsLinkOffset,
      radialLabelsLinkOffset = _props$radialLabelsLi4 === void 0 ? PIECHART.radialLabelsLinkOffset : _props$radialLabelsLi4,
      showLegend = props.showLegend,
      sortByValue = props.sortByValue,
      _props$tooltip = props.tooltip,
      tooltip = _props$tooltip === void 0 ? pie.PieDefaultProps.tooltip : _props$tooltip;
  return __jsx$1d(pie.ResponsivePie, {
    animate: animate,
    onClick: onClick,
    data: data,
    enableSlicesLabels: enableSlicesLabels,
    enableRadialLabels: enableRadialLabels,
    isInteractive: isInteractive,
    innerRadius: innerRadius,
    cornerRadius: cornerRadius,
    colors: {
      scheme: colorScheme
    },
    borderWidth: borderWidth,
    borderColor: borderColor,
    legends: showLegend ? legends : [],
    margin: margin.call(props),
    motionDamping: motionDamping,
    motionStiffness: motionStiffness,
    padAngle: padAngle,
    radialLabelsSkipAngle: radialLabelsSkipAngle,
    radialLabelsTextXOffset: radialLabelsTextXOffset,
    radialLabelsTextColor: radialLabelsTextColor,
    radialLabelsLinkOffset: radialLabelsLinkOffset,
    radialLabelsLinkDiagonalLength: radialLabelsLinkDiagonalLength,
    radialLabelsLinkHorizontalLength: radialLabelsLinkHorizontalLength,
    radialLabelsLinkStrokeWidth: radialLabelsLinkStrokeWidth,
    radialLabelsLinkColor: radialLabelsLinkColor,
    slicesLabelsSkipAngle: slicesLabelsSkipAngle,
    slicesLabelsTextColor: slicesLabelsTextColor,
    sortByValue: sortByValue,
    startAngle: startAngle,
    tooltip: tooltip
  });
});
PieChart.displayName = 'PieChart';
PieChart.propTypes = Object.assign({}, pie.PiePropTypes, {
  colorScheme: propTypes.oneOf(Object.keys(colors.colorSchemes)),
  showLegend: propTypes.bool
});
PieChart.defaultProps = Object.assign({}, pie.PieDefaultProps, {
  colorScheme: 'nivo',
  showLegend: false
});

var __jsx$1e = React__default['default'].createElement;
var CarouselArrow = function CarouselArrow(_ref) {
  var clickFunction = _ref.clickFunction,
      context = _ref.context,
      direction = _ref.direction,
      icon = _ref.icon,
      position = _ref.position;
  return __jsx$1e(StyledContainer$2, {
    direction: direction,
    onClick: clickFunction
  }, __jsx$1e(StyledArrow, {
    context: context,
    icon: icon,
    position: position
  }));
};
var StyledContainer$2 = styled__default['default'].div.withConfig({
  displayName: "arrow__StyledContainer",
  componentId: "xu0mw9-0"
})(["position:absolute;top:0;", " background:linear-gradient(", "deg,rgba(0,0,0,0.1) 0%,rgba(255,255,255,0) 100%);height:100%;width:80px;display:flex;justify-content:center;cursor:pointer;z-index:1;padding:1rem 0;&:hover{background:linear-gradient(", "deg,rgba(0,0,0,0.2) 0%,rgba(255,255,255,0) 100%);}"], function (_ref2) {
  var direction = _ref2.direction;
  return direction === 'left' ? 'left: 0;' : 'right: 0;';
}, function (_ref3) {
  var direction = _ref3.direction;
  return direction === 'left' ? 90 : 270;
}, function (_ref4) {
  var direction = _ref4.direction;
  return direction === 'left' ? 90 : 270;
});
var StyledArrow = styled__default['default'](Icon).withConfig({
  displayName: "arrow__StyledArrow",
  componentId: "xu0mw9-1"
})(["color:", ";align-self:center;", " ", " &&{font-size:2rem;}"], function (_ref5) {
  var context = _ref5.context,
      COLOUR = _ref5.theme.COLOUR;
  return COLOUR[context];
}, function (_ref6) {
  var position = _ref6.position;
  return position === 'top' && styled.css(["align-self:flex-start;"]);
}, function (_ref7) {
  var position = _ref7.position;
  return position === 'bottom' && styled.css(["align-self:flex-end;"]);
});
CarouselArrow.propTypes = {
  clickFunction: propTypes.func.isRequired,
  context: propTypes.string.isRequired,
  direction: propTypes.oneOf(['left', 'right']).isRequired,
  icon: propTypes.string.isRequired,
  position: propTypes.string.isRequired
};

var __jsx$1f = React__default['default'].createElement;
var CarouselSlide = function CarouselSlide(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick,
      style = _ref.style;
  return __jsx$1f(StyledSlide, {
    onClick: onClick,
    style: style
  }, children);
};
var StyledSlide = styled__default['default'].div.withConfig({
  displayName: "slide__StyledSlide",
  componentId: "k3xq9p-0"
})(["position:relative;height:100%;width:100%;overflow:hidden;user-select:none;img{width:100%;}"]);
CarouselSlide.propTypes = {
  children: propTypes.node.isRequired,
  onClick: propTypes.func,
  style: propTypes.object
};

var __jsx$1g = React__default['default'].createElement;
var CarouselSampleSlide = function CarouselSampleSlide(_ref) {
  var context = _ref.context,
      img = _ref.img,
      node = _ref.node,
      text = _ref.text;
  if (!img && !text) return null;
  return __jsx$1g(CarouselSlide, null, node, text && __jsx$1g(StyledText$2, {
    content: text,
    context: context,
    size: "xl"
  }), img && __jsx$1g(Image$1, {
    src: img
  }));
};
var StyledText$2 = styled__default['default'](Text).withConfig({
  displayName: "sample__StyledText",
  componentId: "sc-1qpc17m-0"
})(["position:absolute;top:2em;left:2em;"]);
CarouselSampleSlide.propTypes = {
  context: propTypes.string,
  img: propTypes.string,
  node: propTypes.node,
  text: propTypes.string
};
CarouselSampleSlide.defaultProps = {
  context: 'dark'
};

/**
 * Pagination - Props
 */
var PaginationPropTypes = {
  breakCount: propTypes.number,
  children: propTypes.any,
  context: propTypes.oneOf(Object.values(CONTEXT)),
  currentPage: propTypes.number,
  hideWhenOnlyOnePage: propTypes.bool,
  nextLabel: propTypes.oneOfType([propTypes.string, propTypes.node]),
  onPageChange: propTypes.func,
  pageCount: propTypes.number,
  prevLabel: propTypes.oneOfType([propTypes.string, propTypes.node]),
  showNextAndPrev: propTypes.bool,
  size: propTypes.oneOf(Object.values(SIZE))
};
var PaginationDefaultProps = {
  breakCount: 5,
  currentPage: 1,
  hideWhenOnlyOnePage: true,
  nextLabel: 'Next',
  onPageChange: function onPageChange() {},
  pageCount: 1,
  prevLabel: 'Previous'
};

/**
 * Carousel - Props
 */
var CarouselPropTypes = {
  arrowContext: propTypes.oneOf(Object.values(CONTEXT)),
  arrowPosition: propTypes.oneOf(['top', 'middle', 'bottom']),
  children: propTypes.node,
  fullWidth: propTypes.bool,
  height: propTypes.string,
  leftArrowIcon: propTypes.string,
  paginationProps: propTypes.shape(PaginationPropTypes),
  paginationPosition: propTypes.oneOf(['inside', 'outside']),
  rightArrowIcon: propTypes.string,
  showArrows: propTypes.bool,
  showPagination: propTypes.bool,
  slides: propTypes.arrayOf(propTypes.shape({
    context: propTypes.string,
    img: propTypes.string,
    node: propTypes.node,
    text: propTypes.string
  })),
  width: propTypes.string
};
var CarouselDefaultProps = {
  arrowContext: CONTEXT.BLACK,
  arrowPosition: 'middle',
  fullWidth: false,
  leftArrowIcon: 'chevron-left',
  paginationPosition: 'outside',
  rightArrowIcon: 'chevron-right',
  showArrows: true,
  showPagination: false
};

var __jsx$1h = React__default['default'].createElement;
var Carousel = function Carousel(_ref) {
  var arrowContext = _ref.arrowContext,
      arrowPosition = _ref.arrowPosition,
      children = _ref.children,
      fullWidth = _ref.fullWidth,
      height = _ref.height,
      leftArrowIcon = _ref.leftArrowIcon,
      paginationProps = _ref.paginationProps,
      paginationPosition = _ref.paginationPosition,
      rightArrowIcon = _ref.rightArrowIcon,
      showArrows = _ref.showArrows,
      showPagination = _ref.showPagination,
      slides = _ref.slides,
      width = _ref.width;

  var _useState = React.useState(0),
      currentImageIndex = _useState[0],
      setCurrentImageIndex = _useState[1];

  var dataSource = slides || children;

  var previousSlide = function previousSlide() {
    var lastIndex = dataSource.length - 1;
    var shouldResetIndex = currentImageIndex === 0;
    var index = shouldResetIndex ? lastIndex : currentImageIndex - 1;
    setCurrentImageIndex(index);
  };

  var nextSlide = function nextSlide() {
    var lastIndex = dataSource.length - 1;
    var shouldResetIndex = currentImageIndex === lastIndex;
    var index = shouldResetIndex ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(index);
  };

  var renderPagination = function renderPagination() {
    return __jsx$1h(PaginationWrapper, null, __jsx$1h(Pagination, _extends({
      onPageChange: function onPageChange(page) {
        return setCurrentImageIndex(page - 1);
      },
      currentPage: currentImageIndex + 1,
      pageCount: dataSource.length,
      showNextAndPrev: true,
      prevLabel: __jsx$1h(Icon, {
        icon: "chevron-left"
      }),
      nextLabel: __jsx$1h(Icon, {
        icon: "chevron-right"
      }),
      size: "xs"
    }, paginationProps)));
  };

  var hasNavigation = Array.isArray(dataSource) && dataSource.length > 1;
  var current = dataSource[currentImageIndex];
  return __jsx$1h(React__default['default'].Fragment, null, __jsx$1h(Wrapper$3, {
    width: width,
    height: height,
    fullWidth: fullWidth
  }, hasNavigation && showArrows && __jsx$1h(CarouselArrow, {
    context: arrowContext,
    clickFunction: previousSlide,
    direction: "left",
    icon: leftArrowIcon,
    position: arrowPosition
  }), slides ? __jsx$1h(CarouselSampleSlide, current) : current || children, hasNavigation && showPagination && paginationPosition === 'inside' && renderPagination(), hasNavigation && showArrows && __jsx$1h(CarouselArrow, {
    context: arrowContext,
    clickFunction: nextSlide,
    direction: "right",
    icon: rightArrowIcon,
    position: arrowPosition
  })), hasNavigation && showPagination && paginationPosition === 'outside' && renderPagination());
};
var Wrapper$3 = styled__default['default'].div.withConfig({
  displayName: "carousel__Wrapper",
  componentId: "sc-1656prh-0"
})(["height:", ";min-height:", ";margin:0;position:relative;width:", ";"], function (_ref2) {
  var height = _ref2.height;
  return height;
}, function (_ref3) {
  var height = _ref3.height;
  return height;
}, function (_ref4) {
  var width = _ref4.width,
      fullWidth = _ref4.fullWidth;
  return fullWidth ? '100%' : width;
});
var PaginationWrapper = styled__default['default'].div.withConfig({
  displayName: "carousel__PaginationWrapper",
  componentId: "sc-1656prh-1"
})(["margin:1rem 0;width:100%;box-sizing:border-box;"]);
Carousel.propTypes = CarouselPropTypes;
Carousel.defaultProps = CarouselDefaultProps;

var __jsx$1i = React__default['default'].createElement;
var year = new Date().getFullYear();
var Copyright = function Copyright(_ref) {
  var brand = _ref.brand,
      fixed = _ref.fixed,
      icon = _ref.icon,
      links = _ref.links;

  var renderLinks = function renderLinks() {
    return links.map(function (_ref2, index) {
      var name = _ref2.name,
          to = _ref2.to;
      return __jsx$1i(Link, {
        key: index,
        passHref: true,
        to: to
      }, __jsx$1i(StyledLink$1, null, name));
    });
  };

  return __jsx$1i(StyledCopyright, {
    fixed: fixed,
    "data-cy": "copyright"
  }, __jsx$1i(StyledContainer$3, null, __jsx$1i(Row, null, __jsx$1i(Column, {
    md: links.length > 0 ? 3 : 12
  }, __jsx$1i(StyledBrand, null, __jsx$1i(StyledIcon$4, icon), year, " \u2014 ", brand)), links.length > 0 && __jsx$1i(Column, {
    md: 9
  }, renderLinks()))));
};
var StyledCopyright = styled__default['default'].section.withConfig({
  displayName: "copyright__StyledCopyright",
  componentId: "yqlm33-0"
})(["background-color:", ";color:", ";font-size:0.75rem;", ""], function (_ref3) {
  var theme = _ref3.theme;
  return theme.COPYRIGHT.background;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.COPYRIGHT.colour;
}, function (_ref5) {
  var fixed = _ref5.fixed;
  return fixed && styled.css(["bottom:0;position:fixed;left:0;width:100%;z-index:1;"]);
});
var StyledContainer$3 = styled__default['default'](Container).withConfig({
  displayName: "copyright__StyledContainer",
  componentId: "yqlm33-1"
})(["height:3.5rem;"]);
var StyledBrand = styled__default['default'].div.withConfig({
  displayName: "copyright__StyledBrand",
  componentId: "yqlm33-2"
})(["display:flex;justify-content:center;"]);
var StyledIcon$4 = styled__default['default'](Icon).withConfig({
  displayName: "copyright__StyledIcon",
  componentId: "yqlm33-3"
})(["margin:auto 0;padding-right:0.25rem;"]);
var StyledLink$1 = styled__default['default'].span.withConfig({
  displayName: "copyright__StyledLink",
  componentId: "yqlm33-4"
})(["margin-right:1.5rem;"]);
Copyright.propTypes = {
  brand: propTypes.string.isRequired,
  fixed: propTypes.bool,
  icon: propTypes.shape({
    context: propTypes.oneOf(Object.values(CONTEXT)),
    icon: propTypes.string,
    prefix: propTypes.string
  }),
  links: propTypes.array
};
Copyright.defaultProps = {
  fixed: false,
  icon: {
    context: 'primary',
    icon: 'copyright',
    prefix: 'fas'
  },
  links: []
};

var __jsx$1j = React__default['default'].createElement;
var DogCard = function DogCard(_ref) {
  var breed = _ref.breed,
      breedName = _ref.breedName,
      breeder = _ref.breeder,
      dogId = _ref.dogId,
      gender = _ref.gender,
      image = _ref.image,
      name = _ref.name,
      price = _ref.price,
      sell = _ref.sell;
  var breederSlug = slugify(breeder);
  var nameSlug = slugify(name);
  return __jsx$1j(Card, {
    alt: breed,
    bordered: true,
    context: "light",
    footer: breedName,
    image: image,
    to: {
      as: "/breeders/".concat(breederSlug, "/dogs/").concat(nameSlug, "/").concat(dogId),
      href: {
        pathname: '/breeders/dogs/profile',
        query: {
          breederSlug: breederSlug,
          dogId: dogId,
          dogSlug: nameSlug
        }
      }
    }
  }, __jsx$1j(CardBody, null, __jsx$1j(DogName, {
    row: {
      gender: gender,
      name: name
    }
  }), sell && __jsx$1j("div", {
    className: "float-right"
  }, formatPrice(price))));
};
DogCard.propTypes = {
  breed: propTypes.string.isRequired,
  breedName: propTypes.string,
  breeder: propTypes.string.isRequired,
  dogId: propTypes.string.isRequired,
  gender: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  sell: propTypes.bool
};

var __jsx$1k = React__default['default'].createElement;
var DogLink = function DogLink(_ref) {
  var name = _ref.name;

  var slugify = function slugify(breed) {
    var slug = breed.toLowerCase().replace(/ /g, '-').replace(/'/, '');
    return slug;
  };

  var slug = slugify(name);
  return __jsx$1k(Link, {
    to: {
      as: "/dogs/breeds/".concat(slug),
      href: {
        pathname: '/dogs/breeds/profile',
        query: {
          dogSlug: slug
        }
      }
    }
  }, name);
};
DogLink.propTypes = {
  name: propTypes.string.isRequired
};

var __jsx$1l = React__default['default'].createElement;
var DogName = function DogName(_ref) {
  var _ref$row = _ref.row,
      gender = _ref$row.gender,
      name = _ref$row.name;
  return __jsx$1l(React__default['default'].Fragment, null, __jsx$1l(Icon, {
    context: gender,
    icon: gender === 'male' ? 'mars' : 'venus',
    size: "lg",
    style: {
      height: '1.5rem',
      width: '1.5rem',
      verticalAlign: 'middle'
    }
  }), ' ', name);
};
DogName.propTypes = {
  row: propTypes.oneOfType([propTypes.array, propTypes.object]).isRequired
};

var __jsx$1m = React__default['default'].createElement;
var Actions = function Actions(_ref) {
  var path = _ref.path,
      row = _ref.row;
  var dogId = row.dogId,
      uId = row.uId;

  var action = function action(_action, context, icon, route, tooltip) {
    return __jsx$1m(Link, {
      to: {
        href: {
          pathname: "".concat(path, "/").concat(route),
          query: uId ? {
            dogId: dogId,
            uId: uId
          } : {
            dogId: dogId
          }
        }
      }
    }, __jsx$1m(Tooltip, {
      content: tooltip
    }, __jsx$1m(Button, {
      "data-tip": tooltip,
      context: context,
      size: "sm",
      title: _action
    }, __jsx$1m(Icon, {
      context: "white",
      icon: icon,
      style: {
        pointerEvents: 'none'
      }
    }))));
  };

  return __jsx$1m(React__default['default'].Fragment, null, __jsx$1m(ButtonToolbar, {
    className: "float-right"
  }, action('Edit', 'primary', 'edit', 'details', 'Edit this dogs profile details'), action('Photos', 'secondary', 'images', 'photos', 'Add or Edit this dogs photos'), action('Health', 'info', 'stethoscope', 'health', 'Add or Edit this dogs health details'), action('Delete', 'danger', 'trash', 'delete', 'Delete this dog')));
};
Actions.propTypes = {
  path: propTypes.string.isRequired,
  row: propTypes.object.isRequired
};

/**
 * Columns
 */
var Columns = function Columns(actions, name) {
  return [{
    formatter: name,
    text: 'Name'
  }, {
    text: 'Breed'
  }, {
    text: 'Price'
  }, {
    text: 'Applications'
  }, {
    text: 'Approved'
  }, {
    formatter: actions,
    text: 'Actions'
  }, {
    hidden: true
  }, {
    hidden: true
  }];
};

var __jsx$1n = React__default['default'].createElement;
var TableDogs = function TableDogs(_ref) {
  var dogs = _ref.dogs,
      path = _ref.path;
  return __jsx$1n(Table, {
    columns: Columns(function (row) {
      return __jsx$1n(Actions, {
        path: path,
        row: row
      });
    }, function (row) {
      return __jsx$1n(DogName, {
        row: row
      });
    }),
    rows: dogs
  });
};

var __jsx$1o = React__default['default'].createElement;
var elementTypes = {
  Colour: 'colour',
  List: 'list',
  Icon: 'icon'
};
var Dropdown = function Dropdown(_ref) {
  var caret = _ref.caret,
      className = _ref.className,
      children = _ref.children,
      elementType = _ref.elementType,
      items = _ref.items,
      onChange = _ref.onChange,
      position = _ref.position;

  var _useState = React.useState(false),
      open = _useState[0],
      setOpen = _useState[1];

  var node = React.useRef();

  var handleClickAway = function handleClickAway(event) {
    if (node.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  React.useEffect(function () {
    if (open) {
      document.addEventListener('mousedown', handleClickAway);
    } else {
      document.removeEventListener('mousedown', handleClickAway);
    }

    return function () {
      document.removeEventListener('mousedown', handleClickAway);
    };
  }, [open]);
  return __jsx$1o(StyledDropdown, {
    className: className,
    ref: node
  }, __jsx$1o(StyledToggle$1, {
    className: "".concat(open ? 'dropdown--active' : '', " dropdown--toggle"),
    onClick: function onClick() {
      return setOpen(!open);
    }
  }, children, caret && __jsx$1o(Icon, {
    "aria-hidden": "true",
    className: "dropdown--caret",
    icon: position === Position.Top ? 'caret-up' : 'caret-down',
    prefix: "fas"
  }), items && open && __jsx$1o(DropdownMenu, {
    closeDropdown: function closeDropdown() {
      return setOpen(false);
    },
    elementType: elementType !== null && elementType !== void 0 ? elementType : elementTypes.List,
    items: items,
    position: position,
    onItemClick: onChange
  })));
};
var StyledDropdown = styled__default['default'].div.withConfig({
  displayName: "dropdown__StyledDropdown",
  componentId: "tcetc7-0"
})(["display:inline-block;position:relative;"]);
var StyledToggle$1 = styled__default['default'].div.withConfig({
  displayName: "dropdown__StyledToggle",
  componentId: "tcetc7-1"
})(["color:", ";cursor:pointer;display:inline-block;line-height:1.5;text-decoration:none;"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.NAVBAR.colourActive;
});
Dropdown.propTypes = {
  caret: propTypes.bool,
  children: propTypes.node.isRequired,
  className: propTypes.string,
  elementType: propTypes.oneOf([elementTypes.Colour, elementTypes.Icon, elementTypes.List]),
  items: propTypes.array.isRequired,
  onChange: propTypes.func,
  position: propTypes.string
};
Dropdown.defaultProps = {
  caret: true,
  position: 'left'
};

var __jsx$1p = React__default['default'].createElement;
var DropdownMenu = function DropdownMenu(_ref) {
  var closeDropdown = _ref.closeDropdown,
      elementType = _ref.elementType,
      items = _ref.items,
      onItemClick = _ref.onItemClick,
      position = _ref.position;

  var handleClick = function handleClick(item) {
    onItemClick && onItemClick(item);
    closeDropdown();
  };

  return __jsx$1p(StyledDropdownMenu, {
    elementType: elementType,
    className: "dropdown--menu",
    position: position
  }, __jsx$1p(TooltipRectangle, {
    position: position
  }), __jsx$1p(TooltipRectangle, {
    position: position,
    border: true
  }), items.map(function (item) {
    return __jsx$1p(DropdownItem, {
      closeDropdown: closeDropdown,
      elementType: elementType,
      item: item,
      key: item.id,
      onClick: function onClick() {
        return handleClick(item);
      }
    });
  }));
};
var StyledDropdownMenu = styled__default['default'].div.withConfig({
  displayName: "menu__StyledDropdownMenu",
  componentId: "sc-11f1boj-0"
})(["background:#fff;", " border-radius:0.25rem;left:0;margin-top:1px;min-width:8rem;padding:0.5rem 0;position:absolute;top:100%;z-index:1;box-shadow:0px 2px 8px rgba(0,0,0,0.15);", " ", ""], function (_ref2) {
  var theme = _ref2.theme;
  return styled.css(["border:1px solid ", ";"], theme.DROPDOWN.BORDER_COLOUR);
}, function (_ref3) {
  var position = _ref3.position;
  return position && styled.css(["left:", ";right:", ";", ""], position === Position.Right ? 'auto' : '0', position === Position.Right ? '0' : 'auto', position === Position.Top && styled.css(["bottom:100%;top:unset;"]));
}, function (_ref4) {
  var elementType = _ref4.elementType;
  return (elementType === elementTypes.Colour || elementType === elementTypes.Icon) && styled.css(["box-shadow:rgba(0,0,0,0.15) 0px 3px 12px;display:grid;padding:5px;grid-template-columns:repeat(8,2rem);grid-template-rows:repeat(3,2rem);"]);
});
var dist = '0.625rem';
var size = '0.875rem';
var TooltipRectangle = styled__default['default'].div.withConfig({
  displayName: "menu__TooltipRectangle",
  componentId: "sc-11f1boj-1"
})(["", " border-image:initial;border-style:solid;border-width:0.438rem;position:absolute;", ""], function (_ref5) {
  var border = _ref5.border;
  return styled.css(["border-color:transparent transparent ", ";"], border ? 'rgb(255, 255, 255)' : 'rgb(103,103,103)');
}, function (_ref6) {
  var position = _ref6.position,
      border = _ref6.border;

  switch (position) {
    case Position.Bottom:
      return styled.css(["top:calc(-", " - ", ");left:", ";"], size, border ? '0px' : '1px', dist);

    case Position.Top:
      return styled.css(["bottom:calc(-", " - ", ");left:", ";transform:rotateX(180deg);"], size, border ? '0px' : '1px', dist);

    case Position.Left:
      return styled.css(["display:none;bottom:", ";right:calc(-", " - ", ");transform:rotateZ(90deg);"], size, size, border ? '0px' : '1px');

    case Position.Right:
      return styled.css(["display:none;bottom:", ";left:calc(-", " - ", ");transform:rotateZ(-90deg);"], size, size, border ? '0px' : '1px');
  }
});
DropdownMenu.propTypes = {
  closeDropdown: propTypes.func,
  items: propTypes.array.isRequired,
  onItemClick: propTypes.func,
  position: propTypes.oneOf([Position.Top, Position.Right, Position.Bottom, Position.Left])
};

var __jsx$1q = React__default['default'].createElement;

var renderItem$1 = function renderItem(_ref, closeDropdown, onClick) {
  var id = _ref.id,
      name = _ref.name,
      to = _ref.to;

  var item = function item() {
    return __jsx$1q(StyledLink$2, {
      className: "dropdown--link",
      id: id,
      onClick: onClick
    }, name);
  };

  return to ? __jsx$1q(Link, {
    border: false,
    passHref: true,
    to: to
  }, item()) : item();
};

var DropdownItem = function DropdownItem(_ref2) {
  var closeDropdown = _ref2.closeDropdown,
      elementType = _ref2.elementType,
      item = _ref2.item,
      _onClick = _ref2.onClick;

  switch (elementType) {
    case elementTypes.List:
      return __jsx$1q(StyledDropdownItem, {
        divider: item.divider
      }, item.divider ? __jsx$1q(StyledDivider, null) : renderItem$1(item, closeDropdown, _onClick));

    case elementTypes.Colour:
      return __jsx$1q(StyledColourItem, {
        colour: item.colour,
        onClick: function onClick() {
          _onClick(item);
        }
      });

    case elementTypes.Icon:
      return __jsx$1q(StyledIconItem, {
        onClick: _onClick
      }, __jsx$1q(Icon, {
        fixedWidth: false,
        icon: item === null || item === void 0 ? void 0 : item.icon,
        prefix: item === null || item === void 0 ? void 0 : item.prefix
      }));

    default:
      return 'invalid elementType';
  }
};
var StyledIconItem = styled__default['default'].div.withConfig({
  displayName: "item__StyledIconItem",
  componentId: "w8w3k4-0"
})(["border:1px solid ", ";height:2rem;line-height:2rem;text-align:center;width:2rem;&:hover{border:1px solid ", ";}"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.COLOUR.light;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.COLOUR.dark;
});
var StyledColourItem = styled__default['default'].div.withConfig({
  displayName: "item__StyledColourItem",
  componentId: "w8w3k4-1"
})(["height:2em;width:2rem;", " ", ""], function (_ref5) {
  var colour = _ref5.colour,
      theme = _ref5.theme;
  return styled.css(["background-color:", ";&:hover{border:1px solid ", ";}"], colour, theme.COLOUR.white);
}, function (_ref6) {
  var colour = _ref6.colour,
      theme = _ref6.theme;
  var size = '0.5rem';
  return colour === 'transparent' && styled.css(["background-image:linear-gradient(45deg,#808080 25%,transparent 25%),linear-gradient(-45deg,#808080 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#808080 75%),linear-gradient(-45deg,transparent 75%,#808080 75%);background-size:", " ", ";background-position:0 0,0 ", ",", " -", ",-", " 0px;"], size, size, size, size, size, size);
});
var StyledDropdownItem = styled__default['default'].div.withConfig({
  displayName: "item__StyledDropdownItem",
  componentId: "w8w3k4-2"
})(["line-height:1.5;white-space:nowrap;", ""], function (_ref7) {
  var divider = _ref7.divider;
  return divider && styled.css(["padding:0;"]);
});
var StyledDivider = styled__default['default'].div.withConfig({
  displayName: "item__StyledDivider",
  componentId: "w8w3k4-3"
})(["border-top:1px solid #33475b;height:0;margin:0.5rem;overflow:hidden;"]);
var StyledLink$2 = styled__default['default'].span.withConfig({
  displayName: "item__StyledLink",
  componentId: "w8w3k4-4"
})(["color:", ";display:block;padding:0.25rem 1.5rem;&:hover{background-color:#f8f9fa;color:inherit;}"], function (_ref8) {
  var theme = _ref8.theme;
  return theme.COLOUR.primary;
});
DropdownItem.propTypes = {
  children: propTypes.node,
  closeDropdown: propTypes.func,
  item: propTypes.object,
  onClick: propTypes.func
};

var indexesOf = function (ary, item) {
  var i = -1, indexes = [];
  while((i = ary.indexOf(item, i + 1)) !== -1)
    indexes.push(i);
  return indexes
};

function unique_pred(list, compare) {
  var ptr = 1
    , len = list.length
    , a=list[0], b=list[0];
  for(var i=1; i<len; ++i) {
    b = a;
    a = list[i];
    if(compare(a, b)) {
      if(i === ptr) {
        ptr++;
        continue
      }
      list[ptr++] = a;
    }
  }
  list.length = ptr;
  return list
}

function unique_eq(list) {
  var ptr = 1
    , len = list.length
    , a=list[0], b = list[0];
  for(var i=1; i<len; ++i, b=a) {
    b = a;
    a = list[i];
    if(a !== b) {
      if(i === ptr) {
        ptr++;
        continue
      }
      list[ptr++] = a;
    }
  }
  list.length = ptr;
  return list
}

function unique$1(list, compare, sorted) {
  if(list.length === 0) {
    return list
  }
  if(compare) {
    if(!sorted) {
      list.sort(compare);
    }
    return unique_pred(list, compare)
  }
  if(!sorted) {
    list.sort();
  }
  return unique_eq(list)
}

var uniq = unique$1;

var unesc_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = unesc;
var whitespace = '[\\x20\\t\\r\\n\\f]';
var unescapeRegExp = new RegExp('\\\\([\\da-f]{1,6}' + whitespace + '?|(' + whitespace + ')|.)', 'ig');

function unesc(str) {
  return str.replace(unescapeRegExp, function (_, escaped, escapedWhitespace) {
    var high = '0x' + escaped - 0x10000; // NaN means non-codepoint
    // Workaround erroneous numeric interpretation of +"0x"
    // eslint-disable-next-line no-self-compare

    return high !== high || escapedWhitespace ? escaped : high < 0 ? // BMP codepoint
    String.fromCharCode(high + 0x10000) : // Supplemental Plane codepoint (surrogate pair)
    String.fromCharCode(high >> 10 | 0xd800, high & 0x3ff | 0xdc00);
  });
}

module.exports = exports.default;
});

var getProp_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = getProp;

function getProp(obj) {
  for (var _len = arguments.length, props = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    props[_key - 1] = arguments[_key];
  }

  while (props.length > 0) {
    var prop = props.shift();

    if (!obj[prop]) {
      return undefined;
    }

    obj = obj[prop];
  }

  return obj;
}

module.exports = exports.default;
});

var ensureObject_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = ensureObject;

function ensureObject(obj) {
  for (var _len = arguments.length, props = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    props[_key - 1] = arguments[_key];
  }

  while (props.length > 0) {
    var prop = props.shift();

    if (!obj[prop]) {
      obj[prop] = {};
    }

    obj = obj[prop];
  }
}

module.exports = exports.default;
});

var stripComments_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = stripComments;

function stripComments(str) {
  var s = "";
  var commentStart = str.indexOf("/*");
  var lastEnd = 0;

  while (commentStart >= 0) {
    s = s + str.slice(lastEnd, commentStart);
    var commentEnd = str.indexOf("*/", commentStart + 2);

    if (commentEnd < 0) {
      return s;
    }

    lastEnd = commentEnd + 2;
    commentStart = str.indexOf("/*", lastEnd);
  }

  s = s + str.slice(lastEnd);
  return s;
}

module.exports = exports.default;
});

var util = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.stripComments = exports.ensureObject = exports.getProp = exports.unesc = void 0;

var _unesc = _interopRequireDefault(unesc_1);

exports.unesc = _unesc.default;

var _getProp = _interopRequireDefault(getProp_1);

exports.getProp = _getProp.default;

var _ensureObject = _interopRequireDefault(ensureObject_1);

exports.ensureObject = _ensureObject.default;

var _stripComments = _interopRequireDefault(stripComments_1);

exports.stripComments = _stripComments.default;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
});

var node = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;



function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var cloneNode = function cloneNode(obj, parent) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  var cloned = new obj.constructor();

  for (var i in obj) {
    if (!obj.hasOwnProperty(i)) {
      continue;
    }

    var value = obj[i];
    var type = typeof value;

    if (i === 'parent' && type === 'object') {
      if (parent) {
        cloned[i] = parent;
      }
    } else if (value instanceof Array) {
      cloned[i] = value.map(function (j) {
        return cloneNode(j, cloned);
      });
    } else {
      cloned[i] = cloneNode(value, cloned);
    }
  }

  return cloned;
};

var Node =
/*#__PURE__*/
function () {
  function Node(opts) {
    if (opts === void 0) {
      opts = {};
    }

    Object.assign(this, opts);
    this.spaces = this.spaces || {};
    this.spaces.before = this.spaces.before || '';
    this.spaces.after = this.spaces.after || '';
  }

  var _proto = Node.prototype;

  _proto.remove = function remove() {
    if (this.parent) {
      this.parent.removeChild(this);
    }

    this.parent = undefined;
    return this;
  };

  _proto.replaceWith = function replaceWith() {
    if (this.parent) {
      for (var index in arguments) {
        this.parent.insertBefore(this, arguments[index]);
      }

      this.remove();
    }

    return this;
  };

  _proto.next = function next() {
    return this.parent.at(this.parent.index(this) + 1);
  };

  _proto.prev = function prev() {
    return this.parent.at(this.parent.index(this) - 1);
  };

  _proto.clone = function clone(overrides) {
    if (overrides === void 0) {
      overrides = {};
    }

    var cloned = cloneNode(this);

    for (var name in overrides) {
      cloned[name] = overrides[name];
    }

    return cloned;
  }
  /**
   * Some non-standard syntax doesn't follow normal escaping rules for css.
   * This allows non standard syntax to be appended to an existing property
   * by specifying the escaped value. By specifying the escaped value,
   * illegal characters are allowed to be directly inserted into css output.
   * @param {string} name the property to set
   * @param {any} value the unescaped value of the property
   * @param {string} valueEscaped optional. the escaped value of the property.
   */
  ;

  _proto.appendToPropertyAndEscape = function appendToPropertyAndEscape(name, value, valueEscaped) {
    if (!this.raws) {
      this.raws = {};
    }

    var originalValue = this[name];
    var originalEscaped = this.raws[name];
    this[name] = originalValue + value; // this may trigger a setter that updates raws, so it has to be set first.

    if (originalEscaped || valueEscaped !== value) {
      this.raws[name] = (originalEscaped || originalValue) + valueEscaped;
    } else {
      delete this.raws[name]; // delete any escaped value that was created by the setter.
    }
  }
  /**
   * Some non-standard syntax doesn't follow normal escaping rules for css.
   * This allows the escaped value to be specified directly, allowing illegal
   * characters to be directly inserted into css output.
   * @param {string} name the property to set
   * @param {any} value the unescaped value of the property
   * @param {string} valueEscaped the escaped value of the property.
   */
  ;

  _proto.setPropertyAndEscape = function setPropertyAndEscape(name, value, valueEscaped) {
    if (!this.raws) {
      this.raws = {};
    }

    this[name] = value; // this may trigger a setter that updates raws, so it has to be set first.

    this.raws[name] = valueEscaped;
  }
  /**
   * When you want a value to passed through to CSS directly. This method
   * deletes the corresponding raw value causing the stringifier to fallback
   * to the unescaped value.
   * @param {string} name the property to set.
   * @param {any} value The value that is both escaped and unescaped.
   */
  ;

  _proto.setPropertyWithoutEscape = function setPropertyWithoutEscape(name, value) {
    this[name] = value; // this may trigger a setter that updates raws, so it has to be set first.

    if (this.raws) {
      delete this.raws[name];
    }
  }
  /**
   *
   * @param {number} line The number (starting with 1)
   * @param {number} column The column number (starting with 1)
   */
  ;

  _proto.isAtPosition = function isAtPosition(line, column) {
    if (this.source && this.source.start && this.source.end) {
      if (this.source.start.line > line) {
        return false;
      }

      if (this.source.end.line < line) {
        return false;
      }

      if (this.source.start.line === line && this.source.start.column > column) {
        return false;
      }

      if (this.source.end.line === line && this.source.end.column < column) {
        return false;
      }

      return true;
    }

    return undefined;
  };

  _proto.stringifyProperty = function stringifyProperty(name) {
    return this.raws && this.raws[name] || this[name];
  };

  _proto.valueToString = function valueToString() {
    return String(this.stringifyProperty("value"));
  };

  _proto.toString = function toString() {
    return [this.rawSpaceBefore, this.valueToString(), this.rawSpaceAfter].join('');
  };

  _createClass(Node, [{
    key: "rawSpaceBefore",
    get: function get() {
      var rawSpace = this.raws && this.raws.spaces && this.raws.spaces.before;

      if (rawSpace === undefined) {
        rawSpace = this.spaces && this.spaces.before;
      }

      return rawSpace || "";
    },
    set: function set(raw) {
      (0, util.ensureObject)(this, "raws", "spaces");
      this.raws.spaces.before = raw;
    }
  }, {
    key: "rawSpaceAfter",
    get: function get() {
      var rawSpace = this.raws && this.raws.spaces && this.raws.spaces.after;

      if (rawSpace === undefined) {
        rawSpace = this.spaces.after;
      }

      return rawSpace || "";
    },
    set: function set(raw) {
      (0, util.ensureObject)(this, "raws", "spaces");
      this.raws.spaces.after = raw;
    }
  }]);

  return Node;
}();

exports.default = Node;
module.exports = exports.default;
});

var types = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.UNIVERSAL = exports.ATTRIBUTE = exports.CLASS = exports.COMBINATOR = exports.COMMENT = exports.ID = exports.NESTING = exports.PSEUDO = exports.ROOT = exports.SELECTOR = exports.STRING = exports.TAG = void 0;
var TAG = 'tag';
exports.TAG = TAG;
var STRING = 'string';
exports.STRING = STRING;
var SELECTOR = 'selector';
exports.SELECTOR = SELECTOR;
var ROOT = 'root';
exports.ROOT = ROOT;
var PSEUDO = 'pseudo';
exports.PSEUDO = PSEUDO;
var NESTING = 'nesting';
exports.NESTING = NESTING;
var ID = 'id';
exports.ID = ID;
var COMMENT = 'comment';
exports.COMMENT = COMMENT;
var COMBINATOR = 'combinator';
exports.COMBINATOR = COMBINATOR;
var CLASS = 'class';
exports.CLASS = CLASS;
var ATTRIBUTE = 'attribute';
exports.ATTRIBUTE = ATTRIBUTE;
var UNIVERSAL = 'universal';
exports.UNIVERSAL = UNIVERSAL;
});

var container = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

var _node = _interopRequireDefault(node);

var types$1 = _interopRequireWildcard(types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var Container =
/*#__PURE__*/
function (_Node) {
  _inheritsLoose(Container, _Node);

  function Container(opts) {
    var _this;

    _this = _Node.call(this, opts) || this;

    if (!_this.nodes) {
      _this.nodes = [];
    }

    return _this;
  }

  var _proto = Container.prototype;

  _proto.append = function append(selector) {
    selector.parent = this;
    this.nodes.push(selector);
    return this;
  };

  _proto.prepend = function prepend(selector) {
    selector.parent = this;
    this.nodes.unshift(selector);
    return this;
  };

  _proto.at = function at(index) {
    return this.nodes[index];
  };

  _proto.index = function index(child) {
    if (typeof child === 'number') {
      return child;
    }

    return this.nodes.indexOf(child);
  };

  _proto.removeChild = function removeChild(child) {
    child = this.index(child);
    this.at(child).parent = undefined;
    this.nodes.splice(child, 1);
    var index;

    for (var id in this.indexes) {
      index = this.indexes[id];

      if (index >= child) {
        this.indexes[id] = index - 1;
      }
    }

    return this;
  };

  _proto.removeAll = function removeAll() {
    for (var _iterator = this.nodes, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var node = _ref;
      node.parent = undefined;
    }

    this.nodes = [];
    return this;
  };

  _proto.empty = function empty() {
    return this.removeAll();
  };

  _proto.insertAfter = function insertAfter(oldNode, newNode) {
    newNode.parent = this;
    var oldIndex = this.index(oldNode);
    this.nodes.splice(oldIndex + 1, 0, newNode);
    newNode.parent = this;
    var index;

    for (var id in this.indexes) {
      index = this.indexes[id];

      if (oldIndex <= index) {
        this.indexes[id] = index + 1;
      }
    }

    return this;
  };

  _proto.insertBefore = function insertBefore(oldNode, newNode) {
    newNode.parent = this;
    var oldIndex = this.index(oldNode);
    this.nodes.splice(oldIndex, 0, newNode);
    newNode.parent = this;
    var index;

    for (var id in this.indexes) {
      index = this.indexes[id];

      if (index <= oldIndex) {
        this.indexes[id] = index + 1;
      }
    }

    return this;
  };

  _proto._findChildAtPosition = function _findChildAtPosition(line, col) {
    var found = undefined;
    this.each(function (node) {
      if (node.atPosition) {
        var foundChild = node.atPosition(line, col);

        if (foundChild) {
          found = foundChild;
          return false;
        }
      } else if (node.isAtPosition(line, col)) {
        found = node;
        return false;
      }
    });
    return found;
  }
  /**
   * Return the most specific node at the line and column number given.
   * The source location is based on the original parsed location, locations aren't
   * updated as selector nodes are mutated.
   * 
   * Note that this location is relative to the location of the first character
   * of the selector, and not the location of the selector in the overall document
   * when used in conjunction with postcss.
   *
   * If not found, returns undefined.
   * @param {number} line The line number of the node to find. (1-based index)
   * @param {number} col  The column number of the node to find. (1-based index)
   */
  ;

  _proto.atPosition = function atPosition(line, col) {
    if (this.isAtPosition(line, col)) {
      return this._findChildAtPosition(line, col) || this;
    } else {
      return undefined;
    }
  };

  _proto._inferEndPosition = function _inferEndPosition() {
    if (this.last && this.last.source && this.last.source.end) {
      this.source = this.source || {};
      this.source.end = this.source.end || {};
      Object.assign(this.source.end, this.last.source.end);
    }
  };

  _proto.each = function each(callback) {
    if (!this.lastEach) {
      this.lastEach = 0;
    }

    if (!this.indexes) {
      this.indexes = {};
    }

    this.lastEach++;
    var id = this.lastEach;
    this.indexes[id] = 0;

    if (!this.length) {
      return undefined;
    }

    var index, result;

    while (this.indexes[id] < this.length) {
      index = this.indexes[id];
      result = callback(this.at(index), index);

      if (result === false) {
        break;
      }

      this.indexes[id] += 1;
    }

    delete this.indexes[id];

    if (result === false) {
      return false;
    }
  };

  _proto.walk = function walk(callback) {
    return this.each(function (node, i) {
      var result = callback(node, i);

      if (result !== false && node.length) {
        result = node.walk(callback);
      }

      if (result === false) {
        return false;
      }
    });
  };

  _proto.walkAttributes = function walkAttributes(callback) {
    var _this2 = this;

    return this.walk(function (selector) {
      if (selector.type === types$1.ATTRIBUTE) {
        return callback.call(_this2, selector);
      }
    });
  };

  _proto.walkClasses = function walkClasses(callback) {
    var _this3 = this;

    return this.walk(function (selector) {
      if (selector.type === types$1.CLASS) {
        return callback.call(_this3, selector);
      }
    });
  };

  _proto.walkCombinators = function walkCombinators(callback) {
    var _this4 = this;

    return this.walk(function (selector) {
      if (selector.type === types$1.COMBINATOR) {
        return callback.call(_this4, selector);
      }
    });
  };

  _proto.walkComments = function walkComments(callback) {
    var _this5 = this;

    return this.walk(function (selector) {
      if (selector.type === types$1.COMMENT) {
        return callback.call(_this5, selector);
      }
    });
  };

  _proto.walkIds = function walkIds(callback) {
    var _this6 = this;

    return this.walk(function (selector) {
      if (selector.type === types$1.ID) {
        return callback.call(_this6, selector);
      }
    });
  };

  _proto.walkNesting = function walkNesting(callback) {
    var _this7 = this;

    return this.walk(function (selector) {
      if (selector.type === types$1.NESTING) {
        return callback.call(_this7, selector);
      }
    });
  };

  _proto.walkPseudos = function walkPseudos(callback) {
    var _this8 = this;

    return this.walk(function (selector) {
      if (selector.type === types$1.PSEUDO) {
        return callback.call(_this8, selector);
      }
    });
  };

  _proto.walkTags = function walkTags(callback) {
    var _this9 = this;

    return this.walk(function (selector) {
      if (selector.type === types$1.TAG) {
        return callback.call(_this9, selector);
      }
    });
  };

  _proto.walkUniversals = function walkUniversals(callback) {
    var _this10 = this;

    return this.walk(function (selector) {
      if (selector.type === types$1.UNIVERSAL) {
        return callback.call(_this10, selector);
      }
    });
  };

  _proto.split = function split(callback) {
    var _this11 = this;

    var current = [];
    return this.reduce(function (memo, node, index) {
      var split = callback.call(_this11, node);
      current.push(node);

      if (split) {
        memo.push(current);
        current = [];
      } else if (index === _this11.length - 1) {
        memo.push(current);
      }

      return memo;
    }, []);
  };

  _proto.map = function map(callback) {
    return this.nodes.map(callback);
  };

  _proto.reduce = function reduce(callback, memo) {
    return this.nodes.reduce(callback, memo);
  };

  _proto.every = function every(callback) {
    return this.nodes.every(callback);
  };

  _proto.some = function some(callback) {
    return this.nodes.some(callback);
  };

  _proto.filter = function filter(callback) {
    return this.nodes.filter(callback);
  };

  _proto.sort = function sort(callback) {
    return this.nodes.sort(callback);
  };

  _proto.toString = function toString() {
    return this.map(String).join('');
  };

  _createClass(Container, [{
    key: "first",
    get: function get() {
      return this.at(0);
    }
  }, {
    key: "last",
    get: function get() {
      return this.at(this.length - 1);
    }
  }, {
    key: "length",
    get: function get() {
      return this.nodes.length;
    }
  }]);

  return Container;
}(_node.default);

exports.default = Container;
module.exports = exports.default;
});

var root = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

var _container = _interopRequireDefault(container);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var Root =
/*#__PURE__*/
function (_Container) {
  _inheritsLoose(Root, _Container);

  function Root(opts) {
    var _this;

    _this = _Container.call(this, opts) || this;
    _this.type = types.ROOT;
    return _this;
  }

  var _proto = Root.prototype;

  _proto.toString = function toString() {
    var str = this.reduce(function (memo, selector) {
      memo.push(String(selector));
      return memo;
    }, []).join(',');
    return this.trailingComma ? str + ',' : str;
  };

  _proto.error = function error(message, options) {
    if (this._error) {
      return this._error(message, options);
    } else {
      return new Error(message);
    }
  };

  _createClass(Root, [{
    key: "errorGenerator",
    set: function set(handler) {
      this._error = handler;
    }
  }]);

  return Root;
}(_container.default);

exports.default = Root;
module.exports = exports.default;
});

var selector = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

var _container = _interopRequireDefault(container);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var Selector =
/*#__PURE__*/
function (_Container) {
  _inheritsLoose(Selector, _Container);

  function Selector(opts) {
    var _this;

    _this = _Container.call(this, opts) || this;
    _this.type = types.SELECTOR;
    return _this;
  }

  return Selector;
}(_container.default);

exports.default = Selector;
module.exports = exports.default;
});

/*! https://mths.be/cssesc v3.0.0 by @mathias */

var object = {};
var hasOwnProperty$2 = object.hasOwnProperty;
var merge = function merge(options, defaults) {
	if (!options) {
		return defaults;
	}
	var result = {};
	for (var key in defaults) {
		// `if (defaults.hasOwnProperty(key) { … }` is not needed here, since
		// only recognized option names are used.
		result[key] = hasOwnProperty$2.call(options, key) ? options[key] : defaults[key];
	}
	return result;
};

var regexAnySingleEscape = /[ -,\.\/:-@\[-\^`\{-~]/;
var regexSingleEscape = /[ -,\.\/:-@\[\]\^`\{-~]/;
var regexExcessiveSpaces = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g;

// https://mathiasbynens.be/notes/css-escapes#css
var cssesc = function cssesc(string, options) {
	options = merge(options, cssesc.options);
	if (options.quotes != 'single' && options.quotes != 'double') {
		options.quotes = 'single';
	}
	var quote = options.quotes == 'double' ? '"' : '\'';
	var isIdentifier = options.isIdentifier;

	var firstChar = string.charAt(0);
	var output = '';
	var counter = 0;
	var length = string.length;
	while (counter < length) {
		var character = string.charAt(counter++);
		var codePoint = character.charCodeAt();
		var value = void 0;
		// If it’s not a printable ASCII character…
		if (codePoint < 0x20 || codePoint > 0x7E) {
			if (codePoint >= 0xD800 && codePoint <= 0xDBFF && counter < length) {
				// It’s a high surrogate, and there is a next character.
				var extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) {
					// next character is low surrogate
					codePoint = ((codePoint & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000;
				} else {
					// It’s an unmatched surrogate; only append this code unit, in case
					// the next code unit is the high surrogate of a surrogate pair.
					counter--;
				}
			}
			value = '\\' + codePoint.toString(16).toUpperCase() + ' ';
		} else {
			if (options.escapeEverything) {
				if (regexAnySingleEscape.test(character)) {
					value = '\\' + character;
				} else {
					value = '\\' + codePoint.toString(16).toUpperCase() + ' ';
				}
			} else if (/[\t\n\f\r\x0B]/.test(character)) {
				value = '\\' + codePoint.toString(16).toUpperCase() + ' ';
			} else if (character == '\\' || !isIdentifier && (character == '"' && quote == character || character == '\'' && quote == character) || isIdentifier && regexSingleEscape.test(character)) {
				value = '\\' + character;
			} else {
				value = character;
			}
		}
		output += value;
	}

	if (isIdentifier) {
		if (/^-[-\d]/.test(output)) {
			output = '\\-' + output.slice(1);
		} else if (/\d/.test(firstChar)) {
			output = '\\3' + firstChar + ' ' + output.slice(1);
		}
	}

	// Remove spaces after `\HEX` escapes that are not followed by a hex digit,
	// since they’re redundant. Note that this is only possible if the escape
	// sequence isn’t preceded by an odd number of backslashes.
	output = output.replace(regexExcessiveSpaces, function ($0, $1, $2) {
		if ($1 && $1.length % 2) {
			// It’s not safe to remove the space, so don’t.
			return $0;
		}
		// Strip the space.
		return ($1 || '') + $2;
	});

	if (!isIdentifier && options.wrap) {
		return quote + output + quote;
	}
	return output;
};

// Expose default options (so they can be overridden globally).
cssesc.options = {
	'escapeEverything': false,
	'isIdentifier': false,
	'quotes': 'single',
	'wrap': false
};

cssesc.version = '3.0.0';

var cssesc_1 = cssesc;

var className = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

var _cssesc = _interopRequireDefault(cssesc_1);



var _node = _interopRequireDefault(node);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var ClassName =
/*#__PURE__*/
function (_Node) {
  _inheritsLoose(ClassName, _Node);

  function ClassName(opts) {
    var _this;

    _this = _Node.call(this, opts) || this;
    _this.type = types.CLASS;
    _this._constructed = true;
    return _this;
  }

  var _proto = ClassName.prototype;

  _proto.valueToString = function valueToString() {
    return '.' + _Node.prototype.valueToString.call(this);
  };

  _createClass(ClassName, [{
    key: "value",
    set: function set(v) {
      if (this._constructed) {
        var escaped = (0, _cssesc.default)(v, {
          isIdentifier: true
        });

        if (escaped !== v) {
          (0, util.ensureObject)(this, "raws");
          this.raws.value = escaped;
        } else if (this.raws) {
          delete this.raws.value;
        }
      }

      this._value = v;
    },
    get: function get() {
      return this._value;
    }
  }]);

  return ClassName;
}(_node.default);

exports.default = ClassName;
module.exports = exports.default;
});

var comment = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

var _node = _interopRequireDefault(node);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var Comment =
/*#__PURE__*/
function (_Node) {
  _inheritsLoose(Comment, _Node);

  function Comment(opts) {
    var _this;

    _this = _Node.call(this, opts) || this;
    _this.type = types.COMMENT;
    return _this;
  }

  return Comment;
}(_node.default);

exports.default = Comment;
module.exports = exports.default;
});

var id = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

var _node = _interopRequireDefault(node);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var ID =
/*#__PURE__*/
function (_Node) {
  _inheritsLoose(ID, _Node);

  function ID(opts) {
    var _this;

    _this = _Node.call(this, opts) || this;
    _this.type = types.ID;
    return _this;
  }

  var _proto = ID.prototype;

  _proto.valueToString = function valueToString() {
    return '#' + _Node.prototype.valueToString.call(this);
  };

  return ID;
}(_node.default);

exports.default = ID;
module.exports = exports.default;
});

var namespace = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

var _cssesc = _interopRequireDefault(cssesc_1);



var _node = _interopRequireDefault(node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var Namespace =
/*#__PURE__*/
function (_Node) {
  _inheritsLoose(Namespace, _Node);

  function Namespace() {
    return _Node.apply(this, arguments) || this;
  }

  var _proto = Namespace.prototype;

  _proto.qualifiedName = function qualifiedName(value) {
    if (this.namespace) {
      return this.namespaceString + "|" + value;
    } else {
      return value;
    }
  };

  _proto.valueToString = function valueToString() {
    return this.qualifiedName(_Node.prototype.valueToString.call(this));
  };

  _createClass(Namespace, [{
    key: "namespace",
    get: function get() {
      return this._namespace;
    },
    set: function set(namespace) {
      if (namespace === true || namespace === "*" || namespace === "&") {
        this._namespace = namespace;

        if (this.raws) {
          delete this.raws.namespace;
        }

        return;
      }

      var escaped = (0, _cssesc.default)(namespace, {
        isIdentifier: true
      });
      this._namespace = namespace;

      if (escaped !== namespace) {
        (0, util.ensureObject)(this, "raws");
        this.raws.namespace = escaped;
      } else if (this.raws) {
        delete this.raws.namespace;
      }
    }
  }, {
    key: "ns",
    get: function get() {
      return this._namespace;
    },
    set: function set(namespace) {
      this.namespace = namespace;
    }
  }, {
    key: "namespaceString",
    get: function get() {
      if (this.namespace) {
        var ns = this.stringifyProperty("namespace");

        if (ns === true) {
          return '';
        } else {
          return ns;
        }
      } else {
        return '';
      }
    }
  }]);

  return Namespace;
}(_node.default);

exports.default = Namespace;
module.exports = exports.default;
});

var tag = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

var _namespace = _interopRequireDefault(namespace);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var Tag =
/*#__PURE__*/
function (_Namespace) {
  _inheritsLoose(Tag, _Namespace);

  function Tag(opts) {
    var _this;

    _this = _Namespace.call(this, opts) || this;
    _this.type = types.TAG;
    return _this;
  }

  return Tag;
}(_namespace.default);

exports.default = Tag;
module.exports = exports.default;
});

var string = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

var _node = _interopRequireDefault(node);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var String =
/*#__PURE__*/
function (_Node) {
  _inheritsLoose(String, _Node);

  function String(opts) {
    var _this;

    _this = _Node.call(this, opts) || this;
    _this.type = types.STRING;
    return _this;
  }

  return String;
}(_node.default);

exports.default = String;
module.exports = exports.default;
});

var pseudo = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

var _container = _interopRequireDefault(container);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var Pseudo =
/*#__PURE__*/
function (_Container) {
  _inheritsLoose(Pseudo, _Container);

  function Pseudo(opts) {
    var _this;

    _this = _Container.call(this, opts) || this;
    _this.type = types.PSEUDO;
    return _this;
  }

  var _proto = Pseudo.prototype;

  _proto.toString = function toString() {
    var params = this.length ? '(' + this.map(String).join(',') + ')' : '';
    return [this.rawSpaceBefore, this.stringifyProperty("value"), params, this.rawSpaceAfter].join('');
  };

  return Pseudo;
}(_container.default);

exports.default = Pseudo;
module.exports = exports.default;
});

/**
 * For Node.js, simply re-export the core `util.deprecate` function.
 */

var node$1 = util__default['default'].deprecate;

var attribute = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.unescapeValue = unescapeValue;
exports.default = void 0;

var _cssesc = _interopRequireDefault(cssesc_1);

var _unesc = _interopRequireDefault(unesc_1);

var _namespace = _interopRequireDefault(namespace);



var _CSSESC_QUOTE_OPTIONS;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }



var WRAPPED_IN_QUOTES = /^('|")(.*)\1$/;
var warnOfDeprecatedValueAssignment = node$1(function () {}, "Assigning an attribute a value containing characters that might need to be escaped is deprecated. " + "Call attribute.setValue() instead.");
var warnOfDeprecatedQuotedAssignment = node$1(function () {}, "Assigning attr.quoted is deprecated and has no effect. Assign to attr.quoteMark instead.");
var warnOfDeprecatedConstructor = node$1(function () {}, "Constructing an Attribute selector with a value without specifying quoteMark is deprecated. Note: The value should be unescaped now.");

function unescapeValue(value) {
  var deprecatedUsage = false;
  var quoteMark = null;
  var unescaped = value;
  var m = unescaped.match(WRAPPED_IN_QUOTES);

  if (m) {
    quoteMark = m[1];
    unescaped = m[2];
  }

  unescaped = (0, _unesc.default)(unescaped);

  if (unescaped !== value) {
    deprecatedUsage = true;
  }

  return {
    deprecatedUsage: deprecatedUsage,
    unescaped: unescaped,
    quoteMark: quoteMark
  };
}

function handleDeprecatedContructorOpts(opts) {
  if (opts.quoteMark !== undefined) {
    return opts;
  }

  if (opts.value === undefined) {
    return opts;
  }

  warnOfDeprecatedConstructor();

  var _unescapeValue = unescapeValue(opts.value),
      quoteMark = _unescapeValue.quoteMark,
      unescaped = _unescapeValue.unescaped;

  if (!opts.raws) {
    opts.raws = {};
  }

  if (opts.raws.value === undefined) {
    opts.raws.value = opts.value;
  }

  opts.value = unescaped;
  opts.quoteMark = quoteMark;
  return opts;
}

var Attribute =
/*#__PURE__*/
function (_Namespace) {
  _inheritsLoose(Attribute, _Namespace);

  function Attribute(opts) {
    var _this;

    if (opts === void 0) {
      opts = {};
    }

    _this = _Namespace.call(this, handleDeprecatedContructorOpts(opts)) || this;
    _this.type = types.ATTRIBUTE;
    _this.raws = _this.raws || {};
    Object.defineProperty(_this.raws, 'unquoted', {
      get: node$1(function () {
        return _this.value;
      }, "attr.raws.unquoted is deprecated. Call attr.value instead."),
      set: node$1(function () {
        return _this.value;
      }, "Setting attr.raws.unquoted is deprecated and has no effect. attr.value is unescaped by default now.")
    });
    _this._constructed = true;
    return _this;
  }
  /**
   * Returns the Attribute's value quoted such that it would be legal to use
   * in the value of a css file. The original value's quotation setting
   * used for stringification is left unchanged. See `setValue(value, options)`
   * if you want to control the quote settings of a new value for the attribute.
   *
   * You can also change the quotation used for the current value by setting quoteMark.
   *
   * Options:
   *   * quoteMark {'"' | "'" | null} - Use this value to quote the value. If this
   *     option is not set, the original value for quoteMark will be used. If
   *     indeterminate, a double quote is used. The legal values are:
   *     * `null` - the value will be unquoted and characters will be escaped as necessary.
   *     * `'` - the value will be quoted with a single quote and single quotes are escaped.
   *     * `"` - the value will be quoted with a double quote and double quotes are escaped.
   *   * preferCurrentQuoteMark {boolean} - if true, prefer the source quote mark
   *     over the quoteMark option value.
   *   * smart {boolean} - if true, will select a quote mark based on the value
   *     and the other options specified here. See the `smartQuoteMark()`
   *     method.
   **/


  var _proto = Attribute.prototype;

  _proto.getQuotedValue = function getQuotedValue(options) {
    if (options === void 0) {
      options = {};
    }

    var quoteMark = this._determineQuoteMark(options);

    var cssescopts = CSSESC_QUOTE_OPTIONS[quoteMark];
    var escaped = (0, _cssesc.default)(this._value, cssescopts);
    return escaped;
  };

  _proto._determineQuoteMark = function _determineQuoteMark(options) {
    return options.smart ? this.smartQuoteMark(options) : this.preferredQuoteMark(options);
  }
  /**
   * Set the unescaped value with the specified quotation options. The value
   * provided must not include any wrapping quote marks -- those quotes will
   * be interpreted as part of the value and escaped accordingly.
   */
  ;

  _proto.setValue = function setValue(value, options) {
    if (options === void 0) {
      options = {};
    }

    this._value = value;
    this._quoteMark = this._determineQuoteMark(options);

    this._syncRawValue();
  }
  /**
   * Intelligently select a quoteMark value based on the value's contents. If
   * the value is a legal CSS ident, it will not be quoted. Otherwise a quote
   * mark will be picked that minimizes the number of escapes.
   *
   * If there's no clear winner, the quote mark from these options is used,
   * then the source quote mark (this is inverted if `preferCurrentQuoteMark` is
   * true). If the quoteMark is unspecified, a double quote is used.
   *
   * @param options This takes the quoteMark and preferCurrentQuoteMark options
   * from the quoteValue method.
   */
  ;

  _proto.smartQuoteMark = function smartQuoteMark(options) {
    var v = this.value;
    var numSingleQuotes = v.replace(/[^']/g, '').length;
    var numDoubleQuotes = v.replace(/[^"]/g, '').length;

    if (numSingleQuotes + numDoubleQuotes === 0) {
      var escaped = (0, _cssesc.default)(v, {
        isIdentifier: true
      });

      if (escaped === v) {
        return Attribute.NO_QUOTE;
      } else {
        var pref = this.preferredQuoteMark(options);

        if (pref === Attribute.NO_QUOTE) {
          // pick a quote mark that isn't none and see if it's smaller
          var quote = this.quoteMark || options.quoteMark || Attribute.DOUBLE_QUOTE;
          var opts = CSSESC_QUOTE_OPTIONS[quote];
          var quoteValue = (0, _cssesc.default)(v, opts);

          if (quoteValue.length < escaped.length) {
            return quote;
          }
        }

        return pref;
      }
    } else if (numDoubleQuotes === numSingleQuotes) {
      return this.preferredQuoteMark(options);
    } else if (numDoubleQuotes < numSingleQuotes) {
      return Attribute.DOUBLE_QUOTE;
    } else {
      return Attribute.SINGLE_QUOTE;
    }
  }
  /**
   * Selects the preferred quote mark based on the options and the current quote mark value.
   * If you want the quote mark to depend on the attribute value, call `smartQuoteMark(opts)`
   * instead.
   */
  ;

  _proto.preferredQuoteMark = function preferredQuoteMark(options) {
    var quoteMark = options.preferCurrentQuoteMark ? this.quoteMark : options.quoteMark;

    if (quoteMark === undefined) {
      quoteMark = options.preferCurrentQuoteMark ? options.quoteMark : this.quoteMark;
    }

    if (quoteMark === undefined) {
      quoteMark = Attribute.DOUBLE_QUOTE;
    }

    return quoteMark;
  };

  _proto._syncRawValue = function _syncRawValue() {
    var rawValue = (0, _cssesc.default)(this._value, CSSESC_QUOTE_OPTIONS[this.quoteMark]);

    if (rawValue === this._value) {
      if (this.raws) {
        delete this.raws.value;
      }
    } else {
      this.raws.value = rawValue;
    }
  };

  _proto._handleEscapes = function _handleEscapes(prop, value) {
    if (this._constructed) {
      var escaped = (0, _cssesc.default)(value, {
        isIdentifier: true
      });

      if (escaped !== value) {
        this.raws[prop] = escaped;
      } else {
        delete this.raws[prop];
      }
    }
  };

  _proto._spacesFor = function _spacesFor(name) {
    var attrSpaces = {
      before: '',
      after: ''
    };
    var spaces = this.spaces[name] || {};
    var rawSpaces = this.raws.spaces && this.raws.spaces[name] || {};
    return Object.assign(attrSpaces, spaces, rawSpaces);
  };

  _proto._stringFor = function _stringFor(name, spaceName, concat) {
    if (spaceName === void 0) {
      spaceName = name;
    }

    if (concat === void 0) {
      concat = defaultAttrConcat;
    }

    var attrSpaces = this._spacesFor(spaceName);

    return concat(this.stringifyProperty(name), attrSpaces);
  }
  /**
   * returns the offset of the attribute part specified relative to the
   * start of the node of the output string.
   *
   * * "ns" - alias for "namespace"
   * * "namespace" - the namespace if it exists.
   * * "attribute" - the attribute name
   * * "attributeNS" - the start of the attribute or its namespace
   * * "operator" - the match operator of the attribute
   * * "value" - The value (string or identifier)
   * * "insensitive" - the case insensitivity flag;
   * @param part One of the possible values inside an attribute.
   * @returns -1 if the name is invalid or the value doesn't exist in this attribute.
   */
  ;

  _proto.offsetOf = function offsetOf(name) {
    var count = 1;

    var attributeSpaces = this._spacesFor("attribute");

    count += attributeSpaces.before.length;

    if (name === "namespace" || name === "ns") {
      return this.namespace ? count : -1;
    }

    if (name === "attributeNS") {
      return count;
    }

    count += this.namespaceString.length;

    if (this.namespace) {
      count += 1;
    }

    if (name === "attribute") {
      return count;
    }

    count += this.stringifyProperty("attribute").length;
    count += attributeSpaces.after.length;

    var operatorSpaces = this._spacesFor("operator");

    count += operatorSpaces.before.length;
    var operator = this.stringifyProperty("operator");

    if (name === "operator") {
      return operator ? count : -1;
    }

    count += operator.length;
    count += operatorSpaces.after.length;

    var valueSpaces = this._spacesFor("value");

    count += valueSpaces.before.length;
    var value = this.stringifyProperty("value");

    if (name === "value") {
      return value ? count : -1;
    }

    count += value.length;
    count += valueSpaces.after.length;

    var insensitiveSpaces = this._spacesFor("insensitive");

    count += insensitiveSpaces.before.length;

    if (name === "insensitive") {
      return this.insensitive ? count : -1;
    }

    return -1;
  };

  _proto.toString = function toString() {
    var _this2 = this;

    var selector = [this.rawSpaceBefore, '['];
    selector.push(this._stringFor('qualifiedAttribute', 'attribute'));

    if (this.operator && (this.value || this.value === '')) {
      selector.push(this._stringFor('operator'));
      selector.push(this._stringFor('value'));
      selector.push(this._stringFor('insensitiveFlag', 'insensitive', function (attrValue, attrSpaces) {
        if (attrValue.length > 0 && !_this2.quoted && attrSpaces.before.length === 0 && !(_this2.spaces.value && _this2.spaces.value.after)) {
          attrSpaces.before = " ";
        }

        return defaultAttrConcat(attrValue, attrSpaces);
      }));
    }

    selector.push(']');
    selector.push(this.rawSpaceAfter);
    return selector.join('');
  };

  _createClass(Attribute, [{
    key: "quoted",
    get: function get() {
      var qm = this.quoteMark;
      return qm === "'" || qm === '"';
    },
    set: function set(value) {
      warnOfDeprecatedQuotedAssignment();
    }
    /**
     * returns a single (`'`) or double (`"`) quote character if the value is quoted.
     * returns `null` if the value is not quoted.
     * returns `undefined` if the quotation state is unknown (this can happen when
     * the attribute is constructed without specifying a quote mark.)
     */

  }, {
    key: "quoteMark",
    get: function get() {
      return this._quoteMark;
    }
    /**
     * Set the quote mark to be used by this attribute's value.
     * If the quote mark changes, the raw (escaped) value at `attr.raws.value` of the attribute
     * value is updated accordingly.
     *
     * @param {"'" | '"' | null} quoteMark The quote mark or `null` if the value should be unquoted.
     */
    ,
    set: function set(quoteMark) {
      if (!this._constructed) {
        this._quoteMark = quoteMark;
        return;
      }

      if (this._quoteMark !== quoteMark) {
        this._quoteMark = quoteMark;

        this._syncRawValue();
      }
    }
  }, {
    key: "qualifiedAttribute",
    get: function get() {
      return this.qualifiedName(this.raws.attribute || this.attribute);
    }
  }, {
    key: "insensitiveFlag",
    get: function get() {
      return this.insensitive ? 'i' : '';
    }
  }, {
    key: "value",
    get: function get() {
      return this._value;
    }
    /**
     * Before 3.0, the value had to be set to an escaped value including any wrapped
     * quote marks. In 3.0, the semantics of `Attribute.value` changed so that the value
     * is unescaped during parsing and any quote marks are removed.
     *
     * Because the ambiguity of this semantic change, if you set `attr.value = newValue`,
     * a deprecation warning is raised when the new value contains any characters that would
     * require escaping (including if it contains wrapped quotes).
     *
     * Instead, you should call `attr.setValue(newValue, opts)` and pass options that describe
     * how the new value is quoted.
     */
    ,
    set: function set(v) {
      if (this._constructed) {
        var _unescapeValue2 = unescapeValue(v),
            deprecatedUsage = _unescapeValue2.deprecatedUsage,
            unescaped = _unescapeValue2.unescaped,
            quoteMark = _unescapeValue2.quoteMark;

        if (deprecatedUsage) {
          warnOfDeprecatedValueAssignment();
        }

        if (unescaped === this._value && quoteMark === this._quoteMark) {
          return;
        }

        this._value = unescaped;
        this._quoteMark = quoteMark;

        this._syncRawValue();
      } else {
        this._value = v;
      }
    }
  }, {
    key: "attribute",
    get: function get() {
      return this._attribute;
    },
    set: function set(name) {
      this._handleEscapes("attribute", name);

      this._attribute = name;
    }
  }]);

  return Attribute;
}(_namespace.default);

exports.default = Attribute;
Attribute.NO_QUOTE = null;
Attribute.SINGLE_QUOTE = "'";
Attribute.DOUBLE_QUOTE = '"';
var CSSESC_QUOTE_OPTIONS = (_CSSESC_QUOTE_OPTIONS = {
  "'": {
    quotes: 'single',
    wrap: true
  },
  '"': {
    quotes: 'double',
    wrap: true
  }
}, _CSSESC_QUOTE_OPTIONS[null] = {
  isIdentifier: true
}, _CSSESC_QUOTE_OPTIONS);

function defaultAttrConcat(attrValue, attrSpaces) {
  return "" + attrSpaces.before + attrValue + attrSpaces.after;
}
});

var universal = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

var _namespace = _interopRequireDefault(namespace);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var Universal =
/*#__PURE__*/
function (_Namespace) {
  _inheritsLoose(Universal, _Namespace);

  function Universal(opts) {
    var _this;

    _this = _Namespace.call(this, opts) || this;
    _this.type = types.UNIVERSAL;
    _this.value = '*';
    return _this;
  }

  return Universal;
}(_namespace.default);

exports.default = Universal;
module.exports = exports.default;
});

var combinator = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

var _node = _interopRequireDefault(node);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var Combinator =
/*#__PURE__*/
function (_Node) {
  _inheritsLoose(Combinator, _Node);

  function Combinator(opts) {
    var _this;

    _this = _Node.call(this, opts) || this;
    _this.type = types.COMBINATOR;
    return _this;
  }

  return Combinator;
}(_node.default);

exports.default = Combinator;
module.exports = exports.default;
});

var nesting = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

var _node = _interopRequireDefault(node);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var Nesting =
/*#__PURE__*/
function (_Node) {
  _inheritsLoose(Nesting, _Node);

  function Nesting(opts) {
    var _this;

    _this = _Node.call(this, opts) || this;
    _this.type = types.NESTING;
    _this.value = '&';
    return _this;
  }

  return Nesting;
}(_node.default);

exports.default = Nesting;
module.exports = exports.default;
});

var sortAscending_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = sortAscending;

function sortAscending(list) {
  return list.sort(function (a, b) {
    return a - b;
  });
}
module.exports = exports.default;
});

var tokenTypes = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.combinator = exports.word = exports.comment = exports.str = exports.tab = exports.newline = exports.feed = exports.cr = exports.backslash = exports.bang = exports.slash = exports.doubleQuote = exports.singleQuote = exports.space = exports.greaterThan = exports.pipe = exports.equals = exports.plus = exports.caret = exports.tilde = exports.dollar = exports.closeSquare = exports.openSquare = exports.closeParenthesis = exports.openParenthesis = exports.semicolon = exports.colon = exports.comma = exports.at = exports.asterisk = exports.ampersand = void 0;
var ampersand = 38; // `&`.charCodeAt(0);

exports.ampersand = ampersand;
var asterisk = 42; // `*`.charCodeAt(0);

exports.asterisk = asterisk;
var at = 64; // `@`.charCodeAt(0);

exports.at = at;
var comma = 44; // `,`.charCodeAt(0);

exports.comma = comma;
var colon = 58; // `:`.charCodeAt(0);

exports.colon = colon;
var semicolon = 59; // `;`.charCodeAt(0);

exports.semicolon = semicolon;
var openParenthesis = 40; // `(`.charCodeAt(0);

exports.openParenthesis = openParenthesis;
var closeParenthesis = 41; // `)`.charCodeAt(0);

exports.closeParenthesis = closeParenthesis;
var openSquare = 91; // `[`.charCodeAt(0);

exports.openSquare = openSquare;
var closeSquare = 93; // `]`.charCodeAt(0);

exports.closeSquare = closeSquare;
var dollar = 36; // `$`.charCodeAt(0);

exports.dollar = dollar;
var tilde = 126; // `~`.charCodeAt(0);

exports.tilde = tilde;
var caret = 94; // `^`.charCodeAt(0);

exports.caret = caret;
var plus = 43; // `+`.charCodeAt(0);

exports.plus = plus;
var equals = 61; // `=`.charCodeAt(0);

exports.equals = equals;
var pipe = 124; // `|`.charCodeAt(0);

exports.pipe = pipe;
var greaterThan = 62; // `>`.charCodeAt(0);

exports.greaterThan = greaterThan;
var space = 32; // ` `.charCodeAt(0);

exports.space = space;
var singleQuote = 39; // `'`.charCodeAt(0);

exports.singleQuote = singleQuote;
var doubleQuote = 34; // `"`.charCodeAt(0);

exports.doubleQuote = doubleQuote;
var slash = 47; // `/`.charCodeAt(0);

exports.slash = slash;
var bang = 33; // `!`.charCodeAt(0);

exports.bang = bang;
var backslash = 92; // '\\'.charCodeAt(0);

exports.backslash = backslash;
var cr = 13; // '\r'.charCodeAt(0);

exports.cr = cr;
var feed = 12; // '\f'.charCodeAt(0);

exports.feed = feed;
var newline = 10; // '\n'.charCodeAt(0);

exports.newline = newline;
var tab = 9; // '\t'.charCodeAt(0);
// Expose aliases primarily for readability.

exports.tab = tab;
var str = singleQuote; // No good single character representation!

exports.str = str;
var comment = -1;
exports.comment = comment;
var word = -2;
exports.word = word;
var combinator = -3;
exports.combinator = combinator;
});

var tokenize_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = tokenize;
exports.FIELDS = void 0;

var t = _interopRequireWildcard(tokenTypes);

var _unescapable, _wordDelimiters;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var unescapable = (_unescapable = {}, _unescapable[t.tab] = true, _unescapable[t.newline] = true, _unescapable[t.cr] = true, _unescapable[t.feed] = true, _unescapable);
var wordDelimiters = (_wordDelimiters = {}, _wordDelimiters[t.space] = true, _wordDelimiters[t.tab] = true, _wordDelimiters[t.newline] = true, _wordDelimiters[t.cr] = true, _wordDelimiters[t.feed] = true, _wordDelimiters[t.ampersand] = true, _wordDelimiters[t.asterisk] = true, _wordDelimiters[t.bang] = true, _wordDelimiters[t.comma] = true, _wordDelimiters[t.colon] = true, _wordDelimiters[t.semicolon] = true, _wordDelimiters[t.openParenthesis] = true, _wordDelimiters[t.closeParenthesis] = true, _wordDelimiters[t.openSquare] = true, _wordDelimiters[t.closeSquare] = true, _wordDelimiters[t.singleQuote] = true, _wordDelimiters[t.doubleQuote] = true, _wordDelimiters[t.plus] = true, _wordDelimiters[t.pipe] = true, _wordDelimiters[t.tilde] = true, _wordDelimiters[t.greaterThan] = true, _wordDelimiters[t.equals] = true, _wordDelimiters[t.dollar] = true, _wordDelimiters[t.caret] = true, _wordDelimiters[t.slash] = true, _wordDelimiters);
var hex = {};
var hexChars = "0123456789abcdefABCDEF";

for (var i = 0; i < hexChars.length; i++) {
  hex[hexChars.charCodeAt(i)] = true;
}
/**
 *  Returns the last index of the bar css word
 * @param {string} css The string in which the word begins
 * @param {number} start The index into the string where word's first letter occurs
 */


function consumeWord(css, start) {
  var next = start;
  var code;

  do {
    code = css.charCodeAt(next);

    if (wordDelimiters[code]) {
      return next - 1;
    } else if (code === t.backslash) {
      next = consumeEscape(css, next) + 1;
    } else {
      // All other characters are part of the word
      next++;
    }
  } while (next < css.length);

  return next - 1;
}
/**
 *  Returns the last index of the escape sequence
 * @param {string} css The string in which the sequence begins
 * @param {number} start The index into the string where escape character (`\`) occurs.
 */


function consumeEscape(css, start) {
  var next = start;
  var code = css.charCodeAt(next + 1);

  if (unescapable[code]) ; else if (hex[code]) {
    var hexDigits = 0; // consume up to 6 hex chars

    do {
      next++;
      hexDigits++;
      code = css.charCodeAt(next + 1);
    } while (hex[code] && hexDigits < 6); // if fewer than 6 hex chars, a trailing space ends the escape


    if (hexDigits < 6 && code === t.space) {
      next++;
    }
  } else {
    // the next char is part of the current word
    next++;
  }

  return next;
}

var FIELDS = {
  TYPE: 0,
  START_LINE: 1,
  START_COL: 2,
  END_LINE: 3,
  END_COL: 4,
  START_POS: 5,
  END_POS: 6
};
exports.FIELDS = FIELDS;

function tokenize(input) {
  var tokens = [];
  var css = input.css.valueOf();
  var _css = css,
      length = _css.length;
  var offset = -1;
  var line = 1;
  var start = 0;
  var end = 0;
  var code, content, endColumn, endLine, escaped, escapePos, last, lines, next, nextLine, nextOffset, quote, tokenType;

  function unclosed(what, fix) {
    if (input.safe) {
      // fyi: this is never set to true.
      css += fix;
      next = css.length - 1;
    } else {
      throw input.error('Unclosed ' + what, line, start - offset, start);
    }
  }

  while (start < length) {
    code = css.charCodeAt(start);

    if (code === t.newline) {
      offset = start;
      line += 1;
    }

    switch (code) {
      case t.space:
      case t.tab:
      case t.newline:
      case t.cr:
      case t.feed:
        next = start;

        do {
          next += 1;
          code = css.charCodeAt(next);

          if (code === t.newline) {
            offset = next;
            line += 1;
          }
        } while (code === t.space || code === t.newline || code === t.tab || code === t.cr || code === t.feed);

        tokenType = t.space;
        endLine = line;
        endColumn = next - offset - 1;
        end = next;
        break;

      case t.plus:
      case t.greaterThan:
      case t.tilde:
      case t.pipe:
        next = start;

        do {
          next += 1;
          code = css.charCodeAt(next);
        } while (code === t.plus || code === t.greaterThan || code === t.tilde || code === t.pipe);

        tokenType = t.combinator;
        endLine = line;
        endColumn = start - offset;
        end = next;
        break;
      // Consume these characters as single tokens.

      case t.asterisk:
      case t.ampersand:
      case t.bang:
      case t.comma:
      case t.equals:
      case t.dollar:
      case t.caret:
      case t.openSquare:
      case t.closeSquare:
      case t.colon:
      case t.semicolon:
      case t.openParenthesis:
      case t.closeParenthesis:
        next = start;
        tokenType = code;
        endLine = line;
        endColumn = start - offset;
        end = next + 1;
        break;

      case t.singleQuote:
      case t.doubleQuote:
        quote = code === t.singleQuote ? "'" : '"';
        next = start;

        do {
          escaped = false;
          next = css.indexOf(quote, next + 1);

          if (next === -1) {
            unclosed('quote', quote);
          }

          escapePos = next;

          while (css.charCodeAt(escapePos - 1) === t.backslash) {
            escapePos -= 1;
            escaped = !escaped;
          }
        } while (escaped);

        tokenType = t.str;
        endLine = line;
        endColumn = start - offset;
        end = next + 1;
        break;

      default:
        if (code === t.slash && css.charCodeAt(start + 1) === t.asterisk) {
          next = css.indexOf('*/', start + 2) + 1;

          if (next === 0) {
            unclosed('comment', '*/');
          }

          content = css.slice(start, next + 1);
          lines = content.split('\n');
          last = lines.length - 1;

          if (last > 0) {
            nextLine = line + last;
            nextOffset = next - lines[last].length;
          } else {
            nextLine = line;
            nextOffset = offset;
          }

          tokenType = t.comment;
          line = nextLine;
          endLine = nextLine;
          endColumn = next - nextOffset;
        } else if (code === t.slash) {
          next = start;
          tokenType = code;
          endLine = line;
          endColumn = start - offset;
          end = next + 1;
        } else {
          next = consumeWord(css, start);
          tokenType = t.word;
          endLine = line;
          endColumn = next - offset;
        }

        end = next + 1;
        break;
    } // Ensure that the token structure remains consistent


    tokens.push([tokenType, // [0] Token type
    line, // [1] Starting line
    start - offset, // [2] Starting column
    endLine, // [3] Ending line
    endColumn, // [4] Ending column
    start, // [5] Start position / Source index
    end]); // Reset offset for the next token

    if (nextOffset) {
      offset = nextOffset;
      nextOffset = null;
    }

    start = end;
  }

  return tokens;
}
});

var parser = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

var _indexesOf = _interopRequireDefault(indexesOf);

var _uniq = _interopRequireDefault(uniq);

var _root = _interopRequireDefault(root);

var _selector = _interopRequireDefault(selector);

var _className = _interopRequireDefault(className);

var _comment = _interopRequireDefault(comment);

var _id = _interopRequireDefault(id);

var _tag = _interopRequireDefault(tag);

var _string = _interopRequireDefault(string);

var _pseudo = _interopRequireDefault(pseudo);

var _attribute = _interopRequireWildcard(attribute);

var _universal = _interopRequireDefault(universal);

var _combinator = _interopRequireDefault(combinator);

var _nesting = _interopRequireDefault(nesting);

var _sortAscending = _interopRequireDefault(sortAscending_1);

var _tokenize = _interopRequireWildcard(tokenize_1);

var tokens = _interopRequireWildcard(tokenTypes);

var types$1 = _interopRequireWildcard(types);



var _WHITESPACE_TOKENS, _Object$assign;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var WHITESPACE_TOKENS = (_WHITESPACE_TOKENS = {}, _WHITESPACE_TOKENS[tokens.space] = true, _WHITESPACE_TOKENS[tokens.cr] = true, _WHITESPACE_TOKENS[tokens.feed] = true, _WHITESPACE_TOKENS[tokens.newline] = true, _WHITESPACE_TOKENS[tokens.tab] = true, _WHITESPACE_TOKENS);
var WHITESPACE_EQUIV_TOKENS = Object.assign({}, WHITESPACE_TOKENS, (_Object$assign = {}, _Object$assign[tokens.comment] = true, _Object$assign));

function tokenStart(token) {
  return {
    line: token[_tokenize.FIELDS.START_LINE],
    column: token[_tokenize.FIELDS.START_COL]
  };
}

function tokenEnd(token) {
  return {
    line: token[_tokenize.FIELDS.END_LINE],
    column: token[_tokenize.FIELDS.END_COL]
  };
}

function getSource(startLine, startColumn, endLine, endColumn) {
  return {
    start: {
      line: startLine,
      column: startColumn
    },
    end: {
      line: endLine,
      column: endColumn
    }
  };
}

function getTokenSource(token) {
  return getSource(token[_tokenize.FIELDS.START_LINE], token[_tokenize.FIELDS.START_COL], token[_tokenize.FIELDS.END_LINE], token[_tokenize.FIELDS.END_COL]);
}

function getTokenSourceSpan(startToken, endToken) {
  if (!startToken) {
    return undefined;
  }

  return getSource(startToken[_tokenize.FIELDS.START_LINE], startToken[_tokenize.FIELDS.START_COL], endToken[_tokenize.FIELDS.END_LINE], endToken[_tokenize.FIELDS.END_COL]);
}

function unescapeProp(node, prop) {
  var value = node[prop];

  if (typeof value !== "string") {
    return;
  }

  if (value.indexOf("\\") !== -1) {
    (0, util.ensureObject)(node, 'raws');
    node[prop] = (0, util.unesc)(value);

    if (node.raws[prop] === undefined) {
      node.raws[prop] = value;
    }
  }

  return node;
}

var Parser =
/*#__PURE__*/
function () {
  function Parser(rule, options) {
    if (options === void 0) {
      options = {};
    }

    this.rule = rule;
    this.options = Object.assign({
      lossy: false,
      safe: false
    }, options);
    this.position = 0;
    this.css = typeof this.rule === 'string' ? this.rule : this.rule.selector;
    this.tokens = (0, _tokenize.default)({
      css: this.css,
      error: this._errorGenerator(),
      safe: this.options.safe
    });
    var rootSource = getTokenSourceSpan(this.tokens[0], this.tokens[this.tokens.length - 1]);
    this.root = new _root.default({
      source: rootSource
    });
    this.root.errorGenerator = this._errorGenerator();
    var selector = new _selector.default({
      source: {
        start: {
          line: 1,
          column: 1
        }
      }
    });
    this.root.append(selector);
    this.current = selector;
    this.loop();
  }

  var _proto = Parser.prototype;

  _proto._errorGenerator = function _errorGenerator() {
    var _this = this;

    return function (message, errorOptions) {
      if (typeof _this.rule === 'string') {
        return new Error(message);
      }

      return _this.rule.error(message, errorOptions);
    };
  };

  _proto.attribute = function attribute() {
    var attr = [];
    var startingToken = this.currToken;
    this.position++;

    while (this.position < this.tokens.length && this.currToken[_tokenize.FIELDS.TYPE] !== tokens.closeSquare) {
      attr.push(this.currToken);
      this.position++;
    }

    if (this.currToken[_tokenize.FIELDS.TYPE] !== tokens.closeSquare) {
      return this.expected('closing square bracket', this.currToken[_tokenize.FIELDS.START_POS]);
    }

    var len = attr.length;
    var node = {
      source: getSource(startingToken[1], startingToken[2], this.currToken[3], this.currToken[4]),
      sourceIndex: startingToken[_tokenize.FIELDS.START_POS]
    };

    if (len === 1 && !~[tokens.word].indexOf(attr[0][_tokenize.FIELDS.TYPE])) {
      return this.expected('attribute', attr[0][_tokenize.FIELDS.START_POS]);
    }

    var pos = 0;
    var spaceBefore = '';
    var commentBefore = '';
    var lastAdded = null;
    var spaceAfterMeaningfulToken = false;

    while (pos < len) {
      var token = attr[pos];
      var content = this.content(token);
      var next = attr[pos + 1];

      switch (token[_tokenize.FIELDS.TYPE]) {
        case tokens.space:
          // if (
          //     len === 1 ||
          //     pos === 0 && this.content(next) === '|'
          // ) {
          //     return this.expected('attribute', token[TOKEN.START_POS], content);
          // }
          spaceAfterMeaningfulToken = true;

          if (this.options.lossy) {
            break;
          }

          if (lastAdded) {
            (0, util.ensureObject)(node, 'spaces', lastAdded);
            var prevContent = node.spaces[lastAdded].after || '';
            node.spaces[lastAdded].after = prevContent + content;
            var existingComment = (0, util.getProp)(node, 'raws', 'spaces', lastAdded, 'after') || null;

            if (existingComment) {
              node.raws.spaces[lastAdded].after = existingComment + content;
            }
          } else {
            spaceBefore = spaceBefore + content;
            commentBefore = commentBefore + content;
          }

          break;

        case tokens.asterisk:
          if (next[_tokenize.FIELDS.TYPE] === tokens.equals) {
            node.operator = content;
            lastAdded = 'operator';
          } else if ((!node.namespace || lastAdded === "namespace" && !spaceAfterMeaningfulToken) && next) {
            if (spaceBefore) {
              (0, util.ensureObject)(node, 'spaces', 'attribute');
              node.spaces.attribute.before = spaceBefore;
              spaceBefore = '';
            }

            if (commentBefore) {
              (0, util.ensureObject)(node, 'raws', 'spaces', 'attribute');
              node.raws.spaces.attribute.before = spaceBefore;
              commentBefore = '';
            }

            node.namespace = (node.namespace || "") + content;
            var rawValue = (0, util.getProp)(node, 'raws', 'namespace') || null;

            if (rawValue) {
              node.raws.namespace += content;
            }

            lastAdded = 'namespace';
          }

          spaceAfterMeaningfulToken = false;
          break;

        case tokens.dollar:
          if (lastAdded === "value") {
            var oldRawValue = (0, util.getProp)(node, 'raws', 'value');
            node.value += "$";

            if (oldRawValue) {
              node.raws.value = oldRawValue + "$";
            }

            break;
          }

        // Falls through

        case tokens.caret:
          if (next[_tokenize.FIELDS.TYPE] === tokens.equals) {
            node.operator = content;
            lastAdded = 'operator';
          }

          spaceAfterMeaningfulToken = false;
          break;

        case tokens.combinator:
          if (content === '~' && next[_tokenize.FIELDS.TYPE] === tokens.equals) {
            node.operator = content;
            lastAdded = 'operator';
          }

          if (content !== '|') {
            spaceAfterMeaningfulToken = false;
            break;
          }

          if (next[_tokenize.FIELDS.TYPE] === tokens.equals) {
            node.operator = content;
            lastAdded = 'operator';
          } else if (!node.namespace && !node.attribute) {
            node.namespace = true;
          }

          spaceAfterMeaningfulToken = false;
          break;

        case tokens.word:
          if (next && this.content(next) === '|' && attr[pos + 2] && attr[pos + 2][_tokenize.FIELDS.TYPE] !== tokens.equals && // this look-ahead probably fails with comment nodes involved.
          !node.operator && !node.namespace) {
            node.namespace = content;
            lastAdded = 'namespace';
          } else if (!node.attribute || lastAdded === "attribute" && !spaceAfterMeaningfulToken) {
            if (spaceBefore) {
              (0, util.ensureObject)(node, 'spaces', 'attribute');
              node.spaces.attribute.before = spaceBefore;
              spaceBefore = '';
            }

            if (commentBefore) {
              (0, util.ensureObject)(node, 'raws', 'spaces', 'attribute');
              node.raws.spaces.attribute.before = commentBefore;
              commentBefore = '';
            }

            node.attribute = (node.attribute || "") + content;

            var _rawValue = (0, util.getProp)(node, 'raws', 'attribute') || null;

            if (_rawValue) {
              node.raws.attribute += content;
            }

            lastAdded = 'attribute';
          } else if (!node.value && node.value !== "" || lastAdded === "value" && !spaceAfterMeaningfulToken) {
            var _unescaped = (0, util.unesc)(content);

            var _oldRawValue = (0, util.getProp)(node, 'raws', 'value') || '';

            var oldValue = node.value || '';
            node.value = oldValue + _unescaped;
            node.quoteMark = null;

            if (_unescaped !== content || _oldRawValue) {
              (0, util.ensureObject)(node, 'raws');
              node.raws.value = (_oldRawValue || oldValue) + content;
            }

            lastAdded = 'value';
          } else {
            var insensitive = content === 'i' || content === "I";

            if ((node.value || node.value === '') && (node.quoteMark || spaceAfterMeaningfulToken)) {
              node.insensitive = insensitive;

              if (!insensitive || content === "I") {
                (0, util.ensureObject)(node, 'raws');
                node.raws.insensitiveFlag = content;
              }

              lastAdded = 'insensitive';

              if (spaceBefore) {
                (0, util.ensureObject)(node, 'spaces', 'insensitive');
                node.spaces.insensitive.before = spaceBefore;
                spaceBefore = '';
              }

              if (commentBefore) {
                (0, util.ensureObject)(node, 'raws', 'spaces', 'insensitive');
                node.raws.spaces.insensitive.before = commentBefore;
                commentBefore = '';
              }
            } else if (node.value || node.value === '') {
              lastAdded = 'value';
              node.value += content;

              if (node.raws.value) {
                node.raws.value += content;
              }
            }
          }

          spaceAfterMeaningfulToken = false;
          break;

        case tokens.str:
          if (!node.attribute || !node.operator) {
            return this.error("Expected an attribute followed by an operator preceding the string.", {
              index: token[_tokenize.FIELDS.START_POS]
            });
          }

          var _unescapeValue = (0, _attribute.unescapeValue)(content),
              unescaped = _unescapeValue.unescaped,
              quoteMark = _unescapeValue.quoteMark;

          node.value = unescaped;
          node.quoteMark = quoteMark;
          lastAdded = 'value';
          (0, util.ensureObject)(node, 'raws');
          node.raws.value = content;
          spaceAfterMeaningfulToken = false;
          break;

        case tokens.equals:
          if (!node.attribute) {
            return this.expected('attribute', token[_tokenize.FIELDS.START_POS], content);
          }

          if (node.value) {
            return this.error('Unexpected "=" found; an operator was already defined.', {
              index: token[_tokenize.FIELDS.START_POS]
            });
          }

          node.operator = node.operator ? node.operator + content : content;
          lastAdded = 'operator';
          spaceAfterMeaningfulToken = false;
          break;

        case tokens.comment:
          if (lastAdded) {
            if (spaceAfterMeaningfulToken || next && next[_tokenize.FIELDS.TYPE] === tokens.space || lastAdded === 'insensitive') {
              var lastComment = (0, util.getProp)(node, 'spaces', lastAdded, 'after') || '';
              var rawLastComment = (0, util.getProp)(node, 'raws', 'spaces', lastAdded, 'after') || lastComment;
              (0, util.ensureObject)(node, 'raws', 'spaces', lastAdded);
              node.raws.spaces[lastAdded].after = rawLastComment + content;
            } else {
              var lastValue = node[lastAdded] || '';
              var rawLastValue = (0, util.getProp)(node, 'raws', lastAdded) || lastValue;
              (0, util.ensureObject)(node, 'raws');
              node.raws[lastAdded] = rawLastValue + content;
            }
          } else {
            commentBefore = commentBefore + content;
          }

          break;

        default:
          return this.error("Unexpected \"" + content + "\" found.", {
            index: token[_tokenize.FIELDS.START_POS]
          });
      }

      pos++;
    }

    unescapeProp(node, "attribute");
    unescapeProp(node, "namespace");
    this.newNode(new _attribute.default(node));
    this.position++;
  }
  /**
   * return a node containing meaningless garbage up to (but not including) the specified token position.
   * if the token position is negative, all remaining tokens are consumed.
   *
   * This returns an array containing a single string node if all whitespace,
   * otherwise an array of comment nodes with space before and after.
   *
   * These tokens are not added to the current selector, the caller can add them or use them to amend
   * a previous node's space metadata.
   *
   * In lossy mode, this returns only comments.
   */
  ;

  _proto.parseWhitespaceEquivalentTokens = function parseWhitespaceEquivalentTokens(stopPosition) {
    if (stopPosition < 0) {
      stopPosition = this.tokens.length;
    }

    var startPosition = this.position;
    var nodes = [];
    var space = "";
    var lastComment = undefined;

    do {
      if (WHITESPACE_TOKENS[this.currToken[_tokenize.FIELDS.TYPE]]) {
        if (!this.options.lossy) {
          space += this.content();
        }
      } else if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.comment) {
        var spaces = {};

        if (space) {
          spaces.before = space;
          space = "";
        }

        lastComment = new _comment.default({
          value: this.content(),
          source: getTokenSource(this.currToken),
          sourceIndex: this.currToken[_tokenize.FIELDS.START_POS],
          spaces: spaces
        });
        nodes.push(lastComment);
      }
    } while (++this.position < stopPosition);

    if (space) {
      if (lastComment) {
        lastComment.spaces.after = space;
      } else if (!this.options.lossy) {
        var firstToken = this.tokens[startPosition];
        var lastToken = this.tokens[this.position - 1];
        nodes.push(new _string.default({
          value: '',
          source: getSource(firstToken[_tokenize.FIELDS.START_LINE], firstToken[_tokenize.FIELDS.START_COL], lastToken[_tokenize.FIELDS.END_LINE], lastToken[_tokenize.FIELDS.END_COL]),
          sourceIndex: firstToken[_tokenize.FIELDS.START_POS],
          spaces: {
            before: space,
            after: ''
          }
        }));
      }
    }

    return nodes;
  }
  /**
   * 
   * @param {*} nodes 
   */
  ;

  _proto.convertWhitespaceNodesToSpace = function convertWhitespaceNodesToSpace(nodes, requiredSpace) {
    var _this2 = this;

    if (requiredSpace === void 0) {
      requiredSpace = false;
    }

    var space = "";
    var rawSpace = "";
    nodes.forEach(function (n) {
      var spaceBefore = _this2.lossySpace(n.spaces.before, requiredSpace);

      var rawSpaceBefore = _this2.lossySpace(n.rawSpaceBefore, requiredSpace);

      space += spaceBefore + _this2.lossySpace(n.spaces.after, requiredSpace && spaceBefore.length === 0);
      rawSpace += spaceBefore + n.value + _this2.lossySpace(n.rawSpaceAfter, requiredSpace && rawSpaceBefore.length === 0);
    });

    if (rawSpace === space) {
      rawSpace = undefined;
    }

    var result = {
      space: space,
      rawSpace: rawSpace
    };
    return result;
  };

  _proto.isNamedCombinator = function isNamedCombinator(position) {
    if (position === void 0) {
      position = this.position;
    }

    return this.tokens[position + 0] && this.tokens[position + 0][_tokenize.FIELDS.TYPE] === tokens.slash && this.tokens[position + 1] && this.tokens[position + 1][_tokenize.FIELDS.TYPE] === tokens.word && this.tokens[position + 2] && this.tokens[position + 2][_tokenize.FIELDS.TYPE] === tokens.slash;
  };

  _proto.namedCombinator = function namedCombinator() {
    if (this.isNamedCombinator()) {
      var nameRaw = this.content(this.tokens[this.position + 1]);
      var name = (0, util.unesc)(nameRaw).toLowerCase();
      var raws = {};

      if (name !== nameRaw) {
        raws.value = "/" + nameRaw + "/";
      }

      var node = new _combinator.default({
        value: "/" + name + "/",
        source: getSource(this.currToken[_tokenize.FIELDS.START_LINE], this.currToken[_tokenize.FIELDS.START_COL], this.tokens[this.position + 2][_tokenize.FIELDS.END_LINE], this.tokens[this.position + 2][_tokenize.FIELDS.END_COL]),
        sourceIndex: this.currToken[_tokenize.FIELDS.START_POS],
        raws: raws
      });
      this.position = this.position + 3;
      return node;
    } else {
      this.unexpected();
    }
  };

  _proto.combinator = function combinator() {
    var _this3 = this;

    if (this.content() === '|') {
      return this.namespace();
    } // We need to decide between a space that's a descendant combinator and meaningless whitespace at the end of a selector.


    var nextSigTokenPos = this.locateNextMeaningfulToken(this.position);

    if (nextSigTokenPos < 0 || this.tokens[nextSigTokenPos][_tokenize.FIELDS.TYPE] === tokens.comma) {
      var nodes = this.parseWhitespaceEquivalentTokens(nextSigTokenPos);

      if (nodes.length > 0) {
        var last = this.current.last;

        if (last) {
          var _this$convertWhitespa = this.convertWhitespaceNodesToSpace(nodes),
              space = _this$convertWhitespa.space,
              rawSpace = _this$convertWhitespa.rawSpace;

          if (rawSpace !== undefined) {
            last.rawSpaceAfter += rawSpace;
          }

          last.spaces.after += space;
        } else {
          nodes.forEach(function (n) {
            return _this3.newNode(n);
          });
        }
      }

      return;
    }

    var firstToken = this.currToken;
    var spaceOrDescendantSelectorNodes = undefined;

    if (nextSigTokenPos > this.position) {
      spaceOrDescendantSelectorNodes = this.parseWhitespaceEquivalentTokens(nextSigTokenPos);
    }

    var node;

    if (this.isNamedCombinator()) {
      node = this.namedCombinator();
    } else if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.combinator) {
      node = new _combinator.default({
        value: this.content(),
        source: getTokenSource(this.currToken),
        sourceIndex: this.currToken[_tokenize.FIELDS.START_POS]
      });
      this.position++;
    } else if (WHITESPACE_TOKENS[this.currToken[_tokenize.FIELDS.TYPE]]) ; else if (!spaceOrDescendantSelectorNodes) {
      this.unexpected();
    }

    if (node) {
      if (spaceOrDescendantSelectorNodes) {
        var _this$convertWhitespa2 = this.convertWhitespaceNodesToSpace(spaceOrDescendantSelectorNodes),
            _space = _this$convertWhitespa2.space,
            _rawSpace = _this$convertWhitespa2.rawSpace;

        node.spaces.before = _space;
        node.rawSpaceBefore = _rawSpace;
      }
    } else {
      // descendant combinator
      var _this$convertWhitespa3 = this.convertWhitespaceNodesToSpace(spaceOrDescendantSelectorNodes, true),
          _space2 = _this$convertWhitespa3.space,
          _rawSpace2 = _this$convertWhitespa3.rawSpace;

      if (!_rawSpace2) {
        _rawSpace2 = _space2;
      }

      var spaces = {};
      var raws = {
        spaces: {}
      };

      if (_space2.endsWith(' ') && _rawSpace2.endsWith(' ')) {
        spaces.before = _space2.slice(0, _space2.length - 1);
        raws.spaces.before = _rawSpace2.slice(0, _rawSpace2.length - 1);
      } else if (_space2.startsWith(' ') && _rawSpace2.startsWith(' ')) {
        spaces.after = _space2.slice(1);
        raws.spaces.after = _rawSpace2.slice(1);
      } else {
        raws.value = _rawSpace2;
      }

      node = new _combinator.default({
        value: ' ',
        source: getTokenSourceSpan(firstToken, this.tokens[this.position - 1]),
        sourceIndex: firstToken[_tokenize.FIELDS.START_POS],
        spaces: spaces,
        raws: raws
      });
    }

    if (this.currToken && this.currToken[_tokenize.FIELDS.TYPE] === tokens.space) {
      node.spaces.after = this.optionalSpace(this.content());
      this.position++;
    }

    return this.newNode(node);
  };

  _proto.comma = function comma() {
    if (this.position === this.tokens.length - 1) {
      this.root.trailingComma = true;
      this.position++;
      return;
    }

    this.current._inferEndPosition();

    var selector = new _selector.default({
      source: {
        start: tokenStart(this.tokens[this.position + 1])
      }
    });
    this.current.parent.append(selector);
    this.current = selector;
    this.position++;
  };

  _proto.comment = function comment() {
    var current = this.currToken;
    this.newNode(new _comment.default({
      value: this.content(),
      source: getTokenSource(current),
      sourceIndex: current[_tokenize.FIELDS.START_POS]
    }));
    this.position++;
  };

  _proto.error = function error(message, opts) {
    throw this.root.error(message, opts);
  };

  _proto.missingBackslash = function missingBackslash() {
    return this.error('Expected a backslash preceding the semicolon.', {
      index: this.currToken[_tokenize.FIELDS.START_POS]
    });
  };

  _proto.missingParenthesis = function missingParenthesis() {
    return this.expected('opening parenthesis', this.currToken[_tokenize.FIELDS.START_POS]);
  };

  _proto.missingSquareBracket = function missingSquareBracket() {
    return this.expected('opening square bracket', this.currToken[_tokenize.FIELDS.START_POS]);
  };

  _proto.unexpected = function unexpected() {
    return this.error("Unexpected '" + this.content() + "'. Escaping special characters with \\ may help.", this.currToken[_tokenize.FIELDS.START_POS]);
  };

  _proto.namespace = function namespace() {
    var before = this.prevToken && this.content(this.prevToken) || true;

    if (this.nextToken[_tokenize.FIELDS.TYPE] === tokens.word) {
      this.position++;
      return this.word(before);
    } else if (this.nextToken[_tokenize.FIELDS.TYPE] === tokens.asterisk) {
      this.position++;
      return this.universal(before);
    }
  };

  _proto.nesting = function nesting() {
    if (this.nextToken) {
      var nextContent = this.content(this.nextToken);

      if (nextContent === "|") {
        this.position++;
        return;
      }
    }

    var current = this.currToken;
    this.newNode(new _nesting.default({
      value: this.content(),
      source: getTokenSource(current),
      sourceIndex: current[_tokenize.FIELDS.START_POS]
    }));
    this.position++;
  };

  _proto.parentheses = function parentheses() {
    var last = this.current.last;
    var unbalanced = 1;
    this.position++;

    if (last && last.type === types$1.PSEUDO) {
      var selector = new _selector.default({
        source: {
          start: tokenStart(this.tokens[this.position - 1])
        }
      });
      var cache = this.current;
      last.append(selector);
      this.current = selector;

      while (this.position < this.tokens.length && unbalanced) {
        if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.openParenthesis) {
          unbalanced++;
        }

        if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.closeParenthesis) {
          unbalanced--;
        }

        if (unbalanced) {
          this.parse();
        } else {
          this.current.source.end = tokenEnd(this.currToken);
          this.current.parent.source.end = tokenEnd(this.currToken);
          this.position++;
        }
      }

      this.current = cache;
    } else {
      // I think this case should be an error. It's used to implement a basic parse of media queries
      // but I don't think it's a good idea.
      var parenStart = this.currToken;
      var parenValue = "(";
      var parenEnd;

      while (this.position < this.tokens.length && unbalanced) {
        if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.openParenthesis) {
          unbalanced++;
        }

        if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.closeParenthesis) {
          unbalanced--;
        }

        parenEnd = this.currToken;
        parenValue += this.parseParenthesisToken(this.currToken);
        this.position++;
      }

      if (last) {
        last.appendToPropertyAndEscape("value", parenValue, parenValue);
      } else {
        this.newNode(new _string.default({
          value: parenValue,
          source: getSource(parenStart[_tokenize.FIELDS.START_LINE], parenStart[_tokenize.FIELDS.START_COL], parenEnd[_tokenize.FIELDS.END_LINE], parenEnd[_tokenize.FIELDS.END_COL]),
          sourceIndex: parenStart[_tokenize.FIELDS.START_POS]
        }));
      }
    }

    if (unbalanced) {
      return this.expected('closing parenthesis', this.currToken[_tokenize.FIELDS.START_POS]);
    }
  };

  _proto.pseudo = function pseudo() {
    var _this4 = this;

    var pseudoStr = '';
    var startingToken = this.currToken;

    while (this.currToken && this.currToken[_tokenize.FIELDS.TYPE] === tokens.colon) {
      pseudoStr += this.content();
      this.position++;
    }

    if (!this.currToken) {
      return this.expected(['pseudo-class', 'pseudo-element'], this.position - 1);
    }

    if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.word) {
      this.splitWord(false, function (first, length) {
        pseudoStr += first;

        _this4.newNode(new _pseudo.default({
          value: pseudoStr,
          source: getTokenSourceSpan(startingToken, _this4.currToken),
          sourceIndex: startingToken[_tokenize.FIELDS.START_POS]
        }));

        if (length > 1 && _this4.nextToken && _this4.nextToken[_tokenize.FIELDS.TYPE] === tokens.openParenthesis) {
          _this4.error('Misplaced parenthesis.', {
            index: _this4.nextToken[_tokenize.FIELDS.START_POS]
          });
        }
      });
    } else {
      return this.expected(['pseudo-class', 'pseudo-element'], this.currToken[_tokenize.FIELDS.START_POS]);
    }
  };

  _proto.space = function space() {
    var content = this.content(); // Handle space before and after the selector

    if (this.position === 0 || this.prevToken[_tokenize.FIELDS.TYPE] === tokens.comma || this.prevToken[_tokenize.FIELDS.TYPE] === tokens.openParenthesis || this.current.nodes.every(function (node) {
      return node.type === 'comment';
    })) {
      this.spaces = this.optionalSpace(content);
      this.position++;
    } else if (this.position === this.tokens.length - 1 || this.nextToken[_tokenize.FIELDS.TYPE] === tokens.comma || this.nextToken[_tokenize.FIELDS.TYPE] === tokens.closeParenthesis) {
      this.current.last.spaces.after = this.optionalSpace(content);
      this.position++;
    } else {
      this.combinator();
    }
  };

  _proto.string = function string() {
    var current = this.currToken;
    this.newNode(new _string.default({
      value: this.content(),
      source: getTokenSource(current),
      sourceIndex: current[_tokenize.FIELDS.START_POS]
    }));
    this.position++;
  };

  _proto.universal = function universal(namespace) {
    var nextToken = this.nextToken;

    if (nextToken && this.content(nextToken) === '|') {
      this.position++;
      return this.namespace();
    }

    var current = this.currToken;
    this.newNode(new _universal.default({
      value: this.content(),
      source: getTokenSource(current),
      sourceIndex: current[_tokenize.FIELDS.START_POS]
    }), namespace);
    this.position++;
  };

  _proto.splitWord = function splitWord(namespace, firstCallback) {
    var _this5 = this;

    var nextToken = this.nextToken;
    var word = this.content();

    while (nextToken && ~[tokens.dollar, tokens.caret, tokens.equals, tokens.word].indexOf(nextToken[_tokenize.FIELDS.TYPE])) {
      this.position++;
      var current = this.content();
      word += current;

      if (current.lastIndexOf('\\') === current.length - 1) {
        var next = this.nextToken;

        if (next && next[_tokenize.FIELDS.TYPE] === tokens.space) {
          word += this.requiredSpace(this.content(next));
          this.position++;
        }
      }

      nextToken = this.nextToken;
    }

    var hasClass = (0, _indexesOf.default)(word, '.').filter(function (i) {
      return word[i - 1] !== '\\';
    });
    var hasId = (0, _indexesOf.default)(word, '#').filter(function (i) {
      return word[i - 1] !== '\\';
    }); // Eliminate Sass interpolations from the list of id indexes

    var interpolations = (0, _indexesOf.default)(word, '#{');

    if (interpolations.length) {
      hasId = hasId.filter(function (hashIndex) {
        return !~interpolations.indexOf(hashIndex);
      });
    }

    var indices = (0, _sortAscending.default)((0, _uniq.default)([0].concat(hasClass, hasId)));
    indices.forEach(function (ind, i) {
      var index = indices[i + 1] || word.length;
      var value = word.slice(ind, index);

      if (i === 0 && firstCallback) {
        return firstCallback.call(_this5, value, indices.length);
      }

      var node;
      var current = _this5.currToken;
      var sourceIndex = current[_tokenize.FIELDS.START_POS] + indices[i];
      var source = getSource(current[1], current[2] + ind, current[3], current[2] + (index - 1));

      if (~hasClass.indexOf(ind)) {
        var classNameOpts = {
          value: value.slice(1),
          source: source,
          sourceIndex: sourceIndex
        };
        node = new _className.default(unescapeProp(classNameOpts, "value"));
      } else if (~hasId.indexOf(ind)) {
        var idOpts = {
          value: value.slice(1),
          source: source,
          sourceIndex: sourceIndex
        };
        node = new _id.default(unescapeProp(idOpts, "value"));
      } else {
        var tagOpts = {
          value: value,
          source: source,
          sourceIndex: sourceIndex
        };
        unescapeProp(tagOpts, "value");
        node = new _tag.default(tagOpts);
      }

      _this5.newNode(node, namespace); // Ensure that the namespace is used only once


      namespace = null;
    });
    this.position++;
  };

  _proto.word = function word(namespace) {
    var nextToken = this.nextToken;

    if (nextToken && this.content(nextToken) === '|') {
      this.position++;
      return this.namespace();
    }

    return this.splitWord(namespace);
  };

  _proto.loop = function loop() {
    while (this.position < this.tokens.length) {
      this.parse(true);
    }

    this.current._inferEndPosition();

    return this.root;
  };

  _proto.parse = function parse(throwOnParenthesis) {
    switch (this.currToken[_tokenize.FIELDS.TYPE]) {
      case tokens.space:
        this.space();
        break;

      case tokens.comment:
        this.comment();
        break;

      case tokens.openParenthesis:
        this.parentheses();
        break;

      case tokens.closeParenthesis:
        if (throwOnParenthesis) {
          this.missingParenthesis();
        }

        break;

      case tokens.openSquare:
        this.attribute();
        break;

      case tokens.dollar:
      case tokens.caret:
      case tokens.equals:
      case tokens.word:
        this.word();
        break;

      case tokens.colon:
        this.pseudo();
        break;

      case tokens.comma:
        this.comma();
        break;

      case tokens.asterisk:
        this.universal();
        break;

      case tokens.ampersand:
        this.nesting();
        break;

      case tokens.slash:
      case tokens.combinator:
        this.combinator();
        break;

      case tokens.str:
        this.string();
        break;
      // These cases throw; no break needed.

      case tokens.closeSquare:
        this.missingSquareBracket();

      case tokens.semicolon:
        this.missingBackslash();

      default:
        this.unexpected();
    }
  }
  /**
   * Helpers
   */
  ;

  _proto.expected = function expected(description, index, found) {
    if (Array.isArray(description)) {
      var last = description.pop();
      description = description.join(', ') + " or " + last;
    }

    var an = /^[aeiou]/.test(description[0]) ? 'an' : 'a';

    if (!found) {
      return this.error("Expected " + an + " " + description + ".", {
        index: index
      });
    }

    return this.error("Expected " + an + " " + description + ", found \"" + found + "\" instead.", {
      index: index
    });
  };

  _proto.requiredSpace = function requiredSpace(space) {
    return this.options.lossy ? ' ' : space;
  };

  _proto.optionalSpace = function optionalSpace(space) {
    return this.options.lossy ? '' : space;
  };

  _proto.lossySpace = function lossySpace(space, required) {
    if (this.options.lossy) {
      return required ? ' ' : '';
    } else {
      return space;
    }
  };

  _proto.parseParenthesisToken = function parseParenthesisToken(token) {
    var content = this.content(token);

    if (token[_tokenize.FIELDS.TYPE] === tokens.space) {
      return this.requiredSpace(content);
    } else {
      return content;
    }
  };

  _proto.newNode = function newNode(node, namespace) {
    if (namespace) {
      if (/^ +$/.test(namespace)) {
        if (!this.options.lossy) {
          this.spaces = (this.spaces || '') + namespace;
        }

        namespace = true;
      }

      node.namespace = namespace;
      unescapeProp(node, "namespace");
    }

    if (this.spaces) {
      node.spaces.before = this.spaces;
      this.spaces = '';
    }

    return this.current.append(node);
  };

  _proto.content = function content(token) {
    if (token === void 0) {
      token = this.currToken;
    }

    return this.css.slice(token[_tokenize.FIELDS.START_POS], token[_tokenize.FIELDS.END_POS]);
  };

  /**
   * returns the index of the next non-whitespace, non-comment token.
   * returns -1 if no meaningful token is found.
   */
  _proto.locateNextMeaningfulToken = function locateNextMeaningfulToken(startPosition) {
    if (startPosition === void 0) {
      startPosition = this.position + 1;
    }

    var searchPosition = startPosition;

    while (searchPosition < this.tokens.length) {
      if (WHITESPACE_EQUIV_TOKENS[this.tokens[searchPosition][_tokenize.FIELDS.TYPE]]) {
        searchPosition++;
        continue;
      } else {
        return searchPosition;
      }
    }

    return -1;
  };

  _createClass(Parser, [{
    key: "currToken",
    get: function get() {
      return this.tokens[this.position];
    }
  }, {
    key: "nextToken",
    get: function get() {
      return this.tokens[this.position + 1];
    }
  }, {
    key: "prevToken",
    get: function get() {
      return this.tokens[this.position - 1];
    }
  }]);

  return Parser;
}();

exports.default = Parser;
module.exports = exports.default;
});

var processor = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

var _parser = _interopRequireDefault(parser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Processor =
/*#__PURE__*/
function () {
  function Processor(func, options) {
    this.func = func || function noop() {};

    this.funcRes = null;
    this.options = options;
  }

  var _proto = Processor.prototype;

  _proto._shouldUpdateSelector = function _shouldUpdateSelector(rule, options) {
    if (options === void 0) {
      options = {};
    }

    var merged = Object.assign({}, this.options, options);

    if (merged.updateSelector === false) {
      return false;
    } else {
      return typeof rule !== "string";
    }
  };

  _proto._isLossy = function _isLossy(options) {
    if (options === void 0) {
      options = {};
    }

    var merged = Object.assign({}, this.options, options);

    if (merged.lossless === false) {
      return true;
    } else {
      return false;
    }
  };

  _proto._root = function _root(rule, options) {
    if (options === void 0) {
      options = {};
    }

    var parser = new _parser.default(rule, this._parseOptions(options));
    return parser.root;
  };

  _proto._parseOptions = function _parseOptions(options) {
    return {
      lossy: this._isLossy(options)
    };
  };

  _proto._run = function _run(rule, options) {
    var _this = this;

    if (options === void 0) {
      options = {};
    }

    return new Promise(function (resolve, reject) {
      try {
        var root = _this._root(rule, options);

        Promise.resolve(_this.func(root)).then(function (transform) {
          var string = undefined;

          if (_this._shouldUpdateSelector(rule, options)) {
            string = root.toString();
            rule.selector = string;
          }

          return {
            transform: transform,
            root: root,
            string: string
          };
        }).then(resolve, reject);
      } catch (e) {
        reject(e);
        return;
      }
    });
  };

  _proto._runSync = function _runSync(rule, options) {
    if (options === void 0) {
      options = {};
    }

    var root = this._root(rule, options);

    var transform = this.func(root);

    if (transform && typeof transform.then === "function") {
      throw new Error("Selector processor returned a promise to a synchronous call.");
    }

    var string = undefined;

    if (options.updateSelector && typeof rule !== "string") {
      string = root.toString();
      rule.selector = string;
    }

    return {
      transform: transform,
      root: root,
      string: string
    };
  }
  /**
   * Process rule into a selector AST.
   *
   * @param rule {postcss.Rule | string} The css selector to be processed
   * @param options The options for processing
   * @returns {Promise<parser.Root>} The AST of the selector after processing it.
   */
  ;

  _proto.ast = function ast(rule, options) {
    return this._run(rule, options).then(function (result) {
      return result.root;
    });
  }
  /**
   * Process rule into a selector AST synchronously.
   *
   * @param rule {postcss.Rule | string} The css selector to be processed
   * @param options The options for processing
   * @returns {parser.Root} The AST of the selector after processing it.
   */
  ;

  _proto.astSync = function astSync(rule, options) {
    return this._runSync(rule, options).root;
  }
  /**
   * Process a selector into a transformed value asynchronously
   *
   * @param rule {postcss.Rule | string} The css selector to be processed
   * @param options The options for processing
   * @returns {Promise<any>} The value returned by the processor.
   */
  ;

  _proto.transform = function transform(rule, options) {
    return this._run(rule, options).then(function (result) {
      return result.transform;
    });
  }
  /**
   * Process a selector into a transformed value synchronously.
   *
   * @param rule {postcss.Rule | string} The css selector to be processed
   * @param options The options for processing
   * @returns {any} The value returned by the processor.
   */
  ;

  _proto.transformSync = function transformSync(rule, options) {
    return this._runSync(rule, options).transform;
  }
  /**
   * Process a selector into a new selector string asynchronously.
   *
   * @param rule {postcss.Rule | string} The css selector to be processed
   * @param options The options for processing
   * @returns {string} the selector after processing.
   */
  ;

  _proto.process = function process(rule, options) {
    return this._run(rule, options).then(function (result) {
      return result.string || result.root.toString();
    });
  }
  /**
   * Process a selector into a new selector string synchronously.
   *
   * @param rule {postcss.Rule | string} The css selector to be processed
   * @param options The options for processing
   * @returns {string} the selector after processing.
   */
  ;

  _proto.processSync = function processSync(rule, options) {
    var result = this._runSync(rule, options);

    return result.string || result.root.toString();
  };

  return Processor;
}();

exports.default = Processor;
module.exports = exports.default;
});

var constructors = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.universal = exports.tag = exports.string = exports.selector = exports.root = exports.pseudo = exports.nesting = exports.id = exports.comment = exports.combinator = exports.className = exports.attribute = void 0;

var _attribute = _interopRequireDefault(attribute);

var _className = _interopRequireDefault(className);

var _combinator = _interopRequireDefault(combinator);

var _comment = _interopRequireDefault(comment);

var _id = _interopRequireDefault(id);

var _nesting = _interopRequireDefault(nesting);

var _pseudo = _interopRequireDefault(pseudo);

var _root = _interopRequireDefault(root);

var _selector = _interopRequireDefault(selector);

var _string = _interopRequireDefault(string);

var _tag = _interopRequireDefault(tag);

var _universal = _interopRequireDefault(universal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var attribute$1 = function attribute(opts) {
  return new _attribute.default(opts);
};

exports.attribute = attribute$1;

var className$1 = function className(opts) {
  return new _className.default(opts);
};

exports.className = className$1;

var combinator$1 = function combinator(opts) {
  return new _combinator.default(opts);
};

exports.combinator = combinator$1;

var comment$1 = function comment(opts) {
  return new _comment.default(opts);
};

exports.comment = comment$1;

var id$1 = function id(opts) {
  return new _id.default(opts);
};

exports.id = id$1;

var nesting$1 = function nesting(opts) {
  return new _nesting.default(opts);
};

exports.nesting = nesting$1;

var pseudo$1 = function pseudo(opts) {
  return new _pseudo.default(opts);
};

exports.pseudo = pseudo$1;

var root$1 = function root(opts) {
  return new _root.default(opts);
};

exports.root = root$1;

var selector$1 = function selector(opts) {
  return new _selector.default(opts);
};

exports.selector = selector$1;

var string$1 = function string(opts) {
  return new _string.default(opts);
};

exports.string = string$1;

var tag$1 = function tag(opts) {
  return new _tag.default(opts);
};

exports.tag = tag$1;

var universal$1 = function universal(opts) {
  return new _universal.default(opts);
};

exports.universal = universal$1;
});

var guards = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.isNode = isNode;
exports.isPseudoElement = isPseudoElement;
exports.isPseudoClass = isPseudoClass;
exports.isContainer = isContainer;
exports.isNamespace = isNamespace;
exports.isUniversal = exports.isTag = exports.isString = exports.isSelector = exports.isRoot = exports.isPseudo = exports.isNesting = exports.isIdentifier = exports.isComment = exports.isCombinator = exports.isClassName = exports.isAttribute = void 0;



var _IS_TYPE;

var IS_TYPE = (_IS_TYPE = {}, _IS_TYPE[types.ATTRIBUTE] = true, _IS_TYPE[types.CLASS] = true, _IS_TYPE[types.COMBINATOR] = true, _IS_TYPE[types.COMMENT] = true, _IS_TYPE[types.ID] = true, _IS_TYPE[types.NESTING] = true, _IS_TYPE[types.PSEUDO] = true, _IS_TYPE[types.ROOT] = true, _IS_TYPE[types.SELECTOR] = true, _IS_TYPE[types.STRING] = true, _IS_TYPE[types.TAG] = true, _IS_TYPE[types.UNIVERSAL] = true, _IS_TYPE);

function isNode(node) {
  return typeof node === "object" && IS_TYPE[node.type];
}

function isNodeType(type, node) {
  return isNode(node) && node.type === type;
}

var isAttribute = isNodeType.bind(null, types.ATTRIBUTE);
exports.isAttribute = isAttribute;
var isClassName = isNodeType.bind(null, types.CLASS);
exports.isClassName = isClassName;
var isCombinator = isNodeType.bind(null, types.COMBINATOR);
exports.isCombinator = isCombinator;
var isComment = isNodeType.bind(null, types.COMMENT);
exports.isComment = isComment;
var isIdentifier = isNodeType.bind(null, types.ID);
exports.isIdentifier = isIdentifier;
var isNesting = isNodeType.bind(null, types.NESTING);
exports.isNesting = isNesting;
var isPseudo = isNodeType.bind(null, types.PSEUDO);
exports.isPseudo = isPseudo;
var isRoot = isNodeType.bind(null, types.ROOT);
exports.isRoot = isRoot;
var isSelector = isNodeType.bind(null, types.SELECTOR);
exports.isSelector = isSelector;
var isString = isNodeType.bind(null, types.STRING);
exports.isString = isString;
var isTag = isNodeType.bind(null, types.TAG);
exports.isTag = isTag;
var isUniversal = isNodeType.bind(null, types.UNIVERSAL);
exports.isUniversal = isUniversal;

function isPseudoElement(node) {
  return isPseudo(node) && node.value && (node.value.startsWith("::") || node.value.toLowerCase() === ":before" || node.value.toLowerCase() === ":after");
}

function isPseudoClass(node) {
  return isPseudo(node) && !isPseudoElement(node);
}

function isContainer(node) {
  return !!(isNode(node) && node.walk);
}

function isNamespace(node) {
  return isAttribute(node) || isTag(node);
}
});

var selectors = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



Object.keys(types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = types[key];
});



Object.keys(constructors).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = constructors[key];
});



Object.keys(guards).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = guards[key];
});
});

var dist$1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

var _processor = _interopRequireDefault(processor);

var selectors$1 = _interopRequireWildcard(selectors);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var parser = function parser(processor) {
  return new _processor.default(processor);
};

Object.assign(parser, selectors$1);
delete parser.__esModule;
var _default = parser;
exports.default = _default;
module.exports = exports.default;
});

var index = /*@__PURE__*/unwrapExports(dist$1);

var __jsx$1r = React__default['default'].createElement;

function ownKeys$9(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$9(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$9(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$9(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var EmojiMart = function EmojiMart(_ref) {
  var closeOnClickOut = _ref.closeOnClickOut,
      handleSelect = _ref.handleSelect,
      handleOpenPicker = _ref.handleOpenPicker,
      open = _ref.open,
      style = _ref.style;
  var node = React.useRef();

  var handleClickAway = function handleClickAway(e) {
    e.preventDefault();
    var domNode = ReactDOM__default['default'].findDOMNode(node.current);

    if (domNode.contains(encodeURIComponent.target)) {
      handleOpenPicker(false);
    }
  };

  React.useEffect(function () {
    if (open && closeOnClickOut) {
      document.addEventListener('mousedown', handleClickAway);
    } else {
      document.removeEventListener('mousedown', handleClickAway);
    }

    return function () {
      document.removeEventListener('mousedown', handleClickAway);
    };
  }, [open]);

  var handlePickEmoji = function handlePickEmoji(emoji, e) {
    e.preventDefault();
    handleSelect(emoji["native"]);
    handleOpenPicker(false);
  };

  return open && __jsx$1r(emojiMart.Picker, {
    emoji: "",
    emojiSize: 16,
    include: ['foods', 'people', 'recent', 'nature'],
    onClick: handlePickEmoji,
    set: "google",
    sheetSize: 20,
    showSkinTones: false,
    showPreview: false,
    style: _objectSpread$9({
      border: 'initial',
      borderRadius: 'initial',
      width: '100%'
    }, style),
    title: "Pick your emoji...",
    ref: node
  });
};
EmojiMart.propTypes = {
  closeOnClickOut: propTypes.bool,
  handleOpenPicker: propTypes.func.isRequired,
  handleSelect: propTypes.func.isRequired,
  open: propTypes.bool,
  style: index.string
};
EmojiMart.defaultProps = {
  closeOnClickOut: true,
  open: false
};

var __jsx$1s = React__default['default'].createElement;

function ownKeys$a(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$a(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$a(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$a(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var GetAddress = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var apiKey = _ref.apiKey,
      error = _ref.error,
      change = _ref.change,
      form = _ref.form,
      handleFindAddress = _ref.handleFindAddress,
      handlePopulateAddress = _ref.handlePopulateAddress,
      selectAddress = _ref.selectAddress;
  console.log(form);

  var _useState = React.useState(false),
      loading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = React.useState({
    data: []
  }),
      addresses = _useState2[0],
      setAddresses = _useState2[1];

  React.useImperativeHandle(ref, function () {
    return {
      removeWhitespace: function removeWhitespace(postcode) {
        return postcode.replace(/\s/g, '');
      },
      validatePostcode: function validatePostcode(postcode) {
        validatorPostCode(postcode);
      },
      getAddress: function getAddress(postcode) {
        setLoading(true); // let data = addresses.data
        // data = ADDRESS_DATA.addresses
        // setAddresses({ ...addresses, data: [...data] })
        // Fetch

        window.fetch("https://api.getaddress.io/find//".concat(postcode, "?api-key=").concat(apiKey)).then(function (response) {
          if (!response.ok) {
            return false;
          }

          return response.json();
        }).then(function (data) {
          setAddresses(_objectSpread$a(_objectSpread$a({}, addresses), {}, {
            data: data.addresses
          }));
        })["catch"](function (error) {
          console.error('Error', error);
        });
      }
    };
  });

  var input = function input() {
    return __jsx$1s(FormLabel, {
      label: "Postcode"
    }, __jsx$1s(FormField, {
      onChange: change,
      name: "postcode",
      value: form.postcode
    }));
  };

  var button = function button() {
    return __jsx$1s(Button, {
      content: "Find your address",
      context: "primary",
      onClick: handleFindAddress,
      size: "lg"
    });
  };

  var postcodeAddresses = function postcodeAddresses() {
    if (loading) {
      if (addresses.data.length > 0) {
        // Reduce the array to conform to the select
        var reduced = addresses.data.reduce(function (acc, cur, i) {
          acc.push({
            text: cur,
            value: i + 1
          });
          return acc;
        }, []);
        reduced.unshift({
          disabled: true,
          text: 'Select address',
          value: ''
        });
        return __jsx$1s(React__default['default'].Fragment, null, __jsx$1s("p", null), __jsx$1s(FormLabel, {
          label: "Select your address"
        }, __jsx$1s(SelectField, {
          onChange: handlePopulateAddress,
          name: "addresses",
          options: reduced,
          value: selectAddress
        })));
      }
    }
  };

  var addressDetails = function addressDetails() {
    if (form.line1) {
      var changedInputs = [{
        label: 'Address line 1',
        id: 'line1'
      }, {
        label: 'Address line 2',
        id: 'line2'
      }, {
        label: 'Address line 3',
        id: 'line3'
      }, {
        label: 'City / Town',
        id: 'town'
      }, {
        label: 'County',
        id: 'county'
      }, {
        label: 'Postcode',
        id: 'postcode'
      }, {
        label: 'Country',
        id: 'country'
      }];
      return changedInputs.map(function (_ref2) {
        var label = _ref2.label,
            id = _ref2.id;
        return __jsx$1s("span", {
          key: id
        }, __jsx$1s(FormLabel, {
          label: label
        }, __jsx$1s(FormField, {
          name: id,
          onChange: change,
          value: form[id]
        })));
      });
    } else {
      return __jsx$1s("span", null);
    }
  };

  var renderError = function renderError() {
    if (!error) return;
    return __jsx$1s("p", {
      className: "GetAddress-error"
    }, "The postcode was not found");
  };

  return __jsx$1s(React__default['default'].Fragment, null, input(), button(), renderError(), postcodeAddresses(), addressDetails());
});
GetAddress.propTypes = {
  apiKey: propTypes.string.isRequired,
  change: propTypes.func.isRequired
};

var __jsx$1t = React__default['default'].createElement;
var HeroButtons = function HeroButtons(_ref) {
  var buttons = _ref.buttons;
  return buttons.map(function (_ref2, index) {
    var content = _ref2.content,
        context = _ref2.context,
        to = _ref2.to;
    return __jsx$1t(StyledLink$3, {
      border: false,
      to: to,
      key: index
    }, __jsx$1t(StyledButton$4, {
      content: content,
      context: context,
      size: "lg"
    }));
  });
};
var StyledButton$4 = styled__default['default'](Button).withConfig({
  displayName: "buttons__StyledButton",
  componentId: "sc-5e7u5g-0"
})(["margin-right:1rem;"]);
var StyledLink$3 = styled__default['default'](Link).withConfig({
  displayName: "buttons__StyledLink",
  componentId: "sc-5e7u5g-1"
})(["display:inline-block;"]);
HeroButtons.propTypes = {
  buttons: propTypes.array
};

var __jsx$1u = React__default['default'].createElement;
var HeroImage = function HeroImage(_ref) {
  var alt = _ref.alt,
      align = _ref.align,
      image = _ref.image,
      width = _ref.width;
  return __jsx$1u(StyledColumn$1, {
    align: align,
    md: 6
  }, __jsx$1u(StyledImageContainer, null, __jsx$1u(StyledImage$2, {
    alt: alt,
    src: image,
    width: width
  })));
};
var StyledColumn$1 = styled__default['default'](Column).withConfig({
  displayName: "image__StyledColumn",
  componentId: "sc-1oeqzm8-0"
})(["align-self:", ";"], function (_ref2) {
  var align = _ref2.align;
  return align || 'flex-end';
});
var StyledImageContainer = styled__default['default'].div.withConfig({
  displayName: "image__StyledImageContainer",
  componentId: "sc-1oeqzm8-1"
})(["display:flex;justify-content:start;margin:10px 0;"]);
var StyledImage$2 = styled__default['default'](Image$1).withConfig({
  displayName: "image__StyledImage",
  componentId: "sc-1oeqzm8-2"
})(["width:", ";height:", ";"], function (_ref3) {
  var width = _ref3.width;
  return width ? "".concat(width, "%") : '85%';
}, function (_ref4) {
  var height = _ref4.height;
  return height ? "".concat(height, "%") : '85%';
});
HeroImage.propTypes = {
  alt: propTypes.string,
  image: propTypes.string,
  width: propTypes.number
};

var __jsx$1v = React__default['default'].createElement;

function _templateObject$5() {
  var data = _taggedTemplateLiteral(["\n    width: 25rem;\n  "]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var TextBlock = function TextBlock(_ref) {
  var children = _ref.children,
      offset = _ref.offset,
      position = _ref.position;
  return __jsx$1v(StyledCard$1, {
    rounded: false,
    position: position
  }, __jsx$1v(CardBody, {
    children: children
  }));
};
var bl = styled.css(["left:6rem;bottom:0;"]);
var br = styled.css(["right:6rem;bottom:0;"]);
var tl = styled.css(["left:6rem;top:0;"]);
var tr = styled.css(["right:6rem;top:0;"]);
var StyledCard$1 = styled__default['default'](Card).withConfig({
  displayName: "textBlock__StyledCard",
  componentId: "sc-1ugd3xe-0"
})(["background-color:white;margin:0;opacity:0.95;offset:", ";position:absolute;", " ", ""], function (_ref2) {
  var offset = _ref2.offset;
  return offset;
}, MEDIA_QUERY.desktop(_templateObject$5()), function (_ref3) {
  var position = _ref3.position;
  return position === 'bl' && bl || position === 'br' && br || position === 'tl' && tl || position === 'tr' && tr;
});
TextBlock.propTypes = {
  offset: propTypes.objectOf(propTypes.oneOfType([propTypes.number, propTypes.string]))
};

var __jsx$1w = React__default['default'].createElement;

function _templateObject2$3() {
  var data = _taggedTemplateLiteral(["\n    font-size: 3rem;\n    line-height: 3.25rem;\n  "]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$6() {
  var data = _taggedTemplateLiteral(["\n    text-align: initial;\n  "]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var Hero = function Hero(_ref) {
  var alt = _ref.alt,
      align = _ref.align,
      background = _ref.background,
      backgroundSize = _ref.backgroundSize,
      buttons = _ref.buttons,
      children = _ref.children,
      className = _ref.className,
      height = _ref.height,
      image = _ref.image,
      message = _ref.message,
      strapline = _ref.strapline,
      textblock = _ref.textblock,
      title = _ref.title,
      width = _ref.width;

  var renderLeft = function renderLeft() {
    return __jsx$1w(StyledColumn$2, {
      md: 6
    }, title && __jsx$1w(StyledTitle$1, {
      tag: "h1",
      content: title
    }), strapline && __jsx$1w(StyledStrapline, {
      tag: "h2",
      content: strapline
    }), buttons && __jsx$1w(HeroButtons, {
      buttons: buttons
    }), message && __jsx$1w("p", {
      children: message
    }));
  };

  return __jsx$1w(StyledHero, {
    background: background,
    backgroundSize: backgroundSize,
    className: className,
    height: height
  }, children && children, !children && __jsx$1w(Container, null, __jsx$1w(Row, null, title && renderLeft(), image && __jsx$1w(HeroImage, {
    alt: alt,
    align: align,
    image: image,
    width: width
  }))));
};
var StyledHero = styled__default['default'].header.withConfig({
  displayName: "hero__StyledHero",
  componentId: "rxajoc-0"
})(["background-image:", ";background-position:center;background-size:", ";height:", ";padding:2rem 0 0;position:relative;"], function (_ref2) {
  var background = _ref2.background;
  return background ? "url(".concat(background, ")") : 'none';
}, function (_ref3) {
  var backgroundSize = _ref3.backgroundSize;
  return backgroundSize;
}, function (_ref4) {
  var height = _ref4.height;
  return height;
});
var StyledColumn$2 = styled__default['default'](Column).withConfig({
  displayName: "hero__StyledColumn",
  componentId: "rxajoc-1"
})(["margin:0 auto;text-align:center;", ""], MEDIA_QUERY.desktop(_templateObject$6()));
var StyledTitle$1 = styled__default['default'](Heading).withConfig({
  displayName: "hero__StyledTitle",
  componentId: "rxajoc-2"
})(["line-height:2.75rem;", ""], MEDIA_QUERY.desktop(_templateObject2$3()));
var StyledStrapline = styled__default['default'](Heading).withConfig({
  displayName: "hero__StyledStrapline",
  componentId: "rxajoc-3"
})(["font-size:1.25rem;font-weight:normal;line-height:1.5rem;margin:0 0 2rem 0;"]);
Hero.propTypes = {
  alt: propTypes.string,
  align: propTypes.string,
  className: propTypes.any,
  background: propTypes.string,
  backgroundSize: propTypes.string,
  buttons: propTypes.array,
  height: propTypes.string,
  image: propTypes.string,
  strapline: propTypes.oneOfType([propTypes.object, propTypes.string]),
  style: propTypes.objectOf(propTypes.oneOfType([propTypes.number, propTypes.string])),
  title: propTypes.string,
  width: propTypes.number
};
Hero.defaultProps = {
  align: 'flex-end',
  backgroundSize: 'cover',
  style: {}
};

var __jsx$1x = React__default['default'].createElement;
var ImageMarker = function ImageMarker(_ref) {
  var _styles$shape, _styles$shape2;

  var coordinates = _ref.coordinates,
      styles = _ref.styles;
  return (styles === null || styles === void 0 ? void 0 : styles.shape) ? __jsx$1x(StyledIcon$5, {
    coordinates: coordinates,
    context: "primary",
    icon: styles === null || styles === void 0 ? void 0 : (_styles$shape = styles.shape) === null || _styles$shape === void 0 ? void 0 : _styles$shape.icon,
    prefix: styles === null || styles === void 0 ? void 0 : (_styles$shape2 = styles.shape) === null || _styles$shape2 === void 0 ? void 0 : _styles$shape2.prefix,
    pull: "left",
    styles: styles,
    size: "lg"
  }) : __jsx$1x(StyledMarker, {
    coordinates: coordinates,
    styles: styles
  });
};
var blinker = styled.keyframes(["50%{opacity:0;}"]);
var commonMarkerCss = styled.css(["animation:", ";margin-left:", ";margin-top:", ";pointer-events:none;position:absolute;transition-duration:0.2s;transition-property:left,top;", ""], function (_ref2) {
  var styles = _ref2.styles;
  return (styles === null || styles === void 0 ? void 0 : styles.animation) === 'blinker' ? styled.css(["", " 1s ease-in-out infinite forwards"], blinker) : '';
}, function (_ref3) {
  var styles = _ref3.styles;
  return '-' + ((styles === null || styles === void 0 ? void 0 : styles.width) ? Number(styles.width.replace('px', '') / 2) + 'px' : '7px');
}, function (_ref4) {
  var styles = _ref4.styles;
  return '-' + ((styles === null || styles === void 0 ? void 0 : styles.height) ? Number(styles.height.replace('px', '') / 2) + 'px' : '7px');
}, function (_ref5) {
  var coordinates = _ref5.coordinates;
  return coordinates && styled.css(["display:block;left:", "%;top:", "%;"], coordinates.x, coordinates.y);
});
var StyledIcon$5 = styled__default['default'](Icon).withConfig({
  displayName: "imageMarker__StyledIcon",
  componentId: "svetek-0"
})(["background-color:white;color:", ";", ""], function (_ref6) {
  var styles = _ref6.styles;
  return (styles === null || styles === void 0 ? void 0 : styles.color) ? styles === null || styles === void 0 ? void 0 : styles.color : 'red';
}, commonMarkerCss);
var StyledMarker = styled__default['default'].div.withConfig({
  displayName: "imageMarker__StyledMarker",
  componentId: "svetek-1"
})(["background-color:", ";border-radius:", ";display:none;height:", ";width:", ";", ""], function (_ref7) {
  var styles = _ref7.styles;
  return (styles === null || styles === void 0 ? void 0 : styles.color) ? styles.color : 'red';
}, function (_ref8) {
  var styles = _ref8.styles;
  return (styles === null || styles === void 0 ? void 0 : styles.borderRadius) ? styles.borderRadius : '50%';
}, function (_ref9) {
  var styles = _ref9.styles;
  return (styles === null || styles === void 0 ? void 0 : styles.height) ? styles.height : '15px';
}, function (_ref10) {
  var styles = _ref10.styles;
  return (styles === null || styles === void 0 ? void 0 : styles.width) ? styles.width : '15px';
}, commonMarkerCss);
ImageMarker.propTypes = {
  coordinates: propTypes.object,
  styles: propTypes.object
};
ImageMarker.defaultProps = {
  styles: {
    animation: '',
    borderRadius: '50%',
    color: 'red',
    height: '20px',
    shape: '',
    width: '20px'
  }
};

var ImageLocationProps = {
  className: propTypes.string,
  coordinatesChange: propTypes.func.isRequired,
  initialCoordinates: propTypes.shape({
    x: propTypes.number,
    y: propTypes.number
  }),
  item: propTypes.shape({
    filename: propTypes.string,
    name: propTypes.string,
    value: propTypes.number
  }).isRequired,
  markerStyles: propTypes.object,
  show: propTypes.bool,
  style: propTypes.object
};

var __jsx$1y = React__default['default'].createElement;
var ImageLocation = function ImageLocation(_ref) {
  var coordinatesChange = _ref.coordinatesChange,
      initialCoordinates = _ref.initialCoordinates,
      item = _ref.item,
      markerStyles = _ref.markerStyles,
      show = _ref.show;

  var _useState = React.useState(initialCoordinates),
      coordinates = _useState[0],
      setCoordinates = _useState[1];

  React.useEffect(function () {
    coordinatesChange && item && coordinates && coordinatesChange({
      coordinates: coordinates,
      item: item
    });
  }, [coordinates]);
  return __jsx$1y(StyledImageLocation, {
    show: show
  }, (item === null || item === void 0 ? void 0 : item.filename) && __jsx$1y(ImageWrapper, {
    coordinates: coordinates,
    markerStyles: markerStyles,
    item: item,
    setCoordinates: setCoordinates
  }));
};
var StyledImageLocation = styled__default['default'].div.withConfig({
  displayName: "imageLocation__StyledImageLocation",
  componentId: "r5ls9o-0"
})(["display:", ";overflow-x:auto;"], function (_ref2) {
  var show = _ref2.show;
  return show ? 'block' : 'none';
});
ImageLocation.propTypes = ImageLocationProps;
ImageLocation.defaultProps = {
  show: true
};

var __jsx$1z = React__default['default'].createElement;
var imageHeight = 0;
var imageWidth = 0;
var ImageWrapper = function ImageWrapper(_ref) {
  var coordinates = _ref.coordinates,
      item = _ref.item,
      markerStyles = _ref.markerStyles,
      setCoordinates = _ref.setCoordinates;
  var imageRef = React.useRef();

  var _useState = React.useState(coordinates),
      MarkerCoordinates = _useState[0],
      setMarkerCoordinates = _useState[1];

  var handleImageClick = function handleImageClick(event) {
    var image = imageRef.current;
    imageWidth = image.clientWidth;
    imageHeight = image.clientHeight;
    var coordinates = {
      x: event.nativeEvent.offsetX * 100 / imageWidth,
      y: event.nativeEvent.offsetY * 100 / imageHeight
    };
    setCoordinates(coordinates);
    setMarkerCoordinates(function (co) {
      return coordinates;
    });
  };

  return __jsx$1z(StyledImageWrapper, null, __jsx$1z(Image$1, {
    ref: imageRef,
    onClick: handleImageClick,
    alt: item.name,
    fluid: true,
    src: item.filename
  }), (MarkerCoordinates === null || MarkerCoordinates === void 0 ? void 0 : MarkerCoordinates.x) && __jsx$1z(ImageMarker, {
    coordinates: MarkerCoordinates,
    key: item.id,
    styles: markerStyles
  }));
};
var StyledImageWrapper = styled__default['default'].div.withConfig({
  displayName: "imageWrapper__StyledImageWrapper",
  componentId: "sc-15nqse3-0"
})(["display:inline-block;position:relative;width:100%;", "{width:100%;}"], Image$1);
ImageWrapper.propTypes = {
  coordinates: propTypes.object,
  item: propTypes.object.isRequired,
  setCoordinates: propTypes.func.isRequired
};

var __jsx$1A = React__default['default'].createElement;

function ownKeys$b(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$b(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$b(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$b(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var elementName = 'imageLocationData';
var ImageLocationFormElement = function ImageLocationFormElement(_ref) {
  var control = _ref.control,
      errors = _ref.errors,
      setValue = _ref.setValue,
      props = _objectWithoutProperties(_ref, ["control", "errors", "setValue"]);

  return __jsx$1A(ControllerWrapper, {
    className: "".concat(errors && errors[elementName] && 'hasError')
  }, __jsx$1A(reactHookForm.Controller, _extends({
    as: ImageLocation,
    control: control,
    coordinatesChange: function coordinatesChange(imageLocationData) {
      setValue(elementName, imageLocationData);
    },
    name: elementName
  }, props)));
};
var imageAllert = styled.keyframes(["from{filter:invert(0);}to{filter:invert(1);}"]);
var ControllerWrapper = styled__default['default'].div.withConfig({
  displayName: "imageLocationFormElement__ControllerWrapper",
  componentId: "qhiyzk-0"
})(["&.hasError{box-shadow:0 0 4px red;animation:", " 0.2s linear 2;}"], imageAllert);
ImageLocationFormElement.propTypes = _objectSpread$b(_objectSpread$b({}, ImageLocationProps), {}, {
  setValue: propTypes.func.isRequired,
  control: propTypes.object.isRequired
});

/**
 * Intercom
 */
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
var IntercomAPI = function IntercomAPI() {
  if (canUseDOM && window.Intercom) {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    window.Intercom.apply(null, args);
  }
};
var Intercom = /*#__PURE__*/React.memo(function (_ref) {
  var appID = _ref.appID;
  React.useEffect(function () {
    if (!appID || !canUseDOM) {
      return;
    }

    if (!window.Intercom) {

      (function (w, d, id, s, x) {
        function i() {
          i.c(arguments);
        }

        i.q = [];

        i.c = function (args) {
          i.q.push(args);
        };

        w.Intercom = i;
        s = d.createElement('script');
        s.async = 1;
        s.src = 'https://widget.intercom.io/widget/' + id;
        d.head.appendChild(s);
      })(window, document, appID);
    }

    window.intercomSettings = {
      app_id: appID,
      custom_launcher_selector: '#openIntercom'
    };

    if (window.Intercom) {
      window.Intercom('boot');
    }

    return function () {
      if (!canUseDOM || !window.Intercom) return false;
      window.Intercom('shutdown');
      delete window.Intercom;
      delete window.intercomSettings;
    };
  }, []);
  return false;
});
Intercom.propTypes = {
  appID: propTypes.string.isRequired
};

var __jsx$1B = React__default['default'].createElement;

function ownKeys$c(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$c(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$c(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$c(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var DynamicLocationHOC = function DynamicLocationHOC(Component) {
  return function (props) {
    // concat the apiKey
    var googleMapURL = "".concat(props.googleMapURL, "&key=").concat(props.apiKey);

    var containerElement = props.containerElement || __jsx$1B("div", {
      style: {
        height: props.containerHeight,
        width: props.containerWidth
      }
    });

    return __jsx$1B(Component, _extends({}, props, {
      containerElement: containerElement,
      googleMapURL: googleMapURL
    }));
  };
};

var DynamicLocation = DynamicLocationHOC(reactGoogleMaps.withScriptjs(reactGoogleMaps.withGoogleMap(function (props) {
  return props.defaultCenter.lat && props.defaultCenter.lng ? __jsx$1B(reactGoogleMaps.GoogleMap, props) : null;
})));
DynamicLocation.displayName = 'DynamicLocation';
DynamicLocation.propTypes = _objectSpread$c({
  apiKey: propTypes.string.isRequired,
  containerElement: propTypes.node,
  containerHeight: propTypes.string,
  containerWidth: propTypes.string,
  loadingElement: propTypes.node.isRequired,
  googleMapURL: propTypes.string.isRequired,
  mapElement: propTypes.node.isRequired,
  markers: propTypes.array
}, reactGoogleMaps.GoogleMap.propTypes);
DynamicLocation.defaultProps = {
  googleMapURL: 'https://maps.googleapis.com/maps/api/js?',
  loadingElement: __jsx$1B("div", {
    style: {
      height: '100%'
    }
  }),
  containerHeight: '400px',
  containerWidth: '100%',
  mapElement: __jsx$1B("div", {
    style: {
      height: '100%'
    }
  }),
  zoom: 15
};
var Marker = reactGoogleMaps.Marker;
Marker.propTypes = reactGoogleMaps.Marker.propTypes;
var MarkerClusterer = MarkerClusterer$1.MarkerClusterer;
MarkerClusterer.propTypes = MarkerClusterer$1.MarkerClusterer.propTypes;
var InfoWindow = reactGoogleMaps.InfoWindow;
InfoWindow.propTypes = reactGoogleMaps.InfoWindow.propTypes;

var __jsx$1C = React__default['default'].createElement;
var StaticLocation = function StaticLocation(_ref) {
  var apiKey = _ref.apiKey,
      center = _ref.center,
      channel = _ref.channel,
      className = _ref.className,
      client = _ref.client,
      _ref$container = _ref.container,
      Container = _ref$container === void 0 ? 'img' : _ref$container,
      format = _ref.format,
      language = _ref.language,
      location = _ref.location,
      maptype = _ref.maptype,
      markers = _ref.markers,
      paths = _ref.paths,
      region = _ref.region,
      scale = _ref.scale,
      signature = _ref.signature,
      size = _ref.size,
      style = _ref.style,
      styleMap = _ref.styleMap,
      visible = _ref.visible,
      zoom = _ref.zoom;

  var _size$split = size.split('x'),
      _size$split2 = _slicedToArray(_size$split, 2),
      width = _size$split2[0],
      height = _size$split2[1];

  var _useState = React.useState(''),
      mapUrl = _useState[0],
      setMapUrl = _useState[1]; // on mount


  React.useEffect(function () {
    var map = new StaticMap({
      apiKey: apiKey,
      center: center,
      channel: channel,
      client: client,
      format: format,
      language: language,
      location: location,
      maptype: maptype,
      markers: markers,
      paths: paths,
      region: region,
      scale: scale,
      signature: signature,
      size: size,
      style: styleMap,
      visible: visible,
      zoom: zoom
    });
    var mapUrl = map.generateUrl();
    setMapUrl(mapUrl);
  }, []);
  return __jsx$1C(Container, {
    className: className,
    width: width,
    height: height,
    src: mapUrl,
    style: style,
    alt: "map"
  });
};
StaticLocation.propTypes = {
  apiKey: propTypes.string.isRequired,
  center: propTypes.string,
  channel: propTypes.string,
  className: propTypes.string,
  client: propTypes.string,
  container: propTypes.node,
  format: propTypes.oneOf(['png', 'png8', 'png32', 'gif', 'jpg', 'jpg-baseline']),
  language: propTypes.string,
  location: propTypes.string,
  maptype: propTypes.oneOf(['roadmap', 'satellite', 'terrain', 'hybrid']),
  markers: propTypes.array,
  paths: propTypes.array,
  region: propTypes.string,
  scale: propTypes.oneOf([1, 2, 4, '1', '2', '4']),
  signature: propTypes.string,
  size: propTypes.string.isRequired,
  style: propTypes.object,
  styleMap: propTypes.string,
  visible: propTypes.string,
  zoom: propTypes.number
};
StaticLocation.defaultProps = {
  format: 'png',
  maptype: 'roadmap',
  scale: 1,
  size: '400x200',
  zoom: 15
};

var __jsx$1D = React__default['default'].createElement;
var Brand = function Brand(_ref) {
  var brand = _ref.brand;
  return __jsx$1D(StyledLink$4, {
    border: false,
    to: "/",
    passHref: true
  }, __jsx$1D(Image$1, {
    alt: "Logo",
    draggable: "false",
    src: brand,
    "data-cy": "navBrand"
  }));
};
var StyledLink$4 = styled__default['default'](Link).withConfig({
  displayName: "brand__StyledLink",
  componentId: "senape-0"
})(["display:flex;"]);
Brand.propTypes = {
  brand: propTypes.string.isRequired
};

var __jsx$1E = React__default['default'].createElement;
var Contained = function Contained(_ref) {
  var content = _ref.content;
  return __jsx$1E(StyledContainer$4, null, content());
};
var StyledContainer$4 = styled__default['default'](Container).withConfig({
  displayName: "contained__StyledContainer",
  componentId: "sc-1wmpurl-0"
})(["align-items:center;display:flex;flex-wrap:wrap;justify-content:space-between;width:100%;"]);
Contained.propTypes = {
  content: propTypes.node.isRequired
};

var __jsx$1F = React__default['default'].createElement;

function _templateObject$7() {
  var data = _taggedTemplateLiteral(["\n    display: none;\n  "]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}
var Toggler = function Toggler(_ref) {
  var handleMenuClick = _ref.handleMenuClick,
      visible = _ref.visible;
  return __jsx$1F(StyledToggler, {
    "aria-expanded": visible ? 'false' : 'true',
    "aria-label": "Toggle navigation",
    onClick: handleMenuClick
  }, !visible ? __jsx$1F(Icon, {
    icon: "bars",
    prefix: "fas"
  }) : __jsx$1F(Icon, {
    icon: "times",
    prefix: "fas"
  }), __jsx$1F(StyledText$3, null, "Menu"));
};
var StyledToggler = styled__default['default'].a.withConfig({
  displayName: "toggler__StyledToggler",
  componentId: "sc-1t70814-0"
})(["color:", ";cursor:pointer;font-size:", ";padding:", ";&:hover{color:", ";}", ""], function (_ref2) {
  var theme = _ref2.theme;
  return theme.NAVBAR.colourToggler;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.NAVBAR.fontSizeToggler;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.NAVBAR.paddingToggler;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.NAVBAR.colourHoverToggler;
}, MEDIA_QUERY.desktop(_templateObject$7()));
var StyledText$3 = styled__default['default'].span.withConfig({
  displayName: "toggler__StyledText",
  componentId: "sc-1t70814-1"
})(["margin-left:0.25rem;"]);
Toggler.propTypes = {
  handleMenuClick: propTypes.func.isRequired,
  visible: propTypes.bool
};
Toggler.defaultProps = {
  visible: true
};

var __jsx$1G = React__default['default'].createElement;

function _templateObject3$1() {
  var data = _taggedTemplateLiteral(["\n    display: none;\n  "]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$4() {
  var data = _taggedTemplateLiteral(["\n    padding: ", ";\n  "]);

  _templateObject2$4 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$8() {
  var data = _taggedTemplateLiteral(["\n    padding: ", ";\n  "]);

  _templateObject$8 = function _templateObject() {
    return data;
  };

  return data;
}
var Navbar = function Navbar(_ref) {
  var brand = _ref.brand,
      contained = _ref.contained,
      type = _ref.type,
      style = _ref.style,
      showMenu = _ref.showMenu,
      widgets = _ref.widgets;

  var _useState = React.useState(showMenu),
      visible = _useState[0],
      setVisible = _useState[1];

  var handleClick = function handleClick() {
    setVisible(!visible);
  };

  var Content = function Content() {
    return __jsx$1G(React__default['default'].Fragment, null, brand && __jsx$1G(Brand, {
      brand: brand
    }), __jsx$1G(Toggler, {
      handleMenuClick: handleClick,
      visible: visible
    }), widgets && __jsx$1G(Widgets, {
      brand: brand,
      closeMenu: handleClick,
      type: type,
      visible: visible,
      widgets: widgets
    }));
  };

  return __jsx$1G(React__default['default'].Fragment, null, __jsx$1G(StyledNav, {
    style: style
  }, contained ? __jsx$1G(Contained, {
    content: Content
  }) : __jsx$1G(Content, null)), __jsx$1G(StyledOverlay, {
    hidden: !visible
  }));
};
var StyledNav = styled__default['default'].nav.withConfig({
  displayName: "navbar__StyledNav",
  componentId: "cif9qh-0"
})(["background-color:", ";border-top-width:", ";border-top-style:", ";border-top-color:", ";display:flex;flex-wrap:wrap;height:", ";justify-content:space-between;padding:", ";position:relative;z-index:200;", " ", ""], function (_ref2) {
  var theme = _ref2.theme;
  return theme.NAVBAR.background;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.NAVBAR.borderTopWidth;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.NAVBAR.borderTopStyle;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.NAVBAR.borderTopColor;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.NAVBAR.height;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.NAVBAR.padding;
}, MEDIA_QUERY.tablet(_templateObject$8(), function (_ref8) {
  var theme = _ref8.theme;
  return theme.NAVBAR.paddingTablet;
}), MEDIA_QUERY.desktop(_templateObject2$4(), function (_ref9) {
  var theme = _ref9.theme;
  return theme.NAVBAR.paddingDesktop;
}));
var StyledOverlay = styled__default['default'].div.withConfig({
  displayName: "navbar__StyledOverlay",
  componentId: "cif9qh-1"
})(["background:", ";bottom:0;cursor:pointer;height:", ";position:", ";right:0;top:0;transition-property:width;transition-duration:0.2s;width:", ";z-index:199;", ""], function (_ref10) {
  var theme = _ref10.theme;
  return theme.NAVBAR.backgroundOverlay;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.NAVBAR.heightOverlay;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.NAVBAR.positionOverlay;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.NAVBAR.widthOverlay;
}, MEDIA_QUERY.desktop(_templateObject3$1()));
Navbar.propTypes = {
  brand: propTypes.string,
  contained: propTypes.bool,
  showMenu: propTypes.bool,
  style: propTypes.objectOf(propTypes.oneOfType([propTypes.number, propTypes.string])),
  type: propTypes.string,
  widgets: propTypes.object
};
Navbar.defaultProps = {
  brand: '',
  contained: false,
  showMenu: false
};

var __jsx$1H = React__default['default'].createElement;

function _templateObject$9() {
  var data = _taggedTemplateLiteral(["\n    background: none;\n    border: none;\n    color: ", ";\n    cursor: pointer;\n    font-size: 0.8125rem;\n    padding: 1rem 0.75rem;\n    width: 100%;\n\n    &:hover {\n      color: ", ";\n      background: none;\n    }\n  "]);

  _templateObject$9 = function _templateObject() {
    return data;
  };

  return data;
}
var NavButton = function NavButton(_ref) {
  var closeMenu = _ref.closeMenu,
      id = _ref.id,
      name = _ref.name,
      to = _ref.to,
      type = _ref.type,
      visible = _ref.visible;
  return __jsx$1H(StyledLink$5, {
    border: false,
    passHref: true,
    to: to
  }, __jsx$1H(StyledButton$5, {
    id: id,
    context: type.context,
    content: name,
    onClick: visible ? closeMenu : function () {},
    outline: type.outline,
    size: type.size,
    type: type.as
  }));
};
var StyledLink$5 = styled__default['default'](Link).withConfig({
  displayName: "button__StyledLink",
  componentId: "sc-16rzl3u-0"
})(["padding:0rem 0.75rem;"]);
var StyledButton$5 = styled__default['default'](Button).withConfig({
  displayName: "button__StyledButton",
  componentId: "sc-16rzl3u-1"
})(["", ""], MEDIA_QUERY_MAX.desktop(_templateObject$9(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.NAVBAR.colourActive;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.COLOUR.primary;
}));
NavButton.propTypes = {
  closeMenu: propTypes.func,
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  to: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  visible: propTypes.bool
};
NavButton.defaultProps = {
  visible: false
};

function _templateObject$a() {
  var data = _taggedTemplateLiteral(["\n    border: none;\n    display: flex;\n    flex-basis: auto;\n    position: static;\n    margin: inherit;\n  "]);

  _templateObject$a = function _templateObject() {
    return data;
  };

  return data;
}
var NavCollapse = styled__default['default'].div.withConfig({
  displayName: "collapse__NavCollapse",
  componentId: "sc-157aoai-0"
})(["flex-basis:100%;flex-grow:1;display:", ";position:", ";right:", ";margin:", ";", ""], function (props) {
  return props.visible ? 'block' : 'none';
}, function (_ref) {
  var theme = _ref.theme;
  return theme.NAVBAR.positionCollapse;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.NAVBAR.positionCollapse === 'fixed' ? '0' : 'inherit';
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.NAVBAR.positionCollapse === 'fixed' ? '2.5rem 2rem' : 'inherit';
}, MEDIA_QUERY.desktop(_templateObject$a()));
NavCollapse.propTypes = {
  visible: propTypes.bool.isRequired
};

var __jsx$1I = React__default['default'].createElement;

function _templateObject$b() {
  var data = _taggedTemplateLiteral(["\n      min-width: 11rem;\n      position: absolute;\n    "]);

  _templateObject$b = function _templateObject() {
    return data;
  };

  return data;
}
var NavDropdown = function NavDropdown(_ref) {
  var closeMenu = _ref.closeMenu,
      icon = _ref.icon,
      name = _ref.name,
      position = _ref.position,
      prefix = _ref.prefix,
      type = _ref.type;
  return __jsx$1I(StyledContainer$5, null, __jsx$1I(StyledDropdown$1, {
    items: type.items,
    onChange: closeMenu,
    position: position
  }, icon && __jsx$1I(Icon, {
    "aria-hidden": "true",
    icon: icon,
    prefix: prefix
  }), __jsx$1I(StyledContent$2, null, name)));
};
var StyledContainer$5 = styled__default['default'].div.withConfig({
  displayName: "dropdown__StyledContainer",
  componentId: "sc-16a5kxn-0"
})(["align-items:center;display:flex;flex:1;position:relative;user-select:none;width:100%;"]);
var StyledDropdown$1 = styled__default['default'](Dropdown).withConfig({
  displayName: "dropdown__StyledDropdown",
  componentId: "sc-16a5kxn-1"
})(["flex:1;position:initial;.dropdown--active{background-color:rgb(37,51,66);.dropdown--caret{color:", ";}}.dropdown--toggle{display:block;line-height:60px;padding:0 0.5rem;&:hover .dropdown--caret{color:", ";}}.dropdown--menu{background-color:rgb(37,51,66);border:initial;border-radius:0;margin:0;padding:0;position:initial;top:3.7rem;width:100%;", "}.dropdown--link{color:#fff;padding:0.75rem;text-shadow:0 0 1px transparent;vertical-align:baseline;&:hover{background-color:#33475b;}}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.COLOUR.primary;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.COLOUR.primary;
}, MEDIA_QUERY.desktop(_templateObject$b()));
var StyledContent$2 = styled__default['default'].span.withConfig({
  displayName: "dropdown__StyledContent",
  componentId: "sc-16a5kxn-2"
})(["margin:0 0.25rem;"]);
NavDropdown.propTypes = {
  closeMenu: propTypes.func,
  icon: propTypes.string,
  name: propTypes.string.isRequired,
  position: propTypes.string,
  prefix: propTypes.string,
  type: propTypes.object.isRequired
};
NavDropdown.defaultProps = {
  position: 'left',
  prefix: 'fad'
};

var __jsx$1J = React__default['default'].createElement;
var NavIcon = function NavIcon(_ref) {
  var closeMenu = _ref.closeMenu,
      to = _ref.to,
      type = _ref.type,
      visible = _ref.visible;
  return __jsx$1J(Link, {
    to: to,
    onClick: visible && closeMenu
  }, __jsx$1J(Icon, {
    icon: type.icon
  }));
};
NavIcon.propTypes = {
  closeMenu: propTypes.func,
  to: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  visible: propTypes.bool
};
NavIcon.defaultProps = {
  visible: false
};

var __jsx$1K = React__default['default'].createElement;

function _templateObject$c() {
  var data = _taggedTemplateLiteral(["\n    color: ", ";\n    // &:hover {\n    //   color: ", ";\n    // }\n  "]);

  _templateObject$c = function _templateObject() {
    return data;
  };

  return data;
}
var NavLink = function NavLink(_ref) {
  var active = _ref.active,
      closeMenu = _ref.closeMenu,
      id = _ref.id,
      name = _ref.name,
      onClick = _ref.onClick,
      to = _ref.to,
      type = _ref.type,
      visible = _ref.visible;

  var handleClick = function handleClick() {
    visible && closeMenu();
    onClick && onClick();
  };

  if (type && (!active || active !== type)) {
    return;
  }

  return __jsx$1K(Link, {
    border: false,
    onClick: handleClick,
    passHref: true,
    to: to
  }, __jsx$1K(StyledLink$6, {
    id: id
  }, name));
};
var StyledLink$6 = styled__default['default'].span.withConfig({
  displayName: "link__StyledLink",
  componentId: "sc-1t9u2hf-0"
})(["align-items:center;color:", ";display:flex;flex:1;justify-content:center;padding:", ";", ""], function (_ref2) {
  var theme = _ref2.theme;
  return theme.NAVBAR.colourDefault;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.NAVBAR.paddingLink;
}, MEDIA_QUERY.desktop(_templateObject$c(), function (_ref4) {
  var theme = _ref4.theme;
  return theme.NAVBAR.colourDefaultDesktop;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.NAVBAR.colourHoverDesktop;
}));
NavLink.propTypes = {
  active: propTypes.string,
  closeMenu: propTypes.func,
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  onClick: propTypes.func,
  to: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  visible: propTypes.bool
};
NavLink.defaultProps = {
  visible: false
};

var __jsx$1L = React__default['default'].createElement;
var NavNotification = function NavNotification(_ref) {
  var closeMenu = _ref.closeMenu,
      to = _ref.to,
      type = _ref.type,
      visible = _ref.visible;

  var handleClick = function handleClick() {
    visible && closeMenu();
  };

  var link = function link() {
    return __jsx$1L(Link, {
      border: false,
      onClick: handleClick,
      passHref: true,
      to: to
    }, __jsx$1L(Notification, null));
  };

  var Notification = function Notification() {
    return __jsx$1L(StyledNotifications, null, type && !!type.count && __jsx$1L(StyledCount, null, type.count), __jsx$1L(Icon, {
      icon: "bell",
      prefix: "fad"
    }));
  };

  if (to) {
    return link();
  } else {
    return __jsx$1L(Notification, null);
  }
};
var StyledNotifications = styled__default['default'].div.withConfig({
  displayName: "notification__StyledNotifications",
  componentId: "jg22gt-0"
})(["color:", ";display:inline-block;margin-right:0.5rem;padding:1rem 0.75rem;position:relative;width:100%;&:hover{color:", ";}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.NAVBAR.colourActive;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.NAVBAR.colourActive;
});
var StyledCount = styled__default['default'].div.withConfig({
  displayName: "notification__StyledCount",
  componentId: "jg22gt-1"
})(["background:red;border:1px solid #fff;border-radius:0.5rem;color:#fff;font-size:0.75rem;left:50%;line-height:1;padding:2px 5px;position:absolute;text-align:center;top:0.4rem;user-select:none;"]);
NavNotification.propTypes = {
  closeMenu: propTypes.func,
  to: propTypes.string.isRequired,
  type: propTypes.object,
  visible: propTypes.bool
};

var __jsx$1M = React__default['default'].createElement;

function _templateObject2$5() {
  var data = _taggedTemplateLiteral(["\n    border: none;\n    display: flex;\n    flex-direction: column;\n    justify-content: ", ";\n    margin-bottom: ", ";\n  "]);

  _templateObject2$5 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$d() {
  var data = _taggedTemplateLiteral(["\n    background-color: initial;\n    flex-direction: row;\n    flex: 1;\n    justify-content: ", ";\n    text-align: left;\n  "]);

  _templateObject$d = function _templateObject() {
    return data;
  };

  return data;
}
var Widgets = function Widgets(_ref) {
  var brand = _ref.brand,
      closeMenu = _ref.closeMenu,
      type = _ref.type,
      visible = _ref.visible,
      widgets = _ref.widgets;
  return __jsx$1M(NavCollapse, {
    visible: visible
  }, Object.entries(widgets).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        direction = _ref3[0],
        link = _ref3[1];

    return __jsx$1M(StyledList$1, {
      direction: direction,
      key: direction
    }, link.map(function (_ref4) {
      var active = _ref4.active,
          Component = _ref4.Component,
          icon = _ref4.icon,
          id = _ref4.id,
          name = _ref4.name,
          onClick = _ref4.onClick,
          position = _ref4.position,
          prefix = _ref4.prefix,
          to = _ref4.to,
          type = _ref4.type;
      return __jsx$1M(StyledListItem, {
        brand: brand,
        key: id
      }, Component && __jsx$1M(Component, null), type && type.as === 'button' && NavButton({
        closeMenu: closeMenu,
        id: id,
        name: name,
        to: to,
        type: type,
        visible: visible
      }), type && type.as === 'icon' && NavIcon({
        closeMenu: closeMenu,
        to: to,
        type: type,
        visible: visible
      }), type && type.as === 'dropdown' && NavDropdown({
        closeMenu: closeMenu,
        icon: icon,
        name: name,
        position: position,
        prefix: prefix,
        type: type
      }), type && type.as === 'notification' && NavNotification({
        closeMenu: closeMenu,
        to: to,
        type: type,
        visible: visible
      }), !Component && (!type || type.as === 'link') && NavLink({
        active: active,
        closeMenu: closeMenu,
        id: id,
        name: name,
        onClick: onClick,
        to: to,
        visible: visible
      }));
    }));
  }));
};
var StyledList$1 = styled__default['default'].ul.withConfig({
  displayName: "widgets__StyledList",
  componentId: "sc-19k00th-0"
})(["background-color:", ";display:flex;flex-direction:column;font-size:", ";list-style:none;margin:0;padding:0;text-align:center;", ""], function (_ref5) {
  var theme = _ref5.theme;
  return theme.NAVBAR.backgroundList;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.NAVBAR.fontSizeList;
}, MEDIA_QUERY.desktop(_templateObject$d(), function (_ref7) {
  var direction = _ref7.direction;
  return direction === 'left' ? 'flex-start' : 'flex-end';
}));
var StyledListItem = styled__default['default'].li.withConfig({
  displayName: "widgets__StyledListItem",
  componentId: "sc-19k00th-1"
})(["position:relative;border-top:", ";background-color:", ";&:hover{background-color:", ";border-bottom:", ";}", " ", ""], function (_ref8) {
  var theme = _ref8.theme;
  return theme.NAVBAR.borderTopListItem;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.NAVBAR.backgroundListItem;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.NAVBAR.backgroundHoverListItem;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.NAVBAR.borderBottomHoverListItem;
}, function (props) {
  return !props.brand && styled.css(["&:first-child{margin-left:0;}"]);
}, MEDIA_QUERY.desktop(_templateObject2$5(), function (_ref12) {
  var theme = _ref12.theme;
  return theme.NAVBAR.justifyContentDesktopListItem;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.NAVBAR.marginBottomDesktopListItem;
}));
Widgets.propTypes = {
  brand: propTypes.string,
  closeMenu: propTypes.func,
  type: propTypes.string,
  visible: propTypes.bool,
  widgets: propTypes.object.isRequired
};

var __jsx$1N = React__default['default'].createElement;
var Notification = function Notification(_ref) {
  var close = _ref.close,
      content = _ref.content,
      context = _ref.context,
      date = _ref.date,
      icon = _ref.icon,
      link = _ref.link,
      title = _ref.title;

  var body = __jsx$1N(React__default['default'].Fragment, null, __jsx$1N(StyledNotificationBody, null, content), date && __jsx$1N(StyledDate, null, formatRelativeTime(date)));

  if (link) {
    body = __jsx$1N(Link, {
      border: false,
      to: {
        href: link
      },
      onClick: function onClick() {
        return close();
      }
    }, body);
  }

  return __jsx$1N(StyledNotificationWrapper, null, __jsx$1N(Alert, {
    close: close,
    content: body,
    context: context,
    header: title,
    icon: icon
  }));
};
var StyledNotificationWrapper = styled__default['default'].div.withConfig({
  displayName: "notification__StyledNotificationWrapper",
  componentId: "sc-1h0hzg8-0"
})(["border-radius:0.25rem;box-shadow:rgba(45,62,80,0.12) 0 1px 5px 0;max-width:100%;width:350px;"]);
var StyledNotificationBody = styled__default['default'].div.withConfig({
  displayName: "notification__StyledNotificationBody",
  componentId: "sc-1h0hzg8-1"
})(["color:#fff;"]);
var StyledDate = styled__default['default'].time.withConfig({
  displayName: "notification__StyledDate",
  componentId: "sc-1h0hzg8-2"
})(["border-top:1px solid #eaeaea;color:#eaeaea;display:block;font-size:0.9rem;margin-top:15px;padding-top:0.25rem;"]);
Notification.propTypes = {
  close: propTypes.func.isRequired,
  content: propTypes.oneOfType([propTypes.object, propTypes.string]).isRequired,
  context: propTypes.oneOf(Object.values(CONTEXT)),
  date: propTypes.string,
  icon: propTypes.string,
  link: propTypes.string,
  title: propTypes.string
};

function _templateObject2$6() {
  var data = _taggedTemplateLiteral(["\n        width: ", ";\n      "]);

  _templateObject2$6 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$e() {
  var data = _taggedTemplateLiteral(["\n        width: ", ";\n      "]);

  _templateObject$e = function _templateObject() {
    return data;
  };

  return data;
}
var OffCanvasDiv = styled__default['default'].div.withConfig({
  displayName: "container__OffCanvasDiv",
  componentId: "sc-17fi5vb-0"
})(["background-color:#fff;border-left:", ";box-shadow:", ";overflow-x:hidden;overflow-y:auto;position:fixed;transition:transform ", "ms ease-in-out;z-index:9999;", " ", " ", " ", ""], function (_ref) {
  var show = _ref.show;
  return show ? 'none' : '1px solid #cecece';
}, function (_ref2) {
  var show = _ref2.show;
  return show ? '-5px 0px 38px rgba(0, 0, 0, 0.15)' : 'none';
}, function (_ref3) {
  var duration = _ref3.duration;
  return duration;
}, function (_ref4) {
  var placement = _ref4.placement;
  return placement === 'top' && styled.css(["height:", ";left:0;right:0;top:0;width:100vw;"], function (_ref5) {
    var height = _ref5.height;
    return height || '50%';
  });
}, function (_ref6) {
  var placement = _ref6.placement;
  return placement === 'right' && styled.css(["height:100vh;right:0;top:0;width:90%;", ""], MEDIA_QUERY.desktop(_templateObject$e(), function (_ref7) {
    var width = _ref7.width;
    return width;
  }));
}, function (_ref8) {
  var placement = _ref8.placement;
  return placement === 'bottom' && styled.css(["bottom:0;height:", ";left:0;right:0;width:100vw;"], function (_ref9) {
    var height = _ref9.height;
    return height || '50%';
  });
}, function (_ref10) {
  var placement = _ref10.placement;
  return placement === 'left' && styled.css(["height:100vh;left:0;top:0;width:90%;", ""], MEDIA_QUERY.desktop(_templateObject2$6(), function (_ref11) {
    var width = _ref11.width;
    return width;
  }));
});
OffCanvasDiv.propTypes = {
  height: propTypes.string,
  show: propTypes.bool,
  width: propTypes.string
};

/**
 * Molecules - OffCanvas - Content
 */
var OffCanvasContent = styled__default['default'].div.withConfig({
  displayName: "content__OffCanvasContent",
  componentId: "fmbgwb-0"
})(["flex:1;margin-top:72px;padding:24px;z-index:-1;"]);

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

// based on https://github.com/styled-components/styled-components/blob/fcf6f3804c57a14dd7984dfab7bc06ee2edca044/src/utils/error.js

/**
 * Parse errors.md and turn it into a simple hash of code: message
 * @private
 */
var ERRORS = {
  "1": "Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).\n\n",
  "2": "Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).\n\n",
  "3": "Passed an incorrect argument to a color function, please pass a string representation of a color.\n\n",
  "4": "Couldn't generate valid rgb string from %s, it returned %s.\n\n",
  "5": "Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.\n\n",
  "6": "Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).\n\n",
  "7": "Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).\n\n",
  "8": "Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.\n\n",
  "9": "Please provide a number of steps to the modularScale helper.\n\n",
  "10": "Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",
  "11": "Invalid value passed as base to modularScale, expected number or em string but got \"%s\"\n\n",
  "12": "Expected a string ending in \"px\" or a number passed as the first argument to %s(), got \"%s\" instead.\n\n",
  "13": "Expected a string ending in \"px\" or a number passed as the second argument to %s(), got \"%s\" instead.\n\n",
  "14": "Passed invalid pixel value (\"%s\") to %s(), please pass a value like \"12px\" or 12.\n\n",
  "15": "Passed invalid base value (\"%s\") to %s(), please pass a value like \"12px\" or 12.\n\n",
  "16": "You must provide a template to this method.\n\n",
  "17": "You passed an unsupported selector state to this method.\n\n",
  "18": "minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",
  "19": "fromSize and toSize must be provided as stringified numbers with the same units.\n\n",
  "20": "expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",
  "21": "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  "22": "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  "23": "fontFace expects a name of a font-family.\n\n",
  "24": "fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",
  "25": "fontFace expects localFonts to be an array.\n\n",
  "26": "fontFace expects fileFormats to be an array.\n\n",
  "27": "radialGradient requries at least 2 color-stops to properly render.\n\n",
  "28": "Please supply a filename to retinaImage() as the first argument.\n\n",
  "29": "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
  "30": "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  "31": "The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation\n\n",
  "32": "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')\n\n",
  "33": "The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation\n\n",
  "34": "borderRadius expects a radius value as a string or number as the second argument.\n\n",
  "35": "borderRadius expects one of \"top\", \"bottom\", \"left\" or \"right\" as the first argument.\n\n",
  "36": "Property must be a string value.\n\n",
  "37": "Syntax Error at %s.\n\n",
  "38": "Formula contains a function that needs parentheses at %s.\n\n",
  "39": "Formula is missing closing parenthesis at %s.\n\n",
  "40": "Formula has too many closing parentheses at %s.\n\n",
  "41": "All values in a formula must have the same unit or be unitless.\n\n",
  "42": "Please provide a number of steps to the modularScale helper.\n\n",
  "43": "Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",
  "44": "Invalid value passed as base to modularScale, expected number or em/rem string but got %s.\n\n",
  "45": "Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.\n\n",
  "46": "Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.\n\n",
  "47": "minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",
  "48": "fromSize and toSize must be provided as stringified numbers with the same units.\n\n",
  "49": "Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",
  "50": "Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.\n\n",
  "51": "Expects the first argument object to have the properties prop, fromSize, and toSize.\n\n",
  "52": "fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",
  "53": "fontFace expects localFonts to be an array.\n\n",
  "54": "fontFace expects fileFormats to be an array.\n\n",
  "55": "fontFace expects a name of a font-family.\n\n",
  "56": "linearGradient requries at least 2 color-stops to properly render.\n\n",
  "57": "radialGradient requries at least 2 color-stops to properly render.\n\n",
  "58": "Please supply a filename to retinaImage() as the first argument.\n\n",
  "59": "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
  "60": "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  "61": "Property must be a string value.\n\n",
  "62": "borderRadius expects a radius value as a string or number as the second argument.\n\n",
  "63": "borderRadius expects one of \"top\", \"bottom\", \"left\" or \"right\" as the first argument.\n\n",
  "64": "The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.\n\n",
  "65": "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').\n\n",
  "66": "The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.\n\n",
  "67": "You must provide a template to this method.\n\n",
  "68": "You passed an unsupported selector state to this method.\n\n",
  "69": "Expected a string ending in \"px\" or a number passed as the first argument to %s(), got %s instead.\n\n",
  "70": "Expected a string ending in \"px\" or a number passed as the second argument to %s(), got %s instead.\n\n",
  "71": "Passed invalid pixel value %s to %s(), please pass a value like \"12px\" or 12.\n\n",
  "72": "Passed invalid base value %s to %s(), please pass a value like \"12px\" or 12.\n\n",
  "73": "Please provide a valid CSS variable.\n\n",
  "74": "CSS variable not found.\n"
};
/**
 * super basic version of sprintf
 * @private
 */

function format$1() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var a = args[0];
  var b = [];
  var c;

  for (c = 1; c < args.length; c += 1) {
    b.push(args[c]);
  }

  b.forEach(function (d) {
    a = a.replace(/%[a-z]/, d);
  });
  return a;
}
/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 * @private
 */


var PolishedError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(PolishedError, _Error);

  function PolishedError(code) {
    var _this;

    if (process.env.NODE_ENV === 'production') {
      _this = _Error.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + code + " for more information.") || this;
    } else {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      _this = _Error.call(this, format$1.apply(void 0, [ERRORS[code]].concat(args))) || this;
    }

    return _assertThisInitialized(_this);
  }

  return PolishedError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

function colorToInt(color) {
  return Math.round(color * 255);
}

function convertToInt(red, green, blue) {
  return colorToInt(red) + "," + colorToInt(green) + "," + colorToInt(blue);
}

function hslToRgb(hue, saturation, lightness, convert) {
  if (convert === void 0) {
    convert = convertToInt;
  }

  if (saturation === 0) {
    // achromatic
    return convert(lightness, lightness, lightness);
  } // formulae from https://en.wikipedia.org/wiki/HSL_and_HSV


  var huePrime = (hue % 360 + 360) % 360 / 60;
  var chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  var secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
  var red = 0;
  var green = 0;
  var blue = 0;

  if (huePrime >= 0 && huePrime < 1) {
    red = chroma;
    green = secondComponent;
  } else if (huePrime >= 1 && huePrime < 2) {
    red = secondComponent;
    green = chroma;
  } else if (huePrime >= 2 && huePrime < 3) {
    green = chroma;
    blue = secondComponent;
  } else if (huePrime >= 3 && huePrime < 4) {
    green = secondComponent;
    blue = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    red = secondComponent;
    blue = chroma;
  } else if (huePrime >= 5 && huePrime < 6) {
    red = chroma;
    blue = secondComponent;
  }

  var lightnessModification = lightness - chroma / 2;
  var finalRed = red + lightnessModification;
  var finalGreen = green + lightnessModification;
  var finalBlue = blue + lightnessModification;
  return convert(finalRed, finalGreen, finalBlue);
}

var namedColorMap = {
  aliceblue: 'f0f8ff',
  antiquewhite: 'faebd7',
  aqua: '00ffff',
  aquamarine: '7fffd4',
  azure: 'f0ffff',
  beige: 'f5f5dc',
  bisque: 'ffe4c4',
  black: '000',
  blanchedalmond: 'ffebcd',
  blue: '0000ff',
  blueviolet: '8a2be2',
  brown: 'a52a2a',
  burlywood: 'deb887',
  cadetblue: '5f9ea0',
  chartreuse: '7fff00',
  chocolate: 'd2691e',
  coral: 'ff7f50',
  cornflowerblue: '6495ed',
  cornsilk: 'fff8dc',
  crimson: 'dc143c',
  cyan: '00ffff',
  darkblue: '00008b',
  darkcyan: '008b8b',
  darkgoldenrod: 'b8860b',
  darkgray: 'a9a9a9',
  darkgreen: '006400',
  darkgrey: 'a9a9a9',
  darkkhaki: 'bdb76b',
  darkmagenta: '8b008b',
  darkolivegreen: '556b2f',
  darkorange: 'ff8c00',
  darkorchid: '9932cc',
  darkred: '8b0000',
  darksalmon: 'e9967a',
  darkseagreen: '8fbc8f',
  darkslateblue: '483d8b',
  darkslategray: '2f4f4f',
  darkslategrey: '2f4f4f',
  darkturquoise: '00ced1',
  darkviolet: '9400d3',
  deeppink: 'ff1493',
  deepskyblue: '00bfff',
  dimgray: '696969',
  dimgrey: '696969',
  dodgerblue: '1e90ff',
  firebrick: 'b22222',
  floralwhite: 'fffaf0',
  forestgreen: '228b22',
  fuchsia: 'ff00ff',
  gainsboro: 'dcdcdc',
  ghostwhite: 'f8f8ff',
  gold: 'ffd700',
  goldenrod: 'daa520',
  gray: '808080',
  green: '008000',
  greenyellow: 'adff2f',
  grey: '808080',
  honeydew: 'f0fff0',
  hotpink: 'ff69b4',
  indianred: 'cd5c5c',
  indigo: '4b0082',
  ivory: 'fffff0',
  khaki: 'f0e68c',
  lavender: 'e6e6fa',
  lavenderblush: 'fff0f5',
  lawngreen: '7cfc00',
  lemonchiffon: 'fffacd',
  lightblue: 'add8e6',
  lightcoral: 'f08080',
  lightcyan: 'e0ffff',
  lightgoldenrodyellow: 'fafad2',
  lightgray: 'd3d3d3',
  lightgreen: '90ee90',
  lightgrey: 'd3d3d3',
  lightpink: 'ffb6c1',
  lightsalmon: 'ffa07a',
  lightseagreen: '20b2aa',
  lightskyblue: '87cefa',
  lightslategray: '789',
  lightslategrey: '789',
  lightsteelblue: 'b0c4de',
  lightyellow: 'ffffe0',
  lime: '0f0',
  limegreen: '32cd32',
  linen: 'faf0e6',
  magenta: 'f0f',
  maroon: '800000',
  mediumaquamarine: '66cdaa',
  mediumblue: '0000cd',
  mediumorchid: 'ba55d3',
  mediumpurple: '9370db',
  mediumseagreen: '3cb371',
  mediumslateblue: '7b68ee',
  mediumspringgreen: '00fa9a',
  mediumturquoise: '48d1cc',
  mediumvioletred: 'c71585',
  midnightblue: '191970',
  mintcream: 'f5fffa',
  mistyrose: 'ffe4e1',
  moccasin: 'ffe4b5',
  navajowhite: 'ffdead',
  navy: '000080',
  oldlace: 'fdf5e6',
  olive: '808000',
  olivedrab: '6b8e23',
  orange: 'ffa500',
  orangered: 'ff4500',
  orchid: 'da70d6',
  palegoldenrod: 'eee8aa',
  palegreen: '98fb98',
  paleturquoise: 'afeeee',
  palevioletred: 'db7093',
  papayawhip: 'ffefd5',
  peachpuff: 'ffdab9',
  peru: 'cd853f',
  pink: 'ffc0cb',
  plum: 'dda0dd',
  powderblue: 'b0e0e6',
  purple: '800080',
  rebeccapurple: '639',
  red: 'f00',
  rosybrown: 'bc8f8f',
  royalblue: '4169e1',
  saddlebrown: '8b4513',
  salmon: 'fa8072',
  sandybrown: 'f4a460',
  seagreen: '2e8b57',
  seashell: 'fff5ee',
  sienna: 'a0522d',
  silver: 'c0c0c0',
  skyblue: '87ceeb',
  slateblue: '6a5acd',
  slategray: '708090',
  slategrey: '708090',
  snow: 'fffafa',
  springgreen: '00ff7f',
  steelblue: '4682b4',
  tan: 'd2b48c',
  teal: '008080',
  thistle: 'd8bfd8',
  tomato: 'ff6347',
  turquoise: '40e0d0',
  violet: 'ee82ee',
  wheat: 'f5deb3',
  white: 'fff',
  whitesmoke: 'f5f5f5',
  yellow: 'ff0',
  yellowgreen: '9acd32'
};
/**
 * Checks if a string is a CSS named color and returns its equivalent hex value, otherwise returns the original color.
 * @private
 */

function nameToHex(color) {
  if (typeof color !== 'string') return color;
  var normalizedColorName = color.toLowerCase();
  return namedColorMap[normalizedColorName] ? "#" + namedColorMap[normalizedColorName] : color;
}

var hexRegex = /^#[a-fA-F0-9]{6}$/;
var hexRgbaRegex = /^#[a-fA-F0-9]{8}$/;
var reducedHexRegex = /^#[a-fA-F0-9]{3}$/;
var reducedRgbaHexRegex = /^#[a-fA-F0-9]{4}$/;
var rgbRegex = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i;
var rgbaRegex = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;
var hslRegex = /^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i;
var hslaRegex = /^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;
/**
 * Returns an RgbColor or RgbaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a RgbColor or RgbaColor object back to a string.
 *
 * @example
 * // Assigns `{ red: 255, green: 0, blue: 0 }` to color1
 * const color1 = parseToRgb('rgb(255, 0, 0)');
 * // Assigns `{ red: 92, green: 102, blue: 112, alpha: 0.75 }` to color2
 * const color2 = parseToRgb('hsla(210, 10%, 40%, 0.75)');
 */

function parseToRgb(color) {
  if (typeof color !== 'string') {
    throw new PolishedError(3);
  }

  var normalizedColor = nameToHex(color);

  if (normalizedColor.match(hexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16)
    };
  }

  if (normalizedColor.match(hexRgbaRegex)) {
    var alpha = parseFloat((parseInt("" + normalizedColor[7] + normalizedColor[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16),
      alpha: alpha
    };
  }

  if (normalizedColor.match(reducedHexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16)
    };
  }

  if (normalizedColor.match(reducedRgbaHexRegex)) {
    var _alpha = parseFloat((parseInt("" + normalizedColor[4] + normalizedColor[4], 16) / 255).toFixed(2));

    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16),
      alpha: _alpha
    };
  }

  var rgbMatched = rgbRegex.exec(normalizedColor);

  if (rgbMatched) {
    return {
      red: parseInt("" + rgbMatched[1], 10),
      green: parseInt("" + rgbMatched[2], 10),
      blue: parseInt("" + rgbMatched[3], 10)
    };
  }

  var rgbaMatched = rgbaRegex.exec(normalizedColor);

  if (rgbaMatched) {
    return {
      red: parseInt("" + rgbaMatched[1], 10),
      green: parseInt("" + rgbaMatched[2], 10),
      blue: parseInt("" + rgbaMatched[3], 10),
      alpha: parseFloat("" + rgbaMatched[4])
    };
  }

  var hslMatched = hslRegex.exec(normalizedColor);

  if (hslMatched) {
    var hue = parseInt("" + hslMatched[1], 10);
    var saturation = parseInt("" + hslMatched[2], 10) / 100;
    var lightness = parseInt("" + hslMatched[3], 10) / 100;
    var rgbColorString = "rgb(" + hslToRgb(hue, saturation, lightness) + ")";
    var hslRgbMatched = rgbRegex.exec(rgbColorString);

    if (!hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, rgbColorString);
    }

    return {
      red: parseInt("" + hslRgbMatched[1], 10),
      green: parseInt("" + hslRgbMatched[2], 10),
      blue: parseInt("" + hslRgbMatched[3], 10)
    };
  }

  var hslaMatched = hslaRegex.exec(normalizedColor);

  if (hslaMatched) {
    var _hue = parseInt("" + hslaMatched[1], 10);

    var _saturation = parseInt("" + hslaMatched[2], 10) / 100;

    var _lightness = parseInt("" + hslaMatched[3], 10) / 100;

    var _rgbColorString = "rgb(" + hslToRgb(_hue, _saturation, _lightness) + ")";

    var _hslRgbMatched = rgbRegex.exec(_rgbColorString);

    if (!_hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, _rgbColorString);
    }

    return {
      red: parseInt("" + _hslRgbMatched[1], 10),
      green: parseInt("" + _hslRgbMatched[2], 10),
      blue: parseInt("" + _hslRgbMatched[3], 10),
      alpha: parseFloat("" + hslaMatched[4])
    };
  }

  throw new PolishedError(5);
}

function rgbToHsl(color) {
  // make sure rgb are contained in a set of [0, 255]
  var red = color.red / 255;
  var green = color.green / 255;
  var blue = color.blue / 255;
  var max = Math.max(red, green, blue);
  var min = Math.min(red, green, blue);
  var lightness = (max + min) / 2;

  if (max === min) {
    // achromatic
    if (color.alpha !== undefined) {
      return {
        hue: 0,
        saturation: 0,
        lightness: lightness,
        alpha: color.alpha
      };
    } else {
      return {
        hue: 0,
        saturation: 0,
        lightness: lightness
      };
    }
  }

  var hue;
  var delta = max - min;
  var saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);

  switch (max) {
    case red:
      hue = (green - blue) / delta + (green < blue ? 6 : 0);
      break;

    case green:
      hue = (blue - red) / delta + 2;
      break;

    default:
      // blue case
      hue = (red - green) / delta + 4;
      break;
  }

  hue *= 60;

  if (color.alpha !== undefined) {
    return {
      hue: hue,
      saturation: saturation,
      lightness: lightness,
      alpha: color.alpha
    };
  }

  return {
    hue: hue,
    saturation: saturation,
    lightness: lightness
  };
}

/**
 * Returns an HslColor or HslaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a HslColor or HslaColor object back to a string.
 *
 * @example
 * // Assigns `{ hue: 0, saturation: 1, lightness: 0.5 }` to color1
 * const color1 = parseToHsl('rgb(255, 0, 0)');
 * // Assigns `{ hue: 128, saturation: 1, lightness: 0.5, alpha: 0.75 }` to color2
 * const color2 = parseToHsl('hsla(128, 100%, 50%, 0.75)');
 */
function parseToHsl(color) {
  // Note: At a later stage we can optimize this function as right now a hsl
  // color would be parsed converted to rgb values and converted back to hsl.
  return rgbToHsl(parseToRgb(color));
}

/**
 * Reduces hex values if possible e.g. #ff8866 to #f86
 * @private
 */
var reduceHexValue = function reduceHexValue(value) {
  if (value.length === 7 && value[1] === value[2] && value[3] === value[4] && value[5] === value[6]) {
    return "#" + value[1] + value[3] + value[5];
  }

  return value;
};

function numberToHex(value) {
  var hex = value.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function colorToHex(color) {
  return numberToHex(Math.round(color * 255));
}

function convertToHex(red, green, blue) {
  return reduceHexValue("#" + colorToHex(red) + colorToHex(green) + colorToHex(blue));
}

function hslToHex(hue, saturation, lightness) {
  return hslToRgb(hue, saturation, lightness, convertToHex);
}

/**
 * Returns a string value for the color. The returned result is the smallest possible hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: hsl(359, 0.75, 0.4),
 *   background: hsl({ hue: 360, saturation: 0.75, lightness: 0.4 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${hsl(359, 0.75, 0.4)};
 *   background: ${hsl({ hue: 360, saturation: 0.75, lightness: 0.4 })};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#b3191c";
 *   background: "#b3191c";
 * }
 */
function hsl(value, saturation, lightness) {
  if (typeof value === 'number' && typeof saturation === 'number' && typeof lightness === 'number') {
    return hslToHex(value, saturation, lightness);
  } else if (typeof value === 'object' && saturation === undefined && lightness === undefined) {
    return hslToHex(value.hue, value.saturation, value.lightness);
  }

  throw new PolishedError(1);
}

/**
 * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: hsla(359, 0.75, 0.4, 0.7),
 *   background: hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 }),
 *   background: hsla(359, 0.75, 0.4, 1),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${hsla(359, 0.75, 0.4, 0.7)};
 *   background: ${hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 })};
 *   background: ${hsla(359, 0.75, 0.4, 1)};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(179,25,28,0.7)";
 *   background: "rgba(179,25,28,0.7)";
 *   background: "#b3191c";
 * }
 */
function hsla(value, saturation, lightness, alpha) {
  if (typeof value === 'number' && typeof saturation === 'number' && typeof lightness === 'number' && typeof alpha === 'number') {
    return alpha >= 1 ? hslToHex(value, saturation, lightness) : "rgba(" + hslToRgb(value, saturation, lightness) + "," + alpha + ")";
  } else if (typeof value === 'object' && saturation === undefined && lightness === undefined && alpha === undefined) {
    return value.alpha >= 1 ? hslToHex(value.hue, value.saturation, value.lightness) : "rgba(" + hslToRgb(value.hue, value.saturation, value.lightness) + "," + value.alpha + ")";
  }

  throw new PolishedError(2);
}

/**
 * Returns a string value for the color. The returned result is the smallest possible hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgb(255, 205, 100),
 *   background: rgb({ red: 255, green: 205, blue: 100 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgb(255, 205, 100)};
 *   background: ${rgb({ red: 255, green: 205, blue: 100 })};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#ffcd64";
 *   background: "#ffcd64";
 * }
 */
function rgb(value, green, blue) {
  if (typeof value === 'number' && typeof green === 'number' && typeof blue === 'number') {
    return reduceHexValue("#" + numberToHex(value) + numberToHex(green) + numberToHex(blue));
  } else if (typeof value === 'object' && green === undefined && blue === undefined) {
    return reduceHexValue("#" + numberToHex(value.red) + numberToHex(value.green) + numberToHex(value.blue));
  }

  throw new PolishedError(6);
}

/**
 * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
 *
 * Can also be used to fade a color by passing a hex value or named CSS color along with an alpha value.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgba(255, 205, 100, 0.7),
 *   background: rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 }),
 *   background: rgba(255, 205, 100, 1),
 *   background: rgba('#ffffff', 0.4),
 *   background: rgba('black', 0.7),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgba(255, 205, 100, 0.7)};
 *   background: ${rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 })};
 *   background: ${rgba(255, 205, 100, 1)};
 *   background: ${rgba('#ffffff', 0.4)};
 *   background: ${rgba('black', 0.7)};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(255,205,100,0.7)";
 *   background: "rgba(255,205,100,0.7)";
 *   background: "#ffcd64";
 *   background: "rgba(255,255,255,0.4)";
 *   background: "rgba(0,0,0,0.7)";
 * }
 */
function rgba(firstValue, secondValue, thirdValue, fourthValue) {
  if (typeof firstValue === 'string' && typeof secondValue === 'number') {
    var rgbValue = parseToRgb(firstValue);
    return "rgba(" + rgbValue.red + "," + rgbValue.green + "," + rgbValue.blue + "," + secondValue + ")";
  } else if (typeof firstValue === 'number' && typeof secondValue === 'number' && typeof thirdValue === 'number' && typeof fourthValue === 'number') {
    return fourthValue >= 1 ? rgb(firstValue, secondValue, thirdValue) : "rgba(" + firstValue + "," + secondValue + "," + thirdValue + "," + fourthValue + ")";
  } else if (typeof firstValue === 'object' && secondValue === undefined && thirdValue === undefined && fourthValue === undefined) {
    return firstValue.alpha >= 1 ? rgb(firstValue.red, firstValue.green, firstValue.blue) : "rgba(" + firstValue.red + "," + firstValue.green + "," + firstValue.blue + "," + firstValue.alpha + ")";
  }

  throw new PolishedError(7);
}

var isRgb = function isRgb(color) {
  return typeof color.red === 'number' && typeof color.green === 'number' && typeof color.blue === 'number' && (typeof color.alpha !== 'number' || typeof color.alpha === 'undefined');
};

var isRgba = function isRgba(color) {
  return typeof color.red === 'number' && typeof color.green === 'number' && typeof color.blue === 'number' && typeof color.alpha === 'number';
};

var isHsl = function isHsl(color) {
  return typeof color.hue === 'number' && typeof color.saturation === 'number' && typeof color.lightness === 'number' && (typeof color.alpha !== 'number' || typeof color.alpha === 'undefined');
};

var isHsla = function isHsla(color) {
  return typeof color.hue === 'number' && typeof color.saturation === 'number' && typeof color.lightness === 'number' && typeof color.alpha === 'number';
};
/**
 * Converts a RgbColor, RgbaColor, HslColor or HslaColor object to a color string.
 * This util is useful in case you only know on runtime which color object is
 * used. Otherwise we recommend to rely on `rgb`, `rgba`, `hsl` or `hsla`.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: toColorString({ red: 255, green: 205, blue: 100 }),
 *   background: toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 }),
 *   background: toColorString({ hue: 240, saturation: 1, lightness: 0.5 }),
 *   background: toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${toColorString({ red: 255, green: 205, blue: 100 })};
 *   background: ${toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 })};
 *   background: ${toColorString({ hue: 240, saturation: 1, lightness: 0.5 })};
 *   background: ${toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 })};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#ffcd64";
 *   background: "rgba(255,205,100,0.72)";
 *   background: "#00f";
 *   background: "rgba(179,25,25,0.72)";
 * }
 */


function toColorString(color) {
  if (typeof color !== 'object') throw new PolishedError(8);
  if (isRgba(color)) return rgba(color);
  if (isRgb(color)) return rgb(color);
  if (isHsla(color)) return hsla(color);
  if (isHsl(color)) return hsl(color);
  throw new PolishedError(8);
}

// Type definitions taken from https://github.com/gcanti/flow-static-land/blob/master/src/Fun.js
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-redeclare
function curried(f, length, acc) {
  return function fn() {
    // eslint-disable-next-line prefer-rest-params
    var combined = acc.concat(Array.prototype.slice.call(arguments));
    return combined.length >= length ? f.apply(this, combined) : curried(f, length, combined);
  };
} // eslint-disable-next-line no-redeclare


function curry(f) {
  // eslint-disable-line no-redeclare
  return curried(f, f.length, []);
}

function guard(lowerBoundary, upperBoundary, value) {
  return Math.max(lowerBoundary, Math.min(upperBoundary, value));
}

/**
 * Returns a string value for the lightened color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: lighten(0.2, '#CCCD64'),
 *   background: lighten('0.2', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${lighten(0.2, '#FFCD64')};
 *   background: ${lighten('0.2', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#e5e6b1";
 *   background: "rgba(229,230,177,0.7)";
 * }
 */

function lighten(amount, color) {
  if (color === 'transparent') return color;
  var hslColor = parseToHsl(color);
  return toColorString(_extends({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness + parseFloat(amount))
  }));
} // prettier-ignore


var curriedLighten = /*#__PURE__*/curry
/* ::<number | string, string, string> */
(lighten);

var __jsx$1O = React__default['default'].createElement;
var OffCanvasHeader = function OffCanvasHeader(_ref) {
  var context = _ref.context,
      hasAvatar = _ref.hasAvatar,
      headerContent = _ref.headerContent,
      onClose = _ref.onClose,
      submit = _ref.submit,
      title = _ref.title,
      variant = _ref.variant;
  return __jsx$1O(StyledHeader$2, {
    context: context,
    variant: variant
  }, __jsx$1O(Row, {
    align: "center"
  }, __jsx$1O(Column, {
    md: 8
  }, __jsx$1O(Icon, {
    context: variant === 'extended' ? 'white' : context,
    icon: "expand",
    prefix: "fas"
  }), __jsx$1O(StyledHeading$1, {
    content: title,
    context: context,
    tag: "h4",
    variant: variant
  })), __jsx$1O(Column, {
    md: 4
  }, __jsx$1O(StyledContainer$6, null, submit && __jsx$1O(React__default['default'].Fragment, null, __jsx$1O(Button, {
    content: "Submit",
    context: "primary",
    form: "offCanvasForm",
    size: "sm",
    type: "submit"
  }), __jsx$1O(Divider, {
    flexItem: true,
    size: "sm",
    vertical: true
  })), __jsx$1O(Close, {
    click: onClose,
    context: variant === 'normal' ? context : 'white'
  })))), __jsx$1O(StyledBodyContainer, null, hasAvatar && __jsx$1O(StyledAvatarContainer, {
    context: context
  }, __jsx$1O(Avatar, {
    content: "Avatar",
    context: context,
    size: "lg"
  })), headerContent && __jsx$1O(StyledText$4, {
    content: headerContent,
    context: context,
    size: "xs",
    variant: variant
  })));
};
var StyledHeader$2 = styled__default['default'].div.withConfig({
  displayName: "header__StyledHeader",
  componentId: "sc-19iiwbd-0"
})(["background-color:", ";border-top:.5rem solid ", ";", " color:", ";display:flex;flex:1;flex-direction:column;padding:1rem;position:fixed;width:inherit;z-index:1;"], function (_ref2) {
  var context = _ref2.context,
      theme = _ref2.theme,
      variant = _ref2.variant;
  return variant === 'normal' ? '#fff' : curriedLighten(0.1, theme.COLOUR[context]);
}, function (_ref3) {
  var context = _ref3.context,
      variant = _ref3.variant,
      theme = _ref3.theme;
  return variant === 'normal' && context !== 'primary' ? theme.COLOUR[context] : 'transparent';
}, function (_ref4) {
  var shadow = _ref4.shadow;
  return shadow && 'box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.11);';
}, function (_ref5) {
  var COLOUR = _ref5.theme.COLOUR;
  return COLOUR.black;
});
var StyledHeading$1 = styled__default['default'](Heading).withConfig({
  displayName: "header__StyledHeading",
  componentId: "sc-19iiwbd-1"
})(["color:", ";display:inline;margin:0;padding-left:0.25rem;"], function (_ref6) {
  var context = _ref6.context,
      COLOUR = _ref6.theme.COLOUR,
      variant = _ref6.variant;
  return variant === 'normal' ? COLOUR.black : COLOUR.white;
});
var StyledContainer$6 = styled__default['default'].div.withConfig({
  displayName: "header__StyledContainer",
  componentId: "sc-19iiwbd-2"
})(["align-items:center;display:flex;justify-content:flex-end;"]);
var StyledBodyContainer = styled__default['default'].div.withConfig({
  displayName: "header__StyledBodyContainer",
  componentId: "sc-19iiwbd-3"
})(["display:flex;"]);
var StyledAvatarContainer = styled__default['default'].div.withConfig({
  displayName: "header__StyledAvatarContainer",
  componentId: "sc-19iiwbd-4"
})(["align-items:center;background-color:", ";border-radius:4px;display:flex;justify-content:center;margin-right:24.5px;min-height:70px;min-width:70px;"], function (_ref7) {
  var context = _ref7.context,
      theme = _ref7.theme;
  return curriedLighten(0.2, theme.COLOUR[context]);
});
var StyledText$4 = styled__default['default'](Text).withConfig({
  displayName: "header__StyledText",
  componentId: "sc-19iiwbd-5"
})(["color:", ";"], function (_ref8) {
  var context = _ref8.context,
      theme = _ref8.theme,
      variant = _ref8.variant;
  return variant === 'normal' ? theme.COLOUR.black : theme.COLOUR.white;
});
OffCanvasHeader.propTypes = {
  context: propTypes.oneOf(Object.values(CONTEXT)),
  hasAvatar: propTypes.bool,
  headerContent: propTypes.string,
  onClose: propTypes.func.isRequired,
  submit: propTypes.bool,
  title: propTypes.string.isRequired,
  variant: propTypes.oneOf(['extended', 'normal'])
};
OffCanvasHeader.defaultProps = {
  hasAvatar: false,
  submit: true,
  variant: 'extended'
};

/**
 * Molecules - OffCanvas - Overlay
 */
var OffCanvasOverlay = styled__default['default'].div.withConfig({
  displayName: "overlay__OffCanvasOverlay",
  componentId: "sc-1gevpiw-0"
})(["background-color:rgba(0,0,0,", ");height:100vh;left:0;position:fixed;right:0;top:0;transition:background-color ", "ms ease-in-out;width:100vw;will-change:background-color;z-index:9998;"], function (_ref) {
  var opacity = _ref.opacity,
      show = _ref.show;
  return show ? opacity : 0;
}, function (_ref2) {
  var duration = _ref2.duration;
  return duration;
});
OffCanvasOverlay.propTypes = {
  duration: propTypes.number,
  opacity: propTypes.number,
  show: propTypes.bool,
  width: propTypes.string
};
OffCanvasOverlay.defaultProps = {
  duration: 300,
  opacity: 0.3
};

var __jsx$1P = React__default['default'].createElement;
var OffCanvasComponent = function OffCanvasComponent(_ref) {
  var children = _ref.children,
      closeOnOverlayClick = _ref.closeOnOverlayClick,
      context = _ref.context,
      hasAvatar = _ref.hasAvatar,
      headerText = _ref.headerText,
      headerContent = _ref.headerContent,
      height = _ref.height,
      overlay = _ref.overlay,
      overlayOpacity = _ref.overlayOpacity,
      placement = _ref.placement,
      show = _ref.show,
      submit = _ref.submit,
      toggleShow = _ref.toggleShow,
      transitionDuration = _ref.transitionDuration,
      variant = _ref.variant,
      width = _ref.width;

  var _useState = React.useState(false),
      initialState = _useState[0],
      setInitialState = _useState[1];

  React.useEffect(function () {
    if (show) {
      setTimeout(function () {
        return setInitialState(true);
      }, 1);
    } else {
      setInitialState(false);
    }
  }, [show]);

  var handleOverlayClick = function handleOverlayClick() {
    if (closeOnOverlayClick) {
      toggleShow(false);
    }
  };

  return __jsx$1P(React__default['default'].Fragment, null, overlay && __jsx$1P(OffCanvasOverlay, {
    duration: transitionDuration,
    onClick: handleOverlayClick,
    opacity: overlayOpacity,
    show: initialState
  }), __jsx$1P(OffCanvasDiv, {
    "data-cy": "offCanvas",
    duration: transitionDuration,
    height: height,
    placement: placement,
    show: initialState,
    width: width
  }, __jsx$1P(OffCanvasHeader, {
    context: context,
    "data-cy": "offCanvasHeader",
    hasAvatar: hasAvatar,
    headerContent: headerContent,
    onClose: function onClose(e) {
      return toggleShow(false);
    },
    submit: submit,
    title: headerText,
    variant: variant
  }), __jsx$1P(OffCanvasContent, null, children)));
};
OffCanvasComponent.propTypes = {
  children: propTypes.node,
  closeOnOverlayClick: propTypes.bool,
  context: propTypes.oneOf(Object.values(CONTEXT)),
  container: propTypes.any,
  hasAvatar: propTypes.bool,
  headerText: propTypes.string.isRequired,
  headerContent: propTypes.string,
  height: propTypes.string,
  lockScrollOnOpen: propTypes.bool,
  overlay: propTypes.bool,
  overlayOpacity: propTypes.number,
  placement: propTypes.oneOf(['top', 'right', 'bottom', 'left']),
  show: propTypes.bool.isRequired,
  submit: propTypes.bool,
  toggleShow: propTypes.func.isRequired,
  transitionDuration: propTypes.number,
  variant: propTypes.string,
  width: propTypes.string
};
OffCanvasComponent.defaultProps = {
  closeOnOverlayClick: true,
  context: 'secondary',
  hasAvatar: false,
  overlay: true,
  overlayOpacity: 0.3,
  placement: 'right',
  submit: true,
  transitionDuration: 300,
  width: '30vw'
};

var __jsx$1Q = React__default['default'].createElement;
var OffCanvas = function OffCanvas(props) {
  var _useState = React.useState(false),
      mounted = _useState[0],
      setMounted = _useState[1];

  var container = document.body;
  React.useEffect(function () {
    container = props.container || container;

    if (!props.show) {
      setTimeout(function () {
        setMounted(false);

        if (props.lockScrollOnOpen) {
          document.documentElement.removeAttribute('style');
        }
      }, props.transitionDuration);
    } else {
      setMounted(true); // Lock body scroll when offCanvas is open

      if (props.lockScrollOnOpen) {
        document.documentElement.setAttribute('style', 'overflow: hidden;');
      }
    }
  }, [props.show]);
  return mounted ? /*#__PURE__*/ReactDOM.createPortal(__jsx$1Q(OffCanvasComponent, props), container) : null;
};
OffCanvas.propTypes = {
  closeOnOverlayClick: propTypes.bool,
  container: propTypes.any,
  context: propTypes.oneOf(Object.values(CONTEXT)),
  handleSubmit: propTypes.func,
  headerText: propTypes.string.isRequired,
  lockScrollOnOpen: propTypes.bool,
  overlay: propTypes.bool,
  overlayOpacity: propTypes.number,
  placement: propTypes.oneOf(['top', 'right', 'bottom', 'left']),
  show: propTypes.bool.isRequired,
  submit: propTypes.bool,
  toggleShow: propTypes.func.isRequired,
  transitionDuration: propTypes.number,
  variant: propTypes.string,
  width: propTypes.string
};
OffCanvas.defaultProps = {
  closeOnOverlayClick: true,
  context: 'secondary',
  overlay: true,
  overlayOpacity: 0.3,
  placement: 'right',
  submit: true,
  transitionDuration: 300,
  variant: 'extended',
  width: '30vw'
};

var __jsx$1R = React__default['default'].createElement;
var PageHeading = function PageHeading(_ref) {
  var center = _ref.center,
      children = _ref.children,
      context = _ref.context,
      divider = _ref.divider,
      heading = _ref.heading,
      help = _ref.help,
      helpContent = _ref.helpContent,
      strapline = _ref.strapline;
  return __jsx$1R(StyledPageHeader, {
    center: center,
    divider: divider
  }, __jsx$1R(StyledLeft, null, __jsx$1R(StyledHeading$2, {
    content: heading,
    context: context,
    pageHeading: true
  }), strapline && __jsx$1R("div", null, strapline)), (children || help) && __jsx$1R(StyledRight, null, children || helpContent), divider && __jsx$1R(StyledDivider$1, {
    size: "md"
  }));
};
var StyledPageHeader = styled__default['default'].header.withConfig({
  displayName: "pageHeading__StyledPageHeader",
  componentId: "sl4ilk-0"
})(["align-items:center;display:flex;flex-flow:row wrap;justify-content:space-between;margin-bottom:", ";text-align:", ";"], function (_ref2) {
  var divider = _ref2.divider;
  return !divider && '2rem';
}, function (_ref3) {
  var center = _ref3.center;
  return center && 'center';
});
var StyledLeft = styled__default['default'].span.withConfig({
  displayName: "pageHeading__StyledLeft",
  componentId: "sl4ilk-1"
})(["flex:1;"]);
var StyledRight = styled__default['default'].span.withConfig({
  displayName: "pageHeading__StyledRight",
  componentId: "sl4ilk-2"
})(["display:flex;flex:1;justify-content:flex-end;"]);
var StyledHeading$2 = styled__default['default'](Heading).withConfig({
  displayName: "pageHeading__StyledHeading",
  componentId: "sl4ilk-3"
})(["margin-bottom:", ";"], function (_ref4) {
  var divider = _ref4.divider;
  return !divider ? '0' : '0.5rem';
});
var StyledDivider$1 = styled__default['default'](Divider).withConfig({
  displayName: "pageHeading__StyledDivider",
  componentId: "sl4ilk-4"
})(["width:100%;"]);
PageHeading.propTypes = {
  center: propTypes.bool,
  children: propTypes.element,
  context: propTypes.oneOf(Object.values(CONTEXT)),
  divider: propTypes.bool,
  heading: propTypes.any.isRequired,
  help: propTypes.bool,
  helpContent: propTypes.any,
  strapline: propTypes.string
};
PageHeading.defaultProps = {
  center: false,
  context: 'primary',
  divider: true,
  help: false,
  helpContent: '',
  strapline: ''
};

var __jsx$1S = React__default['default'].createElement;
var PageLoading = function PageLoading(_ref) {
  var children = _ref.children,
      dataCy = _ref.dataCy,
      indicator = _ref.indicator,
      props = _objectWithoutProperties(_ref, ["children", "dataCy", "indicator"]);

  return __jsx$1S(StyledLoading, _extends({
    "data-cy": dataCy
  }, props), indicator || children);
};
var StyledLoading = styled__default['default'].div.withConfig({
  displayName: "pageLoading__StyledLoading",
  componentId: "cscj9c-0"
})(["align-items:center;background-color:", ";color:#fff;display:flex;height:100%;justify-content:center;left:0;opacity:", ";position:", ";right:0;top:0;width:100%;z-index:99;"], function (_ref2) {
  var backgroundColor = _ref2.backgroundColor;
  return backgroundColor;
}, function (_ref3) {
  var opacity = _ref3.opacity;
  return opacity;
}, function (_ref4) {
  var position = _ref4.position;
  return position;
});
PageLoading.propTypes = {
  backgroundColor: propTypes.string,
  children: propTypes.any,
  dataCy: propTypes.string,
  indicator: propTypes.any,
  opacity: propTypes.number,
  position: propTypes.string
};
PageLoading.defaultProps = {
  backgroundColor: '#fff',
  dataCy: 'loadingIndicator',
  opacity: 1,
  position: 'fixed'
};

var __jsx$1T = React__default['default'].createElement;
var SPINNER = Array(12).fill('');
var LdsSpinnerWrapper = styled__default['default'].div.withConfig({
  displayName: "ldsSpinner__LdsSpinnerWrapper",
  componentId: "sc-22hvzl-0"
})(["display:inline-block;position:relative;width:", "px;height:", "px;div{transform-origin:", "px ", "px;animation:lds-spinner 1.2s linear infinite;::after{content:' ';display:block;position:absolute;top:", "px;left:", "px;width:", "px;height:", "px;border-radius:", "%;background:", ";}}", " @keyframes lds-spinner{0%{opacity:1;}100%{opacity:0;}}"], function (_ref) {
  var size = _ref.size;
  return size;
}, function (_ref2) {
  var size = _ref2.size;
  return size;
}, function (_ref3) {
  var size = _ref3.size;
  return size / 2;
}, function (_ref4) {
  var size = _ref4.size;
  return size / 2;
}, function (_ref5) {
  var size = _ref5.size;
  return size / 10 - 5;
}, function (_ref6) {
  var size = _ref6.size;
  return size / 2 - 3;
}, function (_ref7) {
  var size = _ref7.size;
  return size / 10 - 2;
}, function (_ref8) {
  var size = _ref8.size;
  return size / 4 - 2;
}, function (_ref9) {
  var size = _ref9.size;
  return size / 4;
}, function (_ref10) {
  var color = _ref10.color;
  return color;
}, function (_ref11) {
  var spinner = _ref11.spinner;
  var temp = '';
  spinner.forEach(function (s, i) {
    temp += "\n        div:nth-child(".concat(i + 1, ") {\n          transform: rotate(").concat(i * 30, "deg);\n          animation-delay: ").concat(-1.1 + parseFloat(i * 0.1), "s;\n        }\n      ");
  });
  return temp;
});
var LdsSpinner = function LdsSpinner(props) {
  return __jsx$1T(LdsSpinnerWrapper, _extends({}, props, {
    spinner: SPINNER
  }), SPINNER.map(function (s, i) {
    return __jsx$1T("div", {
      key: 'spin' + i
    });
  }));
};
LdsSpinner.propTypes = {
  size: propTypes.number,
  color: propTypes.string
};
LdsSpinner.defaultProps = {
  size: 80,
  color: '#333'
};

var __jsx$1U = React__default['default'].createElement;
var Container$1 = function Container(_ref) {
  var children = _ref.children,
      isFinished = _ref.isFinished,
      animationDuration = _ref.animationDuration;
  return __jsx$1U("div", {
    style: {
      opacity: isFinished ? 0 : 1,
      pointerEvents: 'none',
      transition: "opacity ".concat(animationDuration, "ms linear")
    }
  }, children);
};
Container$1.propTypes = {
  animationDuration: propTypes.number.isRequired,
  children: propTypes.node.isRequired,
  isFinished: propTypes.bool.isRequired
};

var __jsx$1V = React__default['default'].createElement;
var Bar = function Bar(_ref) {
  var animationDuration = _ref.animationDuration,
      context = _ref.context,
      progress = _ref.progress;
  return __jsx$1V(StyledBar, {
    context: context,
    style: {
      marginLeft: "".concat((-1 + progress) * 100, "%"),
      transition: "margin-left ".concat(animationDuration, "ms linear")
    }
  });
};
Bar.propTypes = {
  animationDuration: propTypes.number.isRequired,
  context: propTypes.string,
  progress: propTypes.number.isRequired
};
var StyledBar = styled__default['default'].div.withConfig({
  displayName: "bar__StyledBar",
  componentId: "sc-15l0b92-0"
})(["background-color:", ";height:0.25rem;left:0;position:fixed;top:0;width:100%;z-index:1031;"], function (_ref2) {
  var context = _ref2.context,
      COLOUR = _ref2.theme.COLOUR;
  return COLOUR[context];
});

var __jsx$1W = React__default['default'].createElement;
var PageProgressBar = function PageProgressBar(_ref) {
  var context = _ref.context,
      isAnimating = _ref.isAnimating,
      instanceKey = _ref.instanceKey,
      router = _ref.router;

  var _useState = React.useState(false),
      isRouteChanging = _useState[0],
      setIsRouteChanging = _useState[1];

  var _useState2 = React.useState(null),
      loadingKey = _useState2[0],
      setLoadingKey = _useState2[1];

  var routeChangeStartHandler = function routeChangeStartHandler() {
    setIsRouteChanging(true);
    setLoadingKey(new Date().getTime());
  };

  var routeChangeEndHandler = function routeChangeEndHandler() {
    setIsRouteChanging(false);
  };

  React.useEffect(function () {
    if (router) {
      router.events.on('routeChangeStart', routeChangeStartHandler);
      router.events.on('routeChangeComplete', routeChangeEndHandler);
      router.events.on('routeChangeError', routeChangeEndHandler);
    }
  }, []);
  return __jsx$1W(reactNprogress.NProgress, {
    isAnimating: isRouteChanging || isAnimating,
    key: loadingKey || instanceKey
  }, function (_ref2) {
    var animationDuration = _ref2.animationDuration,
        isFinished = _ref2.isFinished,
        progress = _ref2.progress;
    return __jsx$1W(Container$1, {
      animationDuration: animationDuration,
      isFinished: isFinished
    }, __jsx$1W(Bar, {
      animationDuration: animationDuration,
      context: context,
      progress: progress
    }));
  });
};
PageProgressBar.propTypes = {
  context: propTypes.oneOf(Object.values(CONTEXT)),
  isAnimating: propTypes.bool,
  instanceKey: propTypes.string,
  router: propTypes.object
};
PageProgressBar.defaultProps = {
  context: 'info',
  isAnimating: false,
  instanceKey: null
};

var __jsx$1X = React__default['default'].createElement;
var Pagination = function Pagination(_ref) {
  var breakCount = _ref.breakCount,
      children = _ref.children,
      context = _ref.context,
      currentPage = _ref.currentPage,
      hideWhenOnlyOnePage = _ref.hideWhenOnlyOnePage,
      nextLabel = _ref.nextLabel,
      onPageChange = _ref.onPageChange,
      pageCount = _ref.pageCount,
      prevLabel = _ref.prevLabel,
      showNextAndPrev = _ref.showNextAndPrev,
      size = _ref.size,
      props = _objectWithoutProperties(_ref, ["breakCount", "children", "context", "currentPage", "hideWhenOnlyOnePage", "nextLabel", "onPageChange", "pageCount", "prevLabel", "showNextAndPrev", "size"]);

  if (!pageCount) return null;

  var handleChange = function handleChange(type) {
    if (type === 'prev') onPageChange(currentPage - 1);else if (type === 'next') onPageChange(currentPage + 1);else onPageChange(type);
  };

  var pagesArray = chunk__default['default'](Array(pageCount).fill(0).map(function (p, i) {
    return i + 1;
  }), breakCount);
  var currentChunkIndex = pagesArray.findIndex(function (p) {
    return p.includes(currentPage);
  });
  var prevChunk = pagesArray[currentChunkIndex - 1];
  var currentChunk = pagesArray[currentChunkIndex];
  var nextChunk = pagesArray[currentChunkIndex + 1];
  var showPrevDots = currentChunkIndex > 0;
  var showNextDots = pagesArray.length > 1 && currentChunkIndex + 1 < pagesArray.length;
  var showPrevButton = showNextAndPrev && pageCount > 5 && currentPage > 1;
  var showNextButton = showNextAndPrev && pageCount > 5 && currentPage < pageCount;

  var renderContent = function renderContent() {
    return __jsx$1X(React__default['default'].Fragment, null, showPrevButton && __jsx$1X(PaginationItem, {
      context: context,
      disabled: currentPage === 1,
      label: prevLabel,
      onClick: function onClick() {
        return handleChange('prev');
      },
      size: size
    }), showPrevDots && __jsx$1X(PaginationItem, {
      onClick: function onClick() {
        return handleChange(prevChunk[prevChunk.length - 1]);
      },
      context: context,
      label: "...",
      size: size
    }), currentChunk.map(function (p) {
      return __jsx$1X(PaginationItem, {
        active: p === currentPage,
        context: context,
        key: "".concat("page".concat(p)),
        label: p,
        onClick: function onClick() {
          return handleChange(p);
        },
        size: size
      });
    }), showNextDots && __jsx$1X(PaginationItem, {
      onClick: function onClick() {
        return handleChange(nextChunk[0]);
      },
      context: context,
      label: "...",
      size: size
    }), showNextButton && __jsx$1X(PaginationItem, {
      context: context,
      disabled: currentPage === pageCount,
      label: nextLabel,
      onClick: function onClick() {
        return handleChange('next');
      },
      size: size
    }));
  };

  if (hideWhenOnlyOnePage && pageCount < 2) {
    return null;
  }

  return __jsx$1X(StyledPagination, _extends({
    "aria-label": "Pagination"
  }, props), children || renderContent());
};
var StyledPagination = styled__default['default'].ul.withConfig({
  displayName: "pagination__StyledPagination",
  componentId: "cikqta-0"
})(["padding-left:0;list-style:none;width:fit-content;margin:0 auto;"]);
Pagination.propTypes = PaginationPropTypes;
Pagination.defaultProps = PaginationDefaultProps;

var __jsx$1Y = React__default['default'].createElement;
var PaginationItem = function PaginationItem(_ref) {
  var active = _ref.active,
      context = _ref.context,
      disabled = _ref.disabled,
      label = _ref.label,
      onClick = _ref.onClick,
      size = _ref.size,
      props = _objectWithoutProperties(_ref, ["active", "context", "disabled", "label", "onClick", "size"]);

  return __jsx$1Y(StyledLi$1, null, __jsx$1Y(StyledButton$6, _extends({
    active: active,
    context: context,
    onClick: onClick,
    disabled: disabled,
    size: size
  }, props), label));
};
var StyledLi$1 = styled__default['default'].li.withConfig({
  displayName: "paginationItem__StyledLi",
  componentId: "sc-1b3o3tm-0"
})(["display:inline;&:first-child button{margin-left:0;border-top-left-radius:0.25rem;border-bottom-left-radius:0.25rem;}&:last-child button{border-top-right-radius:0.25rem;border-bottom-right-radius:0.25rem;}"]);
var StyledButton$6 = styled__default['default'](Button).withConfig({
  displayName: "paginationItem__StyledButton",
  componentId: "sc-1b3o3tm-1"
})(["position:relative;cursor:", ";", " padding:0.5rem 0.75rem;margin-left:-1px;line-height:1.25;color:", ";background-color:", ";border:1px solid ", ";", " border-radius:0;&:hover{background-color:", ";color:", ";border:1px solid ", ";}"], function (_ref2) {
  var active = _ref2.active;
  return active ? 'unset' : 'pointer';
}, function (_ref3) {
  var active = _ref3.active;
  return active && 'pointer-events: none;';
}, function (_ref4) {
  var active = _ref4.active,
      context = _ref4.context,
      theme = _ref4.theme;
  return active ? theme.COLOUR.white : theme.COLOUR[context];
}, function (_ref5) {
  var theme = _ref5.theme,
      active = _ref5.active,
      context = _ref5.context;
  return active ? theme.COLOUR[context] : theme.COLOUR.white;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.COLOUR.light;
}, function (props) {
  return FONTSIZE(props);
}, function (_ref7) {
  var active = _ref7.active,
      context = _ref7.context,
      theme = _ref7.theme;
  return active ? theme.COLOUR[context] : theme.COLOUR.light;
}, function (_ref8) {
  var active = _ref8.active,
      theme = _ref8.theme,
      context = _ref8.context;
  return active ? theme.COLOUR.white : theme.COLOUR[context];
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.COLOUR.light;
});
PaginationItem.propTypes = {
  context: propTypes.string,
  disabled: propTypes.bool,
  label: propTypes.any,
  onClick: propTypes.func,
  size: propTypes.string
};
PaginationItem.defaultProps = {
  context: 'secondary',
  size: 'md'
};

var __jsx$1Z = React__default['default'].createElement;
var Rating = function Rating(_ref) {
  var className = _ref.className,
      context = _ref.context,
      value = _ref.value,
      size = _ref.size;
  var rating = [];

  for (var i = 0; i < size; i++) {
    rating.push(__jsx$1Z(StyledRating, {
      active: i + 1 <= value,
      className: className,
      context: context,
      key: i
    }));
  }

  return rating;
};
var StyledRating = styled__default['default'].div.withConfig({
  displayName: "rating__StyledRating",
  componentId: "sc-1eott8c-0"
})(["", " border-radius:0.25rem;display:inline-block;height:15px;margin-right:0.25rem;width:15px;", ""], function (props) {
  return BACKGROUND(props);
}, function (_ref2) {
  var active = _ref2.active;
  return !active && 'opacity: 0.5;';
});
Rating.propTypes = {
  className: propTypes.string,
  context: propTypes.string,
  value: propTypes.number.isRequired,
  size: propTypes.number
};
Rating.defaultProps = {
  context: 'primary',
  size: 5
};

var __jsx$1_ = React__default['default'].createElement;
var Section = function Section(_ref) {
  var children = _ref.children,
      className = _ref.className,
      heading = _ref.heading,
      row = _ref.row,
      style = _ref.style;
  return __jsx$1_(StyleSection, null, __jsx$1_(Container, null, heading && __jsx$1_(Heading, {
    className: "text-center",
    content: heading,
    context: "primary",
    tag: "h2"
  }), row ? __jsx$1_(Row, null, children) : children));
};
var StyleSection = styled__default['default'].section.withConfig({
  displayName: "section__StyleSection",
  componentId: "sggygo-0"
})(["border-top:4px solid #ecf0f3;padding:3rem 0;"]);
Section.propTypes = {
  children: propTypes.node,
  className: propTypes.any,
  heading: propTypes.string,
  row: propTypes.bool,
  style: propTypes.any
};
Section.defaultProps = {
  children: '',
  row: true
};

var __jsx$1$ = React__default['default'].createElement;
var Sidebar = function Sidebar(_ref) {
  var brand = _ref.brand,
      data = _ref.data;

  var link = function link(icon, name, to) {
    var iconArray = Array.isArray(icon);
    return __jsx$1$(Link, {
      to: to,
      passHref: true
    }, __jsx$1$(StyledLink$7, null, icon && __jsx$1$(Icon, {
      icon: icon ? iconArray ? icon[1] : icon : null,
      prefix: icon && iconArray && icon[0]
    }), name));
  };

  return __jsx$1$(StyledAside, null, __jsx$1$(StyledBrand$1, null, __jsx$1$(Image$1, {
    alt: "Logo",
    src: brand
  })), __jsx$1$(List, {
    group: true
  }, data.map(function (_ref2, index) {
    var Component = _ref2.Component,
        divider = _ref2.divider,
        icon = _ref2.icon,
        name = _ref2.name,
        to = _ref2.to;
    return __jsx$1$(StyledLi$2, {
      key: index
    }, divider ? __jsx$1$(StyledDivider$2, {
      size: "sm"
    }) : Component ? __jsx$1$(Component, null) : to ? link(icon, name, to) : name);
  })));
};
var StyledAside = styled__default['default'].aside.withConfig({
  displayName: "sidebar__StyledAside",
  componentId: "sc-65qjgl-0"
})(["background-color:", ";border-right:1px solid ", ";box-shadow:0 0 4rem -1rem rgba(0,0,0,0.75);height:100vh;left:0;overflow:hidden;padding:1rem 0;position:fixed;top:0;width:16.66667%;"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.SIDEBAR.background;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.SIDEBAR.highlight;
});
var StyledBrand$1 = styled__default['default'].div.withConfig({
  displayName: "sidebar__StyledBrand",
  componentId: "sc-65qjgl-1"
})(["display:block;padding:0 3rem;line-height:2;"]);
var StyledDivider$2 = styled__default['default'](Divider).withConfig({
  displayName: "sidebar__StyledDivider",
  componentId: "sc-65qjgl-2"
})(["border-top-width:1px;opacity:0.2;"]);
var StyledLi$2 = styled__default['default'](ListItem).withConfig({
  displayName: "sidebar__StyledLi",
  componentId: "sc-65qjgl-3"
})(["cursor:pointer;padding:0;svg{margin-right:0.5rem;}&:hover{", "}"], function (_ref5) {
  var theme = _ref5.theme;
  return styled.css(["background-color:", ";border-right:2px solid ", ";a{color:", ";}"], theme.SIDEBAR.linkHover, theme.SIDEBAR.highlight, theme.SIDEBAR.highlight);
});
var StyledLink$7 = styled__default['default'].span.withConfig({
  displayName: "sidebar__StyledLink",
  componentId: "sc-65qjgl-4"
})(["color:", ";display:block;padding:1rem 1.5rem;"], function (_ref6) {
  var theme = _ref6.theme;
  return theme.SIDEBAR.linkColour;
});
Sidebar.propTypes = {
  brand: propTypes.string,
  data: propTypes.array.isRequired
};

/**
 * Simple Time
 */
var SimpleTime = function SimpleTime(props) {
  var _useTimer = useTimer(props),
      _useTimer$time = _useTimer.time,
      seconds = _useTimer$time.seconds,
      minutes = _useTimer$time.minutes,
      hours = _useTimer$time.hours,
      days = _useTimer$time.days;

  return "".concat(days, ":").concat(hours, ":").concat(minutes, ":").concat(seconds);
};
SimpleTime.propTypes = {
  autoStart: propTypes.bool,
  startTime: propTypes.oneOfType([propTypes.number, propTypes.string]),
  endTime: propTypes.oneOfType([propTypes.number, propTypes.string])
};

var __jsx$20 = React__default['default'].createElement;
var Stepper = function Stepper(_ref) {
  var className = _ref.className,
      items = _ref.items,
      summary = _ref.summary;
  return __jsx$20(StyledStepper, null, __jsx$20("ul", null, items.map(function (item) {
    return item.active !== false && __jsx$20(StepperItem, {
      item: item,
      key: item.id
    });
  })), summary && __jsx$20(StepperSummary, {
    summary: summary
  }));
};
var StyledStepper = styled__default['default'].div.withConfig({
  displayName: "stepper__StyledStepper",
  componentId: "sc-6whc8t-0"
})(["display:inline-block;> ul{list-style:none;margin:0 0.5rem 1rem;padding:0;}"]);
Stepper.propTypes = {
  className: propTypes.string,
  items: propTypes.oneOfType([propTypes.array, propTypes.func]).isRequired,
  summary: propTypes.oneOfType([propTypes.array, propTypes.func])
};

var __jsx$21 = React__default['default'].createElement;
var StepperItem = function StepperItem(_ref) {
  var item = _ref.item;

  var renderContent = function renderContent(content) {
    return content.map(function (_ref2) {
      var id = _ref2.id,
          active = _ref2.active,
          data = _ref2.data;
      return active && __jsx$21("li", {
        key: id
      }, typeof data === 'function' ? data() : data);
    });
  };

  var renderActions = function renderActions(actions) {
    return actions.map(function (_ref3) {
      var id = _ref3.id,
          active = _ref3.active,
          content = _ref3.content,
          context = _ref3.context,
          data = _ref3.data,
          handleClick = _ref3.handleClick,
          to = _ref3.to,
          type = _ref3.type;
      return active && __jsx$21("li", {
        key: id
      }, type === 'button' && __jsx$21(Button, _extends({
        onClick: handleClick,
        content: content,
        context: context,
        size: "xs"
      }, data)));
    });
  };

  return __jsx$21(StyledStepperItem, null, __jsx$21(StyledIconContainer, {
    active: item.date
  }, item.date && __jsx$21(Icon, {
    "aria-hidden": "true",
    color: STEPPER.colourCheckmark,
    fixedWidth: false,
    icon: "check",
    prefix: "fas"
  })), __jsx$21(StyledLabel$4, {
    active: item.date
  }, item.label), (item.date || item.info) && __jsx$21(StyledInfo, null, item.date || item.info), item.content && item.content.length > 0 && __jsx$21(StyledContent$3, null, renderContent(item.content)), item.actions && item.actions.length > 0 && __jsx$21(StyledContent$3, null, renderActions(item.actions)), item.label !== 'Closed' && __jsx$21(Divider, {
    size: "sm"
  }));
};
var StyledStepperItem = styled__default['default'].li.withConfig({
  displayName: "stepperItem__StyledStepperItem",
  componentId: "sc-15nfxgj-0"
})(["border-left:3px solid ", ";padding:0 1rem 1px;position:relative;&:last-child{border:0;margin-left:3px;}"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.STEPPER.colour;
});
var StyledIconContainer = styled__default['default'].div.withConfig({
  displayName: "stepperItem__StyledIconContainer",
  componentId: "sc-15nfxgj-1"
})(["align-items:center;background:", ";border:3px solid ", ";border-radius:50%;display:flex;height:1.5rem;justify-content:center;left:-13px;position:absolute;top:0;width:1.5rem;"], function (_ref5) {
  var active = _ref5.active,
      theme = _ref5.theme;
  return active ? theme.STEPPER.colour : '#fff';
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.STEPPER.colour;
});
var StyledContent$3 = styled__default['default'].ul.withConfig({
  displayName: "stepperItem__StyledContent",
  componentId: "sc-15nfxgj-2"
})(["font-size:0.8rem;list-style:none;margin:0.5rem;padding:0;li{margin-bottom:5px;}"]);
var StyledLabel$4 = styled__default['default'].span.withConfig({
  displayName: "stepperItem__StyledLabel",
  componentId: "sc-15nfxgj-3"
})(["color:", ";margin:0 0.5rem;"], function (_ref7) {
  var active = _ref7.active,
      theme = _ref7.theme;
  return active ? theme.COLOUR.black : theme.COLOUR.dark;
});
var StyledInfo = styled__default['default'].span.withConfig({
  displayName: "stepperItem__StyledInfo",
  componentId: "sc-15nfxgj-4"
})(["font-size:0.75rem;"]);
StyledStepperItem.propTypes = {
  item: propTypes.object
};

var __jsx$22 = React__default['default'].createElement;
var StepperSummary = function StepperSummary(_ref) {
  var className = _ref.className,
      summary = _ref.summary;

  var renderItems = function renderItems(summary) {
    return summary.map(function (_ref2, i) {
      var label = _ref2.label,
          value = _ref2.value;
      return __jsx$22("li", {
        key: i
      }, __jsx$22(StyledLabel$5, null, label, " "), __jsx$22(StyledValue, null, value));
    });
  };

  return __jsx$22(StyledStepperSummary, null, __jsx$22("ul", null, renderItems(summary)));
};
var StyledStepperSummary = styled__default['default'].div.withConfig({
  displayName: "summary__StyledStepperSummary",
  componentId: "sc-1nk57mg-0"
})(["display:inline-block;> ul{list-style:none;margin:0;padding:0;}"]);
var StyledLabel$5 = styled__default['default'].span.withConfig({
  displayName: "summary__StyledLabel",
  componentId: "sc-1nk57mg-1"
})(["font-size:0.85rem;"]);
var StyledValue = styled__default['default'].span.withConfig({
  displayName: "summary__StyledValue",
  componentId: "sc-1nk57mg-2"
})(["font-size:0.85rem;color:", ";"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.COLOUR.black;
});
StepperSummary.propTypes = {
  className: propTypes.string,
  summary: propTypes.array.isRequired
};

var __jsx$23 = React__default['default'].createElement;
var TableData = function TableData(props) {
  return __jsx$23(StyledTd, props);
};
TableData.propTypes = {};
var StyledTd = styled__default['default'].td.withConfig({
  displayName: "data__StyledTd",
  componentId: "cgms5o-0"
})(["border-top:1px solid ", ";padding:", ";text-align:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.COLOUR.dark;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.TABLE.padding;
}, function (_ref3) {
  var align = _ref3.align;
  return align && 'center';
});

var __jsx$24 = React__default['default'].createElement;
var TableHead = function TableHead(props) {
  return __jsx$24(StyledTh, props);
};
TableHead.propTypes = {};
var StyledTh = styled__default['default'].th.withConfig({
  displayName: "head__StyledTh",
  componentId: "sc-1utvknw-0"
})(["border-bottom:2px solid ", ";border-top:1px solid ", ";padding:", ";text-align:", ";", ""], function (_ref) {
  var theme = _ref.theme;
  return theme.COLOUR.dark;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.COLOUR.dark;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.TABLE.padding;
}, function (_ref4) {
  var align = _ref4.align;
  return align ? 'center' : 'left';
}, function (_ref5) {
  var sortable = _ref5.sortable;
  return sortable && 'cursor: pointer';
});

var __jsx$25 = React__default['default'].createElement;
var TableLoading = function TableLoading(_ref) {
  var colsLength = _ref.colsLength,
      show = _ref.show;

  if (!show) {
    return null;
  }

  return __jsx$25(PageLoading, {
    backgroundColor: "#fff",
    indicator: __jsx$25(LdsSpinner, {
      color: "#000",
      size: 50
    }),
    opacity: 0.7,
    position: "absolute"
  });
};
TableLoading.propTypes = {
  colsLength: propTypes.number,
  show: propTypes.bool
};

var __jsx$26 = React__default['default'].createElement;
var TableRow = function TableRow(props) {
  return __jsx$26(StyledTr, props);
};
TableRow.propTypes = {};
var StyledTr = styled__default['default'].tr.withConfig({
  displayName: "row__StyledTr",
  componentId: "tjsorm-0"
})(["cursor:", ";", " ", " ", ""], function (_ref) {
  var pointer = _ref.pointer;
  return pointer ? 'pointer' : 'initial';
}, function (_ref2) {
  var context = _ref2.context,
      striped = _ref2.striped,
      theme = _ref2.theme;
  return !context && striped && styled.css([":nth-child(odd){background-color:", ";}"], theme.COLOUR.light);
}, function (props) {
  return props.context && styled.css(["", " color:white;"], BACKGROUND(props));
}, function (_ref3) {
  var hover = _ref3.hover;
  return hover && styled.css([":hover{background-color:#eee;}"]);
});

var __jsx$27 = React__default['default'].createElement;

function ownKeys$d(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$d(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$d(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$d(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var Table = function Table(_ref) {
  var align = _ref.align,
      caption = _ref.caption,
      className = _ref.className,
      columns = _ref.columns,
      fullHeight = _ref.fullHeight,
      hover = _ref.hover,
      loading = _ref.loading,
      noData = _ref.noData,
      pagination = _ref.pagination,
      _ref$paginationProps = _ref.paginationProps,
      _ref$paginationProps$ = _ref$paginationProps.changeUrlOnChange,
      changeUrlOnChange = _ref$paginationProps$ === void 0 ? false : _ref$paginationProps$,
      _ref$paginationProps$2 = _ref$paginationProps.initialPage,
      initialPage = _ref$paginationProps$2 === void 0 ? 1 : _ref$paginationProps$2,
      _ref$paginationProps$3 = _ref$paginationProps.perPage,
      perPage = _ref$paginationProps$3 === void 0 ? 10 : _ref$paginationProps$3,
      otherPaginationProps = _objectWithoutProperties(_ref$paginationProps, ["changeUrlOnChange", "initialPage", "perPage"]),
      responsive = _ref.responsive,
      rowClick = _ref.rowClick,
      rows = _ref.rows,
      sort = _ref.sort,
      setSort = _ref.setSort,
      striped = _ref.striped;

  var _useState = React.useState(initialPage),
      currentPage = _useState[0],
      setCurrentPage = _useState[1];

  var tableSpan = columns.filter(function (c) {
    return !c.hidden;
  }).length;

  var handleClick = function handleClick(e) {
    e.preventDefault();
    var row = e.currentTarget.getAttribute('data-item');
    rowClick(JSON.parse(row));
  };

  var handlePagination = function handlePagination(page) {
    if (changeUrlOnChange) historyPush("?page=".concat(page));
    setCurrentPage(page);
  };

  var renderColumns = function renderColumns() {
    return columns.map(function (_ref2, index) {
      var hidden = _ref2.hidden,
          sortable = _ref2.sortable,
          _ref2$sortName = _ref2.sortName,
          sortName = _ref2$sortName === void 0 ? '' : _ref2$sortName,
          text = _ref2.text;

      if (hidden) {
        return;
      }

      var hasSort = sort.item === sortName;

      var handleSort = function handleSort() {
        if (sortable) {
          if (hasSort && sort.order === 'desc') {
            setSort({
              item: '',
              order: ''
            });
          } else {
            setSort({
              item: sortName,
              order: hasSort ? 'desc' : 'asc'
            });
          }
        }
      };

      return __jsx$27(TableHead, {
        align: align,
        key: index,
        onClick: handleSort,
        sortable: sortable
      }, text, sortable && hasSort && __jsx$27(Icon, {
        icon: sort.order === 'asc' ? 'caret-down' : 'caret-up',
        prefix: "fas"
      }));
    });
  };

  var renderRows = function renderRows() {
    var clickable = typeof rowClick === 'function';
    var temp = pagination ? rows.slice((currentPage - 1) * perPage, currentPage * perPage) : rows;
    return temp.map(function (row, index) {
      var context = row.context;
      delete row.context;

      if (row.hidden) {
        return null;
      } else {
        delete row.hidden;
      }

      return __jsx$27(TableRow, {
        context: context,
        key: index,
        "data-item": JSON.stringify(row),
        hover: hover,
        onClick: clickable ? handleClick : null,
        pointer: clickable,
        striped: striped
      }, Object.entries(row).map(function (_ref3, index) {
        var _ref4 = _slicedToArray(_ref3, 2),
            key = _ref4[0],
            value = _ref4[1];

        var length = columns.length;
        var column = columns[index];

        if (length && column.hidden) {
          return;
        }

        var renderValue = typeof value === 'function' ? value() : value;
        return __jsx$27(TableData, {
          align: align,
          key: index
        }, length > 0 && column.formatter ? column.formatter({
          row: row
        }, column.formatterData) : value && value.__html ? __jsx$27("span", {
          dangerouslySetInnerHTML: value
        }) : renderValue);
      }));
    });
  };

  var renderTable = function renderTable() {
    return __jsx$27(StyledTable, {
      className: className
    }, caption && __jsx$27(StyledCaption$1, null, caption), __jsx$27("thead", null, __jsx$27("tr", null, columns && renderColumns())), __jsx$27("tbody", null, noData && !loading && !rows.length ? __jsx$27(TableRow, null, __jsx$27(TableData, {
      align: "center",
      colSpan: tableSpan
    }, "No data available")) : renderRows()));
  };

  return __jsx$27(React__default['default'].Fragment, null, __jsx$27(StyledWrapper$1, {
    fullHeight: fullHeight,
    isLoading: loading
  }, __jsx$27(TableLoading, {
    colsLength: tableSpan,
    show: loading
  }), responsive ? __jsx$27(StyledResponsive, null, renderTable()) : renderTable()), pagination && rows.length > 0 && __jsx$27(Pagination, _extends({
    currentPage: currentPage,
    onPageChange: handlePagination,
    pageCount: Math.ceil(rows.length / perPage),
    showNextAndPrev: true,
    size: "sm",
    style: {
      marginTop: '10px'
    }
  }, otherPaginationProps)));
};
var StyledWrapper$1 = styled__default['default'].div.withConfig({
  displayName: "table__StyledWrapper",
  componentId: "sc-203uoz-0"
})(["width:100%;", " position:relative;", ""], function (_ref5) {
  var fullHeight = _ref5.fullHeight,
      isLoading = _ref5.isLoading;
  return (fullHeight || isLoading !== undefined) && 'height: 100%;';
}, function (_ref6) {
  var isLoading = _ref6.isLoading;
  return isLoading && styled.css(["position:relative;"]);
});
var StyledResponsive = styled__default['default'].div.withConfig({
  displayName: "table__StyledResponsive",
  componentId: "sc-203uoz-1"
})(["background-color:#fff;display:block;width:100%;overflow-x:auto;"]);
var StyledTable = styled__default['default'].table.withConfig({
  displayName: "table__StyledTable",
  componentId: "sc-203uoz-2"
})(["background-color:", ";border-collapse:collapse;font-size:", ";width:100%;"], function (_ref7) {
  var theme = _ref7.theme;
  return theme.COLOUR.transparent;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.TABLE.fontSize;
});
var StyledCaption$1 = styled__default['default'].caption.withConfig({
  displayName: "table__StyledCaption",
  componentId: "sc-203uoz-3"
})(["caption-side:bottom;color:#6c757d;padding:", " 0;text-align:left;"], function (_ref9) {
  var theme = _ref9.theme;
  return theme.TABLE.padding;
});
Table.propTypes = {
  align: propTypes.bool,
  caption: propTypes.string,
  className: propTypes.string,
  columns: propTypes.array,
  fullHeight: propTypes.bool,
  hover: propTypes.bool,
  loading: propTypes.bool,
  pagination: propTypes.bool,
  paginationProps: propTypes.shape(_objectSpread$d({
    changeUrlOnChange: propTypes.bool,
    initialPage: propTypes.number,
    perPage: propTypes.number
  }, PaginationPropTypes)),
  responsive: propTypes.bool,
  rowClick: propTypes.func,
  rows: propTypes.array.isRequired,
  sort: propTypes.shape({
    item: propTypes.string,
    order: propTypes.string
  }),
  striped: propTypes.bool
};
Table.defaultProps = {
  align: false,
  columns: [],
  className: 'Table',
  fullHeight: false,
  hover: true,
  loading: undefined,
  noData: true,
  pagination: false,
  paginationProps: {},
  responsive: true,
  sort: {
    item: '',
    order: ''
  },
  striped: true
};

var __jsx$28 = React__default['default'].createElement;
var TableActions = function TableActions(_ref, data) {
  var row = _ref.row;

  var handleClick = function handleClick(path) {
    return function (e) {
      e.preventDefault();
      e.stopPropagation();
      Router__default['default'].push(path);
    };
  };

  return __jsx$28(React__default['default'].Fragment, null, __jsx$28(ButtonToolbar, {
    align: "flex-start",
    style: {
      zIndex: '100000000'
    }
  }, data.map(function (_ref2, index) {
    var content = _ref2.content,
        context = _ref2.context,
        disabled = _ref2.disabled,
        icon = _ref2.icon,
        numberOverlay = _ref2.numberOverlay,
        onClick = _ref2.onClick,
        to = _ref2.to,
        tooltip = _ref2.tooltip;
    var iconArray = Array.isArray(icon);
    return __jsx$28(Tooltip, {
      content: tooltip,
      key: index
    }, __jsx$28(StyledButton$7, {
      forwardedAs: "a",
      disabled: disabled,
      context: context,
      onClick: onClick ? function (e) {
        return onClick(e, row);
      } : handleClick("".concat(to, "?id=").concat(row.id)),
      size: "sm"
    }, __jsx$28(Icon, {
      icon: icon ? iconArray ? icon[1] : icon : null,
      prefix: icon && iconArray && icon[0],
      style: {
        pointerEvents: 'none'
      }
    }), row[numberOverlay] > 0 && __jsx$28(StyledNumberOverlay, null, row[numberOverlay])));
  })));
};
var StyledButton$7 = styled__default['default'](Button).withConfig({
  displayName: "actions__StyledButton",
  componentId: "sc-1rwzgo8-0"
})(["font-size:16px;padding:0.3rem;position:relative;"]);
var StyledNumberOverlay = styled__default['default'].span.withConfig({
  displayName: "actions__StyledNumberOverlay",
  componentId: "sc-1rwzgo8-1"
})(["font-size:0.7em;display:block;position:absolute;top:-0.75em;right:-0.75em;width:2em;height:2em;line-height:2em;border-radius:50%;text-align:center;color:#fff;background:rgba(236,86,86,0.88);"]);
TableActions.propTypes = {
  row: propTypes.object.isRequired
};

var __jsx$29 = React__default['default'].createElement;
var TableLink = function TableLink(path, key, value, dynamicUrl) {
  return function (_ref) {
    var row = _ref.row;
    var useLink = false;
    useLink = row[dynamicUrl] || path;

    var getPath = function getPath() {
      var url = row[dynamicUrl] || path;
      return "".concat(url, "?id=").concat(row[key]);
    };

    var handleClick = function handleClick(e) {
      e.preventDefault();
      e.stopPropagation();
      Router__default['default'].push(getPath());
    };

    var item = row[value];
    return useLink ? __jsx$29(React__default['default'].Fragment, null, item === '-' && '-', item !== '-' && __jsx$29(StyleLink, {
      border: false,
      href: getPath(),
      onClick: handleClick
    }, item)) : item;
  };
};
var StyleLink = styled__default['default'](StyledLink).withConfig({
  displayName: "link__StyleLink",
  componentId: "mew5ph-0"
})(["&:hover{background:#ddd;margin:-8px;padding:8px;}"]);
TableLink.propTypes = {
  row: propTypes.object.isRequired
};

var __jsx$2a = React__default['default'].createElement;
var Tab = function Tab(_ref) {
  var activeTab = _ref.activeTab,
      childClick = _ref.childClick,
      context = _ref.context,
      disabled = _ref.disabled,
      label = _ref.label,
      onClick = _ref.onClick;

  var handleClick = function handleClick() {
    onClick(label);
    childClick && childClick();
  };

  return __jsx$2a(StyledTab, {
    active: activeTab === label,
    context: context,
    disabled: disabled,
    onClick: handleClick
  }, label);
};
var StyledTab = styled__default['default'].li.withConfig({
  displayName: "tab__StyledTab",
  componentId: "sc-1eaeu70-0"
})(["", " ", " ", " ", " &:hover{", " ", "}&:last-of-type{border-top-right-radius:", ";border-top-left-radius:inherit;border-right:1px solid ", ";}&:first-child{border-top-left-radius:", ";border-top-right-radius:inherit;border-right:0px;}display:inline-block;list-style:none;margin-bottom:-1px;padding:.5rem .75rem;"], function (_ref2) {
  var context = _ref2.context,
      theme = _ref2.theme;
  return styled.css(["background-color:", ";border-left:1px solid ", ";border-bottom:1px solid ", ";border-top:1px solid ", ";"], theme.TABS.colour, theme.TABS.borderColour, context ? theme.COLOUR[context] : theme.TABS.borderColour, theme.TABS.borderColour);
}, function (_ref3) {
  var active = _ref3.active,
      context = _ref3.context,
      theme = _ref3.theme;
  return active && styled.css(["background-color:", ";border-bottom:1px solid ", ";"], theme.TABS.activeColour, theme.COLOUR.primary);
}, function (_ref4) {
  var active = _ref4.active,
      theme = _ref4.theme;
  return !active && styled.css(["cursor:pointer;"]);
}, function (_ref5) {
  var disabled = _ref5.disabled,
      theme = _ref5.theme;
  return disabled && styled.css(["background-color:", ";cursor:no-drop;"], theme.TABS.disabledColour);
}, function (_ref6) {
  var active = _ref6.active,
      theme = _ref6.theme;
  return !active && styled.css(["background-color:", ";"], theme.TABS.hoverColour);
}, function (_ref7) {
  var disabled = _ref7.disabled,
      theme = _ref7.theme;
  return disabled && styled.css(["background-color:", ";"], theme.TABS.disabledColour);
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.TABS.borderRadius;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.TABS.borderColour;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.TABS.borderRadius;
});
Tab.propTypes = {
  activeTab: propTypes.string.isRequired,
  childClick: propTypes.func,
  context: propTypes.oneOfType([propTypes.bool, propTypes.string]),
  disabled: propTypes.bool,
  label: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired
};
Tab.defaultProps = {
  context: false
};

var __jsx$2b = React__default['default'].createElement;
var Tabs = function Tabs(_ref) {
  var children = _ref.children,
      className = _ref.className,
      handleChange = _ref.handleChange;
  var router = Router.useRouter();

  if (!Array.isArray(children)) {
    children = React__default['default'].Children.toArray(children);
  }

  var active = children[0].props.label;
  children.map(function (child) {
    if (child.props.active === true) {
      active = child.props.label;
    }
  });

  var _useState = React.useState(active),
      activeTab = _useState[0],
      setActiveTab = _useState[1];

  var onClickTabItem = function onClickTabItem(tab) {
    setActiveTab(tab);
    handleChange && handleTabChange(tab);
  };

  var handleTabChange = function handleTabChange(tab) {
    // Debug
    // console.log('Router change ', router)
    // console.log('Router change2 ', router, router.query.id, router.query)
    var href = "".concat(router.pathname, "?id=").concat(router.query.id, "&tab=").concat(tab);
    Router__default['default'].push(href, href, {
      shallow: true
    });
  };

  return __jsx$2b(React__default['default'].Fragment, null, __jsx$2b(StyledTabs, {
    className: className
  }, children.map(function (_ref2) {
    var props = _ref2.props;
    return __jsx$2b(Tab, _extends({
      activeTab: activeTab,
      key: props.label,
      onClick: props.disabled ? function () {} : onClickTabItem
    }, props));
  })), children.map(function (child) {
    if (child.props.label !== activeTab) {
      return undefined;
    }

    return child.props.children;
  }));
};
var StyledTabs = styled__default['default'].ol.withConfig({
  displayName: "tabs__StyledTabs",
  componentId: "mlaa2h-0"
})(["align-items:flex-end;border-bottom:1px solid ", ";display:flex;margin:0 0 1rem 0;padding-left:0;"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.TABS.borderColour;
});
Tabs.propTypes = {
  children: propTypes.oneOfType([propTypes.array, propTypes.object]).isRequired,
  className: propTypes.string,
  handleChange: propTypes.bool
};
Tabs.defaultProps = {
  handleChange: true
};

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

var __jsx$2c = React__default['default'].createElement;
var Design = function Design(_ref) {
  var handleReset = _ref.handleReset,
      handleScreenshot = _ref.handleScreenshot,
      refProp = _ref.refProp,
      screenshot = _ref.screenshot,
      videoConstraints = _ref.videoConstraints;
  return __jsx$2c(React__default['default'].Fragment, null, __jsx$2c("div", {
    className: "text-center",
    style: {
      background: '#000',
      border: '1px solid #C8D1D8',
      borderRadius: '.5rem .5rem 0 0',
      marginBottom: '-8px'
    }
  }, !screenshot && __jsx$2c(Webcam, {
    ref: refProp,
    screenshotFormat: "image/jpeg",
    videoConstraints: videoConstraints
  }), screenshot && __jsx$2c("img", {
    alt: "user photo",
    src: screenshot,
    style: {
      borderRadius: '.5rem .5rem 0 0'
    }
  })), __jsx$2c("div", {
    style: {
      background: '#C8D1D8',
      borderRadius: '0 0 .5rem .5rem',
      height: '50px',
      position: 'relative'
    }
  }, __jsx$2c("div", {
    onClick: screenshot ? handleReset : handleScreenshot,
    style: {
      background: "".concat(!screenshot ? '#04d4cd' : '#e60811'),
      border: '2px solid #FFF',
      borderRadius: '50%',
      bottom: '50%',
      cursor: 'pointer',
      height: '50px',
      left: '50%',
      lineHeight: '50px',
      position: 'absolute',
      textAlign: 'center',
      width: '50px'
    }
  }, __jsx$2c(Icon, {
    color: "white",
    icon: "camera",
    style: {
      fontSize: '1.5rem'
    }
  }))));
};

var _class, _temp;
var __jsx$2d = React__default['default'].createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var Webcam = styled.withTheme((_temp = _class = /*#__PURE__*/function (_Component) {
  _inherits(Webcam, _Component);

  var _super = _createSuper(Webcam);

  function Webcam() {
    var _this;

    _classCallCheck(this, Webcam);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "hasGetUserMedia", function () {
      return !!(navigator.mediaDevices.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
    });

    _defineProperty(_assertThisInitialized(_this), "handleUserMedia", function (err, stream) {
      var _this$props = _this.props,
          onUserMediaError = _this$props.onUserMediaError,
          onUserMedia = _this$props.onUserMedia;

      if (err) {
        _this.setState({
          hasUserMedia: false
        });

        onUserMediaError(err);
        return;
      }

      _this.stream = stream;

      try {
        _this.video.srcObject = stream;

        _this.setState({
          hasUserMedia: true
        });
      } catch (error) {
        _this.setState({
          hasUserMedia: true,
          src: window.URL.createObjectURL(stream)
        });
      }

      onUserMedia();
    });

    _this.state = {
      hasUserMedia: false,
      src: ''
    };
    return _this;
  }

  _createClass(Webcam, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.hasGetUserMedia()) return;
      var hasUserMedia = this.state.hasUserMedia;
      Webcam.mountedInstances.push(this);

      if (!hasUserMedia && !Webcam.userMediaRequested) {
        this.requestUserMedia();
      }
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate(nextProps) {
      var _this$props2 = this.props,
          audioConstraints = _this$props2.audioConstraints,
          videoConstraints = _this$props2.videoConstraints;

      if (JSON.stringify(nextProps.audioConstraints) !== JSON.stringify(audioConstraints) || JSON.stringify(nextProps.videoConstraints) !== JSON.stringify(videoConstraints)) {
        this.requestUserMedia();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var src = this.state.src;
      var index = Webcam.mountedInstances.indexOf(this);
      Webcam.mountedInstances.splice(index, 1);

      if (Webcam.mountedInstances.length === 0 && this.state.hasUserMedia) {
        if (this.stream.stop) {
          this.stream.stop();
        } else {
          if (this.stream.getVideoTracks) {
            this.stream.getVideoTracks().map(function (track) {
              return track.stop();
            });
          }

          if (this.stream.getAudioTracks) {
            this.stream.getAudioTracks().map(function (track) {
              return track.stop();
            });
          }
        }

        Webcam.userMediaRequested = false;
        window.URL.revokeObjectURL(src);
      }
    }
  }, {
    key: "getScreenshot",
    value: function getScreenshot() {
      var _this$props3 = this.props,
          screenshotFormat = _this$props3.screenshotFormat,
          screenshotQuality = _this$props3.screenshotQuality;
      var hasUserMedia = this.state.hasUserMedia;
      if (!hasUserMedia) return null;
      var canvas = this.getCanvas();
      return canvas && canvas.toDataURL(screenshotFormat, screenshotQuality);
    }
  }, {
    key: "getCanvas",
    value: function getCanvas() {
      var screenshotWidth = this.props.screenshotWidth;
      var hasUserMedia = this.state.hasUserMedia;
      var _this$video = this.video,
          clientWidth = _this$video.clientWidth,
          videoHeight = _this$video.videoHeight,
          videoWidth = _this$video.videoWidth;
      if (!hasUserMedia || !videoHeight) return null;

      if (!this.ctx) {
        var _canvas = document.createElement('canvas');

        var aspectRatio = videoWidth / videoHeight;
        var canvasWidth = screenshotWidth || clientWidth;
        _canvas.width = canvasWidth;
        _canvas.height = canvasWidth / aspectRatio;
        this.canvas = _canvas;
        this.ctx = _canvas.getContext('2d');
      }

      var ctx = this.ctx,
          canvas = this.canvas;
      ctx.drawImage(this.video, 0, 0, canvas.width, canvas.height);
      return canvas;
    }
  }, {
    key: "requestUserMedia",
    value: function requestUserMedia() {
      var _this2 = this;

      var _this$props4 = this.props,
          audio = _this$props4.audio,
          audioConstraints = _this$props4.audioConstraints,
          videoConstraints = _this$props4.videoConstraints;
      navigator.getUserMedia = navigator.mediaDevices.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

      var sourceSelected = function sourceSelected(audioConstraints, videoConstraints) {
        // Request video
        var constraints = {
          video: videoConstraints || true
        }; // Request Audo

        if (audio) {
          constraints.audio = audioConstraints || true;
        }

        navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
          Webcam.mountedInstances.forEach(function () {
            return _this2.handleUserMedia(null, stream);
          });
        })["catch"](function (e) {
          Webcam.mountedInstances.forEach(function () {
            return _this2.handleUserMedia(e);
          });
        });
      };

      if ('mediaDevices' in navigator) {
        sourceSelected(audioConstraints, videoConstraints);
      } else {
        var optionalSource = function optionalSource(id) {
          return {
            optional: [{
              sourceId: id
            }]
          };
        };

        var constraintToSourceId = function constraintToSourceId(constraint) {
          var deviceId = (constraint || {}).deviceId;

          if (typeof deviceId === 'string') {
            return deviceId;
          } else if (Array.isArray(deviceId) && deviceId.length > 0) {
            return deviceId[0];
          } else if (_typeof(deviceId) === 'object' && deviceId.ideal) {
            return deviceId.ideal;
          }

          return null;
        };

        window.MediaStreamTrack.getSources(function (sources) {
          var audioSource = null;
          var videoSource = null;
          sources.forEach(function (source) {
            if (source.kind === 'audio') {
              audioSource = source.id;
            } else if (source.kind === 'video') {
              videoSource = source.id;
            }
          });
          var audioSourceId = constraintToSourceId(audioConstraints);

          if (audioSourceId) {
            audioSource = audioSourceId;
          }

          var videoSourceId = constraintToSourceId(videoConstraints);

          if (videoSourceId) {
            videoSource = videoSourceId;
          }

          sourceSelected(optionalSource(audioSource), optionalSource(videoSource));
        });
      }

      Webcam.userMediaRequested = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props5 = this.props,
          audio = _this$props5.audio,
          className = _this$props5.className,
          height = _this$props5.height,
          style = _this$props5.style,
          width = _this$props5.width;
      var src = this.state.src;
      return __jsx$2d("video", {
        autoPlay: true,
        width: width,
        height: height,
        src: src,
        muted: audio,
        className: className,
        playsInline: true,
        style: style,
        ref: function ref(_ref) {
          _this3.video = _ref;
        }
      });
    }
  }]);

  return Webcam;
}(React.Component), _defineProperty(_class, "propTypes", {
  audio: propTypes.bool,
  onUserMedia: propTypes.func,
  onUserMediaError: propTypes.func,
  height: propTypes.oneOfType([propTypes.number, propTypes.string]),
  width: propTypes.oneOfType([propTypes.number, propTypes.string]),
  screenshotFormat: propTypes.oneOf(['image/webp', 'image/png', 'image/jpeg']),
  style: propTypes.object,
  className: propTypes.string,
  screenshotQuality: propTypes.number,
  screenshotWidth: propTypes.number // audioConstraints: audioConstraintType,
  // videoConstraints: videoConstraintType

}), _defineProperty(_class, "defaultProps", {
  audio: false,
  className: '',
  height: 463.5,
  onUserMedia: function onUserMedia() {},
  onUserMediaError: function onUserMediaError() {},
  screenshotFormat: 'image/webp',
  screenshotQuality: 0.8,
  style: {
    borderRadius: '.5rem .5rem 0 0'
  },
  width: 824
}), _defineProperty(_class, "mountedInstances", []), _defineProperty(_class, "userMediaRequested", false), _temp));
Webcam.Design = Design;
//   PropTypes.string,
//   PropTypes.arrayOf(PropTypes.string),
//   PropTypes.shape({
//     exact: PropTypes.oneOfType([
//       PropTypes.string,
//       PropTypes.arrayOf(PropTypes.string),
//     ]),
//   }),
//   PropTypes.shape({
//     ideal: PropTypes.oneOfType([
//       PropTypes.string,
//       PropTypes.arrayOf(PropTypes.string),
//     ]),
//   }),
// ]);
// const constrainBooleanType = PropTypes.oneOfType([
//   PropTypes.shape({
//     exact: PropTypes.bool,
//   }),
//   PropTypes.shape({
//     ideal: PropTypes.bool,
//   }),
// ]);
// const constrainLongType = PropTypes.oneOfType([
//   PropTypes.number,
//   PropTypes.shape({
//     exact: PropTypes.number,
//     ideal: PropTypes.number,
//     min: PropTypes.number,
//     max: PropTypes.number,
//   }),
// ]);
// const constrainDoubleType = constrainLongType;
// const audioConstraintType = PropTypes.shape({
//   deviceId: constrainStringType,
//   groupId: constrainStringType,
//   autoGainControl: constrainBooleanType,
//   channelCount: constrainLongType,
//   latency: constrainDoubleType,
//   noiseSuppression: constrainBooleanType,
//   sampleRate: constrainLongType,
//   sampleSize: constrainLongType,
//   volume: constrainDoubleType,
// });
// const videoConstraintType = PropTypes.shape({
//   deviceId: constrainStringType,
//   groupId: constrainStringType,
//   aspectRatio: constrainDoubleType,
//   facingMode: constrainStringType,
//   frameRate: constrainDoubleType,
//   height: constrainLongType,
//   width: constrainLongType,
// });

var __jsx$2e = React__default['default'].createElement;
var Bar$1 = function Bar(_ref) {
  var background = _ref.background,
      children = _ref.children,
      flat = _ref.flat,
      minSize = _ref.minSize,
      open = _ref.open,
      placement = _ref.placement,
      variant = _ref.variant,
      width = _ref.width,
      withExposedButton = _ref.withExposedButton;

  var _useState = React.useState(open !== null && open !== void 0 ? open : true),
      IsOpen = _useState[0],
      setIsOpen = _useState[1];

  var toggleOpen = function toggleOpen() {
    setIsOpen(!IsOpen);
  };

  return __jsx$2e(React__default['default'].Fragment, null, __jsx$2e(StyledBarWrapper, {
    background: background,
    flat: flat,
    open: IsOpen,
    placement: placement,
    variant: variant,
    width: width,
    minSize: minSize
  }, __jsx$2e(OpenButton, {
    background: background,
    flat: flat,
    exposed: withExposedButton,
    onClick: toggleOpen,
    open: IsOpen,
    placement: placement
  }, __jsx$2e(Icon, {
    icon: "user",
    size: "1x",
    prefix: "fas"
  })), children), __jsx$2e(StyledOverlay$1, {
    onClick: toggleOpen,
    open: IsOpen,
    placement: placement,
    variant: variant,
    width: width
  }));
};
var OpenButton = styled__default['default'].div.withConfig({
  displayName: "bar__OpenButton",
  componentId: "sc-1az3wwm-0"
})(["border-radius:0.25rem;cursor:pointer;display:none;z-index:1;position:absolute;svg{transition:transform ", " ease;transform:rotate(0deg);position:absolute;top:1rem;right:0.2rem;}", " ", ""], function (_ref2) {
  var theme = _ref2.theme;
  return theme.BAR.transitionDuration;
}, function (_ref3) {
  var background = _ref3.background,
      exposed = _ref3.exposed,
      flat = _ref3.flat,
      placement = _ref3.placement;
  return (placement === BarConfig.PLACEMENT.LEFT || placement === BarConfig.PLACEMENT.RIGHT) && styled.css(["border-top-", "-radius:0;border-bottom-", "-radius:0;display:", ";width:1.5rem;height:3rem;", ":100%;background-color:", ";box-shadow:", ";"], placement, placement, exposed ? 'block' : 'none', placement, function (_ref4) {
    var background = _ref4.background,
        theme = _ref4.theme;
    return theme ? theme.COLOUR[background] : 'white';
  }, !flat && (placement === BarConfig.PLACEMENT.LEFT ? '2px 1px 2px 0px rgb(0 0 0 / 13%)' : '-2px 1px 2px 0px rgb(0 0 0 / 13%)'));
}, function (_ref5) {
  var open = _ref5.open;
  return open === true && styled.css(["._,svg{transform:rotate(180deg);}"]);
});
var StyledOverlay$1 = styled__default['default'].div.withConfig({
  displayName: "bar__StyledOverlay",
  componentId: "sc-1az3wwm-1"
})(["transition:", ";", " ", ""], function (_ref6) {
  var theme = _ref6.theme,
      placement = _ref6.placement;
  return styled.css(["opacity ", " ", ",", " ", " ", ";"], theme.BAR.transitionDuration, theme.BAR.transitionTiming, placement, theme.BAR.transitionDuration, theme.BAR.transitionTiming);
}, function (_ref7) {
  var placement = _ref7.placement,
      variant = _ref7.variant,
      width = _ref7.width;
  return variant === BarConfig.VARIANT.OVERLAY && (placement === BarConfig.PLACEMENT.LEFT || placement === BarConfig.PLACEMENT.RIGHT) && styled.css(["width:calc(100% - ", "rem);height:100%;background-color:rgba(0,0,0,0.5);opacity:1;top:0;position:absolute;", ":", "rem;"], width, placement, width);
}, function (_ref8) {
  var open = _ref8.open,
      placement = _ref8.placement;
  return !open && styled.css(["opacity:0;pointer-events:none;width:100%;", ":0;"], placement);
});
var StyledBarWrapper = styled__default['default'].div.withConfig({
  displayName: "bar__StyledBarWrapper",
  componentId: "sc-1az3wwm-2"
})(["align-items:center;background-color:", ";box-shadow:", ";display:flex;flex-direction:column;height:100%;position:relative;transition-duration:", ";transition-property:left,opacity,right,width;transition-timing-function:", ";", " ", ""], function (_ref9) {
  var background = _ref9.background,
      theme = _ref9.theme;
  return theme ? theme.COLOUR[background] : 'white';
}, function (_ref10) {
  var flat = _ref10.flat;
  return !flat && ' 0px 4px 4px rgba(0, 0, 0, 0.25)';
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.BAR.transitionDuration;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.BAR.transitionTiming;
}, function (_ref13) {
  var minSize = _ref13.minSize,
      open = _ref13.open,
      placement = _ref13.placement,
      theme = _ref13.theme,
      width = _ref13.width;
  return placement === BarConfig.PLACEMENT.TOP || placement === BarConfig.PLACEMENT.BOTTOM ? styled.css(["width:100%;height:", ";flex-direction:row;"], minSize !== null && minSize !== void 0 ? minSize : theme.BAR.minSize) : open ? styled.css(["width:", "rem;"], width) : styled.css(["width:", ";"], minSize !== null && minSize !== void 0 ? minSize : theme.BAR.minSize);
}, function (_ref14) {
  var minSize = _ref14.minSize,
      open = _ref14.open,
      placement = _ref14.placement,
      theme = _ref14.theme,
      variant = _ref14.variant;
  return variant === BarConfig.VARIANT.OVERLAY ? styled.css(["position:absolute;opacity:1;", ":0;", " ", " ", ""], placement, (placement === BarConfig.PLACEMENT.LEFT || placement === BarConfig.PLACEMENT.RIGHT) && styled.css(["top:0;align-items:center;"]), !open && styled.css(["margin-", ":-", ";background-color:transparent;box-shadow:none;"], placement, minSize !== null && minSize !== void 0 ? minSize : theme.BAR.minSize), (placement === BarConfig.PLACEMENT.TOP || placement === BarConfig.PLACEMENT.BOTTOM) && styled.css(["left:0;"])) : styled.css(["float:", ";"], placement);
});
Bar$1.propTypes = {};
Bar$1.defaultProps = {
  width: 10,
  placement: 'left',
  variant: 'push',
  background: 'white'
};

var BarConfig = {
  PLACEMENT: {
    BOTTOM: 'bottom',
    LEFT: 'left',
    RIGHT: 'right',
    TOP: 'top'
  },
  VARIANT: {
    OVERLAY: 'overlay',
    PUSH: 'push'
  }
};

var __jsx$2f = React__default['default'].createElement;
var events = [{
  start: moment__default['default'](),
  end: moment__default['default']().add(1, 'days').toDate(),
  title: 'Sprint planning'
}];
var BigCalendar = function BigCalendar() {
  var localizer = reactBigCalendar.momentLocalizer(moment__default['default']);
  return __jsx$2f("div", null, __jsx$2f(reactBigCalendar.Calendar, {
    localizer: localizer,
    defaultDate: new Date(),
    events: events,
    startAccessor: "start",
    endAccessor: "end",
    style: {
      height: 500
    }
  }));
};

var __jsx$2g = React__default['default'].createElement;
var FullCalendar;
var CalendarWrapper = function CalendarWrapper(props) {
  var _useState = React.useState(false),
      calendarLoaded = _useState[0],
      setCalendarLoaded = _useState[1];

  React.useEffect(function () {
    FullCalendar = dynamic__default['default']({
      modules: function modules() {
        return {
          calendar: Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('@fullcalendar/react')); }),
          dayGridPlugin: Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('@fullcalendar/daygrid')); }),
          timeGridPlugin: Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('@fullcalendar/timegrid')); }),
          interactionPlugin: Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('@fullcalendar/interaction')); }),
          listPlugin: Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('@fullcalendar/list')); })
        };
      },
      render: function render(props, _ref) {
        var Calendar = _ref.calendar,
            plugins = _objectWithoutProperties(_ref, ["calendar"]);

        return __jsx$2g(Calendar, _extends({
          plugins: Object.values(plugins),
          ref: props.forwardedRef
        }, props));
      },
      ssr: false,
      loadableGenerated: {
        webpack: function webpack() {
          return [require.resolveWeak('@fullcalendar/react'), require.resolveWeak('@fullcalendar/daygrid'), require.resolveWeak('@fullcalendar/timegrid'), require.resolveWeak('@fullcalendar/interaction'), require.resolveWeak('@fullcalendar/list')];
        },
        modules: ['@fullcalendar/react', '@fullcalendar/daygrid', '@fullcalendar/timegrid', '@fullcalendar/interaction', '@fullcalendar/list']
      }
    });
    setCalendarLoaded(true);
  }, []);

  var showCalendar = function showCalendar(props) {
    if (!calendarLoaded) return __jsx$2g("div", null, "Loading ...");
    return __jsx$2g(FullCalendar, props);
  };

  return __jsx$2g("div", null, showCalendar(props));
};

var __jsx$2h = React__default['default'].createElement;
var Calendar = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var props = _extends({}, _ref);

  var CALENDAR = Theme.CALENDAR,
      COLOUR = Theme.COLOUR;

  var _useState = React.useState(false),
      loading = _useState[0],
      setLoading = _useState[1];

  return __jsx$2h(Wrapper$4, null, props.hasLoading && loading && __jsx$2h(PageLoading, {
    indicator: __jsx$2h(LdsSpinner, {
      color: "#000",
      size: 50
    }),
    opacity: 0.7,
    position: "absolute"
  }), __jsx$2h(CalendarWrapper, _extends({}, props, {
    eventColor: props.defaultEventColor || COLOUR.primary,
    header: props.header || CALENDAR.header,
    events: props.events,
    forwardedRef: ref,
    loading: setLoading
  })));
});
var Wrapper$4 = styled__default['default'].div.withConfig({
  displayName: "fullCalendar__Wrapper",
  componentId: "sc-12sqf83-0"
})(["position:relative;width:100%;@media (max-width:700px){.fc-header-toolbar{flex-direction:column;}}"]);

var __jsx$2i = React__default['default'].createElement;
var ColorPicker = function ColorPicker(_ref) {
  var type = _ref.type,
      onChangeComplete = _ref.onChangeComplete,
      props = _objectWithoutProperties(_ref, ["type", "onChangeComplete"]);

  switch (type) {
    case 'circle':
      return __jsx$2i(reactColor.CirclePicker, _extends({
        onChangeComplete: onChangeComplete
      }, props));

    case 'sketch':
      return __jsx$2i(reactColor.SketchPicker, _extends({
        onChangeComplete: onChangeComplete
      }, props));

    case 'github':
      return __jsx$2i(reactColor.GithubPicker, _extends({
        onChangeComplete: onChangeComplete
      }, props));

    case 'twitter':
      return __jsx$2i(reactColor.TwitterPicker, _extends({
        onChangeComplete: onChangeComplete
      }, props));

    default:
      return __jsx$2i(reactColor.SketchPicker, _extends({
        onChangeComplete: onChangeComplete
      }, props));
  }
};
ColorPicker.defaultProps = {
  type: 'github',
  width: '214px'
};
ColorPicker.propTypes = {
  type: propTypes.string,
  onChangeComplete: propTypes.func.isRequired,
  width: propTypes.string
};

var __jsx$2j = React__default['default'].createElement;
var EmailChange = function EmailChange(_ref) {
  var showPlaceholder = _ref.showPlaceholder;

  var _useForm = useForm({
    mode: 'onChange'
  }),
      errors = _useForm.errors,
      formState = _useForm.formState,
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register;

  var _useState = React.useState(false),
      error = _useState[0];

  var submit = function submit(data) {};

  var pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return __jsx$2j(React__default['default'].Fragment, null, __jsx$2j(PageHeading, {
    center: true,
    heading: "Email Change",
    divider: false
  }), error && __jsx$2j(Alert, {
    content: error.message,
    context: "warning"
  }), __jsx$2j(Form, {
    handleSubmit: handleSubmit(submit)
  }, __jsx$2j(FormLabel, {
    label: "Email"
  }, __jsx$2j(FormField, {
    autoFocus: true,
    errors: errors,
    name: "email",
    placeholder: showPlaceholder ? 'Email' : '',
    regExp: pattern,
    register: register
  })), __jsx$2j(Button, {
    block: true,
    content: "Submit",
    context: "primary",
    disabled: !formState.isValid,
    size: "lg",
    type: "submit"
  }), __jsx$2j("p", null, "We will send you a re-validation email after this. Please also check your spam folder.")));
};
EmailChange.propTypes = {
  showPlaceholder: propTypes.bool
};
EmailChange.defaultProps = {
  showPlaceholder: false
};

// Did is the example to apply into the blockTypes, when we implement the whole solutionn
// We will have it in this format
var BlockType = {
  HEADER_ONE: 'header-one',
  HEADER_THREE: 'header-three',
  HEADER_FOUR: 'header-four',
  HEADER_FIVE: 'header-five',
  HEADER_SIX: 'header-six',
  BLOCKQUOTE: 'blockquote',
  FIGURE: 'atomic',
  LI: 'unordered-list-item'
};

var __jsx$2k = React__default['default'].createElement;
var DraftJs = function DraftJs(_ref) {
  var control = _ref.control,
      name = _ref.name,
      setValue = _ref.setValue;

  var _useState = React.useState(draftJs.EditorState.createEmpty()),
      editorState = _useState[0],
      setEditorState = _useState[1];

  var toggleInlineStyle = function toggleInlineStyle(event) {
    event.preventDefault();
    var style = event.currentTarget.getAttribute('data-style');
    setEditorState(draftJs.RichUtils.toggleInlineStyle(editorState, style));
  };

  var handleKeyCommand = function handleKeyCommand(command, editorState) {
    var newEditorState = draftJs.RichUtils.handleKeyCommand(editorState, command);

    if (newEditorState) {
      setEditorState(newEditorState);
      return 'handled';
    }

    return 'not-handled';
  };

  var handleOnChange = function handleOnChange(newEditorState) {
    setEditorState(newEditorState); // This is returning the current plain Value, we will have to see if we will get back the whole
    // State and then write a parser or how we will manage that

    setValue(name, newEditorState.getCurrentContent().getPlainText("\x01"));
  }; // TODO: Do the inputList dynamic creating a map with the Key-Value to generate the needed


  return __jsx$2k(React__default['default'].Fragment, null, __jsx$2k("input", {
    type: "button",
    value: "B",
    "data-style": "BOLD",
    onMouseDown: toggleInlineStyle
  }), __jsx$2k("input", {
    type: "button",
    value: "I",
    "data-style": "ITALIC",
    onMouseDown: toggleInlineStyle
  }), __jsx$2k("input", {
    type: "button",
    value: "S",
    "data-style": "STRIKETHROUGH",
    onMouseDown: toggleInlineStyle
  }), __jsx$2k("input", {
    type: "button",
    value: "U",
    "data-style": "UNDERLINE",
    onMouseDown: toggleInlineStyle
  }), __jsx$2k(reactHookForm.Controller, {
    name: name,
    control: control,
    render: function render(props) {
      return __jsx$2k(draftJs.Editor, {
        editorState: editorState,
        blockStyleFn: myBlockStyleFn,
        handleKeyCommand: handleKeyCommand,
        onChange: handleOnChange
      });
    }
  }));
};

function myBlockStyleFn(contentBlock) {
  var type = contentBlock.getType();

  if (type === BlockType.BLOCKQUOTE) {
    // TODO: return the right css according to be applied into the whole block
    return undefined;
  }
}

var __jsx$2l = React__default['default'].createElement;
var Footer = function Footer(_ref) {
  var columns = _ref.columns,
      fixed = _ref.fixed;

  var renderColumns = function renderColumns() {
    return columns.map(function (column, index) {
      return __jsx$2l(Column, _extends({
        align: column.align,
        key: index,
        offset: column.offset
      }, column.size), Object.entries(column).map(function (_ref2, i) {
        var _ref3 = _slicedToArray(_ref2, 2),
            key = _ref3[0],
            value = _ref3[1];

        switch (key) {
          case 'header':
            return __jsx$2l(StyledHeading$3, {
              align: value.align,
              content: value.content,
              key: "".concat(value.content).concat(index).concat(i),
              tag: "h6"
            });

          case 'formatter':
            return value("".concat(index).concat(i));

          case 'links':
            return renderLinks(value, "".concat(index).concat(i));

          case 'text':
            return renderText(value, "".concat(index).concat(i));
        }
      }));
    });
  };

  var renderLinks = function renderLinks(_ref4, index) {
    var align = _ref4.align,
        direction = _ref4.direction,
        items = _ref4.items;
    return __jsx$2l(StyledList$2, {
      align: align,
      direction: direction,
      key: "".concat(items[0]).concat(index),
      unstyled: true
    }, items.map(function (_ref5) {
      var icon = _ref5.icon,
          id = _ref5.id,
          name = _ref5.name,
          to = _ref5.to;
      return __jsx$2l(StyledListItem$1, {
        key: id
      }, __jsx$2l(Link, {
        to: to,
        passHref: true
      }, icon && __jsx$2l(StyledIcon$6, {
        context: "primary",
        icon: icon,
        prefix: "fad"
      }), name));
    }));
  };

  var renderText = function renderText(_ref6, index) {
    var align = _ref6.align,
        items = _ref6.items;
    return __jsx$2l(React.Fragment, {
      key: index
    }, items === null || items === void 0 ? void 0 : items.map(function (_ref7, i) {
      var content = _ref7.content,
          icon = _ref7.icon;
      return __jsx$2l(React.Fragment, {
        key: i
      }, icon && __jsx$2l(StyledIcon$6, {
        context: "primary",
        icon: icon,
        prefix: "fad"
      }), __jsx$2l(StyledText$5, {
        align: align,
        dangerouslySetInnerHTML: {
          __html: content
        }
      }));
    }));
  };

  return __jsx$2l(StyledFooter$2, {
    "data-cy": "footer",
    fixed: fixed
  }, __jsx$2l(Container, null, __jsx$2l(Row, null, renderColumns())));
};
var StyledFooter$2 = styled__default['default'].div.withConfig({
  displayName: "footer__StyledFooter",
  componentId: "sc-5csagl-0"
})(["border-top:2px solid ", ";font-size:0.875rem;", " padding-top:2rem;", ""], function (_ref8) {
  var theme = _ref8.theme;
  return theme.COLOUR.primary;
}, function (_ref9) {
  var FOOTER = _ref9.theme.FOOTER;
  return styled.css(["background:", ";color:", ";"], FOOTER.background, FOOTER.colour);
}, function (_ref10) {
  var fixed = _ref10.fixed;
  return fixed && styled.css(["bottom:0;position:fixed;left:0;width:100%;z-index:1;"]);
});
var StyledHeading$3 = styled__default['default'](Heading).withConfig({
  displayName: "footer__StyledHeading",
  componentId: "sc-5csagl-1"
})(["text-align:", ";"], function (_ref11) {
  var align = _ref11.align;
  return align;
});
var StyledList$2 = styled__default['default'](List).withConfig({
  displayName: "footer__StyledList",
  componentId: "sc-5csagl-2"
})(["display:flex;flex-direction:", ";flex-wrap:wrap;justify-content:", ";"], function (_ref12) {
  var direction = _ref12.direction;
  return direction || 'column';
}, function (_ref13) {
  var align = _ref13.align;
  return align;
});
var StyledListItem$1 = styled__default['default'](ListItem).withConfig({
  displayName: "footer__StyledListItem",
  componentId: "sc-5csagl-3"
})(["margin-bottom:1.25rem;padding-right:1rem;"]);
var StyledIcon$6 = styled__default['default'](Icon).withConfig({
  displayName: "footer__StyledIcon",
  componentId: "sc-5csagl-4"
})(["margin:0 0.5rem 0 0;"]);
var StyledText$5 = styled__default['default'].p.withConfig({
  displayName: "footer__StyledText",
  componentId: "sc-5csagl-5"
})(["margin:0 0 1rem;text-align:", ";"], function (_ref14) {
  var align = _ref14.align;
  return align;
});
Footer.propTypes = {
  columns: propTypes.arrayOf(propTypes.shape({
    header: propTypes.shape({
      align: propTypes.string,
      content: propTypes.string
    }),
    formatter: propTypes.func,
    links: propTypes.shape({
      align: propTypes.string,
      items: propTypes.arrayOf(propTypes.shape({
        id: propTypes.string,
        icon: propTypes.string,
        name: propTypes.string,
        to: propTypes.oneOfType([propTypes.object, propTypes.string])
      }))
    }),
    offset: propTypes.shape({
      sm: propTypes.number,
      md: propTypes.number,
      lg: propTypes.number,
      xl: propTypes.number
    }),
    size: propTypes.shape({
      sm: propTypes.number,
      md: propTypes.number,
      lg: propTypes.number,
      xl: propTypes.number
    }),
    style: propTypes.object
  })).isRequired,
  fixed: propTypes.bool
};
Footer.defaultProps = {
  fixed: false
};

/**
 * Organisms - Forgot Details - Schema
 */
var ForgotDetailsSchema = yup$1.object().shape({
  email: yup$1.string().required('Please Enter an email').matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Email must be valid')
});

var __jsx$2m = React__default['default'].createElement;
var ForgotDetails = function ForgotDetails(_ref) {
  var pathLogIn = _ref.pathLogIn,
      showPlaceholder = _ref.showPlaceholder,
      submit = _ref.submit;

  var _useForm = useForm({
    resolver: yupResolver(ForgotDetailsSchema)
  }),
      errors = _useForm.errors,
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register;

  return __jsx$2m(React__default['default'].Fragment, null, __jsx$2m(PageHeading, {
    center: true,
    divider: false,
    heading: "Forgot Details"
  }), __jsx$2m(Form, {
    handleSubmit: handleSubmit(submit)
  }, __jsx$2m(FormLabel, {
    label: "Email"
  }, __jsx$2m(FormField, {
    autoFocus: true,
    errors: errors,
    name: "email",
    placeholder: showPlaceholder ? 'Email' : '',
    register: register
  })), __jsx$2m(Button, {
    block: true,
    content: "Send reset link",
    size: "lg",
    type: "submit"
  }), __jsx$2m(Link, {
    to: pathLogIn,
    passHref: true
  }, __jsx$2m(StyledLink$8, null, "Back to Log In"))));
};
var StyledLink$8 = styled__default['default'].span.withConfig({
  displayName: "forgotDetails__StyledLink",
  componentId: "sc-1bspzrc-0"
})(["display:block;margin:1rem 0 0 0;"]);
ForgotDetails.propTypes = {
  pathLogIn: propTypes.string,
  showPlaceholder: propTypes.bool,
  submit: propTypes.func.isRequired
};
ForgotDetails.defaultProps = {
  pathLogIn: '/account/sign-in',
  showPlaceholder: false
};

/**
 * Organisms - Forgot Details Reset - Schema
 */
var ForgotDetailsResetSchema = yup$1.object().shape({
  password: yup$1.string().required('Please Enter a password').min(8, 'Password is too short - should be 8 chars minimum.').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, 'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character')
});

var __jsx$2n = React__default['default'].createElement;
var ForgotDetailsReset = function ForgotDetailsReset(_ref) {
  var _errors$password;

  var pathLogIn = _ref.pathLogIn,
      submit = _ref.submit;

  var _useForm = useForm({
    resolver: yupResolver(ForgotDetailsResetSchema)
  }),
      errors = _useForm.errors,
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register;

  return __jsx$2n(React__default['default'].Fragment, null, __jsx$2n(PageHeading, {
    center: true,
    heading: "Set New Password",
    divider: false
  }), (errors === null || errors === void 0 ? void 0 : (_errors$password = errors.password) === null || _errors$password === void 0 ? void 0 : _errors$password.message) && __jsx$2n(Alert, {
    content: errors.password.message,
    context: "warning"
  }), __jsx$2n(Form, {
    handleSubmit: handleSubmit(submit)
  }, __jsx$2n(FormLabel, {
    label: "Password"
  }, __jsx$2n(FormField, {
    errors: errors,
    name: "password",
    register: register,
    type: "password"
  })), __jsx$2n(Button, {
    block: true,
    content: "Submit",
    size: "lg",
    type: "submit"
  }), __jsx$2n(Link, {
    to: pathLogIn,
    passHref: true
  }, __jsx$2n(StyledLink$9, null, "Back to Log In"))));
};
var StyledLink$9 = styled__default['default'].span.withConfig({
  displayName: "forgotDetailsReset__StyledLink",
  componentId: "sc-158xnzv-0"
})(["display:block;margin:1rem 0 0 0;"]);
ForgotDetailsReset.propTypes = {
  pathLogIn: propTypes.string,
  submit: propTypes.func
};
ForgotDetailsReset.defaultProps = {
  pathLogIn: '/account/sign-in'
};

var __jsx$2o = React__default['default'].createElement;
var pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var Login = function Login(_ref) {
  var blockSubmitButton = _ref.blockSubmitButton,
      forgotPassword = _ref.forgotPassword,
      heading = _ref.heading,
      submit = _ref.submit,
      pathForgot = _ref.pathForgot,
      pathSignUp = _ref.pathSignUp,
      remember = _ref.remember,
      showLabel = _ref.showLabel,
      showPassword = _ref.showPassword,
      showPlaceholder = _ref.showPlaceholder;

  var _useForm = useForm({
    mode: 'onChange'
  }),
      errors = _useForm.errors,
      formState = _useForm.formState,
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit;

  var _useState = React.useState(false),
      showPass = _useState[0],
      setShowPass = _useState[1];

  var _useState2 = React.useState(false),
      error = _useState2[0],
      setError = _useState2[1];

  var _useContext = React.useContext(UserContext),
      signIn = _useContext.signIn;

  var onSubmit = function onSubmit(data) {
    if (!submit) {
      var email = data.email,
          password = data.password;
      signIn('email', email, password, function (error) {
        return error && setError(error);
      });
    } else {
      submit();
    }
  }; // let CHECKBOX_REMEMBER = null
  // if (remember) {
  //   CHECKBOX_REMEMBER = [
  //     {
  //       id: 'remember',
  //       label: 'Remember me',
  //       isChecked: remember
  //     }
  //   ]
  // }


  return __jsx$2o(React__default['default'].Fragment, null, __jsx$2o(PageHeading, {
    center: true,
    heading: heading,
    divider: false
  }), error && __jsx$2o(Alert, {
    content: error.message,
    context: "warning"
  }), __jsx$2o(Form, {
    handleSubmit: handleSubmit(onSubmit)
  }, __jsx$2o(FormLabel, {
    label: "Email"
  }, __jsx$2o(FormField, {
    autoFocus: true,
    errors: errors,
    name: "email",
    placeholder: showPlaceholder ? 'Email' : '',
    regExp: pattern,
    register: register
  })), __jsx$2o(FormLabel, {
    label: "Password"
  }, __jsx$2o(FormField, {
    errors: errors,
    name: "password",
    placeholder: showPlaceholder ? 'Password' : '',
    register: register,
    type: showPass ? 'text' : 'password'
  })), showPassword && __jsx$2o(ShowPassword, {
    onClick: function onClick() {
      return setShowPass(function (prev) {
        return !prev;
      });
    }
  }, __jsx$2o("a", null, showPass ? 'Hide Password' : 'Show Password')), __jsx$2o("div", {
    className: "text-right"
  }, __jsx$2o(Button, {
    align: "right",
    block: blockSubmitButton,
    content: "Log in",
    context: "primary",
    disabled: !formState.isValid,
    size: "lg",
    type: "submit"
  }), forgotPassword && __jsx$2o(ForgotPasswordWrapper, null, __jsx$2o(Link, {
    to: pathForgot
  }, "Forgot password?")))), pathSignUp && __jsx$2o(React__default['default'].Fragment, null, __jsx$2o("p", {
    className: "text-center"
  }, "Don't have an account? ", __jsx$2o(Link, {
    to: pathSignUp
  }, "Apply now!"))));
};
var ShowPassword = styled__default['default'].div.withConfig({
  displayName: "login__ShowPassword",
  componentId: "sc-191dszw-0"
})(["cursor:pointer;font-size:0.8rem;margin-bottom:1rem;text-align:right;"]);
var ForgotPasswordWrapper = styled__default['default'].div.withConfig({
  displayName: "login__ForgotPasswordWrapper",
  componentId: "sc-191dszw-1"
})(["margin-top:1rem;text-align:center;"]);
Login.propTypes = {
  blockSubmitButton: propTypes.bool,
  forgotPassword: propTypes.bool,
  heading: propTypes.string,
  pathForgot: propTypes.string,
  pathSignUp: propTypes.oneOfType([propTypes.object, propTypes.string]),
  remember: propTypes.string,
  showLabel: propTypes.bool,
  showPassword: propTypes.bool,
  showPlaceholder: propTypes.bool
};
Login.defaultProps = {
  blockSubmitButton: false,
  forgotPassword: true,
  heading: 'Log In',
  pathForgot: '/account/forgot-details',
  showLabel: true,
  showPassword: false,
  showPlaceholder: false
};

var __jsx$2p = React__default['default'].createElement;
var Message = function Message(_ref) {
  var message = _ref.message,
      prevType = _ref.prevType,
      type = _ref.type,
      props = _objectWithoutProperties(_ref, ["message", "prevType", "type"]);

  return __jsx$2p(Row, {
    style: {
      position: 'relative'
    }
  }, type === 'out' && __jsx$2p(Column, {
    sm: 1
  }, "\xA0"), __jsx$2p(Tail, {
    type: type
  }), __jsx$2p(MessageBase, _extends({
    prevType: prevType
  }, message, props)));
};
Message.propTypes = {
  message: propTypes.object.isRequired,
  prevType: propTypes.string.isRequired
};

var __jsx$2q = React__default['default'].createElement;
var MessageIcon = function MessageIcon(_ref) {
  var icon = _ref.icon,
      prefix = _ref.prefix;
  var useIcon = '';

  switch (icon) {
    case 'comment':
      useIcon = 'comment-dots';
      break;

    case 'notification':
      useIcon = 'bell';
      break;

    default:
      useIcon = 'envelope';
      break;
  }

  return __jsx$2q(StyledIcon$7, {
    fixedWidth: false,
    icon: useIcon,
    prefix: prefix
  });
};
var StyledIcon$7 = styled__default['default'](Icon).withConfig({
  displayName: "icon__StyledIcon",
  componentId: "hstm32-0"
})(["color:", ";margin-right:0.5rem;vertical-align:middle !important;"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.COLOUR.primary;
});
MessageIcon.propTypes = {
  icon: propTypes.string.isRequired,
  prefix: propTypes.oneOf(Object.values(ICON_PREFIX))
};
MessageIcon.defaultProps = {
  prefix: 'fas'
};

var __jsx$2r = React__default['default'].createElement;
var MessageTo = function MessageTo(_ref) {
  var to = _ref.to;
  var icon = '';

  switch (to) {
    case 'customer-supplier':
      icon = '/messaging/cs.svg';
      break;

    case 'customer':
      icon = '/messaging/customer.svg';
      break;

    case 'supplier':
      icon = '/messaging/supplier.svg';
      break;

    default:
      icon = null;
      break;
  }

  return icon && __jsx$2r(StyledImage$3, {
    alt: "audience",
    src: icon
  });
};
var StyledImage$3 = styled__default['default'](Image$1).withConfig({
  displayName: "to__StyledImage",
  componentId: "sc-1dfvymz-0"
})(["margin-right:0.5rem;vertical-align:middle !important;"]);
MessageTo.propTypes = {
  to: propTypes.string.isRequired
};

var __jsx$2s = React__default['default'].createElement;
var MessageBase = function MessageBase(_ref) {
  var content = _ref.content,
      from = _ref.from,
      icon = _ref.icon,
      pictureId = _ref.pictureId,
      prevType = _ref.prevType,
      reply = _ref.reply,
      scrollToMessage = _ref.scrollToMessage,
      statusText = _ref.statusText,
      time = _ref.time,
      to = _ref.to,
      more = _ref.more,
      type = _ref.type;

  var _useState = React.useState(false),
      seeMore = _useState[0],
      setSeeMore = _useState[1];

  var messageRef = React.useRef(null);
  React.useEffect(function () {
    if (scrollToMessage) messageRef.current.scrollIntoView({
      block: 'nearest',
      behavior: 'smooth'
    });
  }, []);
  return __jsx$2s(Column, {
    sm: 11,
    columnRef: messageRef
  }, __jsx$2s(StyledCard$2, {
    type: type
  }, __jsx$2s(Row, null, __jsx$2s(Column, {
    sm: 6
  }, __jsx$2s(MessageIcon, {
    icon: icon
  }), __jsx$2s(MessageTo, {
    to: to
  }), __jsx$2s(StyledTime$1, null, time)), __jsx$2s(Column, {
    sm: 6
  }, __jsx$2s(StyledFrom, null, from))), __jsx$2s(Row, null, pictureId && __jsx$2s(Column, {
    sm: 2
  }, __jsx$2s(Image$1, {
    alt: "Image",
    src: pictureId
  })), __jsx$2s(Column, {
    sm: pictureId ? 8 : !type ? 11 : 12
  }, __jsx$2s(StyledReply, null, reply), __jsx$2s(StyledContent$4, {
    seeMore: seeMore
  }, content && content.split('\n').map(function (item, key) {
    return __jsx$2s("span", {
      key: key
    }, item, __jsx$2s("br", null));
  })), more && __jsx$2s(StyledCollapse, {
    onClick: function onClick() {
      return setSeeMore(!seeMore);
    }
  }, seeMore ? __jsx$2s(React__default['default'].Fragment, null, __jsx$2s("span", null, "Close"), __jsx$2s(Icon, {
    icon: "chevron-up"
  })) : __jsx$2s(React__default['default'].Fragment, null, __jsx$2s("span", null, "See more"), __jsx$2s(Icon, {
    icon: "chevron-down"
  })))), !type && __jsx$2s(Column, {
    sm: 1
  }, __jsx$2s(Icon, {
    color: statusText === 'Delivered' ? 'green' : '#bbb',
    icon: "check-circle"
  })))));
};
var StyledCard$2 = styled__default['default'](Card).withConfig({
  displayName: "base__StyledCard",
  componentId: "sc-19m896m-0"
})(["background-color:", ";border-radius:1rem;margin-bottom:0.5rem;padding:0.75rem 1rem;"], function (_ref2) {
  var type = _ref2.type;
  return type === 'in' ? '#fff' : '#F7F7F7';
});
var StyledContent$4 = styled__default['default'].div.withConfig({
  displayName: "base__StyledContent",
  componentId: "sc-19m896m-1"
})(["color:#000;", ""], function (_ref3) {
  var seeMore = _ref3.seeMore;
  return !seeMore && TruncateByMaxHeight('70px');
});
var StyledReply = styled__default['default'].div.withConfig({
  displayName: "base__StyledReply",
  componentId: "sc-19m896m-2"
})(["color:#696969;font-size:0.75rem;margin-bottom:0.5rem;"]);
var StyledCollapse = styled__default['default'].div.withConfig({
  displayName: "base__StyledCollapse",
  componentId: "sc-19m896m-3"
})(["color:#faac46;cursor:pointer;display:inline-block;font-size:0.75rem;text-transform:uppercase;"]);
var StyledTime$1 = styled__default['default'].span.withConfig({
  displayName: "base__StyledTime",
  componentId: "sc-19m896m-4"
})(["color:", ";font-size:0.75rem;margin-bottom:0.5rem;"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.COLOUR.primary;
});
var StyledFrom = styled__default['default'](StyledTime$1).withConfig({
  displayName: "base__StyledFrom",
  componentId: "sc-19m896m-5"
})(["display:block;text-align:right;"]);
MessageBase.propTypes = {
  content: propTypes.string,
  pictureId: propTypes.string,
  scrollToMessage: propTypes.bool,
  statusText: propTypes.string,
  time: propTypes.string,
  type: propTypes.string
};

/**
 * Messaging/Background
 */
var MessageBackground = styled__default['default'].div.withConfig({
  displayName: "background__MessageBackground",
  componentId: "sc-197phha-0"
})(["background-image:url(", ");height:100%;opacity:0.6;position:absolute;top:0;width:100%;"], function (_ref) {
  var path = _ref.path;
  return path;
});
MessageBackground.propTypes = {
  path: propTypes.string
};
MessageBackground.defaultProps = {
  path: '/messaging/background.png'
};

var __jsx$2t = React__default['default'].createElement;
var MessagingContainer = function MessagingContainer(_ref) {
  var audienceItems = _ref.audienceItems,
      className = _ref.className,
      maxLength = _ref.maxLength,
      messages = _ref.messages,
      onFilter = _ref.onFilter,
      onSearch = _ref.onSearch,
      onSubmit = _ref.onSubmit,
      style = _ref.style;
  return __jsx$2t(React__default['default'].Fragment, null, __jsx$2t(MessagingSearch, {
    onFilter: onFilter,
    onSearch: onSearch
  }), __jsx$2t(StyledContainer$7, {
    className: className,
    style: style
  }, __jsx$2t(MessageList, {
    messages: messages
  })), __jsx$2t(MessagingSend, {
    audienceItems: audienceItems,
    onSubmit: onSubmit,
    maxLength: maxLength
  }));
};
var StyledContainer$7 = styled__default['default'].div.withConfig({
  displayName: "container__StyledContainer",
  componentId: "sc-18pd3dx-0"
})(["background-color:rgba(117,204,207,0.4);max-height:calc(100vh - 260px);overflow-x:hidden;overflow-y:scroll;padding:1rem;position:relative;"]);
MessagingContainer.propTypes = {
  audienceItems: propTypes.array,
  className: propTypes.string,
  maxLength: propTypes.number,
  messages: propTypes.array.isRequired,
  onFilter: propTypes.func.isRequired,
  onSearch: propTypes.func.isRequired,
  onSubmit: propTypes.func.isRequired,
  style: propTypes.object
};

var __jsx$2u = React__default['default'].createElement;
var MessageList = function MessageList(_ref) {
  var messages = _ref.messages;
  return messages.map(function (message, index) {
    return __jsx$2u(Message, {
      message: message,
      key: index,
      prevType: message.type,
      scrollToMessage: index + 1 === messages.length,
      type: message.type
    });
  });
};
MessageList.propTypes = {
  messages: propTypes.array.isRequired
};

var __jsx$2v = React__default['default'].createElement;
var Items = [{
  text: 'All',
  value: 'all'
}, {
  text: 'Email',
  value: 'email'
}, {
  text: 'Comment',
  value: 'comment'
}, {
  text: 'Notification',
  value: 'notification'
}];
var MessagingSearch = function MessagingSearch(_ref) {
  var onFilter = _ref.onFilter,
      onSearch = _ref.onSearch,
      placeholder = _ref.placeholder;

  var _useForm = useForm({
    mode: 'onChange'
  }),
      errors = _useForm.errors,
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register;

  var onSubmit = function onSubmit(data) {
    onSearch(data.query);
  };

  var defaultOptions = {
    errors: errors,
    register: register
  };
  return __jsx$2v(StyledContainer$8, null, __jsx$2v(Form, {
    handleSubmit: handleSubmit(onSubmit)
  }, __jsx$2v(Row, null, __jsx$2v(Column, {
    md: 6
  }, __jsx$2v(StyledSearch, _extends({}, defaultOptions, {
    prependSearchIcon: true,
    placeholder: placeholder
  }))), __jsx$2v(Column, {
    md: 6
  }, __jsx$2v(StyledSelect$1, _extends({}, defaultOptions, {
    name: "messagingFilter",
    options: Items
  }))))));
};
var StyledContainer$8 = styled__default['default'].div.withConfig({
  displayName: "search__StyledContainer",
  componentId: "sc-12sbun4-0"
})(["background-color:#eee;border-top:1px solid #c0c0c0;padding:1rem;"]);
var StyledSearch = styled__default['default'](Search).withConfig({
  displayName: "search__StyledSearch",
  componentId: "sc-12sbun4-1"
})(["width:75%;"]);
var StyledSelect$1 = styled__default['default'](SelectField).withConfig({
  displayName: "search__StyledSelect",
  componentId: "sc-12sbun4-2"
})(["width:75%;label{margin:0;}"]);
MessagingSearch.propTypes = {
  onFilter: propTypes.func.isRequired,
  onSearch: propTypes.func.isRequired,
  placeholder: propTypes.string
};
MessagingSearch.defaultProps = {
  placeholder: 'Search...'
};

var __jsx$2w = React__default['default'].createElement;
var MessagingSend = function MessagingSend(_ref) {
  var audienceItems = _ref.audienceItems,
      maxLength = _ref.maxLength,
      onSubmit = _ref.onSubmit;

  var _useForm = useForm({
    defaultValues: {
      message: ''
    }
  }),
      errors = _useForm.errors,
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register,
      setValue = _useForm.setValue,
      watch = _useForm.watch;

  var _useState = React.useState(false),
      open = _useState[0],
      setOpen = _useState[1];

  var _useState2 = React.useState([]),
      attachments = _useState2[0],
      setAttachments = _useState2[1];

  var _useState3 = React.useState(audienceItems[0] || ''),
      audience = _useState3[0],
      setAudience = _useState3[1];

  var fileInputRef = React.useRef();
  var message = watch('message');

  var handleOpenPicker = function handleOpenPicker() {
    setOpen(false);
  };

  var openFileDialog = function openFileDialog() {
    fileInputRef.current.click();
  };

  var handleFilesChange = function handleFilesChange(e) {
    var files = e.target.files;
    setAttachments(files);
  };

  var handleEmojiSelect = function handleEmojiSelect(emoji) {
    setValue('message', message + emoji);
  };

  var submit = function submit(form) {
    var data = {
      attachments: attachments,
      audience: audience.id,
      message: form.message
    };
    onSubmit(data);
    setValue('message', '');
  };

  return __jsx$2w(React__default['default'].Fragment, null, open && __jsx$2w(StyledPickerContainer, null, __jsx$2w(EmojiMart, {
    handleOpenPicker: handleOpenPicker,
    handleSelect: handleEmojiSelect,
    open: open
  })), __jsx$2w(StyledContainer$9, {
    audience: audience
  }, __jsx$2w(StyledForm$1, {
    handleSubmit: handleSubmit(submit)
  }, audience && __jsx$2w(StyledDropDown, {
    items: audienceItems,
    onChange: function onChange(item) {
      return setAudience(item);
    },
    position: "top"
  }, audience.name), __jsx$2w(StyledTextarea$1, {
    errors: errors,
    maxLength: maxLength,
    name: "message",
    placeholder: "Write message",
    register: register,
    rows: 2
  }), __jsx$2w("input", {
    multiple: true,
    onChange: handleFilesChange,
    ref: fileInputRef,
    style: {
      display: 'none'
    },
    type: "file"
  }), __jsx$2w(StyledElements, null, __jsx$2w(StyledIcon$8, {
    fixedWidth: false,
    icon: "paperclip",
    onClick: openFileDialog,
    size: "2x"
  }), __jsx$2w(StyledIcon$8, {
    fixedWidth: false,
    icon: "smile",
    onClick: function onClick() {
      return setOpen(!open);
    },
    size: "2x"
  }), __jsx$2w(Button, {
    content: "Send",
    context: "info",
    disabled: message.length === 0 && attachments.length === 0,
    size: "sm",
    type: "submit"
  })))));
};
var StyledContainer$9 = styled__default['default'].div.withConfig({
  displayName: "send__StyledContainer",
  componentId: "sc-18pp565-0"
})(["background-color:#fff;border-bottom:1px solid #c0c0c0;border-top:1px solid #c0c0c0;box-sizing:border-box;color:#c0c0c0;padding:", ";position:relative;"], function (_ref2) {
  var audience = _ref2.audience;
  return audience ? '1.5rem 1rem 1rem' : '1rem';
});
var StyledPickerContainer = styled__default['default'](StyledContainer$9).withConfig({
  displayName: "send__StyledPickerContainer",
  componentId: "sc-18pp565-1"
})(["bottom:80px;left:15px;padding:0;position:absolute;right:15px;z-index:999;"]);
var StyledForm$1 = styled__default['default'](Form).withConfig({
  displayName: "send__StyledForm",
  componentId: "sc-18pp565-2"
})(["display:flex;position:relative;margin:0;.Form-feedback{width:inherit;}"]);
var StyledTextarea$1 = styled__default['default'](TextareaField).withConfig({
  displayName: "send__StyledTextarea",
  componentId: "sc-18pp565-3"
})(["background-color:", ";border:", ";border-radius:1rem;line-height:1.5;resize:none;margin:0.5rem 0.5rem 0 0;padding:0.5rem;&:focus{border-color:initial;box-shadow:initial;}"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.COLOUR.light;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.COLOUR.light;
});
var StyledElements = styled__default['default'].div.withConfig({
  displayName: "send__StyledElements",
  componentId: "sc-18pp565-4"
})(["align-items:center;display:flex;"]);
var StyledIcon$8 = styled__default['default'](Icon).withConfig({
  displayName: "send__StyledIcon",
  componentId: "sc-18pp565-5"
})(["cursor:pointer;margin-right:1rem;&:hover{color:", ";}"], function (_ref5) {
  var theme = _ref5.theme;
  return theme.COLOUR.info;
});
var StyledDropDown = styled__default['default'](Dropdown).withConfig({
  displayName: "send__StyledDropDown",
  componentId: "sc-18pp565-6"
})(["position:absolute;left:8px;text-transform:uppercase;top:-24px;.dropdown--link{color:#000;font-size:10px;}.dropdown--toggle,svg{color:", ";font-size:10px;}"], function (_ref6) {
  var theme = _ref6.theme;
  return theme.COLOUR.info;
});
MessagingSend.propTypes = {
  audienceItems: propTypes.array,
  onSubmit: propTypes.func.isRequired,
  maxLength: propTypes.number
};
MessagingSend.defaultProps = {
  audienceItems: [],
  maxLength: 320
};

/**
 * Messaging/Tail
 */
var Tail = styled__default['default'].span.withConfig({
  displayName: "tail__Tail",
  componentId: "pnkt1z-0"
})(["background-image:", ";background-repeat:no-repeat;bottom:8px;height:16px;position:absolute;", " width:12px;"], function (_ref) {
  var type = _ref.type;
  return type === 'in' ? "url('/messaging/tail-incoming.svg')" : "url('/messaging/tail-outgoing.svg')";
}, function (_ref2) {
  var type = _ref2.type;
  return type === 'in' ? 'left: 11px;' : 'right: 11px;';
});
Tail.propTypes = {
  type: propTypes.oneOf(['in', 'out']).isRequired
};

var __jsx$2x = React__default['default'].createElement;
var PasswordChange = function PasswordChange(_ref) {
  var showPlaceholder = _ref.showPlaceholder;

  var _useForm = useForm({
    mode: 'onChange'
  }),
      errors = _useForm.errors,
      formState = _useForm.formState,
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register,
      watch = _useForm.watch;

  var _useState = React.useState(false),
      error = _useState[0];

  var submit = function submit(data) {};

  return __jsx$2x(React__default['default'].Fragment, null, __jsx$2x(PageHeading, {
    center: true,
    heading: "Password Change",
    divider: false
  }), error && __jsx$2x(Alert, {
    content: error.message,
    context: "warning"
  }), __jsx$2x(Form, {
    handleSubmit: handleSubmit(submit)
  }, __jsx$2x(FormLabel, {
    label: "Old password"
  }, __jsx$2x(FormField, {
    errors: errors,
    name: "passwordOld",
    placeholder: showPlaceholder ? 'Old Password' : '',
    register: register,
    type: "password"
  })), __jsx$2x(FormLabel, {
    label: "New password"
  }, __jsx$2x(FormField, {
    errors: errors,
    name: "password",
    placeholder: showPlaceholder ? 'New Password' : '',
    register: register,
    type: "password"
  })), __jsx$2x(FormLabel, {
    label: "Confirm password"
  }, __jsx$2x(FormField, {
    errors: errors,
    name: "passwordConfirm",
    placeholder: showPlaceholder ? 'Confirm Password' : '',
    register: register,
    type: "password",
    validate: function validate(v) {
      return v === watch('password');
    }
  })), __jsx$2x(Button, {
    block: true,
    content: "Submit",
    context: "primary",
    disabled: !formState.isValid,
    size: "lg",
    type: "submit"
  })));
};
PasswordChange.propTypes = {
  showPlaceholder: propTypes.bool
};

var __jsx$2y = React__default['default'].createElement;
var CHECKBOX_TERMS = [{
  id: 'terms',
  label: 'I confirm that I have read and agree to the Terms of Service and Privacy Policy.'
}, {
  id: 'marketing',
  label: 'I would like to receive, occasional news and exclusive offers from via email. I can opt out of receiving these at any time in my account settings.'
}];
var pattern$1 = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var Register = function Register(_ref) {
  var birthday = _ref.birthday,
      dayBirthday = _ref.dayBirthday,
      email = _ref.email,
      errorSubmit = _ref.errorSubmit,
      monthBirthday = _ref.monthBirthday,
      marketing = _ref.marketing,
      nameFirst = _ref.nameFirst,
      nameLast = _ref.nameLast,
      pathLogin = _ref.pathLogin,
      password = _ref.password,
      repeatPassword = _ref.repeatPassword,
      showPlaceholder = _ref.showPlaceholder,
      submit = _ref.submit,
      terms = _ref.terms,
      yearBirthday = _ref.yearBirthday;

  var renderBirthday = function renderBirthday() {
    return __jsx$2y(React__default['default'].Fragment, null, __jsx$2y(DatePickerInput, {
      day: dayBirthday,
      id: "Birthday",
      label: "Birthdate",
      month: monthBirthday,
      year: yearBirthday
    }), __jsx$2y(Text, null, "To sign up, you must be 18 or older. Other users will not see this."));
  };

  var _useContext = React.useContext(UserContext),
      registerContext = _useContext.registerContext;

  var _useForm = useForm({
    mode: 'onChange'
  }),
      errors = _useForm.errors,
      register = _useForm.register,
      formState = _useForm.formState,
      handleSubmit = _useForm.handleSubmit;

  var _useState = React.useState(errorSubmit),
      error = _useState[0],
      setError = _useState[1];

  var _useState2 = React.useState(),
      passwordError = _useState2[0],
      setPasswordError = _useState2[1];

  React.useEffect(function () {
    setError(errorSubmit);
    return function () {
      setError();
    };
  }, [errorSubmit]);

  var onSubmit = function onSubmit(e) {
    // We get the check of password and repeatpassword from backend? or if not we can manage it here too
    setPasswordError();

    if (e.password !== e.repeatPassword) {
      setPasswordError(new Error('Password and repeat password are different'));
    } else if (!submit) {
      registerContext(nameFirst, nameLast, email, password, marketing, birthday, function (error) {
        return error && setError(error);
      });
    } else {
      submit();
    }
  };

  var defaultOptions = {
    errors: errors,
    register: register
  };
  return __jsx$2y(Form, {
    handleSubmit: handleSubmit(onSubmit)
  }, error && __jsx$2y(Alert, {
    content: error.message,
    context: "warning"
  }), __jsx$2y(FormLabel, {
    label: "First name"
  }, __jsx$2y(FormField, _extends({}, defaultOptions, {
    autoFocus: true,
    name: "nameFirst",
    placeholder: showPlaceholder ? 'Tommy' : ''
  }))), __jsx$2y(FormLabel, {
    label: "Last name"
  }, __jsx$2y(FormField, _extends({}, defaultOptions, {
    name: "nameLast",
    placeholder: showPlaceholder ? 'Ryder' : ''
  }))), __jsx$2y(FormLabel, {
    label: "Email"
  }, __jsx$2y(FormField, _extends({}, defaultOptions, {
    autoFocus: true,
    name: "email",
    placeholder: showPlaceholder ? 'Email' : '',
    regExp: pattern$1
  }))), __jsx$2y(FormLabel, {
    label: "Password"
  }, __jsx$2y(FormField, _extends({}, defaultOptions, {
    name: "password",
    placeholder: showPlaceholder ? 'Password' : '',
    type: "password"
  }))), __jsx$2y(FormLabel, {
    label: "Repeat Password"
  }, __jsx$2y(FormField, _extends({}, defaultOptions, {
    name: "repeatPassword",
    placeholder: showPlaceholder ? 'Password' : '',
    type: "password"
  }))), birthday && renderBirthday(), passwordError && __jsx$2y(Alert, {
    content: passwordError.message,
    context: "warning"
  }), __jsx$2y(CheckboxField, _extends({}, defaultOptions, {
    data: CHECKBOX_TERMS,
    stacked: true
  })), __jsx$2y(Button, {
    align: "right",
    content: "Sign up",
    context: "primary",
    disabled: !formState.isValid,
    size: "lg",
    type: "submit"
  }), __jsx$2y(StyledLink$a, null, "Already have an account? ", __jsx$2y(Link, {
    to: pathLogin
  }, "Log in")));
};
var StyledLink$a = styled__default['default'].div.withConfig({
  displayName: "register__StyledLink",
  componentId: "zmjjk5-0"
})(["display:block;margin:1rem 0;"]);
Register.propTypes = {
  birthday: propTypes.bool,
  dayBirthday: propTypes.any,
  email: propTypes.string,
  errorSubmit: propTypes.bool,
  marketing: propTypes.bool,
  monthBirthday: propTypes.any,
  nameFirst: propTypes.string,
  nameLast: propTypes.string,
  password: propTypes.string,
  pathLogin: propTypes.string,
  repeatPassword: propTypes.string,
  showPlaceholder: propTypes.bool,
  submit: propTypes.func.isRequired,
  terms: propTypes.bool,
  yearBirthday: propTypes.any
};
Register.defaultProps = {
  birthday: false,
  pathLogin: '/account/login'
};

var __jsx$2z = React__default['default'].createElement;

var ArticleLayout = function ArticleLayout(_ref) {
  var children = _ref.children,
      frontMatter = _ref.frontMatter;
  // const meta = {
  //   canonical: `blog/${frontMatter.slug}`,
  //   description: frontMatter.description,
  //   title: frontMatter.title
  // }
  return __jsx$2z(Container, null, __jsx$2z(Row, null, __jsx$2z(Column, {
    md: 12
  }, __jsx$2z(Article, {
    article: frontMatter
  }))));
};

var __jsx$2A = React__default['default'].createElement;
var Bootstrap = function Bootstrap(_ref) {
  var brand = _ref.brand,
      children = _ref.children,
      copyright = _ref.copyright,
      footer = _ref.footer,
      fixed = _ref.fixed,
      icon = _ref.icon,
      Navigation = _ref.Navigation;
  return __jsx$2A(React__default['default'].Fragment, null, __jsx$2A(Navigation, null), children, footer && __jsx$2A(Footer, {
    columns: footer,
    fixed: fixed
  }), copyright && __jsx$2A(Copyright, {
    brand: brand,
    icon: icon,
    links: copyright
  }));
};
Bootstrap.propTypes = {
  brand: propTypes.string,
  children: propTypes.node.isRequired,
  copyright: propTypes.array,
  fixed: propTypes.bool,
  footer: propTypes.array,
  icon: propTypes.object,
  navigation: propTypes.func
};
Bootstrap.defaultProps = {
  fixed: false
};

var __jsx$2B = React__default['default'].createElement;

function ownKeys$e(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$e(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$e(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$e(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var Dashboard = function Dashboard(_ref) {
  var children = _ref.children,
      meta = _ref.meta,
      pageHeading = _ref.pageHeading,
      resultAlert = _ref.resultAlert,
      View = _ref.View;
  var context = resultAlert.context,
      message = resultAlert.message;
  var defaultMeta = {
    description: 'Admin',
    path: '/',
    title: 'Admin'
  };

  var mergedMeta = _objectSpread$e(_objectSpread$e({}, defaultMeta), meta);

  return __jsx$2B(React__default['default'].Fragment, null, __jsx$2B(React.Suspense, {
    fallback: __jsx$2B(PageLoading, {
      indicator: __jsx$2B(LdsSpinner, null)
    })
  }, __jsx$2B(React__default['default'].Fragment, null, __jsx$2B(Page, {
    children: View || children,
    fluid: true,
    meta: mergedMeta,
    pageHeading: pageHeading
  }), message && __jsx$2B(Alert, {
    content: message,
    context: context
  }))));
};
Dashboard.propTypes = {
  children: propTypes.node,
  meta: propTypes.shape({
    description: propTypes.string,
    path: propTypes.string,
    title: propTypes.string
  }),
  pageHeading: propTypes.object,
  resultAlert: propTypes.shape({
    context: propTypes.string,
    message: propTypes.string
  })
};
Dashboard.defaultProps = {
  resultAlert: {
    context: 'success',
    message: ''
  }
};

var __jsx$2C = React__default['default'].createElement;
var Page = function Page(_ref) {
  var children = _ref.children,
      fluid = _ref.fluid,
      meta = _ref.meta,
      pageHeading = _ref.pageHeading;

  var _useContext = React.useContext(ConfigContext),
      Brand = _useContext.Brand,
      Canonical = _useContext.Canonical;

  return __jsx$2C(StyledPage, null, meta && __jsx$2C(MetaHead, {
    canonical: Canonical,
    brand: Brand.name,
    meta: meta
  }), __jsx$2C(Container, {
    fluid: fluid
  }, pageHeading && __jsx$2C(PageHeading, pageHeading), children));
};
var StyledPage = styled__default['default'].div.withConfig({
  displayName: "page__StyledPage",
  componentId: "pyq7jv-0"
})(["background-color:", ";"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.PAGE.backGroundColour ? theme.PAGE.backGroundColour : theme.COLOUR.white;
});
Page.propTypes = {
  children: propTypes.node.isRequired,
  fluid: propTypes.bool,
  meta: propTypes.shape({
    description: propTypes.string,
    path: propTypes.string,
    title: propTypes.string
  }),
  pageHeading: propTypes.object
};
Page.defaultProps = {
  fluid: false
};

var __jsx$2D = React__default['default'].createElement;
var SidebarLayout = function SidebarLayout(_ref) {
  var brand = _ref.brand,
      children = _ref.children,
      copyright = _ref.copyright,
      footer = _ref.footer,
      Navigation = _ref.Navigation;

  var _useContext = React.useContext(ConfigContext),
      Sidebar = _useContext.Sidebar;

  return __jsx$2D(Container, {
    fluid: true
  }, __jsx$2D(Row, null, __jsx$2D(Column, {
    md: 2
  }, __jsx$2D(Sidebar, null)), __jsx$2D(Column, {
    md: 10,
    style: {
      padding: 0
    }
  }, __jsx$2D(Bootstrap, {
    brand: brand,
    copyright: copyright,
    footer: footer,
    Navigation: Navigation
  }, children))));
};
SidebarLayout.propTypes = {
  brand: propTypes.string,
  children: propTypes.node.isRequired,
  copyright: propTypes.array,
  footer: propTypes.array,
  navigation: propTypes.func
};

var __jsx$2E = React__default['default'].createElement;
var FacebookPagePlugin = function FacebookPagePlugin(_ref) {
  var appId = _ref.appId,
      iFrame = _ref.iFrame,
      adaptContainerWidth = _ref.adaptContainerWidth,
      height = _ref.height,
      hideCover = _ref.hideCover,
      hideCta = _ref.hideCta,
      showFacepile = _ref.showFacepile,
      smallHeader = _ref.smallHeader,
      tabs = _ref.tabs,
      to = _ref.to,
      width = _ref.width;
  return __jsx$2E(React__default['default'].Fragment, null, iFrame && __jsx$2E("iframe", {
    allow: "encrypted-media",
    frameBorder: "0",
    height: height,
    scrolling: "no",
    src: "https://www.facebook.com/plugins/page.php?href=".concat(to, "&tabs=").concat(tabs, "&width=").concat(width, "&height=").concat(height, "&small_header=").concat(smallHeader, "&adapt_container_width=").concat(adaptContainerWidth, "&hide_cover=").concat(hideCover, "&show_facepile=").concat(showFacepile, "&appId=").concat(appId),
    style: {
      border: 'none',
      overflow: 'hidden'
    },
    width: width
  }), !iFrame && __jsx$2E("div", {
    className: "fb-page",
    "data-adapt-container-width": "true",
    "data-height": "",
    "data-hide-cover": "false",
    "data-href": to,
    "data-layout": "button_count",
    "data-show-facepile": "true",
    "data-small-header": "false",
    "data-tabs": "timeline",
    "data-width": ""
  }, __jsx$2E("blockquote", {
    cite: "https://www.facebook.com/maitaidating/",
    className: "fb-xfbml-parse-ignore"
  }, __jsx$2E("a", {
    href: to
  }, "Mai Tai Dating"))));
};
FacebookPagePlugin.propTypes = {
  appId: propTypes.number.isRequired,
  adaptContainerWidth: propTypes.bool,
  height: propTypes.number,
  hideCover: propTypes.bool,
  hideCta: propTypes.bool,
  iFrame: propTypes.bool,
  showFacepile: propTypes.bool,
  smallHeader: propTypes.bool,
  tabs: propTypes.string,
  to: propTypes.string.isRequired,
  width: propTypes.number
};
FacebookPagePlugin.defaultProps = {
  adaptContainerWidth: true,
  height: 500,
  hideCover: false,
  hideCta: false,
  iFrame: true,
  showFacepile: true,
  smallHeader: true,
  tabs: 'timeline,messages,events',
  width: 340
};

var __jsx$2F = React__default['default'].createElement;
var FacebookShareButton = function FacebookShareButton(_ref) {
  var appId = _ref.appId,
      hashTag = _ref.hashTag,
      iFrame = _ref.iFrame,
      layout = _ref.layout,
      size = _ref.size,
      to = _ref.to;
  return __jsx$2F(React__default['default'].Fragment, null, iFrame && __jsx$2F("iframe", {
    allow: "encrypted-media",
    frameBorder: "0",
    height: "29",
    scrolling: "no",
    src: "https://www.facebook.com/plugins/share_button.php?href=".concat(to, "&layout=").concat(layout, "&size=").concat(size, "&appId=").concat(appId, "&width=104&height=30"),
    style: {
      border: 'none',
      overflow: 'hidden'
    },
    width: "104"
  }), !iFrame && __jsx$2F("div", {
    className: "fb-share-button",
    "data-hashtag": hashTag,
    "data-href": to,
    "data-layout": layout,
    "data-size": size
  }, __jsx$2F("a", {
    className: "fb-xfbml-parse-ignore",
    href: "https://www.facebook.com/sharer/sharer.php?u=".concat(to, "&src=sdkprepars"),
    rel: "noopener noreferrer",
    target: "_blank"
  }, ' ')));
};
FacebookShareButton.propTypes = {
  appId: propTypes.number.isRequired,
  hashTag: propTypes.string,
  iFrame: propTypes.bool,
  layout: propTypes.oneOf(['box_count', 'button', 'button_count', 'icon_link']),
  size: propTypes.oneOf(['large', 'small']),
  to: propTypes.string.isRequired
};
FacebookShareButton.defaultProps = {
  iFrame: true,
  layout: 'button',
  size: 'large'
};

var __jsx$2G = React__default['default'].createElement;
var Typeform = function Typeform(_ref) {
  var options = _ref.options,
      style = _ref.style,
      url = _ref.url;
  var typeformRef = React.useRef();
  React.useEffect(function () {
    var typeformEmbed = require('@typeform/embed'); // Load Typeform embed widget


    typeformEmbed.makeWidget(typeformRef.current, url, options);
  }, []);
  return __jsx$2G("div", {
    className: "ReactTypeformEmbed",
    ref: typeformRef,
    style: style
  });
};
Typeform.propTypes = {
  url: propTypes.string.isRequired,
  options: propTypes.shape({
    autoClose: propTypes.bool,
    autoOpen: propTypes.bool,
    buttonText: propTypes.string,
    hideHeaders: propTypes.bool,
    hideFooter: propTypes.bool,
    mode: propTypes.string,
    onSubmit: propTypes.func,
    opacity: propTypes.number,
    popup: propTypes.bool
  }),
  style: propTypes.object
}; // Default values taken from official Typeform docs
// https://developer.typeform.com/embed/modes/

Typeform.defaultProps = {
  url: '',
  options: {
    popup: false,
    hideHeaders: false,
    hideFooter: false,
    onSubmit: function onSubmit() {},
    // Widget options
    opacity: 100,
    buttonText: 'Start',
    // Popup options
    mode: 'popup',
    // options: "popup", "drawer_left", "drawer_right"
    autoOpen: false
  }
};

var __jsx$2H = React__default['default'].createElement;
var Article = function Article(_ref) {
  var article = _ref.article,
      config = _ref.config,
      facebook = _ref.facebook;
  return __jsx$2H(StyledArticle, {
    itemProp: "blogPost",
    itemScope: true,
    itemType: "http://schema.org/BlogPosting",
    role: "article"
  }, __jsx$2H("header", null, __jsx$2H(StyledImage$4, {
    alt: article.heading,
    slant: true,
    src: article.image || "/static/blog/".concat(article.slug, "/hero.jpg")
  }), __jsx$2H(Breadcrumb, {
    category: article.category,
    page: article.title,
    path: article.category
  }), config && __jsx$2H(BlogCategory, {
    config: config,
    to: article.category
  }), __jsx$2H(StyledHeading$4, {
    content: article.heading
  }), facebook && __jsx$2H(BlogDetails, {
    article: article,
    config: config,
    facebook: facebook
  })), __jsx$2H("span", {
    dangerouslySetInnerHTML: {
      __html: article.data
    }
  }));
};
var StyledArticle = styled__default['default'].article.withConfig({
  displayName: "article__StyledArticle",
  componentId: "ooxnmr-0"
})(["max-width:750px;margin:0 auto;position:relative;.article--instagram{display:grid;justify-items:center;}"]);
var StyledImage$4 = styled__default['default'](Image$1).withConfig({
  displayName: "article__StyledImage",
  componentId: "ooxnmr-1"
})(["position:relative;"]);
var StyledHeading$4 = styled__default['default'](Heading).withConfig({
  displayName: "article__StyledHeading",
  componentId: "ooxnmr-2"
})(["margin-bottom:1rem;"]);
Article.propTypes = {
  article: propTypes.object.isRequired,
  config: propTypes.object,
  facebook: propTypes.object
}; // li:before {
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
// h1 {
// line-height: 44px;
// margin: 20px 0;
// }
// h2 {
// line-height: 27px;
// margin: 20px 0;
// }
// h3 {
// line-height: 22px;
// margin: 20px 0;
// }
// .img-responsive {
// margin-bottom: 15px;
// }
// a {
// color: $brand-primary;
// &:hover {
// color: #bdbaba;
// }
// }
// p {
// margin-bottom: 20px;
// }
// ul {
// list-style: none;
// margin-bottom: 20px;
// padding-left: 25px;
// li {
// &::before {
// color: $brand-primary;
// content: '\002022';
// display: inline-block;
// width: 14px;
// }
// }
// }
// .table {
// tr {
// td {
// border-top: 0;
// padding: 0;
// }
// }
// p {
// margin: 0;
// }
// }
// }
// &--instagram {
// display: grid;
// justify-items: center;
// }
// // Media queries - Mobile Landscape
// @media only screen and (orientation: portrait) and (min-width: 320px) and (max-width: 767px) {
// // Image
// //------------------------------------------------------------------------//
// &__image {
// margin: 0 -15px;
// // Background slant
// &:after {
// height: 40px;
// }
// }
// }
// // Media queries - Mobile
// @media only screen and (min-width: 320px) and (max-width: 767px) {
// margin-bottom: 30px;
// margin-top: 171px;
// position: initial;
// &__image {
// margin: 0 -15px;
// }
// &.newsroom {
// margin-top: 0;
// }
// .embed-responsive {
// margin-left: -15px;
// margin-right: -15px;
// }
// &__breadcrumb {
// margin-left: -15px;
// margin-right: -15px;
// }
// }

var __jsx$2I = React__default['default'].createElement;
var Error404 = function Error404() {
  var meta = {
    description: "\n      DryKISS is a full service internet and mobile digital production house.\n      Our services span consulting, strategy; planning; development; testing\n      and analytics.\n    ",
    path: '/404',
    title: 'DryKISS develops hybrid mobile and responsive websites'
  };
  return __jsx$2I(Page, {
    heading: "404 ERROR PAGE \u2013 NOT FOUND",
    meta: meta
  }, __jsx$2I("p", null, "The page you were looking for no longer exists or never did. Please use the links at the top of your screen to get back in the game, or click here to go home and start again."));
};

var __jsx$2J = React__default['default'].createElement;
var BlogCard = function BlogCard(_ref) {
  var article = _ref.article,
      config = _ref.config,
      type = _ref.type;
  var author = article.author,
      category = article.category,
      excerpt = article.excerpt,
      heading = article.heading,
      slug = article.slug;
  var articleSlug = slugify(article.slug);
  var categorySlug = slugify(category);
  var articleLink = {
    as: "".concat(config.path, "/").concat(categorySlug, "/").concat(articleSlug),
    href: "".concat(config.path, "/[categoryId]/[articleId]")
  };
  return __jsx$2J("article", {
    role: "article",
    itemProp: "blogPost",
    itemScope: true,
    itemType: "http://schema.org/BlogPosting"
  }, __jsx$2J(Card, {
    shadow: true
  }, __jsx$2J(Link, {
    to: articleLink
  }, __jsx$2J(CardImage, {
    alt: heading,
    src: "/static/blog/".concat(slug, "/hero.jpg?v=1.00")
  })), __jsx$2J(StyledCardBody, {
    type: type
  }, type === 'normal' && __jsx$2J(BlogCategory, {
    config: config,
    to: category,
    type: type
  }), __jsx$2J(StyledContent$5, {
    type: type
  }, __jsx$2J(Link, {
    to: articleLink
  }, __jsx$2J(StyledHeading$5, {
    content: heading,
    tag: "h1",
    noWrap: true,
    type: type
  })), type === 'normal' && __jsx$2J("p", {
    itemProp: "description"
  }, excerpt)), type === 'normal' && __jsx$2J(React__default['default'].Fragment, null, article.tags && __jsx$2J(TagsContainer, null, __jsx$2J(BlogTags, {
    tags: article.tags
  })), __jsx$2J(Divider, {
    size: "sm"
  }), __jsx$2J(BlogCategory, {
    author: true,
    to: author,
    config: config,
    type: type
  }), __jsx$2J(StyledReadTime, null, article.readtime, "min read time.")), __jsx$2J(Link, {
    to: articleLink
  }, __jsx$2J(StyledButton$8, {
    content: "Read more",
    context: type === 'normal' ? 'primary' : 'white',
    size: type === 'normal' ? 'sm' : 'lg',
    position: type
  })))));
};
var TagsContainer = styled__default['default'].div.withConfig({
  displayName: "card__TagsContainer",
  componentId: "jk3gp-0"
})(["height:1.75rem;margin-top:0.25rem;overflow:hidden;"]);
var StyledButton$8 = styled__default['default'](Button).withConfig({
  displayName: "card__StyledButton",
  componentId: "jk3gp-1"
})(["bottom:1.25rem;position:absolute;right:1rem;z-index:2;", ""], function (_ref2) {
  var position = _ref2.position;
  return position === 'hero' && styled.css(["bottom:1.25rem;"]);
});
var StyledCardBody = styled__default['default'](CardBody).withConfig({
  displayName: "card__StyledCardBody",
  componentId: "jk3gp-2"
})(["min-height:303px;position:relative;z-index:0;", ""], function (_ref3) {
  var COLOUR = _ref3.theme.COLOUR,
      type = _ref3.type;
  return type === 'hero' && styled.css(["background-color:", ";min-height:80px;&:after{background:", ";content:'';display:block;height:120px;left:0;position:absolute;right:0;top:0;transform:skewy(6deg);transform-origin:100% 0;z-index:-1;}"], COLOUR.primary, COLOUR.primary);
});
var StyledContent$5 = styled__default['default'].div.withConfig({
  displayName: "card__StyledContent",
  componentId: "jk3gp-3"
})(["height:128px;margin-bottom:1rem;overflow:hidden;", ""], function (_ref4) {
  var type = _ref4.type;
  return type === 'hero' && styled.css(["height:122px;margin-bottom:0;"]);
});
var StyledHeading$5 = styled__default['default'](Heading).withConfig({
  displayName: "card__StyledHeading",
  componentId: "jk3gp-4"
})(["color:#000;font-size:1.25rem;line-height:1.25rem;margin-bottom:0;max-width:500px;overflow:hidden;position:relative;z-index:2;&:hover{color:", ";}", ""], function (_ref5) {
  var type = _ref5.type,
      COLOUR = _ref5.theme.COLOUR;
  return type === 'hero' ? COLOUR.light : COLOUR.drykiss_lightBlue;
}, function (_ref6) {
  var type = _ref6.type;
  return type === 'hero' && styled.css(["color:#fff;font-size:2rem;line-height:2rem;max-height:115px;"]);
});
var StyledReadTime = styled__default['default'].p.withConfig({
  displayName: "card__StyledReadTime",
  componentId: "jk3gp-5"
})(["font-size:0.75rem;margin:0;"]);
BlogCard.propTypes = {
  article: propTypes.any.isRequired,
  config: propTypes.object.isRequired,
  type: propTypes.string
};
BlogCard.defaultProps = {
  type: 'normal'
};

var __jsx$2K = React__default['default'].createElement;
var BlogCategories = function BlogCategories(_ref) {
  var articles = _ref.articles,
      config = _ref.config;

  var _uniqueCategories = function _uniqueCategories() {
    var uniqueCategories = _toConsumableArray(new Set(articles.map(function (article) {
      return article.category;
    })));

    return uniqueCategories;
  };

  var _find = function _find() {
    var categories = _uniqueCategories();

    return categories.map(function (category) {
      return articles.filter(function (article) {
        return article.category === category && article.homepage !== false;
      }).sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      }).slice(0, 2);
    });
  };

  return __jsx$2K("section", null, _find().map(function (articles, index) {
    return __jsx$2K(React.Fragment, {
      key: index
    }, __jsx$2K(Link, {
      to: {
        as: "".concat(config.path, "/").concat(slugify(articles[0].category)),
        href: {
          pathname: "".concat(config.path, "/category"),
          query: {
            category: slugify(articles[0].category)
          }
        }
      }
    }, __jsx$2K(StyledHeading$6, {
      content: articles[0].category,
      tag: "h2"
    })), __jsx$2K(Row, null, articles.map(function (article, index) {
      return __jsx$2K(Column, {
        key: index,
        md: 6
      }, __jsx$2K(BlogCard, {
        article: article,
        config: config
      }));
    })));
  }));
};
var StyledHeading$6 = styled__default['default'](Heading).withConfig({
  displayName: "categories__StyledHeading",
  componentId: "qxuayx-0"
})(["font-size:1.5rem;margin-top:2rem;text-align:center;&:hover{color:#00ccbc;}"]);
BlogCategories.propTypes = {
  articles: propTypes.any.isRequired,
  config: propTypes.object.isRequired
};

var __jsx$2L = React__default['default'].createElement;
var BlogCategory = function BlogCategory(_ref) {
  var author = _ref.author,
      config = _ref.config,
      className = _ref.className,
      style = _ref.style,
      to = _ref.to;
  return __jsx$2L(StyledCategory, {
    className: className,
    style: style
  }, __jsx$2L(Link, {
    to: {
      as: "".concat(config.path, "/").concat(slugify(to)),
      href: {
        pathname: author ? "".concat(config.path, "/author") : "".concat(config.path, "/category"),
        query: {
          author: slugify(to),
          category: slugify(to)
        }
      }
    },
    passHref: true
  }, to.toUpperCase().replace('-', ' ')));
};
var StyledCategory = styled__default['default'].div.withConfig({
  displayName: "category__StyledCategory",
  componentId: "sc-14v5wh4-0"
})(["display:inline;font-size:12px;margin-bottom:5px;position:relative;z-index:2;"]);
BlogCategory.propTypes = {
  author: propTypes.bool,
  className: propTypes.any,
  config: propTypes.object.isRequired,
  style: propTypes.any,
  to: propTypes.string.isRequired
};

var __jsx$2M = React__default['default'].createElement;
var BlogDetails = function BlogDetails(_ref) {
  var article = _ref.article,
      config = _ref.config,
      facebook = _ref.facebook;
  return __jsx$2M(StyledArticleDetails, null, __jsx$2M(Divider, {
    size: "sm"
  }), __jsx$2M(List, {
    inline: true,
    unstyled: true,
    style: {
      marginTop: '.25rem'
    }
  }, __jsx$2M(ListItem, {
    style: {
      marginRight: '1rem'
    }
  }, __jsx$2M(StyledIcon$9, {
    context: "dark",
    icon: "calendar-alt"
  }), __jsx$2M(Date$1, {
    date: article.date
  })), __jsx$2M(ListItem, {
    style: {
      marginRight: '1rem'
    }
  }, __jsx$2M(StyledIcon$9, {
    context: "dark",
    icon: "user"
  }), __jsx$2M(BlogCategory, {
    author: true,
    config: config,
    to: article.author
  })), __jsx$2M(ListItem, {
    style: {
      marginRight: '1rem'
    }
  }, __jsx$2M(StyledIcon$9, {
    context: "dark",
    icon: "stopwatch"
  }), __jsx$2M(BlogReadTime, {
    time: article.readtime
  }))), article.tags && __jsx$2M(BlogTags, {
    tags: article.tags
  }), __jsx$2M(Divider, {
    size: "sm"
  }), __jsx$2M(StyledShare, null, __jsx$2M(StyledShareText, null, "Share this article"), __jsx$2M(FacebookShareButton, {
    appId: facebook.appId,
    hashTag: facebook.hashTag,
    iFrame: true,
    to: "".concat(facebook.domain).concat(config.path, "/").concat(slugify(article.category), "/").concat(article.slug)
  })), __jsx$2M(Divider, {
    size: "sm"
  }));
};
var StyledArticleDetails = styled__default['default'].div.withConfig({
  displayName: "details__StyledArticleDetails",
  componentId: "sc-15a4gif-0"
})(["font-size:0.875rem;"]);
var StyledIcon$9 = styled__default['default'](Icon).withConfig({
  displayName: "details__StyledIcon",
  componentId: "sc-15a4gif-1"
})(["margin-right:0.25rem;"]);
var StyledShare = styled__default['default'].div.withConfig({
  displayName: "details__StyledShare",
  componentId: "sc-15a4gif-2"
})(["align-items:center;display:flex;"]);
var StyledShareText = styled__default['default'].span.withConfig({
  displayName: "details__StyledShareText",
  componentId: "sc-15a4gif-3"
})(["margin-right:1rem;"]); // const StyledShareLink = styled.a`
//   color: #00ccbc;
//   font-size: 2rem;
//   line-height: 1rem;
//   margin-right: .5rem;
//   text-decoration: none;
// `

BlogDetails.propTypes = {
  article: propTypes.object.isRequired,
  config: propTypes.object.isRequired,
  facebook: propTypes.object
};

var __jsx$2N = React__default['default'].createElement;
var BlogHero = function BlogHero(_ref) {
  var articles = _ref.articles,
      config = _ref.config,
      number = _ref.number;

  var _find = function _find() {
    return articles.find(function (article) {
      return article.hero === true;
    });
  };

  var renderHero = function renderHero() {
    var article = _find();

    return __jsx$2N(Column, {
      md: 12 / number
    }, __jsx$2N(BlogCard, {
      article: article,
      config: config,
      type: "hero"
    }));
  };

  return __jsx$2N(Row, null, renderHero());
};
BlogHero.propTypes = {
  articles: propTypes.any.isRequired,
  config: propTypes.object.isRequired,
  number: propTypes.number
};
BlogHero.defaultProps = {
  number: 1
};

var __jsx$2O = React__default['default'].createElement;
var BlogListing = function BlogListing(_ref) {
  var articles = _ref.articles,
      author = _ref.author,
      category = _ref.category,
      config = _ref.config,
      tag = _ref.tag;

  var _findTag = function _findTag(articles) {
    return _filter__default['default'](articles, {
      tags: [tag]
    });
  };

  var _findArticle = function _findArticle(articles) {
    return articles.filter(function (article) {
      return slugify(category ? article.category : article.author) === (category || author) && article.homepage !== false && article.published;
    });
  };

  var _find = function _find() {
    var _findMe = tag ? _findTag(articles) : _findArticle(articles);

    return _findMe.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    }).slice(0, 10);
  };

  return __jsx$2O(Row, null, _find().map(function (article, index) {
    return __jsx$2O(Column, {
      key: index,
      md: 6
    }, __jsx$2O(BlogCard, {
      article: article,
      config: config
    }));
  }));
};
BlogListing.propTypes = {
  articles: propTypes.any.isRequired,
  author: propTypes.string,
  category: propTypes.string,
  config: propTypes.object,
  tag: propTypes.string
};

var __jsx$2P = React__default['default'].createElement;
var BlogReadTime = function BlogReadTime(_ref) {
  var time = _ref.time;
  return __jsx$2P("span", null, "Read time: ", time, " min(s)");
};
BlogReadTime.propTypes = {
  time: propTypes.number.isRequired
};

var __jsx$2Q = React__default['default'].createElement;
var BlogList = function BlogList(_ref) {
  var author = _ref.author,
      config = _ref.config,
      list = _ref.list;
  return __jsx$2Q(StyledDl, null, list.map(function (_ref2, index) {
    var badge = _ref2.badge,
        _ref2$category = _ref2.category,
        category = _ref2$category === void 0 ? '' : _ref2$category,
        name = _ref2.name,
        to = _ref2.to;
    return __jsx$2Q(React.Fragment, {
      key: index
    }, __jsx$2Q(StyledDt, null, __jsx$2Q(Badge, {
      content: badge
    })), __jsx$2Q(StyledDd, null, __jsx$2Q(Link, {
      to: {
        as: "".concat(config.path, "/").concat(category && slugify(category) + '/').concat(slugify(to)),
        href: {
          pathname: author ? "".concat(config.path, "/author") : "".concat(config.path, "/article"),
          query: {
            articleSlug: slugify(to),
            author: slugify(to),
            category: category && slugify(category)
          }
        }
      },
      passHref: true
    }, __jsx$2Q(StyledA$1, null, name))));
  }));
};
var StyledDl = styled__default['default'].dl.withConfig({
  displayName: "list__StyledDl",
  componentId: "a6obyo-0"
})(["display:flex;flex-wrap:wrap;margin:0 -15px;"]);
var StyledDt = styled__default['default'].dt.withConfig({
  displayName: "list__StyledDt",
  componentId: "a6obyo-1"
})(["flex:0 0 25%;max-width:25%;position:relative;width:100%;min-height:1px;padding:0 1rem;"]);
var StyledDd = styled__default['default'].dd.withConfig({
  displayName: "list__StyledDd",
  componentId: "a6obyo-2"
})(["flex:0 0 75%;max-width:75%;position:relative;margin-left:0;min-height:1px;padding:0.2rem 1rem 0 1rem;width:100%;"]);
var StyledA$1 = styled__default['default'].span.withConfig({
  displayName: "list__StyledA",
  componentId: "a6obyo-3"
})(["", ""], function (props) {
  return Truncate();
});
BlogList.propTypes = {
  author: propTypes.bool,
  config: propTypes.object.isRequired,
  list: propTypes.array.isRequired
};
BlogList.defaultProps = {
  author: false
};

var __jsx$2R = React__default['default'].createElement;
var BlogSection = function BlogSection(_ref) {
  var children = _ref.children,
      heading = _ref.heading;
  return __jsx$2R(StyledSection, null, heading && __jsx$2R(React__default['default'].Fragment, null, __jsx$2R(StyledHeading$7, {
    content: heading,
    context: "primary",
    noMargin: true,
    tag: "h3"
  }), __jsx$2R(Divider, {
    size: "sm"
  })), children);
};
var StyledSection = styled__default['default'].dl.withConfig({
  displayName: "section__StyledSection",
  componentId: "sc-13a5bvc-0"
})(["margin-top:0;margin-bottom:1rem;"]);
var StyledHeading$7 = styled__default['default'](Heading).withConfig({
  displayName: "section__StyledHeading",
  componentId: "sc-13a5bvc-1"
})(["font-size:1.25rem;"]);
BlogSection.propTypes = {
  children: propTypes.node.isRequired,
  heading: propTypes.string
};

var __jsx$2S = React__default['default'].createElement;
var BlogArchive = function BlogArchive(_ref) {
  var articles = _ref.articles,
      config = _ref.config,
      total = _ref.total;

  var _useState = React.useState([]),
      list = _useState[0],
      setList = _useState[1];

  React.useEffect(function () {
    setList(_find());
  }, []);

  var _find = function _find() {
    var counts = articles.filter(function (article) {
      return article.category !== 'terms' && article.homepage !== false;
    }).reduce(function (p, c) {
      var year = formatIntDateYear(new Date(c.date));

      if (!Object.prototype.hasOwnProperty.call(p, year)) {
        p[year] = 0;
      }

      p[year]++;
      return p;
    }, {});
    var countsMapped = Object.keys(counts).map(function (k) {
      return {
        badge: k,
        name: counts[k],
        to: "archive/".concat(k)
      };
    }).reverse();
    return countsMapped;
  };

  return __jsx$2S(BlogSection, {
    heading: "Archive"
  }, __jsx$2S(BlogList, {
    config: config,
    list: list
  }));
};
BlogArchive.propTypes = {
  articles: propTypes.array.isRequired,
  config: propTypes.object.isRequired,
  total: propTypes.number
};
BlogArchive.defaultProps = {
  total: 5
};

var __jsx$2T = React__default['default'].createElement;
var BlogAuthor = function BlogAuthor(_ref) {
  var articles = _ref.articles,
      config = _ref.config,
      total = _ref.total;

  var _useState = React.useState([]),
      list = _useState[0],
      setList = _useState[1];

  React.useEffect(function () {
    setList(_find());
  }, []);

  var _find = function _find() {
    var counts = articles.filter(function (article) {
      return article.category !== 'terms' && article.homepage !== false;
    }).reduce(function (p, c) {
      var author = c.author;

      if (!Object.prototype.hasOwnProperty.call(p, author)) {
        p[author] = 0;
      }

      p[author]++;
      return p;
    }, {});
    var countsMapped = Object.keys(counts).filter(function (article, v) {
      return article !== 'undefined';
    }).map(function (k) {
      return {
        badge: k,
        name: counts[k],
        to: "".concat(slugify(k))
      };
    });
    return countsMapped;
  };

  return __jsx$2T(BlogSection, {
    heading: "Author"
  }, __jsx$2T(BlogList, {
    config: config,
    author: true,
    list: list
  }));
};
BlogAuthor.propTypes = {
  articles: propTypes.array.isRequired,
  config: propTypes.object.isRequired,
  total: propTypes.number
};
BlogAuthor.defaultProps = {
  total: 5
};

var __jsx$2U = React__default['default'].createElement;
var schema = yup.object().shape({
  postCode: yup.string().required().test('is-valid', "We couldn't recognise that postcode - check and try again.", function (value) {
    return validatorPostCode(value);
  })
});
var BlogFindFood = function BlogFindFood(_ref) {
  var colour = _ref.colour;

  var _useForm = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit'
  }),
      errors = _useForm.errors,
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register;

  var _useState = React.useState(false),
      msg = _useState[0],
      setMsg = _useState[1];

  var url = 'https://chat.drykiss.com/api/httpsDeliverooRestaurants';
  var domain = 'deliveroo.co.uk';

  var submit = function submit(data) {
    // Fetch restaurant service
    window.fetch("".concat(url, "/").concat(domain, "/").concat(data.postCode)).then(function (response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      return response.json();
    }).then(function (res) {
      window.open("https://".concat(domain).concat(res.url), '_self');
    })["catch"](function (error) {
      setMsg("We don\u2019t deliver there yet: ".concat(error.message));
    });
  };

  return __jsx$2U(BlogSection, null, __jsx$2U(StyledContainer$a, {
    colour: colour
  }, __jsx$2U(StyledForm$2, {
    handleSubmit: handleSubmit(submit)
  }, __jsx$2U(FormLabel, {
    text: "Your favourite restaurants, delivered."
  }, __jsx$2U(InputGroup, null, __jsx$2U(FormField, {
    errors: errors,
    register: register,
    name: "postCode",
    placeholder: "Enter your postcode"
  }), __jsx$2U(InputGroupAddon, null, __jsx$2U(Button, {
    content: "Find food",
    style: {
      background: '#440063',
      borderColor: '#32004a'
    },
    type: "submit"
  })), errors.postCode && __jsx$2U(FormError, {
    message: errors.postCode.message
  }), msg && __jsx$2U("div", {
    style: {
      color: '#fff'
    }
  }, msg)))), __jsx$2U(Link, {
    to: "https://".concat(domain),
    passHref: true,
    target: "_blank"
  }, __jsx$2U(StyledA$2, null, "Deliveroo ", __jsx$2U(Icon, {
    icon: "external-link"
  })))));
};
var StyledContainer$a = styled__default['default'].div.withConfig({
  displayName: "findFood__StyledContainer",
  componentId: "geadxj-0"
})(["background-color:", ";color:#fff;line-height:22px;margin:0 -10px;padding:30px 15px 20px;"], function (props) {
  return props.colour === 'beetroot' ? '#e2004f' : '#4e0064';
});
var StyledForm$2 = styled__default['default'](Form).withConfig({
  displayName: "findFood__StyledForm",
  componentId: "geadxj-1"
})([".Form-label{font-size:2rem;line-height:2rem;margin-bottom:1.5rem;}"]);
var StyledA$2 = styled__default['default'].span.withConfig({
  displayName: "findFood__StyledA",
  componentId: "geadxj-2"
})(["color:#fff;display:block;font-size:0.75rem;text-align:right;&:hover,&:focus{color:#bdbaba;}"]);
BlogFindFood.propTypes = {
  colour: propTypes.oneOf(['beetroot', 'aubergine'])
};
BlogFindFood.defaultProps = {
  colour: 'beetroot'
}; // <%# FIND FOOD - uses AutocompleteController %>
// <section data-mapkey="<%= data.google.api %>" class="find-food" ng-controller="AutocompleteController as autocomplete">
//     <%# Google autocomplete %>
//     <%= partial 'partials/social/google/autocomplete.erb', locals: {
//       country: t(:'findFood.country'),
//       button: true} %>
//     <%# Modal body %>
//     <% body = capture_html do %>
//       <p><%= t(:'findFood.modal.pin') %></p>
//       <%# Google automcomplete %>
//       <%= partial 'partials/social/google/autocomplete.erb', locals: {
//         extraClass: 'sr-only',
//         country: t(:'findFood.country'),
//         button: false
//       } %>
//       <div class="embed-responsive embed-responsive-16by9">
//         <div class="google-map embed-responsive-item"></div>
//       </div>
//     <% end %>
//     <%# Modal footer %>
//     <% footer = capture_html do %>
//       <div class="pull-left">
//         <%= partial 'partials/atom/button.erb', locals: {
//           buttonSize: 'lg',
//           text: :'findFood.modal.cancel',
//           data: {dismiss: 'modal'}
//         } %>
//       </div>
//       <%= partial 'partials/atom/button.erb', locals: {
//         buttonSize: 'lg',
//         context: 'primary',
//         text: :'findFood.modal.confirm',
//         ng: { click: "autocomplete.modalConfirm('#{t(:'findFood.url')}')" }
//       } %>
//     <% end %>
//     <%# Map Modal %>
//     <%= partial 'partials/molecule/modal.erb', locals: {
//       body: body,
//       footer: footer,
//       id: 'placesModal',
//       title: :'findFood.modal.title'
//     } %>
//   </div>
// </section>
// &.affix {
//   position: fixed;
//   top: 60px;
//   width: 360px;
// }
// &.affix-bottom {
//   position: absolute;
//   width: 360px;
// }
// .modal-header {
//   background-color: $brand-primary;
//   padding: 30px;
//   text-align: center;
//   h4 {
//     color: #fff;
//     font-size: 24px;
//   }
//   .close {
//     line-height: 34px;
//     margin: 0;
//     opacity: 0.5;
//   }
// }
// .modal-body {
//   color: #000;
//   padding: 15px 0;
//   p {
//     color: #575b5b;
//     text-align: center;
//   }
// }
// &__error {
//   background-color: #b5ea44;
//   color: #3e3e3e;
//   font-size: 13px;
//   line-height: 16px;
//   p {
//     margin: 0;
//     padding: 10px 15px;
//   }
// }
// @media only screen and (min-width: 320px) and (max-width: 992px) {
//   &__position {
//     left: 0;
//     padding: 15px 25px;
//     position: fixed;
//     top: 60px;
//     z-index: 1000;
//   }
//   label {
//     font-size: 20px;
//     line-height: 20px;
//     margin-bottom: 20px;
//     width: 90%;
//   }
// }
// }

var __jsx$2V = React__default['default'].createElement;
var BlogMedia = function BlogMedia(_ref) {
  var config = _ref.config,
      media = _ref.media;
  return __jsx$2V(BlogSection, {
    heading: "Media"
  }, __jsx$2V(BlogList, {
    config: config,
    list: media
  }));
};
BlogMedia.propTypes = {
  config: propTypes.object.isRequired,
  media: propTypes.array.isRequired
};

var __jsx$2W = React__default['default'].createElement;
var BlogPromo = function BlogPromo(_ref) {
  var src = _ref.src,
      to = _ref.to;
  return __jsx$2W(BlogSection, {
    heading: "Promo"
  }, __jsx$2W(Image$1, {
    alt: "Image",
    src: src
  }));
};
BlogPromo.propTypes = {
  src: propTypes.string.isRequired,
  to: propTypes.string.isRequired
};

var __jsx$2X = React__default['default'].createElement;
var BlogRecent = function BlogRecent(_ref) {
  var articles = _ref.articles,
      config = _ref.config,
      total = _ref.total;

  var _useState = React.useState([]),
      list = _useState[0],
      setList = _useState[1];

  React.useEffect(function () {
    setList(_find());
  }, []);

  var _find = function _find() {
    return articles.filter(function (article) {
      return article.category !== 'terms' && article.homepage !== false;
    }).sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    }).slice(0, total).map(function (opt) {
      return {
        badge: formatIntDateShort(new Date(opt.date)),
        category: opt.category,
        name: opt.heading,
        to: opt.slug
      };
    });
  };

  return __jsx$2X(BlogSection, {
    heading: "Recent"
  }, __jsx$2X(BlogList, {
    config: config,
    list: list
  }));
};
BlogRecent.propTypes = {
  articles: propTypes.array.isRequired,
  config: propTypes.object.isRequired,
  total: propTypes.number
};
BlogRecent.defaultProps = {
  total: 5
};

var __jsx$2Y = React__default['default'].createElement;
var BlogSidebar = function BlogSidebar(_ref) {
  var articles = _ref.articles,
      config = _ref.config,
      facebook = _ref.facebook,
      findFood = _ref.findFood,
      media = _ref.media,
      promo = _ref.promo,
      tags = _ref.tags;
  return __jsx$2Y(StyledAside$1, null, findFood && __jsx$2Y(BlogFindFood, null), media && __jsx$2Y(BlogMedia, {
    media: media
  }), __jsx$2Y(BlogSocial, {
    facebook: facebook
  }), promo && __jsx$2Y(BlogPromo, {
    src: promo.src,
    to: promo.to
  }), __jsx$2Y(BlogRecent, {
    articles: articles,
    config: config
  }), tags && __jsx$2Y(BlogTagCloud, {
    articles: articles
  }), __jsx$2Y(BlogArchive, {
    articles: articles,
    config: config
  }), __jsx$2Y(BlogAuthor, {
    articles: articles,
    config: config
  }));
};
var StyledAside$1 = styled__default['default'].aside.withConfig({
  displayName: "sidebar__StyledAside",
  componentId: "jmtdl8-0"
})(["border-left:1px solid #797878;height:100%;padding-left:10px;"]);
BlogSidebar.propTypes = {
  articles: propTypes.array.isRequired,
  config: propTypes.object.isRequired,
  facebook: propTypes.object,
  findFood: propTypes.bool,
  media: propTypes.array,
  promo: propTypes.array,
  tags: propTypes.array
};
BlogSidebar.defaultProps = {
  findFood: false
};

var __jsx$2Z = React__default['default'].createElement;
var BlogSocial = function BlogSocial(_ref) {
  var facebook = _ref.facebook,
      instagram = _ref.instagram,
      twitter = _ref.twitter;
  return __jsx$2Z(React__default['default'].Fragment, null, facebook && __jsx$2Z(BlogSection, {
    heading: "Facebook"
  }, __jsx$2Z(FacebookPagePlugin, {
    appId: facebook.appId,
    to: facebook.appPath,
    width: 349
  })), instagram && __jsx$2Z(BlogSection, {
    heading: "Instagram"
  }, __jsx$2Z("iframe", {
    src: "https://lightwidget.com/widgets/ff03b23658a55244989ab894695973f9.html",
    scrolling: "no",
    style: {
      width: '100%',
      border: '0',
      overflow: 'hidden'
    }
  })), twitter && __jsx$2Z(BlogSection, {
    heading: "Twitter"
  }));
};
BlogSocial.propTypes = {
  facebook: propTypes.object,
  instagram: propTypes.bool,
  twitter: propTypes.bool
};
BlogSocial.defaultProps = {
  instagram: false,
  twitter: false
};

var __jsx$2_ = React__default['default'].createElement;

function _createForOfIteratorHelper$1(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$2(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$2(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$2(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen); }

function _arrayLikeToArray$2(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var BlogTagCloud = function BlogTagCloud(_ref) {
  var articles = _ref.articles,
      total = _ref.total;

  var _useState = React.useState([]),
      cloud = _useState[0],
      setCloud = _useState[1];

  React.useEffect(function () {
    setCloud(_find());
  }, []);

  var _find = function _find() {
    var tagArray = [];
    articles.map(function (_ref2) {
      var tags = _ref2.tags;

      if (!tags) {
        return [];
      }

      var _iterator = _createForOfIteratorHelper$1(tags),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var tag = _step.value;
          tagArray.push(slugify(tag));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }); // const tagsCounted = countBy(tagArray)
    // Sort
    // const tagsSorted = Object
    //   .entries(tagsCounted)
    //   .sort((a, b) => { return tagsCounted[b] - tagsCounted[a] })
    //   // .map(key => {
    //   //   key
    //   // })
    // newO[key] = list[key]
    // return countBy(tagArray)
    // .filter((article) => {
    //   return (article.category !== 'terms' && article.homepage !== false)
    // })
    // .sort((a, b) => {
    //   return new Date(b.date) - new Date(a.date)
    // })
    // .slice(0, total)
    // .map((opt) => ({
    //   tag: 'Deliveroo',
    //   count: 10
    // }))
  }; // const data = [
  //   { value: 'JavaScript', count: 38 },
  //   { value: 'React', count: 30 },
  //   { value: 'Nodejs', count: 28 },
  //   { value: 'Express.js', count: 25 },
  //   { value: 'HTML5', count: 33 },
  //   { value: 'MongoDB', count: 18 },
  //   { value: 'CSS3', count: 20 }
  // ]


  return __jsx$2_(BlogSection, {
    heading: "Tags"
  }, cloud);
};
BlogTagCloud.propTypes = {
  articles: propTypes.array.isRequired,
  total: propTypes.number
};
BlogTagCloud.defaultProps = {
  total: 5
}; // .#{ $module } {
//   clear: both;
//   margin-bottom: 19px;
//   // Label
//   //--------------------------------------------------------------------------//
//   .label {
//     border-radius: 0;
//     display: inline-block;
//     line-height: 140%;
//     &:hover {
//       background-color: #CAC7C7;
//       color: #000;
//     }
//   }
//   // Tag
//   //--------------------------------------------------------------------------//
//   &__tag {
//     margin-bottom: 4px;
//     margin-right: 5px;
//     vertical-align: baseline;
//   }
// <%
// sizeMin = 80
// sizeMax = 200
// precision = 0
// unit = '%'
// threshold = locals[:threshold] || 1
// total = 20
// %>
// <%# Tag map %>
// <% tagMap = blog(blog).tags.map do |tag, articles| %>
//   <% [tag, articles.count] if articles.count >= threshold %>
// <% end %>
// <% tagMap = tagMap.compact.sort_by{|k, v| v}.reverse[0...total] %>
// <%# Shuffling the tags means a complete re-write each time %>
// <%# tagMap = tagMap.compact.sort_by{ | k, v | v }.reverse[ 0...total ].shuffle %>
// <% min, max = tagMap.map( &:last ).minmax %>
// <section class="tag-cloud">
//   <div class="tag-cloud__tags">
//     <% tagMap.each do |tag, count| %>
//       <% weight = (Math.log(count) - Math.log(min)) / (Math.log(max) - Math.log(min)) %>
//       <% fontSize = sprintf("%.#{precision}f", sizeMin + ((sizeMax - sizeMin) * weight).to_f) %>
//       <% link_to(tag_path(tag, blog), class: 'tag-cloud__tag label label-info', style: "font-size: #{fontSize}#{unit}") do %>
//         <%= tag %>
//       <% end %>
//     <% end %>
//   </div>
// </section>

var __jsx$2$ = React__default['default'].createElement;
var BlogTags = function BlogTags(_ref) {
  var className = _ref.className,
      style = _ref.style,
      tags = _ref.tags;

  var tagMap = function tagMap() {
    var tagsSlugged = tags.map(function (tag, index) {
      return slugify(tag);
    });

    var tagsUnique = _toConsumableArray(new Set(tagsSlugged));

    return tagsUnique.map(function (tag, index) {
      return __jsx$2$(Badge, {
        className: className,
        content: tag,
        key: "".concat(tag, "_").concat(index),
        style: style,
        to: "/blog/tag/".concat(tag)
      });
    });
  };

  return __jsx$2$("div", null, tagMap());
};
BlogTags.propTypes = {
  tags: propTypes.array.isRequired
};

var Api = function Api() {
  var _useContext = React.useContext(ConfigContext),
      apiConfig = _useContext.apiConfig;

  return {
    init: function init() {
      var mocker = {};
      var bearerToken = window.localStorage.getItem('bearerToken');

      if (bearerToken) {
        apiConfig.headers.Authorization = 'Bearer ' + bearerToken;
      }

      var http = axios__default['default'].create(apiConfig);
      mocker.apply(http);
      return http;
    },
    get: function () {
      var _get = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(url, params) {
        var http;
        return regenerator.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                http = Api.init();
                return _context.abrupt("return", http.get(url, {
                  params: params
                }));

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function get(_x, _x2) {
        return _get.apply(this, arguments);
      }

      return get;
    }(),
    post: function () {
      var _post = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2(url, data) {
        var http;
        return regenerator.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                http = Api.init();
                return _context2.abrupt("return", http.post(url, data));

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function post(_x3, _x4) {
        return _post.apply(this, arguments);
      }

      return post;
    }(),
    put: function () {
      var _put = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee3(url, data) {
        var http;
        return regenerator.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                http = Api.init();
                return _context3.abrupt("return", http.put(url, data));

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function put(_x5, _x6) {
        return _put.apply(this, arguments);
      }

      return put;
    }(),
    "delete": function () {
      var _delete2 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee4(url) {
        var http;
        return regenerator.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                http = Api.init();
                return _context4.abrupt("return", http["delete"](url));

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function _delete(_x7) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  };
};

/**
 * Services - Authentication - Hooks - Use User
 * Wraps a page with the ability to provide user data
 */
var UserContext = /*#__PURE__*/React.createContext();

var __jsx$30 = React__default['default'].createElement;
var UserProvider = function UserProvider(_ref) {
  var children = _ref.children;

  var _useState = React.useState(null),
      accessToken = _useState[0],
      setAccessToken = _useState[1];

  var _useState2 = React.useState(null),
      user = _useState2[0],
      setUser = _useState2[1];

  var _useState3 = React.useState(true),
      isLoading = _useState3[0],
      setIsLoading = _useState3[1];

  var _useContext = React.useContext(ConfigContext),
      apiConfig = _useContext.apiConfig,
      jwtConfig = _useContext.jwtConfig;

  React.useEffect(function () {
    var bearerToken = window.localStorage.getItem('bearerToken');

    if (bearerToken) {
      try {
        var tokenData = validateToken(bearerToken, jwtConfig);

        if (tokenData.user) {
          setUser(tokenData.user);
        }
      } catch (e) {
        // Invalid token
        window.localStorage.removeItem('bearerToken');
        setAccessToken(null);
        setUser(null);
      }

      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, []);

  var signIn = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(provider, username, password, callback) {
      var user, token, _yield$axios$post, data, tokenData, error, isAuthed;

      return regenerator.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__default['default'].post("".concat(apiConfig.authURL, "/login"), {
                email: username,
                password: password
              });

            case 3:
              _yield$axios$post = _context.sent;
              data = _yield$axios$post.data;
              token = data.token;
              tokenData = decodeToken(token);
              user = tokenData.user;
              _context.next = 14;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              error = _context.t0.response.data.error;
              callback(new Error(error));

            case 14:
              isAuthed = user && token;

              if (isAuthed) {
                setUser(user);
                window.localStorage.setItem('bearerToken', token);
                setAccessToken(token);
                Router__default['default'].push('/dashboard');
              }

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));

    return function signIn(_x, _x2, _x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();

  var registerContext = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2(nameFirst, nameLast, email, password, marketing, birthday, callback) {
      var user, token, _yield$axios$post2, data, tokenData, error, isAuthed;

      return regenerator.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return axios__default['default'].post("".concat(apiConfig.authURL, "/register"), {
                nameFirst: nameFirst,
                nameLast: nameLast,
                email: email,
                password: password,
                marketing: marketing,
                birthday: birthday
              });

            case 3:
              _yield$axios$post2 = _context2.sent;
              data = _yield$axios$post2.data;
              token = data.token;
              tokenData = decodeToken(token);
              user = tokenData.user;
              _context2.next = 14;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](0);
              error = _context2.t0.response.data.error;
              callback(new Error(error));

            case 14:
              isAuthed = user && token;

              if (isAuthed) {
                setUser(user);
                window.localStorage.setItem('bearerToken', token);
                setAccessToken(token);
                Router__default['default'].push('/dashboard');
              }

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 10]]);
    }));

    return function registerContext(_x5, _x6, _x7, _x8, _x9, _x10, _x11) {
      return _ref3.apply(this, arguments);
    };
  }();

  var signOut = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee3() {
      return regenerator.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              window.localStorage.removeItem('bearerToken');
              window.localStorage.removeItem('active-notifications');
              setAccessToken(null);
              setUser(null);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function signOut() {
      return _ref4.apply(this, arguments);
    };
  }();

  var hashPassword = function hashPassword(password) {
    return bcrypt__default['default'].hashSync(password, 10);
  }; // TODO - remove after converting all pages to new user roles


  var authorise = function authorise(condition) {
    if (!condition(user)) {
      Router__default['default'].push('/account/sign-in');
      return false;
    }

    return true;
  };

  return !isLoading && __jsx$30(UserContext.Provider, {
    value: {
      accessToken: accessToken,
      authorise: authorise,
      hashPassword: hashPassword,
      signIn: signIn,
      registerContext: registerContext,
      signOut: signOut,
      user: user
    }
  }, children);
};

/**
 * Services - Authorization
 *
 */
var AuthorizationContext = /*#__PURE__*/React.createContext();

var __jsx$31 = React__default['default'].createElement;
var AuthorizationProvider = function AuthorizationProvider(_ref) {
  var children = _ref.children;

  var _useState = React.useState(true),
      isLoading = _useState[0],
      setIsLoading = _useState[1];

  var _useContext = React.useContext(UserContext),
      user = _useContext.user;

  var router = Router.useRouter();

  var _useContext2 = React.useContext(ConfigContext),
      AccessPages = _useContext2.AccessPages,
      AccessRules = _useContext2.AccessRules;

  var permissions = user && user.role ? AccessRules[user.role] : []; // Check if the user is allowed page access

  React.useEffect(function () {
    if (router.pathname !== '/403') {
      if (!AccessPages[router.pathname]) {
        // Allow access to non-protected page
        setIsLoading(false);
      } else if (user && AccessPages[router.pathname] && AccessPages[router.pathname].includes(user.role)) {
        // Allow access to protected page when role is assigned
        setIsLoading(false);
      } else {
        // Not authorized, redirect to /403 page
        Router__default['default'].push('/403');
      }
    } else {
      setIsLoading(false);
    }
  }, [router.pathname]);

  var hasAccess = function hasAccess(rule) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (typeof permissions[rule] === 'boolean') {
      return permissions[rule];
    } else if (typeof permissions[rule] === 'function') {
      options.userId = user && user.id ? user.id : null;
      return permissions[rule](options);
    } else {
      return false;
    }
  };

  var checkRole = function checkRole(role) {
    // check
    var _role$split = role.split('_'),
        _role$split2 = _slicedToArray(_role$split, 2),
        type = _role$split2[0],
        subtype = _role$split2[1];

    if (subtype) {
      switch (subtype) {
        case 'owner':
          return user.role === type + '_owner';

        case 'manager':
          return user.role === type + '_owner' || user.role === type + '_manager';

        case 'user':
          return user.role.startsWith(type);

        default:
          return false;
      }
    } else {
      return user.role.startsWith(type);
    }
  };

  var hasRole = function hasRole(role) {
    if (user && user.role) {
      if (Array.isArray(role)) {
        return role.some(checkRole);
      } else {
        return checkRole(role);
      }
    }

    return false;
  };

  return !isLoading && __jsx$31(AuthorizationContext.Provider, {
    value: {
      hasAccess: hasAccess,
      hasRole: hasRole
    }
  }, children);
};

/**
 * Services - Config - Context
 */
var ConfigContext = /*#__PURE__*/React.createContext();

var __jsx$32 = React__default['default'].createElement;
var ConfigProvider = function ConfigProvider(props) {
  return __jsx$32(ConfigContext.Provider, _extends({
    value: props.config
  }, props));
};

var GeoCoder = /*#__PURE__*/function () {
  function GeoCoder(_ref) {
    var apiKey = _ref.apiKey,
        _ref$debug = _ref.debug,
        debug = _ref$debug === void 0 ? false : _ref$debug,
        language = _ref.language,
        region = _ref.region;

    _classCallCheck(this, GeoCoder);

    this.apiKey = apiKey;
    this.debug = debug;
    this.language = language;
    this.region = region;
    this.GOOGLE_API_URL = 'https://maps.google.com/maps/api/geocode/json';
  }

  _createClass(GeoCoder, [{
    key: "log",
    value: function log(message) {
      var warn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (this.debug) {
        if (warn) {
          console.warn(message);
        } else {
          console.info(message);
        }
      }
    }
  }, {
    key: "handleUrl",
    value: function () {
      var _handleUrl = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(url) {
        var response;
        return regenerator.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__default['default'].get(url)["catch"](function () {
                  return Promise.reject(new Error('Error fetching data'));
                });

              case 2:
                response = _context.sent;

                if (!(response.data.status === 'OK')) {
                  _context.next = 6;
                  break;
                }

                this.log(response.data);
                return _context.abrupt("return", response.data);

              case 6:
                this.log("".concat(response.statusText, ".\nServer returned status code ").concat(response.statusText), true);
                return _context.abrupt("return", Promise.reject(new Error("".concat(response.statusText, ".\nServer returned status code ").concat(response.statusText))));

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleUrl(_x) {
        return _handleUrl.apply(this, arguments);
      }

      return handleUrl;
    }()
  }, {
    key: "fromAddress",
    value: function () {
      var _fromAddress = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2(_ref2) {
        var address, _ref2$city, city, location, url, _yield$this$handleUrl, _yield$this$handleUrl2, result, _result$geometry$loca, lat, lng, coordinates;

        return regenerator.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                address = _ref2.address, _ref2$city = _ref2.city, city = _ref2$city === void 0 ? '' : _ref2$city;

                if (address) {
                  _context2.next = 4;
                  break;
                }

                this.log('Provided address is invalid', true);
                return _context2.abrupt("return", Promise.reject(new Error('Provided address is invalid')));

              case 4:
                location = encodeURIComponent(city + ', ' + address);
                url = "".concat(this.GOOGLE_API_URL, "?address=").concat(location);

                if (this.apiKey) {
                  url += "&key=".concat(this.apiKey);
                }

                if (this.language) {
                  url += "&language=".concat(this.language);
                }

                if (this.region) {
                  url += "&region=".concat(encodeURIComponent(this.region));
                }

                _context2.next = 11;
                return this.handleUrl(url);

              case 11:
                _yield$this$handleUrl = _context2.sent;
                _yield$this$handleUrl2 = _slicedToArray(_yield$this$handleUrl.results, 1);
                result = _yield$this$handleUrl2[0];
                _result$geometry$loca = result.geometry.location, lat = _result$geometry$loca.lat, lng = _result$geometry$loca.lng;
                coordinates = {
                  lat: lat,
                  lng: lng
                };
                return _context2.abrupt("return", Promise.resolve(coordinates));

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function fromAddress(_x2) {
        return _fromAddress.apply(this, arguments);
      }

      return fromAddress;
    }()
  }]);

  return GeoCoder;
}();

/**
 * Google Maps Circle
 * Creates or encodes a Circle for use on a Google Map
 *
 * @see https://developers.google.com/maps/documentation/javascript/shapes#circles
 * @see https://developers.google.com/maps/documentation/javascript/examples/circle-simple
 *
 * @see https://stackoverflow.com/questions/36506668/google-static-map-draw-a-circle
 * @see https://stackoverflow.com/questions/7316963/drawing-a-circle-google-static-maps
 */
function locationBuilder(location) {
  var _this = this;

  var urlParts = [];

  if (Array.isArray(location)) {
    var arrParts = location.map(function (val) {
      return _this.locationBuilder(val);
    });
    urlParts.push.apply(urlParts, _toConsumableArray(arrParts));
  }

  if (typeof location === 'string' || typeof location === 'number') {
    urlParts.push(location);
  }

  if (_typeof(location) === 'object' && location.lat && location.lng) {
    urlParts.push("".concat(location.lat, ",").concat(location.lng));
  }

  return urlParts.join('%7C');
}

function GMapCircle(lat, lng, rad) {
  var detail = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 8;
  var r = 6371;
  var pi = Math.PI;
  var staticMapSrc = '';

  var _lat = lat * pi / 180;

  var _lng = lng * pi / 180;

  var d = rad / 1000 / r;
  var i = 0;

  for (i = 0; i <= 360; i += detail) {
    var brng = i * pi / 180;
    var pLat = Math.asin(Math.sin(_lat) * Math.cos(d) + Math.cos(_lat) * Math.sin(d) * Math.cos(brng));
    var pLng = (_lng + Math.atan2(Math.sin(brng) * Math.sin(d) * Math.cos(_lat), Math.cos(d) - Math.sin(_lat) * Math.sin(pLat))) * 180 / pi;
    pLat = pLat * 180 / pi;
    staticMapSrc += locationBuilder(pLat + ',' + pLng); // staticMapSrc += '|' + pLat + ',' + pLng
  }

  return encodeURI(staticMapSrc);
}

function encodeCircle(latitude, longitude, radius) {
  var circle = GMapCircle(latitude, longitude, radius);
  return circle;
}

var StaticMap = /*#__PURE__*/function () {
  function StaticMap(_ref) {
    var apiKey = _ref.apiKey,
        center = _ref.center,
        channel = _ref.channel,
        client = _ref.client,
        _ref$format = _ref.format,
        format = _ref$format === void 0 ? 'png' : _ref$format,
        language = _ref.language,
        _ref$location = _ref.location,
        location = _ref$location === void 0 ? '' : _ref$location,
        _ref$maptype = _ref.maptype,
        maptype = _ref$maptype === void 0 ? 'roadmap' : _ref$maptype,
        _ref$markers = _ref.markers,
        markers = _ref$markers === void 0 ? [] : _ref$markers,
        _ref$paths = _ref.paths,
        paths = _ref$paths === void 0 ? [] : _ref$paths,
        region = _ref.region,
        _ref$rootURL = _ref.rootURL,
        rootURL = _ref$rootURL === void 0 ? 'https://maps.googleapis.com/maps/api/staticmap' : _ref$rootURL,
        _ref$scale = _ref.scale,
        scale = _ref$scale === void 0 ? 1 : _ref$scale,
        signature = _ref.signature,
        _ref$size = _ref.size,
        size = _ref$size === void 0 ? '400x200' : _ref$size,
        style = _ref.style,
        visible = _ref.visible,
        _ref$zoom = _ref.zoom,
        zoom = _ref$zoom === void 0 ? 15 : _ref$zoom;

    _classCallCheck(this, StaticMap);

    this.apiKey = apiKey;
    this.channel = channel;
    this.center = center;
    this.client = client;
    this.format = format;
    this.language = language;
    this.location = location;
    this.maptype = maptype;
    this.markers = markers;
    this.paths = paths;
    this.region = region;
    this.rootURL = rootURL;
    this.scale = scale;
    this.signature = signature;
    this.size = size;
    this.style = style;
    this.visible = visible;
    this.zoom = zoom;
  }

  _createClass(StaticMap, [{
    key: "urlBuilder",
    value: function urlBuilder(property, value, separator) {
      if (value) {
        return "".concat(property).concat(separator).concat(value);
      }

      return null;
    }
  }, {
    key: "renderBaseMap",
    value: function renderBaseMap() {
      var urlParts = [];
      urlParts.push(this.urlBuilder('key', this.apiKey, '='));
      urlParts.push(this.urlBuilder('center', this.center, '='));
      urlParts.push(this.urlBuilder('channel', this.channel, '='));
      urlParts.push(this.urlBuilder('client', this.client, '='));
      urlParts.push(this.urlBuilder('format', this.format, '='));
      urlParts.push(this.urlBuilder('language', this.language, '='));
      urlParts.push(this.urlBuilder('maptype', this.maptype, '='));
      urlParts.push(this.urlBuilder('region', this.region, '='));
      urlParts.push(this.urlBuilder('scale', this.scale, '='));
      urlParts.push(this.urlBuilder('signature', this.signature, '='));
      urlParts.push(this.urlBuilder('size', this.size, '='));
      urlParts.push(this.urlBuilder('style', this.style, '='));
      urlParts.push(this.urlBuilder('visible', this.visible, '='));
      urlParts.push(this.urlBuilder('zoom', this.zoom, '='));
      var parts = urlParts.filter(function (x) {
        return x;
      }).join('&');
      return "".concat(this.rootURL, "?").concat(parts);
    }
  }, {
    key: "locationBuilder",
    value: function locationBuilder(location) {
      var _this = this;

      var urlParts = [];

      if (Array.isArray(location)) {
        var arrParts = location.map(function (val) {
          return _this.locationBuilder(val);
        });
        urlParts.push.apply(urlParts, _toConsumableArray(arrParts));
      }

      if (typeof location === 'string' || typeof location === 'number') {
        urlParts.push(encodeURI(location));
      }

      if (_typeof(location) === 'object' && location.lat && location.lng) {
        urlParts.push("".concat(location.lat, ",").concat(location.lng));
      }

      return urlParts.join('%7C');
    } // Create the URL segment for the Path

  }, {
    key: "renderPath",
    value: function renderPath(_ref2) {
      var circle = _ref2.circle,
          color = _ref2.color,
          fillcolor = _ref2.fillcolor,
          geodesic = _ref2.geodesic,
          points = _ref2.points,
          weight = _ref2.weight;
      var urlParts = [];

      if (circle) {
        var enc = encodeCircle(circle.latitude, circle.longitude, circle.radius);
        urlParts.push(this.urlBuilder('', this.locationBuilder("".concat(enc)), ''));
      }

      urlParts.push(this.urlBuilder('color', color, ':'));
      urlParts.push(this.urlBuilder('weight', weight, ':'));
      urlParts.push(this.urlBuilder('fillcolor', fillcolor, ':'));
      urlParts.push(this.urlBuilder('geodesic', geodesic, ':'));
      urlParts.push(this.urlBuilder('', this.locationBuilder(points), ''));
      var url = urlParts.filter(function (x) {
        return x;
      }).join('%7C');
      return "path=".concat(url);
    }
  }, {
    key: "renderParts",
    value: function renderParts() {
      var _this2 = this;

      return this.paths.map(function (path) {
        return _this2.renderPath(path);
      });
    }
  }, {
    key: "renderMarkers",
    value: function renderMarkers() {
      var markers = this.markers,
          locationBuilder = this.locationBuilder,
          location = this.location;
      var urlParts = {};

      if (markers.length) {
        urlParts = markers.map(function (marker) {
          var markerUrl = 'markers=';

          switch (_typeof(marker)) {
            case 'string':
              {
                markerUrl += locationBuilder(marker);
                break;
              }

            case 'object':
              {
                var colour = marker.colour,
                    label = marker.label,
                    _location = marker.location;
                var markerColour = colour && "color:".concat(colour, "|");
                var markerLabel = label && "label:".concat(label, "|");

                var markerLocation = _location && "".concat(locationBuilder(_location), "|");

                markerUrl += markerColour + markerLabel + markerLocation;
                break;
              }
          }

          return markerUrl;
        });
      } else {
        urlParts = ["markers=".concat(locationBuilder(location))];
      }

      return urlParts.join('&');
    }
  }, {
    key: "generateUrl",
    value: function generateUrl() {
      var childrenUrlParts = this.renderParts() || [];
      var mainUrlParts = this.renderBaseMap();
      var markerParts = this.renderMarkers();
      var url = "".concat(mainUrlParts, "&").concat(childrenUrlParts, "&").concat(markerParts);
      return url;
    }
  }]);

  return StaticMap;
}();

/**
 * Services - Internationalisation - Context
 */
var InternationalisationContext = /*#__PURE__*/React.createContext({
  locale: 'es',
  setLocale: function setLocale() {
    return null;
  }
});

var __jsx$33 = React__default['default'].createElement;
var InternationalisationProvider = function InternationalisationProvider(_ref) {
  var locale = _ref.locale,
      children = _ref.children;

  var _useContext = React.useContext(ConfigContext),
      locales = _useContext.locales;

  var _useLocalStorage = useLocalStorage('locale'),
      _useLocalStorage2 = _slicedToArray(_useLocalStorage, 2),
      getStoredLocale = _useLocalStorage2[0],
      setStoredLocale = _useLocalStorage2[1];

  var router = Router.useRouter();

  var _useState = React.useState({
    locale: locale
  }),
      localeState = _useState[0],
      setLocaleState = _useState[1];

  React.useEffect(function () {
    if (localeState !== getStoredLocale) {
      setStoredLocale(localeState);
    }
  }, [localeState]);
  React.useEffect(function () {
    if (isLocale({
      locales: locales,
      test: router === null || router === void 0 ? void 0 : router.query.lang
    }) && locale !== (router === null || router === void 0 ? void 0 : router.query.lang)) {
      setLocaleState({
        locale: router === null || router === void 0 ? void 0 : router.query.lang
      });
    }
  }, [router === null || router === void 0 ? void 0 : router.query.lang, localeState]);
  return __jsx$33(InternationalisationContext.Provider, {
    value: {
      locale: localeState.locale,
      setLocale: setLocaleState
    }
  }, children);
};

var isLocale = function isLocale(_ref) {
  var locales = _ref.locales,
      tested = _ref.tested;
  return locales.some(function (locale) {
    return locale === tested;
  });
};
/**
 * Get Initial Locale
 * Gets the users locale string from locale storage
 *
 * @todo the User Provider should also push down a user saved locale
 * @todo we have a localstorage hook - use it
 */

var getInitialLocale = function getInitialLocale() {
  var _useContext = React.useContext(ConfigContext),
      defaultLocale = _useContext.defaultLocale;

  var localSetting = window.localStorage.getItem('locale');

  if (localSetting && isLocale(localSetting)) {
    return localSetting;
  }

  var _navigator$language$s = navigator.language.split('-'),
      _navigator$language$s2 = _slicedToArray(_navigator$language$s, 1),
      browserSetting = _navigator$language$s2[0];

  if (isLocale(browserSetting)) {
    return browserSetting;
  }

  return defaultLocale;
};

/**
 * Services - Notifications - Context
 */
var NotificationsContext = /*#__PURE__*/React.createContext();

var __jsx$34 = React__default['default'].createElement;
var NotificationsProvider = function NotificationsProvider(_ref) {
  var children = _ref.children,
      user = _ref.user;
  // const {
  //   data: { notifications },
  //   fetchNotifications
  // } = useNotifications('messages', { active: true }, 25)
  var items = useNotifications(); // return (
  //   <NotificationsContext.Provider
  //     value={{
  //       fetchNotifications,
  //       notifications,
  //       user
  //     }}
  //   >
  //     {children}
  //   </NotificationsContext.Provider>
  // )

  return __jsx$34(NotificationsContext.Provider, {
    value: {
      items: items,
      user: user
    }
  }, children);
};

var nodejsCustomInspectSymbol = typeof Symbol === 'function' && typeof Symbol.for === 'function' ? Symbol.for('nodejs.util.inspect.custom') : undefined;

function _typeof$1(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$1 = function _typeof(obj) { return typeof obj; }; } else { _typeof$1 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$1(obj); }
var MAX_ARRAY_LENGTH = 10;
var MAX_RECURSIVE_DEPTH = 2;
/**
 * Used to print values in error messages.
 */

function inspect(value) {
  return formatValue(value, []);
}

function formatValue(value, seenValues) {
  switch (_typeof$1(value)) {
    case 'string':
      return JSON.stringify(value);

    case 'function':
      return value.name ? "[function ".concat(value.name, "]") : '[function]';

    case 'object':
      if (value === null) {
        return 'null';
      }

      return formatObjectValue(value, seenValues);

    default:
      return String(value);
  }
}

function formatObjectValue(value, previouslySeenValues) {
  if (previouslySeenValues.indexOf(value) !== -1) {
    return '[Circular]';
  }

  var seenValues = [].concat(previouslySeenValues, [value]);
  var customInspectFn = getCustomFn(value);

  if (customInspectFn !== undefined) {
    // $FlowFixMe(>=0.90.0)
    var customValue = customInspectFn.call(value); // check for infinite recursion

    if (customValue !== value) {
      return typeof customValue === 'string' ? customValue : formatValue(customValue, seenValues);
    }
  } else if (Array.isArray(value)) {
    return formatArray(value, seenValues);
  }

  return formatObject(value, seenValues);
}

function formatObject(object, seenValues) {
  var keys = Object.keys(object);

  if (keys.length === 0) {
    return '{}';
  }

  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[' + getObjectTag(object) + ']';
  }

  var properties = keys.map(function (key) {
    var value = formatValue(object[key], seenValues);
    return key + ': ' + value;
  });
  return '{ ' + properties.join(', ') + ' }';
}

function formatArray(array, seenValues) {
  if (array.length === 0) {
    return '[]';
  }

  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[Array]';
  }

  var len = Math.min(MAX_ARRAY_LENGTH, array.length);
  var remaining = array.length - len;
  var items = [];

  for (var i = 0; i < len; ++i) {
    items.push(formatValue(array[i], seenValues));
  }

  if (remaining === 1) {
    items.push('... 1 more item');
  } else if (remaining > 1) {
    items.push("... ".concat(remaining, " more items"));
  }

  return '[' + items.join(', ') + ']';
}

function getCustomFn(object) {
  var customInspectFn = object[String(nodejsCustomInspectSymbol)];

  if (typeof customInspectFn === 'function') {
    return customInspectFn;
  }

  if (typeof object.inspect === 'function') {
    return object.inspect;
  }
}

function getObjectTag(object) {
  var tag = Object.prototype.toString.call(object).replace(/^\[object /, '').replace(/]$/, '');

  if (tag === 'Object' && typeof object.constructor === 'function') {
    var name = object.constructor.name;

    if (typeof name === 'string' && name !== '') {
      return name;
    }
  }

  return tag;
}

function devAssert(condition, message) {
  var booleanCondition = Boolean(condition);

  if (!booleanCondition) {
    throw new Error(message);
  }
}

/**
 * The `defineToJSON()` function defines toJSON() and inspect() prototype
 * methods, if no function provided they become aliases for toString().
 */

function defineToJSON(classObject) {
  var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : classObject.prototype.toString;
  classObject.prototype.toJSON = fn;
  classObject.prototype.inspect = fn;

  if (nodejsCustomInspectSymbol) {
    classObject.prototype[nodejsCustomInspectSymbol] = fn;
  }
}

function _typeof$2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$2 = function _typeof(obj) { return typeof obj; }; } else { _typeof$2 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$2(obj); }

/**
 * Return true if `value` is object-like. A value is object-like if it's not
 * `null` and has a `typeof` result of "object".
 */
function isObjectLike(value) {
  return _typeof$2(value) == 'object' && value !== null;
}

/**
 * Represents a location in a Source.
 */

/**
 * Takes a Source and a UTF-8 character offset, and returns the corresponding
 * line and column as a SourceLocation.
 */
function getLocation(source, position) {
  var lineRegexp = /\r\n|[\n\r]/g;
  var line = 1;
  var column = position + 1;
  var match;

  while ((match = lineRegexp.exec(source.body)) && match.index < position) {
    line += 1;
    column = position + 1 - (match.index + match[0].length);
  }

  return {
    line: line,
    column: column
  };
}

/**
 * Render a helpful description of the location in the GraphQL Source document.
 */

function printLocation(location) {
  return printSourceLocation(location.source, getLocation(location.source, location.start));
}
/**
 * Render a helpful description of the location in the GraphQL Source document.
 */

function printSourceLocation(source, sourceLocation) {
  var firstLineColumnOffset = source.locationOffset.column - 1;
  var body = whitespace(firstLineColumnOffset) + source.body;
  var lineIndex = sourceLocation.line - 1;
  var lineOffset = source.locationOffset.line - 1;
  var lineNum = sourceLocation.line + lineOffset;
  var columnOffset = sourceLocation.line === 1 ? firstLineColumnOffset : 0;
  var columnNum = sourceLocation.column + columnOffset;
  var locationStr = "".concat(source.name, ":").concat(lineNum, ":").concat(columnNum, "\n");
  var lines = body.split(/\r\n|[\n\r]/g);
  var locationLine = lines[lineIndex]; // Special case for minified documents

  if (locationLine.length > 120) {
    var sublineIndex = Math.floor(columnNum / 80);
    var sublineColumnNum = columnNum % 80;
    var sublines = [];

    for (var i = 0; i < locationLine.length; i += 80) {
      sublines.push(locationLine.slice(i, i + 80));
    }

    return locationStr + printPrefixedLines([["".concat(lineNum), sublines[0]]].concat(sublines.slice(1, sublineIndex + 1).map(function (subline) {
      return ['', subline];
    }), [[' ', whitespace(sublineColumnNum - 1) + '^'], ['', sublines[sublineIndex + 1]]]));
  }

  return locationStr + printPrefixedLines([// Lines specified like this: ["prefix", "string"],
  ["".concat(lineNum - 1), lines[lineIndex - 1]], ["".concat(lineNum), locationLine], ['', whitespace(columnNum - 1) + '^'], ["".concat(lineNum + 1), lines[lineIndex + 1]]]);
}

function printPrefixedLines(lines) {
  var existingLines = lines.filter(function (_ref) {
    var _ = _ref[0],
        line = _ref[1];
    return line !== undefined;
  });
  var padLen = Math.max.apply(Math, existingLines.map(function (_ref2) {
    var prefix = _ref2[0];
    return prefix.length;
  }));
  return existingLines.map(function (_ref3) {
    var prefix = _ref3[0],
        line = _ref3[1];
    return lpad(padLen, prefix) + (line ? ' | ' + line : ' |');
  }).join('\n');
}

function whitespace(len) {
  return Array(len + 1).join(' ');
}

function lpad(len, str) {
  return whitespace(len - str.length) + str;
}

/**
 * A GraphQLError describes an Error found during the parse, validate, or
 * execute phases of performing a GraphQL operation. In addition to a message
 * and stack trace, it also includes information about the locations in a
 * GraphQL document and/or execution result that correspond to the Error.
 */

function GraphQLError( // eslint-disable-line no-redeclare
message, nodes, source, positions, path, originalError, extensions) {
  // Compute list of blame nodes.
  var _nodes = Array.isArray(nodes) ? nodes.length !== 0 ? nodes : undefined : nodes ? [nodes] : undefined; // Compute locations in the source for the given nodes/positions.


  var _source = source;

  if (!_source && _nodes) {
    var node = _nodes[0];
    _source = node && node.loc && node.loc.source;
  }

  var _positions = positions;

  if (!_positions && _nodes) {
    _positions = _nodes.reduce(function (list, node) {
      if (node.loc) {
        list.push(node.loc.start);
      }

      return list;
    }, []);
  }

  if (_positions && _positions.length === 0) {
    _positions = undefined;
  }

  var _locations;

  if (positions && source) {
    _locations = positions.map(function (pos) {
      return getLocation(source, pos);
    });
  } else if (_nodes) {
    _locations = _nodes.reduce(function (list, node) {
      if (node.loc) {
        list.push(getLocation(node.loc.source, node.loc.start));
      }

      return list;
    }, []);
  }

  var _extensions = extensions;

  if (_extensions == null && originalError != null) {
    var originalExtensions = originalError.extensions;

    if (isObjectLike(originalExtensions)) {
      _extensions = originalExtensions;
    }
  }

  Object.defineProperties(this, {
    message: {
      value: message,
      // By being enumerable, JSON.stringify will include `message` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: true,
      writable: true
    },
    locations: {
      // Coercing falsey values to undefined ensures they will not be included
      // in JSON.stringify() when not provided.
      value: _locations || undefined,
      // By being enumerable, JSON.stringify will include `locations` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: Boolean(_locations)
    },
    path: {
      // Coercing falsey values to undefined ensures they will not be included
      // in JSON.stringify() when not provided.
      value: path || undefined,
      // By being enumerable, JSON.stringify will include `path` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: Boolean(path)
    },
    nodes: {
      value: _nodes || undefined
    },
    source: {
      value: _source || undefined
    },
    positions: {
      value: _positions || undefined
    },
    originalError: {
      value: originalError
    },
    extensions: {
      // Coercing falsey values to undefined ensures they will not be included
      // in JSON.stringify() when not provided.
      value: _extensions || undefined,
      // By being enumerable, JSON.stringify will include `path` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: Boolean(_extensions)
    }
  }); // Include (non-enumerable) stack trace.

  if (originalError && originalError.stack) {
    Object.defineProperty(this, 'stack', {
      value: originalError.stack,
      writable: true,
      configurable: true
    });
  } else if (Error.captureStackTrace) {
    Error.captureStackTrace(this, GraphQLError);
  } else {
    Object.defineProperty(this, 'stack', {
      value: Error().stack,
      writable: true,
      configurable: true
    });
  }
}
GraphQLError.prototype = Object.create(Error.prototype, {
  constructor: {
    value: GraphQLError
  },
  name: {
    value: 'GraphQLError'
  },
  toString: {
    value: function toString() {
      return printError(this);
    }
  }
});
/**
 * Prints a GraphQLError to a string, representing useful location information
 * about the error's position in the source.
 */

function printError(error) {
  var output = error.message;

  if (error.nodes) {
    for (var _i2 = 0, _error$nodes2 = error.nodes; _i2 < _error$nodes2.length; _i2++) {
      var node = _error$nodes2[_i2];

      if (node.loc) {
        output += '\n\n' + printLocation(node.loc);
      }
    }
  } else if (error.source && error.locations) {
    for (var _i4 = 0, _error$locations2 = error.locations; _i4 < _error$locations2.length; _i4++) {
      var location = _error$locations2[_i4];
      output += '\n\n' + printSourceLocation(error.source, location);
    }
  }

  return output;
}

/**
 * Produces a GraphQLError representing a syntax error, containing useful
 * descriptive information about the syntax error's position in the source.
 */

function syntaxError(source, position, description) {
  return new GraphQLError("Syntax Error: ".concat(description), undefined, source, [position]);
}

/**
 * The set of allowed kind values for AST nodes.
 */
var Kind = Object.freeze({
  // Name
  NAME: 'Name',
  // Document
  DOCUMENT: 'Document',
  OPERATION_DEFINITION: 'OperationDefinition',
  VARIABLE_DEFINITION: 'VariableDefinition',
  SELECTION_SET: 'SelectionSet',
  FIELD: 'Field',
  ARGUMENT: 'Argument',
  // Fragments
  FRAGMENT_SPREAD: 'FragmentSpread',
  INLINE_FRAGMENT: 'InlineFragment',
  FRAGMENT_DEFINITION: 'FragmentDefinition',
  // Values
  VARIABLE: 'Variable',
  INT: 'IntValue',
  FLOAT: 'FloatValue',
  STRING: 'StringValue',
  BOOLEAN: 'BooleanValue',
  NULL: 'NullValue',
  ENUM: 'EnumValue',
  LIST: 'ListValue',
  OBJECT: 'ObjectValue',
  OBJECT_FIELD: 'ObjectField',
  // Directives
  DIRECTIVE: 'Directive',
  // Types
  NAMED_TYPE: 'NamedType',
  LIST_TYPE: 'ListType',
  NON_NULL_TYPE: 'NonNullType',
  // Type System Definitions
  SCHEMA_DEFINITION: 'SchemaDefinition',
  OPERATION_TYPE_DEFINITION: 'OperationTypeDefinition',
  // Type Definitions
  SCALAR_TYPE_DEFINITION: 'ScalarTypeDefinition',
  OBJECT_TYPE_DEFINITION: 'ObjectTypeDefinition',
  FIELD_DEFINITION: 'FieldDefinition',
  INPUT_VALUE_DEFINITION: 'InputValueDefinition',
  INTERFACE_TYPE_DEFINITION: 'InterfaceTypeDefinition',
  UNION_TYPE_DEFINITION: 'UnionTypeDefinition',
  ENUM_TYPE_DEFINITION: 'EnumTypeDefinition',
  ENUM_VALUE_DEFINITION: 'EnumValueDefinition',
  INPUT_OBJECT_TYPE_DEFINITION: 'InputObjectTypeDefinition',
  // Directive Definitions
  DIRECTIVE_DEFINITION: 'DirectiveDefinition',
  // Type System Extensions
  SCHEMA_EXTENSION: 'SchemaExtension',
  // Type Extensions
  SCALAR_TYPE_EXTENSION: 'ScalarTypeExtension',
  OBJECT_TYPE_EXTENSION: 'ObjectTypeExtension',
  INTERFACE_TYPE_EXTENSION: 'InterfaceTypeExtension',
  UNION_TYPE_EXTENSION: 'UnionTypeExtension',
  ENUM_TYPE_EXTENSION: 'EnumTypeExtension',
  INPUT_OBJECT_TYPE_EXTENSION: 'InputObjectTypeExtension'
});
/**
 * The enum type representing the possible kind values of AST nodes.
 */

/**
 * The `defineToStringTag()` function checks first to see if the runtime
 * supports the `Symbol` class and then if the `Symbol.toStringTag` constant
 * is defined as a `Symbol` instance. If both conditions are met, the
 * Symbol.toStringTag property is defined as a getter that returns the
 * supplied class constructor's name.
 *
 * @method defineToStringTag
 *
 * @param {Class<any>} classObject a class such as Object, String, Number but
 * typically one of your own creation through the class keyword; `class A {}`,
 * for example.
 */
function defineToStringTag(classObject) {
  if (typeof Symbol === 'function' && Symbol.toStringTag) {
    Object.defineProperty(classObject.prototype, Symbol.toStringTag, {
      get: function get() {
        return this.constructor.name;
      }
    });
  }
}

/**
 * A representation of source input to GraphQL.
 * `name` and `locationOffset` are optional. They are useful for clients who
 * store GraphQL documents in source files; for example, if the GraphQL input
 * starts at line 40 in a file named Foo.graphql, it might be useful for name to
 * be "Foo.graphql" and location to be `{ line: 40, column: 0 }`.
 * line and column in locationOffset are 1-indexed
 */
var Source = function Source(body, name, locationOffset) {
  this.body = body;
  this.name = name || 'GraphQL request';
  this.locationOffset = locationOffset || {
    line: 1,
    column: 1
  };
  this.locationOffset.line > 0 || devAssert(0, 'line in locationOffset is 1-indexed and must be positive');
  this.locationOffset.column > 0 || devAssert(0, 'column in locationOffset is 1-indexed and must be positive');
}; // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported

defineToStringTag(Source);

/**
 * Produces the value of a block string from its parsed raw value, similar to
 * CoffeeScript's block string, Python's docstring trim or Ruby's strip_heredoc.
 *
 * This implements the GraphQL spec's BlockStringValue() static algorithm.
 */
function dedentBlockStringValue(rawString) {
  // Expand a block string's raw value into independent lines.
  var lines = rawString.split(/\r\n|[\n\r]/g); // Remove common indentation from all lines but first.

  var commonIndent = getBlockStringIndentation(lines);

  if (commonIndent !== 0) {
    for (var i = 1; i < lines.length; i++) {
      lines[i] = lines[i].slice(commonIndent);
    }
  } // Remove leading and trailing blank lines.


  while (lines.length > 0 && isBlank(lines[0])) {
    lines.shift();
  }

  while (lines.length > 0 && isBlank(lines[lines.length - 1])) {
    lines.pop();
  } // Return a string of the lines joined with U+000A.


  return lines.join('\n');
} // @internal

function getBlockStringIndentation(lines) {
  var commonIndent = null;

  for (var i = 1; i < lines.length; i++) {
    var line = lines[i];
    var indent = leadingWhitespace(line);

    if (indent === line.length) {
      continue; // skip empty lines
    }

    if (commonIndent === null || indent < commonIndent) {
      commonIndent = indent;

      if (commonIndent === 0) {
        break;
      }
    }
  }

  return commonIndent === null ? 0 : commonIndent;
}

function leadingWhitespace(str) {
  var i = 0;

  while (i < str.length && (str[i] === ' ' || str[i] === '\t')) {
    i++;
  }

  return i;
}

function isBlank(str) {
  return leadingWhitespace(str) === str.length;
}

/**
 * An exported enum describing the different kinds of tokens that the
 * lexer emits.
 */
var TokenKind = Object.freeze({
  SOF: '<SOF>',
  EOF: '<EOF>',
  BANG: '!',
  DOLLAR: '$',
  AMP: '&',
  PAREN_L: '(',
  PAREN_R: ')',
  SPREAD: '...',
  COLON: ':',
  EQUALS: '=',
  AT: '@',
  BRACKET_L: '[',
  BRACKET_R: ']',
  BRACE_L: '{',
  PIPE: '|',
  BRACE_R: '}',
  NAME: 'Name',
  INT: 'Int',
  FLOAT: 'Float',
  STRING: 'String',
  BLOCK_STRING: 'BlockString',
  COMMENT: 'Comment'
});
/**
 * The enum type representing the token kinds values.
 */

/**
 * Given a Source object, this returns a Lexer for that source.
 * A Lexer is a stateful stream generator in that every time
 * it is advanced, it returns the next token in the Source. Assuming the
 * source lexes, the final Token emitted by the lexer will be of kind
 * EOF, after which the lexer will repeatedly return the same EOF token
 * whenever called.
 */

function createLexer(source, options) {
  var startOfFileToken = new Tok(TokenKind.SOF, 0, 0, 0, 0, null);
  var lexer = {
    source: source,
    options: options,
    lastToken: startOfFileToken,
    token: startOfFileToken,
    line: 1,
    lineStart: 0,
    advance: advanceLexer,
    lookahead: lookahead
  };
  return lexer;
}

function advanceLexer() {
  this.lastToken = this.token;
  var token = this.token = this.lookahead();
  return token;
}

function lookahead() {
  var token = this.token;

  if (token.kind !== TokenKind.EOF) {
    do {
      // Note: next is only mutable during parsing, so we cast to allow this.
      token = token.next || (token.next = readToken(this, token));
    } while (token.kind === TokenKind.COMMENT);
  }

  return token;
}
/**
 * Helper function for constructing the Token object.
 */

function Tok(kind, start, end, line, column, prev, value) {
  this.kind = kind;
  this.start = start;
  this.end = end;
  this.line = line;
  this.column = column;
  this.value = value;
  this.prev = prev;
  this.next = null;
} // Print a simplified form when appearing in JSON/util.inspect.


defineToJSON(Tok, function () {
  return {
    kind: this.kind,
    value: this.value,
    line: this.line,
    column: this.column
  };
});

function printCharCode(code) {
  return (// NaN/undefined represents access beyond the end of the file.
    isNaN(code) ? TokenKind.EOF : // Trust JSON for ASCII.
    code < 0x007f ? JSON.stringify(String.fromCharCode(code)) : // Otherwise print the escaped form.
    "\"\\u".concat(('00' + code.toString(16).toUpperCase()).slice(-4), "\"")
  );
}
/**
 * Gets the next token from the source starting at the given position.
 *
 * This skips over whitespace until it finds the next lexable token, then lexes
 * punctuators immediately or calls the appropriate helper function for more
 * complicated tokens.
 */


function readToken(lexer, prev) {
  var source = lexer.source;
  var body = source.body;
  var bodyLength = body.length;
  var pos = positionAfterWhitespace(body, prev.end, lexer);
  var line = lexer.line;
  var col = 1 + pos - lexer.lineStart;

  if (pos >= bodyLength) {
    return new Tok(TokenKind.EOF, bodyLength, bodyLength, line, col, prev);
  }

  var code = body.charCodeAt(pos); // SourceCharacter

  switch (code) {
    // !
    case 33:
      return new Tok(TokenKind.BANG, pos, pos + 1, line, col, prev);
    // #

    case 35:
      return readComment(source, pos, line, col, prev);
    // $

    case 36:
      return new Tok(TokenKind.DOLLAR, pos, pos + 1, line, col, prev);
    // &

    case 38:
      return new Tok(TokenKind.AMP, pos, pos + 1, line, col, prev);
    // (

    case 40:
      return new Tok(TokenKind.PAREN_L, pos, pos + 1, line, col, prev);
    // )

    case 41:
      return new Tok(TokenKind.PAREN_R, pos, pos + 1, line, col, prev);
    // .

    case 46:
      if (body.charCodeAt(pos + 1) === 46 && body.charCodeAt(pos + 2) === 46) {
        return new Tok(TokenKind.SPREAD, pos, pos + 3, line, col, prev);
      }

      break;
    // :

    case 58:
      return new Tok(TokenKind.COLON, pos, pos + 1, line, col, prev);
    // =

    case 61:
      return new Tok(TokenKind.EQUALS, pos, pos + 1, line, col, prev);
    // @

    case 64:
      return new Tok(TokenKind.AT, pos, pos + 1, line, col, prev);
    // [

    case 91:
      return new Tok(TokenKind.BRACKET_L, pos, pos + 1, line, col, prev);
    // ]

    case 93:
      return new Tok(TokenKind.BRACKET_R, pos, pos + 1, line, col, prev);
    // {

    case 123:
      return new Tok(TokenKind.BRACE_L, pos, pos + 1, line, col, prev);
    // |

    case 124:
      return new Tok(TokenKind.PIPE, pos, pos + 1, line, col, prev);
    // }

    case 125:
      return new Tok(TokenKind.BRACE_R, pos, pos + 1, line, col, prev);
    // A-Z _ a-z

    case 65:
    case 66:
    case 67:
    case 68:
    case 69:
    case 70:
    case 71:
    case 72:
    case 73:
    case 74:
    case 75:
    case 76:
    case 77:
    case 78:
    case 79:
    case 80:
    case 81:
    case 82:
    case 83:
    case 84:
    case 85:
    case 86:
    case 87:
    case 88:
    case 89:
    case 90:
    case 95:
    case 97:
    case 98:
    case 99:
    case 100:
    case 101:
    case 102:
    case 103:
    case 104:
    case 105:
    case 106:
    case 107:
    case 108:
    case 109:
    case 110:
    case 111:
    case 112:
    case 113:
    case 114:
    case 115:
    case 116:
    case 117:
    case 118:
    case 119:
    case 120:
    case 121:
    case 122:
      return readName(source, pos, line, col, prev);
    // - 0-9

    case 45:
    case 48:
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
      return readNumber(source, pos, code, line, col, prev);
    // "

    case 34:
      if (body.charCodeAt(pos + 1) === 34 && body.charCodeAt(pos + 2) === 34) {
        return readBlockString(source, pos, line, col, prev, lexer);
      }

      return readString(source, pos, line, col, prev);
  }

  throw syntaxError(source, pos, unexpectedCharacterMessage(code));
}
/**
 * Report a message that an unexpected character was encountered.
 */


function unexpectedCharacterMessage(code) {
  if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
    return "Cannot contain the invalid character ".concat(printCharCode(code), ".");
  }

  if (code === 39) {
    // '
    return 'Unexpected single quote character (\'), did you mean to use a double quote (")?';
  }

  return "Cannot parse the unexpected character ".concat(printCharCode(code), ".");
}
/**
 * Reads from body starting at startPosition until it finds a non-whitespace
 * character, then returns the position of that character for lexing.
 */


function positionAfterWhitespace(body, startPosition, lexer) {
  var bodyLength = body.length;
  var position = startPosition;

  while (position < bodyLength) {
    var code = body.charCodeAt(position); // tab | space | comma | BOM

    if (code === 9 || code === 32 || code === 44 || code === 0xfeff) {
      ++position;
    } else if (code === 10) {
      // new line
      ++position;
      ++lexer.line;
      lexer.lineStart = position;
    } else if (code === 13) {
      // carriage return
      if (body.charCodeAt(position + 1) === 10) {
        position += 2;
      } else {
        ++position;
      }

      ++lexer.line;
      lexer.lineStart = position;
    } else {
      break;
    }
  }

  return position;
}
/**
 * Reads a comment token from the source file.
 *
 * #[\u0009\u0020-\uFFFF]*
 */


function readComment(source, start, line, col, prev) {
  var body = source.body;
  var code;
  var position = start;

  do {
    code = body.charCodeAt(++position);
  } while (!isNaN(code) && ( // SourceCharacter but not LineTerminator
  code > 0x001f || code === 0x0009));

  return new Tok(TokenKind.COMMENT, start, position, line, col, prev, body.slice(start + 1, position));
}
/**
 * Reads a number token from the source file, either a float
 * or an int depending on whether a decimal point appears.
 *
 * Int:   -?(0|[1-9][0-9]*)
 * Float: -?(0|[1-9][0-9]*)(\.[0-9]+)?((E|e)(+|-)?[0-9]+)?
 */


function readNumber(source, start, firstCode, line, col, prev) {
  var body = source.body;
  var code = firstCode;
  var position = start;
  var isFloat = false;

  if (code === 45) {
    // -
    code = body.charCodeAt(++position);
  }

  if (code === 48) {
    // 0
    code = body.charCodeAt(++position);

    if (code >= 48 && code <= 57) {
      throw syntaxError(source, position, "Invalid number, unexpected digit after 0: ".concat(printCharCode(code), "."));
    }
  } else {
    position = readDigits(source, position, code);
    code = body.charCodeAt(position);
  }

  if (code === 46) {
    // .
    isFloat = true;
    code = body.charCodeAt(++position);
    position = readDigits(source, position, code);
    code = body.charCodeAt(position);
  }

  if (code === 69 || code === 101) {
    // E e
    isFloat = true;
    code = body.charCodeAt(++position);

    if (code === 43 || code === 45) {
      // + -
      code = body.charCodeAt(++position);
    }

    position = readDigits(source, position, code);
    code = body.charCodeAt(position);
  } // Numbers cannot be followed by . or e


  if (code === 46 || code === 69 || code === 101) {
    throw syntaxError(source, position, "Invalid number, expected digit but got: ".concat(printCharCode(code), "."));
  }

  return new Tok(isFloat ? TokenKind.FLOAT : TokenKind.INT, start, position, line, col, prev, body.slice(start, position));
}
/**
 * Returns the new position in the source after reading digits.
 */


function readDigits(source, start, firstCode) {
  var body = source.body;
  var position = start;
  var code = firstCode;

  if (code >= 48 && code <= 57) {
    // 0 - 9
    do {
      code = body.charCodeAt(++position);
    } while (code >= 48 && code <= 57); // 0 - 9


    return position;
  }

  throw syntaxError(source, position, "Invalid number, expected digit but got: ".concat(printCharCode(code), "."));
}
/**
 * Reads a string token from the source file.
 *
 * "([^"\\\u000A\u000D]|(\\(u[0-9a-fA-F]{4}|["\\/bfnrt])))*"
 */


function readString(source, start, line, col, prev) {
  var body = source.body;
  var position = start + 1;
  var chunkStart = position;
  var code = 0;
  var value = '';

  while (position < body.length && !isNaN(code = body.charCodeAt(position)) && // not LineTerminator
  code !== 0x000a && code !== 0x000d) {
    // Closing Quote (")
    if (code === 34) {
      value += body.slice(chunkStart, position);
      return new Tok(TokenKind.STRING, start, position + 1, line, col, prev, value);
    } // SourceCharacter


    if (code < 0x0020 && code !== 0x0009) {
      throw syntaxError(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
    }

    ++position;

    if (code === 92) {
      // \
      value += body.slice(chunkStart, position - 1);
      code = body.charCodeAt(position);

      switch (code) {
        case 34:
          value += '"';
          break;

        case 47:
          value += '/';
          break;

        case 92:
          value += '\\';
          break;

        case 98:
          value += '\b';
          break;

        case 102:
          value += '\f';
          break;

        case 110:
          value += '\n';
          break;

        case 114:
          value += '\r';
          break;

        case 116:
          value += '\t';
          break;

        case 117:
          {
            // uXXXX
            var charCode = uniCharCode(body.charCodeAt(position + 1), body.charCodeAt(position + 2), body.charCodeAt(position + 3), body.charCodeAt(position + 4));

            if (charCode < 0) {
              var invalidSequence = body.slice(position + 1, position + 5);
              throw syntaxError(source, position, "Invalid character escape sequence: \\u".concat(invalidSequence, "."));
            }

            value += String.fromCharCode(charCode);
            position += 4;
            break;
          }

        default:
          throw syntaxError(source, position, "Invalid character escape sequence: \\".concat(String.fromCharCode(code), "."));
      }

      ++position;
      chunkStart = position;
    }
  }

  throw syntaxError(source, position, 'Unterminated string.');
}
/**
 * Reads a block string token from the source file.
 *
 * """("?"?(\\"""|\\(?!=""")|[^"\\]))*"""
 */


function readBlockString(source, start, line, col, prev, lexer) {
  var body = source.body;
  var position = start + 3;
  var chunkStart = position;
  var code = 0;
  var rawValue = '';

  while (position < body.length && !isNaN(code = body.charCodeAt(position))) {
    // Closing Triple-Quote (""")
    if (code === 34 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34) {
      rawValue += body.slice(chunkStart, position);
      return new Tok(TokenKind.BLOCK_STRING, start, position + 3, line, col, prev, dedentBlockStringValue(rawValue));
    } // SourceCharacter


    if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
      throw syntaxError(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
    }

    if (code === 10) {
      // new line
      ++position;
      ++lexer.line;
      lexer.lineStart = position;
    } else if (code === 13) {
      // carriage return
      if (body.charCodeAt(position + 1) === 10) {
        position += 2;
      } else {
        ++position;
      }

      ++lexer.line;
      lexer.lineStart = position;
    } else if ( // Escape Triple-Quote (\""")
    code === 92 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34 && body.charCodeAt(position + 3) === 34) {
      rawValue += body.slice(chunkStart, position) + '"""';
      position += 4;
      chunkStart = position;
    } else {
      ++position;
    }
  }

  throw syntaxError(source, position, 'Unterminated string.');
}
/**
 * Converts four hexadecimal chars to the integer that the
 * string represents. For example, uniCharCode('0','0','0','f')
 * will return 15, and uniCharCode('0','0','f','f') returns 255.
 *
 * Returns a negative number on error, if a char was invalid.
 *
 * This is implemented by noting that char2hex() returns -1 on error,
 * which means the result of ORing the char2hex() will also be negative.
 */


function uniCharCode(a, b, c, d) {
  return char2hex(a) << 12 | char2hex(b) << 8 | char2hex(c) << 4 | char2hex(d);
}
/**
 * Converts a hex character to its integer value.
 * '0' becomes 0, '9' becomes 9
 * 'A' becomes 10, 'F' becomes 15
 * 'a' becomes 10, 'f' becomes 15
 *
 * Returns -1 on error.
 */


function char2hex(a) {
  return a >= 48 && a <= 57 ? a - 48 // 0-9
  : a >= 65 && a <= 70 ? a - 55 // A-F
  : a >= 97 && a <= 102 ? a - 87 // a-f
  : -1;
}
/**
 * Reads an alphanumeric + underscore name from the source.
 *
 * [_A-Za-z][_0-9A-Za-z]*
 */


function readName(source, start, line, col, prev) {
  var body = source.body;
  var bodyLength = body.length;
  var position = start + 1;
  var code = 0;

  while (position !== bodyLength && !isNaN(code = body.charCodeAt(position)) && (code === 95 || // _
  code >= 48 && code <= 57 || // 0-9
  code >= 65 && code <= 90 || // A-Z
  code >= 97 && code <= 122) // a-z
  ) {
    ++position;
  }

  return new Tok(TokenKind.NAME, start, position, line, col, prev, body.slice(start, position));
}

/**
 * The set of allowed directive location values.
 */
var DirectiveLocation = Object.freeze({
  // Request Definitions
  QUERY: 'QUERY',
  MUTATION: 'MUTATION',
  SUBSCRIPTION: 'SUBSCRIPTION',
  FIELD: 'FIELD',
  FRAGMENT_DEFINITION: 'FRAGMENT_DEFINITION',
  FRAGMENT_SPREAD: 'FRAGMENT_SPREAD',
  INLINE_FRAGMENT: 'INLINE_FRAGMENT',
  VARIABLE_DEFINITION: 'VARIABLE_DEFINITION',
  // Type System Definitions
  SCHEMA: 'SCHEMA',
  SCALAR: 'SCALAR',
  OBJECT: 'OBJECT',
  FIELD_DEFINITION: 'FIELD_DEFINITION',
  ARGUMENT_DEFINITION: 'ARGUMENT_DEFINITION',
  INTERFACE: 'INTERFACE',
  UNION: 'UNION',
  ENUM: 'ENUM',
  ENUM_VALUE: 'ENUM_VALUE',
  INPUT_OBJECT: 'INPUT_OBJECT',
  INPUT_FIELD_DEFINITION: 'INPUT_FIELD_DEFINITION'
});
/**
 * The enum type representing the directive location values.
 */

/**
 * Given a GraphQL source, parses it into a Document.
 * Throws GraphQLError if a syntax error is encountered.
 */
function parse(source, options) {
  var parser = new Parser(source, options);
  return parser.parseDocument();
}
/**
 * Given a string containing a GraphQL value (ex. `[42]`), parse the AST for
 * that value.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Values directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: valueFromAST().
 */

function parseValue(source, options) {
  var parser = new Parser(source, options);
  parser.expectToken(TokenKind.SOF);
  var value = parser.parseValueLiteral(false);
  parser.expectToken(TokenKind.EOF);
  return value;
}
/**
 * Given a string containing a GraphQL Type (ex. `[Int!]`), parse the AST for
 * that type.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Types directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: typeFromAST().
 */

function parseType(source, options) {
  var parser = new Parser(source, options);
  parser.expectToken(TokenKind.SOF);
  var type = parser.parseTypeReference();
  parser.expectToken(TokenKind.EOF);
  return type;
}

var Parser =
/*#__PURE__*/
function () {
  function Parser(source, options) {
    var sourceObj = typeof source === 'string' ? new Source(source) : source;
    sourceObj instanceof Source || devAssert(0, "Must provide Source. Received: ".concat(inspect(sourceObj)));
    this._lexer = createLexer(sourceObj);
    this._options = options || {};
  }
  /**
   * Converts a name lex token into a name parse node.
   */


  var _proto = Parser.prototype;

  _proto.parseName = function parseName() {
    var token = this.expectToken(TokenKind.NAME);
    return {
      kind: Kind.NAME,
      value: token.value,
      loc: this.loc(token)
    };
  } // Implements the parsing rules in the Document section.

  /**
   * Document : Definition+
   */
  ;

  _proto.parseDocument = function parseDocument() {
    var start = this._lexer.token;
    return {
      kind: Kind.DOCUMENT,
      definitions: this.many(TokenKind.SOF, this.parseDefinition, TokenKind.EOF),
      loc: this.loc(start)
    };
  }
  /**
   * Definition :
   *   - ExecutableDefinition
   *   - TypeSystemDefinition
   *   - TypeSystemExtension
   *
   * ExecutableDefinition :
   *   - OperationDefinition
   *   - FragmentDefinition
   */
  ;

  _proto.parseDefinition = function parseDefinition() {
    if (this.peek(TokenKind.NAME)) {
      switch (this._lexer.token.value) {
        case 'query':
        case 'mutation':
        case 'subscription':
          return this.parseOperationDefinition();

        case 'fragment':
          return this.parseFragmentDefinition();

        case 'schema':
        case 'scalar':
        case 'type':
        case 'interface':
        case 'union':
        case 'enum':
        case 'input':
        case 'directive':
          return this.parseTypeSystemDefinition();

        case 'extend':
          return this.parseTypeSystemExtension();
      }
    } else if (this.peek(TokenKind.BRACE_L)) {
      return this.parseOperationDefinition();
    } else if (this.peekDescription()) {
      return this.parseTypeSystemDefinition();
    }

    throw this.unexpected();
  } // Implements the parsing rules in the Operations section.

  /**
   * OperationDefinition :
   *  - SelectionSet
   *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
   */
  ;

  _proto.parseOperationDefinition = function parseOperationDefinition() {
    var start = this._lexer.token;

    if (this.peek(TokenKind.BRACE_L)) {
      return {
        kind: Kind.OPERATION_DEFINITION,
        operation: 'query',
        name: undefined,
        variableDefinitions: [],
        directives: [],
        selectionSet: this.parseSelectionSet(),
        loc: this.loc(start)
      };
    }

    var operation = this.parseOperationType();
    var name;

    if (this.peek(TokenKind.NAME)) {
      name = this.parseName();
    }

    return {
      kind: Kind.OPERATION_DEFINITION,
      operation: operation,
      name: name,
      variableDefinitions: this.parseVariableDefinitions(),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
      loc: this.loc(start)
    };
  }
  /**
   * OperationType : one of query mutation subscription
   */
  ;

  _proto.parseOperationType = function parseOperationType() {
    var operationToken = this.expectToken(TokenKind.NAME);

    switch (operationToken.value) {
      case 'query':
        return 'query';

      case 'mutation':
        return 'mutation';

      case 'subscription':
        return 'subscription';
    }

    throw this.unexpected(operationToken);
  }
  /**
   * VariableDefinitions : ( VariableDefinition+ )
   */
  ;

  _proto.parseVariableDefinitions = function parseVariableDefinitions() {
    return this.optionalMany(TokenKind.PAREN_L, this.parseVariableDefinition, TokenKind.PAREN_R);
  }
  /**
   * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
   */
  ;

  _proto.parseVariableDefinition = function parseVariableDefinition() {
    var start = this._lexer.token;
    return {
      kind: Kind.VARIABLE_DEFINITION,
      variable: this.parseVariable(),
      type: (this.expectToken(TokenKind.COLON), this.parseTypeReference()),
      defaultValue: this.expectOptionalToken(TokenKind.EQUALS) ? this.parseValueLiteral(true) : undefined,
      directives: this.parseDirectives(true),
      loc: this.loc(start)
    };
  }
  /**
   * Variable : $ Name
   */
  ;

  _proto.parseVariable = function parseVariable() {
    var start = this._lexer.token;
    this.expectToken(TokenKind.DOLLAR);
    return {
      kind: Kind.VARIABLE,
      name: this.parseName(),
      loc: this.loc(start)
    };
  }
  /**
   * SelectionSet : { Selection+ }
   */
  ;

  _proto.parseSelectionSet = function parseSelectionSet() {
    var start = this._lexer.token;
    return {
      kind: Kind.SELECTION_SET,
      selections: this.many(TokenKind.BRACE_L, this.parseSelection, TokenKind.BRACE_R),
      loc: this.loc(start)
    };
  }
  /**
   * Selection :
   *   - Field
   *   - FragmentSpread
   *   - InlineFragment
   */
  ;

  _proto.parseSelection = function parseSelection() {
    return this.peek(TokenKind.SPREAD) ? this.parseFragment() : this.parseField();
  }
  /**
   * Field : Alias? Name Arguments? Directives? SelectionSet?
   *
   * Alias : Name :
   */
  ;

  _proto.parseField = function parseField() {
    var start = this._lexer.token;
    var nameOrAlias = this.parseName();
    var alias;
    var name;

    if (this.expectOptionalToken(TokenKind.COLON)) {
      alias = nameOrAlias;
      name = this.parseName();
    } else {
      name = nameOrAlias;
    }

    return {
      kind: Kind.FIELD,
      alias: alias,
      name: name,
      arguments: this.parseArguments(false),
      directives: this.parseDirectives(false),
      selectionSet: this.peek(TokenKind.BRACE_L) ? this.parseSelectionSet() : undefined,
      loc: this.loc(start)
    };
  }
  /**
   * Arguments[Const] : ( Argument[?Const]+ )
   */
  ;

  _proto.parseArguments = function parseArguments(isConst) {
    var item = isConst ? this.parseConstArgument : this.parseArgument;
    return this.optionalMany(TokenKind.PAREN_L, item, TokenKind.PAREN_R);
  }
  /**
   * Argument[Const] : Name : Value[?Const]
   */
  ;

  _proto.parseArgument = function parseArgument() {
    var start = this._lexer.token;
    var name = this.parseName();
    this.expectToken(TokenKind.COLON);
    return {
      kind: Kind.ARGUMENT,
      name: name,
      value: this.parseValueLiteral(false),
      loc: this.loc(start)
    };
  };

  _proto.parseConstArgument = function parseConstArgument() {
    var start = this._lexer.token;
    return {
      kind: Kind.ARGUMENT,
      name: this.parseName(),
      value: (this.expectToken(TokenKind.COLON), this.parseValueLiteral(true)),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Fragments section.

  /**
   * Corresponds to both FragmentSpread and InlineFragment in the spec.
   *
   * FragmentSpread : ... FragmentName Directives?
   *
   * InlineFragment : ... TypeCondition? Directives? SelectionSet
   */
  ;

  _proto.parseFragment = function parseFragment() {
    var start = this._lexer.token;
    this.expectToken(TokenKind.SPREAD);
    var hasTypeCondition = this.expectOptionalKeyword('on');

    if (!hasTypeCondition && this.peek(TokenKind.NAME)) {
      return {
        kind: Kind.FRAGMENT_SPREAD,
        name: this.parseFragmentName(),
        directives: this.parseDirectives(false),
        loc: this.loc(start)
      };
    }

    return {
      kind: Kind.INLINE_FRAGMENT,
      typeCondition: hasTypeCondition ? this.parseNamedType() : undefined,
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
      loc: this.loc(start)
    };
  }
  /**
   * FragmentDefinition :
   *   - fragment FragmentName on TypeCondition Directives? SelectionSet
   *
   * TypeCondition : NamedType
   */
  ;

  _proto.parseFragmentDefinition = function parseFragmentDefinition() {
    var start = this._lexer.token;
    this.expectKeyword('fragment'); // Experimental support for defining variables within fragments changes
    // the grammar of FragmentDefinition:
    //   - fragment FragmentName VariableDefinitions? on TypeCondition Directives? SelectionSet

    if (this._options.experimentalFragmentVariables) {
      return {
        kind: Kind.FRAGMENT_DEFINITION,
        name: this.parseFragmentName(),
        variableDefinitions: this.parseVariableDefinitions(),
        typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
        directives: this.parseDirectives(false),
        selectionSet: this.parseSelectionSet(),
        loc: this.loc(start)
      };
    }

    return {
      kind: Kind.FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
      loc: this.loc(start)
    };
  }
  /**
   * FragmentName : Name but not `on`
   */
  ;

  _proto.parseFragmentName = function parseFragmentName() {
    if (this._lexer.token.value === 'on') {
      throw this.unexpected();
    }

    return this.parseName();
  } // Implements the parsing rules in the Values section.

  /**
   * Value[Const] :
   *   - [~Const] Variable
   *   - IntValue
   *   - FloatValue
   *   - StringValue
   *   - BooleanValue
   *   - NullValue
   *   - EnumValue
   *   - ListValue[?Const]
   *   - ObjectValue[?Const]
   *
   * BooleanValue : one of `true` `false`
   *
   * NullValue : `null`
   *
   * EnumValue : Name but not `true`, `false` or `null`
   */
  ;

  _proto.parseValueLiteral = function parseValueLiteral(isConst) {
    var token = this._lexer.token;

    switch (token.kind) {
      case TokenKind.BRACKET_L:
        return this.parseList(isConst);

      case TokenKind.BRACE_L:
        return this.parseObject(isConst);

      case TokenKind.INT:
        this._lexer.advance();

        return {
          kind: Kind.INT,
          value: token.value,
          loc: this.loc(token)
        };

      case TokenKind.FLOAT:
        this._lexer.advance();

        return {
          kind: Kind.FLOAT,
          value: token.value,
          loc: this.loc(token)
        };

      case TokenKind.STRING:
      case TokenKind.BLOCK_STRING:
        return this.parseStringLiteral();

      case TokenKind.NAME:
        if (token.value === 'true' || token.value === 'false') {
          this._lexer.advance();

          return {
            kind: Kind.BOOLEAN,
            value: token.value === 'true',
            loc: this.loc(token)
          };
        } else if (token.value === 'null') {
          this._lexer.advance();

          return {
            kind: Kind.NULL,
            loc: this.loc(token)
          };
        }

        this._lexer.advance();

        return {
          kind: Kind.ENUM,
          value: token.value,
          loc: this.loc(token)
        };

      case TokenKind.DOLLAR:
        if (!isConst) {
          return this.parseVariable();
        }

        break;
    }

    throw this.unexpected();
  };

  _proto.parseStringLiteral = function parseStringLiteral() {
    var token = this._lexer.token;

    this._lexer.advance();

    return {
      kind: Kind.STRING,
      value: token.value,
      block: token.kind === TokenKind.BLOCK_STRING,
      loc: this.loc(token)
    };
  }
  /**
   * ListValue[Const] :
   *   - [ ]
   *   - [ Value[?Const]+ ]
   */
  ;

  _proto.parseList = function parseList(isConst) {
    var _this = this;

    var start = this._lexer.token;

    var item = function item() {
      return _this.parseValueLiteral(isConst);
    };

    return {
      kind: Kind.LIST,
      values: this.any(TokenKind.BRACKET_L, item, TokenKind.BRACKET_R),
      loc: this.loc(start)
    };
  }
  /**
   * ObjectValue[Const] :
   *   - { }
   *   - { ObjectField[?Const]+ }
   */
  ;

  _proto.parseObject = function parseObject(isConst) {
    var _this2 = this;

    var start = this._lexer.token;

    var item = function item() {
      return _this2.parseObjectField(isConst);
    };

    return {
      kind: Kind.OBJECT,
      fields: this.any(TokenKind.BRACE_L, item, TokenKind.BRACE_R),
      loc: this.loc(start)
    };
  }
  /**
   * ObjectField[Const] : Name : Value[?Const]
   */
  ;

  _proto.parseObjectField = function parseObjectField(isConst) {
    var start = this._lexer.token;
    var name = this.parseName();
    this.expectToken(TokenKind.COLON);
    return {
      kind: Kind.OBJECT_FIELD,
      name: name,
      value: this.parseValueLiteral(isConst),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Directives section.

  /**
   * Directives[Const] : Directive[?Const]+
   */
  ;

  _proto.parseDirectives = function parseDirectives(isConst) {
    var directives = [];

    while (this.peek(TokenKind.AT)) {
      directives.push(this.parseDirective(isConst));
    }

    return directives;
  }
  /**
   * Directive[Const] : @ Name Arguments[?Const]?
   */
  ;

  _proto.parseDirective = function parseDirective(isConst) {
    var start = this._lexer.token;
    this.expectToken(TokenKind.AT);
    return {
      kind: Kind.DIRECTIVE,
      name: this.parseName(),
      arguments: this.parseArguments(isConst),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Types section.

  /**
   * Type :
   *   - NamedType
   *   - ListType
   *   - NonNullType
   */
  ;

  _proto.parseTypeReference = function parseTypeReference() {
    var start = this._lexer.token;
    var type;

    if (this.expectOptionalToken(TokenKind.BRACKET_L)) {
      type = this.parseTypeReference();
      this.expectToken(TokenKind.BRACKET_R);
      type = {
        kind: Kind.LIST_TYPE,
        type: type,
        loc: this.loc(start)
      };
    } else {
      type = this.parseNamedType();
    }

    if (this.expectOptionalToken(TokenKind.BANG)) {
      return {
        kind: Kind.NON_NULL_TYPE,
        type: type,
        loc: this.loc(start)
      };
    }

    return type;
  }
  /**
   * NamedType : Name
   */
  ;

  _proto.parseNamedType = function parseNamedType() {
    var start = this._lexer.token;
    return {
      kind: Kind.NAMED_TYPE,
      name: this.parseName(),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Type Definition section.

  /**
   * TypeSystemDefinition :
   *   - SchemaDefinition
   *   - TypeDefinition
   *   - DirectiveDefinition
   *
   * TypeDefinition :
   *   - ScalarTypeDefinition
   *   - ObjectTypeDefinition
   *   - InterfaceTypeDefinition
   *   - UnionTypeDefinition
   *   - EnumTypeDefinition
   *   - InputObjectTypeDefinition
   */
  ;

  _proto.parseTypeSystemDefinition = function parseTypeSystemDefinition() {
    // Many definitions begin with a description and require a lookahead.
    var keywordToken = this.peekDescription() ? this._lexer.lookahead() : this._lexer.token;

    if (keywordToken.kind === TokenKind.NAME) {
      switch (keywordToken.value) {
        case 'schema':
          return this.parseSchemaDefinition();

        case 'scalar':
          return this.parseScalarTypeDefinition();

        case 'type':
          return this.parseObjectTypeDefinition();

        case 'interface':
          return this.parseInterfaceTypeDefinition();

        case 'union':
          return this.parseUnionTypeDefinition();

        case 'enum':
          return this.parseEnumTypeDefinition();

        case 'input':
          return this.parseInputObjectTypeDefinition();

        case 'directive':
          return this.parseDirectiveDefinition();
      }
    }

    throw this.unexpected(keywordToken);
  };

  _proto.peekDescription = function peekDescription() {
    return this.peek(TokenKind.STRING) || this.peek(TokenKind.BLOCK_STRING);
  }
  /**
   * Description : StringValue
   */
  ;

  _proto.parseDescription = function parseDescription() {
    if (this.peekDescription()) {
      return this.parseStringLiteral();
    }
  }
  /**
   * SchemaDefinition : schema Directives[Const]? { OperationTypeDefinition+ }
   */
  ;

  _proto.parseSchemaDefinition = function parseSchemaDefinition() {
    var start = this._lexer.token;
    this.expectKeyword('schema');
    var directives = this.parseDirectives(true);
    var operationTypes = this.many(TokenKind.BRACE_L, this.parseOperationTypeDefinition, TokenKind.BRACE_R);
    return {
      kind: Kind.SCHEMA_DEFINITION,
      directives: directives,
      operationTypes: operationTypes,
      loc: this.loc(start)
    };
  }
  /**
   * OperationTypeDefinition : OperationType : NamedType
   */
  ;

  _proto.parseOperationTypeDefinition = function parseOperationTypeDefinition() {
    var start = this._lexer.token;
    var operation = this.parseOperationType();
    this.expectToken(TokenKind.COLON);
    var type = this.parseNamedType();
    return {
      kind: Kind.OPERATION_TYPE_DEFINITION,
      operation: operation,
      type: type,
      loc: this.loc(start)
    };
  }
  /**
   * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
   */
  ;

  _proto.parseScalarTypeDefinition = function parseScalarTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('scalar');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    return {
      kind: Kind.SCALAR_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * ObjectTypeDefinition :
   *   Description?
   *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
   */
  ;

  _proto.parseObjectTypeDefinition = function parseObjectTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('type');
    var name = this.parseName();
    var interfaces = this.parseImplementsInterfaces();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();
    return {
      kind: Kind.OBJECT_TYPE_DEFINITION,
      description: description,
      name: name,
      interfaces: interfaces,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * ImplementsInterfaces :
   *   - implements `&`? NamedType
   *   - ImplementsInterfaces & NamedType
   */
  ;

  _proto.parseImplementsInterfaces = function parseImplementsInterfaces() {
    var types = [];

    if (this.expectOptionalKeyword('implements')) {
      // Optional leading ampersand
      this.expectOptionalToken(TokenKind.AMP);

      do {
        types.push(this.parseNamedType());
      } while (this.expectOptionalToken(TokenKind.AMP) || // Legacy support for the SDL?
      this._options.allowLegacySDLImplementsInterfaces && this.peek(TokenKind.NAME));
    }

    return types;
  }
  /**
   * FieldsDefinition : { FieldDefinition+ }
   */
  ;

  _proto.parseFieldsDefinition = function parseFieldsDefinition() {
    // Legacy support for the SDL?
    if (this._options.allowLegacySDLEmptyFields && this.peek(TokenKind.BRACE_L) && this._lexer.lookahead().kind === TokenKind.BRACE_R) {
      this._lexer.advance();

      this._lexer.advance();

      return [];
    }

    return this.optionalMany(TokenKind.BRACE_L, this.parseFieldDefinition, TokenKind.BRACE_R);
  }
  /**
   * FieldDefinition :
   *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
   */
  ;

  _proto.parseFieldDefinition = function parseFieldDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    var name = this.parseName();
    var args = this.parseArgumentDefs();
    this.expectToken(TokenKind.COLON);
    var type = this.parseTypeReference();
    var directives = this.parseDirectives(true);
    return {
      kind: Kind.FIELD_DEFINITION,
      description: description,
      name: name,
      arguments: args,
      type: type,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * ArgumentsDefinition : ( InputValueDefinition+ )
   */
  ;

  _proto.parseArgumentDefs = function parseArgumentDefs() {
    return this.optionalMany(TokenKind.PAREN_L, this.parseInputValueDef, TokenKind.PAREN_R);
  }
  /**
   * InputValueDefinition :
   *   - Description? Name : Type DefaultValue? Directives[Const]?
   */
  ;

  _proto.parseInputValueDef = function parseInputValueDef() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    var name = this.parseName();
    this.expectToken(TokenKind.COLON);
    var type = this.parseTypeReference();
    var defaultValue;

    if (this.expectOptionalToken(TokenKind.EQUALS)) {
      defaultValue = this.parseValueLiteral(true);
    }

    var directives = this.parseDirectives(true);
    return {
      kind: Kind.INPUT_VALUE_DEFINITION,
      description: description,
      name: name,
      type: type,
      defaultValue: defaultValue,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * InterfaceTypeDefinition :
   *   - Description? interface Name Directives[Const]? FieldsDefinition?
   */
  ;

  _proto.parseInterfaceTypeDefinition = function parseInterfaceTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('interface');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();
    return {
      kind: Kind.INTERFACE_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * UnionTypeDefinition :
   *   - Description? union Name Directives[Const]? UnionMemberTypes?
   */
  ;

  _proto.parseUnionTypeDefinition = function parseUnionTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('union');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var types = this.parseUnionMemberTypes();
    return {
      kind: Kind.UNION_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      types: types,
      loc: this.loc(start)
    };
  }
  /**
   * UnionMemberTypes :
   *   - = `|`? NamedType
   *   - UnionMemberTypes | NamedType
   */
  ;

  _proto.parseUnionMemberTypes = function parseUnionMemberTypes() {
    var types = [];

    if (this.expectOptionalToken(TokenKind.EQUALS)) {
      // Optional leading pipe
      this.expectOptionalToken(TokenKind.PIPE);

      do {
        types.push(this.parseNamedType());
      } while (this.expectOptionalToken(TokenKind.PIPE));
    }

    return types;
  }
  /**
   * EnumTypeDefinition :
   *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
   */
  ;

  _proto.parseEnumTypeDefinition = function parseEnumTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('enum');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var values = this.parseEnumValuesDefinition();
    return {
      kind: Kind.ENUM_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      values: values,
      loc: this.loc(start)
    };
  }
  /**
   * EnumValuesDefinition : { EnumValueDefinition+ }
   */
  ;

  _proto.parseEnumValuesDefinition = function parseEnumValuesDefinition() {
    return this.optionalMany(TokenKind.BRACE_L, this.parseEnumValueDefinition, TokenKind.BRACE_R);
  }
  /**
   * EnumValueDefinition : Description? EnumValue Directives[Const]?
   *
   * EnumValue : Name
   */
  ;

  _proto.parseEnumValueDefinition = function parseEnumValueDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    return {
      kind: Kind.ENUM_VALUE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * InputObjectTypeDefinition :
   *   - Description? input Name Directives[Const]? InputFieldsDefinition?
   */
  ;

  _proto.parseInputObjectTypeDefinition = function parseInputObjectTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('input');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var fields = this.parseInputFieldsDefinition();
    return {
      kind: Kind.INPUT_OBJECT_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * InputFieldsDefinition : { InputValueDefinition+ }
   */
  ;

  _proto.parseInputFieldsDefinition = function parseInputFieldsDefinition() {
    return this.optionalMany(TokenKind.BRACE_L, this.parseInputValueDef, TokenKind.BRACE_R);
  }
  /**
   * TypeSystemExtension :
   *   - SchemaExtension
   *   - TypeExtension
   *
   * TypeExtension :
   *   - ScalarTypeExtension
   *   - ObjectTypeExtension
   *   - InterfaceTypeExtension
   *   - UnionTypeExtension
   *   - EnumTypeExtension
   *   - InputObjectTypeDefinition
   */
  ;

  _proto.parseTypeSystemExtension = function parseTypeSystemExtension() {
    var keywordToken = this._lexer.lookahead();

    if (keywordToken.kind === TokenKind.NAME) {
      switch (keywordToken.value) {
        case 'schema':
          return this.parseSchemaExtension();

        case 'scalar':
          return this.parseScalarTypeExtension();

        case 'type':
          return this.parseObjectTypeExtension();

        case 'interface':
          return this.parseInterfaceTypeExtension();

        case 'union':
          return this.parseUnionTypeExtension();

        case 'enum':
          return this.parseEnumTypeExtension();

        case 'input':
          return this.parseInputObjectTypeExtension();
      }
    }

    throw this.unexpected(keywordToken);
  }
  /**
   * SchemaExtension :
   *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
   *  - extend schema Directives[Const]
   */
  ;

  _proto.parseSchemaExtension = function parseSchemaExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('schema');
    var directives = this.parseDirectives(true);
    var operationTypes = this.optionalMany(TokenKind.BRACE_L, this.parseOperationTypeDefinition, TokenKind.BRACE_R);

    if (directives.length === 0 && operationTypes.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: Kind.SCHEMA_EXTENSION,
      directives: directives,
      operationTypes: operationTypes,
      loc: this.loc(start)
    };
  }
  /**
   * ScalarTypeExtension :
   *   - extend scalar Name Directives[Const]
   */
  ;

  _proto.parseScalarTypeExtension = function parseScalarTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('scalar');
    var name = this.parseName();
    var directives = this.parseDirectives(true);

    if (directives.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: Kind.SCALAR_TYPE_EXTENSION,
      name: name,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * ObjectTypeExtension :
   *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend type Name ImplementsInterfaces? Directives[Const]
   *  - extend type Name ImplementsInterfaces
   */
  ;

  _proto.parseObjectTypeExtension = function parseObjectTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('type');
    var name = this.parseName();
    var interfaces = this.parseImplementsInterfaces();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();

    if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: Kind.OBJECT_TYPE_EXTENSION,
      name: name,
      interfaces: interfaces,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * InterfaceTypeExtension :
   *   - extend interface Name Directives[Const]? FieldsDefinition
   *   - extend interface Name Directives[Const]
   */
  ;

  _proto.parseInterfaceTypeExtension = function parseInterfaceTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('interface');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();

    if (directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: Kind.INTERFACE_TYPE_EXTENSION,
      name: name,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * UnionTypeExtension :
   *   - extend union Name Directives[Const]? UnionMemberTypes
   *   - extend union Name Directives[Const]
   */
  ;

  _proto.parseUnionTypeExtension = function parseUnionTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('union');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var types = this.parseUnionMemberTypes();

    if (directives.length === 0 && types.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: Kind.UNION_TYPE_EXTENSION,
      name: name,
      directives: directives,
      types: types,
      loc: this.loc(start)
    };
  }
  /**
   * EnumTypeExtension :
   *   - extend enum Name Directives[Const]? EnumValuesDefinition
   *   - extend enum Name Directives[Const]
   */
  ;

  _proto.parseEnumTypeExtension = function parseEnumTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('enum');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var values = this.parseEnumValuesDefinition();

    if (directives.length === 0 && values.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: Kind.ENUM_TYPE_EXTENSION,
      name: name,
      directives: directives,
      values: values,
      loc: this.loc(start)
    };
  }
  /**
   * InputObjectTypeExtension :
   *   - extend input Name Directives[Const]? InputFieldsDefinition
   *   - extend input Name Directives[Const]
   */
  ;

  _proto.parseInputObjectTypeExtension = function parseInputObjectTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('input');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var fields = this.parseInputFieldsDefinition();

    if (directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: Kind.INPUT_OBJECT_TYPE_EXTENSION,
      name: name,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * DirectiveDefinition :
   *   - Description? directive @ Name ArgumentsDefinition? `repeatable`? on DirectiveLocations
   */
  ;

  _proto.parseDirectiveDefinition = function parseDirectiveDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('directive');
    this.expectToken(TokenKind.AT);
    var name = this.parseName();
    var args = this.parseArgumentDefs();
    var repeatable = this.expectOptionalKeyword('repeatable');
    this.expectKeyword('on');
    var locations = this.parseDirectiveLocations();
    return {
      kind: Kind.DIRECTIVE_DEFINITION,
      description: description,
      name: name,
      arguments: args,
      repeatable: repeatable,
      locations: locations,
      loc: this.loc(start)
    };
  }
  /**
   * DirectiveLocations :
   *   - `|`? DirectiveLocation
   *   - DirectiveLocations | DirectiveLocation
   */
  ;

  _proto.parseDirectiveLocations = function parseDirectiveLocations() {
    // Optional leading pipe
    this.expectOptionalToken(TokenKind.PIPE);
    var locations = [];

    do {
      locations.push(this.parseDirectiveLocation());
    } while (this.expectOptionalToken(TokenKind.PIPE));

    return locations;
  }
  /*
   * DirectiveLocation :
   *   - ExecutableDirectiveLocation
   *   - TypeSystemDirectiveLocation
   *
   * ExecutableDirectiveLocation : one of
   *   `QUERY`
   *   `MUTATION`
   *   `SUBSCRIPTION`
   *   `FIELD`
   *   `FRAGMENT_DEFINITION`
   *   `FRAGMENT_SPREAD`
   *   `INLINE_FRAGMENT`
   *
   * TypeSystemDirectiveLocation : one of
   *   `SCHEMA`
   *   `SCALAR`
   *   `OBJECT`
   *   `FIELD_DEFINITION`
   *   `ARGUMENT_DEFINITION`
   *   `INTERFACE`
   *   `UNION`
   *   `ENUM`
   *   `ENUM_VALUE`
   *   `INPUT_OBJECT`
   *   `INPUT_FIELD_DEFINITION`
   */
  ;

  _proto.parseDirectiveLocation = function parseDirectiveLocation() {
    var start = this._lexer.token;
    var name = this.parseName();

    if (DirectiveLocation[name.value] !== undefined) {
      return name;
    }

    throw this.unexpected(start);
  } // Core parsing utility functions

  /**
   * Returns a location object, used to identify the place in
   * the source that created a given parsed object.
   */
  ;

  _proto.loc = function loc(startToken) {
    if (!this._options.noLocation) {
      return new Loc(startToken, this._lexer.lastToken, this._lexer.source);
    }
  }
  /**
   * Determines if the next token is of a given kind
   */
  ;

  _proto.peek = function peek(kind) {
    return this._lexer.token.kind === kind;
  }
  /**
   * If the next token is of the given kind, return that token after advancing
   * the lexer. Otherwise, do not change the parser state and throw an error.
   */
  ;

  _proto.expectToken = function expectToken(kind) {
    var token = this._lexer.token;

    if (token.kind === kind) {
      this._lexer.advance();

      return token;
    }

    throw syntaxError(this._lexer.source, token.start, "Expected ".concat(kind, ", found ").concat(getTokenDesc(token)));
  }
  /**
   * If the next token is of the given kind, return that token after advancing
   * the lexer. Otherwise, do not change the parser state and return undefined.
   */
  ;

  _proto.expectOptionalToken = function expectOptionalToken(kind) {
    var token = this._lexer.token;

    if (token.kind === kind) {
      this._lexer.advance();

      return token;
    }

    return undefined;
  }
  /**
   * If the next token is a given keyword, advance the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  ;

  _proto.expectKeyword = function expectKeyword(value) {
    var token = this._lexer.token;

    if (token.kind === TokenKind.NAME && token.value === value) {
      this._lexer.advance();
    } else {
      throw syntaxError(this._lexer.source, token.start, "Expected \"".concat(value, "\", found ").concat(getTokenDesc(token)));
    }
  }
  /**
   * If the next token is a given keyword, return "true" after advancing
   * the lexer. Otherwise, do not change the parser state and return "false".
   */
  ;

  _proto.expectOptionalKeyword = function expectOptionalKeyword(value) {
    var token = this._lexer.token;

    if (token.kind === TokenKind.NAME && token.value === value) {
      this._lexer.advance();

      return true;
    }

    return false;
  }
  /**
   * Helper function for creating an error when an unexpected lexed token
   * is encountered.
   */
  ;

  _proto.unexpected = function unexpected(atToken) {
    var token = atToken || this._lexer.token;
    return syntaxError(this._lexer.source, token.start, "Unexpected ".concat(getTokenDesc(token)));
  }
  /**
   * Returns a possibly empty list of parse nodes, determined by
   * the parseFn. This list begins with a lex token of openKind
   * and ends with a lex token of closeKind. Advances the parser
   * to the next lex token after the closing token.
   */
  ;

  _proto.any = function any(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    var nodes = [];

    while (!this.expectOptionalToken(closeKind)) {
      nodes.push(parseFn.call(this));
    }

    return nodes;
  }
  /**
   * Returns a list of parse nodes, determined by the parseFn.
   * It can be empty only if open token is missing otherwise it will always
   * return non-empty list that begins with a lex token of openKind and ends
   * with a lex token of closeKind. Advances the parser to the next lex token
   * after the closing token.
   */
  ;

  _proto.optionalMany = function optionalMany(openKind, parseFn, closeKind) {
    if (this.expectOptionalToken(openKind)) {
      var nodes = [];

      do {
        nodes.push(parseFn.call(this));
      } while (!this.expectOptionalToken(closeKind));

      return nodes;
    }

    return [];
  }
  /**
   * Returns a non-empty list of parse nodes, determined by
   * the parseFn. This list begins with a lex token of openKind
   * and ends with a lex token of closeKind. Advances the parser
   * to the next lex token after the closing token.
   */
  ;

  _proto.many = function many(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    var nodes = [];

    do {
      nodes.push(parseFn.call(this));
    } while (!this.expectOptionalToken(closeKind));

    return nodes;
  };

  return Parser;
}();

function Loc(startToken, endToken, source) {
  this.start = startToken.start;
  this.end = endToken.end;
  this.startToken = startToken;
  this.endToken = endToken;
  this.source = source;
} // Print a simplified form when appearing in JSON/util.inspect.


defineToJSON(Loc, function () {
  return {
    start: this.start,
    end: this.end
  };
});
/**
 * A helper function to describe a token as a string for debugging
 */

function getTokenDesc(token) {
  var value = token.value;
  return value ? "".concat(token.kind, " \"").concat(value, "\"") : token.kind;
}

var parser$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  parse: parse,
  parseValue: parseValue,
  parseType: parseType
});

var parser$2 = getCjsExportFromNamespace(parser$1);

var parse$1 = parser$2.parse;

// Strip insignificant whitespace
// Note that this could do a lot more, such as reorder fields etc.
function normalize(string) {
  return string.replace(/[\s,]+/g, ' ').trim();
}

// A map docString -> graphql document
var docCache = {};

// A map fragmentName -> [normalized source]
var fragmentSourceMap = {};

function cacheKeyFromLoc(loc) {
  return normalize(loc.source.body.substring(loc.start, loc.end));
}

// For testing.
function resetCaches() {
  docCache = {};
  fragmentSourceMap = {};
}

// Take a unstripped parsed document (query/mutation or even fragment), and
// check all fragment definitions, checking for name->source uniqueness.
// We also want to make sure only unique fragments exist in the document.
var printFragmentWarnings = true;
function processFragments(ast) {
  var astFragmentMap = {};
  var definitions = [];

  for (var i = 0; i < ast.definitions.length; i++) {
    var fragmentDefinition = ast.definitions[i];

    if (fragmentDefinition.kind === 'FragmentDefinition') {
      var fragmentName = fragmentDefinition.name.value;
      var sourceKey = cacheKeyFromLoc(fragmentDefinition.loc);

      // We know something about this fragment
      if (fragmentSourceMap.hasOwnProperty(fragmentName) && !fragmentSourceMap[fragmentName][sourceKey]) {

        // this is a problem because the app developer is trying to register another fragment with
        // the same name as one previously registered. So, we tell them about it.
        if (printFragmentWarnings) {
          console.warn("Warning: fragment with name " + fragmentName + " already exists.\n"
            + "graphql-tag enforces all fragment names across your application to be unique; read more about\n"
            + "this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names");
        }

        fragmentSourceMap[fragmentName][sourceKey] = true;

      } else if (!fragmentSourceMap.hasOwnProperty(fragmentName)) {
        fragmentSourceMap[fragmentName] = {};
        fragmentSourceMap[fragmentName][sourceKey] = true;
      }

      if (!astFragmentMap[sourceKey]) {
        astFragmentMap[sourceKey] = true;
        definitions.push(fragmentDefinition);
      }
    } else {
      definitions.push(fragmentDefinition);
    }
  }

  ast.definitions = definitions;
  return ast;
}

function disableFragmentWarnings() {
  printFragmentWarnings = false;
}

function stripLoc(doc, removeLocAtThisLevel) {
  var docType = Object.prototype.toString.call(doc);

  if (docType === '[object Array]') {
    return doc.map(function (d) {
      return stripLoc(d, removeLocAtThisLevel);
    });
  }

  if (docType !== '[object Object]') {
    throw new Error('Unexpected input.');
  }

  // We don't want to remove the root loc field so we can use it
  // for fragment substitution (see below)
  if (removeLocAtThisLevel && doc.loc) {
    delete doc.loc;
  }

  // https://github.com/apollographql/graphql-tag/issues/40
  if (doc.loc) {
    delete doc.loc.startToken;
    delete doc.loc.endToken;
  }

  var keys = Object.keys(doc);
  var key;
  var value;
  var valueType;

  for (key in keys) {
    if (keys.hasOwnProperty(key)) {
      value = doc[keys[key]];
      valueType = Object.prototype.toString.call(value);

      if (valueType === '[object Object]' || valueType === '[object Array]') {
        doc[keys[key]] = stripLoc(value, true);
      }
    }
  }

  return doc;
}

var experimentalFragmentVariables = false;
function parseDocument(doc) {
  var cacheKey = normalize(doc);

  if (docCache[cacheKey]) {
    return docCache[cacheKey];
  }

  var parsed = parse$1(doc, { experimentalFragmentVariables: experimentalFragmentVariables });
  if (!parsed || parsed.kind !== 'Document') {
    throw new Error('Not a valid GraphQL document.');
  }

  // check that all "new" fragments inside the documents are consistent with
  // existing fragments of the same name
  parsed = processFragments(parsed);
  parsed = stripLoc(parsed, false);
  docCache[cacheKey] = parsed;

  return parsed;
}

function enableExperimentalFragmentVariables() {
  experimentalFragmentVariables = true;
}

function disableExperimentalFragmentVariables() {
  experimentalFragmentVariables = false;
}

// XXX This should eventually disallow arbitrary string interpolation, like Relay does
function gql(/* arguments */) {
  var args = Array.prototype.slice.call(arguments);

  var literals = args[0];

  // We always get literals[0] and then matching post literals for each arg given
  var result = (typeof(literals) === "string") ? literals : literals[0];

  for (var i = 1; i < args.length; i++) {
    if (args[i] && args[i].kind && args[i].kind === 'Document') {
      result += args[i].loc.source.body;
    } else {
      result += args[i];
    }

    result += literals[i];
  }

  return parseDocument(result);
}

// Support typescript, which isn't as nice as Babel about default exports
gql.default = gql;
gql.resetCaches = resetCaches;
gql.disableFragmentWarnings = disableFragmentWarnings;
gql.enableExperimentalFragmentVariables = enableExperimentalFragmentVariables;
gql.disableExperimentalFragmentVariables = disableExperimentalFragmentVariables;

var src = gql;

function _templateObject$f() {
  var data = _taggedTemplateLiteral(["\n    subscription GetNotifications($userId: Int) {\n      items: Notification(where: { userId: { _eq: $userId } }) {\n        id\n        notification: Communication {\n          message: content\n          priority\n          createdAt\n        }\n      }\n    }\n  "]);

  _templateObject$f = function _templateObject() {
    return data;
  };

  return data;
}
var useNotifications = function useNotifications(url) {
  // const [data, setData] = useState({ messages: [] })
  // if (!url) {
  //   return { data }
  // }
  var GET_NOTIFICATIONS = src(_templateObject$f());

  var _useSubscription = client.useSubscription(GET_NOTIFICATIONS, {
    variables: {
      userId: 48
    }
  }),
      _useSubscription$data = _useSubscription.data;

  _useSubscription$data = _useSubscription$data === void 0 ? {
    items: []
  } : _useSubscription$data;
  var items = _useSubscription$data.items; // Debug
  // console.log('useNotifications')
  // console.log('Params', url, params, seconds)
  // console.log('Loading', loading)
  // console.log('Items', items)
  // const fetchNotifications = async () => {
  //   const res = await Api.get(url, params)
  //   if (res.status === 200 && res.data.messages) {
  //     window.localStorage.setItem('active-notifications', JSON.stringify(res.data.messages))
  //     setData({ notifications: res.data.messages })
  //   }
  // }
  // useInterval(() => {
  //   fetchNotifications()
  // }, seconds * 1000)
  // useEffect(() => {
  //   fetchNotifications()
  // }, [])
  // return { data, fetchNotifications }

  return items;
};

/**
 * Services - OffCanvas - Context
 */
var OffCanvasContext = /*#__PURE__*/React.createContext();

var __jsx$35 = React__default['default'].createElement;
var DURATION = 300;
var OffCanvasProvider = function OffCanvasProvider(_ref) {
  var children = _ref.children;

  var _useState = React.useState([]),
      dataManager = _useState[0],
      setDataManager = _useState[1];

  var _useState2 = React.useState([]),
      visibilityManager = _useState2[0],
      setVisibilityManager = _useState2[1];

  var handleClose = function handleClose() {
    setVisibilityManager(function (prev) {
      prev.pop();
      return _toConsumableArray(prev);
    }); // Prevent data to disappear suddenly on close

    setTimeout(function () {
      setDataManager(function (prev) {
        prev.pop();
        return _toConsumableArray(prev);
      });
    }, dataManager.length === 1 ? DURATION : 0);
  };

  var handleShow = function handleShow(data) {
    if (data && data.content) {
      setVisibilityManager(function (prev) {
        return [].concat(_toConsumableArray(prev), [true]);
      });
      setDataManager(function (prev) {
        return [].concat(_toConsumableArray(prev), [data]);
      });
    } else {
      handleClose();
    }
  }; // Get width and placement from first item


  var options = getFirst(dataManager); // Get title and content from last item

  var data = getLast(dataManager);
  return __jsx$35(OffCanvasContext.Provider, {
    value: {
      show: handleShow,
      close: handleClose
    }
  }, children, __jsx$35(OffCanvas, {
    context: data === null || data === void 0 ? void 0 : data.context,
    handleSubmit: data === null || data === void 0 ? void 0 : data.handleSubmit,
    hasAvatar: data === null || data === void 0 ? void 0 : data.hasAvatar,
    headerContent: data === null || data === void 0 ? void 0 : data.headerContent,
    headerText: (data === null || data === void 0 ? void 0 : data.title) || '',
    lockScrollOnOpen: true,
    overlay: true,
    overlayOpacity: data === null || data === void 0 ? void 0 : data.overlayOpacity,
    placement: options === null || options === void 0 ? void 0 : options.placement,
    submit: data === null || data === void 0 ? void 0 : data.submit,
    show: !!visibilityManager.length,
    toggleShow: handleClose,
    transitionDuration: DURATION,
    variant: data === null || data === void 0 ? void 0 : data.variant,
    width: options === null || options === void 0 ? void 0 : options.width
  }, dataManager.map(function (d, i) {
    return __jsx$35(StyledWrapper$2, {
      key: i,
      show: i + 1 === dataManager.length
    }, d.content);
  })));
};
var StyledWrapper$2 = styled__default['default'].div.withConfig({
  displayName: "provider__StyledWrapper",
  componentId: "q8lkvu-0"
})(["", ""], function (_ref2) {
  var show = _ref2.show;
  return !show && 'display:none';
});

var __jsx$36 = React__default['default'].createElement;

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var MyApp = /*#__PURE__*/function (_App) {
  _inherits(MyApp, _App);

  var _super = _createSuper$1(MyApp);

  function MyApp() {
    _classCallCheck(this, MyApp);

    return _super.apply(this, arguments);
  }

  _createClass(MyApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var google = this.props.google;

      if (google) {
        TagManager__default['default'].initialize({
          gtmId: google.analytics
        });
      }
    }
  }, {
    key: "elements",
    value: function elements() {
      var _this$props = this.props,
          offCanvas = _this$props.offCanvas,
          user = _this$props.user;
      return __jsx$36(React__default['default'].Fragment, null, __jsx$36(ThemeStyle, null), user && __jsx$36(UserProvider, null, __jsx$36(AuthorizationProvider, null, __jsx$36(InternationalisationProvider, null, __jsx$36(NotificationsProvider, null, offCanvas ? __jsx$36(OffCanvasProvider, null, this.layout()) : this.layout())))), !user && this.layout());
    }
  }, {
    key: "data",
    value: function data() {
      var _this$props2 = this.props,
          apolloClient = _this$props2.apolloClient,
          config = _this$props2.config;
      return __jsx$36(React__default['default'].Fragment, null, __jsx$36(ConfigProvider, {
        config: config
      }, apolloClient ? __jsx$36(client.ApolloProvider, {
        client: apolloClient
      }, this.elements()) : this.elements()));
    }
  }, {
    key: "layout",
    value: function layout() {
      var _this$props3 = this.props,
          Component = _this$props3.Component,
          Layout = _this$props3.Layout,
          pageProps = _this$props3.pageProps,
          pageProgressBar = _this$props3.pageProgressBar,
          router = _this$props3.router;
      return __jsx$36(Layout, null, pageProgressBar && __jsx$36(PageProgressBar, {
        router: router
      }), __jsx$36(Component, pageProps));
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx$36(styled.ThemeProvider, {
        theme: merge__default['default'](Theme, this.props.theme)
      }, this.data());
    }
  }]);

  return MyApp;
}(App__default['default']);

_defineProperty(MyApp, "propTypes", {
  apolloClient: propTypes.object,
  Component: propTypes.func.isRequired,
  config: propTypes.object,
  google: propTypes.object,
  icons: propTypes.object,
  Layout: propTypes.any.isRequired,
  offCanvas: propTypes.bool,
  pageProps: propTypes.object,
  pageProgressBar: propTypes.bool,
  theme: propTypes.object,
  user: propTypes.bool
});

_defineProperty(MyApp, "defaultProps", {
  offCanvas: false,
  pageProgressBar: false,
  theme: [],
  user: false
});

exports.ALIGN = ALIGN;
exports.Accordion = Accordion;
exports.AccordionItem = AccordionItem;
exports.Address = Address;
exports.Adornment = Adornment;
exports.Alert = Alert;
exports.AlertContent = AlertContent;
exports.AlertHeader = AlertHeader;
exports.Api = Api;
exports.Article = Article;
exports.ArticleLayout = ArticleLayout;
exports.AuthorizationContext = AuthorizationContext;
exports.AuthorizationProvider = AuthorizationProvider;
exports.Avatar = Avatar;
exports.BACKGROUND = BACKGROUND;
exports.Badge = Badge;
exports.Bar = Bar$1;
exports.BarChart = BarChart;
exports.BarConfig = BarConfig;
exports.BigCalendar = BigCalendar;
exports.Blockquote = Blockquote;
exports.BlogArchive = BlogArchive;
exports.BlogAuthor = BlogAuthor;
exports.BlogCard = BlogCard;
exports.BlogCategories = BlogCategories;
exports.BlogCategory = BlogCategory;
exports.BlogDetails = BlogDetails;
exports.BlogFindFood = BlogFindFood;
exports.BlogHero = BlogHero;
exports.BlogListing = BlogListing;
exports.BlogMedia = BlogMedia;
exports.BlogPromo = BlogPromo;
exports.BlogReadTime = BlogReadTime;
exports.BlogRecent = BlogRecent;
exports.BlogSidebar = BlogSidebar;
exports.BlogSocial = BlogSocial;
exports.BlogTagCloud = BlogTagCloud;
exports.BlogTags = BlogTags;
exports.Bootstrap = Bootstrap;
exports.Brand = Brand;
exports.Breadcrumb = Breadcrumb;
exports.Button = Button;
exports.ButtonToolbar = ButtonToolbar;
exports.Buttons = Buttons;
exports.COLOUR = COLOUR;
exports.COMMON_INPUT_STYLES = COMMON_INPUT_STYLES;
exports.CONTEXT = CONTEXT;
exports.COUNTRY = COUNTRY;
exports.Calendar = Calendar;
exports.Card = Card;
exports.CardBody = CardBody;
exports.CardDecks = CardDecks;
exports.CardFooter = CardFooter;
exports.CardHeader = CardHeader;
exports.CardImage = CardImage;
exports.Carousel = Carousel;
exports.CarouselSlide = CarouselSlide;
exports.CheckboxField = CheckboxField;
exports.Close = Close;
exports.ColorPicker = ColorPicker;
exports.Column = Column;
exports.ConfigContext = ConfigContext;
exports.ConfigProvider = ConfigProvider;
exports.Contained = Contained;
exports.Container = Container;
exports.Controller = Controller;
exports.Copyright = Copyright;
exports.CurrencyInput = CurrencyInput;
exports.DIMENSION = DIMENSION;
exports.DIMENSION_PROP_TYPES = DIMENSION_PROP_TYPES;
exports.DISPLAY = DISPLAY;
exports.DISPLAY_PROP_TYPES = DISPLAY_PROP_TYPES;
exports.DOG_BREED = DOG_BREED;
exports.DOG_COAT = DOG_COAT;
exports.DOG_COLOUR = DOG_COLOUR;
exports.DOG_GROUP = DOG_GROUP;
exports.Dashboard = Dashboard;
exports.Date = Date$1;
exports.DatePickerCalendar = DatePickerCalendar;
exports.DatePickerInput = DatePickerInput;
exports.Details = Details;
exports.DetailsText = DetailsText;
exports.Divider = Divider;
exports.DogCard = DogCard;
exports.DogLink = DogLink;
exports.DogName = DogName;
exports.DraftJs = DraftJs;
exports.Dropdown = Dropdown;
exports.DropdownItem = DropdownItem;
exports.DropdownMenu = DropdownMenu;
exports.Dropzone = Dropzone;
exports.DropzoneField = DropzoneField;
exports.DropzoneUploader = DropzoneUploader;
exports.DynamicLocation = DynamicLocation;
exports.ERROR_STYLE = ERROR_STYLE;
exports.EmailChange = EmailChange;
exports.EmojiMart = EmojiMart;
exports.Error404 = Error404;
exports.FONTSIZE = FONTSIZE;
exports.FacebookPagePlugin = FacebookPagePlugin;
exports.FacebookShareButton = FacebookShareButton;
exports.FieldHOC = FieldHOC;
exports.Figure = Figure;
exports.Footer = Footer;
exports.ForgotDetails = ForgotDetails;
exports.ForgotDetailsReset = ForgotDetailsReset;
exports.Form = Form;
exports.FormError = FormError;
exports.FormField = FormField;
exports.FormLabel = FormLabel;
exports.GENDER = GENDER;
exports.GeoCoder = GeoCoder;
exports.GetAddress = GetAddress;
exports.GoogleAnalyticsPageView = GoogleAnalyticsPageView;
exports.GoogleEvent = GoogleEvent;
exports.Heading = Heading;
exports.Hero = Hero;
exports.HighChart = HighChart;
exports.ICON_PREFIX = ICON_PREFIX;
exports.ICON_PULL = ICON_PULL;
exports.ICON_SIZE = ICON_SIZE;
exports.IUIRich = IUIRich;
exports.Icon = Icon;
exports.IconStacked = IconStacked;
exports.Image = Image$1;
exports.ImageLocation = ImageLocation;
exports.ImageLocationFormElement = ImageLocationFormElement;
exports.ImageLocationProps = ImageLocationProps;
exports.ImageMarker = ImageMarker;
exports.ImageWrapper = ImageWrapper;
exports.InfoWindow = InfoWindow;
exports.Input = Input;
exports.InputDecorationTypes = InputDecorationTypes;
exports.InputGroup = InputGroup;
exports.InputGroupAddon = InputGroupAddon;
exports.InputTypes = InputTypes;
exports.Intercom = Intercom;
exports.IntercomAPI = IntercomAPI;
exports.InternationalisationContext = InternationalisationContext;
exports.InternationalisationProvider = InternationalisationProvider;
exports.LdsSpinner = LdsSpinner;
exports.LineChart = LineChart;
exports.Link = Link;
exports.List = List;
exports.ListItem = ListItem;
exports.Login = Login;
exports.MEDIA_QUERY = MEDIA_QUERY;
exports.MEDIA_QUERY_MAX = MEDIA_QUERY_MAX;
exports.Marker = Marker;
exports.MarkerClusterer = MarkerClusterer;
exports.Message = Message;
exports.MessageBackground = MessageBackground;
exports.MessageBase = MessageBase;
exports.MessageList = MessageList;
exports.MessagingContainer = MessagingContainer;
exports.MessagingSearch = MessagingSearch;
exports.MessagingSend = MessagingSend;
exports.MetaHead = MetaHead;
exports.MyApp = MyApp;
exports.NavButton = NavButton;
exports.NavCollapse = NavCollapse;
exports.NavDropdown = NavDropdown;
exports.NavIcon = NavIcon;
exports.NavLink = NavLink;
exports.NavNotification = NavNotification;
exports.Navbar = Navbar;
exports.Notification = Notification;
exports.NotificationsContext = NotificationsContext;
exports.NotificationsProvider = NotificationsProvider;
exports.OffCanvas = OffCanvas;
exports.OffCanvasComponent = OffCanvasComponent;
exports.OffCanvasContent = OffCanvasContent;
exports.OffCanvasContext = OffCanvasContext;
exports.OffCanvasDiv = OffCanvasDiv;
exports.OffCanvasHeader = OffCanvasHeader;
exports.OffCanvasOverlay = OffCanvasOverlay;
exports.OffCanvasProvider = OffCanvasProvider;
exports.Page = Page;
exports.PageHeading = PageHeading;
exports.PageLoading = PageLoading;
exports.PageProgressBar = PageProgressBar;
exports.Pagination = Pagination;
exports.PaginationItem = PaginationItem;
exports.PasswordChange = PasswordChange;
exports.PercentInput = PercentInput;
exports.PieChart = PieChart;
exports.Position = Position;
exports.Progress = Progress;
exports.ProgressBar = ProgressBar;
exports.ProgressBarDiv = ProgressBarDiv;
exports.RadioField = RadioField;
exports.RandomColor = RandomColor;
exports.RandomKey = RandomKey;
exports.Rating = Rating;
exports.ReactHolderJs = ReactHolderJs;
exports.ReactSelectField = ReactSelectField;
exports.Register = Register;
exports.ResizeDetector = ResizeDetector;
exports.RichTextInput = RichTextInput;
exports.Row = Row;
exports.SIZE = SIZE;
exports.SPACER = SPACER;
exports.SPACER_FORMULA = SPACER_FORMULA;
exports.SPACER_PROP_TYPES = SPACER_PROP_TYPES;
exports.SPACING = SPACING;
exports.STEPPER = STEPPER;
exports.Search = Search;
exports.Section = Section;
exports.SelectCountryField = SelectCountryField;
exports.SelectField = SelectField;
exports.Sidebar = Sidebar;
exports.SidebarLayout = SidebarLayout;
exports.SimpleTime = SimpleTime;
exports.Space = Space;
exports.StaticLocation = StaticLocation;
exports.StaticMap = StaticMap;
exports.Stepper = Stepper;
exports.StepperItem = StepperItem;
exports.StepperSummary = StepperSummary;
exports.StyledInput = StyledInput;
exports.StyledLink = StyledLink;
exports.StyledSmall = StyledSmall;
exports.Switch = Switch;
exports.TEXT_STYLE = TEXT_STYLE;
exports.Table = Table;
exports.TableActions = TableActions;
exports.TableData = TableData;
exports.TableDogs = TableDogs;
exports.TableHead = TableHead;
exports.TableLink = TableLink;
exports.TableLoading = TableLoading;
exports.TableRow = TableRow;
exports.Tabs = Tabs;
exports.Tail = Tail;
exports.Text = Text;
exports.TextBlock = TextBlock;
exports.TextareaField = TextareaField;
exports.Theme = Theme;
exports.ThemeStyle = ThemeStyle;
exports.Toggle = Toggle;
exports.Toggler = Toggler;
exports.Tooltip = Tooltip;
exports.Truncate = Truncate;
exports.TruncateByMaxHeight = TruncateByMaxHeight;
exports.Typeform = Typeform;
exports.UserContext = UserContext;
exports.UserProvider = UserProvider;
exports.Webcam = Webcam;
exports.Widgets = Widgets;
exports.age = age;
exports.arrayOfKeys = arrayOfKeys;
exports.arrayOfValues = arrayOfValues;
exports.averageGeolocation = averageGeolocation;
exports.blendLinearRgb = blendLinearRgb;
exports.camelCase = camelCase;
exports.capitalize = capitalize;
exports.colourList = colourList;
exports.contextArray = contextArray;
exports.convertImgUrlToDataURLviaCanvas = convertImgUrlToDataURLviaCanvas;
exports.dateFns = dateFns;
exports.debounce = debounce;
exports.decodeToken = decodeToken;
exports.elementTypes = elementTypes;
exports.filterByKey = filterByKey;
exports.filterByString = filterByString;
exports.findByKey = findByKey;
exports.formatDate = formatDate;
exports.formatDateStandard = formatDateStandard;
exports.formatIntDate = formatIntDate;
exports.formatIntDateShort = formatIntDateShort;
exports.formatIntDateYear = formatIntDateYear;
exports.formatPrice = formatPrice;
exports.formatRelativeTime = formatRelativeTime;
exports.formatTime = formatTime;
exports.generateToken = generateToken;
exports.getAcronym = getAcronym;
exports.getAssociations = getAssociations;
exports.getFirst = getFirst;
exports.getInitialLocale = getInitialLocale;
exports.getItemAssociation = getItemAssociation;
exports.getItemAssociations = getItemAssociations;
exports.getLast = getLast;
exports.getManyToManyAssociations = getManyToManyAssociations;
exports.getOne = getOne;
exports.getUrlParameter = getUrlParameter;
exports.getUserFromToken = getUserFromToken;
exports.hashPassword = hashPassword;
exports.historyPush = historyPush;
exports.isLocale = isLocale;
exports.mergeLocalData = mergeLocalData;
exports.objectWithoutProperties = objectWithoutProperties;
exports.parsePostCode = parsePostCode;
exports.requestSimulator = requestSimulator;
exports.shadeLinearRgb = shadeLinearRgb;
exports.shortDate = shortDate;
exports.sizeArray = sizeArray;
exports.slugify = slugify;
exports.useAxios = useAxios;
exports.useForceUpdate = useForceUpdate;
exports.useForm = useForm;
exports.useGeoCoder = useGeoCoder;
exports.useInterval = useInterval;
exports.useLocalStorage = useLocalStorage;
exports.useNotifications = useNotifications;
exports.usePrevious = usePrevious;
exports.useTimer = useTimer;
exports.useTooltip = useTooltip;
exports.useTranslation = useTranslation;
exports.validatePassword = validatePassword;
exports.validateToken = validateToken;
exports.validatorPostCode = validatorPostCode;
exports.validatorUri = validatorUri;
exports.validatorUuid4 = validatorUuid4;
exports.viewPort = viewPort;
exports.yup = yup;
exports.yupResolver = yupResolver;
//# sourceMappingURL=industry-ui.js.map
