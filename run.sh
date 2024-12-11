#!/bin/bash

docker build -t react-ros2-webapp .

docker run -it --net host -v $PWD:/root react-ros2-webapp bash
