"use client";

function changeSizeByBtn(size: number) {
  var cont = document.querySelectorAll("#text");
  cont.forEach((el) => {
    const oldSize = window.getComputedStyle(el).fontSize;
    let currentFontSize: number;

    if (size === 0) {
      currentFontSize = el.getAttribute("data-font-size")
        ? parseInt(el.getAttribute("data-font-size")!)
        : 16;
    } else {
      currentFontSize = parseInt(oldSize) + size;
    }

    (el as HTMLElement).style.fontSize = currentFontSize + "px";
  });
}

export default changeSizeByBtn;
