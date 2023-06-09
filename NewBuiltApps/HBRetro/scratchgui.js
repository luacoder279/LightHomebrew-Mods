function start() {
  
  ////MADE FOR VERSION 0.12.0 SCRIPT SYSTEM////

  ////CONFIG////


  var link = "https://sheeptester.github.io/scratch-gui/index.html"; // link to app webpage\
  var title = "Scratch Gui"; // title shown in navbar\
  var id = "https://luacoder279.github.io/LightHomebrew-Mods/NewBuiltApps/HBRetro/scratchgui.js"; // set this to the url location of your script\
  
////SCRIPT////
  
 var ExampleLink = document.createElement("a");
  var ExampleIFrame = document.createElement("iframe");
  
  ExampleIFrame.style = "display: none;";
  ExampleIFrame.className = "app "+id;
  ExampleIFrame.id = id;
  ExampleIFrame.src = "about:blank";
  
  ExampleLink.href = "javascript:openapp('"+ ExampleIFrame.id +"','" + link + "');" ;
  ExampleLink.innerHTML = title; 
  ExampleLink.className = id; 
  ExampleLink.addEventListener('dblclick', (e) => {
    uninstallApp(ExampleIFrame.id);
  });
  ExampleLink.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    closeApp(ExampleIFrame.id);
  });
  
  document.getElementById("navbar").appendChild(ExampleLink);
  document.getElementById("main").appendChild(ExampleIFrame);
}

start();
