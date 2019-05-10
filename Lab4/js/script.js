const fileInput = document.getElementById("fileInput");
const multipleFilters = document.getElementById("multipleFilters");

// convertion buttons
const BTN_GAUSE = document.getElementById("btn-Gause");
const BTN_CANNY = document.getElementById("btn-Canny");
const BTN_ROBERTS = document.getElementById("btn-Roberts");
const BTN_PREWITT_X = document.getElementById("btn-Prewitt-x");
const BTN_PREWITT_Y = document.getElementById("btn-Prewitt-y");
const BTN_SOBEL_X = document.getElementById("btn-Sobel-x");
const BTN_SOBEL_Y = document.getElementById("btn-Sobel-y");
const BTN_LAPLAS = document.getElementById("btn-Laplas");

const BTN_RELOAD = document.getElementById("btn-reload");

// transformation buttons
const BTN_TRANSLATION = document.getElementById("btn-translation");
const BTN_ROTATE = document.getElementById("btn-rotate");
const BTN_SCALE = document.getElementById("btn-scale");
const BTN_SHIFT = document.getElementById("btn-shift");

//user buttons
const BTN_UPLOAD_FILE = document.getElementsByClassName("item-upload")[0];
const BTN_SAVE_FILE = document.getElementsByClassName("item-save")[0];
const BTN_CHANNEL_1 = document.getElementById("channel_btn-1");
const BTN_CHANNEL_2 = document.getElementById("channel_btn-2");
const BTN_CHANNEL_3 = document.getElementById("channel_btn-3");
const originalImage = document.getElementById("imageSrc");
const filteredImageCanvas = document.getElementById("outputCanvas_DST_IMG");

let isConvertedImage = false;

BTN_UPLOAD_FILE.addEventListener("click", () => {
  fileInput.click();
  // upload();
});

fileInput.addEventListener("change", (event) => {
  originalImage.src = URL.createObjectURL(event.target.files[0]);
}, false);

let src = null;
let dst = null;
let FileName = '';
let imgChannel1 = null;
let imgChannel2 = null;
let imgChannel3 = null;

originalImage.onload = () => {
  src = cv.imread(originalImage);
  dst = new cv.Mat();
  let str = fileInput.value.slice(fileInput.value.length - 3);
  if (str === 'jpg' || str === 'png' || str === 'gif' || str === 'tiff') {
    cv.imshow("outputCanvas_SRC_IMG", src);
    FileName = fileInput.value;
    console.log(src.type())
  } else {
    alert("Нужно загрузить изображение");
  }
};

BTN_SAVE_FILE.removeEventListener("click", saveDefault)
// BTN_GAUSE.removeEventListener("click", gauseDisplay);
// BTN_CANNY.removeEventListener("click", cannyDisplay);
// BTN_ROBERTS.removeEventListener("click", robertsDisplay);
// BTN_PREWITT.removeEventListener("click", prewittDisplay);
// BTN_SOBEL.removeEventListener("click", sobelDisplay);
// BTN_LAPLAS.removeEventListener("click", laplasDisplay);
BTN_CHANNEL_1.removeEventListener("click", saveChannel_1);
BTN_CHANNEL_2.removeEventListener("click", saveChannel_2);
BTN_CHANNEL_3.removeEventListener("click", saveChannel_3);

// BTN_TRANSLATION.removeEventListener("click",);
// BTN_ROTATE.removeEventListener("click");
// BTN_SCALE.removeEventListener("click");
// BTN_SHIFT.removeEventListener("click");

BTN_SAVE_FILE.addEventListener("click", saveDefault);
BTN_GAUSE.addEventListener("click", gauseDisplay);
BTN_CANNY.addEventListener("click", cannyDisplay);
BTN_ROBERTS.addEventListener("click", robertsDisplay);
BTN_PREWITT_X.addEventListener("click", prewittHorizontalDisplay);
BTN_PREWITT_Y.addEventListener("click", prewittVerticalDisplay);
BTN_SOBEL_X.addEventListener("click", sobelHorizontalDisplay);
BTN_SOBEL_Y.addEventListener("click", sobelVerticalDisplay);
BTN_LAPLAS.addEventListener("click", laplasDisplay);

BTN_RELOAD.addEventListener("click", reloadImage);

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

BTN_SCALE.addEventListener("click", scale);

function scale() {
  if (src === null) {
    alert('Загрузите пожалуйста изображение!');
  } else {
    let mat = new cv.Mat(2, 3, src.type());
    mat.put(0, 0, 2, 0, 10, 0, 2, 10);
    // cv.warpAffine(dst, dst,);
  }
}


function gauseDisplay() {
  if (src === null) {
    alert('Загрузите пожалуйста изображение!');
  } else {
    let filter = LenaJS["gaussian"];
    if (isConvertedImage && multipleFilters.checked) {
      LenaJS.redrawCanvas(filteredImageCanvas, filter);
    } else {
      LenaJS.filterImage(filteredImageCanvas, filter, originalImage)
    }
    isConvertedImage = true;
  }
}
function cannyDisplay() {
  if (src === null) {
    alert('Загрузите пожалуйста изображение!');
  } else {
    let filter = LenaJS["canny"];
    if (isConvertedImage && multipleFilters.checked) {
      LenaJS.redrawCanvas(filteredImageCanvas, filter);
    } else {
      LenaJS.filterImage(filteredImageCanvas, filter, originalImage)
    }
    isConvertedImage = true;
  }
}
function robertsDisplay() {
  if (src === null) {
    alert('Загрузите пожалуйста изображение!');
  } else {
    let filter = LenaJS["roberts"];
    if (isConvertedImage && multipleFilters.checked) {
      LenaJS.redrawCanvas(filteredImageCanvas, filter);
    } else {
      LenaJS.filterImage(filteredImageCanvas, filter, originalImage)
    }
    isConvertedImage = true;
  }
}
function prewittHorizontalDisplay() {
  if (src === null) {
    alert('Загрузите пожалуйста изображение!');
  } else {
    let filter = LenaJS["prewittHorizontal"];
    if (isConvertedImage && multipleFilters.checked) {
      LenaJS.redrawCanvas(filteredImageCanvas, filter);
    } else {
      LenaJS.filterImage(filteredImageCanvas, filter, originalImage)
    }
    isConvertedImage = true;
  }
}
function prewittVerticalDisplay() {
  if (src === null) {
    alert('Загрузите пожалуйста изображение!');
  } else {
    let filter = LenaJS["prewittVertical"];
    if (isConvertedImage && multipleFilters.checked) {
      LenaJS.redrawCanvas(filteredImageCanvas, filter);
    } else {
      LenaJS.filterImage(filteredImageCanvas, filter, originalImage)
    }
    isConvertedImage = true;
  }
}
function sobelHorizontalDisplay() {
  if (src === null) {
    alert('Загрузите пожалуйста изображение!');
  } else {
    let filter = LenaJS["sobelHorizontal"];
    if (isConvertedImage && multipleFilters.checked) {
      LenaJS.redrawCanvas(filteredImageCanvas, filter);
    } else {
      LenaJS.filterImage(filteredImageCanvas, filter, originalImage)
    }
    isConvertedImage = true;
  }
}
function sobelVerticalDisplay() {
  if (src === null) {
    alert('Загрузите пожалуйста изображение!');
  } else {
    let filter = LenaJS["sobelVertical"];
    if (isConvertedImage && multipleFilters.checked) {
      LenaJS.redrawCanvas(filteredImageCanvas, filter);
    } else {
      LenaJS.filterImage(filteredImageCanvas, filter, originalImage)
    }
    isConvertedImage = true;
  }
}

function laplasDisplay() {
  if (src === null) {
    alert('Загрузите пожалуйста изображение!');
  } else {
    let filter = LenaJS["laplacian"];
    console.log(multipleFilters.checked);

    if (isConvertedImage && multipleFilters.checked) {
      LenaJS.redrawCanvas(filteredImageCanvas, filter);
    } else {
      LenaJS.filterImage(filteredImageCanvas, filter, originalImage)
    }
    isConvertedImage = true;
  }
}

// reload image

function reloadImage() {
  if (src === null) {
    alert('Загрузите пожалуйста изображение!');
  } else {
    isConvertedImage = false;
    cv.imshow("outputCanvas_DST_IMG", src);
  }
}