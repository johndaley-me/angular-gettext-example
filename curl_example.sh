#!/bin/bash
USER='scstrantz'
PASS='InnovationD@y'
TE_IN='./po/te_IN.po'

clear

curl -i --user $USER:$PASS -X GET https://www.transifex.com/api/2/project/todomvc/resource/templatepot?details

echo "-------------------------------------------------------------------------------"
echo "--------------------------------------------------------------------------------"

curl -i --user $USER:$PASS -X GET https://www.transifex.com/api/2/project/todomvc/resource/templatepot/stats

echo "-------------------------------------------------------------------------------"
echo "--------------------------------------------------------------------------------"

curl -i -L --user $USER:$PASS -F file=@$TE_IN -X PUT https://www.transifex.com/api/2/project/todomvc/resource/templatepot/translation/te_IN

echo "-------------------------------------------------------------------------------"
echo "--------------------------------------------------------------------------------"

# # Get file (come back with bad format but all data)
curl -o ./po/te_IN_download.po --user $USER:$PASS -X GET https://www.transifex.com/api/2/project/todomvc/resource/templatepot/translation/te/?mode=reviewed&file

echo "-------------------------------------------------------------------------------"