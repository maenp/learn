-- 控制结构的条件表达式结果可以是任何值，Lua认为false和nil为假，true和非nil为真。

if 1 then
    print("1 is true")
end

if 0 then
    print("0 is true")
else
    print("0 is false")
end

if nil then
    print("nil is true")
else
    print("nil is false")
end

if "" then
    print("'' is true")
else
    print("'' is false")
end