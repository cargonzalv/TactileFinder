# Tactile Finder

This repo contains different iterations for the [Tactile Finder project](https://tactiled.firebaseapp.com)

The Tactile Finder Project is aimed to help visually impaired people find images that are optimal to be transformed to Tactile Graphics.

# Here you can see the description of each folder (project iteration)

1. tactile_finder_python: Tensorflow model running on Python. Based on the tensorflow for Poets example, using mobilenet for transfer learning. First basic iteration, works only on terminal. 90% accuracy

2. tactileFinderBrowser: TensorflowJS model training and running purely on the browser. No backend. Uses OpenGL (so it uses graphics card for processing). Pretty accurate and fast, but lags the UI a lot. Discarded at the moment.

3. tactileFinderNode: Current and Main Project, TensorflowJS model running on cloud functions and a react frontend. This is the final version of the project.
