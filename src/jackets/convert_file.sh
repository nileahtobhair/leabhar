#!/bin/bash

for i in *; do sips -s format png $i --out converted/$i.png;done