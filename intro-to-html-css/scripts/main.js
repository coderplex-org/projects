/* global $ */
/* global CodeMirror */

var state = {
  slideIndex: 0
};


var snippets  = [

  {
    title: 'Headings',
    code: `<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
`
  },
  {
    title: 'Paragraph',
    code: '<h1>FreeCodeCamp</h1>\n<p>Learn to code</p>\n<p>And help nonprofits</p>'
  },
  {
    title: 'Spans',
    code: `<h1>FreeCodeCamp</h1>\n
<p>Learn to <span style="color:green">code</span></p>\n
<p>And help <span style="color:purple">nonprofits</span></p>`
  },
  {
    title: 'Divs',
    code: `<div style="text-align:center">
<h1>FreeCodeCamp</h1>\n
<p>Learn to <span style="color:green">code</span></p>\n
<p>And help <span style="color:purple">nonprofits</span></p>
</div>`
  },
  {
    title: 'Links',
    code: `<div style="text-align:center">
<h1>FreeCodeCamp</h1>\n 
<p>Learn to <span style="color:green">code</span> 
and help <span style="color:purple">nonprofits</span></p>\n 
<p>at <a href="https://www.freecodecamp.com">Free Code Camp</a>.</p>`
  },
    {
    title: 'Images',
    code: `<div style="text-align:center">
<img width="590px" src="https://goo.gl/am85O8" />\n
<h1>FreeCodeCamp</h1>\n 
<p>Learn to <span style="color:green">code</span>
and help <span style="color:purple">nonprofits</span></p>\n 
<p>at <a href="https://www.freecodecamp.com">Free Code Camp</a>.</p>
</div>`
  },
  {
    title: 'Lists',
    code: `<div style="text-align:center">
<img width="590px" src="https://goo.gl/am85O8" />\n
<h1>FreeCodeCamp</h1>\n 
<p>Learn to <span style="color:green">code</span>
and help <span style="color:purple">nonprofits</span></p>\n
<!-- Show Ordered Lists -->\n
<ul>
  <li>17,000,000+ coding challenges solved</li>
  <li>$1,000,000+ in donated development work</li>
  <li>2,000+ people like you now have developer jobs</li>
</ul>
</div>`
  },
  {
    title: 'Button',
    code: `<div style="text-align:center">
<img width="590px" src="https://goo.gl/am85O8" />\n
<h1>FreeCodeCamp</h1>\n 
<p>Learn to <span style="color:green">code</span>
and help <span style="color:purple">nonprofits</span></p>\n
<ul>
  <li>17,000,000+ coding challenges solved</li>
  <li>$1,000,000+ in donated development work</li>
  <li>2,000+ people like you now have developer jobs</li>
</ul>
<button type="button">Start coding (it's free)</button>
</div>`
  },
  //CSS
  {
    title:'Element Selector',
    code:`<style>
#snippet {
  text-align : center;
}
span {
    color: green;
}
</style>
<div id="snippet">
<h1>FreeCodeCamp</h1>\n 
<p>Learn to <span>code</span>
and help <span>nonprofits</span></p>\n
<ul>
  <li>17,000,000+ coding challenges solved</li>
  <li>$1,000,000+ in donated development work</li>
  <li>2,000+ people like you now have developer jobs</li>
</ul>
<button type="button">Start coding (it's free)</button>
</div>`
  },
  {
    title: 'Class / ID Selector',
    code: `<style>
#snippet {
  text-align : center;
}
.list {
    list-style-type: none;
}
</style>
<div id="snippet">
<h1>FreeCodeCamp</h1>\n 
<p>Learn to <span style="color:green">code</span>
and help <span style="color:purple">nonprofits</span></p>\n
<ul class="list">
  <li>17,000,000+ coding challenges solved</li>
  <li>$1,000,000+ in donated development work</li>
  <li>2,000+ people like you now have developer jobs</li>
</ul>
<button type="button">Start coding (it's free)</button>
</div>`
  },
  {
    title:'Background Color',
    code:`
    <style>
#snippet {
  text-align : center;
}
#title {
color : white;
  background-color : green;
}
#btn {
  background-color : yellow;
}
#list {
    list-style-type: none;
}
</style>
<div id="snippet">
<h1 id="title">FreeCodeCamp</h1>\n 
<p>Learn to <span style="color:green">code</span>
and help <span style="color:purple">nonprofits</span></p>\n
<ul id="list">
  <li>17,000,000+ coding challenges solved</li>
  <li>$1,000,000+ in donated development work</li>
  <li>2,000+ people like you now have developer jobs</li>
</ul>
<button id="btn" type="button">Start coding (it's free)</button>
</div>`
  },
  {
    title: 'Display',
    code: `<style>
#snippet {
  text-align : center;
}
#title {
  color : white;
  background-color : green;
}
#btn {
  background-color : yellow;
}
#list{
  margin-left: -10%
}
#list li{
  list-style-type: none;
  display : inline-block;
  width: 150px;
  margin: 20px;
}
</style>
<div id="snippet">
<h1>FreeCodeCamp</h1>
 
<p>Learn to <span style="color:green">code</span>
and help <span style="color:purple">nonprofits</span></p>

<ul id="list">
  <li>17,000,000+ coding challenges solved</li>
  <li>$1,000,000+ in donated development work</li>
  <li>2,000+ people like you now have developer jobs</li>
</ul>
<button type="button">Start coding (it's free)</button>
</div>`
  },
  {
    title:'Height & Width',
    code:`<style>
.full {
  height: 50px;
  width: 100%;
  background-color: powderblue;
}
.half {
    height: 100px;
    width: 50%;
    background-color: lightgreen;
}
</style>
<p class="full">This element has a height of 500px and a width of 100%:</p>
<p class="half">This element has a height of 100px and a width of 50%:</p>
`
  },
  {
    title:'Padding',
    code:
    `<style>
p {
  color: white
}
  
.para1 {
  background: green;
  padding: 50px;
}

.para2 {
  background: blue;
  padding: 50px 80px;
}
</style>
<p class="para1">Make HTML Great Again!</p>
<p class="para2">I am a paragraph and I don't have an id.</p>
`
  },
  {
    title:'Margin',
    code:`<style>
.para1 {
    margin-top: 100px;
    margin-bottom: 100px;
    margin-right: 150px;
    margin-left: 80px;
    /* margin: 100px; */
    /* margin: 50px 100px; */
    background-color: lightgreen;
}
</style>
<p class="para1">Make HTML Great Again!</p>
<p class="para2">I am a paragraph and I don't have an id.</p>
`
  },

];


var editor = CodeMirror(document.querySelector('.editor'),
  {
    mode: "htmlmixed"
  }
);

editor.setOption('lineNumbers', true);

editor.on('change', function (editorInstance) {
  var htmlText = editorInstance.getValue();
  
  $('.rendered').html(htmlText);
});


$('.title').html(snippets[0].title);
editor.setValue(snippets[0].code);

$('.left-arrow').click(function () {
  if(state.slideIndex == 0){
    state.slideIndex = snippets.length - 1;
  } else if (state.slideIndex > 0) {
    state.slideIndex -= 1;
  }
  var snippet = snippets[state.slideIndex];
    
  $('.title').html(snippet.title);
  editor.setValue(snippet.code.trim());
});

$('.right-arrow').click(function () {
  if (state.slideIndex == snippets.length - 1){
    state.slideIndex = 0;
  }else if (state.slideIndex < snippets.length - 1) {
    state.slideIndex += 1;
  }
  var snippet = snippets[state.slideIndex];
    
  $('.title').html(snippet.title);
  editor.setValue(snippet.code.trim());
});
