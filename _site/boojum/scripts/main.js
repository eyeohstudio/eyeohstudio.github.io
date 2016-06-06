document.addEventListener("DOMContentLoaded", theDomHasLoaded, false);
window.addEventListener("load", pageFullyLoaded, false);

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split('&');
  for (var i = 0; i < sURLVariables.length; i++) {
  var sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] == sParam) {
      return sParameterName[1];
    }
  }
}

//
var keyword = getUrlParameter('keyword').slice(0,1);

//
var dateNow = new Date();
var dateToday = ( '0' + (dateNow.getMonth()+1) ).slice( -2 ) + ( '0' + dateNow.getDate()).slice(-2);
var dateCurrent = getUrlParameter('date') || dateToday;
var date = parseInt(dateCurrent, 10);

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

function theDomHasLoaded(e) {

  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////

  var objectInfo0 = 'Pantone U: <mark>2003</mark><br>Pantone C: <mark>2003</mark><br>CMYK U: <mark>0/2/70/0</mark>  <br>CMYK C: <mark>0/1/70/0</mark>  <br>RGB: <mark>255, 232, 117</mark><br>HEX: <mark>ffe875';
  var objectInfo1 = 'Pantone U: <mark>134</mark> <br>Pantone C: <mark>7403</mark><br>CMYK U: <mark>0/13/58/0</mark> <br>CMYK C: <mark>1/11/58/2</mark> <br>RGB: <mark>255, 211, 120</mark><br>HEX: <mark>ffd378';
  var objectInfo2 = 'Pantone U: <mark>2016</mark><br>Pantone C: <mark>149</mark> <br>CMYK U: <mark>0/24/50/0</mark> <br>CMYK C: <mark>0/24/51/0</mark> <br>RGB: <mark>255, 193, 135</mark><br>HEX: <mark>ffc187';
  var objectInfo3 = 'Pantone U: <mark>169</mark> <br>Pantone C: <mark>7415</mark><br>CMYK U: <mark>0/29/23/0</mark> <br>CMYK C: <mark>0/28/26/1</mark> <br>RGB: <mark>255, 183, 174</mark><br>HEX: <mark>ffb7ae';
  var objectInfo4 = 'Pantone U: <mark>163</mark> <br>Pantone C: <mark>1565</mark><br>CMYK U: <mark>0/38/54/0</mark> <br>CMYK C: <mark>0/39/51/0</mark> <br>RGB: <mark>255, 156, 118</mark><br>HEX: <mark>ff9c76';
  var objectInfo5 = 'Pantone U: <mark>7605</mark><br>Pantone C: <mark>503</mark> <br>CMYK U: <mark>0/18/10/0</mark> <br>CMYK C: <mark>0/20/6/1</mark>  <br>RGB: <mark>234, 196, 190</mark><br>HEX: <mark>eac4be';

  var objectInfo6 = 'Pantone U: <mark>196</mark> <br>Pantone C: <mark>502</mark> <br>CMYK U: <mark>0/25/10/0</mark> <br>CMYK C: <mark>0/26/9/1</mark>  <br>RGB: <mark>244, 195, 203</mark><br>HEX: <mark>f4c3cb';
  var objectInfo7 = 'Pantone U: <mark>189</mark> <br>Pantone C: <mark>707</mark> <br>CMYK U: <mark>0/38/7/0</mark>  <br>CMYK C: <mark>0/36/8/0</mark>  <br>RGB: <mark>255, 171, 194</mark><br>HEX: <mark>ffabc2';
  var objectInfo8 = 'Pantone U: <mark>685</mark> <br>Pantone C: <mark>517</mark> <br>CMYK U: <mark>0/24/0/2</mark>  <br>CMYK C: <mark>2/25/0/0</mark>  <br>RGB: <mark>228, 189, 208</mark><br>HEX: <mark>e4bdd0';
  var objectInfo9 = 'Pantone U: <mark>507</mark> <br>Pantone C: <mark>507</mark> <br>CMYK U: <mark>13/51/16</mark>  <br>CMYK C: <mark>4/51/7/6</mark>  <br>RGB: <mark>207, 143, 164</mark><br>HEX: <mark>cf8fa4';
  var objectInfoA = 'Pantone U: <mark>5025</mark><br>Pantone C: <mark>692</mark> <br>CMYK U: <mark>4/22/16/4</mark> <br>CMYK C: <mark>2/26/7/2</mark>  <br>RGB: <mark>220, 182, 186</mark><br>HEX: <mark>dcb6ba';
  var objectInfoB = 'Pantone U: <mark>250</mark> <br>Pantone C: <mark>250</mark> <br>CMYK U: <mark>6/29/0/0</mark>  <br>CMYK C: <mark>7/28/0/0</mark>  <br>RGB: <mark>238, 186, 233</mark><br>HEX: <mark>eebae9';

  var objectInfoC = 'Pantone U: <mark>5245</mark><br>Pantone C: <mark>2050</mark><br>CMYK U: <mark>2/10/3/4</mark>  <br>CMYK C: <mark>3/15/3/0</mark>  <br>RGB: <mark>224, 207, 214</mark><br>HEX: <mark>e0cfd6';
  var objectInfoD = 'Pantone U: <mark>2563</mark><br>Pantone C: <mark>2562</mark><br>CMYK U: <mark>18/34/0/0</mark> <br>CMYK C: <mark>19/35/0/0</mark> <br>RGB: <mark>205, 162, 217</mark><br>HEX: <mark>cda2d9';
  var objectInfoE = 'Pantone U: <mark>2635</mark><br>Pantone C: <mark>5305</mark><br>CMYK U: <mark>20/24/0/0</mark> <br>CMYK C: <mark>18/15/2/6</mark> <br>RGB: <mark>201, 183, 232</mark><br>HEX: <mark>c9b7e8';
  var objectInfoF = 'Pantone U: <mark>7445</mark><br>Pantone C: <mark>270</mark> <br>CMYK U: <mark>26/23/0/3</mark> <br>CMYK C: <mark>29/25/0/0</mark> <br>RGB: <mark>172, 168, 199</mark><br>HEX: <mark>aca8c7';
  var objectInfoG = 'Pantone U: <mark>2113</mark><br>Pantone C: <mark>7681</mark><br>CMYK U: <mark>41/24/0/0</mark> <br>CMYK C: <mark>42/23/2/0</mark> <br>RGB: <mark>167, 178, 232</mark><br>HEX: <mark>a7b2e8';
  var objectInfoH = 'Pantone U: <mark>5425</mark><br>Pantone C: <mark>5425</mark><br>CMYK U: <mark>54/28/22/2</mark><br>CMYK C: <mark>45/16/9/24</mark><br>RGB: <mark>121, 147, 165</mark><br>HEX: <mark>7993a5';

  var objectInfoI = 'Pantone U: <mark>651</mark> <br>Pantone C: <mark>277</mark> <br>CMYK U: <mark>34/11/1/0</mark> <br>CMYK C: <mark>35/9/0/0</mark>  <br>RGB: <mark>175, 195, 220</mark><br>HEX: <mark>afc3dc';
  var objectInfoJ = 'Pantone U: <mark>2717</mark><br>Pantone C: <mark>651</mark> <br>CMYK U: <mark>33/9/0/0</mark>  <br>CMYK C: <mark>38/14/1/2</mark> <br>RGB: <mark>169, 200, 244</mark><br>HEX: <mark>a9c8f4';
  var objectInfoK = 'Pantone U: <mark>290</mark> <br>Pantone C: <mark>2975</mark><br>CMYK U: <mark>32/1/2/0</mark>  <br>CMYK C: <mark>34/0/5/0</mark>  <br>RGB: <mark>167, 212, 238</mark><br>HEX: <mark>a7d4ee';
  var objectInfoL = 'Pantone U: <mark>7695</mark><br>Pantone C: <mark>7695</mark><br>CMYK U: <mark>38/0/0/20</mark> <br>CMYK C: <mark>43/9/8/8</mark>  <br>RGB: <mark>130, 168, 189</mark><br>HEX: <mark>8298bd';
  var objectInfoM = 'Pantone U: <mark>7458</mark><br>Pantone C: <mark>7709</mark><br>CMYK U: <mark>65/7/12/2</mark> <br>CMYK C: <mark>62/0/8/6</mark>  <br>RGB: <mark>103, 165, 191</mark><br>HEX: <mark>67a5bf';
  var objectInfoN = 'Pantone U: <mark>7709</mark><br>Pantone C: <mark>325</mark> <br>CMYK U: <mark>54/0/16/4</mark> <br>CMYK C: <mark>53/0/23/0</mark> <br>RGB: <mark>110, 178, 189</mark><br>HEX: <mark>6eb2bd';

  var objectInfoO = 'Pantone U: <mark>318</mark> <br>Pantone C: <mark>3248</mark><br>CMYK U: <mark>48/0/18/0</mark> <br>CMYK C: <mark>48/0/22/0</mark> <br>RGB: <mark>107, 217, 222</mark><br>HEX: <mark>6bd9de';
  var objectInfoP = 'Pantone U: <mark>5503</mark><br>Pantone C: <mark>7471</mark><br>CMYK U: <mark>36/4/14/0</mark> <br>CMYK C: <mark>37/0/17/0</mark> <br>RGB: <mark>148, 183, 188</mark><br>HEX: <mark>94b7bc';
  var objectInfoQ = 'Pantone U: <mark>3248</mark><br>Pantone C: <mark>333</mark> <br>CMYK U: <mark>49/0/28/0</mark> <br>CMYK C: <mark>49/0/28/0</mark> <br>RGB: <mark>106, 206, 185</mark><br>HEX: <mark>6aceb9';
  var objectInfoR = 'Pantone U: <mark>5517</mark><br>Pantone C: <mark>2176</mark><br>CMYK U: <mark>33/12/22/0</mark><br>CMYK C: <mark>33/12/17/0</mark><br>RGB: <mark>169, 186, 183</mark><br>HEX: <mark>a9bab7';
  var objectInfoS = 'Pantone U: <mark>7723</mark><br>Pantone C: <mark>570</mark> <br>CMYK U: <mark>54/0/38/4</mark> <br>CMYK C: <mark>57/0/36/0</mark> <br>RGB: <mark>107, 172, 146</mark><br>HEX: <mark>6bac92';
  var objectInfoT = 'Pantone U: <mark>2246</mark><br>Pantone C: <mark>352</mark> <br>CMYK U: <mark>37/0/31/0</mark> <br>CMYK C: <mark>37/0/31/0</mark> <br>RGB: <mark>167, 217, 188</mark><br>HEX: <mark>a7d9bc';

  var objectInfoU = 'Pantone U: <mark>7486</mark><br>Pantone C: <mark>366</mark> <br>CMYK U: <mark>26/0/40/0</mark> <br>CMYK C: <mark>31/0/51/0</mark> <br>RGB: <mark>183, 227, 148</mark><br>HEX: <mark>b7e394';
  var objectInfoV = 'Pantone U: <mark>5797</mark><br>Pantone C: <mark>5875</mark><br>CMYK U: <mark>15/6/32/1</mark> <br>CMYK C: <mark>9/4/31/5</mark>  <br>RGB: <mark>199, 202, 156</mark><br>HEX: <mark>c7ca9c';
  var objectInfoW = 'Pantone U: <mark>380</mark> <br>Pantone C: <mark>379</mark> <br>CMYK U: <mark>15/0/63/0</mark> <br>CMYK C: <mark>13/0/61/0</mark> <br>RGB: <mark>212, 228, 88</mark> <br>HEX: <mark>d4e458';
  var objectInfoX = 'Pantone U: <mark>609</mark> <br>Pantone C: <mark>461</mark> <br>CMYK U: <mark>2/0/47/3</mark>  <br>CMYK C: <mark>2/1/45/2</mark>  <br>RGB: <mark>235, 224, 129</mark><br>HEX: <mark>ebe081';
  var objectInfoY = 'Pantone U: <mark>4535</mark><br>Pantone C: <mark>5865</mark><br>CMYK U: <mark>4/6/32/10</mark> <br>CMYK C: <mark>9/3/37/10</mark> <br>RGB: <mark>202, 190, 150</mark><br>HEX: <mark>cabe96';
  var objectInfoZ = 'Pantone U: <mark>721</mark> <br>Pantone C: <mark>473</mark> <br>CMYK U: <mark>4/20/34/0</mark> <br>CMYK C: <mark>0/32/42/0</mark> <br>RGB: <mark>223, 168, 123</mark><br>HEX: <mark>dfa880';

  //
  var commonStyles = '* { stroke-width: 0; } .hue { opacity: .4; }';

  function addColor(svg) {

         if (keyword === '0') { svg.style('.color, .hue { fill: #ffe875; } ' + commonStyles) && $('.modal-body .color-info').append( objectInfo0 ); }
    else if (keyword === '1') { svg.style('.color, .hue { fill: #ffd378; } ' + commonStyles) && $('.modal-body .color-info').append( objectInfo1 ); }
    else if (keyword === '2') { svg.style('.color, .hue { fill: #ffc187; } ' + commonStyles) && $('.modal-body .color-info').append( objectInfo2 ); }
    else if (keyword === '3') { svg.style('.color, .hue { fill: #ffb7ae; } ' + commonStyles) && $('.modal-body .color-info').append( objectInfo3 ); }
    else if (keyword === '4') { svg.style('.color, .hue { fill: #ff9c76; } ' + commonStyles) && $('.modal-body .color-info').append( objectInfo4 ); }
    else if (keyword === '5') { svg.style('.color, .hue { fill: #eac4be; } ' + commonStyles) && $('.modal-body .color-info').append( objectInfo5 ); }

    else if (keyword === '6') { svg.style('.color, .hue { fill: #f4c3cb; } ' + commonStyles) && $('.modal-body .color-info').append( objectInfo6 ); }
    else if (keyword === '7') { svg.style('.color, .hue { fill: #ffabc2; } ' + commonStyles) && $('.modal-body .color-info').append( objectInfo7 ); }
    else if (keyword === '8') { svg.style('.color, .hue { fill: #e4bdd0; } ' + commonStyles) && $('.modal-body .color-info').append( objectInfo8 ); }
    else if (keyword === '9') { svg.style('.color, .hue { fill: #cf8fa4; } ' + commonStyles) && $('.modal-body .color-info').append( objectInfo9 ); }
    else if (keyword === 'A') { svg.style('.color, .hue { fill: #dcb6ba; } ' + commonStyles) && $('.modal-body .color-info').append( objectInfoA ); }
    else if (keyword === 'B') { svg.style('.color, .hue { fill: #eebae9; } ' + commonStyles) && $('.modal-body .color-info').append( objectInfoB ); }

    else if (keyword === 'C') { svg.style('.color, .hue { fill: #e0cfd6; } ' + commonStyles) && $('.modal-body .color-info').append( objectInfoC ); }
    else if (keyword === 'D') { svg.style('.color, .hue { fill: #cda2d9; } ' + commonStyles) && $('.modal-body .color-info').append( objectInfoD ); }
    else if (keyword === 'E') { svg.style('.color, .hue { fill: #c9b7e8; } ' + commonStyles) && $('.modal-body .color-info').append( objectInfoE ); }
    else if (keyword === 'F') { svg.style('.color, .hue { fill: #aca8c7; } ' + commonStyles) && $('.modal-body .color-info').append( objectInfoF ); }
    else if (keyword === 'G') { svg.style('.color, .hue { fill: #a7b2e8; } ' + commonStyles) && $('.modal-body .color-info').append( objectInfoG ); }
    else if (keyword === 'H') { svg.style('.color, .hue { fill: #7993a5; } ' + commonStyles) && $('.modal-body .color-info').append( objectInfoH ); }

    else if (keyword === 'I') { svg.style('.color, .hue { fill: #afc3dc; } ' + commonStyles) && $('.modal-body .color-info').append( objectInfoI ); }
    else if (keyword === 'J') { svg.style('.color, .hue { fill: #a9c8f4; } ' + commonStyles) && $('.modal-body .color-info').append( objectInfoJ ); }
    else if (keyword === 'K') { svg.style('.color, .hue { fill: #a7d4ee; } ' + commonStyles) && $('.modal-body .color-info').append( objectInfoK ); }
    else if (keyword === 'L') { svg.style('.color, .hue { fill: #8298bd; } ' + commonStyles) && $('.modal-body .color-info').append( objectInfoL ); }
    else if (keyword === 'M') { svg.style('.color, .hue { fill: #67a5bf; } ' + commonStyles) && $('.modal-body .color-info').append( objectInfoM ); }
    else if (keyword === 'N') { svg.style('.color, .hue { fill: #6eb2bd; } ' + commonStyles) && $('.modal-body .color-info').append( objectInfoN ); }

    else if (keyword === 'O') { svg.style('.color, .hue { fill: #6bd9de; } ' + commonStyles) && $('.modal-body .color-info').append( objectInfoO ); }
    else if (keyword === 'P') { svg.style('.color, .hue { fill: #94b7bc; } ' + commonStyles) && $('.modal-body .color-info').append( objectInfoP ); }
    else if (keyword === 'Q') { svg.style('.color, .hue { fill: #6aceb9; } ' + commonStyles) && $('.modal-body .color-info').append( objectInfoQ ); }
    else if (keyword === 'R') { svg.style('.color, .hue { fill: #a9bab7; } ' + commonStyles) && $('.modal-body .color-info').append( objectInfoR ); }
    else if (keyword === 'S') { svg.style('.color, .hue { fill: #6bac92; } ' + commonStyles) && $('.modal-body .color-info').append( objectInfoS ); }
    else if (keyword === 'T') { svg.style('.color, .hue { fill: #a7d9bc; } ' + commonStyles) && $('.modal-body .color-info').append( objectInfoT ); }

    else if (keyword === 'U') { svg.style('.color, .hue { fill: #b7e394; } ' + commonStyles) && $('.modal-body .color-info').append( objectInfoU ); }
    else if (keyword === 'V') { svg.style('.color, .hue { fill: #c7ca9c; } ' + commonStyles) && $('.modal-body .color-info').append( objectInfoV ); }
    else if (keyword === 'W') { svg.style('.color, .hue { fill: #d4e458; } ' + commonStyles) && $('.modal-body .color-info').append( objectInfoW ); }
    else if (keyword === 'X') { svg.style('.color, .hue { fill: #ebe081; } ' + commonStyles) && $('.modal-body .color-info').append( objectInfoX ); }
    else if (keyword === 'Y') { svg.style('.color, .hue { fill: #cabe96; } ' + commonStyles) && $('.modal-body .color-info').append( objectInfoY ); }
    else if (keyword === 'Z') { svg.style('.color, .hue { fill: #dfa880; } ' + commonStyles) && $('.modal-body .color-info').append( objectInfoZ ); }

    else {
      $('body').append(
        $('<div class="error"><strong>ERROR!</strong> Please, make sure it is (i) a word formed by characters from A to Z and/or numbers from 9 to 0; and (ii) all letters are in uppercase.</div>')
      );
    }
  }

  //////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////

       if (date >= 101 && date <= 110) { $('#svgObject').svg({ loadURL: 'objects/0101-0110.svg', onLoad: addColor }); }
  else if (date >= 111 && date <= 120) { $('#svgObject').svg({ loadURL: 'objects/0111-0120.svg', onLoad: addColor }); }
  else if (date >= 121 && date <= 131) { $('#svgObject').svg({ loadURL: 'objects/0121-0131.svg', onLoad: addColor }); }

  else if (date >= 201 && date <= 210) { $('#svgObject').svg({ loadURL: 'objects/0201-0210.svg', onLoad: addColor }); }
  else if (date >= 211 && date <= 220) { $('#svgObject').svg({ loadURL: 'objects/0211-0220.svg', onLoad: addColor }); }
  else if (date >= 221 && date <= 229) { $('#svgObject').svg({ loadURL: 'objects/0221-0229.svg', onLoad: addColor }); }

  else if (date >= 301 && date <= 310) { $('#svgObject').svg({ loadURL: 'objects/0301-0310.svg', onLoad: addColor }); }
  else if (date >= 311 && date <= 320) { $('#svgObject').svg({ loadURL: 'objects/0311-0320.svg', onLoad: addColor }); }
  else if (date >= 321 && date <= 331) { $('#svgObject').svg({ loadURL: 'objects/0321-0331.svg', onLoad: addColor }); }

  else if (date >= 401 && date <= 410) { $('#svgObject').svg({ loadURL: 'objects/0401-0410.svg', onLoad: addColor }); }
  else if (date >= 411 && date <= 420) { $('#svgObject').svg({ loadURL: 'objects/0411-0420.svg', onLoad: addColor }); }
  else if (date >= 421 && date <= 430) { $('#svgObject').svg({ loadURL: 'objects/0421-0430.svg', onLoad: addColor }); }

  else if (date >= 501 && date <= 510) { $('#svgObject').svg({ loadURL: 'objects/0501-0510.svg', onLoad: addColor }); }
  else if (date >= 511 && date <= 520) { $('#svgObject').svg({ loadURL: 'objects/0511-0520.svg', onLoad: addColor }); }
  else if (date >= 521 && date <= 531) { $('#svgObject').svg({ loadURL: 'objects/0521-0531.svg', onLoad: addColor }); }

  else if (date >= 601 && date <= 610) { $('#svgObject').svg({ loadURL: 'objects/0601-0610.svg', onLoad: addColor }); }
  else if (date >= 611 && date <= 620) { $('#svgObject').svg({ loadURL: 'objects/0611-0620.svg', onLoad: addColor }); }
  else if (date >= 621 && date <= 630) { $('#svgObject').svg({ loadURL: 'objects/0621-0630.svg', onLoad: addColor }); }

  else if (date >= 701 && date <= 710) { $('#svgObject').svg({ loadURL: 'objects/0701-0710.svg', onLoad: addColor }); }
  else if (date >= 711 && date <= 720) { $('#svgObject').svg({ loadURL: 'objects/0711-0720.svg', onLoad: addColor }); }
  else if (date >= 721 && date <= 731) { $('#svgObject').svg({ loadURL: 'objects/0721-0731.svg', onLoad: addColor }); }

  else if (date >= 801 && date <= 810) { $('#svgObject').svg({ loadURL: 'objects/0801-0810.svg', onLoad: addColor }); }
  else if (date >= 811 && date <= 820) { $('#svgObject').svg({ loadURL: 'objects/0811-0820.svg', onLoad: addColor }); }
  else if (date >= 821 && date <= 831) { $('#svgObject').svg({ loadURL: 'objects/0821-0831.svg', onLoad: addColor }); }

  else if (date >= 901 && date <= 910) { $('#svgObject').svg({ loadURL: 'objects/0901-0910.svg', onLoad: addColor }); }
  else if (date >= 911 && date <= 920) { $('#svgObject').svg({ loadURL: 'objects/0911-0920.svg', onLoad: addColor }); }
  else if (date >= 921 && date <= 930) { $('#svgObject').svg({ loadURL: 'objects/0921-0930.svg', onLoad: addColor }); }

  else if (date >= 1001 && date <= 1010) { $('#svgObject').svg({ loadURL: 'objects/1001-1010.svg', onLoad: addColor }); }
  else if (date >= 1011 && date <= 1020) { $('#svgObject').svg({ loadURL: 'objects/1011-1020.svg', onLoad: addColor }); }
  else if (date >= 1021 && date <= 1031) { $('#svgObject').svg({ loadURL: 'objects/1021-1031.svg', onLoad: addColor }); }

  else if (date >= 1101 && date <= 1110) { $('#svgObject').svg({ loadURL: 'objects/1101-1110.svg', onLoad: addColor }); }
  else if (date >= 1111 && date <= 1120) { $('#svgObject').svg({ loadURL: 'objects/1111-1120.svg', onLoad: addColor }); }
  else if (date >= 1121 && date <= 1130) { $('#svgObject').svg({ loadURL: 'objects/1121-1130.svg', onLoad: addColor }); }

  else if (date >= 1201 && date <= 1210) { $('#svgObject').svg({ loadURL: 'objects/1201-1210.svg', onLoad: addColor }); }
  else if (date >= 1211 && date <= 1220) { $('#svgObject').svg({ loadURL: 'objects/1211-1220.svg', onLoad: addColor }); }
  else if (date >= 1221 && date <= 1231) { $('#svgObject').svg({ loadURL: 'objects/1221-1231.svg', onLoad: addColor }); }

  else {
    $('body').append(
      $('<div class="error"><strong>ERROR!</strong> Please, make sure it is (i) an actual date; (ii) with proper format: MMDD.</div>')
    );
  }
}

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

function pageFullyLoaded(e) {

  //////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////

  $('svg').attr({
    'xmlns': 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'xmlns:xlink'
  }).removeAttr('width').removeAttr('height');

  //
  var svgObjectId = $('svg').attr('id');

  //
  document.title = svgObjectId.slice(7);
  $('body').addClass( svgObjectId );

  //////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////

  var s = new XMLSerializer().serializeToString(document.getElementsByTagName('svg') [0]);
  var encodedData = window.btoa(s);

  $('#modal .modal-body .base-64').text('data:image/svg+xml;base64,' + encodedData);

  //////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////

}

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

