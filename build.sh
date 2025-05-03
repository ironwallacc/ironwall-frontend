#!/bin/bash

# Exit immediately if any command fails
set -e

# Install Vite globally
npm install -g vite@latest

# Install project dependencies
npm install

# Build with Vite
vite build
