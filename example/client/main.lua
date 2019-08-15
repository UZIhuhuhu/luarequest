local request = require("request")
local instance = request("http://127.0.0.1:4444")

print(instance[1])
print(instance[2])
print(instance[3])
