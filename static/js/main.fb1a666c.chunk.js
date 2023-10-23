(this["webpackJsonpdevelopers-portfolio"]=this["webpackJsonpdevelopers-portfolio"]||[]).push([[2],{1:function(e,a,t){"use strict";t.d(a,"d",(function(){return n})),t.d(a,"c",(function(){return i})),t.d(a,"a",(function(){return o})),t.d(a,"e",(function(){return r})),t.d(a,"f",(function(){return s})),t.d(a,"g",(function(){return l})),t.d(a,"b",(function(){return c}));var n={show:!0},i={gradientColors:"#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",firstName:"Erlantz",middleName:"",lastName:"Calvo",message:" Seeking to improve lives through the use of technology. ",icons:[{image:"fa-github",url:"https://github.com/ErlantzCalvo"},{image:"fa-linkedin",url:"https://www.linkedin.com/in/erlantzcalvo/"}]},o={show:!0,heading:"About Me",imageLink:t(22),imageSize:275,message:"My name is Erlantz Calvo. I\u2019m a graduate of 2021 from University of the Basque Country with a degree in Computer Science. I am passionate about all fields of computer science, currently working as fullstack developer.",resume:t(23)},r={show:!0,heading:"Live Projects",projectsDetails:[{name:"HayQueVivir",url:"https://hay-que-vivir.vercel.app",image:"HayQueVivir.jpg",stack:["Go","Next.js","Tailwind","Firebase"],description:"Keep track of house prices in the different provinces of Spain with daily updated prices.",technical_details:"This project is separated into two different parts:\nOn the one hand there is a process made with Golang that is in charge of obtaining the statistics of the daily house prices as well as the Euribor. Both data are obtained through the use of webscraping and are stored in Firestore.\nOn the other hand, there is the web that users see, which is a web application created with Next.js that obtains the data saved by the webscraper in Firestore.\nNote: Since this website is intended for use by Spaniards, it has not been translated into other languages."},{name:"F1-corner",url:"https://f1-corner-iota.vercel.app",image:"F1-corner.jpg",stack:["Astro"],description:"Keep up to date with the formula 1 results",technical_details:"This website has been built with the Astro web framework in order to create the best possible user experience.\nIt is a completely static web page, which means that it does not load content dynamically. so you may ask, how do you keep your content up to date?\nIf you follow the F1, you may know that all races are held on Sundays so, via a Github action, the page is built every Monday after a race.Although I already knew that this is not the best way to create a web page that consumes dynamic content from an API, the idea was to create a completely static page without the need to load any content."}]},s={show:!0,heading:"Github Projects",gitHubUsername:"ErlantzCalvo",reposLength:4,specificRepos:[]},l={show:!1,heading:"Skills",hardSkills:[{name:"Python",value:90},{name:"SQL",value:70},{name:"Data Structures",value:80},{name:"C/C++",value:45},{name:"JavaScript",value:85},{name:"React",value:40},{name:"HTML/CSS",value:85},{name:"C#",value:85}],softSkills:[{name:"Goal-Oriented",value:80},{name:"Collaboration",value:90},{name:"Positivity",value:75},{name:"Adaptability",value:85},{name:"Problem Solving",value:80},{name:"Empathy",value:90},{name:"Creativity",value:90}]},c={show:!0,heading:"Get In Touch",message:"You can contact me via email: ",email:"erlantzcalvocarrillo@gmail.com"}},16:function(e,a,t){e.exports=t(29)},21:function(e,a,t){},22:function(e,a,t){e.exports=t.p+"static/media/erlantzcalvo.0ae2f690.webp"},23:function(e,a,t){e.exports=t.p+"static/media/resume.585642a7.pdf"},29:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),o=t(10),r=t.n(o),s=(t(21),t(14)),l=t(2),c=t(1),u=Object(n.lazy)((function(){return Promise.all([t.e(8),t.e(14)]).then(t.bind(null,114))})),h=Object(n.lazy)((function(){return t.e(10).then(t.bind(null,115))})),m=Object(n.lazy)((function(){return Promise.all([t.e(0),t.e(6),t.e(15)]).then(t.bind(null,121))})),d=Object(n.lazy)((function(){return Promise.all([t.e(4),t.e(13)]).then(t.bind(null,122))})),f=Object(n.lazy)((function(){return t.e(9).then(t.bind(null,116))})),p=Object(n.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(11)]).then(t.bind(null,120))})),g=Object(n.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(7)]).then(t.bind(null,119))})),b=Object(n.lazy)((function(){return t.e(12).then(t.bind(null,117))})),w=i.a.forwardRef((function(e,a){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{gradient:c.c.gradientColors,title:"".concat(c.c.firstName," ").concat(c.c.middleName," ").concat(c.c.lastName),message:c.c.message,icons:c.c.icons,ref:a}),c.a.show&&i.a.createElement(h,{heading:c.a.heading,message:c.a.message,link:c.a.imageLink,imgSize:c.a.imageSize,resume:c.a.resume}),c.e.show&&i.a.createElement(m,{heading:c.e.heading,projects:c.e.projectsDetails}),c.f.show&&i.a.createElement(d,{heading:c.f.heading,username:c.f.gitHubUsername,length:c.f.reposLength,specfic:c.f.specificRepos}),c.g.show&&i.a.createElement(g,{heading:c.g.heading,hardSkills:c.g.hardSkills,softSkills:c.g.softSkills}))})),v=function(){var e=i.a.useRef();return i.a.createElement(s.a,{basename:"/home/"},c.d.show&&i.a.createElement(p,{ref:e}),i.a.createElement(l.a,{path:"/",exact:!0,component:function(){return i.a.createElement(w,{ref:e})}}),i.a.createElement(f,null,c.b.show&&i.a.createElement(b,{heading:c.b.heading,message:c.b.message,email:c.b.email})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(n.Suspense,{fallback:i.a.createElement("p",null,"loading...")}," ",i.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[16,3,5]]]);
//# sourceMappingURL=main.fb1a666c.chunk.js.map