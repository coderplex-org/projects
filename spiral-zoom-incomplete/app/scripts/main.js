
/**
 *  Objectives
 * 
 *  1. Build Circle
 *  2. Place Elements on Circle
 *  3. Make elements Circle .
 *  4. Implement Zoom
 */


var data= {
    "students": [
      {
        name: "Manisha",
        class: 6,
        age: 12,
      },
      {
        name: "Kapil",
        class: 8,
        age: 15,
      },
      {
        name: "Ramana",
        class: 10,
        age: 14,
      },
      {
        name: "Siva",
        class: 16,
        age: 2,
      },
      {
        name: "Vikky",
        class: 1,
        age: 3,
      },
      {
        name: "Mani",
        class: 15,
        age: 12,
      },
      {
        name: "name1",
        class: 15,
        age: 12,
      },
      {
        name: "name2",
        class: 15,
        age: 12,
      }
    ]
  };
  
var svgContainer = (
  d3.select("svg")
    .attr("width", 1000)
    .attr("height", 600)
  );

var length = data.students.length;

function createCirle(text, i, key) {
  var theta = (i + 1)/length * 2 * Math.PI;
  var radius = 200 * (length + 1) / length;
  
  var posX = 600 + radius * Math.sin(theta);
  var posY = 300 + radius * Math.cos(theta)

  svgContainer.append("circle")
    .attr("cx", posX)
    .attr("cy", posY)
    .attr("r", 50)
    .style("fill", "#2b98f0")
    .append("text")
    .style("color", "red");
  
  svgContainer.append("text")
    .attr("x", posX-25)
    .attr("y", posY)
    .attr("fill", "white")
    .style("--webkit-user-select", "none")
    .text(text)
    .on("click", function () {
      // console.log(data.students[i]);
      
      data.students.forEach(function (student, i) { 
        createCirle(student.name, i, i);
      });
      
      var historyKey = preziHistory[preziHistory.length - 1];
      preziHistory.push(historyKey.concat(key));
      render();
    });
}

var preziHistory = [
  [ 'students' ]
];

function render() {
  var historyKey = preziHistory[preziHistory.length - 1];
  console.log(historyKey);
  
  // Remove Old DOM
  
  svgContainer.selectAll("*").remove();
  
  var newData = data;
  
  historyKey.forEach(function (key){
    newData = newData[key];
    console.log(newData);
  });
  
  if(Array.isArray(newData)){
    
  }else{
    var k = Object.keys(newData);
    
  }
  
  // REnder New DOM
  
  
  
}


data.students.forEach(function (student, i) { 
  createCirle(student.name, i, data.student);
});
