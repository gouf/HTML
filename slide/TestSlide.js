var slide = new Slide('#slideshow', 300);

testCase('slide initialize test',{
  "test imageWidth": function(){
    assert("imageWidth should return 300", slide.imageWidth === 300);
  }
});

function testCase(name, tests){
  assert.count = 0;
  var successful = 0;
  var testCount = 0;
  for(var test in tests){
    if(!/^test/.test(test)){
      continue;
    }
  }

  testCount++;

  try{
    tests[test]();
    output(test, "#0c0");
    successful++;
  }catch(e){
    output(test + " failed: " + e.message, "#c00");
  }

  var color = successful == testCount ? "#0c0" : "#c00";
  output("<strong>" + testCount + " tests, " +
    (testCount - successful) + " failures</strong>", color);
}
