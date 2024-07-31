--[[
    optional_function_scope function function_name( argument1, argument2, argument3..., argumentn)
        function_body
        return result_params_comma_separated
    end

    optional_function_scope: 该参数是可选的指定函数是全局函数还是局部函数，未设置该参数默认为全局函数，如果你需要设置函数为局部函数需要使用关键字 local。
    function_name: 指定函数名称。
    argument1, argument2, argument3..., argumentn: 函数参数，多个参数以逗号隔开，函数也可以不带参数。
    function_body: 函数体，函数中需要执行的代码语句块。
    result_params_comma_separated: 函数返回值，Lua语言函数可以返回多个值，每个值以逗号隔开。
]]

function max(a, b)
    if a > b then
        return a
    else
        return b
    end
end

print(max(10, 20))
print(max(20, 10))

function maximum (a)
    local mi = 1             -- 最大值索引
    local m = a[mi]          -- 最大值
    for i,val in ipairs(a) do
       if val > m then
           mi = i
           m = val
       end
    end
    return m, mi
end

print(maximum({8,10,23,12,5}))  -- 23 3

-- 剩余参数
function add(a, b, ...)  
    print(a, b)                 --> 3 4
    print(...)                  --> 剩余参数
    print(select('#', ...))     --> 剩余参数个数
    print(select(1, ...))       --> 剩余参数的第一个
    local s = 0  
    for i, v in ipairs{...} do   --> {...} 表示一个由所有变长参数构成的数组  
        s = s + v  
    end  
    return s  
end  
print(add(3,4,5,6,7))