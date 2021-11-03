(window.webpackJsonp=window.webpackJsonp||[]).push([[15,11],{226:function(e,t,l){"use strict";l.r(t);var r={name:"GridPeopleRounded",props:{people_h1:{type:String,required:!0},people_p:{type:String,required:!0},people:{type:Array,required:!0,default:function(){return[{id:0,name:"Team Member Name",role:"Role Name",twitterUrl:"https://twitter.com",linkedinUrl:"https://linkedin.com",imageUrl:"#",imageAlt:"Team Member Name"}]}}}},n=l(8),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"bg-white"},[l("div",{staticClass:"max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24"},[l("div",{staticClass:"space-y-12"},[l("div",{staticClass:"space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl"},[l("h1",{staticClass:"text-3xl font-extrabold tracking-tight sm:text-4xl"},[e._v(e._s(e.people_h1))]),e._v(" "),l("p",{staticClass:"text-xl text-gray-500"},[e._v(e._s(e.people_p))])]),e._v(" "),l("ul",{staticClass:"mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl",attrs:{role:"list"}},e._l(e.people,(function(t){return l("li",{key:t.id},[l("div",{staticClass:"space-y-6"},[t.imageUrl?l("img",{staticClass:"mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56",attrs:{src:t.imageUrl,alt:t.imageAlt}}):e._e(),e._v(" "),l("div",{staticClass:"space-y-2"},[l("div",{staticClass:"text-lg leading-6 font-medium space-y-1"},[l("h3",[e._v(e._s(t.name))]),e._v(" "),l("p",{staticClass:"text-indigo-600"},[e._v(e._s(t.role))]),e._v(" "),t.role2?l("p",{staticClass:"text-indigo-600"},[e._v(e._s(t.role2))]):e._e()]),e._v(" "),l("ul",{staticClass:"flex justify-center space-x-5",attrs:{role:"list"}},[l("li",[l("a",{staticClass:"text-gray-400 hover:text-gray-500",attrs:{href:t.linkedinUrl,target:"_blank"}},[l("span",{staticClass:"sr-only"},[e._v("LinkedIn")]),e._v(" "),l("svg",{staticClass:"w-5 h-5",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z","clip-rule":"evenodd"}})])])]),e._v(" "),t.lattesUrl?l("li",[l("a",{staticClass:"text-gray-400 hover:text-gray-500",attrs:{href:t.lattesUrl,target:"_blank"}},[l("span",{staticClass:"sr-only"},[e._v("Lattes")]),e._v(" "),l("svg",{staticClass:"w-5 h-5",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 32 32"}},[l("path",{attrs:{d:"M8.509 26.594c-2.733-5.6-4.359-8.982-4.359-9.066 0-0.137 0.167-0.118 1.809 0.204 2.888 0.567 4.431 0.727 7.003 0.728 3.403 0.001 6.174-0.538 8.327-1.621 1.139-0.573 1.824-1.081 2.385-1.769 0.691-0.848 0.913-1.432 0.921-2.415 0.007-0.935-0.119-1.428-0.66-2.572-0.214-0.452-0.402-0.971-0.42-1.153-0.028-0.293-0.004-0.335 0.212-0.36 0.472-0.056 2.802 2.206 3.66 3.553 1.479 2.323 1.599 4.836 0.347 7.266-0.769 1.493-1.619 2.526-3.042 3.7-2.365 1.95-5.114 3.308-8.91 4.402-2.039 0.588-5.336 1.301-6.015 1.301-0.144 0-0.414-0.472-1.256-2.199zM10.343 27.662c-0.029-0.059-0.379-0.778-0.779-1.599-0.832-1.709-1.068-2.308-0.908-2.308 0.060 0 0.084-0.077 0.055-0.171s-0.012-0.192 0.039-0.218c0.305-0.158-0.064-1.158-0.623-1.691-0.248-0.237-0.337-0.411-0.365-0.717-0.044-0.47-0.359-1.381-0.702-2.032-0.165-0.313-0.203-0.465-0.121-0.488 0.065-0.018-0.225-0.103-0.646-0.187s-0.822-0.192-0.892-0.238c-0.070-0.046-0.128-0.069-0.128-0.050 0 0.222 4.915 9.806 5.029 9.806 0.051 0 0.070-0.048 0.042-0.107zM9.27 17.563c-2.655-0.344-4.883-0.643-4.952-0.665-0.118-0.038-0.54-1.446-0.778-2.592-0.060-0.29-0.148-1.058-0.196-1.708-0.214-2.9 0.417-4.905 2.108-6.708 2.863-3.050 8.993-3.421 15.909-0.963 1.214 0.432 1.696 0.732 1.473 0.919-0.165 0.138-1.283 0.136-3.215-0.006-3.020-0.222-5.319 0.198-6.504 1.19-1.804 1.51-1.529 4.82 0.798 9.595 0.252 0.517 0.506 1.023 0.564 1.126 0.135 0.237 0.037 0.457-0.198 0.446-0.1-0.005-2.354-0.29-5.009-0.634zM13.61 17.556c-0.034-0.028-0.122-0.031-0.196-0.007-0.081 0.027-0.057 0.047 0.062 0.052 0.108 0.004 0.168-0.016 0.134-0.045zM13.053 17.466c-0.246-0.083-8.445-1.2-8.527-1.161-0.046 0.022-0.058 0.061-0.027 0.087 0.065 0.055 8.040 1.109 8.424 1.114 0.14 0.002 0.198-0.016 0.129-0.039zM9.787 16.612c-0.070-0.024-0.185-0.024-0.255 0s-0.013 0.043 0.128 0.043c0.14 0 0.198-0.019 0.128-0.043zM7.568 16.279c-1.010-0.158-2.016-0.318-2.236-0.355-0.332-0.056-0.422-0.118-0.535-0.366l-0.135-0.299 0.066 0.299c0.036 0.164 0.066 0.341 0.067 0.392 0.001 0.054 0.825 0.2 1.999 0.353 2.654 0.346 3.059 0.334 0.774-0.024zM18.177 14.965c-2.119-0.381-4.024-1.695-4.639-3.198-0.295-0.722-0.281-1.664 0.034-2.228 0.285-0.51 1.021-1.1 1.68-1.347 1.097-0.411 3.018-0.247 4.418 0.378 1.329 0.593 2.507 1.636 2.945 2.606 0.562 1.245 0.094 2.634-1.11 3.297-0.798 0.439-2.349 0.668-3.329 0.492zM17.071 13.969c-0.384-0.165-0.724-0.279-0.754-0.254-0.060 0.050 1.185 0.565 1.351 0.558 0.056-0.002-0.213-0.139-0.597-0.304zM15.984 13.087c-0.309-0.229-0.779-0.621-1.045-0.872s-0.484-0.417-0.485-0.37c-0.003 0.216 1.77 1.671 2.023 1.661 0.037-0.002-0.185-0.19-0.494-0.419z"}})])])]):e._e()])])])])})),0)])])])}),[],!1,null,null,null);t.default=component.exports},232:function(e,t,l){"use strict";l.r(t);var r={components:{GridPeopleRounded:l(226).default},data:function(){return{people_h1:"Collaborations",people_p:"Principal Investigators that we work with",people:[{id:1,name:"Lucile Maria Floeter-Winter",role:"Professor - Institute of Biosciences of the University of São Paulo",lattesUrl:"http://lattes.cnpq.br/9468443035508043",linkedinUrl:"https://www.linkedin.com/in/lucile-floeter-winter-b5b91a48/"},{id:2,name:"Roberto K. Salinas",role:"Professor - Institute of Chemistry of the University of São Paulo",lattesUrl:"https://lattes.cnpq.br/6171517695707255",linkedinUrl:"https://www.linkedin.com/in/roberto-salinas-33914ba6/"},{id:3,name:"Norma W. Andrews",role:"Professor - University of Maryland",linkedinUrl:"https://www.linkedin.com/in/norma-andrews-87260869/"},{id:4,name:"Iqbal Hamza",role:"Professor - University of Maryland",linkedinUrl:"https://www.linkedin.com/in/iqbal-hamza-ba30a718/"}]}}},n=l(8),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("GridPeopleRounded",{attrs:{people_h1:e.people_h1,people_p:e.people_p,people:e.people}})}),[],!1,null,null,null);t.default=component.exports}}]);