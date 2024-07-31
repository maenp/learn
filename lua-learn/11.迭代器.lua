-- 迭代器（iterator）是一种对象，它能够用来遍历标准模板库容器中的部分或全部元素，每个迭代器对象代表容器中的确定的地址。
-- 在 Lua 中迭代器是一种支持指针类型的结构，它可以遍历集合的每一个元素。

array = {"aaa", "vvvv", "ccc"}

for key,value in ipairs(array) 
do
   print(key, value)
end

-- ipairs(array) 会返回 迭代函数、状态常量、控制变量
-- 迭代函数：迭代函数是一个函数，每次迭代都会调用这个函数，迭代函数的返回值是控制变量和状态常量。
-- 状态常量和控制变量作为参数调用迭代函数


-----------------------------------------------------------------------------
function square(iteratorMaxCount,currentNumber)
    if currentNumber<iteratorMaxCount
    then
        currentNumber = currentNumber+1
        return currentNumber, currentNumber*currentNumber
    end
 end
 
for i,n in square,3,0   -- 迭代器，迭代器函数，迭代器函数的初始值，迭代器函数的初始状态 do  
do
    print(i,n)
end

-- square：迭代函数
-- 3：状态常量  iteratorMaxCount
-- 0：控制变量  currentNumber