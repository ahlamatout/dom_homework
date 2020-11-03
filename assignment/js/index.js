const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png',
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png',
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io',
  },
  footer: {
    copyright: 'Copyright Great Idea! 2020',
  },
};



//write your code here
//Navigation area

const v_nav = siteContent.nav;
const v_a = document.querySelectorAll("a");
var i = 0;

Object.entries(v_nav).forEach(entry => {
  const [key, value] = entry;
  if (i < Object.keys(v_nav).length){
    if (key.includes("nav")){
      v_a[i].innerHTML = value;
      v_a[i].style.color= "green";
    } else {     
     var x = document.getElementById("logo-img").src = value;
    }
 
  }
  i++;
 
}); 


//cta elements
const v_cta = siteContent.cta;
var i = 0;
Object.entries(v_cta).forEach(entry => {
  const [key, value] = entry;
  if (i < Object.keys(v_cta).length){
    console.log(i);
    if (key.includes("img")){
      console.log(key);     
     var x = document.getElementById("cta-img").src = value;
    } else { 
     var x = document.getElementsByTagName(key);
     x[0].textContent = value;//entry[1];
    }
 
  }
  i++;   
});

//main content

const v_content = siteContent["main-content"];
const p_content = document.querySelectorAll(".main-content p");

var x = document.querySelectorAll(".main-content h4"); 
var i = 0;
var j = 0;
Object.entries(v_content).forEach(entry => {
  const [key, value] = entry;
  if (i < p_content.length || j < x.length){
    if (key.includes("h4")){       
      x[i].innerHTML = value;//entry[1];
      i++;
    } else if(key.includes("img")){
      document.getElementById("middle-img").src = value; 
    }
     else { 
           p_content[j].innerHTML = value;
           j++;
    }
 
  }
     
});



//Contact
const v_contact = siteContent.contact;
const p_contact = document.querySelectorAll(".contact p");
var i = 0;
Object.entries(v_contact).forEach(entry => {
  const [key, value] = entry;
  if (i < Object.keys(v_contact).length){
    if (key.includes("h4")){      
      var x = document.querySelector(".contact h4");
      console.log(x); 
      x.innerHTML = value;//entry[1];
    } else { 
           p_contact[i-1].innerHTML = value;
    }
 
  }
  i++;   
});


//footer
var v_footer = siteContent.footer;
var p_footer = document.querySelectorAll("footer p");
var i = 0;
Object.entries(v_footer).forEach(entry => {
  const [key, value] = entry;
  if (i < Object.keys(v_footer).length){
 
           p_footer[i].innerHTML = value;
    }
 
  
  i++;   
});

//add new items to the navigation area
//element 1
var tag = document.createElement("a");
var text = document.createTextNode("New nav 1");
tag.appendChild(text);
var element = document.getElementById("nav_id");
element.appendChild(tag);
