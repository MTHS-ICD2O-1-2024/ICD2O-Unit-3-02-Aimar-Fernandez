// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Aimar Fernandez
// Created on: Mar 2025
// This file contains the JS functions for index.html

function myButtonClicked() {
  // input
  const length = parseFloat(document.getElementById("length").value)
  const width  = parseFloat(document.getElementById("width").value)
  const height = parseFloat(document.getElementById("height").value)
  // output
  document.getElementById("answer").innerHTML =
    "Volume is: " + length*width*height/3 + "cm³"
}
