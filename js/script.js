// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Aimar Fernandez
// Created on: Feb 2025
// This file contains the JS functions for index.html

function myButtonClicked() {
  // input
  const base = parseFloat(document.getElementById("base").value)
  const height = parseFloat(document.getElementById("height").value)
  // output
  document.getElementById("answer").innerHTML =
    "Area is: " + base*height/2 + "cm²"
}
