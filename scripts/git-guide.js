var buttonIntro = document.getElementById('button-intro');
var buttonHTML = document.getElementById('button-html');
var buttonCSS = document.getElementById('button-css');
var buttonJS = document.getElementById('button-js');

function openClose(div, icon)
{
  if (div.style.display !== 'none')
  {
     div.style.display = 'none';
     document.getElementById(icon).className = "fa fa-plus-square-o";
  }
  else
  {
     div.style.display = 'block';
     document.getElementById(icon).className = "fa fa-minus-square-o";
  }
}

buttonIntro.onclick = function()
{
  var div= document.getElementById('open-close-intro');
  var icon = 'toc-icon-intro';
  openClose(div, icon);
}

buttonHTML.onclick = function()
{
  var divHTML = document.getElementById('open-close-html');
  var iconHTML = 'toc-icon-html';
  openClose(divHTML, iconHTML);
}

buttonCSS.onclick = function()
{
  var divCSS = document.getElementById('open-close-css');
  var iconCSS= 'toc-icon-css';
  openClose(divCSS, iconCSS);
}

buttonJS.onclick = function()
{
  var divJS = document.getElementById('open-close-js');
  var iconJS = 'toc-icon-js';
  openClose(divJS, iconJS);
}