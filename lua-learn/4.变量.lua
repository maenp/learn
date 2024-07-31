a = 5            -- 全局变量
local b = 10     -- 局部变量
print(a)
print(b)

function joke()
    c = 5           -- 全局变量
    local d = 6     -- 局部变量
end

joke()
print(c)
print(d)

do
    local a = 10    -- 局部变量
    print(a)
end
print(a)