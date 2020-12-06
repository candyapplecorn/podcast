(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0874":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("hero"),t._m(0)],1)},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",[t._v("\n        We'll "),a("br"),t._v("contact "),a("br"),t._v(" you soon.\n    ")])}],r=a("e9d4"),i=a.n(r),s=a("263b"),o={name:"InterviewsSubmitted",components:{Hero:s["a"]},data:function(){return{logo:i.a}},beforeRouteEnter:function(t,e,a){a((function(t){return window.setTimeout((function(){return t.$router.push({name:"home"})}),5e3)}))}},u=o,c=(a("bad3"),a("2877")),b=Object(c["a"])(u,n,l,!1,null,"d7dc402a",null);e["default"]=b.exports},1440:function(t,e,a){},"1dcc":function(t,e,a){"use strict";var n=a("941a"),l=a.n(n);l.a},"2a27":function(t,e,a){},4651:function(t,e,a){"use strict";var n=a("1440"),l=a.n(n);l.a},"60ec":function(t,e,a){"use strict";var n=a("a731"),l=a.n(n);l.a},6357:function(t,e,a){},"86f4":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"interviews"}},[a("div",[t._v("\n        Are you an artist or band who would like\n        to be interviewed about your new\n        music or upcoming tour?\n    ")]),a("interview-form",{attrs:{id:"form"}})],1)},l=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{attrs:{action:"https://formspree.io/hangingfromtherafterspodcast@gmail.com",method:"POST"}},[a("h4",{staticClass:"label"},[t._v("General Info")]),a("labeled-text-input",{attrs:{label:"Band/Artist Name"}}),a("labeled-text-input",{attrs:{label:"Genre"}}),a("labeled-text-input",{attrs:{label:"Country"}}),a("labeled-text-input",{attrs:{label:"Members",fields:6}}),a("labeled-text-input",{attrs:{label:"Who will be interviewing?",fields:6}}),t._m(0),a("labeled-text-input",{attrs:{label:"Spotify"}}),a("labeled-text-input",{attrs:{label:"Apple Music"}}),a("labeled-text-input",{attrs:{label:"Bandcamp"}}),a("labeled-text-input",{attrs:{label:"Soundcloud"}}),a("labeled-text-input",{attrs:{label:"Other"}}),t._m(1),a("labeled-text-input",{attrs:{label:"Instagram"}}),a("labeled-text-input",{attrs:{label:"Facebook"}}),a("labeled-text-input",{attrs:{label:"Twitter"}}),a("labeled-text-input",{attrs:{label:"Other"}}),a("h4",{staticClass:"label"},[t._v("Technical")]),a("h5",[t._v("Do you have access to a:")]),a("yes-no-radio",{attrs:{label:"computer with Skype?"}}),a("yes-no-radio",{attrs:{label:"webcam?"}}),a("yes-no-radio",{attrs:{label:"microphone?"}}),a("h4",{staticClass:"label"},[t._v("Availability")]),a("labeled-text-input",{attrs:{label:"Fridays"}}),a("labeled-text-input",{attrs:{label:"Saturdays"}}),a("labeled-text-input",{attrs:{label:"Email"}},[a("input",{attrs:{type:"email",name:"_replyto"}})]),a("input",{attrs:{type:"submit",value:"Send"}}),a("input",{attrs:{type:"hidden",name:"_next"},domProps:{value:t.getHomeUrl()}})],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h4",{staticClass:"label"},[t._v("Music Page Links "),a("br"),t._v("(If Applicable)")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h4",{staticClass:"label"},[t._v("Social Media Links "),a("br"),t._v("(If Applicable)")])}],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-input"},[a("label",{attrs:{for:t.toKebabCase()}},[t._v(t._s(t.label)+":")]),t._t("default",t._l(t.fields,(function(e){return a("input",{key:e,class:{"padding-bottom":t.fields>1&&e!==t.fields},attrs:{name:t.toKebabCase(e),type:"text"}})})))],2)},o=[],u={name:"LabeledTextInput",props:{label:{type:String,default:""},fields:{type:Number,default:1},_replyto:{type:String,default:""}},methods:{toKebabCase:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return this.label.replace(/\W/g,"-").replace(/\W$/,"").toLowerCase()+(1===t?"":"-".concat(t))}}},c=u,b=(a("4651"),a("2877")),d=Object(b["a"])(c,s,o,!1,null,"00df30a8",null),p=d.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-input"},[a("label",{attrs:{for:t.toKebabCase()}},[t._v(t._s(t.label))]),a("div",{staticClass:"yes-no-set"},[a("div",{staticClass:"radio-container"},[a("input",{attrs:{type:"radio",name:t.toKebabCase(),value:"yes",required:""}}),a("span",[t._v("Yes")])]),a("div",{staticClass:"radio-container"},[a("input",{attrs:{type:"radio",name:t.toKebabCase(),value:"no"}}),a("span",[t._v("No")])])])])},m=[],v={name:"YesNoRadio",props:{label:{type:String,default:""},fields:{type:Number,default:1}},methods:{toKebabCase:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return this.label.replace(/\W/g,"-").replace(/\W$/,"").toLowerCase()+(1===t?"":"-".concat(t))}}},_=v,h=(a("f3c5"),Object(b["a"])(_,f,m,!1,null,"2bcf91e6",null)),y=h.exports,x={name:"InterviewForm",components:{LabeledTextInput:p,YesNoRadio:y},props:{label:{type:String,default:""}},methods:{getHomeUrl:function(){return"".concat(window.location.origin,"/#/interviews-submitted")}},mounted:function(){}},w=x,g=(a("60ec"),Object(b["a"])(w,r,i,!1,null,"b275fcd0",null)),C=g.exports,S={name:"Interviews",components:{InterviewForm:C}},$=S,E=(a("1dcc"),Object(b["a"])($,n,l,!1,null,"f57ea218",null));e["default"]=E.exports},"941a":function(t,e,a){},a731:function(t,e,a){},bad3:function(t,e,a){"use strict";var n=a("2a27"),l=a.n(n);l.a},e9d4:function(t,e,a){t.exports=a.p+"img/hanginfromtherafterspodcastlogo.c0cf786d.png"},f3c5:function(t,e,a){"use strict";var n=a("6357"),l=a.n(n);l.a}}]);
//# sourceMappingURL=about.fdeb3b20.js.map