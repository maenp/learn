-- while 循环
i = 1
while i <= 10 do
    print('while', i)
    i = i + 1
end

-- for 循环
for i = 1, 10 do        -- 顺序
    print('for', i)
end
for i = 10, 1, -1 do    -- 倒序
    print('for-倒序', i)
end
for i = 1, 10, 2 do     -- 步长
    print('for-步长', i)
end

arr = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
for i, v in ipairs(arr) do
    print('for-数组', i, v)
end

obj = {name = 'obj', age = 18}
obj['sex'] = '男'
for k, v in pairs(obj) do
    print('for-obj', k, v)
end

