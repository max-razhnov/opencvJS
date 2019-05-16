const fileInput = document.getElementById("fileInput");
// convertion buttons
const BTN_GRAY = document.getElementById("btn-GRAY");
const BTN_CMY = document.getElementById("btn-CMY");
const BTN_HSL = document.getElementById("btn-HSL");
const BTN_HSV = document.getElementById("btn-HSV");
const BTN_YUV = document.getElementById("btn-YUV");
const BTN_RGB = document.getElementById("btn-RGB");

// transformation buttons
// const BTN_TRANSLATION = document.getElementById("btn-translation");
// const BTN_ROTATE = document.getElementById("btn-rotate");
// const BTN_SCALE = document.getElementById("btn-scale");
// const BTN_SHIFT = document.getElementById("btn-shift");

//user buttons
const BTN_UPLOAD_FILE = document.getElementsByClassName("item-upload")[0];
const BTN_SAVE_FILE = document.getElementsByClassName("item-save")[0];
const BTN_CHANNEL_1 = document.getElementById("channel_btn-1");
const BTN_CHANNEL_2 = document.getElementById("channel_btn-2");
const BTN_CHANNEL_3 = document.getElementById("channel_btn-3");
const imgElement = document.getElementById("imageSrc");

BTN_UPLOAD_FILE.addEventListener("click", () => {
  fileInput.click();
  // upload();
});

fileInput.addEventListener("change", (event) => {
  imgElement.src = URL.createObjectURL(event.target.files[0]);
}, false);

let src = null;
let dst = null;
let FileName = '';
let imgChannel1 = null;
let imgChannel2 = null;
let imgChannel3 = null;

imgElement.onload = () => {
  src = cv.imread(imgElement);
  dst = new cv.Mat();
  let str = fileInput.value.slice(fileInput.value.length - 3);
  if (str === 'jpg' || str === 'png' || str === 'gif' || str === 'tiff') {
    cv.imshow("outputCanvas_SRC_IMG", src);
    FileName = fileInput.value;
  } else {
    alert("Нужно загрузить изображение");
  }
};

BTN_SAVE_FILE.removeEventListener("click", saveDefault)
BTN_RGB.removeEventListener("click", rgbDisplay);
// BTN_CMY.removeEventListener("click", cmyDisplay);
// BTN_GRAY.removeEventListener("click", grayDisplay);
// BTN_HSV.removeEventListener("click", hsvDisplay);
// BTN_HSL.removeEventListener("click", hslDisplay);
// BTN_YUV.removeEventListener("click", yuvDisplay);
BTN_CHANNEL_1.removeEventListener("click", saveChannel_1);
BTN_CHANNEL_2.removeEventListener("click", saveChannel_2);
BTN_CHANNEL_3.removeEventListener("click", saveChannel_3);


const BTN_TRANS1 = document.getElementById("btn-prep");
const BTN_TRANS2 = document.getElementById("btn-lostLayout");
const BTN_TRANS3 = document.getElementById("btn-saveLayout");
const BTN_TRANS4 = document.getElementById("btn-trans4");
const BTN_TRANS5 = document.getElementById("btn-trans5");
const BTN_TRANS6 = document.getElementById("btn-trans6");
const BTN_TRANS7 = document.getElementById("btn-trans7");
const BTN_TRANS8 = document.getElementById("btn-trans8");
const BTN_TRANS9 = document.getElementById("btn-trans9");
const BTN_TRANS10 = document.getElementById("btn-trans10");


BTN_TRANS1.removeEventListener("click", trans1);
BTN_TRANS2.removeEventListener("click", trans2);
BTN_TRANS3.removeEventListener("click", trans3);
BTN_TRANS4.removeEventListener("click", trans4);
BTN_TRANS5.removeEventListener("click", trans5);
BTN_TRANS6.removeEventListener("click", trans6);
BTN_TRANS7.removeEventListener("click", trans7);
BTN_TRANS8.removeEventListener("click", trans8);
BTN_TRANS9.removeEventListener("click", trans9);
BTN_TRANS10.removeEventListener("click", trans10);


// BTN_TRANSLATION.removeEventListener("click",);
// BTN_ROTATE.removeEventListener("click");
// BTN_SCALE.removeEventListener("click");
// BTN_SHIFT.removeEventListener("click");

BTN_TRANS1.addEventListener("click", trans1);
BTN_TRANS2.addEventListener("click", trans2);
BTN_TRANS3.addEventListener("click", trans3);
BTN_TRANS4.addEventListener("click", trans4);
BTN_TRANS5.addEventListener("click", trans5)
BTN_TRANS6.addEventListener("click", trans6)
BTN_TRANS7.addEventListener("click", trans7)
BTN_TRANS8.addEventListener("click", trans8)
BTN_TRANS9.addEventListener("click", trans9);
BTN_TRANS10.addEventListener("click", trans10);


BTN_SAVE_FILE.addEventListener("click", saveDefault);
BTN_RGB.addEventListener("click", rgbDisplay);
// BTN_CMY.addEventListener("click", cmyDisplay);
// BTN_GRAY.addEventListener("click", grayDisplay);
// BTN_HSV.addEventListener("click", hsvDisplay);
// BTN_HSL.addEventListener("click", hslDisplay);
// BTN_YUV.addEventListener("click", yuvDisplay);


BTN_CHANNEL_1.addEventListener("click", saveChannel_1);
BTN_CHANNEL_2.addEventListener("click", saveChannel_2);
BTN_CHANNEL_3.addEventListener("click", saveChannel_3);


function saveChannel_1() {
  let canvas = document.getElementById("outputCanvasChannel_1");
  if (imgChannel1 !== null) {
    if (imgChannel1.rows !== 0 && imgChannel1.cols !== 0) {
      let canvasData = canvas.toDataURL("image/jpg");
      let link = document.createElement("a");
      link.href = canvasData;
      link.download = `${FileName}`;
      link.click();
    } else {
      alert('Незачем сохранять пустое изображение!');
    }
  } else {
    alert('Сначала загрузите изображение, потом сохраняйте!');
  }
}

function saveChannel_2() {
  let canvas = document.getElementById("outputCanvasChannel_2");
  if (imgChannel2 !== null) {
    if (imgChannel2.rows !== 0 && imgChannel2.cols !== 0) {
      let canvasData = canvas.toDataURL("image/jpg");
      let link = document.createElement("a");
      link.href = canvasData;
      link.download = `${FileName}`;
      link.click();
    } else {
      alert('Незачем сохранять пустое изображение!');
    }
  } else {
    alert('Сначала загрузите изображение, потом сохраняйте!');
  }
}

function saveChannel_3() {
  let canvas = document.getElementById("outputCanvasChannel_3");
  if (imgChannel3 !== null) {
    if (imgChannel3.rows !== 0 && imgChannel3.cols !== 0) {
      let canvasData = canvas.toDataURL("image/jpg");
      let link = document.createElement("a");
      link.href = canvasData;
      link.download = `${FileName}`;
      link.click();
    } else {
      alert('Незачем сохранять пустое изображение!');
    }
  } else {
    alert('Сначала загрузите изображение, потом сохраняйте!');
  }
}

function saveDefault() {
  let canvas = document.getElementById("outputCanvas_DST_IMG");
  if (dst !== null) {
    if (dst.rows !== 0 && dst.cols !== 0) {
      let canvasData = canvas.toDataURL("image/jpg");
      let link = document.createElement("a");
      link.href = canvasData;
      link.download = `${FileName}`;
      link.click();
    } else {
      alert('Незачем сохранять пустое изображение!')
    }
  } else {
    alert('Сначала загрузите изображение, потом сохраняйте!');
  }
}

function upload() {
  debugger
  if (src === null) {
    alert('Загрузите пожалуйста изображение!');
  } else {
    cv.imshow("outputCanvas_DST_IMG", src);
  }
}

function rgbDisplay() {
  if (src === null) {
    alert('Загрузите пожалуйста изображение!');
  } else {
    imgChannel1 = src.clone();
    imgChannel2 = src.clone();
    imgChannel3 = src.clone();
    document.getElementsByClassName("title")[2].classList.remove('visible');
    document.getElementsByClassName("channels")[0].classList.remove('visible');
    cv.imshow("outputCanvas_DST_IMG", src);
    cv.imshow("outputCanvasChannel_1", redChannel(imgChannel1));
    cv.imshow("outputCanvasChannel_2", greenChannel(imgChannel2));
    cv.imshow("outputCanvasChannel_3", blueChannel(imgChannel3));
    dst = src.clone();
  }
}

function cmyDisplay() {
  if (src === null) {
    alert('Загрузите пожалуйста изображение!');
  } else {
    document.getElementsByClassName("title")[2].classList.remove('visible');
    document.getElementsByClassName("channels")[0].classList.remove('visible');
    let imgCMY = src.clone();
    cv.cvtColor(imgCMY, imgCMY, cv.COLOR_RGBA2RGB, 0);
    imgChannel1 = src.clone();
    imgChannel2 = src.clone();
    imgChannel3 = src.clone();
    cv.imshow("outputCanvas_DST_IMG", CMYConvert(imgCMY));
    cv.imshow("outputCanvasChannel_1", cyanChannel(imgChannel1));
    cv.imshow("outputCanvasChannel_2", magentaChannel(imgChannel2));
    cv.imshow("outputCanvasChannel_3", yellowChannel(imgChannel3));
    dst = imgCMY.clone();
  }
}

function grayDisplay() {
  if (src === null) {
    alert('Загрузите пожалуйста изображение!');
  } else {
    document.getElementsByClassName("title")[2].classList.add('visible');
    document.getElementsByClassName("channels")[0].classList.add('visible');
    cv.cvtColor(src, dst, cv.COLOR_RGB2GRAY, 0);
    cv.imshow("outputCanvas_DST_IMG", dst);
    dst = dst.clone();
  }
}

function hsvDisplay() {
  if (src === null) {
    alert('Загрузите пожалуйста изображение!');
  } else {
    document.getElementsByClassName("title")[2].classList.add('visible');
    document.getElementsByClassName("channels")[0].classList.add('visible');
    cv.cvtColor(src, dst, cv.COLOR_RGBA2RGB, 0);
    cv.cvtColor(dst, dst, cv.COLOR_RGB2HSV, 0);
    cv.imshow("outputCanvas_DST_IMG", dst);
    dst = dst.clone();
  }
}

function hslDisplay() {
  if (src === null) {
    alert('Загрузите пожалуйста изображение!');
  } else {
    document.getElementsByClassName("title")[2].classList.add('visible');
    document.getElementsByClassName("channels")[0].classList.add('visible');
    cv.cvtColor(src, dst, cv.COLOR_RGBA2RGB, 0);
    cv.cvtColor(dst, dst, cv.COLOR_RGB2HLS, 0);
    cv.imshow("outputCanvas_DST_IMG", dst);
    dst = dst.clone();
  }
}

function yuvDisplay() {
  if (src === null) {
    alert('Загрузите пожалуйста изображение!');
  } else {
    document.getElementsByClassName("title")[2].classList.add('visible');
    document.getElementsByClassName("channels")[0].classList.add('visible');
    cv.cvtColor(src, dst, cv.COLOR_RGBA2RGB, 0);
    cv.cvtColor(dst, dst, cv.COLOR_RGB2YUV, 0);
    cv.imshow("outputCanvas_DST_IMG", dst);
    dst = dst.clone();
  }
}


// RGB to CMY
function CMYConvert(imgCMY) {
  for (let i = 0; i < imgCMY.data.length; i += 3) {
    imgCMY.data[i] = 255 - imgCMY.data[i]
  }
  for (let i = 1; i < imgCMY.data.length; i += 3) {
    imgCMY.data[i] = 255 - imgCMY.data[i]
  }
  for (let i = 2; i < imgCMY.data.length; i += 3) {
    imgCMY.data[i] = 255 - imgCMY.data[i]
  }
  return imgCMY;
}

// Green channel
function greenChannel(imgG) {
  for (let i = 0; i < imgG.data.length; i += 2) {
    imgG.data[i] = 0;
  }
  return imgG;
}

// Red channel
function redChannel(imgR) {
  for (let i = 2; i < imgR.data.length; i += 4) {
    imgR.data[i] = 0;
    imgR.data[i - 1] = 0;
  }
  return imgR;
}

//  Blue channel
function blueChannel(imgB) {
  for (let i = 0; i < imgB.data.length; i += 4) {
    if (i % 4 == 0) {
      imgB.data[i] = 0;
      imgB.data[i + 1] = 0;
    }
  }
  return imgB;
}

// Magenta channel
function magentaChannel(imgMagenta) {
  for (let i = 1; i < imgMagenta.data.length; i += 4) {
    imgMagenta.data[i] = 0;
  }
  return imgMagenta;
}

// Cyan channel
function cyanChannel(imgCyan) {
  for (let i = 0; i < imgCyan.data.length; i += 4) {
    imgCyan.data[i] = 0;
  }
  return imgCyan;
}

// Yellow channel
function yellowChannel(imgYellow) {
  for (let i = 2; i < imgYellow.data.length; i += 4) {
    imgYellow.data[i] = 0;
  }
  return imgYellow;
}

// BTN_SCALE.addEventListener("click", scale);

function scale() {
  if (src === null) {
    alert('Загрузите пожалуйста изображение!');
  } else {
    let mat = new cv.Mat(2, 3, src.type());
    mat.put(0, 0, 2, 0, 10, 0, 2, 10);
    // cv.warpAffine(dst, dst,);
  }
}


function trans1() {
  let img = src.clone();
  let value = +prompt('chislo', 127);
  cv.cvtColor(src, img, cv.COLOR_RGBA2GRAY, 0);
  for (let i = 0; i < img.data.length; i++) {
    if (img.data[i] > value) {
      img.data[i] = 255;
    } else {
      img.data[i] = 0;
    }
  }
  cv.imshow("outputCanvas_DST_IMG", img);
}


function trans2() {
  let minValue = +prompt('vvedite min interval', 75);
  let maxValue = +prompt('vvedite max interval', 150);
  let img = src.clone();
  // let count = 0;
  cv.cvtColor(src, img, cv.COLOR_RGBA2GRAY, 0);
  for (let i = 0; i < img.data.length; i++) {
    if (img.data[i] > minValue && img.data[i] < maxValue) {
      img.data[i] = 255;
    } else {
      img.data[i] = 0;
    }
  }
  cv.imshow("outputCanvas_DST_IMG", img);
}


function trans3() {
  let img = src.clone();
  // let alpha = 255;
  let minValue = +prompt('vvedite min interval', 180);
  let maxValue = +prompt('vvedite max interval', 240);
  cv.cvtColor(src, img, cv.COLOR_RGBA2GRAY, 0);
  // console.log(img.data)
  for (let i = 0; i < img.data.length; i++) {
    if (img.data[i] > minValue && img.data[i] < maxValue) {
      // img.data[i] = 255;
      img.data[i] = 255;
      // } else {
      // img.data[i] = alpha * (img.data[i]) / (255);
      // }
    }
    // console.log(img.data)
  }
  cv.imshow("outputCanvas_DST_IMG", img);
}


function trans4() {
  let img = src.clone();
  // let alpha = 255;
  let minValue = +prompt('vvedite min interval', 100);
  // let maxValue = +prompt('vvedite max interval', 240);
  cv.cvtColor(src, img, cv.COLOR_RGBA2GRAY, 0);
  for (let i = 0; i < img.data.length; i++) {
    if (img.data[i] > minValue) {
      // img.data[i] = alpha * (img.data[i] - 0) / (255 - 0);
      img.data[i] = 255;
    }
    // } else if (img.data[i] < minValue) {
    //   img.data[i] = 0;
    // } else if (img.data[i] > maxValue) {
    //   img.data[i] = 255;
    // }
  }
  cv.imshow("outputCanvas_DST_IMG", img);
}


function trans5() {
  let img = src.clone();
  // let alpha = 255;
  let minValue = +prompt('vvedite min interval', 100);
  let maxValue = +prompt('vvedite max interval', 200);
  cv.cvtColor(src, img, cv.COLOR_RGBA2GRAY, 0);
  for (let i = 0; i < img.data.length; i++) {
    if (img.data[i] < minValue) {
      img.data[i] = 0;
      // img.data[i] = alpha * (img.data[i] - 0) / (255 - 0);
    } else if (img.data[i] > maxValue) {
      img.data[i] = 255;
    }
  }
  cv.imshow("outputCanvas_DST_IMG", img);
}


function trans6() {
  let img = src.clone();
  // let alpha = 255;
  let minValue = +prompt('vvedite min interval', 100);
  let maxValue = +prompt('vvedite max interval', 200);
  cv.cvtColor(src, img, cv.COLOR_RGBA2GRAY, 0);
  for (let i = 0; i < img.data.length; i++) {
    if (img.data[i] < minValue) {
      img.data[i] = 255;
      // img.data[i] = alpha * (img.data[i] - 0) / (255 - 0);
    } else if (img.data[i] > maxValue) {
      img.data[i] = 0;
    } else {
      img.data[i] = 255 - img.data[i];
    }
  }
  cv.imshow("outputCanvas_DST_IMG", img);
}


function trans7() {
  let img = src.clone();
  // let alpha = 255;
  let minValue = +prompt('vvedite min interval', 100);
  let maxValue = +prompt('vvedite max interval', 200);
  cv.cvtColor(src, img, cv.COLOR_RGBA2GRAY, 0);
  for (let i = 0; i < img.data.length; i++) {
    if (img.data[i] < minValue) {
      img.data[i] = 0;
      // img.data[i] = alpha * (img.data[i] - 0) / (255 - 0);
    } else if (img.data[i] > maxValue) {
      img.data[i] = 0;
    }
  }
  cv.imshow("outputCanvas_DST_IMG", img);
}


function trans8() {
  let img = src.clone();
  // let alpha = 255;
  let minValue = +prompt('vvedite min interval', 100);
  let maxValue = +prompt('vvedite max interval', 200);
  cv.cvtColor(src, img, cv.COLOR_RGBA2GRAY, 0);
  for (let i = 0; i < img.data.length; i++) {
    if (img.data[i] < minValue) {
      img.data[i] = 255;
      // img.data[i] = alpha * (img.data[i] - 0) / (255 - 0);
    } else if (img.data[i] > maxValue) {
      img.data[i] = 255;
    }
  }
  cv.imshow("outputCanvas_DST_IMG", img);
}


function trans9() {
  let img = src.clone();
  let minValue = +prompt('vvedite min interval', 100);
  let maxValue = +prompt('vvedite max interval', 200);
  cv.cvtColor(src, img, cv.COLOR_RGBA2GRAY, 0);
  for (let i = 0; i < img.data.length; i++) {
    if (img.data[i] < minValue) {
      img.data[i] = 127;
      // img.data[i] = alpha * (img.data[i] - 0) / (255 - 0);
    } else if (img.data[i] > maxValue) {
      img.data[i] = 127;
    }
  }
  cv.imshow("outputCanvas_DST_IMG", img);
}


function trans10() {
  let img = src.clone();
  // let alpha = 255;
  let minValue = +prompt('vvedite min interval', 100);
  let maxValue = +prompt('vvedite max interval', 200);
  let n = +prompt('vvedite kol-vo pil ', 3);
  let dl = +Math.floor(255 / n);
  cv.cvtColor(src, img, cv.COLOR_RGBA2GRAY, 0);
  for (let i = 0; i < img.data.length; i++) {
    img.data[i] = ((img.data[i] - (dl) * Math.floor(img.data[i] / dl)) * 255 / Math.floor(255 / n));
  }
  // console.log(img.data)
  cv.imshow("outputCanvas_DST_IMG", img);
}

const BTN_RESET = document.getElementById("btn-reset");
BTN_RESET.addEventListener("click", reset);

function reset() {
  const canvas = document.getElementById("outputCanvas_DST_IMG");
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
}