#!/bin/bash

function server () {
  while true
  do
    read method path version
    if [[ $method = 'GET' ]]
    then
      if [[ -e $path ]]
      then
        echo 'HTTP/1.1 200 OK'
        cat $path
      else
        echo 'HTTP/1.1 404 Not Found'
      fi
    else
      echo 'HTTP/1.1 400 Bad Request'
    fi
  done
}

coproc SERVER_PROCESS { server; }

netcat -lv 2345 <&${SERVER_PROCESS[0]} >&${SERVER_PROCESS[1]}
