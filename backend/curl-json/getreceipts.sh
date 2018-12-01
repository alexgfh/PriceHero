#!/bin/bash

curl -s -D "/dev/stderr" \
 -H "RECEIPTHERO_APIKEY:8d32fdd6248935964d129b8515bfc3d3afd22963" \
-H "Authorization: Bearer Z82yLNTmjpTIl5nh7P1yq2yj7LVZJL" \
https://api.dev.receipthero.io/api/v1/users/92/receipts/  | jq . > receipts.json
