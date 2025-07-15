#!/bin/bash
cd /home/kavia/workspace/code-generation/photography-portfolio-showcase-d78d2cac/photography_portfolio_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

