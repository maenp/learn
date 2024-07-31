Person = {
    sex = "男",
    name = "无名",
    age = 18,
}

function Person:new(o, name, sex)
    o = o or {}
    setmetatable(o, self)
    self.__index = self
    o.name = name or Person.name
    o.sex = sex or Person.sex
    return o
end

a = Person:new(nil, "张三", "男")
print('a', a.name, a.sex)

b = Person:new(nil, "李四", "女")
print('b', b.name, b.sex)

c = Person:new(nil, "王五")
print('c', c.name, c.sex, c.age)


print('Person',Person.name, Person.sex)