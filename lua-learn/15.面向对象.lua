Account = {
    balance = 0,
}

function Account.withdraw (v)
    Account.balance = Account.balance - v
end

Account.withdraw(100)


print(Account.balance)



Rectangle = {
    width = 0,
    height = 0,
    area = 0,
}

function Rectangle:new (o, width, height)
    o = o or {}
    setmetatable(o, self) -- 继承 o是子类，self是父类
    self.__index = self
    self.width = width
    self.height = height
    self.area = width * height
    return o
end

function Rectangle:printArea ()
    print("矩形面积为 ",self.area)
end

r = Rectangle:new(nil,10,20)
r:printArea()
print(r.area)
print(r.width)
print(Rectangle.width)

r2 = Rectangle:new(nil,20,30)
r2:printArea()
r:printArea()
print(Rectangle.width)