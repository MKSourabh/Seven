@echo off
start "MongoDB" "C:\Program Files\MongoDB\Server\8.0\bin\mongod.exe"
start cmd /k "cd backend && node server.js"