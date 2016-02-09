local result = {}

for i,key in ipairs(KEYS) do
    if redis.call("EXISTS",key) == 1 then
        redis.call('DEL', key)
        result[#result + 1] = key;
    end
end

return result;
