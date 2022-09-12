#!/bin/bash
# This script downloads covid data and displays it


DATA=$(curl https://api.covidtracking.com/v1/us/current.json)
POSITIVE=$(echo $DATA | jq '.[0].positive')
NEGATIVE=$(echo $DATA | jq '.[].negative')
PENDING=$(echo $DATA | jq '.[].pending')
TOTAL=$(echo $DATA | jq '.[].totalTestResults')
TODAY=$(date)

echo "On $TODAY, there were $POSITIVE positive and $NEGATIVE negative COVID cases, with $PENDING tests still pending, for a total of $TOTAL tests."

