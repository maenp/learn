"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.a = void 0;
let test = 1; // Cannot redeclare block-scoped variable 'test'.ts(2451)
// 所有的ts文件 共用一个作用域 不能重复定义变量
// 在export.ts中定义了test变量，所以在export2.ts中不能再次定义test变量
// 除非在这个文件中使用export导出变量
// 使用export导出变量后这个文件就变成了一个模块，其他文件就不能直接访问这个文件中的变量
exports.a = 2;
