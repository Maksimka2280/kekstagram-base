
const scaleControlSmallder = document.querySelector(".scale__control--smaller");
const scaleControlInput = document.querySelector(".scale__control--value");
const scaleControlBigger = document.querySelector(".scale__control--bigger");
const MIN_SCALE = 50;
const MAX_SCALE = 200;
const SCALE_STEP = 10;
const img = document.querySelector('.img-upload__preview img');

export const startScalePublication = () => {
  let scaleValue = 100;

  updateScalCtrlInput();

  scaleControlSmallder.addEventListener("click", () => {
    if (scaleValue - SCALE_STEP < MIN_SCALE) {
      return;
    }
    scaleValue -= SCALE_STEP;
    updateScalCtrlInput();
  });

  scaleControlBigger.addEventListener("click", () => {
    if (scaleValue + SCALE_STEP > MAX_SCALE) {
      return;
    }

    scaleValue += SCALE_STEP;
    updateScalCtrlInput();
  });

  function updateScalCtrlInput() {
    scaleControlInput.value = `${scaleValue}%`;
    img.style.transform = `scale(${scaleValue / 100})`;

  }
};

