-- 字符串

local str1 = 'This is a string.'
local str2 = "This is also a string."
local multilineString = [[
This is a multiline string.
It can contain multiple lines of text.
No need for escape characters.
]]

print("\"字符串 1 是\"",str1)
print(str2)
print(multilineString)


local myString = "12345"
local length = string.len(myString)
print("字符串长度是", length)

-- 字符串操作
local str = "Hello World!"
string.upper(str)              -- 将字符串转换为大写
string.lower(str)              -- 将字符串转换为小写
string.reverse(str)            -- 将字符串反转
string.sub(str, 1, 5)          -- 截取字符串，从索引1到5
string.gsub(str, "World", "Lua")   -- 替换字符串中的World为Lua
string.format("Hello %s!", "Lua")  -- 格式化字符串
string.rep(str, 3)                 -- 重复字符串3次
string.find ("Hello Lua user", "Lua", 1)    -- 查找字符串中的Lua，从索引1开始查找
string.match("Hello Lua user", "Lua")       -- 查找字符串中的Lua
string.gmatch("Hello Lua user", "Lua")      -- 查找字符串中的Lua
string.char(65, 66, 67)                    -- 将ASCII码转换为字符并连接
string.byte(str, 1, 5)                     -- 将字符串转换为ASCII码(可以指定某个字符，默认第一个字符)