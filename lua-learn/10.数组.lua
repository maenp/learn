-- 数组，就是相同数据类型的元素按一定顺序排列的集合，可以是一维数组和多维数组。
-- 在 Lua 中，数组不是一种特定的数据类型，而是一种用来存储一组值的数据结构。
-- 实际上，Lua 中并没有专门的数组类型，而是使用一种被称为 "table" 的数据结构来实现数组的功能。
-- Lua 数组的索引键值可以使用整数表示，数组的大小不是固定的。
-- 在 Lua 索引值是以 1 为起始，但你也可以指定 0 开始。

-- 创建一个数组
local myArray = {10, 20, 30, 40, 50}

-- 访问数组元素
print(myArray[1])   -- 输出 10
print(myArray[3])   -- 输出 30

-- 计算数组长度
local length = #myArray
print(length)       -- 输出 5

-- 循环遍历数组
for i = 1, #myArray do
    print(myArray[i])
end
-- 输出 10 20 30 40 50

local array2 = {}
array2[-1] = "hello"    -- 索引值为 -1
array2['world'] = "world"
print(array2[-1])
print(array2['world'])

local array3 = {'a','b','c'}
table.remove(array3, 1) -- 删除索引值为 1 的元素
print(array3[1])