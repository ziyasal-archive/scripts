Adapted [from](https://blog.al4.co.nz/2014/08/safely-running-bulk-operations-on-redis-with-lua-scripts/) 

## Delete keys by pattern

**Run following script by targeting master on your cluster**  
```sh
bash delete-keys-by-pattern.sh localhost 6379 'products:jew*'
```
