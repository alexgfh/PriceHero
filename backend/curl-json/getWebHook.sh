#!/bin/bash

# command to test server
# curl --header "Content-Type: appation/json" --request POST --data '{"username":"xyz","password":"xyz"}' http://ec2-34-242-186-208.eu-west-1.compute.amazonaws.com/


curl -s -D "/dev/stderr" -H RECEIPTHERO_APIKEY:8d32fdd6248935964d129b8515bfc3d3afd22963 https://api.dev.receipthero.io/api/v1/webhooks/ | jq . > getwebhooks.json
