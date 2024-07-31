--[[
    nil             表示一个无效值（在条件表达式中相当于false）。
    boolean         表示逻辑值true或false。
    number          表示数字值 双精度类型的实浮点数
    string          表示字符串值 字符串由一对双引号或单引号来表示
    function        表示函数值 由 C 或 Lua 编写的函数
    table           表示表值 Lua 中的表（table）其实是一个"关联数组"（associative arrays），数组的索引可以是数字、字符串或表类型。
                    在 Lua 里，table 的创建是通过"构造表达式"来完成，最简单构造表达式是{}，用来创建一个空表。
    userdata        表示C数据值 任意存储在变量中的C数据结构
    thread          表示线程值。
--]]

print(type("Hello world"))      --> string
print(type(10.4*3))             --> number
print(type(print))              --> function
print(type(type))               --> function
print(type(true))               --> boolean
print(type(nil))                --> nil
print(type(type(X)))            --> string

--[[
    nil（空）
        nil 表示一个无效值（在条件表达式中相当于 false）。
        nil 是一个特殊值，表示一个不存在的值。

    boolean（布尔）
        Lua 把 false 和 nil 看作是 false，其他的都为 true，数字 0 也是 true

    number（数字）
        Lua 把数字分为整数和浮点数，整数和浮点数都是 number 类型。
        Lua 允许数字使用指数表示法，如 1.23e-3 或 1.23e+3。
--]]

-- string（字符串）
string1 = "this is string1"
string2 = 'this is string2'
string3 = string1 .. string2
print(string3)                  --> this is string1this is string2

print(string.len(string3))      --> 字符串长度
print(#(string3))               --> 字符串长度

print(string.upper(string3))    --> 字符串转大写
print(string.lower(string3))    --> 字符串转小写
print(string.reverse(string3))  --> 字符串反转

print(string.format("string1: %s, string2: %s", string1, string2))

-- table（表）
table1 = {}
table2 = {
    "string1",
    "string2",
    "string3",
    "string4",
    "string5",
    "string6",
    "string7",
    "string8",
    "string9",
}
table2['key1']='value1'
print('------')
print(table1)
for k, v in pairs(table2) do
    print(k, v)
end
-- 1       string1
-- 2       string2
-- 3       string3
-- 4       string4
-- 5       string5
-- 6       string6
-- 7       string7
-- 8       string8
-- 9       string9
-- key1    value1

-- function（函数）
function func1()
    print("func1")
end
func1()
func2 = function()
    print("func2")
end
func2()
func3 = function(a, b)
    print(a, b)
end
func3(1, 2)


