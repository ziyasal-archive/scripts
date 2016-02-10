##To Run

```sh
node .\index.js --pattern='my_pattern:*' --prop='UserId' --val=11810419
```

**With `host`, `port` and `db` options**
```sh
node .\index.js --pattern='my_pattern:*' \
                  --prop='UserId' --val=11810419 \ 
                  --host='127.0.0.1' --port=6379  --db=0
```
