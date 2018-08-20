#!/bin/bash

docker run -it -v $(pwd)/$line:/${PWD##*/}  -w /${PWD##*/} kimlictr/quorum-kimlic:latest bash
