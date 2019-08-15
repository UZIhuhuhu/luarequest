local http = require("socket.http")
local ltn12 = require("ltn12")

function request(url, method, headers, source)
  local response = {}
  local status, statusCode, responseHeaders = http.request{
    url = url,
    method = method,
    headers = headers,
    source = source,
    sink = ltn12.sink.table(response)
  }
  return { statusCode, responseHeaders, table.concat(response) }
end

return request